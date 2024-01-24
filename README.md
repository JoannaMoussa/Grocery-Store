# _FooDelivery_: A Grocery Store Web Application Built With ReactJS

![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![image](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![image](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=React_Query&logoColor=white)
![image](https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue)
![image](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

![FooDelivery Preview](/readme_images/foodelivery_preview.png "FooDelivery Preview")

## Table of Content

1. [Introduction](#1-introduction)
1. [Application's Web Pages](#2-applications-web-pages)
1. [Key React Hooks/Features](#3-key-react-hooksfeatures)
1. [External Libraries](#4-external-libraries)
1. [How to run this application](#5-how-to-run-this-application)

## 1. Introduction

_FooDelivery_ is an online grocery store where clients can browse the store's products as well as the ability to search, filter and sort products. Products can be added to a shopping cart with full control over the quantity of each product. Clients can also check the store's recipe recommendations: each recipe is displayed along with its ingredients list. With one click, all the recipes' ingredients can be added to the shopping cart.

This web application is fully responsive as the styling is adapted to different viewport sizes, from mobiles to desktops.

## 2. Application's Web Pages

Using [**react-router-dom**](https://reactrouter.com/en/main), 4 routes are built responsible for displaying the following web pages:

- **Home Page**: This page welcomes users and displays general information as well as introductions and links to access other pages.

- **Shop Page**: This page displays two sections: the **Products** and the **Shopping Cart**.

  - **Products**: Each product is displayed in a card containing information such as its category and its price. The products and their information are fetched from a database hosted on [FireBase](https://firebase.google.com/).

    - If the product is not added to the shopping cart, a cart icon will be displayed in the product’s card. Once clicked, the product will be added to the shopping cart with a quantity of 1.

    - If the product is already added to the shopping cart, the cart icon will be replaced with the product’s quantity in the shopping cart along with a plus and minus button to increase/decrease its quantity by 1.

    Search, filter and sort features are implemented to make it easier for users to find a specific product.

  - **Shopping Cart**: A list of the products added by the user, their number, as well as the total price. Users can increase/decrease (by 1) the quantity of each individual product from inside the shopping cart. They can also directly delete a certain product. The shopping cart's information is stored in the **local storage** to allow data to persist even after refreshing or re-visiting the website at a later date.

- **Recipes Page**: This page lists all the recommended recipes of the week. The recipes data are also stored in a database hosted on [FireBase](https://firebase.google.com/). Users can click on each recipe, and they will be taken to the recipe details page.

- **Recipe Details Page**: This page displays the recipe information such as its ingredients list. Users can click on the `Add All To Cart` button, to add all the recipe's ingredients to their shopping cart in one go.

## 3. Key React Hooks/Features

- **useContext**: Context is used for some states, such as the shopping cart's state, in order to have access to these states throughout all components in the web application.

- **useReducer**: useReducer hook is used to manage the shopping cart state. Three actions can be dispatched to the reducer function:

  - _Increase by one_ the quantity of a product in the shopping cart
  - _Decrease by one_ the quantity of a product in the shopping cart
  - _Delete_ a product from the shopping cart

## 4. External Libraries

- [**react-router-dom**](https://reactrouter.com/en/main): As mentioned in [section 2](#2-applications-web-pages), react-router-dom is used to build the different routes.

- [**Tanstack Query**](https://tanstack.com/): Tanstack Query data-fetching library is used to fetch the store's products and recipes from the database.

- [**Framer Motion**](https://www.framer.com/motion/): Framer Motion library is used to add animations to various components.

## 5. How to run this application

- Clone this repository
- `cd` into the root directory (Grocery-Store)
- Run the following command: `git checkout master`
- Run the following command: `npm install`
- Run the following command: `npm start` and open the provided url in your browser
- Finally, click on the Home link in the navigation bar
