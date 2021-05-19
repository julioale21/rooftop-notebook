"use strict";
exports.__esModule = true;
exports.Notebook = void 0;
var Notebook = /** @class */ (function () {
    function Notebook() {
        this.notes = [];
    }
    Notebook.prototype.getId = function () {
        return this.id;
    };
    Notebook.prototype.setId = function (id) {
        this.id = id;
    };
    Notebook.prototype.getAuthor = function () {
        return this.author;
    };
    Notebook.prototype.setAuthor = function (author) {
        this.author = author;
    };
    Notebook.prototype.addNote = function (note) {
        this.notes.push(note);
    };
    Notebook.prototype.getNotes = function () {
        return this.notes;
    };
    Notebook.prototype.filterNotesByCategory = function (category) {
        return this.notes.filter(function (note) { return note.getCategory() === category; });
    };
    return Notebook;
}());
exports.Notebook = Notebook;
