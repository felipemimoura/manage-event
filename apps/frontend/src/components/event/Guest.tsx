import { Guest } from "core";

export interface GuestItemProps {
  guest: Guest;
}
export default function GuestItem(props: GuestItemProps) {
  return (
    <li className="flex justify-between bg-black/40 rounded-md px-6 border border-zinc-800 py-3">
      <div className="flex flex-col">
        <span className="text-xl font-bold">{props.guest.name}</span>
        <span className="text-sm text-zinc-400">{props.guest.email}</span>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-sm text-zinc-400">Aconpanhantes</span>
        <span className="text-xl font-bold">{props.guest.qtdEscort}</span>
      </div>
    </li>
  );
}
