const gulp = require("gulp");
const less = require("gulp-less");
const sourcemaps = require("gulp-sourcemaps"); 
const obfuscate = require("gulp-obfuscate");
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin"); 

// Compress all Javascript on ./src/scripts
function compressJavaScript() {
    return gulp.src("./src/scripts/*.js")
        .pipe(uglify())
        // .pipe(obfuscate()) // makes the file unreadable
        .pipe(gulp.dest("./build/scripts"))
}

// Compress all Images on ./source/images
function compressImages() {
    return gulp.src("./src/img/*")
        .pipe(imagemin())
        .pipe(gulp.dest("./build/img"));
}

// Compile Less Files in ./src/styles/main into one CSS
function compileLess() {
    return gulp.src("./src/styles/main.less") //Get the less files
        .pipe(sourcemaps.init())
        //.pipe(sass())  //compile the scss files only
        .pipe(less({outputStyle: "compressed"}))// compile and minify less files
        .pipe(sourcemaps.write("./maps"))
        .pipe(gulp.dest("./build/styles")); // output files folder
}

// Export all tasks
exports.default = function() {
    gulp.watch("./src/styles/*.less", { ignoreInitial: false }, gulp.series(compileLess)); // add a watcher after i run Less only once npm run gulp watch
    gulp.watch("./src/scripts/*.js", { ignoreInitial: false }, gulp.series(compressJavaScript));
    gulp.watch("./src/img/*", { ignoreInitial: false }, gulp.series(compressImages));
}