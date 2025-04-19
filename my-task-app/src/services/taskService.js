import { PutItemCommand } from "@aws-sdk/client-dynamodb";
import { PublishCommand } from "@aws-sdk/client-sns";
import { dynamoDBClient, snsClient } from "./aws-config";

export const addTaskToDynamoDB = async (task) => {
  const params = {
    TableName: "Tasks",
    Item: {
      id: { S: Date.now().toString() },
      task: { S: task }
    },
  };
  return await dynamoDBClient.send(new PutItemCommand(params));
};

export const sendSNSTaskNotification = async (task) => {
  const params = {
    Message: `New Task Added: ${task}`,
    TopicArn: import.meta.env.VITE_SNS_TOPIC_ARN,
  };
  return await snsClient.send(new PublishCommand(params));
};
