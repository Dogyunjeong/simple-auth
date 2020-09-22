# About

This is simple node.js authentication server which use dynamoDB as a DB

## WARNING

I am new to dynamo db. So it hasn't correctly connected and tested for dynamo db.
I initially wanted to create table as an `account` with an item like `{ username: string, saltedPassword: string}`

## How To Run
#### Set Environment variables
Open `.env` file and set the environment variables.

#### Build and Run

```
$ npm install
$ npm run build
$ npm run start
```


## Report


### 1. Setup and Architecture

  I heavily used typescript so I chose typescript over golang.
  I used onion architecture which is commonly used for web services.
  - spending hours: almost 4 hours including digging about dynamoDB

### 2. Potential weakness

  - First it is not able to deploy yest due to it hasn't connected to dynamoDB. This is because of I haven't used dynamoDB at all. So configuration takes over 1 hrs and still not sure to schema shape for this. and using `dynamoDB local` makes harder for this as I couldn't use console.

  - Second, Security, I haven't used helmet even. Basic security concern is missing.


### 3. What would it be next tasks

  - Connecting dynamoDB first
  - implement unit test
  - implement session

### 4. Scenario 1
  with helmet, we could prevent basic security attack, but what if there is no helmet?
  - checking requester and limited signin and signup request per certain minutes
  - Check username and password in security wise
  - enhance username and password requirements e.g password must be contains at least one digi, one small character and one capital

### 5. Scenario 2
  - make it as a container and deploy as a MSA service.
  - load balance(e.g nginx) will handle to distribute connections and multiple auth server containers will handle requests.
  - required shared mem-cache to check requester ip

