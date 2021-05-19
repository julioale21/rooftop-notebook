import { Note } from "./Note";
import { Author } from "./Author";

export class Notebook {
  private id: String;
  private author: Author;
  private notes: Note[] = [];

  public getId(): String {
    return this.id;
  }

  public setId(id: String): void {
    this.id = id;
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

  public filterNotesByCategory(category: String): Note[] | null {
    return this.notes.filter((note) => note.getCategory() === category);
  }
}
