<img width="1131" height="657" alt="Screenshot 2025-11-30 at 6 53 59 PM" src="https://github.com/user-attachments/assets/6b1f1929-8e0b-43e3-bbfa-a056cba93524" /># Weather App (React + OpenWeatherMap API)

## UI/UX


<img width="1131" height="657" alt="Screenshot 2025-11-30 at 6 53 59 PM" src="https://github.com/user-attachments/assets/3a2b582f-7897-4d9d-9fc8-a9075ba54a83" />



- Description:
  - A responsive weather application built using React.
  - It allows users to search for weather conditions in any city and displays temperature, humidity, wind speed, and an icon representing the current weather.
  - The app fetches real-time data from the OpenWeatherMap API and updates dynamically.
  - Includes smooth animations and gradient backgrounds for a modern look.

# Features
- Search weather by city name.
- Displays temperature, humidity, wind speed, and weather icon.
- Automatically loads weather data for the default city “Jammu”.
- Responsive UI with gradient background and animated transitions.
- Error handling for invalid city searches.
- Uses environment variables for secure API key storage.

# Technologies Used
- React (Vite) – Frontend framework
- JavaScript (ES6+) – Application logic
- CSS – Styling and animations
- OpenWeatherMap API – Real-time weather data provider

# Project Structure
- public/ → Static assets and index.html
- src/
  - Assets/ → Weather icons (sun, rain, clouds, etc.)
  - Component/
    - Weather.jsx → Main weather component with API logic
    - Weather.css → Styling for the weather display
  - App.jsx → Main React component integrating Weather.jsx
  - App.css → Global app styles and background animation
  - index.css → General styles and font imports
  - main.jsx → Entry point for rendering the app
- .env → Stores API key securely
- vite.config.js → Vite configuration file

# Environment Variables
- VITE_APP_ID: Your OpenWeatherMap API key

# Installation
- Clone the Repository:
  - ```bash
    git clone https://github.com/Rudhar-cmd/My-Weather-App.git
    ```
- Navigate to Project Directory:
  - ```bash
    cd weather-app
    ```
- Install Dependencies:
  - ```bash
    npm install
    ```
- Start the Development Server:
  - ```bash
    npm run dev
    ```

# Usage
- Enter a city name in the search bar.
- Click the search icon or press enter to view current weather details.
- Displays temperature (°C), humidity (%), and wind speed (km/h).
- The app auto-loads Jammu weather data on startup.

# Example Output
- City: Jammu  
- Temperature: 16°C  
- Humidity: 30%  
- Wind Speed: 1.31 km/h  
- Weather Icon: Clear Sky ☀️  

# API Used
- OpenWeatherMap API  
  - Endpoint: `https://api.openweathermap.org/data/2.5/weather`  
  - Parameters:
    - `City` → City name
    - `units` → metric
    - `appid` → API key (stored in .env)

# License
- This project is open source and available under the MIT License.

# Author
- Rudhar

