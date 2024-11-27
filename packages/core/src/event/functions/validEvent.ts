import Event from "../model/Event";

export default function validEvent(event: Partial<Event>): string[] {
  const erros: string[] = [];

  if (!event.alias) {
    erros.push("Alias é obrigatório");
  }

  if (!event.name) {
    erros.push("Nome é obrigatório");
  }

  if (!event.description) {
    erros.push("Descrição é obrigatória");
  }

  if (!event.date) {
    erros.push("Data é obrigatória");
  }

  if (!event.local) {
    erros.push("Local é obrigatório");
  }

  if (!event.publicExpect || event.publicExpect < 1) {
    erros.push("Público esperado é obrigatório");
  }

  if (!event.image) {
    erros.push("Imagem é obrigatória");
  }

  if (!event.backgroundImage) {
    erros.push("Imagem de fundo é obrigatória");
  }

  return erros;
}
