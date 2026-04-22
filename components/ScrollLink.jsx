"use client";

export default function ScrollLink({ href, children }) {
  const handleClick = (e) => {
    e.preventDefault();

    const id = href.replace("/#", "");
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a href={href} onClick={handleClick}>
      {children}
    </a>
  );
}
