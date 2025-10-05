# 🌦️ Smart Weather App with AI Assistant

A clean and modern **Weather Application** built with **React + Vite** and styled using **Tailwind CSS**.  
It allows users to search any city and view real-time weather data, a 5-day forecast, and even get **personalized AI recommendations** based on the weather — powered by **Google Gemini AI**.

---

## 🚀 Features

### 🌤 Core Features
- Search weather by city using the **OpenWeatherMap API**
- Display **current temperature**, **humidity**, and **weather condition**
- Handle **loading** and **error** states gracefully
- Responsive and clean **Tailwind UI**

### 💡 Bonus Features
- **Local Storage**: Saves and displays last searched cities
- **AI Assistant**: Suggests fun activities and outfit ideas using **Gemini API**
- **5-Day Forecast** with charts using **Recharts**
- **Dynamic Background Animations** (rain, clouds, clear sky)
- **Unit Toggle** between °C / °F
- **Geolocation** support – auto-fetch weather for your current location

---

## 🧩 Tech Stack

| Category        | Technology              |
|-----------------|-------------------------|
| Frontend        | React + Vite            |
| Styling         | Tailwind CSS            |
| AI Integration  | Google Gemini API        |
| API Source      | OpenWeatherMap API      |


---

## ⚙️ Setup & Installation

Follow these steps to run the project locally:

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
```
###2️⃣ Install Dependencies
```bash
npm install
```

###3️⃣Run the Development Server
```bash
npm run dev
```
---
###🧪 Running Tests

This project uses **Vitest** + **React Testing Library** for component testing.

### Setup:
```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
```
### Run All Tests:
```bash
npm test
```

---

🧠 Assumptions & Design Choices

The app uses OpenWeatherMap’s free tier — ideal for demo purposes.

AI Assistant is designed for light contextual replies (fun + short).

Local storage keeps only the last 5 cities to prevent clutter.

Weather icons and forecast use OpenWeatherMap’s standard icon pack.

Design kept mobile-first with Tailwind’s responsive utilities.

Background animations are optional — gracefully degrade if the library fails.

---
🌟 Future Enhancements

Add voice search for city input

Add Dark Mode toggle

Integrate PWA support for offline access

Display air quality index (AQI)


---


