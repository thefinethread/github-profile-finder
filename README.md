# GitHub Profile Finder

GitHub Profile Finder is a React.js-based web application that allows users to search for GitHub profiles and view detailed information about users along with their repositories. It utilizes React Router for routing, GitHub REST APIs for retrieving user and repository details, and the React Context API for state management.

## Features

- Search for GitHub profiles by username
- View detailed user profiles including avatar, username, bio, followers, following, etc.
- Display user repositories with details such as name, description, stars, forks, etc.
- Utilizes React Router for navigation between different views/pages
- Implements React Context API for efficient state management

## Technologies Used

- React.js
- React Router
- React Context API
- GitHub REST API

## Getting Started

To run this project locally, follow the steps below:

### Prerequisites

- Node.js and npm should be installed on your machine.

### Installation

1. Clone this repository to your local machine.

```bash
git clone https://github.com/thefinethread/github-profile-finder.git
```

2. Navigate to the project directory.

```bash
cd github-profile-finder
```

3. Install dependencies.

```bash
npm install
```

4. Create a `.env.local` file in the root directory of the project and add your GitHub PAT as follows:

```bash
REACT_APP_GITHUB_URL="https://api.github.com"
```

5. Start the React app.

```bash
npm start
```

6. Access the app in your browser at `http://localhost:3000`.

## Usage

- Enter a GitHub username in the search bar to find and view the corresponding user's profile.
- Navigate between user profile and repository details using the provided interface.
- Explore user details and repository information fetched from the GitHub REST API.
