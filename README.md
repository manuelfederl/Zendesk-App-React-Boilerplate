# Internal Boilerplate for Zendesk App Framework v2 using ReactJS

## Includes

* React
* Webpack
* Babel
* SASS compiler
* CSS modules
* Jest
* zafClient
* Zendesk Garden

## Contributors

Cloudhuset - https://github.com/Cloudhuset - Base Boilerplate
Manuel Federl - https://github.com/manuelfederl - Updated Boilerplate

## How to use

### Changing the App name

To change the name of the app, you need to change the following files:

* dist/translations/*.json
* dist/manifest.json
* src/index.html

Note: You need to restart your ZCLI Apps:Server If you have an instance already running (see ZCLI Commands > zcli apps:server below) to reflect the changes made.

## Commands

Install all node modules before running any commands since some commands might require a specific node module.
Note that yarn can be replaced with npm by writing `npm run` instead.

Use the command `npm i` to install all node modules.

### npm build

This command can be used to build the application to the `dist/` folder using the production env.

### npm build-dev

This command can be used to build the application to the `dist/` folder using the development env.

### npm dev

This command watches for file changes and when a file is changed builds to the `dist/` folder using the development env.

### npm package

This command packages the `dist/` folder for upload to Zendesk in a `.zip` file.
Note you must run `yarn build` at least once before using this command.

### npm build:package

This command uses npm-run-all to run both the `yarn build` and the `yarn package` command with one command.

### npm serve

This command uses [ZAT](https://developer.zendesk.com/apps/docs/developer-guide/zat) to serve the content to your Zendesk directly from your computer

Read more about ZAT here: <https://developer.zendesk.com/apps/docs/developer-guide/zat>

This however is only recommended if you have ZAT installed

### npm clean

This command uses rimraf to remove the last `.zip` from the `dist/` folder.

### npm test

This command uses Jest to run tests. All tests are placed in the `src/__tests__` folder.

## ZCLI Commands

Especially on Microsoft Windows machines you can utilize the Zendesk Command Line Interface (ZCLI) to serve a local app to your Zendesk account for testing and deployment purposes. For any of the ZCLI commands to work, you need to install the ZCLI to your local machine (preferably globally).

The ZCLI commands should be used on the `/dist` folder.

For more information visit: https://github.com/zendesk/zcli

### zcli login

Allows you to log in to your Zendesk account.

### zcli logout

Allows you to log out of your Zendesk account.

### zcli apps

For more information visit: https://github.com/zendesk/zcli/blob/master/docs/apps.md

### zcli apps:bump [apppath] [options]

Allows you to bump the App version of the App

OPTIONS
  -M, --major  Increments the major version by 1
  -m, --minor  Increments the minor version by 1
  -p, --patch  Increments the patch version by 1

### zcli apps:server

Allows you to host a local Apps server to serve the app to your Zendesk account. Append `?zcli_apps=true` to the end of your Zendesk URL to have access to the local apps server.

##### zcli apps:validate

Allows you to validate the app before packaging it.

##### zcli apps:package

Allows you to package and validate your app for upload to your Zendesk account.

## Resources

The following are useful resources, that might add you in the development of apps for Zendesk Products.

### Development Resources:

* [Zendesk API Reference](https://developer.zendesk.com/api-reference/)
* [Zendesk Apps Framework API Reference](https://developer.zendesk.com/api-reference/apps/apps-core-api/client_api/)
* [Using Zendesk Command Line (ZCLI)](https://developer.zendesk.com/documentation/apps/app-developer-guide/zcli/#:~:text=ZCLI%20is%20the%20Zendesk%20command,and%20package%20your%20apps%20locally.)
* [Zendesk CLI Github](https://github.com/zendesk/zcli)

### App Desgin:

* [Zendesk Garden Design](https://garden.zendesk.com/design)
* [Zendesk Garden Components](https://garden.zendesk.com/components)