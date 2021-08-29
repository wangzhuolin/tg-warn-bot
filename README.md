# tg-warn-bot
Serverless Telegram bot for multiple people to send notification messages.

> 可供多人（群组）发送通知消息的 telegram 机器人 api 。

## 直接试用我搭建的机器人

1. 添加 @tgwarn_bot
2. 发送 /sendkey 获得 key 和 url
3. 通过 url 发送请求即可

## Example

1. add @tgwarn_bot in telegram
2. `/sendkey` to get key & url
3. send request via url 


# Running
### 1. Telegram
````
# Create an Telegram bot
Find @BotFather on Telegram, type /newbot and follow the instructions

# Credentials
Save your token from @BotFather
````


### 2. Vercel Deploy
````
# Account
Create an Vercel account on https://vercel.com/

# Project
star and fork this repo, create a new project, select the repo just created.

# Set Vercel environment variables
set `BOT_TOKEN` to `telegram api token`, set `TCKEY` a random string !

# Deploy
vercel
````

### 3. Setting up the Telegram webhook
````
curl --location --request POST https://api.telegram.org/bot<YOUR-TELEGRAM-TOKEN>/setWebhook --header 'Content-type: application/json' --data '{"url": "https://project-name.username.vercel.app/api/index"}'
````

# Authors
* [wangzhuolin](https://github.com/wangzhuolin/)

# Acknowledgments
* [opensubtitles-bot](https://github.com/xxgicoxx/opensubtitles-bot)
* [telechan](https://github.com/easychen/telechan)