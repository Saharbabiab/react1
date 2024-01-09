import { makeAutoObservable } from "mobx";
import { observable, action } from "mobx";

export default class WordsStore {
  words = [
    "dog",
    "hello",
    "world",
    "react",
    "redux",
    "javascript",
    "node",
    "express",
    "mongodb",
    "python",
    "django",
    "flask",
    "sql",
    "mysql",
    "postgresql",
    "jquery",
    "angular",
    "vue",
    "ember",
    "backbone",
    "meteor",
    "ruby",
    "rails",
    "php",
    "sass",
    "less",
    "bootstrap",
    "foundation",
    "materialize",
    "wordpress",
    "drupal",
    "magento",
    "joomla",
    "shopify",
    "woocommerce",
    "git",
    "github",
    "bitbucket",
    "heroku",
    "aws",
    "azure",
    "digitalocean",
    "slack",
    "trello",
    "asana",
    "jira",
    "confluence",
    "ubuntu",
    "debian",
    "centos",
    "fedora",
    "kali",
    "arch",
    "linux",
    "windows",
    "macos",
    "ios",
    "android",
    "raspberry",
    "arduino",
    "kubernetes",
    "docker",
    "ansible",
    "puppet",
    "chef",
    "jenkins",
    "circleci",
    "travis",
    "netlify",
    "gcp",
    "firebase",
    "mongodb",
    "redis",
    "graphql",
    "rest",
  ];
  currentWord = "";
  hiddenWord = "";
  currentWordIndex = 0;
  constructor() {
    makeAutoObservable(this, {
      words: observable,
      currentWord: observable,
      hiddenWord: observable,
      currentWordIndex: observable,
      getWord: action,
      getRndWord: action,
      checkLetter: action,
      done: action,
    });
  }
  getWord() {
    return this.words[this.currentWordIndex];
  }
  getRndWord() {
    this.currentWordIndex = Math.floor(Math.random() * this.words.length);
    this.currentWord = this.words[this.currentWordIndex];
    this.hiddenWord = this.currentWord.replace(/[a-z]/g, "_");
    return this.currentWord;
  }
  checkLetter(letter) {
    const index = this.currentWord.indexOf(letter);
    if (index >= 0) {
      this.hiddenWord =
        this.hiddenWord.substring(0, index) +
        letter +
        this.hiddenWord.substring(index + 1);
      return true;
    }
    return false;
  }
  done() {
    return this.hiddenWord.indexOf("_") < 0;
  }
}
