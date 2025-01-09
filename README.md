## Author
**Gaurav Kumar Maurya**  
- [LinkedIn Profile](www.linkedin.com/in/gaurav-maurya0973)  
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
