const express = require('express')
const router = express.Router()
const mysql2 =require('mysql2')
const db = require('../db')


router.get('/product',(req,resp)=>{

    const statement =`select * from emp`
    db.execute(statement,(error,data)=>{
        if(error){
            resp.send(error)
        }
        else{
            resp.send(data)
        }
    })
    
})



router.post('/product',(req,resp)=>{

    const{pid,ename,salary} =req.body
    const statement=`insert into emp values(${pid},'${ename}',${salary})`
    db.execute(statement,(error,data)=>{
        if(error){
            resp.send(error)
        }
        else{
            resp.send(data)
        }
    })

})
router.put('/product/:pid',(req,resp)=>{
    const{pid}=req.params
    const{ename}=req.body
    var statement=`update emp set ename = '${ename}' where pid=${pid} `
    db.execute(statement,(error,data)=>{
        if(error){
            resp.send(error)
        }
        else{
            resp.send(data)
        }
    })
})

router.delete('/product/:pid',(req,resp)=>{
    const{pid}=req.params
    var statement=`delete from emp where pid=${pid}`
    db.execute(statement,(error,data)=>{
    if(error){
        resp.send(error)
    }
    else{
        resp.send(data)
    }
})
})

module.exports=router