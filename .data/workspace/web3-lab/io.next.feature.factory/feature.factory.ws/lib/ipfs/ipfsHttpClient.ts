import { create as ipfsHttpClient } from 'ipfs-http-client'


let ipfsUrl: string = "https://ipfs.infura.io:5001/api/v0"
const client = ipfsHttpClient({ url: ipfsUrl })

const addFile = async (file: any): Promise<any> => {
    try {
        const added = await client.add(
            file,
            {
                progress: (prog) => console.log(`received: ${prog}`)
            }
        )
        const url = `https://ipfs.infura.io/ipfs/${added.path}`
        return url
    } catch (err) {
        console.log(err)
    }
}

const addData = async (data: any): Promise<any> => {
    try {
        const added = await client.add(
            data,
            {
                progress: (prog) => console.log(`received: ${prog}`)
            })
        const url = `https://ipfs.infura.io/ipfs/${added.path}`
        return url
    } catch (error) {
        console.log(`Error uploading file: `, error)
    }
}

export { addFile, addData }