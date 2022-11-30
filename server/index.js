const express = require('express')
const config = require('config')
const mongoose = require('mongoose');
const cors = require('cors')
const taskRouter = require('./routes/taskRoutes')
const projectRouter = require('./routes/projectRoutes')
const app = express()
const PORT  = 5000

app.use(cors())
app.use(express.json())
app.use('/api/tasks', taskRouter)
app.use('/api/projects', projectRouter)

const start = async () => {
    try {
        mongoose.connect(config.get('dbUrl'), {
            useNewUrlParser:true,
            useUnifiedTopology:true
        })

        app.listen(PORT, () => console.log(`Server is running on ${PORT}`))
    } catch(e) {
        console.log(e)
    }
}

start()