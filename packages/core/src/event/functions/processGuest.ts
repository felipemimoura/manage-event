import Guest from "../model/Guest";
import validGuest from "./validGuest";

export default function processGuest(guest: Partial<Guest>): Guest {
  const errors = validGuest(guest);

  if (errors.length) {
    throw new Error(errors.join("\n"));
  }

  const qtdEscort = guest.qtdEscort ?? 0;

  const hasAnEscort = guest.hasAnEscort && guest.confirm && qtdEscort > 0;

  const updatedGuest = {
    ...guest,
    hasAnEscort,
    qtdEscort: hasAnEscort ? qtdEscort : 0,
  } as Guest;

  return updatedGuest
}
