// Sample data for faculty and student highlights
const facultiesData = [
  {
    name: "Dr. Jane Smith",
    role: "Faculty",
    photo:
      "https://raw.githubusercontent.com/mdkamranalam/bits_coding_club_website/refs/heads/main/assets/images/highlights/faculty-1.jpg",
    achievements: "Published a paper on AI optimization.",
    contributions: "Led the AI workshop series.",
    date: "2025-03-02",
  },
  {
    name: "Prof. Mark Lee",
    role: "Faculty",
    photo:
      "https://raw.githubusercontent.com/mdkamranalam/bits_coding_club_website/refs/heads/main/assets/images/highlights/faculty-2.jpg",
    achievements: "Secured funding for club projects.",
    contributions: "Mentored 10+ students in hackathons.",
    date: "2025-02-15",
  },
];

const studentsData = [
  {
    name: "Alex Martin",
    role: "Student",
    photo:
      "https://raw.githubusercontent.com/mdkamranalam/bits_coding_club_website/refs/heads/main/assets/images/highlights/student-1.jpg",
    achievements: "Won the Palindrome Checker Challenge.",
    contributions: "Built the club’s event registration system.",
    date: "2025-02-25",
  },
  {
    name: "Sarah Kim",
    role: "Student",
    photo:
      "https://raw.githubusercontent.com/mdkamranalam/bits_coding_club_website/refs/heads/main/assets/images/highlights/student-2.jpg",
    achievements: "Published an open-source API testing tool.",
    contributions: "Organized the Spring Code Jam.",
    date: "2025-02-28",
  },
];

// Function to display highlights
function displayFacultyHighlights() {
  const facultySection = document.getElementById("faculty-section");
  const studentSection = document.getElementById("student-section");

  // Sort by date (newest first)
  facultiesData.sort((a, b) => new Date(b.date) - new Date(a.date));
  studentsData.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Generate HTML for each profile
  facultySection.innerHTML = facultiesData
    .map(
      (item) => `
      <div class="faculty-card">
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

  studentSection.innerHTML = studentsData
    .map(
      (item) => `
      <div class="student-card">
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
window.onload = displayFacultyHighlights;
