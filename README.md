# AIMC Blood Bank

The AIMC Blood Bank is a student-driven initiative focused on addressing the challenges of blood donation for patients. We maintain a centralized database of blood group information for all AIMC medical students to ensure timely and efficient donations.

## About

The AIMC Blood Bank project is designed to streamline the process of blood donation within the AIMC community. By providing a centralized database of blood group information for medical students, we aim to facilitate quick and efficient blood donations when needed.

## Features

- Centralized Blood Group Database: Quick access to blood group information of AIMC students
- Student-Led Initiative: Developed by students, for the community
- Easy Search Functionality: Efficiently find compatible blood donors
- Secure Authentication: Login system to ensure data privacy and authorized access
- Responsive Design: User-friendly interface accessible on various devices

## Tech Stack

- Next.js: React framework for building the web application
- Tailwind CSS: Utility-first CSS framework for styling
- Next-auth: Authentication solution for Next.js applications
- Drizzle ORM: TypeScript ORM for SQL databases
- Shadcn UI: Customizable UI components
- PostgreSQL: Robust relational database for storing user and blood bank data

## Environment Variables

To run this project, you will need to add the following environment variables:

- `POSTGRES_URL`: PostgreSQL database URL
- `PG_SSL`: PostgreSQL SSL certificate (if required)
- `AUTH_GOOGLE_ID`: Google OAuth Client ID
- `AUTH_GOOGLE_SECRET`: Google OAuth Client Secret
- `AUTH_SECRET`: Next-auth secret key
- `NEXT_PUBLIC_APP_URL`: Public URL of the application (e.g., http://localhost:3000/)

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables in a `.env.local` file
4. Run the development server: `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Contributing

We welcome contributions from the AIMC community. If you'd like to contribute, please fork the repository and create a pull request with your changes.

## License

This project is licensed under the [MIT License](LICENSE).