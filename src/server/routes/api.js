const express = require('express')
const router = express.Router()
// const Sequelize = require('sequelize')

// const sequelize = new Sequelize('mysql://root:@localhost/sql_crm')

router.get(`/sanity`, (req, res) => {
    res.send('Route works')
})

router.get('/clients', async (req, res) => {
    try {
        const clients = await sequelize.query(
            `SELECT * 
            FROM client AS cl 
            ORDER BY last ASC
        `)
        // JOIN country AS co,  
        //         email_type AS e, 
        //         owner AS o
        //     ON cl.email_type_id = e.id, 
        //         cl.country = co.id,
        //         cl.owner = o.id
        res.send(clients)
    } catch (err) {
        console.log(err)
        res.send(err)
    }
})

// router.get('/transaction/categories', async (req, res) => {
//     try {
//         const transactions = await Transaction.aggregate()
//         console.log('transactions', transactions)
//         res.send(transactions)
//     } catch (err) {
//         console.log(err.message)
//         res.send(err.message)
//     }
// })

// router.post('/transaction', async (req, res) => {
//     console.log('trying to post transaction to db')
//     const transaction = new Transaction({ ...req.body })
//     await transaction.save()
//     console.log(transaction)
//     res.end()
// })

// router.delete('/transaction/:id', async (req, res) => {
//     const id = req.params.id
//     await Transaction.findOneAndDelete({ _id: id })
//     res.end()
// })

module.exports = router