

# MY PORTFOLIO🏫

## 🚀 Getting Started

Follow these steps to set up the project on your local machine.

### 1. Clone the Repository

```bash
git clone https://github.com/Afruja-Afrin/My-Portfolio.git
cd My-Portfolio
```

### 2. Install Dependencies

```bash
cd backend
npm install
```

### 3. Setup MongoDB Atlas

```
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
MONGO_DB=portfolio
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=your-app-password
FROM_EMAIL=your-gmail@gmail.com
TO_EMAIL=your-gmail@gmail.com
```

### 4. Run the Backend Server

```bash
npm start
```

The backend will be running at http://localhost:5000.

---

## 🛠️ Tech Stack

### Frontend:
- **HTML** – Used for the structure and content of the website.
- **CSS** – Styling and layout of the website, ensuring it’s responsive.
- **JavaScript** – Adds interactivity (smooth scrolling, active navigation).
- **BoxIcons** – Used for icons in the navigation and social media links.

### Backend:
- **Node.js** – JavaScript runtime for backend logic.
- **Express.js** – Framework for handling routing and HTTP requests.
- **MongoDB** – Database to store contact form submissions.
- **Nodemailer** – Sends email notifications when the contact form is submitted.

## Key Features:
- **Frontend and Backend Separation**: Clean separation of client-side and server-side code for better organization.
- **Responsive Design**: Ensures a seamless experience on mobile, tablet, and desktop devices using **CSS**.
- **Interactive Frontend**: Smooth navigation and dynamic behavior powered by **JavaScript**.
- **Contact Form Handling**: Backend routes manage form submissions, storing the data in **MongoDB Atlas** and sending email notifications via **Nodemailer**.
- **Environment Configuration**: Sensitive data like credentials and database URI stored securely in **.env**.
- **Scalable Structure**: Easy to expand with additional routes, models, or frontend features.

---
