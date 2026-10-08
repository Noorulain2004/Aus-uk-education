# AUS (UK) Education — System Architecture

## 1. Platform Overview

AUS (UK) Education will be a production-ready education platform consisting of:

- Public Website
- Student Portal
- Admin Portal
- Backend API
- PostgreSQL Database
- Secure File Storage
- Online Payment Gateway
- Transactional Email System

## 2. Main User Roles

### Visitor
Can browse courses, view course information, FAQs, about information and contact AUS.

### Student
Can:
- Create/login to an account
- View enrolled courses
- Access course materials
- View assignments
- Upload assignments
- View submission status
- Resubmit when requested
- Manage basic account information

### Admin
Can:
- Manage courses
- Manage students
- Manage enrolments
- View payments
- Manage course materials
- Review assignments
- Provide feedback
- Request resubmissions
- Approve final submissions
- Manage completion
- Trigger/send certificate emails
- Manage email templates
- View basic reports

## 3. Core Platform Flow

Visitor
→ Select Course
→ Enrol
→ Online Payment
→ Automatic Enrolment
→ Student Account
→ Welcome Email
→ Student Portal
→ Course Materials
→ Assignment Submission
→ Admin Review
→ Approval / Resubmission
→ Final Approval
→ Completion
→ Certificate Email

## 4. Application Structure

Frontend:
Next.js + TypeScript + Tailwind CSS

Backend:
Separate backend application for API and business logic.

Database:
PostgreSQL

Authentication:
Role-based secure authentication.

Payments:
Online payment gateway.

Storage:
Secure cloud file storage for course materials and student submissions.

Email:
Transactional email service.

## 5. Security Principles

- Students can only access their own data.
- Students can only access courses they are enrolled in.
- Assignment files must not be publicly accessible.
- Admin functionality must require authenticated admin access.
- Passwords must never be stored in plain text.
- Payment card details must not be stored directly by AUS.
- Secrets and API keys must be stored in environment variables.
- Production traffic must use HTTPS.

## 6. Development Principle

Courses and platform content must not be hard-coded.

Administrators should be able to create and manage courses through the Admin Portal.

Published courses should automatically appear on the public website.

## 7. Initial Scope

Public Website:
- Home
- Courses
- Course Details
- How It Works
- About
- FAQs
- Contact
- Enrolment/Checkout
- Legal Pages

Student Portal:
- Dashboard
- My Courses
- Course Materials
- Assignments
- Submissions
- Resubmissions
- Profile

Admin Portal:
- Dashboard
- Courses
- Students
- Enrolments
- Payments
- Assignments
- Completion
- Email Management
- Reports
- Settings
