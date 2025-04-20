# ♡ Sugar & Swirl ♡

**Sugar & Swirl** is a _dessert ordering app_ that lets users customise their dream bakery experience. From **cupcakes** to **cookies**, users can choose and personalise their orders, creating the _perfect sweet treat_.

---

> _✨ created with love and sugar by @jenyyy4 ✨_

---

## ☆ Features ☆

- Explore a variety of desserts (cakes, cupcakes, cookies, donuts, macaroons)
- Customize your perfect sweet treat
- Choose your desserts and place orders
- Suggest new flavours by filling the form
- Cute, and user-friendly UI

---

## ☆ Tech Stack ☆

- **Frontend**: React JS
- **State Management**: React Context API 
- **APIs**: Mock API
- **Authentication**: Firebase
- **Rouing**: React Router
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

---

## ☆ Prerequisites ☆

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/) or another editor

---

## ☆ Setup ☆

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/jenyyy4/PixieCycle.git

2. **Navigate to the Project Directory**:

   ```bash
   cd PixieCycle

3. **Install Dependencies**:

   ```bash
   npm install

4. **Start the Application**:

   ```bash
   npm run dev

### Tailwind CSS Setup

1. **Install Tailwind**:

   ```bash
   npm install tailwindcss @tailwindcss/vite

2. **Edit vite.config.js**:

   ```
    import { defineConfig } from 'vite'
    import tailwindcss from '@tailwindcss/vite' // added line
    export default defineConfig({
      plugins: [
        tailwindcss(), // added line
      ],
    })
   ```
   
3. **Add to index.css**:

   ```
   @import "tailwindcss";
   ```

4. **Start the Application**:

   ```
   npm run dev
   ```

### Firebase Setup

#### Create a Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Click **"Add Project"**.
3. Follow the setup wizard (you can skip Google Analytics if not needed).
4. Once created, you'll be redirected to the project dashboard.

#### Enable Authentication

1. In the Firebase console, go to **Build > Authentication**.
2. Click **"Get Started"**.
3. Under the **Sign-in Method** tab:
   - Enable **Email/Password** authentication.
   - Optionally, enable **Google Sign-In**.

---

## ☆ Screenshots ☆

### Landing Page
<img width="1440" alt="Screenshot 2025-04-18 at 11 45 15 AM" src="https://github.com/user-attachments/assets/54947101-3d65-4e89-af64-03120219f016" />

### Home Page
<img width="1440" alt="Screenshot 2025-04-18 at 11 45 30 AM" src="https://github.com/user-attachments/assets/f0b9b497-7f30-4ca3-a7cc-102ea51c4fcf" />

### Order Page - 1
<img width="1440" alt="Screenshot 2025-04-18 at 11 45 38 AM" src="https://github.com/user-attachments/assets/6edb35cb-23a2-4c31-9e36-8deac418884d" />

### Order Page - 2
<img width="1440" alt="Screenshot 2025-04-18 at 11 46 03 AM" src="https://github.com/user-attachments/assets/0887251a-be83-4aca-8e35-cf74be1ee336" />

### Order Summary Page
<img width="1440" alt="Screenshot 2025-04-18 at 11 46 13 AM" src="https://github.com/user-attachments/assets/3d50ea33-dffd-4a57-b892-7a95165b72f6" />

### Suggestions Form
<img width="1440" alt="Screenshot 2025-04-18 at 11 46 38 AM" src="https://github.com/user-attachments/assets/787f7877-d2f9-4832-aa6a-63b6b9b12af6" />

### Thanks Page
<img width="1440" alt="Screenshot 2025-04-18 at 11 47 46 AM" src="https://github.com/user-attachments/assets/de8ca0b4-0ede-47eb-a3ef-24a925db4597" />

---
