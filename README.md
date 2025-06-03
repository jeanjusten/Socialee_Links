![Status](https://img.shields.io/badge/status-finished-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

<!--Title Image-->
# 💻 Socialee - Links Hosting Webpage
<p>
A simple and responsive link-in-bio webpage.<br>
</p>

Check out the ***Table of Contents*** section to navigate through this documentation.

<!--Menu-->
## :large_orange_diamond: Table of Contents
- [1. Introduction](#large_orange_diamond-introduction)
  - [1.1 Description](#arrow_forward-description)
- [2. Patch Notes](#large_orange_diamond-patch-notes)
  - [2.1 Latest Update](#pushpin-latest-update)
- [3. Features](#large_orange_diamond-features)
  - [3.1 Responsiveness](#arrow_forward-responsiveness)
    - [3.1.1 Mobile](#small_red_triangle_down-mobile)
    - [3.1.2 Tablet](#small_red_triangle_down-tablet)
    - [3.1.3 Desktop](#small_red_triangle_down-desktop)
- [4 Automated Tasks](#large_orange_diamond-automated-tasks)
  - [4.1 Gulp](#arrow_forward-gulp)
- [5. Tools and Technologies](#large_orange_diamond-tools-and-technologies) 
  - [5.1 Stacks Used](#arrow_forward-stacks-used)
- [6. Result](#large_orange_diamond-result)
  - [6.1 Deploy](#arrow_forward-deploy)
- [7. Links](#large_orange_diamond-links)
  - [7.1. Project Repository](#arrow_forward-project-repository)
  - [7.2. Social Links](#arrow_forward-social-links)
  - [7.3. Other Links](#arrow_forward-other-links)
- [8. Etcetera](#large_orange_diamond-etcetera)
  - [8.1 About](#arrow_forward-about)
  - [8.2 Licenses](#arrow_forward-license)

<!--Introduction-->
## :large_orange_diamond: Introduction
### :arrow_forward: Description
Socialee is a webpage used to host the user's links, similar to Linktree.<br>
It was built to showcase a personal or business profile and redirect users to various social media platforms or important links.<br>
It uses Gulp for automated tasks, and Less for CSS styling.

<!--Patch Notes-->
## :large_orange_diamond: Patch Notes
### :pushpin: Latest Update
<strong>06/01/2025</strong>
- Project finished.
- Webpage hosted.

<!--Features-->
## :large_orange_diamond: Features
### :arrow_forward: Responsiveness
<p>
This webpage uses bootstrap to apply a series of breakpoints that grant a responsive design in all devices.
</p>

#### :small_red_triangle_down: Mobile

<p>- Mobile View</p>

#### :small_red_triangle_down: Tablet

<p>- Tablet View</p>

#### :small_red_triangle_down: Desktop

<p>- Desktop View</p>

<!--Automated Tasks-->
## :large_orange_diamond: Automated Tasks
### :arrow_forward: Gulp
<p>
This project uses Gulp to automate several tasks, such as JavaScript & CSS minification, image compression, and conversion to WebP format.
</p>

* Javascript compressing:

      // Compress all Javascript on ./src/scripts
      function compressJavaScript() {
          return gulp.src("./src/scripts/*.js")
              .pipe(uglify())
              // .pipe(obfuscate()) // makes the file unreadable
              .pipe(gulp.dest("./build/scripts"))
      }

* WebP converting and Image compressing:
  
        // Compress all Images on ./source/images
        function compressImages() {
            return gulp.src("./src/img/*")
                .pipe(imagemin())
                .pipe(gulp.dest("./build/img"));
        }

* Less compiling and compressing:

      // Compile Less Files in ./src/styles/main into one CSS
      function compileLess() {
          return gulp.src("./src/styles/main.less") //Get the less files
              .pipe(sourcemaps.init())
              //.pipe(sass())  //compile the scss files only
              .pipe(less({outputStyle: "compressed"}))// compile and minify less files
              .pipe(sourcemaps.write("./maps"))
              .pipe(gulp.dest("./build/styles")); // output files folder
      }

<!--Tools Used-->
## :large_orange_diamond: Tools and Technologies
### :arrow_forward: Stacks Used
[![My Skills](https://skillicons.dev/icons?i=html,css,bootstrap,gulp,less)](https://skillicons.dev)<br>

<!--Deploy-->
## :large_orange_diamond: Result

### :arrow_forward: Deploy
* <a href="https://socialee-links.vercel.app/" alt="Deploy page">Socialee - One place, all the links.</a>

<!--Links-->
## :large_orange_diamond: Links
### :arrow_forward: Project Repository
* [Socialee GitHub Repository](https://github.com/jeanjusten/Socialee_Links)

### :arrow_forward: Social Links
* [Jean Justen's Github page](https://github.com/jeanjusten)
* [Jean Justen's LinkedIn page](https://www.linkedin.com/in/jeanjusten/)

### :arrow_forward: Other Links
* [Bootstrap Documentation](https://getbootstrap.com/docs/)
* [Less Documentation](https://lesscss.org/)
* [Gulp Documentation](https://gulpjs.com/docs/en/)

## :large_orange_diamond: Etcetera
### :arrow_forward: About
Socialee webpage was created by ![logo](https://github.com/user-attachments/assets/0894beaf-f587-4d0a-983a-caf7fb551554) <strong>JEAN JUSTEN</strong> to study automated tasks with Gulp and CSS optimization with Less.

### :arrow_forward: License
You may use, copy, share and modify the code as you please. No credits needed.</p>
