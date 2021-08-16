import { document } from "../utils/dynamodbClient";
// import dayjs from "dayjs";
import { v4 as uuid } from 'uuid';


interface ICreateTODO {
    title: string;
    deadline: string;
}

interface ITemplate {
    id: string;
    user_id: string;
    title: string;
    done: boolean;
    deadline: string;
}


export const handle = async (event) => {

    const { user_id } = event.pathParameters;
    let { title, deadline } = JSON.parse(event.body) as ICreateTODO;

    const id = uuid();

    const data: ITemplate = {
        id,
        user_id,
        title,
        done: false,
        deadline: new Date(deadline).toUTCString(),
    }

    await document.put({
        TableName: "todos",
        Item: data
    }).promise();

    return {
        statusCode: 201,
        body: JSON.stringify({
            message: "TODO created",
            data
        }),
        headers: {
            "Content-type": "application/json",
        },
    };
};