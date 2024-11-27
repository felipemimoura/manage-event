export default class Data {
  static format(data: Date): string {
    const pad = (n: number) => n.toString().padStart(2, "0");

    const d = data ?? new Date();

    const year = d.getFullYear();
    const month = pad(d.getMonth() + 1);
    const day = pad(d.getDate());
    const hour = pad(d.getHours());
    const minutes = pad(d.getMinutes());

    return `${year}-${month}-${day}T${hour}:${minutes}`;
  }

  static parse(data: string): Date {
    const [year, month, day] = data.split("T")[0].split("-");
    const [hour, minutes] = data.split("T")[1].split(":");

    return new Date(
      parseInt(year),
      parseInt(month) - 1,
      parseInt(day),
      parseInt(hour),
      parseInt(minutes)
    );
  }
}
