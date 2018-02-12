# [tallgrass.church](http://tallgrass.church)

The Tallgrass Community Church website.

## Requirements

In addition to the [Drupal 8 system requirements](https://www.drupal.org/docs/8/system-requirements), this project requires [Composer](https://getcomposer.org/) for installation.

## Theme Development

For theme development, you must have [npm](https://www.npmjs.com/) and [Grunt](https://gruntjs.com/) installed in order to build the static files.

Once the requirements are installed, navigate to the `web/themes/custom/tallgrasschurch` directory and install the npm requirements:

```
npm install
```

### Grunt Commands

#### `grunt`

The default command, which runs `grunt serve`.

#### `grunt build`

Builds the static files.

#### `grunt serve`

Runs `grunt build` and then watches for changes.
