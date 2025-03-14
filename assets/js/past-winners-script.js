// Sample data for contest winners and guest talks
const winnersData = [
  {
    type: "Contest Winner",
    name: "Alex Martin",
    date: "2025-02-25",
    details: "Won the Palindrome Checker Challenge with an elegant solution.",
    image:
      "https://raw.githubusercontent.com/mdkamranalam/bits_coding_club_website/refs/heads/main/assets/images/past-winners/winner-student-2.jpg",
  },
  {
    type: "Contest Winner",
    name: "Team CodeStorm",
    date: "2025-03-01",
    details:
      "Took 2nd place in the Regional Hackathon with an AI recycling app.",
    image:
      "https://raw.githubusercontent.com/mdkamranalam/bits_coding_club_website/refs/heads/main/assets/images/past-winners/winner-team-1.jpg",
  },
  {
    type: "Contest Winner",
    name: "Sarah Kim",
    date: "2024-12-10",
    details: "1st place in the Winter Code Sprint with a sorting visualizer.",
    image:
      "https://raw.githubusercontent.com/mdkamranalam/bits_coding_club_website/refs/heads/main/assets/images/past-winners/winner-student-1.jpg",
  },
];

const guestsData = [
  {
    type: "Guest Talk",
    name: "Dr. Emily Chen",
    date: "2024-11-15",
    details: "Discussed 'Quantum Computing Basics' with our club.",
    image:
      "https://raw.githubusercontent.com/mdkamranalam/bits_coding_club_website/refs/heads/main/assets/images/guest_speakers/guest-speaker-2.jpg",
  },
  {
    type: "Guest Talk",
    name: "Jane Doe",
    date: "2025-03-10",
    details: "Senior dev at xAI spoke on 'The Future of AI in Coding'.",
    image:
      "https://raw.githubusercontent.com/mdkamranalam/bits_coding_club_website/refs/heads/main/assets/images/guest_speakers/guest-speaker-1.jpg",
  },
];

// Function to display history
function displayHistory() {
  const winnersSection = document.getElementById("winners-section");
  const guestsSection = document.getElementById("guests-section");

  // Sort by date (newest first)
  winnersData.sort((a, b) => new Date(b.date) - new Date(a.date));
  guestsData.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Generate HTML for each item
  winnersSection.innerHTML = winnersData
    .map(
      (item) => `
      <div class="winners-card">
        <img src="${item.image}" alt="${item.name}">
        <div class="type" data-type="${item.type}">${item.type}</div>
        <h3>${item.name}</h3>
        <div class="date">${new Date(item.date).toLocaleDateString()}</div>
        <p>${item.details}</p>
      </div>
    `
    )
    .join("");

  guestsSection.innerHTML = guestsData
    .map(
      (item) => `
      <div class="guests-card">
        <img src="${item.image}" alt="${item.name}">
        <div class="type" data-type="${item.type}">${item.type}</div>
        <h3>${item.name}</h3>
        <div class="date">${new Date(item.date).toLocaleDateString()}</div>
        <p>${item.details}</p>
      </div>
    `
    )
    .join("");
}

// Load history when the page loads
window.onload = displayHistory;
