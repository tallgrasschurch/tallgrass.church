# [tallgrass.church](http://tallgrass.church)

The Tallgrass Community Church website.

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

## Theme Development

For theme development, you must have [npm](https://www.npmjs.com/) and [Grunt](https://gruntjs.com/) installed in order to build the static files.

Once the requirements are installed, navigate to the `web/themes/custom/tallgrasschurch` directory and install the npm requirements:

```
npm install
```

**Note:** Edit CSS and JavaScript files from the `src` directory. Files in the `css` and `js` directories will be overwritten on build.

### Grunt Commands

#### `grunt`

The default command, which runs `grunt serve`.

#### `grunt build`

Builds the static files.

#### `grunt serve`

Runs `grunt build` and then watches for changes.
