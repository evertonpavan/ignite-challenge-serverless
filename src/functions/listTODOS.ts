import { APIGatewayProxyHandler } from "aws-lambda";

import { document } from "../utils/dynamodbClient";

export const handle: APIGatewayProxyHandler = async (event) => {

    const { user_id } = event.pathParameters;

    const response = await document
        .scan({
            TableName: 'todos',
            FilterExpression: ':user_id = user_id',
            ExpressionAttributeValues: {
                ':user_id': user_id,
            },
        })
        .promise();

    const userTODOS = response.Items

    if (userTODOS) {
        return {
            statusCode: 200,
            body: JSON.stringify({
                userTODOS,
            })
        }
    };

    return {
        statusCode: 400,
        body: JSON.stringify({
            message: "There is not TODOS for this user",
        })
    };
}