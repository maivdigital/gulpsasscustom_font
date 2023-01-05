**Simple Gulp Sass with custom Font**


***MaivDigital Jan 2023***

- using simple gulp sass compiler with custom font
- custom font has been re-generated using https://transfonter.org/
- font-face has been used for font with woff2 and woff lib


***Changes to the NPM install packages***

- gulp-sass needs to be included as 
````
const sass          = require('gulp-sass')(require('sass'));

````

- need to install additional package as 
````
npm i sass

````