import { Notebook } from "./models/Notebook";
import { Note } from "./models/Note";
import { Author } from "./models/Author";

let author = new Author();
author.setId(String(Date.now()));
author.setFirstName("Julio");
author.setLastName("Romero");
author.setNacionality("Argentina");
author.setAge(40);

let note1 = new Note();
note1.setId("1");
note1.setTitle("Make English homework");
note1.setDescription("I've to resolve the page 24 of workbook");
note1.setCategory("homework");

let note2 = new Note();
note2.setId("2");
note2.setTitle("Shopping for the week");
note2.setDescription("I've to buy food for the week");
note2.setCategory("homework");

let note3 = new Note();
note3.setId("3");
note3.setTitle("Make English homework");
note3.setDescription("I've to resolve the page 24 of workbook");
note3.setCategory("home todo");

let note4 = new Note();
note4.setId("4");
note4.setTitle("Clean the garage");
note4.setDescription("I've to clean the garage before Friday");
note4.setCategory("home todo");

let note5 = new Note();
note5.setId("5");
note5.setTitle("Walking the dog");
note5.setDescription("I don't have to forget to walk the dog today");
note5.setCategory("home todo");

let myNotebook = new Notebook();
myNotebook.setId(String(Date.now()));
myNotebook.setAuthor(author);
myNotebook.addNote(note1);
myNotebook.addNote(note2);
myNotebook.addNote(note3);
myNotebook.addNote(note4);
myNotebook.addNote(note5);

console.log(myNotebook);

const homeworks = myNotebook.filterNotesByCategory("homework");
console.log("Homeworks: ", homeworks);

const homeToDo = myNotebook.filterNotesByCategory("home todo");
console.log("Home to do: ", homeToDo);
