document.addEventListener("DOMContentLoaded", () => {
  // Dynamic Aggregated Content Sorting (example)
  const contentList = document.getElementById("content-list");
  if (contentList) {
    const items = Array.from(contentList.children);
    items.sort(
      (a, b) =>
        new Date(b.textContent.split(":")[0]) -
        new Date(a.textContent.split(":")[0])
    );
    contentList.innerHTML = "";
    items.forEach((item) => contentList.appendChild(item));
  }

  // Add more dynamic features (e.g., calendar updates) as needed
  console.log("Website loaded successfully");
});

// # Responsive navbar
const menuList = document.getElementById("menu-list");

menuList.style.maxHeight = "0px";

function toggleMenu() {
  if ((menuList.style.maxHeight === "0px")) {
    menuList.style.maxHeight = "300px";
  } else {
    menuList.style.maxHeight = "0px";
  }
}
