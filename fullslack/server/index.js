import { Express } from 'express'

const app = Express()


app.get('/pegar', function (reg, res){
    res.send('enviar esta mensagem')
})

app.listen(8000)
