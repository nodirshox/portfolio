const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });
const tableName = process.env.TABLE_NAME;

exports.handler = async (event) => {
    const body = JSON.parse(event.Records[0].body);
    const message = JSON.parse(body.Message);
    
    const timestamp = Date.now();
    
    const saveParams = {
        TableName: tableName,
        Item: {
            "data_type": { S: `contact` },
            "uuid": { S: `${timestamp}` },
            "title": { S: message.title },
            "message": { S: message.message },
            "email": { S: message.email },
            "name": { S: message.name },
            "phone": { S: message.phone }
        }
    };
    
    await dynamodb.putItem(saveParams).promise();
    return {
        statusCode: 201,
        body: JSON.stringify({message: "Item created"})
    };
};
