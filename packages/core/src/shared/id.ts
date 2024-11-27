import { v4 as uuidV4, validate } from "uuid";
export default class Id {
  static new(): string {
    return uuidV4();
  }

  static valid(id: string): boolean {
    return validate(id);
  }
}
