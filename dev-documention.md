@ -1,39 +1,68 @@


FIRST TERMINAL WINDOW

cd ~/Sites/duraamen.com && source ~/glass-sites/bin/activate && glass watch




SECOND TERMINAL WINDOW

cd ~/Sites/duraamen.com && source ~/glass-sites/bin/activate && gulp



SHOW AND HIDE FILES
showFiles
hideFiles

______

To install all of the NPM dependencies:
cd ~/Sites/duraamen.com && npm i

take note of any errors.


Install python virtual environment and glass watch

1. Install Xcode tools
2. Install Home Brew
3. Install the latest python version [ $ brew install python ]
4. Cd to home directory if not there [ $ cd ~ ]
5. install a virtual environment named glass-sites [ $ pyvenv glass-sites]
6. $ source glass-sites/bin/activate
7. $ cd ~/Sites/your-website-folder-name
8. Check to see if glass-api is installed and cd into it [ $ cd ~/Sites/glass-api/ ]
9. $ pip install -r requirements.txt
10. (glass-sites) iMac:duraamen.com chrisprice$ glass watch
