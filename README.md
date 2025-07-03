# SiteKart - Professional Web Development Services

A modern, interactive website for SiteKart featuring a 3D welcome page and comprehensive business showcase.

## 🚀 Features

- **Interactive 3D Welcome Page** with Whobee robot
- **Professional Contact Form** with email integration
- **Responsive Design** optimized for all devices
- **Modern UI/UX** with smooth animations
- **Email Notifications** for new inquiries

## 📧 Email Setup Instructions

To enable email functionality for the contact form:

### 1. Gmail Setup (Recommended)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Copy the 16-character password

### 2. Environment Configuration

1. **Copy the example environment file**:
   ```bash
   cp .env.example .env
   ```

2. **Update the .env file** with your credentials:
   ```env
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-16-character-app-password
   BUSINESS_EMAIL=joel@situkart.com
   PORT=3001
   ```

### 3. Alternative Email Providers

For other email providers, update the transporter configuration in `server/index.js`:

```javascript
// For Outlook/Hotmail
const transporter = nodemailer.createTransporter({
  service: 'hotmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// For custom SMTP
const transporter = nodemailer.createTransporter({
  host: 'your-smtp-server.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});
```

## 🛠️ Development Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.example .env
   # Edit .env with your email credentials
   ```

3. **Run development servers**:
   ```bash
   # Run both frontend and backend
   npm run dev:full
   
   # Or run separately
   npm run dev      # Frontend only
   npm run server   # Backend only
   ```

4. **Open your browser**:
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3001

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   ├── ui/                 # Reusable UI components
│   │   ├── WelcomePage.tsx     # 3D welcome page
│   │   └── MainSite.tsx        # Main website content
│   └── App.tsx                 # Main app component
├── server/
│   └── index.js                # Express server for email handling
├── .env.example                # Environment variables template
└── package.json
```

## 🎯 Contact Form Features

- **Real-time Validation**: Client-side form validation
- **Loading States**: Visual feedback during submission
- **Email Templates**: Professional HTML email templates
- **Auto-Reply**: Automatic confirmation emails to customers
- **Business Notifications**: Instant email alerts for new inquiries
- **Error Handling**: Graceful error handling and user feedback

## 📧 Email Templates

The system includes two professional email templates:

1. **Business Notification Email**: Sent to you with customer details
2. **Customer Auto-Reply**: Confirmation email sent to the customer

Both templates are fully responsive and include:
- Professional branding
- Customer information
- Project requirements
- Contact details
- Call-to-action buttons

## 🔧 Customization

### Email Templates
Edit the email templates in `server/index.js` to match your branding.

### Contact Form Fields
Modify the form fields in `src/components/MainSite.tsx` to collect additional information.

### Styling
Update Tailwind CSS classes throughout the components for custom styling.

## 🚀 Deployment

### Frontend Deployment
The frontend can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages

### Backend Deployment
Deploy the Express server to:
- Heroku
- Railway
- DigitalOcean
- AWS

Make sure to set environment variables in your deployment platform.

## 📞 Support

For technical support or customization requests:
- **Email**: hello@situkart.com
- **Phone**: +91 7447665524
- **LinkedIn**: [Joel Jimmy](https://www.linkedin.com/in/joel-jimmy-27391a289/)

## 📄 License

This project is proprietary software developed for SiteKart.