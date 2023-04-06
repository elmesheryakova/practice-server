echo "Kill all the running PM2 actions"
sudo pm2 kill

echo "Jump to app folder"
cd /home/apps/practice-server

echo "Update app from Git"
git fetch origin master
git reset --hard origin/master

echo "Install app dependencies"
sudo rm -rf node_modules package-lock.json
sudo npm install

echo "Build your app"
sudo npm run tsc

echo "Run new PM2 action"
sudo cp /home/apps eccosystem.json
sudo pm2 start eccosystem.json
