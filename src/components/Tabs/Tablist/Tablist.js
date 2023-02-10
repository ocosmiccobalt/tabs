import Tab from './Tab';
import {
  checkArrowRight,
  checkArrowLeft,
  checkEnd,
  checkHome
} from '../../../util/checkKey';

const NAMES = [
  'Maria Ahlefeldt',
  'Carl Andersen',
  'Ida da Fonseca',
  'Peter Lange-Müller'
];

const Tablist = (props) => {
  const tabs = NAMES.map((item, i) => {
    const selected = props.selectedTab === i;
    const tabIndex = props.selectedTab === i ? 0 : -1;
    const focused = props.focus === i;

    return (
      <Tab
        id={`tab-${i + 1}`}
        key={i}
        index={i}
        ariaControls={`tabpanel-${i + 1}`}
        ariaSelected={selected}
        tabIndex={tabIndex}
        focused={focused}
      >
        {item}
      </Tab>
    );
  });

  const tablistClickHandler = (evt) => {
    const target = evt.target.closest('[role="tab"]');

    if (target) {
      const index = +target.dataset.index;
      evt.preventDefault();
      props.onTabSelect(index);
    }
  };

  const tablistKeyDownHandler = (evt) => {
    const target = evt.target;

    if (target) {
      let index = +target.dataset.index;
      const truthy = true;
      const handleKeyDown = (index) => {
        evt.preventDefault();
        props.onTabSelect(index);
      };

      switch (truthy) {
        case checkArrowRight(evt):
          index++;
          // If we're at the end, go to the start
          if (index >= tabs.length) {
            index = 0;
          }
          handleKeyDown(index);
          break;

        case checkArrowLeft(evt):
          index--;
          // If we're at the start, move to the end
          if (index < 0) {
            index = tabs.length - 1;
          }
          handleKeyDown(index);
          break;

        case checkEnd(evt):
          handleKeyDown(tabs.length - 1);
          break;

        case checkHome(evt):
          handleKeyDown(0);
          break;

        default:
          break;
      }
    }
  };

  return (
    <div
      role='tablist'
      aria-labelledby={props.ariaLabelledby}
      className='automatic'
      onClick={tablistClickHandler}
      onKeyDown={tablistKeyDownHandler}
    >
      {tabs}
    </div>
  );
};

export default Tablist;
