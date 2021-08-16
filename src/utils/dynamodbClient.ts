import { DynamoDB } from "aws-sdk";

const options = {
    region: "localhost",
    endpoint: "http://localhost:8000",
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_SECRET, 
}

const isOffline = () => {
    return process.env.IS_OFFLINE;
}


export const document = isOffline() 
? new DynamoDB.DocumentClient(options) 
: new DynamoDB.DocumentClient();
