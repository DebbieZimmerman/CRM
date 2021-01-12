const express = require('express')
const router = express.Router()
const Sequelize = require('sequelize')

const sequelize = new Sequelize('mysql://root:@localhost/sql_crm')

router.get(`/sanity`, (req, res) => {
    res.send('Route works')
})

router.get('/clients', async (req, res) => {
    try {
        let query = `
            SELECT cl.id, cl.first, cl.last, cl.email, cl.sold, cl.date, email_type.email_type, owner.owner, country.country
            FROM client AS cl
            INNER JOIN country ON cl.country_id = country.id 
            INNER JOIN owner ON cl.owner_id = owner.id
            INNER JOIN email_type ON cl.email_type_id = email_type.id
            ORDER BY cl.last`
        let results = await sequelize.query(query)
        res.send(results)
    } catch (err) {
        console.log(err)
        res.send(err)
    }
})

router.get('/table/:type', async (req, res) => {
    try {
        const { type } = req.params
        const results = await sequelize.query(
            `SELECT  * FROM ${type}
        `)
        res.send(results[0])
    } catch (err) {
        console.log(err)
        res.send(err)
    }
})

router.post('/clients', async (req, res) => {
    try {
        const c = ({ ...req.body })
        let query =
            `INSERT INTO client VALUES (null, '${c.first}', '${c.last}', '${c.email}', ${c.sold}, '${c.date}', ${c.email_type}, ${c.owner}, ${c.country})`
        let result = await sequelize.query(query)
        console.log(result[0])
        res.send(result[0])
    } catch (err) {
        console.log(err)
        res.send(err)
    }
})

router.put('/clients', async (req, res) => {
    try {
        console.log('trying to update client to db')
        const c = ({ ...req.body })
        console.log(c)
        let query = `
        UPDATE client
        SET first = '${c.first}', last = '${c.last}', email = '${c.email}', sold = ${c.sold}, date = '${c.date}', email_type_id = ${c.email_type}, owner_id = ${c.owner}, country_id = ${c.country}
        WHERE client.id = ${c.id}`
        let result = await sequelize.query(query)
        res.send(result[0])
    } catch (err) {
        console.log(err)
        res.send(err)
    }
})

router.delete('/clients/:id', async (req, res) => {
    try {
        let query =
            `DELETE FROM client WHERE client.id = ${id}`
        let result = await sequelize.query(query)
        res.send(result)
    } catch (err) {
        res.send(err)
    }
})

router.get('/country/stats', async (req, res) => {
    try {
        let query = 
            `SELECT country, COUNT(*) FROM country  
            INNER JOIN client ON country.id = client.country_id
            GROUP BY country;`

        let result = await sequelize.query(query)
        res.send(result[0])
    } catch (err) {
        res.send(err)
    }
})
router.get('/owner/stats', async (req, res) => {
    try {
        let query = 
            `SELECT owner, COUNT(*) FROM owner
            INNER JOIN client ON owner.id = client.owner_id
            GROUP BY owner;`

        let result = await sequelize.query(query)
        res.send(result[0])
    } catch (err) {
        res.send(err)
    }
})

module.exports = router