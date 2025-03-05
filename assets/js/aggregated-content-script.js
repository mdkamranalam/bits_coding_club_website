// Sample data (replace with your own events)
const contentData = [
  {
    title: "Regional Hackathon",
    type: "Event",
    date: "2025-03-01",
    description: "Our team took 2nd place with an AI recycling app!",
  },
  {
    title: "Intro to Python Workshop",
    type: "Workshop",
    date: "2025-03-05",
    description: "Learn Python basics this Saturday.",
  },
  {
    title: "AI in Coding Talk",
    type: "Guest Talk",
    date: "2025-03-10",
    description: "Jane Doe from xAI shares her insights.",
  },
  {
    title: "Code Challenge Finale",
    type: "Event",
    date: "2025-02-25",
    description: "Alex M. won with a palindrome checker.",
  },
];

// Function to sort and display content
function displayContent() {
  const contentSection = document.getElementById("content-section");

  // Sort by date (newest first)
  contentData.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Generate HTML for each item
  contentSection.innerHTML = contentData
    .map(
      (item) => `
      <div class="content-card">
        <h3>${item.title}</h3>
        <p class="type">${item.type}</p>
        <p class="date">${new Date(item.date).toLocaleDateString()}</p>
        <p>${item.description}</p>
      </div>
    `
    )
    .join("");
}

// Call the function when the page loads
window.onload = displayContent;
