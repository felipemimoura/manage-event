import { Event, Guest } from "core";
import InfoEvent from "./InfoEvent";
import AccessQrCode from "./AccessQrCode";
import Statistician from "../shared/Statistician";
import GuestList from "./GuestList";

export interface DashboardEventProps {
  event: Event;
  present: Guest[];
  withOut: Guest[];
  total: number;
}
export default function DashboardEvent(props: DashboardEventProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 self-stretch">
        <InfoEvent event={props.event} className="flex-1" />
        <AccessQrCode event={props.event} />
      </div>
      <div className="grid grid-cols-3 gap-6 mt-4">
        <Statistician
          text="Espectativa de condidados"
          value={props.event.publicExpect}
          image="/icones/convidados.svg"
        />
        <Statistician
          text="Confirmações"
          value={props.present.length}
          image="/icones/confirmados.svg"
        />
        <Statistician
          text="Total Confirmado"
          value={props.total}
          image="/icones/acompanhantes.svg"
        />
      </div>

      <button className="botao azul self-end mt-12">
        <span>Atualizar lista de convidados</span>
      </button>
      <span className="flex py-2 text-xl font-bold text-white/80">
        Convidados que confirmaram PRESENCA
      </span>
      <GuestList guest={props.present} />
      <span className="flex py-2 text-xl font-bold text-white/80">
        Convidados que NÃO confirmaram PRESENCA
      </span>
      <GuestList guest={props.withOut} />
    </div>
  );
}
