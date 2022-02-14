import { listenerCount } from "process";
import { ReactNode } from "react";

export interface HeadingProps {
  title: string;
}

export function Heading({ title }: HeadingProps) {
  return <h3>{title}</h3>;
}
type ListComonent = <ListItem>({
    items,
    render,
  }: {
    items: ListItem[];
    render: (item: ListItem) => ReactNode;
  }) => ReactNode 

export const List:ListComonent = ({ items, render }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
};

const ExtraReactComponent = () => {
  return (
    <div>
      <Heading title="hello" />
      <List items={["a", "b", "c"]} render={(str) => <strong>{str}</strong>} />
    </div>
  );
};

export default ExtraReactComponent;
