const AWS = require('aws-sdk');

AWS.config.update({ region: 'ap-south-1' });

const dynamodb = new AWS.DynamoDB();

dynamodb.listTables({}, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

// let params = {
//   ExclusiveStartTableName: 'STRING_VALUE',
//   Limit: 'NUMBER_VALUE',
// };
// dynamodb.listTables(params, function (err, data) {
//   if (err) console.log(err, err.stack); // an error occurred
//   else console.log(data); // successful response
// });
