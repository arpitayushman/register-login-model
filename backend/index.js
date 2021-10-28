const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const { application, response } = require('express')

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/myLoginRegisterDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("Database connected")
})

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        unique: true,
        required: false
    },
    email: {
        type: String,
        required: false,
        unique: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }, createdAt: {
        type: Date,
        default: Date.now
    }
})

const User = new mongoose.model("User", userSchema)

//routes
app.post("/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
})
// app.post("/register", (req, res) => {
//     const { name, phone, email, username, password, address } = req.body
//     User.findOne({ email: email }, (err, user) => {
//         if (user) {
//             res.send({ message: "User already registered!!" })
//         } else {
//             const user = new User({
//                 name:name,
//                 phone:phone,
//                 email:email,
//                 username: username,
//                 password:password,
//                 address:body.address
//             })
//             user.save(err => {
//                 if (err) {
//                     res.send(err)
//                 } else {
//                     res.send({ message: "Successfully Registered" })
//                 }
//             })
//         }

//     })
// })
app.post("/register", (req, res) => {
    const { name, phone, email, username, password, address } = req.body
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send({ message: "User already registerd" })
        } else {
            const user = new User({
                name,
                phone,
                email,
                username,
                password,
                address
            })
            user.save(err => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({ message: "Successfully Registered, Please login now." })
                }
            })
        }
    })

})
app.listen(9002, () => {
    console.log("Backend started running at port 9002")
})