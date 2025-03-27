Spectrum is a portfolio webpage representing a profile about a candidate. It consists of information about the candidates bio data such as his works, about him, his projects, case study of projects, work experience etc.

## Project files

Index.html : Main home page consisting of structure and content of main page

css/index.css : A single CSS file consisting of styling of each and every components in home page and child pages.

Assets: All your logos and images.

projects: all your case study html pages to go here.

# Sass files

Sass files handle css and to make things easier, the different components, variables and mixins has been created to make it
easy not only to debug but also make it re-usable and convenient.

Variables.Scss : All variables such as primary colors, images etc are stored here and can be used in other scss files.

Mixins.Scss: contains all styling functions which can be reusable.

index.scss: Main styling file using this index.css is generated. it only contains imports of other files.

projects.scc: styling for sub projects files.

project-bg-props.scss: contains mixins for sub project files.

## Suggestions to add new projects

step 1: Create HTML under projects/newproject.html

step 2: Copy the contents from other exisiting projects to get template and start making changes to images and contents.

step 3: for styling making changes needs to be step by step:

1. sass/variables.scss: create a new hero-image variable

2. sass/projects/project-bg-props: create a mixin for your hero image and copy the same properties from other pages and use background-img from variables that you recently created.

3. sass/projects/projects.scss: add css property (eg: <section class="hero-section-BMS">) refer the class name from html and include this whole mixin that you created before within the class
   (eg:.hero-section-BMS {
   @include hero-BMS;
   })
