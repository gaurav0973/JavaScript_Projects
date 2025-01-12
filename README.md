## Author
**Gaurav Kumar Maurya**  
- [LinkedIn Profile](https://www.linkedin.com/in/gaurav-maurya0973)  
- [GitHub Profile](https://github.com/gaurav0973)


## PROJECT-1: To-Do List Application
A simple and interactive **To-Do List Application** built using HTML, CSS, and JavaScript. This app allows users to efficiently manage their daily tasks by adding, completing, and deleting tasks. The tasks are stored in the browser's `localStorage`, ensuring they persist after refreshing the page.

## Features

- **Add Tasks**: Users can add tasks to the list with a single click.
- **Mark as Complete**: Tasks can be marked as completed by clicking on them.
- **Delete Tasks**: Users can delete tasks they no longer need.
- **Persistent Storage**: Tasks are stored in the browser's `localStorage`, so they remain available after refreshing the page.


## How It Works

1. **Adding a Task**:  
   - Enter the task in the input box and click the "Add Task" button.  
   - The task is added to the list and saved in `localStorage`.

2. **Marking a Task as Complete**:  
   - Click on a task to toggle its completion status.  
   - A style change visually distinguishes completed tasks (strikethrough).

3. **Deleting a Task**:  
   - Click the "Delete" button next to a task to remove it from the list.  
   - The task is also removed from `localStorage`.

## **Key JavaScript Concepts Used**
1. **Event Listeners**: Used to handle user actions like adding, completing, and deleting tasks.

2. **localStorage Integration**: Tasks are saved and retrieved using the browser's `localStorage`, ensuring data persistence.

3. **Dynamic DOM Manipulation**:  Tasks are dynamically added to the DOM as list items (`<li>`), with options for toggling and deletion.

4. **Object Representation for Tasks**: Each task is an object with properties like `id`, `text`, and `completed`.
---
---
# 🌦️PROJECT-2 :  Weather Application
A simple and interactive **Weather Application** built using **HTML**, **CSS**, and **JavaScript**. This app allows users to retrieve real-time weather information for any city using the **OpenWeatherMap API**.

# ✨ Features
#### 📍 City Input: 
- Users can enter the name of a city to fetch its weather details.

#### 🔄 Get Weather:
- A button triggers the fetch request to the **OpenWeatherMap API**.

#### 🌡️ Weather Display:
- Displays the **city's name**.
- Shows the **current temperature** (in °C).
- Provides a **description of the weather** (e.g., "clear sky").
- Includes a **weather icon** for better visual representation.
#### ⚠️ Error Handling:
- Displays an **error message** if the city is not found or if the API request fails.



## 🛠️ Key JavaScript Concepts Used

### ⏳ Async/Await:
- Handles **asynchronous API requests** for fetching weather data.

### 🛑 Error Handling:
- Uses **try-catch blocks** to handle potential errors during the API request.

### 🖼️ Conditional Rendering:
- Toggles the visibility of the **weather information** and **error message** based on the API response.
---
---
# 🛒 PROJECT-3: Shopping Cart Application

- A simple and interactive **Shopping Cart Application** built using HTML, CSS, and JavaScript. 
- This app allows users to browse products, add them to a cart, view the cart, and proceed to checkout.

## ✨ Features

### 🛍️ Product Listing:
- Displays a list of products with their **name** and **price**.
- Each product has an **Add to Cart** button for quick addition to the cart.

### 🛒 Cart Management:
- Displays all the items added to the cart.
- Shows the **total price** of all cart items.
- Option to **remove items** from the cart.

### 💾 Persistent Storage:
- Uses the browser's **localStorage** to save the cart data.
- Ensures that the cart items remain available even after refreshing the page.

## 🛠️ Key JavaScript Concepts Used

### 🔄 DOM Manipulation:
- Dynamically adds, updates, and removes elements for the product list and cart.

### 📦 Local Storage:
- Saves and retrieves cart data using **localStorage** to make it persistent across sessions.
----