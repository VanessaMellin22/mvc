import express from "express"

const routes = express.Router()

let lista = ['bruno', 'wagner', 'luana', 'lucas', 'kaua']

routes.get('/', (req,res)=>{
return res.status(200).json('hello word!')
})

routes.get('/:nome', (req, res) => {
    const {nome} = req.params;
    if (lista.includes(nome)) {
      return res.status(200).json(`${nome} está na lista de nomes.`);
    } else {
        return res.status(200).json(`${nome} não está na lista de nomes.`);
    }
  });

export default routes