const  MongoClient = require('mongodb').MongoClient;
async function main(){
    const uri ="mongodb+srv://NgangMuma:NCRJY7bKhQED0AyL@cluster0.gbznm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    try{
        await client.connect();
    } catch(e){
        console.error(e);
    }finally{
        await client.close();
    }

    
}

main().catch(console.error);