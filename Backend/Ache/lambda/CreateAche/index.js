const AWS = require('aws-sdk');
const {v4: uuidv4} = require('uuid');


exports.handler = async (event, context) => {
    AWS.config.update({region: "eu-west-1"});
    const documentClient = new AWS.DynamoDB.DocumentClient({region: "eu-west-1"});
    let responseBody = "";
    let statusCode = 0;
    let uuid = uuidv4()
    const {
        city,
        coordinates,
        currency,
        images,
        price,
        roomCount,
        squareMiles,
        street,
        descriptions,
        propertyType,
        ownerId
    } = JSON.parse(event.body);

    const params = {
        TableName: "Homes",
        Item: {
            id: uuid,
            ownerId: ownerId,
            city: city,
            coordinates: coordinates,
            images: images,
            propertyType: propertyType,
            roomCount: roomCount,
            currency: currency,
            price: price,
            descriptions: descriptions,
            squareMiles: squareMiles,
            street: street,
        }
    }
    try {
        const data = await documentClient.put(params).promise();
        responseBody = JSON.stringify("success! Home created with the following id   " + uuid );
        statusCode = 201;
        console.log(data)
    } catch (err) {
        responseBody = `Unable to put product: ${err}`;
        statusCode = 403;
        console.log(err);
    }
    return {
        statusCode: statusCode,
        headers: {
            "Content-Type": "application/json",
            "access-control-allow-origin": "*"
        },
        body: responseBody
    };
}
