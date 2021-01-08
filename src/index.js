const { Client } = require('pg')
const express = require('express')

const app = express()
const port = process.env.APP_PORT ? parseInt(process.env.APP_PORT, 10) : 4001;
const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5433,
})
client.connect()

app.get('/', (req, res) => {
    console.log('route: /')
    res.send('Hello World!')
})
  
app.get('/healthcheck/db', (req, res) => {
    console.log('route: /healthcheck/db')
    client.query('SELECT $1::text as message', ['[db]: Hello world!'])
        .then(({ rows }) => {
            return rows[0].message;
        })
        .then(msg => {
            console.log(`db response: ${msg}`)
            res.send(msg)
        })
})

app.listen(port, () => {
    console.log(`Example app listening at :${port}`)
})
  