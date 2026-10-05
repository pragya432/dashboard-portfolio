/**
 * Academic & Business Analytics Portfolio
 * Modular JavaScript Registry for Multi-Tool Dashboards
 */

// --------------------------------------------------------------------------
// 1. Data Store - Centralized Dashboards Registry (4 Core Dashboards)
// --------------------------------------------------------------------------
const dashboardsData = [
  {
    id: "paper-leak",
    title: "Paper Leak Analysis Dashboard",
    category: "Academic Analytics",
    tool: "Power BI",
    toolClass: "power-bi",
    images: [
      {
        src: "images/paper-leak-dashboard.png",
        caption: "Paper Leak Analysis Executive Dashboard View"
      }
    ],
    shortDescription: "Investigative security dashboard analyzing paper leak incidents across dates, examination boards, leak status, and verification confidence metrics.",
    objective: "Created as an investigative security intelligence dashboard to map reported examination breach incidents, evaluate confidence metrics across reporting channels, track incident resolution lifecycles, and analyze root cause vectors.",
    dataset: "Geocoded incident report database covering nationwide competitive and academic exam security logs, timestamped incident reports, verification confidence scores, and affected candidate counts.",
    kpis: [],
    keyVisualizations: [
      "Decomposition Tree: Root Cause Breakdown across Digital Messaging, Physical Leak, and Staff Anomalies",
      "Waterfall Chart: Verification Lifecycle from Initial Report to Final Status Confirmation",
      "Treemap: Incident Density by Examination Category and Exam Board",
      "100% Stacked Bar Chart & Regional Risk Matrix by Geographical Zone",
      "Ribbon Chart & Scatter Plot for Severity vs. Time-to-Detection"
    ],
    keyInsights: []
  },
  {
    id: "examination-result",
    title: "Examination and Result Dashboard",
    category: "Academic Analytics",
    tool: "Power BI",
    toolClass: "power-bi",
    images: [
      {
        src: "images/examination-dashboard.png",
        caption: "Examination & Result Analytics Overview Canvas"
      }
    ],
    shortDescription: "Analyze examination results, grade distributions, pass/fail performance trends, and student outcome metrics across academic departments.",
    objective: "Created to evaluate academic examination results, track pass/fail percentages across departments, analyze score distributions, and identify subject-wise failure patterns for targeted academic intervention.",
    dataset: "Anonymized institutional examination dataset containing student record entries spanning academic years, including course codes, internal/external marks, semester terms, and degree programs.",
    kpis: [],
    keyVisualizations: [
      "KPI Cards: Overall Pass Rate %, Average Score, Total Students Examined, Distinction Count",
      "Grade Distribution Bar Chart: Detailed breakdown of A+, A, B, C, D, and F grades",
      "Semester-over-Semester Pass Rate Trend Line Chart",
      "Department & Subject Performance Heatmap Matrix",
      "Interactive Slicers for Academic Year, Department, and Semester filter"
    ],
    keyInsights: []
  },
  {
    id: "sales-by-category",
    title: "Sales by Category Dashboard",
    category: "Sales Analytics",
    tool: "Data Studio / Looker Studio",
    toolClass: "looker-studio",
    images: [
      {
        src: "images/sales-by-category-dashboard.png",
        caption: "Sales by Category Looker Studio Analytics View"
      }
    ],
    shortDescription: "Sales analytics dashboard tracking category-wise revenue distribution, product performance, sales volume trends, and profit margins.",
    objective: "Designed to monitor category-level sales revenue, evaluate product margin performance, track top-selling retail categories, and analyze purchasing trends over time using interactive Data Studio / Looker Studio controls.",
    dataset: "Retail e-commerce transaction dataset including product category hierarchies, order values, quantity sold, discount percentages, and monthly sales volume metrics.",
    kpis: [],
    keyVisualizations: [
      "Category Revenue Scorecard Cards",
      "Donut Chart: Category Sales Share % Breakdown",
      "Monthly Category Sales Trend Bar & Line Combo Chart",
      "Top Product Category Performance Table with Heatmap Cell Formatting",
      "Interactive Date Range & Region Slicers"
    ],
    keyInsights: []
  },
  {
    id: "sales-performance",
    title: "Sales Performance Dashboard",
    category: "Sales Analytics",
    tool: "Tableau",
    toolClass: "tableau",
    images: [
      {
        src: "images/sales-performance-dashboard.png",
        caption: "Tableau Executive Sales Performance Overview"
      }
    ],
    shortDescription: "Comprehensive executive sales dashboard evaluating regional sales growth, representative performance, target vs actual quotas, and customer segments.",
    objective: "Created to track overall business sales growth, analyze regional performance variations across territories, evaluate sales rep target attainment, and identify high-value customer segments using interactive Tableau parameters.",
    dataset: "Enterprise commercial sales database containing regional sales records, customer segment profiles, quarterly targets, order fulfillment metrics, and profit ratios.",
    kpis: [],
    keyVisualizations: [
      "Regional Sales Heatmap & Geographic Map View",
      "Target vs. Actual Quota Attainment Bullet Charts",
      "Quarterly Revenue & Profit Margin Dual-Axis Chart",
      "Sales Representative Ranking Leaderboard",
      "Customer Segment Breakdown Stacked Bar Chart"
    ],
    keyInsights: []
  }
];

// --------------------------------------------------------------------------
// 2. Main Initialization & Lifecycle Handler
// --------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();

  if (document.getElementById("dashboard-grid")) {
    initGalleryPage();
  } else if (document.getElementById("detail-content")) {
    initDetailPage();
  }

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

  const scrollTopBtn = document.querySelector(".btn-scroll-top");
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

// --------------------------------------------------------------------------
// 4. Gallery Main Page Logic (`index.html`)
// --------------------------------------------------------------------------
function initGalleryPage() {
  const gridContainer = document.getElementById("dashboard-grid");
  const searchInput = document.getElementById("search-input");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const dashboardCountBadge = document.getElementById("dashboard-count");

  let currentCategory = "all";
  let currentSearchQuery = "";

  renderCards(dashboardsData);

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearchQuery = e.target.value.toLowerCase().trim();
      filterAndRender();
    });
  }

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-category");
      filterAndRender();
    });
  });

  function filterAndRender() {
    const filtered = dashboardsData.filter((item) => {
      const matchesCategory =
        currentCategory === "all" ||
        item.category.toLowerCase().replace(/[^a-z0-9]/g, "-").includes(currentCategory) ||
        item.toolClass === currentCategory;

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
          <p style="color: var(--text-secondary); margin-top: 0.5rem;">Try adjusting your search query or choosing another filter category.</p>
        </div>
      `;
      return;
    }

    items.forEach((item) => {
      const card = document.createElement("article");
      card.className = "dashboard-card";
      card.setAttribute("tabindex", "0");
      card.setAttribute("aria-label", `View ${item.title}`);

      // Thumbnail image fallback if array empty
      const thumbSrc = item.images && item.images.length > 0 ? item.images[0].src : "images/placeholder.png";

      card.innerHTML = `
        <div class="card-image-wrapper">
          <img src="${thumbSrc}" alt="${item.title} Thumbnail Preview" class="card-image" loading="lazy" onerror="this.src='https://via.placeholder.com/800x450/0f172a/cbd5e1?text=${encodeURIComponent(item.title)}'">
          <span class="card-tool-badge ${item.toolClass}">
            <i class="fa-solid fa-layer-group"></i> ${item.tool}
          </span>
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
// 5. Dynamic Detail Page Logic (`dashboard.html`)
// --------------------------------------------------------------------------
function initDetailPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const dashboardId = urlParams.get("id");

  const currentDashboard =
    dashboardsData.find((d) => d.id === dashboardId) || dashboardsData[0];

  document.title = `${currentDashboard.title} — Data Analytics Portfolio`;

  // Title & Tool Badges
  document.getElementById("detail-title").textContent = currentDashboard.title;
  
  const toolBadgeElem = document.getElementById("detail-tool");
  toolBadgeElem.className = `detail-tool-tag ${currentDashboard.toolClass}`;
  toolBadgeElem.innerHTML = `<i class="fa-solid fa-screwdriver-wrench"></i> ${currentDashboard.tool}`;
  
  document.getElementById("detail-category").textContent = currentDashboard.category;
  document.getElementById("sidebar-tool").textContent = currentDashboard.tool;

  // Screenshot Gallery Rendering
  const galleryContainer = document.getElementById("screenshots-gallery-grid");
  galleryContainer.innerHTML = "";

  if (currentDashboard.images && currentDashboard.images.length > 0) {
    currentDashboard.images.forEach((imgObj, idx) => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "screenshot-item";
      itemDiv.setAttribute("title", "Click to view full screen");
      
      itemDiv.innerHTML = `
        <img src="${imgObj.src}" alt="${currentDashboard.title} Screenshot ${idx+1}" loading="lazy" onerror="this.src='https://via.placeholder.com/1200x675/0f172a/ffffff?text=${encodeURIComponent(currentDashboard.title + ' Screenshot ' + (idx+1))}'">
        ${imgObj.caption ? `<div class="screenshot-caption">${imgObj.caption}</div>` : ""}
      `;

      itemDiv.addEventListener("click", () => {
        openLightbox(imgObj.src, `${currentDashboard.title} — ${imgObj.caption || 'Screenshot ' + (idx+1)}`);
      });

      galleryContainer.appendChild(itemDiv);
    });
  } else {
    // If screenshots not yet provided in doc
    galleryContainer.innerHTML = `
      <div class="awaiting-doc-notice">
        <i class="fa-solid fa-file-word"></i>
        <h4>Screenshot Pending Word Document Upload</h4>
        <p>This section will display the exact, high-resolution screenshots extracted from your Word document once provided.</p>
      </div>
    `;
  }

  // Objective & Dataset
  document.getElementById("detail-objective").textContent = currentDashboard.objective || "Objective details will be loaded from your provided Word file.";
  document.getElementById("detail-dataset").textContent = currentDashboard.dataset || "Dataset specifications will be loaded from your provided Word file.";

  // KPIs Block Rendering (Conditional)
  const kpiBlock = document.getElementById("detail-kpi-block");
  const kpiGrid = document.getElementById("detail-kpis");
  kpiGrid.innerHTML = "";

  if (currentDashboard.kpis && currentDashboard.kpis.length > 0) {
    kpiBlock.style.display = "block";
    currentDashboard.kpis.forEach((kpi) => {
      const card = document.createElement("div");
      card.className = "kpi-metric-card";
      card.innerHTML = `
        <span class="kpi-metric-label">${kpi.label}</span>
        <span class="kpi-metric-value">${kpi.value}</span>
        ${kpi.sub ? `<span class="kpi-metric-sub">${kpi.sub}</span>` : ""}
      `;
      kpiGrid.appendChild(card);
    });
  } else {
    kpiBlock.style.display = "none";
  }

  // Key Visualizations List
  const vizBlock = document.getElementById("detail-viz-block");
  const vizList = document.getElementById("detail-visualizations");
  vizList.innerHTML = "";

  if (currentDashboard.keyVisualizations && currentDashboard.keyVisualizations.length > 0) {
    vizBlock.style.display = "block";
    currentDashboard.keyVisualizations.forEach((viz) => {
      const li = document.createElement("li");
      li.className = "viz-item";
      li.innerHTML = `<i class="fa-solid fa-chart-pie"></i> <span>${viz}</span>`;
      vizList.appendChild(li);
    });
  } else {
    vizBlock.style.display = "none";
  }

  // Key Insights List (Conditional)
  const insightsBlock = document.getElementById("detail-insights-block");
  const insightsList = document.getElementById("detail-insights");
  insightsList.innerHTML = "";

  if (currentDashboard.keyInsights && currentDashboard.keyInsights.length > 0) {
    insightsBlock.style.display = "block";
    currentDashboard.keyInsights.forEach((insight) => {
      const div = document.createElement("div");
      div.className = "insight-card";
      div.innerHTML = `
        <i class="fa-solid fa-lightbulb insight-icon"></i>
        <div class="insight-text">${insight}</div>
      `;
      insightsList.appendChild(div);
    });
  } else {
    insightsBlock.style.display = "none";
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
    modalImg.alt = `${titleText} Fullscreen`;
    if (modalTitle) modalTitle.textContent = titleText;
    modal.classList.add("active");
  }
}
