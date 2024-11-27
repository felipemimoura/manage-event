import { Id, Password } from "../../shared";
import validEvent from "./validEvent";
import Event from "../model/Event";

export default function completedEvent(event: Partial<Event>): Event {
  const erros = validEvent(event);

  if (erros.length) {
    throw new Error(erros.join("\n"));
  }

  const completedEvent: Event = {
    ...event,
    id: event.id ?? Id.new(),
    password: event.password ?? Password.create(),
    publicExpect: +(event.publicExpect ?? 1),
  } as Event;

  return completedEvent;
}
