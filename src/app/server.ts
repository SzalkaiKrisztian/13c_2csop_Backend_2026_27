import express from "express"
import type {Request, Response} from "express"


const  app = express();
app.use(express.urlencoded({ extended: true }));

app.get('/',(_req:Request,res:Response) => {
    res.send("A szerver fut!")
})
app.get('/products',(req:Request,res:Response) => {
    res.json([{id: 1, name: "Termék 1"}, {id: 2, name: "Termék 2"}])
})

app.post("/",(req:Request,res:Response) => {
    console.log(req.body)
    res.json(req.body)
})

app.listen(3000, () => {
    console.log("Fut az express webszerver")
})