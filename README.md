# _FooDelivery_: A Grocery Store Web Application Built With React Library

## Table of Content

1. [Introduction](#1-introduction)
1. [Application's web pages](#2-applications-web-pages)
1. [Some React Hooks/Features Used to Build This Web Application](#3-some-react-hooksfeatures-used-to-build-this-web-app)
1. [External Libraries Used In This Web Application](#4-external-libraries-used-in-this-web-application)

## 1. Introduction

_FooDelivery_ is an online grocery store where clients can see the store's products and add their desired products to their shopping cart. They can also check the store's "Recipes Recommendations" page, where each recipe is displayed along with its ingredients list. With one click, clients can add the recipes' ingredients to their shopping cart.
This web appliction is fully responsive, the styling is adapted to different viewport sizes, from mobiles to screens above 1536px wide.

## 2. Application's web pages

Using [**react-router-dom**](https://reactrouter.com/en/main), 4 routes are built, each of which is responsible for displaying a web page:

- **Home Page**: This page displays information which let clients know more about the _FooDelivery_ concept.

- **Shop Page**: This page displays two sections: the **store's products** and the **shopping cart**.

  - Concerning the **store's products**: each product is displayed in a card containing information like its category and its price. The products and their information are fetched from a database hosted on [FireBase](https://firebase.google.com/).
    Clients can click on a cart button that is in the ingredient card to add a specific product to their shopping cart. They can also increase/decrease the product's quantity from inside the product's card if it is already in the shopping cart. There is a search/filter/sort functionality to make it easy for clients to find a specific product.

  - Concerning the **shopping cart**, it lists the products added by the client, their number, as well as the total price. Clients can increase/decrease the quantity of each product from inside the shopping cart. They can delete products from it as well. The shopping cart's information is stored in the **local storage.**

- **Recipes Page**: This page lists all the recommended recipes of the week, and like the store's products, the recipes and their information are stored in a database hosted on [FireBase](https://firebase.google.com/). Clients can click on each recipe, and they will be taken to the recipe details page.

- **Recipe Details Page**: This page displays the recipe information such as its ingredients list. Clients can click on the `Add All To Cart` button, to add all the recipe's ingredients to their shopping cart.

## 3. Some React Hooks/Features Used to Build This Web Application

- **useContext**: Context is used for some states, like the cart's state, in order to have that state available to all components in this web application.

- **useReducer**: useReducer hook is used to store and manage the shopping cart state. Three actions can be dispatched to the Reducer Function:

  - Increase by one the product quantity in shopping cart
  - Decrease by one the product quantity in shopping cart
  - Delete a product from shopping cart

- **Custom Hook**: A custom Hook is used to determine the position of a scrollbar of a certain div, and given that position, determine where to apply a box-shadow to that div (on top, on bottom, on top and bottom).

## 4. External Libraries Used In This Web Application

- [**react-router-dom**](https://reactrouter.com/en/main): As mentioned in [section 2](#2-applications-web-pages), react-router-dom is used to build the different routes.

- [**Tanstack Query**](https://tanstack.com/): Tanstack Query data-fetching library is used to fetch ingredients and recipes from the database.

- [**Framer Motion**](https://www.framer.com/motion/): Framer Motion library is used to add animations.
