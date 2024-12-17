**Red-Bus API**
===============

**Overview**
------------

The **Red-Bus API** provides information about routes, including start and end points, distances, waypoints, and geographic coordinates in KARACHI. It is a simple REST API designed to help developers integrate bus route information into their applications.

This API is free to use for anyone!

* * * * *

**Base URL**
------------

All API requests will use the following base URL:

```
https://red-bus-api.vercel.app/api

```

* * * * *

**Endpoints**
-------------

### 1\. Get All Routes

-   **URL:** `/routes`
-   **Method:** `GET`
-   **Description:** Fetch all available bus routes.

**Example Request:**

```
GET https://red-bus-api.vercel.app/api/routes
```

**Example Response:**

```
[
  {
    "id": 1,
    "start": "Model Colony",
    "end": "Dockyard",
    "distance_km": 28,
    "start_location": {
      "latitude": 24.9069,
      "longitude": 67.1386
    },
    "end_location": {
      "latitude": 24.8081,
      "longitude": 66.9893
    },
    "waypoints": [
      { "latitude": 24.9069, "longitude": 67.1386, "sequence": 1 },
      { "latitude": 24.91, "longitude": 67.14, "sequence": 2 }
    ]
  }
]

```

* * * * *

### 2\. Get a Single Route by ID

-   **URL:** `/routes/:id`
-   **Method:** `GET`
-   **Description:** Fetch details of a specific route using its ID.

**Example Request:**

```
GET https://your-hosting-url.com/api/routes/1

```

**Example Response:**

```
{
  "id": 1,
  "start": "Model Colony",
  "end": "Dockyard",
  "distance_km": 28,
  "start_location": {
    "latitude": 24.9069,
    "longitude": 67.1386
  },
  "end_location": {
    "latitude": 24.8081,
    "longitude": 66.9893
  },
  "waypoints": [
    { "latitude": 24.9069, "longitude": 67.1386, "sequence": 1 },
    { "latitude": 24.91, "longitude": 67.14, "sequence": 2 }
  ]
}

```

* * * * *

**How to Use the API**
----------------------

### With cURL

```
curl https://red-bus-api.vercel.app/api/routes

```

### With JavaScript (Fetch API)

```
fetch("https://red-bus-api.vercel.app/api/routes")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));

```

### With Axios

```
const axios = require('axios');

axios.get("https://red-bus-api.vercel.app/api/routes")
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error("Error:", error);
  });

```

* * * * *

**Error Handling**
------------------

### Common Errors

-   **`404 Not Found`**: Route not Found.
-   **`500 Internal Server Error`**: Something went wrong on the server. Try again later.

**Example Error Response:**

```
{
  "error": "Route not found"
}

```

* * * * *

**Dependencies**
----------------

This API uses the following libraries:

-   **Express.js**: To handle server routes.
-   **Node.js**: JavaScript runtime environment.

* * * * *

**Setup Instructions**
----------------------

Follow these steps to set up and run the API locally:

1.  **Clone the repository:**

    ```
    git clone https://github.com/Asad-noob69/Red-Bus-API.git
    cd Red-Bus-API

    ```

2.  **Install dependencies:**

    ```
    npm install

    ```

3.  **Start the server:**

    ```
    node index.js

    ```

4.  The API will be available at `http://localhost:3000` by default.

* * * * *

**Contributing**
----------------

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch: `git checkout -b feature-branch-name`.
3.  Make your changes.
4.  Submit a pull request.

* * * * *

**License**
-----------

This project is open-source and licensed under the **MIT License**.

* * * * *

**Contact**
-----------

For any questions or issues, feel free to contact:

-   **Developer:** Asad Ali
-   **Email:** <asadaliabbasi787@gmail.com>
-   **GitHub:** [Asad-noob69](https://github.com/Asad-noob69)

* * * * *

Let me know if you need further assistance! 🚀