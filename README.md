# Westendsfinest Website

**URL:** www.westendsfinest.de is the official website of the rapgroup "Westendsfinest"

## Requirements

If you want to run this website locally make sure you have these two installed:

- Node JS
- npm

Just go to the [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

## Install

```bash
git clone https://github.com/maxklumker/Finest-Website
cd Finest-Website
```

There are three Node.js modules that you need to install using `npm`.
Install these within the downloaded directory

```bash
npm install express
npm install body-parser
npm install nodemailer
```

### For using the contact form

Before running **app.js** locally you have to change `process.env.GMAIL_USER` and `process.env.GMAIL_PASS` to use your own email login (your email address and password).
Depending on the provider of your choice you might need to search for their security guidelines.

**!Note that you are running the website locally. If you want to deploy it live you should not enter your email and password!**


## Running the website locally

Run app.js from your command line. The native port is 8000, but you can change it in the **app.js** file if you want to.

```bash
node app.js
```

Now visit localhost:8000 on your browser.

## Author
**Maximilian Klumker**

## License
[MIT](https://choosealicense.com/licenses/mit/)
