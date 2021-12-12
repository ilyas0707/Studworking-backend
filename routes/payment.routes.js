const { Router } = require("express")
const Payment = require("../models/Payment")
const router = Router()

router.post("/add", async (req, res) => {
    try {

        const { paymentId, title, value } = req.body

        const payment = new Payment({
            paymentId, title, value
        })

        await payment.save()

        res.status(201).json({ payment, message: "Платёж добавлен!" })

    } catch (e) {
        res.status(500).json({ message: "Поля не должны быть пустыми!" })
    }
})

router.get("/:id", [],  async (req, res) => {
    try {
        await Payment.find((error, data) => {
            if (error) {
                return next(error)
            } else {
                res.json(data)
            }
        })
    } catch (e) {
        res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" })
    }
})

// router.post("/change", [], async (req, res) => {
//     try {
//         const { name, balance } = req.body
//         await Profile.findOneAndUpdate(
//             { name: name },
//             { $set: {balance: balance}},
//             (err, data) => {
//                 if (err) {
//                     return next(err)
//                 } else {
//                     res.status(201).json({ message: "Данные измененны!" })
//                 }
//             }
//         )
//     } catch (e) {
//         res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" })
//     }
// })

router.delete('/delete/:id', [], async (req, res, next) => {
    try {
        await Payment.findByIdAndRemove(req.params.id, (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.status(200).json({
                    msg: data
                })
            }
        })
    } catch (e) {
        res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" })
    } 
})

module.exports = router