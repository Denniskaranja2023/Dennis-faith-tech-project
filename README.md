# Faith Tech Store Frontend

This is the frontend project for the Faith Tech Store, a React-based ecommerce application. It includes product browsing, user authentication, cart management, and order processing features.

## Features Covered

- Product listing and filtering
- User signup and login with authentication context
- Shopping cart with item count display
- Responsive navbar with navigation links and logout button
- Product details and order confirmation pages
- Basic styling using CSS variables and global theming

## Setup and Installation

### Prerequisites

- Node.js & npm installed on your system.
- Backend API running or accessible at `http://localhost:5000`

### Installation Steps

1. Clone the repository or copy the project files.
2. Navigate to the Frontend directory:
   ```bash
   cd Frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

### Start the React Development Server

This runs the React app in development mode on `http://localhost:3000`

```bash
npm run dev
```

The app will automatically reload when you make edits.

### Run JSON Server Mock API

The project uses a JSON server to mock backend API endpoints for products and users. This should be run in a separate terminal.

```bash
npm run json-server
```

This spins up a local server at `http://localhost:5000`.

## Using the Application

- Visit `http://localhost:3000` in your browser.
- Use the navigation bar to browse products, view cart, or login/signup.
- The navbar includes a logout button to clear authentication and return to the login page.
- Product listing supports filtering and searching.
- The signup page includes a login button to switch to the login page.
- Styling is consistent and uses project-wide CSS variables defined in the theme.

## Project Structure

- `src/pages` - React pages like Login, Signup, ProductDisplay, etc.
- `src/components` - Reusable components like Navbar, Footer, Header
- `src/context` - React context for authentication and cart state
- `src/styles` - CSS files including global styles and theme variables
- `db.json` - JSON file used by json-server for mocking API data

## Notes

- Ensure both the React dev server and JSON server are running simultaneously for full functionality.
- The JSON server mimics the backend API and uses the `db.json` file for data.
- This setup is intended for local development and testing.

---

For any issues or contributions, please open an issue or a pull request.

Thank you for using Faith Tech Store Frontend!
