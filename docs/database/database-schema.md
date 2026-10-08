# AUS (UK) Education — Database Schema

## 1. Users

Stores authentication and account information.

Fields:
- id
- email
- password_hash
- role
- first_name
- last_name
- phone
- status
- created_at
- updated_at

Roles:
- student
- admin

---

## 2. Courses

Stores all courses displayed on the public website.

Fields:
- id
- title
- slug
- level
- subject
- short_description
- description
- price
- duration
- entry_requirements
- assessment_information
- awarding_organisation
- status
- created_at
- updated_at

Status:
- draft
- published
- archived

---

## 3. Course Content

Stores modules and structured course content.

Fields:
- id
- course_id
- title
- description
- sort_order
- created_at
- updated_at

Relationship:
Course → Course Content
One course can have multiple content sections.

---

## 4. Course Materials

Stores learning documents/files associated with a course.

Fields:
- id
- course_id
- title
- description
- file_url
- file_type
- sort_order
- created_at
- updated_at

---

## 5. Course FAQs

Stores FAQs specific to a course.

Fields:
- id
- course_id
- question
- answer
- sort_order
- created_at
- updated_at

---

## 6. Enrolments

Connects students to courses.

Fields:
- id
- student_id
- course_id
- order_id
- status
- enrolled_at
- completed_at
- created_at
- updated_at

Status:
- active
- completed
- cancelled

Relationship:
Student → Enrolments → Course

---

## 7. Orders

Stores customer orders.

Fields:
- id
- student_id
- course_id
- amount
- currency
- payment_status
- payment_provider
- payment_reference
- created_at
- updated_at

Payment status:
- pending
- paid
- failed
- refunded

---

## 8. Assignments

Stores assignments associated with courses.

Fields:
- id
- course_id
- title
- description
- instructions
- due_date
- sort_order
- created_at
- updated_at

---

## 9. Assignment Submissions

Stores student assignment submissions.

Fields:
- id
- assignment_id
- student_id
- file_url
- submitted_at
- status
- admin_feedback
- reviewed_by
- reviewed_at
- created_at
- updated_at

Status:
- not_submitted
- submitted
- under_review
- resubmission_required
- approved

---

## 10. Assignment Feedback

Stores structured feedback from administrators.

Fields:
- id
- submission_id
- admin_id
- feedback
- created_at

---

## 11. Completion Records

Stores final course completion information.

Fields:
- id
- student_id
- course_id
- completion_date
- approved_by
- status
- created_at

Status:
- pending
- completed

---

## 12. Certificates

Stores certificate references.

Fields:
- id
- student_id
- course_id
- certificate_reference
- certificate_file_url
- issued_at
- emailed_at
- created_at

---

## 13. Email Logs

Records important automated emails.

Fields:
- id
- recipient_id
- email_type
- subject
- status
- provider_reference
- sent_at
- created_at

Examples:
- enrolment_confirmation
- account_welcome
- assignment_submitted
- resubmission_required
- course_completed
- certificate_issued

---

## 14. Relationships

Users
→ Students/Admins

Students
→ Enrolments
→ Orders
→ Assignment Submissions
→ Completion Records
→ Certificates

Courses
→ Course Content
→ Course Materials
→ Course FAQs
→ Enrolments
→ Assignments

Assignments
→ Assignment Submissions

Assignment Submissions
→ Assignment Feedback

Completion Records
→ Certificates

Users/Admins
→ Assignment Feedback
→ Completion Approvals
→ Email Logs

---

## 15. Important Rules

1. A student can enrol in multiple courses.
2. A course can have multiple students.
3. A course can have multiple assignments.
4. A student can submit an assignment multiple times if resubmission is requested.
5. Only authorised admins can review submissions.
6. Students can only access their own submissions and enrolled courses.
7. Course content must be manageable through the Admin Portal.
8. Course data must never be hard-coded into the frontend.
9. Payment card information must not be stored in the database.
10. Assignment and course-material files must use secure storage.
