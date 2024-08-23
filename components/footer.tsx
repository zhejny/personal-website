import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div>&copy; {currentYear} Zachary Hejny</div>
    </footer>
  );
}
