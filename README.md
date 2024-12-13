# Swimlane Dashboard

This project is a React-based application that implements a swimlane dashboard as per the provided design mockup. The application includes features such as task management, drag-and-drop functionality, data persistence, and dynamic search. Authentication is also incorporated to restrict access to the dashboard.

## Features

### UI Implementation

- Recreated the swimlane dashboard based on the provided Figma design (`Board App – Dashboard.fig`).
- Pixel-perfect and responsive layout, compatible with screen sizes down to 768px.
- Cross-browser compatibility ensured.
- Styled using **TailwindCSS** and **shadCN** for a clean and modern appearance.

### Swimlane Features

- Displays tasks in swimlanes based on their status.
- Allows drag-and-drop functionality to move tasks between swimlanes.
- Updates task status dynamically when moved.

### State Management

- Utilized **React Context API** for managing task data, ensuring efficient and scalable state management.
- Tasks update their status in real-time when moved between swimlanes.

### Prepopulate Data

- Mock API implemented using a JSON file to prepopulate task data on application load.

### Data Persistence

- Task updates persist across page reloads using **localStorage**.

### Search Task

- Dynamic search bar filters tasks as the user types, showing only tasks that match the search query.

### Authentication

- Added authentication functionality to restrict access to the dashboard.
- Users must log in to view and manage tasks.

### TypeScript Support

- Entire application implemented using **TypeScript** for better type safety and developer experience.

## Installation

### Prerequisites

- Node.js (>=16.0)
- npm or yarn

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/abdulladone94/visionex-dashboard-react
   ```

2. Navigate to the project directory:

   ```bash
   cd swimlane-dashboard
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server:

   ```bash
   npm run dev
   # or
   yarn run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`.

## Usage

1. Login with the provided credentials or create a new account.
2. View tasks in the swimlane dashboard, organized by their status.
3. Drag and drop tasks between swimlanes to update their status.
4. Use the search bar to filter tasks dynamically.

## Authentication

- Users are required to log in before accessing the dashboard.
- Implemented using a custom authentication context and state.
- Future integration with external authentication services (e.g., Firebase, Auth0) is possible.

## Dependencies

- React (>=18.0)
- TailwindCSS
- React Redux
- react-dnd
- TypeScript

## Future Improvements

- Add user roles and permissions.
- Integrate with a backend API for real-time updates.
- Enhance drag-and-drop experience using libraries like `react-beautiful-dnd`.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

Happy Coding!
