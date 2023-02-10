import React, { useRef, useImperativeHandle } from 'react';

const Tab = React.forwardRef((props, ref) => {
  const buttonRef = useRef();
  const activate = () => {
    buttonRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: activate
    };
  });

  return (
    <button
      id={props.id}
      data-index={props.index}
      type='button'
      role='tab'
      aria-controls={props.ariaControls}
      aria-selected={props.ariaSelected}
      tabIndex={props.tabIndex}
      ref={buttonRef}
    >
      <span className='focus'>{props.children}</span>
    </button>
  );
});

export default Tab;
