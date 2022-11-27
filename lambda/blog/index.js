const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });
const tableName = process.env.BACKEND_TABLE;

exports.handler = async (event) => {
    const method = event.httpMethod;
    const body = JSON.parse(event.body);
    const query = event.queryStringParameters;

    const notFoundMessage = {
        statusCode: 404,
        headers: {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": method
        },
        body: JSON.stringify({message: "Path not found"})
    };
    
    if (method === "POST") {
        const timestamp = Date.now();
        const saveParams = {
            TableName: tableName,
            Item: {
                "data_type": { S: `blog` },
                "uuid": { S: `${timestamp}` },
                "title": { S: body.title },
                "message": { S: body.message },
                "name": { S: body.name },
            }
        };
        await dynamodb.putItem(saveParams).promise();
        return {
            statusCode: 201,
            headers: {
                "Access-Control-Allow-Headers" : "Content-Type",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": method
            },
            body: JSON.stringify({message: "Blog created"})
        };
    } else if (method === "GET" && query == null) {
        const data = await dynamodb.scan({ TableName: tableName }).promise();

        const posts = data.Items.filter((item) => {
            return item.data_type.S === "blog";
        });

        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Headers" : "Content-Type",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": method
            },
            body: JSON.stringify(posts)
        };
    } else if (method === "GET") {
        const data = await dynamodb.scan({ TableName: tableName }).promise();

        const posts = data.Items.filter((item) => {
            return item.data_type.S === "blog" && item.uuid.S === `${query.uuid}`;
        });
        
        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Headers" : "Content-Type",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": method
            },
            body: JSON.stringify(posts[0])
        };
    }
    
    return notFoundMessage;
};