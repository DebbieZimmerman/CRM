/* eslint-disable */
import { observable, action, makeAutoObservable } from 'mobx'
import axios from 'axios'
import {ClientStore} from './ClientStore'

export class GeneralStore {
    constructor() {
        this.clients = []
        this.countries = []
        this.owners = []
        this.emailsTypes = []
        this.countryStats = []
        this.ownerStats = []


        makeAutoObservable(this, {
            clients: observable,
            countries: observable,
            owners: observable,
            emailsTypes: observable,
            getInitialData:action,
            getStats: action,
     
            getClients: action,
            addClient: action,
            updateClient: action,
            deleteClient: action
        })
    }

    getInitialData = async () => {
        await this.getClients()
        await this.getCountries()
        await this.getOwners()
        await this.getEmailTypes()
    }

    getStats = async () => {
        await getCountryStats()
        await getOwnerStats()
    }

    getClients = async () => {
        let {data} = await axios.get("http://localhost:4200/clients")
        this.clients = [...(data[0])]
    }

    getCountries = async () => {
        let { data } = await axios.get("http://localhost:4200/table/country")
        this.countries = data.map(c => ({[c.country]: c.country_id}) )   
    }

    getOwners = async () => {
        let { data } = await axios.get("http://localhost:4200/table/owner")
        this.owners = data.map(o => ({[o.owner]: o.owner_id}) )       
    }

    getEmailTypes = async () => {
        let { data } = await axios.get("http://localhost:4200/table/email_type")
        this.emailsTypes = data.map(e => ({[e.email_type]: e.email_type_id}) )   
    }

    getCountryStats = async () => {
        let { data } = await axios.get("http://localhost:4200/country/stats")
        this.countryStats = data
    }

    getOwnerStats = async () => {
        let { data } = await axios.get("http://localhost:4200/owner/stats")
        this.ownerStats = data
    }

    addClient = async (newClient) => {
        await axios.post('http://localhost:4200/clients', newClient)
        this.getClients()
    }

    updateClient = async (client) => {
        let { data } = await axios.put('http://localhost:4200/clients', client)
        this.clients[this.clients.findIndex(c => c.id === data.id)] = data
    }

    deleteClient = async (id) => {
        await axios.delete(`http://localhost:4200/clients/${id}`)
    }
}

