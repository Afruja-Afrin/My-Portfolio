My Portfolio 🎨

Welcome to my personal portfolio website, built using HTML, CSS, JavaScript, and a Node.js backend for the contact form functionality. This project showcases my skills, education, projects, and experience.
---

🚀 Table of Contents

About

Technologies Used

Features

Getting Started

Backend Setup

Contact Form

License
---

💼 About

This is my personal portfolio website where I showcase my skills, education, projects, and achievements. It contains sections such as About Me, Education, Skills, Experience, and a Contact Form.

The contact form is fully functional and connects to a Node.js backend, which stores submissions in MongoDB and sends email notifications using Nodemailer.
---

🛠️ Technologies Used
Frontend

HTML - Structure of the website

CSS - Styling (with responsive design features)

JavaScript - Interactive elements like smooth scrolling and dynamic content

BoxIcons - Icons for UI elements

Backend

Node.js - Backend server

Express.js - Web framework

MongoDB (via MongoDB Atlas) - For storing contact form data

Nodemailer - For sending email notifications when a contact form is submitted
---

⭐ Features

Responsive Design: Adapts to all screen sizes (desktop, tablet, and mobile).

Interactive Navigation: Navigation bar highlights the current section as you scroll.

Smooth Scrolling: Smooth transition between sections when navigation links are clicked.

Contact Form: Users can send me a message through the contact form, which stores the data in MongoDB and sends me an email notification.
---

🏗️ Getting Started
Prerequisites

Make sure you have the following installed:

Node.js (LTS version recommended)

MongoDB Atlas (for cloud database) or MongoDB locally

Gmail App Password (for email functionality)

Clone the repository
git clone https://github.com/Afruja-Afrin/My-Portfolio.git
cd My-Portfolio
---

⚙️ Backend Setup
1. Install dependencies

Go to the backend/ folder:

cd backend
npm install

2. Create .env file

Create a .env file in the backend/ folder and add the following environment variables:

MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
MONGO_DB=portfolio
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=your-app-password
FROM_EMAIL=your-gmail@gmail.com
TO_EMAIL=your-gmail@gmail.com

3. Run the backend

To start the backend server, run:

npm start


Your backend will be running on http://localhost:5000.
---

📩 Contact Form

The contact form is powered by Node.js, Express, and Nodemailer. When a user submits the form:

The form data is stored in MongoDB under the contacts collection.

An email is sent using Nodemailer to the specified email address.

The form takes the following fields:

Full Name

Email Address

Mobile Number

Email Subject

Message
---

📜 License

This project is open-source and available under the MIT License.
---

📍 Usage

This portfolio demonstrates my skills, projects, and experience. The backend system handles contact form submissions, and the website is designed to give visitors easy access to my information.
