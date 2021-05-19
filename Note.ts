export class Note {
  private id: String;
  private title: String;
  private description: String;

  constructor() {
    this.id = String(new Date());
  }
}