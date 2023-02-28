import ListItem from "./ListItem";

export default function List() {
  return (
    <ul>
      {new Array(10).fill(0).map((child, index) => {
        return <ListItem key={index}></ListItem>;
      })}
    </ul>
  );
}
