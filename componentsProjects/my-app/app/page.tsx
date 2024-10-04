import DropdownMenu from "./components/dropdownMenu";

export default function Home() {
  return (
    <div>
      <DropdownMenu options={["item1", "item2", "item3"]} />
    </div>
  );
}
