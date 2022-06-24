# [tallgrass.church](https://tallgrass.church)

The website for Tallgrass Community Church in Manhattan, Kansas.

## Drupal Development

In addition to the [Drupal 8 system requirements](https://www.drupal.org/docs/8/system-requirements), this project requires [Composer](https://getcomposer.org/) for installation.

To install Drupal, run the install command from the project directory:

```
composer install
```

### Updating Drupal

From the project directory, run the update command:

```
composer update
```

Commit any changes to the repository (including the `composer.lock` file).

**Note:** When updating Drupal, the update command should be run locally, tested, then deployed to the server. Once the changes are deployed, the `composer install` command can be run on the server in order to update the installation. Running the the `composer update` command directly on the server may cause excessive resource usage.

## Theme development

For theme development, you must have [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm) installed in order to build the static files.

Navigate to the `web/themes/custom/tallgrasschurch` directory, and run the `nvm use` command to switch to the project version of [Node.js](https://nodejs.org/) (installing Node.js if needed). Install the npm requirements with the `npm install` command.

**Note:** Edit Sass and JavaScript files from the `src` directory. Files in the `css` and `js` directories will be overwritten on build.

### npm commands

#### `npm start`

Builds the static files and watches for changes.

#### `npm build`

Builds the static files.
