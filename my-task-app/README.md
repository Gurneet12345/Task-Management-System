<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# AWS Task Manager

This project allows users to submit tasks through a React frontend, store them in DynamoDB, and trigger notifications using AWS SNS.

## 🧱 Technologies
- React (Vite)
- Node.js (Express)
- AWS SDK v3
- DynamoDB
- SNS
- CloudWatch (planned)

## 🔧 How to Run

### Backend:
```bash
cd backend
npm install
node index.js



AWS Task Manager Project Submission
1. Project Title
AWS Task Manager
2. Project Scope
The AWS Task Manager is a simple web application that allows users to submit tasks through a React frontend. These tasks are stored in an AWS DynamoDB table and simultaneously sent as notifications via AWS SNS. The backend is powered by Node.js (Express) and uses AWS SDK v3 to connect to AWS services.
3. Architecture Overview
Frontend (React) → Backend (Express + Node.js) → AWS DynamoDB & AWS SNS
User submits a task ➜ Backend stores it in DynamoDB ➜ A notification is sent using SNS.
4. AWS Services Used
- Amazon DynamoDB (task storage)
- Amazon SNS (notification delivery)
- IAM (user and permission management)
- CloudWatch (for future monitoring setup)
5. AWS Console Access
A read-only IAM user has been created for instructor review.

## Reviewer IAM Access

- IAM Username: reviewer-user  
- Console Login URL: https://559050253111.signin.aws.amazon.com/console  
- Password: ReviewAWS@2024

## AWS Services Used
- DynamoDB (Table: Tasks)
- SNS (Topic: TaskNotification)
- CloudWatch for monitoring

## Security Notes
- .env used for keys (never exposed in repo)
- IAM role has limited permissions
- CloudWatch alarm set for PutItem spikes


Attached Policies:
- AmazonDynamoDBReadOnlyAccess
- AmazonSNSReadOnlyAccess
- CloudWatchReadOnlyAccess
6. Monitoring & Metrics
Although CloudWatch integration is not yet fully active, a plan is in place to:
- Monitor DynamoDB WriteCapacityUnits
- Monitor SNS publish activity
- Set CloudWatch alarms for threshold-based notifications
7. GitHub Repository Link
https://github.com/YOUR_USERNAME/aws-task-manager (Replace with actual link)
8. Known Issue / Error Summary
❌ The backend throws an InvalidSignatureException when attempting to write to DynamoDB.
✔️ Credentials and region were verified, and access keys regenerated.
✔️ IAM user has AmazonDynamoDBFullAccess and AmazonSNSFullAccess.
⚠️ This issue is likely due to SDK signing mismatch and is submitted for instructor review.
Please inspect credentials or signature calculation in the AWS Console.
>>>>>>> 5d7ea74c68db6f6b65ccb58e834d9a9c4bf24cc8
