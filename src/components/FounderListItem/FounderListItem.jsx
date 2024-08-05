const FounderListItem = ({founder: {title, name, credential}}) => {
  return (
      <li>
        <h3>Hello, I'm {name}, the {title}!</h3>
        <p>{credential}</p>
      </li>
    );
};
  
export default FounderListItem;

