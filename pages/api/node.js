import clientPromise from '../../lib/mongodb'

export default async (req, res)=>{
    const client = await clientPromise
    const db = client.db('myFirstDatabase');

    const data = await db.collection("portfolios").find({"useNode":"on"}).limit(20).toArray()
    res.json(data)

}