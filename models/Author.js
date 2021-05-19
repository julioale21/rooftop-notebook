"use strict";
exports.__esModule = true;
exports.Author = void 0;
var Author = /** @class */ (function () {
    function Author() {
    }
    Author.prototype.getId = function () {
        return this.id;
    };
    Author.prototype.setId = function (id) {
        this.id = id;
    };
    Author.prototype.getFirstName = function () {
        return this.firstName;
    };
    Author.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Author.prototype.getLastName = function () {
        return this.lastName;
    };
    Author.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    Author.prototype.getAge = function () {
        return this.age;
    };
    Author.prototype.setAge = function (age) {
        this.age = age;
    };
    Author.prototype.getNacionality = function () {
        return this.nacionality;
    };
    Author.prototype.setNacionality = function (nacionality) {
        this.nacionality = nacionality;
    };
    return Author;
}());
exports.Author = Author;
