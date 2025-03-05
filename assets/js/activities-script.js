// Sample data for student activities
const activitiesData = [
  {
    title: "Weather Dashboard",
    category: "Project",
    date: "2025-03-03",
    description: "A React-based dashboard showing real-time weather data.",
    link: "https://github.com/codingclub/weather-dashboard",
  },
  {
    title: "Regional Hackathon Win",
    category: "Competition",
    date: "2025-03-01",
    description: "Team CodeStorm took 2nd place with an AI recycling app!",
    link: null,
  },
  {
    title: "Mentorship Program Launch",
    category: "Initiative",
    date: "2025-02-20",
    description: "Pairing new coders with experienced mentors.",
    link: "mailto:codingclub@example.com?subject=Mentorship",
  },
  {
    title: "Palindrome Checker Challenge",
    category: "Competition",
    date: "2025-02-25",
    description: "Alex M. won with an elegant solution.",
    link: null,
  },
  {
    title: "Club Portfolio Site",
    category: "Project",
    date: "2025-01-15",
    description: "A collaborative site to showcase all club projects.",
    link: "https://codingclub.example.com",
  },
];

// Function to display activities
function displayActivities() {
  const activitiesSection = document.getElementById("activities-section");

  // Sort by date (newest first)
  activitiesData.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Generate HTML for each activity
  activitiesSection.innerHTML = activitiesData
    .map(
      (item) => `
      <div class="activity-card">
        <div class="category">${item.category}</div>
        <h3>${item.title}</h3>
        <div class="date">${new Date(item.date).toLocaleDateString()}</div>
        <p>${item.description}</p>
        ${
          item.link
            ? `<a href="${item.link}" target="_blank">Learn More</a>`
            : ""
        }
      </div>
    `
    )
    .join("");
}

// Load activities when the page loads
window.onload = displayActivities;
