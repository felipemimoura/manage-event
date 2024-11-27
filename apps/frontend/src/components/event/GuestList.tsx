import { Guest } from "core";
import GuestItem from "./Guest";

export interface GuestListProps {
  guest: Guest[];
}
export default function GuestList(props: GuestListProps) {
  return (
    <div>
      <ul className="flex flex-col gap-2">
        {props.guest.map((element) => (
          <GuestItem key={element.id} guest={element} />
        ))}
      </ul>
    </div>
  );
}
