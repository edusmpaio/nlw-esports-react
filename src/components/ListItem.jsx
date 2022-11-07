export default function ListItem(props) {
  return (
    <li>
      <a href={props.href} target="_blank">
        <img src={props.imageSrc} alt={props.alt} />
      </a>
    </li>
  );
}
