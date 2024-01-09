import { makeAutoObservable } from "mobx";
import { observable, action } from "mobx";

export default class LettersStore {
  letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  wrongLetter = [];
  constructor() {
    makeAutoObservable(this, {
      letters: observable,
      wrongLetter: observable,
      getLetters: action,
      getRndLetter: action,
      getWrongLetter: action,
      setWrongLetter: action,
      reset: action,
    });
  }
  getLetters() {
    return this.letters;
  }
  getRndLetter() {
    const index = Math.floor(Math.random() * this.letters.length);
    const letter = this.letters[index];
    this.letters.splice(index, 1);
    return letter;
  }
  getWrongLetter() {
    return this.wrongLetter;
  }
  setWrongLetter(letter) {
    this.wrongLetter.push(letter);
    this.letters = this.letters.filter((l) => l != letter);
  }
  reset() {
    this.letters = [...this.letters, ...this.wrongLetter];
    this.wrongLetter = [];
  }
}
