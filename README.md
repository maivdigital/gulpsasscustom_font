## Simple Gulp Sass with custom Font

- markdown cheatsheet [web url](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

### MaivDigital Jan 2023

- using simple gulp sass compiler with custom font
- custom font has been re-generated using https://transfonter.org/
- font-face has been used for font with woff2 and woff lib


### Changes to the NPM install packages

- gulp-sass needs to be included as 

````js
const sass = require('gulp-sass')(require('sass'));

````

- need to install additional package as 

````js
npm i sass

````


#### How to run the Gulp

- gulp has been setup to use *src* dir for entry point and *public* for the output
- using the command **gulp** will start the gulp compile and watch
- currently gulp compress has not been implemented, might integrate this later