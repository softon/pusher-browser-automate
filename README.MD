# Browser Automate using Pusher

This tool may be used to send remote action to multiple browsers at once.

### Endpoints
- / = Server Page
- /client = Client Page

### Usage
- Deploy the server using the below deployment steps
- Open the server page on one of the system
- Open client page in all the clients
- Enter the URL in server page and click start button
- Done!!

### Steps for Deployment
1. Create a AWS EC2 Instance (Ubuntu)
2. Run following commands
```bash
sudo apt update
sudo apt install curl -y
curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt install nodejs
node -v
npm -v
```
3. Clone the code to home directory
```bash
sudo git clone https://github.com/softon/pusher-browser-automate.git
cd pusher-browser-automate
sudo npm install
```
4. Copy the config file and edit with required data from pusher.com ``` cp .env.example .env ``` and PORT address for the server.
5. Run the server
```bash
sudo npm start &
```
6. If you want to auto start the service then use PM2
```bash
sudo npm install pm2 -g
# get inside the project directory and run
sudo pm2 start server.js --watch
```
7. copy the entire pusher-browser-automate dicrectory multiple times changing the PORT variable in .env file and pusher credentials to start multiple server