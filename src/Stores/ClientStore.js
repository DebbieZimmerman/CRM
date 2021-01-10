/* eslint-disable */
import { observable, action, makeAutoObservable } from 'mobx'
import axios from 'axios'

export class ClientStore {
    constructor() {
        // this.name = '';
        // this.numPeople = 0;

        makeAutoObservable(this, {
            // name: observable,
            // numPeople: observable,
            // handleInput: action
        })
    }

    // handleInput = (name, value) => {
    //     this[name] = value
    // }

    getClients = () => {
        
    }

}
