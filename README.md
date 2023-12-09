# Jeepney Information Website **Doobi**

Welcome to the Jeepney Information System! This web application provides users with information about jeepneys, including routes displayed on a map through the MAPTILER API, jeepney details such as name, color, and maximum seats. Additionally, users can check the availability of jeepneys at different terminals and see the number of passengers already on board.

## Features

### User Features

- View information about jeepneys, including routes on the MAPTILER API, name, color, and maximum seats.
- Check the availability of jeepneys at different terminals.
- See the number of passengers inside a jeepney.

### Admin Features

- Add, edit, and delete jeep information, including name, color, maximum seats, and MAPTILER API file.
- Modify the number of passengers inside a jeepney.
- Manage jeepney terminals.

## Technologies Used

- React Vite for the frontend.
- PHP for server-side functionality.
- MySQL for the database.

## Getting Started

1. Clone the repository: `git clone https://github.com/IvnVllrl/doobi-react.git`
2. Navigate to the project directory: `cd doobi-react`
3. Install dependencies for the frontend: `npm install`
4. Install Node.js modules: `npm install axios prop-types react-router-dom`
5. Install XAMPP: [Download and install XAMPP](https://www.apachefriends.org/index.html).
6. Place the entire project directory into the `htdocs` folder of your XAMPP installation.
7. Start XAMPP and ensure that the Apache and MySQL services are running.
8. Open phpMyAdmin and create a new database.
9. Import the database structure by executing the SQL script:
   - Open phpMyAdmin.
   - Select the newly created database.
   - Click on the "Import" tab.
   - Choose the `jeepney-counter.sql` file from the project.
   - Click "Go" to import the database structure.
10. Configure the backend API endpoints in the frontend code to connect to your database.
11. Start the development server: `npm run dev`

## Usage

1. Access the application through your browser.
2. Users can explore jeepney information and terminal availability.
3. Admins can log in to access the admin dashboard for managing jeepney details and terminals.

## Acknowledgments

- Thanks to MAPTILER for providing the API for displaying jeepney routes on the map.

Feel free to reach out if you have any questions or issues. Happy jeepney exploring!
