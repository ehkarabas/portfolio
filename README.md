<div align=center>
	<h1>Portfolio</h1>
</div>

<div align="center">
	<a href="https://portfolio-ehkarabas.netlify.app/">
		<img src="https://img.shields.io/badge/live-%23.svg?&style=for-the-badge&logo=www&logoColor=white%22&color=black">
	</a>
</div>

<div align="center">
      <p>You can check presentation as video from below</p>
</div>

[![Go To The Presentation Video](https://i.hizliresim.com/1x60nug.png)](https://youtu.be/MVu0nnUjPdo)
<hr>

## Description

A fully responsive portfolio page built using React with MUI & Redux & Framer Motion, and its associated back-end developed using Sanity. 

All pages are structured with the Sanity backend, and are fetch-rendered from there, achieving a dynamic structure. Validations are used in Sanity schemas to maintain integrity during data entry.

On the frontend side, positioning animations are done with framer motion for the layout. A structure of navigation dots that appear separately on each page and show the active page has been added to facilitate navigation between pages. Aside from Pagination and Formik, all components are created and stylized from scratch.

A Dark and Light theme system affecting every component has been developed. Our own ThemeProvider is available at the outermost layer, and theme toggling is performed using definitions made in CSS root variables. CSS root variables, ThemeProvider, SCSS variables, and mixins help all components make dynamic and centralized theme transitions.

MUI Textfields in the Contact section are used for Yup validations but are fully controlled and styled to fit both Light and Dark themes. Data from the submitted form in the Contact section is posted both as an email through emailJS and as a separate Sanity instance.

A custom cursor is integrated, and components where a pointer cursor should appear on hover are handled with JavaScript. The custom cursor is active on large screens and seamlessly gives way to the default cursor on small screens.

## Backend Goals

Practicing on Sanity, schemas, configuration, creating and fetching reference fields, hotspot image fields, fetching image fields via sanity imageBuilder callback, creating schema instances via requests, sending form data with emailJS to pre-defined email adress.

## Frontend Goals

Practicing on creating pre-defined component layouts via wrapping them with HOCs, motion wrapper, central and dynamic theme control, fully customized theme toggling, creating a custom cursor and fitting it to whole project scope responsively, creating responsive styles easier with SCSS by every selections scope, react tooltip, react type animation, CSS.

## Technologies

Backend:
- Sanity
- EmailJS

Frontend:
- React(with React Helmet)
- React Router v5
- Framer Motion
- Material UI(just for Pagination and Textfield(for Yup validation in formik))
- Redux(with persist, slices)
- React Tooltip
- Formik & Yup
- Custom Hooks
- React Type Animation


## Installation

To run this app on your local, run commands below on the terminal:

1. Clone the repo on your local.

    ```bash
    $ git clone https://github.com/ehkarabas/portfolio.git
    ```

2. On this repo, open terminal in ./backend for the backend and:

	2.1. Install node modules to this repo.

	```bash
	$ yarn
 	```
	or
 	```bash
	$ npm install
	```

	2.2. Run CMS service on your browser.

	```bash
	$ yarn sanity start
	```
	or
	```bash
	$ npm sanity start
	```

	2.3. Start development server(input "y").


3. On this repo, open terminal in ./frontend for the frontend and:

	3.1. Install node modules to this repo.

	```bash
	$ yarn
 	```
	or
 	```bash
	$ npm install
	```

	3.2. Run the app on your browser.

	```bash
	$ yarn start
	```
	or
	```bash
	$ npm start
	```


## Resource Structure 

```
portfolio(folder)
|
├── backend
│   ├── package.json
│   ├── README.md
│   ├── sanity.cli.js
│   ├── sanity.config.js
│   ├── schemas
│   │   ├── about.js
│   │   ├── brands.js
│   │   ├── contact.js
│   │   ├── education.js
│   │   ├── experiences.js
│   │   ├── index.js
│   │   ├── skills.js
│   │   ├── testimonials.js
│   │   ├── workCategory.js
│   │   ├── workExperience.js
│   │   ├── works.js
│   │   └── worksTop.js
│   ├── static
│   └── yarn.lock
├── frontend
│   ├── package.json
│   ├── public
│   │   ├── images
│   │   │   ├── ...
│   │   ├── index.html
│   │   └── _redirect
│   ├── README.md
│   ├── src
│   │   ├── app
│   │   │   └── store.jsx
│   │   ├── App.js
│   │   ├── App.scss
│   │   ├── assets
│   │   │   ├── ...
│   │   │   ├── svg
│   │   │   │   ├── blockSpinner.svg
│   │   │   │   ├── circle.svg
│   │   │   │   ├── logo.svg
│   │   │   │   ├── moon.svg
│   │   │   │   └── sun.svg
│   │   │   └── works
│   │   │       ├── ...
│   │   ├── client.js
│   │   ├── components
│   │   │   ├── Custom
│   │   │   │   ├── CustomCursor.jsx
│   │   │   │   └── customCursor.scss
│   │   │   ├── index.js
│   │   │   ├── Navbar
│   │   │   │   ├── Hamburger
│   │   │   │   │   ├── Hamburger.jsx
│   │   │   │   │   └── Hamburger.scss
│   │   │   │   ├── Navbar.jsx
│   │   │   │   └── Navbar.scss
│   │   │   ├── NavigationDots.jsx
│   │   │   ├── NavigationDots.scss
│   │   │   └── SocialMedia.jsx
│   │   ├── constants
│   │   │   ├── images.js
│   │   │   ├── index.js
│   │   │   ├── links.js
│   │   │   └── variables.js
│   │   ├── container
│   │   │   ├── About
│   │   │   │   ├── About.jsx
│   │   │   │   └── About.scss
│   │   │   ├── Footer
│   │   │   │   ├── Footer.jsx
│   │   │   │   └── Footer.scss
│   │   │   ├── Header
│   │   │   │   ├── Header.jsx
│   │   │   │   └── Header.scss
│   │   │   ├── index.js
│   │   │   ├── NotFound
│   │   │   │   ├── NotFound.jsx
│   │   │   │   └── NotFound.scss
│   │   │   ├── Skills
│   │   │   │   ├── Skills.jsx
│   │   │   │   └── Skills.scss
│   │   │   └── Work
│   │   │       ├── Work.jsx
│   │   │       └── Work.scss
│   │   ├── features
│   │   │   ├── profileSlice.jsx
│   │   │   └── themeSlice.jsx
│   │   ├── helper
│   │   │   ├── ErrorCatch.js
│   │   │   └── ToastNotify.js
│   │   ├── hooks
│   │   │   ├── useAxios.jsx
│   │   │   └── useProfileCall.jsx
│   │   ├── index.css
│   │   ├── index.js
│   │   ├── router
│   │   │   └── AppRouter.jsx
│   │   ├── sass
│   │   │   └── mixins.scss
│   │   ├── scripts
│   │   │   ├── customCursor.js
│   │   │   ├── customCursorShow.js
│   │   │   ├── hamburgerMenu.js
│   │   │   ├── index.js
│   │   │   └── toggleTheme.js
│   │   ├── theme
│   │   │   ├── context.js
│   │   │   └── Toggle
│   │   │       ├── Toggle.jsx
│   │   │       └── Togle.scss
│   │   └── wrapper
│   │       ├── AppWrap.js
│   │       ├── index.js
│   │       └── MotionWrap.js
│   └── yarn.lock
└── README.md
```