# B-Hunters-playground

**This is the playground for [B-Hunters Framework](https://github.com/B-Hunters/B-Hunters)**

## Requirements

To be able to use all the tools remember to update the environment variables with your API keys in `docker-compose-tools.yml` file as some tools will not work well until you add the API keys.



## Configuration
**You have to update `b-hunters.ini` with you server IP if you want to use it on multiple servers or use 127.0.0.1 for localhost and update passwords as you want.**   
**Update `.env` file with same passwords if you have changed them**

### If you want to use **`XrayScanner`** you have to update **`http_base_url`** with your IP in **`config.yaml`**  in config/xrayserver folder

### **Remember You have to install b-hunters package and use same `b-hunters.ini` configuration to be able to interact with the system**
## How to run 

# 1. Start Main System
The easiest way to start the main toosl is using docker compose
inside this repo folder.
```bash
docker compose up -d
```
Now database, minio, redis, and B-Hunters system are init.
You can check dashboard of tools using `Server_IP:6500`.

# 2. Start Tools
To start all tools now we can you use the `docker-compose-tools.yml` file inside this repo folder.
This docker compose will init all tools using the image 
```bash
docker compose -f docker-compose-tools.yml up -d
```
---
# You can update the number of replicas of tool foreach tool using `replicas` parameter in `docker-compose-tools.yml`

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/bormaa)
