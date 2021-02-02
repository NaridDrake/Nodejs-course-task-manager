const express = require('express')
require('./db/mongoose.js')
const rtUser = require('./routers/user')
const rtTask = require('./routers/task')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(rtUser)
app.use(rtTask)

app.listen(port, () => {
    console.log('Server is up and running on port ' + port)
})


