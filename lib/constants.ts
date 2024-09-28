export const redirects = {
  toLogin: "/login",
  toSignup: "/register",
  afterLogin: "/blood-bank",
  afterLogout: "/",
} as const;

export const siteConfig = {
  name: "AIMC Blood Donor Database",
  description:
    "The AIMC Blood Donor Database is a student-driven initiative focused on addressing the challenges of blood donation for patients. We maintain a centralized database of blood group information for all AIMC medical students to ensure timely and efficient donations.",
} as const;
