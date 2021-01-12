/* eslint-disable */
import { observable, action, makeAutoObservable } from 'mobx'
import axios from 'axios'
import {ClientStore} from './ClientStore'

export class GeneralStore {
    constructor() {
        this.clients = [];
        this.countries = [];
        this.owners = [];
        this.emailsTypes = []


        makeAutoObservable(this, {
            clients: observable,
     
            getClients: action
        })
    }

    getInitialData = async () => {
        await this.getClients()
        await this.getCountries()
        await this.getOwners()
        await this.getEmailTypes()
    }

    getClients = async () => {

        let {data} = await axios.get("http://localhost:4200/clients")
        this.clients = [...(data[0])]
    }

    getCountries = async () => {
        let countries = (await axios.get("http://localhost:4200/table/country")).data
        this.countries = countries.map(c => ({[c.country]: c.country_id}) )   
    }

    getOwners = async () => {
        let owners = await axios.get("http://localhost:4200/table/owner").data
        this.owners = owners.map(o => ({[o.owner]: o.owner_id}) )       
    }

    getEmailTypes = async () => {
        let emailTypes = await axios.get("http://localhost:4200/table/email_type").data
        this.emailsTypes = emailTypes.map(e => ({[e.email_type]: e.email_type_id}) )   
    }
}

