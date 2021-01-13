/* eslint-disable */
import { observable, action, makeAutoObservable } from 'mobx'

export class InputStore {
    constructor() {
        this.first = '',
        this.last = '',
        this.email = '',
        this.date = '',
        this.sold = false,
        this.owner_id = '',
        this.country_id = '',
        this.email_type_id = '',
        

        makeAutoObservable(this, {
            first: observable,
            last: observable,
            email: observable,
            date: observable,
            sold: observable,
            owner_id: observable,
            country_id: observable,
            email_type_id: observable,
            handleInput: action,
            handleCheckbox: action
        })
    }

    handleInput = ({ target }) => {
        this[target.name] = target.value
    }

    handleCheckbox = () => {
        this.sold = !this.sold
    }

}

