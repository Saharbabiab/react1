import { makeAutoObservable, set } from "mobx";
import { getRandomBighead } from "./bighead.jsx";
import { observable, action } from "mobx";

export default class PlayerStore {
  Players = [];
  activePlayer = null;
  constructor() {
    makeAutoObservable(this, {
      Players: observable,
      activePlayer: observable,
      deletePlayer: action,
      add: action,
      getPlayer: action,
      getSize: action,
      getIDs: action,
      getPlayers: action,
      setPlayers: action,
      getActivePlayer: action,
      setActivePlayer: action,
      getRNDplayer: action,
      resetall: action,
    });
  }
  deletePlayer(id) {
    const index = this.Players.findIndex((player) => player.id == id);
    this.Players.splice(index, 1);
  }
  add(newP) {
    this.Players = [...this.Players, newP];
  }
  getPlayer(id) {
    return this.Players.find((player) => player.id == id);
  }
  getSize() {
    return this.Players.length;
  }
  getIDs() {
    let ids = [];
    for (let i = 0; i < this.Players.length; i++) {
      ids.push(this.Players[i].id);
    }
    return ids;
  }
  getPlayers() {
    return this.Players;
  }
  setPlayers(players) {
    this.Players = players;
  }
  getActivePlayer() {
    return this.Players.find((player) => player.id == this.activePlayer);
  }
  setActivePlayer(id) {
    this.activePlayer = id;
  }
  getRNDplayer() {
    //get random id
    let ids = this.getIDs();
    let rndid = ids[Math.floor(Math.random() * ids.length)];
    this.activePlayer = rndid;
    return rndid;
  }
  resetall() {
    for (let i = 0; i < this.Players.length; i++) {
      this.Players[i].points = 0;
      this.Players[i].letters = "";
    }
  }
}
