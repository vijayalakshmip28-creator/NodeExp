const {MongoClient}=require("mongodb")
const path="mongodb://127.0.0.1:27017/"
const dbname="employee"
const colname="student"
try{
    const client=new MongoClient(path)
    client.connect()
    console.log("connection success")
    const  inp=[{eno:4,ename:'thulasi',mark:85},{eno:5,ename:'Muni',mark:99},{eno:6,ename:'abi',mark:87}]
    const dbset=client.db(dbname).collection(colname).insertMany(inp)
    dbset.then((result)=>{
   // client.db(dbname).collection(colname).insertOne(inp)
    console.log("Successfully inserted",result)
    })
}
catch{
    console.log("error!!!!!!!!")
}