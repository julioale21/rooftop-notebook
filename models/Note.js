"use strict";
exports.__esModule = true;
exports.Note = void 0;
var Note = /** @class */ (function () {
    function Note() {
    }
    Note.prototype.getId = function () {
        return this.id;
    };
    Note.prototype.setId = function (id) {
        this.id = id;
    };
    Note.prototype.getTitle = function () {
        return this.title;
    };
    Note.prototype.setTitle = function (title) {
        this.title = title;
    };
    Note.prototype.getDescription = function () {
        return this.description;
    };
    Note.prototype.setDescription = function (description) {
        this.description = description;
    };
    Note.prototype.getCategory = function () {
        return this.category;
    };
    Note.prototype.setCategory = function (category) {
        this.category = category;
    };
    return Note;
}());
exports.Note = Note;
