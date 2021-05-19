export class Note {
  private id: String;
  private title: String;
  private description: String;

  constructor() {
    this.id = String(new Date());
  }

  public getTitle(): String {
    return this.title;
  }

  public setTitle(title: String): void {
    this.title = title;
  }

  public getDescription(): String {
    return this.description;
  }

  public setDescription(description: String): void {
    this.description = description;
  }
}
