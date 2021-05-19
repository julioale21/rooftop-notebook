import { Note } from "./Note";
import { Author } from "./Author";

export class Notebook {
  private id: String;
  private author: Author;
  private notes: Note[] = [];

  constructor() {
    this.id = String(new Date());
  }

  public getAuthor(): Author {
    return this.author;
  }

  public setAuthor(author: Author): void {
    this.author = author;
  }

  public addNote(note: Note): void {
    this.notes.push(note);
  }

  public getNotes(): Note[] {
    return this.notes;
  }

  public filterByCategory(category: String): Note[] | null {
    return this.notes.filter((note) => note.getCategory() === category);
  }
}
