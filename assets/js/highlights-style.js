// Sample data for faculty and student highlights
const highlightsData = [
  {
    name: "Dr. Jane Smith",
    role: "Faculty",
    photo: "https://via.placeholder.com/100", // Replace with real image URL
    achievements: "Published a paper on AI optimization.",
    contributions: "Led the AI workshop series.",
    date: "2025-03-02",
  },
  {
    name: "Alex Martin",
    role: "Student",
    photo: "https://via.placeholder.com/100",
    achievements: "Won the Palindrome Checker Challenge.",
    contributions: "Built the club’s event registration system.",
    date: "2025-02-25",
  },
  {
    name: "Prof. Mark Lee",
    role: "Faculty",
    photo: "https://via.placeholder.com/100",
    achievements: "Secured funding for club projects.",
    contributions: "Mentored 10+ students in hackathons.",
    date: "2025-02-15",
  },
  {
    name: "Sarah Kim",
    role: "Student",
    photo: "https://via.placeholder.com/100",
    achievements: "Published an open-source API testing tool.",
    contributions: "Organized the Spring Code Jam.",
    date: "2025-02-28",
  },
];

// Function to display highlights
function displayHighlights() {
  const highlightsSection = document.getElementById("highlights-section");

  // Sort by date (newest first)
  highlightsData.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Generate HTML for each profile
  highlightsSection.innerHTML = highlightsData
    .map(
      (item) => `
      <div class="highlight-card">
        ${
          item.photo
            ? `<img src="${item.photo}" alt="${item.name}">`
            : `<div class="no-photo">${item.name[0]}</div>`
        }
        <h3>${item.name}</h3>
        <div class="role" data-role="${item.role}">${item.role}</div>
        <div class="date">${new Date(item.date).toLocaleDateString()}</div>
        <div class="achievements"><strong>Achievements:</strong> ${
          item.achievements
        }</div>
        <div class="contributions"><strong>Contributions:</strong> ${
          item.contributions
        }</div>
      </div>
    `
    )
    .join("");
}

// Load highlights when the page loads
window.onload = displayHighlights;
