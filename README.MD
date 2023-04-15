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
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install nodejs
node -v
npm -v
```
3. Clone the code to home directory
```bash
sudo git clone https://github.com/softon/pusher-browser-automate.git
cd pusher-browser-automate
npm install
```
4. Copy the config file and edit with required data from pusher.com ``` cp .env.example .env ```
5. Run the server
```bash
npm start
```
6. If you want to auto start the service then use PM2