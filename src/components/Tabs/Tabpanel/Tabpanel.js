const Tabpanel = (props) => {
  return (
    <div
      id={props.id}
      role='tabpanel'
      aria-labelledby={props.ariaLabelledby}
      className={props.isHidden ? 'is-hidden' : undefined}
    >
      {props.children}
    </div>
  );
};

export default Tabpanel;
