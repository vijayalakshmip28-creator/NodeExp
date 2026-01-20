const {MongoClient}=require("mongodb")
const path="mongodb://127.0.0.1:27017/"
const dbname="employee"
const colname="student"
try{
    const client=new MongoClient(path)
    client.connect()
    console.log("connection success")
    const inp={mark:{$lt:90}}
    const dataset=client.db(dbname).collection(colname).deleteOne(inp)
    dataset.then((result)=>{
        console.log("successfully deleted",result)
    })
}
catch{
    console.log("error!!")
}