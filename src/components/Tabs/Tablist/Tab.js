import { useRef, useEffect } from 'react';

const Tab = (props) => {
  const buttonRef = useRef();
  const { ariaSelected, focused } = props;

  useEffect(() => {
    if (ariaSelected && focused) {
      buttonRef.current.focus();
    }
  }, [ariaSelected, focused]);

  return (
    <button
      id={props.id}
      data-index={props.index}
      type='button'
      role='tab'
      aria-controls={props.ariaControls}
      aria-selected={ariaSelected}
      tabIndex={props.tabIndex}
      ref={buttonRef}
    >
      <span className='focus'>{props.children}</span>
    </button>
  );
};

export default Tab;
