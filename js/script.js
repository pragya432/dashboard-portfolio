/**
 * Academic Data Visualization Portfolio
 * Central JavaScript File for Gallery & Dynamic Detail Page
 */

// --------------------------------------------------------------------------
// 1. Data Store - Academic Dashboards Registry
// --------------------------------------------------------------------------
const dashboardsData = [
  {
    id: "examination-analytics",
    title: "Examination & Result Analytics Dashboard",
    category: "Academic Analytics",
    tool: "Power BI",
    image: "images/examination-dashboard.png",
    shortDescription: "Analyze examination results, grade distributions, pass/fail performance trends, and student outcome metrics.",
    objective: "Created to comprehensively evaluate academic examination results, track pass/fail percentages across departments, analyze score distributions, and identify subject-wise failure patterns for targeted academic intervention.",
    dataset: "Anonymized institutional examination dataset containing 15,000+ student record entries spanning 4 academic years, including course codes, internal/external marks, semester terms, and degree programs.",
    keyVisualizations: [
      "KPI Cards: Overall Pass Rate %, Average Score, Total Students Examined, Distinction Count",
      "Grade Distribution Bar Chart: Detailed breakdown of A+, A, B, C, D, and F grades",
      "Semester-over-Semester Pass Rate Trend Line Chart",
      "Department & Subject Performance Heatmap Matrix",
      "Interactive Slicers for Academic Year, Department, and Semester filter"
    ],
    keyInsights: [
      "Overall institutional pass rate achieved an 88.4% benchmark, showing a +3.2% increase compared to the previous academic cycle.",
      "Department of Computer Science achieved the highest distinction rate (23.0%), whereas second-semester core subjects showed the highest variance in pass rates.",
      "Students scoring above 75% in internal evaluations demonstrated a 94% pass probability in final external semester examinations.",
      "Subject-level difficulty heatmap highlighted Discrete Mathematics as requiring additional tutorial support sessions."
    ]
  },
  {
    id: "student-performance",
    title: "Student Academic Performance Analysis",
    category: "Performance Tracking",
    tool: "Power BI",
    image: "images/student-performance-dashboard.png",
    shortDescription: "Analyze students' marks, attendance records, semester progress, and subject-wise academic performance.",
    objective: "Designed to monitor individual student academic trajectories, examine the direct correlation between class attendance and GPA outcomes, and provide faculty advisors with an early-warning system for at-risk students.",
    dataset: "Student Information System (SIS) academic records containing monthly attendance logs, mid-term test scores, lab practical grades, assignment submissions, and overall semester GPA aggregates.",
    keyVisualizations: [
      "KPI Cards: Total Active Students, Average Attendance Rate %, Cumulative GPA, At-Risk Student Count",
      "Attendance vs. Marks Scatter Plot with Linear Regression Correlation Trendline",
      "Subject-Wise Marks Breakdown (Grouped Bar Chart comparing Theory vs. Practical scores)",
      "Student Advisory Flag Roster (Interactive Data Table with Distinction and Risk Badges)",
      "Semester Progression Radar Chart & Attendance Filter Slicers"
    ],
    keyInsights: [
      "A strong positive statistical correlation (r = 0.78) was identified between student attendance rates above 85% and final GPA scores above 3.5.",
      "Students attending fewer than 65% of practical lab sessions exhibited a 3.5x higher probability of receiving academic warning flags.",
      "Practical assessment scores consistently outperformed written theory examination averages by an average of 8.2 points across technical subjects.",
      "Early advisory intervention triggered by mid-term attendance alerts resulted in a 40% grade recovery rate before final examinations."
    ]
  },
  {
    id: "paper-leak-analysis",
    title: "Paper Leak Analysis Dashboard",
    category: "Investigative Analytics",
    tool: "Power BI",
    image: "images/paper-leak-dashboard.png",
    shortDescription: "Investigative dashboard analyzing paper leak incidents using date, area, exam name, leak status, and confidence levels.",
    objective: "Created as an investigative security intelligence dashboard to map reported examination breach incidents, evaluate confidence metrics across reporting channels, track incident resolution lifecycles, and analyze root cause vectors.",
    dataset: "Geocoded incident report dataset covering nationwide competitive and academic exam security logs, timestamped incident reports, verification confidence scores (High/Medium/Low), and regional examination board data.",
    keyVisualizations: [
      "KPI Cards: Total Incidents Reported, Confirmed Leak Rate %, High-Confidence Flag Ratio, Average Time-to-Resolution",
      "Decomposition Tree: Root Cause Breakdown across Digital Messaging, Physical Leak, and Staff Anomalies",
      "Waterfall Chart: Verification Lifecycle from Initial Report to Final Status Confirmation",
      "Treemap: Incident Density by Examination Category and Exam Board",
      "100% Stacked Bar Chart & Regional Risk Matrix by Geographical Zone",
      "Ribbon Chart & Scatter Plot for Severity vs. Time-to-Detection"
    ],
    keyInsights: [
      "Decomposition tree analysis revealed that digital messaging platforms accounted for 74% of rapid question paper dissemination instances.",
      "Geographic risk clustering identified that 62% of verified high-confidence breach alerts originated from 4 high-density examination centers.",
      "Average time-to-detection was reduced to 4.5 hours post-distribution, enabling swift administrative containment protocols.",
      "High-confidence breach flags correlated strongly with center administrative anomalies logged during afternoon session distributions."
    ]
  }
];

// --------------------------------------------------------------------------
// 2. Main Initialization Function
// --------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();

  // Check if current page is Gallery (index.html) or Detail Page (dashboard.html)
  if (document.getElementById("dashboard-grid")) {
    initGalleryPage();
  } else if (document.getElementById("detail-content")) {
    initDetailPage();
  }

  // Setup Lightbox functionality if lightbox exists on page
  setupLightbox();
});

// --------------------------------------------------------------------------
// 3. Navigation & Mobile Menu Handler
// --------------------------------------------------------------------------
function setupNavigation() {
  const toggleBtn = document.querySelector(".mobile-menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      const isExpanded = navMenu.classList.contains("active");
      toggleBtn.setAttribute("aria-expanded", isExpanded);
    });
  }

  // Scroll to top button
  const scrollTopBtn = document.querySelector(".btn-scroll-top");
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

// --------------------------------------------------------------------------
// 4. Gallery Page Logic (`index.html`)
// --------------------------------------------------------------------------
function initGalleryPage() {
  const gridContainer = document.getElementById("dashboard-grid");
  const searchInput = document.getElementById("search-input");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const dashboardCountBadge = document.getElementById("dashboard-count");

  let currentCategory = "all";
  let currentSearchQuery = "";

  // Render initial dashboard cards
  renderCards(dashboardsData);

  // Search Input listener
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearchQuery = e.target.value.toLowerCase().trim();
      filterAndRender();
    });
  }

  // Filter Buttons listener
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-category");
      filterAndRender();
    });
  });

  // Filter & Render helper
  function filterAndRender() {
    const filtered = dashboardsData.filter((item) => {
      const matchesCategory =
        currentCategory === "all" ||
        item.category.toLowerCase().replace(/\s+/g, "-") === currentCategory ||
        item.tool.toLowerCase().replace(/\s+/g, "-") === currentCategory;

      const matchesSearch =
        item.title.toLowerCase().includes(currentSearchQuery) ||
        item.shortDescription.toLowerCase().includes(currentSearchQuery) ||
        item.category.toLowerCase().includes(currentSearchQuery) ||
        item.tool.toLowerCase().includes(currentSearchQuery);

      return matchesCategory && matchesSearch;
    });

    renderCards(filtered);
    updateCountBadge(filtered.length, dashboardsData.length);
  }

  function updateCountBadge(currentCount, totalCount) {
    if (dashboardCountBadge) {
      if (currentCount === totalCount) {
        dashboardCountBadge.innerHTML = `<i class="fa-solid fa-chart-pie"></i> ${totalCount} Dashboards`;
      } else {
        dashboardCountBadge.innerHTML = `<i class="fa-solid fa-filter"></i> ${currentCount} of ${totalCount} Dashboards`;
      }
    }
  }

  function renderCards(items) {
    gridContainer.innerHTML = "";

    if (items.length === 0) {
      gridContainer.innerHTML = `
        <div class="no-results">
          <i class="fa-solid fa-magnifying-glass"></i>
          <h3>No matching dashboards found</h3>
          <p style="color: var(--text-secondary); margin-top: 0.5rem;">Try adjusting your search terms or selecting a different category filter.</p>
        </div>
      `;
      return;
    }

    items.forEach((item) => {
      const card = document.createElement("article");
      card.className = "dashboard-card";
      card.setAttribute("tabindex", "0");
      card.setAttribute("aria-label", `View ${item.title}`);

      card.innerHTML = `
        <div class="card-image-wrapper">
          <img src="${item.image}" alt="${item.title} Screenshot Preview" class="card-image" loading="lazy">
          <span class="card-badge"><i class="fa-solid fa-chart-bar"></i> ${item.tool}</span>
        </div>
        <div class="card-body">
          <span class="card-category">${item.category}</span>
          <h3 class="card-title">${item.title}</h3>
          <p class="card-description">${item.shortDescription}</p>
          <div class="card-footer">
            <span class="btn-view-card">View Dashboard <i class="fa-solid fa-arrow-right"></i></span>
          </div>
        </div>
      `;

      // Event listener for opening detail page
      const navigateToDetail = () => {
        window.location.href = `dashboard.html?id=${item.id}`;
      };

      card.addEventListener("click", navigateToDetail);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          navigateToDetail();
        }
      });

      gridContainer.appendChild(card);
    });
  }
}

// --------------------------------------------------------------------------
// 5. Dashboard Detail Page Logic (`dashboard.html`)
// --------------------------------------------------------------------------
function initDetailPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const dashboardId = urlParams.get("id");

  // Find matching dashboard or default to first dashboard
  const currentDashboard =
    dashboardsData.find((d) => d.id === dashboardId) || dashboardsData[0];

  // Update Page Title
  document.title = `${currentDashboard.title} — Data Visualization Portfolio`;

  // Populate Title & Tags
  document.getElementById("detail-title").textContent = currentDashboard.title;
  document.getElementById("detail-tool").innerHTML = `<i class="fa-solid fa-chart-line"></i> ${currentDashboard.tool}`;
  document.getElementById("detail-category").textContent = currentDashboard.category;

  // Populate Main Image & Image path code indicator
  const imgElement = document.getElementById("detail-img");
  imgElement.src = currentDashboard.image;
  imgElement.alt = `${currentDashboard.title} Complete Power BI Screenshot`;
  
  const pathCodeElement = document.getElementById("img-path-code");
  if (pathCodeElement) {
    pathCodeElement.textContent = currentDashboard.image;
  }

  // Populate Objective
  document.getElementById("detail-objective").textContent = currentDashboard.objective;

  // Populate Dataset
  document.getElementById("detail-dataset").textContent = currentDashboard.dataset;

  // Populate Key Visualizations List
  const vizList = document.getElementById("detail-visualizations");
  vizList.innerHTML = "";
  currentDashboard.keyVisualizations.forEach((viz) => {
    const li = document.createElement("li");
    li.className = "viz-item";
    li.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${viz}</span>`;
    vizList.appendChild(li);
  });

  // Populate Key Insights List
  const insightsList = document.getElementById("detail-insights");
  insightsList.innerHTML = "";
  currentDashboard.keyInsights.forEach((insight) => {
    const div = document.createElement("div");
    div.className = "insight-card";
    div.innerHTML = `
      <i class="fa-solid fa-lightbulb insight-icon"></i>
      <div class="insight-text">${insight}</div>
    `;
    insightsList.appendChild(div);
  });

  // Fullscreen View Button Listener
  const fullscreenBtn = document.getElementById("btn-fullscreen");
  if (fullscreenBtn) {
    fullscreenBtn.addEventListener("click", () => {
      openLightbox(currentDashboard.image, currentDashboard.title);
    });
  }

  // Clicking screenshot directly opens lightbox
  const screenshotViewport = document.querySelector(".screenshot-viewport");
  if (screenshotViewport) {
    screenshotViewport.addEventListener("click", () => {
      openLightbox(currentDashboard.image, currentDashboard.title);
    });
  }
}

// --------------------------------------------------------------------------
// 6. Lightbox Fullscreen Modal Handler
// --------------------------------------------------------------------------
function setupLightbox() {
  const modal = document.getElementById("lightbox-modal");
  const closeBtn = document.getElementById("lightbox-close");

  if (!modal) return;

  const closeModal = () => {
    modal.classList.remove("active");
  };

  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.classList.contains("lightbox-img-container")) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
}

function openLightbox(imgSrc, titleText) {
  const modal = document.getElementById("lightbox-modal");
  const modalImg = document.getElementById("lightbox-img");
  const modalTitle = document.getElementById("lightbox-title");

  if (modal && modalImg) {
    modalImg.src = imgSrc;
    modalImg.alt = `${titleText} Fullscreen View`;
    if (modalTitle) modalTitle.textContent = titleText;
    modal.classList.add("active");
  }
}
