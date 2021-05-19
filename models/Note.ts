export class Note {
  private id: String;
  private title: String;
  private description: String;
  private category: String;

  public getId(): String {
    return this.id;
  }

  public setId(id: String): void {
    this.id = id;
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

  public getCategory(): String {
    return this.category;
  }

  public setCategory(category: String): void {
    this.category = category;
  }
}
