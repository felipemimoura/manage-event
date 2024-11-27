import Event from "./model/Event";
import Guest from "./model/Guest";

import completedEvent from "./functions/completedEvent";
import createEmptyEvent from "./functions/createEmptyEvent";
import createEmptyGuest from "./functions/createEmptyGuest";
import processGuest from "./functions/processGuest";
export type { Event, Guest };

export {
  completedEvent,
  createEmptyEvent,
  createEmptyGuest,
  processGuest,
}
