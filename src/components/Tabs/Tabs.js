import { useState } from 'react';

import Tablist from './Tablist/Tablist';
import Tabpanel from './Tabpanel/Tabpanel';

const DUMMY_TABPANEL_CONTENT = [
  <p>
    <a href="https://en.wikipedia.org/wiki/Maria_Theresia_Ahlefeldt">
      Maria Theresia Ahlefeldt
    </a> (16 January 1755 – 20 December 1810) was a Danish, (originally German), composer. She is known as the first female composer in Denmark. Maria Theresia composed music for several ballets, operas, and plays of the royal theatre. She was given good critic as a composer and described as a “
    <span lang="da">
      virkelig Tonekunstnerinde
    </span>
    ” ('a True Artist of Music').
  </p>,
  <p>
    <a href="https://en.wikipedia.org/wiki/Joachim_Andersen_(composer)">
      Carl Joachim Andersen
    </a> (29 April 1847 – 7 May 1909) was a Danish flutist, conductor and composer born in Copenhagen, son of the flutist Christian Joachim Andersen. Both as a virtuoso and as composer of flute music, he is considered one of the best of his time. He was considered to be a tough leader and teacher and demanded as such a lot from his orchestras but through that style he reached a high level.
  </p>,
  <p>
    <a href="https://en.wikipedia.org/wiki/Ida_Henriette_da_Fonseca">
      Ida Henriette da Fonseca
    </a> (July 27, 1802 – July 6, 1858) was a Danish opera singer and composer.  Ida Henriette da Fonseca was the daughter of Abraham da Fonseca (1776–1849) and Marie Sofie Kiærskou (1784–1863). She and her sister Emilie da Fonseca were students of Giuseppe Siboni, choir master of the Opera in Copenhagen. She was given a place at the royal Opera alongside her sister the same year she debuted in 1827.
  </p>,
  <p>
    <a href="https://en.wikipedia.org/wiki/Peter_Lange-M%C3%BCller">
      Peter Erasmus Lange-Müller
    </a> (1 December 1850 – 26 February 1926) was a Danish composer and pianist. His compositional style was influenced by Danish folk music and by the work of Robert Schumann; Johannes Brahms; and his Danish countrymen, including J.P.E. Hartmann.
  </p>
];

const Tabs = (props) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabSelectHandler = (index) => {
    setSelectedTab(index);
  };

  const panels = DUMMY_TABPANEL_CONTENT.map((item, i) => (
    <Tabpanel
      key={i}
      id={`tabpanel-${i + 1}`}
      ariaLabelledby={`tab-${i + 1}`}
      isHidden={selectedTab !== i}
    >
      {item}
    </Tabpanel>
  ));

  return (
    <div className='tabs'>
      <h3 id='tablist-1'>Danish Composers</h3>
      <Tablist
        ariaLabelledby='tablist-1'
        selectedTab={selectedTab}
        onTabSelect={tabSelectHandler}
      />
      {panels}
    </div>
  );
};

export default Tabs;
