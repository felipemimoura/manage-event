"use client";

import DashboardEvent from "@/components/event/DashboardEvent";
import FormEventPasswrod from "@/components/event/FormEventPassword";
import { eventos, Event, Guest } from "core";
import { use, useEffect, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function EventAdminPage(props: any) {
  const params: any = use(props.params);
  const id = params.todos[0];
  const [event, setEvent] = useState<Event | undefined>(undefined);
  const [password, setPassword] = useState<string | null>(
    params.todos[1] ?? null
  );

  const confirmed = event?.guest.filter((g) => g.confirm) ?? [];
  const notConfirmed = event?.guest.filter((g) => !g.confirm) ?? [];

  const total =
    confirmed.reduce((total: number, guest: Guest) => {
      return total + guest.qtdEscort + 1;
    }, 0) ?? 0;

  function loadEvent() {
    const findEvent = eventos.find(
      (event) => event.id === id && event.password === password
    );

    setEvent(findEvent);
  }

  useEffect(() => {
    loadEvent();
  }, [id, password]);

  return (
    <div className="flex flex-col items-center">
      {event ? (
        <DashboardEvent present={confirmed} withOut={notConfirmed} event={event} total={total} />
      ) : (
        <FormEventPasswrod />
      )}
    </div>
  );
}
