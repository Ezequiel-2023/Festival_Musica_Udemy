
import { src, dest, watch } from 'gulp';
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'


const sass = gulpSass(dartSass);
// corres nuestro sitio web "npm run dev"
export function css(done) {
    src('src/scss/app.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(dest('build/css'))
    done()
}
// escuchar cambios 
export function dev () {
    watch('src/scss/**/*.scss', css)
}