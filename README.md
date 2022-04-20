# Modern lightweight WordPress theme

- Author: [khoipro](https://github.com/khoipro), [codetot](https://profiles.wordpress.org/codetot)

## Tech Stack

- Webpack 12+ with Browersync
- SCSS with Bootstrap 5 and autoprefixer
- JS ECMA5+, support React
- phpcs, composer
- Coding standards: StandardJS, follow BEMCSS rules

## Setup a theme

**Requires**

- Webpack 12+
- Composer
- VS Code with .editorconfig extensions

If you clone this template, it's better if you change some code:

- PHP function with prefix `wp_theme_` to `your_theme_prefix_`, for example: `ct_media_`, in phpcs.xml and some strings in PHP files
- Change text domain from `wp-theme` to `your-theme-prefix`

To start working with your local domain environment, please setup a local domain, such as `codetot.test`. Don't use `localhost/your-sub-dir/`.

**Steps**

- Edit local domain at `webpack.config.js`
- Run command `npm install`
- Run command `composer install`

## Development

**Command**

- Run command `npm run dev`, then it will open `http://localhost:3000` which points to your real domain in `webpack.config.js`

## Build

**Command**

- Run command `npm run build` to minify and compress assets.

## Test

**Command**

- Run `npm run test` (mostly this feature was on CI) to test assets.
- Run `npm run fix` to automatically fix CSS + JS code standards
