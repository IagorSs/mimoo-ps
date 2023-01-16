# Mimoo PS Test

<!-- TODO talk more about what application do -->
This application was made for selective process of Mimoo enterprise

## Principal technologies

- Serverless Framework 3
- Node 16
- Typescript 4
- Jest
- AWS
  - DynamoDB
  - Cognito
  - Lambda

## Prerequisites

- AWS and serverless framework accounts created
- Serverless framework CLI installed
- AWS IAM credentials created, I recommend administrator policie
- Serverless framework and CLI configured with needed credentials

## Commands

### Installation

To install all dependencies I recommended to use `npm`

```bash
$npm i 
```

### Create Serverless Project

You need to create new app on serverless framework to deploy, run the below command in core of this project to this

```bash
$sls --org=<YOUR_ORG_NAME>
```

### Automated tests

You can run all tests configured in the project with command below

```bash
$npm test
```

### Deploy

This command will run `sls deploy` and give the existent routes on terminal

```bash
$npm run deploy
```

## Authentication

The authentication has made with AWS Cognito and be used in all routes of application. The steps to login correctly are describe below

- Create a user with email and password in register route
- Login with same credentials in login route
  - This will response with auth token
- Put auth token on header of requests, in param `Authorization` without any prefix

The token is valid for some time and after that you need do login again and repeat the steps
