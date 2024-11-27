export default interface Guest {
  id: string;
  name: string;
  email: string;
  confirm: boolean;
  hasAnEscort: boolean;
  qtdEscort: number;
}
