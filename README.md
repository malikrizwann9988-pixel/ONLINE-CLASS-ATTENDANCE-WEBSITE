# Online Class Attendance Website

A simple, responsive web application that helps teachers manage student attendance online. Built with **HTML, CSS and JavaScript** as my final year project (Diploma in IT, 3rd year).

**Live demo:** https://malikrizwann9988-pixel.github.io/ONLINE-CLASS-ATTENDANCE-WEBSITE/

## Features

- **Admin login:** the app opens with a login page where the admin enters a username and password. After a successful login, the user is taken directly to the attendance page.
- **Attendance sheet:** shows all students in a table (roll number, name, status). The teacher can mark each student as present or absent and can delete a student from the list.
- **Add student:** the teacher can add a new student by entering their name and roll number. When submitted, the new student appears in the attendance table and the form is cleared.
- **Subject / class summary:** the teacher enters their name, the subject they are teaching, the department/class, and the number of present, absent and leave students. On submit, an attendance summary is displayed on the page.

## Pages

| Page | File |
|---|---|
| Login | `index.html` |
| Attendance | `Attendance.html` |
| Add Student | `addstudent.html` |
| Subject / Summary | `subject.html` |

## Technologies Used

- **HTML5** for the structure of the pages
- **CSS3** for styling and layout (`style.css`, `style1.css`, `style2.css`)
- **JavaScript** for login logic and dynamic behaviour (`index.js`)

No frameworks, libraries or external APIs are used.

## How to Run Locally

1. Clone the repository:
   ```
   git clone https://github.com/malikrizwann9988-pixel/ONLINE-CLASS-ATTENDANCE-WEBSITE.git
   ```
2. Open the project folder.
3. Double-click `index.html` to open it in your browser.

## Limitations and Future Improvements

This is a front-end project. It has no backend or database, and the login check runs in the browser, so it is not meant for real-world security. Planned improvements:

- Add a backend and database to store students and attendance permanently
- Secure authentication for teachers and admins
- Attendance reports by date, student and subject
- Export reports (PDF / Excel)

## Author

**Malik Rizwan**
GitHub: [@malikrizwann9988-pixel](https://github.com/malikrizwann9988-pixel)
