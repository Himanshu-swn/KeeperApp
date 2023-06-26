import React from "react";

const date = new Date();

function Footer() {
  return (
    <footer>
      <p> © {date.getFullYear()} Himanshu Sangwan</p>
    </footer>
  );
}

export default Footer;
