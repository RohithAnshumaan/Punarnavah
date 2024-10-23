Link
Client Link
Folder Structure
pages folder: Contains the different route pages like Login, Signup, Dashboard, etc.
components folder: Contains reusable UI components.
Routes
path="/" --> LoginPage
path="/signup" --> SignupPage
path="/home" --> DashboardPage
path="/create" --> CreateEmployeePage
path="/employeelist" --> EmployeeListPage 
path="/update/:id" --> UpdateEmployeePage
Pages
Signup Page (/signup)
Fields: Username, Password
Constraints:
Username must be unique
Password must have a minimum of 8 characters
image

Login Page (/)
Fields: Username, Password
Constraints:
User must sign up first
Username must be unique
Password must have a minimum of 8 characters
image

Dashboard Page (/home)
Displays a welcome message
Navbar includes options like Employee List, Logout, etc.
Username is displayed in the navbar
image

Create Employee Page (/create)
Name: Text field
Email: Text field (should be unique)
Mobile No.: Text field (minimum of 10 characters)
Designation: Dropdown
Gender: Radio buttons
Course: Checkbox
Image Upload: Only JPG/PNG
image

Employee List Page (/employeelist)
Search functionality considers all fields in the table
List of employees with Edit and Delete actions
Clicking Edit passes the employee's ID as a parameter to the Update Employee Page
image

Update Employee Page (/update/:id)
On load, the employee's data is fetched using the id and pre-filled in the form
Admin can edit the initial values
image

Authentication Check (isLoggedIn):
The isLoggedIn variable is used to check if a user is authenticated by checking if the username exists in localStorage.
If username is present in localStorage, the user is considered logged in.
If the user is logged in (isLoggedIn is true), they are redirected to the /home route using <Navigate to="/home" replace />
