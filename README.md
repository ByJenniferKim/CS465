## Architecture

In this full stack project, I utilized both traditional Express-based server-side rendering <br>
and a modern Angular single-page application (SPA) for the frontend. The Express HTML approach involved rendering dynamic HTML templates from the server, which is simpler and quicker for server-generated views.<br>
However, it lacks interactivity and responsiveness. In contrast, Angular provided a much richer user experience by allowing the application to dynamically update views without reloading the page.<br>
This SPA approach significantly improved the responsiveness and fluidity of the user interface. <br>
<br>
On the backend, I used MongoDB, a NoSQL database. MongoDB was chosen for its flexibility in handling unstructured data, rapid development capability, and ease of use with JavaScript-based technologies like Node.js.<br>
Its document-based structure works naturally with JSON, making it ideal for web APIs and scalable applications.

## Functionality

JSON (JavaScript Object Notation) is a lightweight data format used to exchange data between the frontend and backend.<br>
Although it shares syntax with JavaScript, it is strictly used for data representation and cannot contain executable code. In this project,<br>
JSON was used as the common language for HTTP requests and responses, enabling the frontend Angular components to seamlessly communicate with the Express backend and database.<br>
<br>
Throughout the development process, I refactored code several times to improve maintainability and performance.<br>
For example, I created reusable UI components such as the trip card and navbar. This modular approach allowed for easier updates and consistency across the application, saving time and reducing the chance of errors.

## Testing

To ensure the SPA properly interacted with the backend API, I used Postman to manually test endpoints, including GET, POST, and PUT requests.<br>
Each method corresponds to a specific type of operation: GET retrieves data, POST adds new records, and PUT updates existing ones. With authentication added, I also tested endpoints with JSON Web Tokens (JWT) passed in the Authorization headers to confirm access control worked as expected.<br>
Testing became more complex after introducing authentication, but it was crucial to validate that only authorized users could perform certain actions like adding or editing trips.

## Reflection

This course has helped me become more confident in building and deploying full stack applications.<br>
I learned how to manage a complete project workflow, from backend API setup and database modeling to frontend routing, state management, and user authentication.<br>
The integration of a secure login system and the use of a SPA framework like Angular were especially valuable, as these are common requirements in professional web development roles. Overall, the course provided me with practical experience that I can showcase to future employers and has prepared me for real-world development challenges.
