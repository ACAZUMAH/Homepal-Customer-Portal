
export const Conditional = (props) => {
  
  if (!props.condition) return null;

  return <>{props.children}</>;
};
