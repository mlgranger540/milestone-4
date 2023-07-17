# The Little Bit Queer Art Shop

This project is an online shop for an independent artist to sell their work. It is a Django project consisting of multiple apps and backed by a relational PostgreSQL database which stores user, product and order information. Payments and orders are handled by Stripe. The final project is hosted on Heroku.

![Little Bit Queer Art Shop Homepage](/readme-images/screenshots/home.png)

View the live project [here](https://little-bit-queer-art-shop-bed824a2914a.herokuapp.com/).

---

## UX

### User Stories

- Goals for vistors:

    - View store items and details including product image, name, description and price

    - Add items to their cart

    - Purchase items

    - Create an account
    
    - Log in and out of their account

    - View their details and past orders on their profile

- Goals for site owner

    - Promote their artwork

    - Sell their artwork for a profit

    - Manage the website and database

    - Manage products and orders

---

## Features

### Header, Footer and Navigation

![Header and Nav](/readme-images/screenshots/header-and-nav.png)

![Footer](/readme-images/screenshots/footer.png)

### Landing Page - About and New Products

![About](/readme-images/screenshots/about.png)

![New Products](/readme-images/screenshots/new-products.png)

### Shop Page

### Product Page

### Cart

### Stripe Checkout

### Sign Up, Log In and Profile

### Contact Page

### Improvements and Features to Add

---

## Design and Planning

### Website

The layout and design of the website were first visualised using wireframes. HTML, CSS and Bootstrap were then used to recreate this design in code and build the UI of the website.

<img width="52%" src="./readme-images/wireframes/home-wireframe.png" alt="Home Wireframe">
<img width="42%" src="./readme-images/wireframes/profile-wireframe.png" alt="Profile Wireframe">
<img width="42%" src="./readme-images/wireframes/shop-wireframe.png" alt="Shop Wireframe">
<img width="52%" src="./readme-images/wireframes/cart-wireframe.png" alt="Cart Wireframe">

### Database

---

## Technologies

### Languages

- HTML5
- CSS3
- JavaScript
- Python + Django
- SQL (PostgreSQL)

### Frameworks, Libraries, APIs, External Stylesheets

- [Stripe](https://stripe.com/gb) for handling products, payments and orders
- [Git](https://git-scm.com/) for version control
- [GitHub](https://github.com/) to store the project repository and back up git commits
- [Bootstrap v5.3](https://getbootstrap.com/docs/5.3/getting-started/introduction/) to assist in creating the structure and design of the webpages
- [Font Awesome](https://fontawesome.com/) for the icons
- [Justinmind](https://www.justinmind.com/) to create the wireframes
- [Clip Studio Paint](https://www.clipstudio.net/en/) to create the artwork and cloud for the logo

---

## Testing

### User Experience

My project was tested by myself and others throughout its development to ensure that all aspects of the application work as intended.

- All navigation links/buttons have been tested to ensure they go to the correct locations
- Products displayed on the home and shop pages show the correct information retrieved from Stripe and the database
- When a product link is clicked, the following page loads in the data from the selected product correctly
- Add to cart button adds the selected product and quantity to the cart, though there is sometimes a bug if the cart has not been correctly cleared (see known bugs below)
- As users are required to be logged in to buy items, attempts to access the cart page while not logged in bounce the user to the log in page. Originally users were able to access the cart page before logging in which would then cause an error if they attempted to checkout, so as part of testing I rectified this.
- The profile page also redirects the user to the login page if they are not logged in to avoid users being able to access this page without being logged into an account.
- The logged in user's past orders are correctly displayed on their profile with no duplicates or other user's orders
- Log out button logs current user out successfully
- No plain text passwords are stored in the database to avoid exposing sensitive information

### Responsiveness

### Validation

### Accessibility

### Known Bugs

There is sometimes a bug with the cart where if the cart page has not been refreshed after clearing items, it throws an error when trying to add items to the cart again. To minimise this I added a line in the `clearCart()` function to force reload the page after clearing, however I still haven't solved the original bug so it might be possible to still encounter this error when trying to add to the cart.

---

## Deployment

---

## Credits

### Code

I referred to the [Django docs](https://docs.djangoproject.com/en/4.2/intro/tutorial01/) to help when setting up my project, as well as this [guide](https://www.enterprisedb.com/postgres-tutorials/how-use-postgresql-django) to help with connecting this to the database.

I used this [guidance from Heroku](https://devcenter.heroku.com/articles/django-app-configuration) to help when trying to deploy my Django app.

### Content

### Media

All images were drawn by myself.
