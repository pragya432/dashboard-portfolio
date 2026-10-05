/**
 * Academic & Business Analytics Portfolio
 * Real Data Registry extracted from Google Document
 */

// --------------------------------------------------------------------------
// 1. Data Store - 4 Core Dashboards with Real Content & Screenshots
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
        src: "images/paper-leak-dashboard-1.png",
        caption: "Paper Leak Incident Trends, Conducting Body & Status Distribution"
      },
      {
        src: "images/paper-leak-dashboard-2.png",
        caption: "Action Taken, Aspirants Affected, Arrests vs Convictions & Confidence Metrics"
      }
    ],
    shortDescription: "Investigative security dashboard analyzing paper leak incidents across conducting bodies, leak status, affected aspirants, and legal enforcement outcomes.",
    objective: "Designed as an investigative security intelligence dashboard to analyze reported paper leak incidents across dates, conducting bodies (Vyapam/MPPEB, CBSE, NTA, etc.), leak status, confidence levels, affected aspirants, and enforcement actions taken.",
    dataset: "Incident reports database containing breach records, conducting bodies (State vs Central), era classification (NDA vs UPA), affected candidate counts, and enforcement outcomes (Arrests/FIR, Convictions).",
    kpis: [
      { label: "Confirmed Leaks", value: "89 Cases", sub: "80.91% of total incidents" },
      { label: "High Confidence Flags", value: "81 Flags", sub: "73.64% verified confidence" },
      { label: "State Body Share", value: "88 Cases", sub: "80.0% of all incidents" },
      { label: "Central Body Share", value: "22 Cases", sub: "20.0% of all incidents" }
    ],
    keyVisualizations: [
      "Paper Leaks Over Time (Line Chart): Temporal incident trends from 2010 to 2020+ featuring a peak of 15 incidents around 2022.",
      "Leak Status Breakdown (Donut Chart): Confirmed (89 cases / 80.91%), Alleged (13 / 11.82%), Denied (5 / 4.55%), and Suspected cases.",
      "Conducting Body Breakdown (Horizontal Bar Chart & Treemap): Incident frequency across Vyapam (MPPEB), CBSE, NTA, and State Boards.",
      "State vs. Central Distribution (Pie Chart): State conducting bodies (88 cases / 80%) vs Central bodies (22 cases / 20%).",
      "Era-Wise Incident Comparison (Column Chart): Incident count breakdown comparing NDA (May 2014–present) and UPA (2004–May 2014) eras.",
      "Action Taken Breakdown (Bar Chart): Enforcement metrics for Arrests-FIR + Paper Cancelled, Retest + Arrest, and Exam Cancelled.",
      "Arrests vs. Convictions by Conducting Body (Grouped Column Chart): Comparative tracking of arrests and convictions across Bihar, Haryana, Jharkhand, Rajasthan, UP, etc.",
      "Aspirants Affected (Column Chart): Impact volume per exam reaching up to 5 Million+ candidates in major tests like NEET and UP Police.",
      "Confidence Level Distribution (Donut Chart): High Confidence (81 / 73.64%) vs Medium Confidence (26 / 23.64%).",
      "Sum of Convictions by Incident ID (Funnel Chart): Resolution conversion rates across specific case codes (PL-0019, PL-0020, PL-0016, PL-0018)."
    ],
    keyInsights: [
      "State conducting bodies account for 80% (88 incidents) of total reported paper leaks, while Central conducting bodies represent 20% (22 incidents).",
      "Confirmed leak cases constitute 80.91% (89 cases) of all logged incidents, with 73.64% (81 cases) evaluated at high verification confidence.",
      "Paper leak frequency experienced a major surge between 2020 and 2022, directly impacting over 5 Million+ aspirants across competitive examinations.",
      "Enforcement data shows high initial arrest figures in states like Bihar, Haryana, and Jharkhand, though conviction rates remain low across several incident codes."
    ]
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
        caption: "Examination & Result Analytics Executive Overview Canvas"
      }
    ],
    shortDescription: "Analyze student academic performance, grade distributions, pass/fail trends, subject-wise scores, and attendance benchmarks.",
    objective: "Created to evaluate student academic performance across departments, track average marks across semesters and subjects, monitor attendance compliance against target benchmarks, and analyze pass vs. fail grade distributions.",
    dataset: "Student academic evaluation database containing student IDs, names, semester terms (Sem 1 to Sem 6), course subjects (AI, C Programming, Data Analysis with Python, DBMS, etc.), marks obtained, and attendance percentages.",
    kpis: [
      { label: "Total Students", value: "14", sub: "Active cohort size" },
      { label: "Average Marks", value: "84.21 / 100", sub: "Overall aggregate score" },
      { label: "Average Attendance", value: "89.34%", sub: "Target benchmark: 75.00%" },
      { label: "Pass Percentage", value: "96.99%", sub: "258 pass records" },
      { label: "Fail Percentage", value: "3.01%", sub: "8 fail records" }
    ],
    keyVisualizations: [
      "Pass vs. Fail Distribution (Pie Chart): 258 Pass evaluations (96.99%) vs 8 Fail evaluations (3.01%).",
      "Grade Distribution (Donut Chart): 266 total grade evaluations — A Grade: 113 (42.48%), A+: 86 (32.33%), B+: 59 (22.18%).",
      "Overall Attendance Gauge Chart: Cohort attendance average of 89.34% measured against the 75.00% requirement target.",
      "Average Marks by Semester (Bar Chart): Semester-over-semester score progression showing peak marks concentration in Semester 6.",
      "Student-wise Average Performance (Column Chart): Individual student aggregate marks (Shreya K., Pragya Gupta, Gouri, Mikki Jaiswal, etc.).",
      "Subject Performance Ranking Across Semesters (Stacked Bar Chart): Comparative subject score breakdown across Semesters 1 through 6.",
      "Average Marks by Subject & Semester (Color-Coded Treemap): Visual area mapping across subjects (Data Analysis with Python, AI, Linux, DBMS, Operating Systems).",
      "Subject Performance Drilldown (Decomposition Tree): Hierarchical decomposition of average marks (84.21) by top subjects (Data Analysis with Python: 89.50, System Architecture: 87.57).",
      "Student Performance Roster Matrix: Itemized student scoreboard across Sem 1 to Sem 6 with cumulative total marks (e.g. Gouri: 1,733 total, Ayush Ram Tripathi: 1,638 total, Total 22,400 marks)."
    ],
    keyInsights: [
      "The student cohort achieved a 96.99% overall pass rate (258 pass evaluations vs. 8 fail evaluations) with a high average score of 84.21 / 100.",
      "Top distinction grades (A and A+) accounted for 74.81% of all course evaluations (A Grade: 42.48%, A+ Grade: 32.33%).",
      "Average cohort attendance stood at 89.34%, comfortably exceeding the institutional 75.00% attendance benchmark target.",
      "Data Analysis with Python recorded the highest average subject score (89.50), while Semester 6 demonstrated the overall highest student score performance."
    ]
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
    shortDescription: "Sales analytics dashboard tracking category-wise revenue distribution, profit margins, order volumes, and payment channel preferences.",
    objective: "Designed to monitor category-level sales revenue, evaluate product margin performance, track order volume trends across date ranges (Jan 3 to Mar 28), analyze category profit contributions, and evaluate customer payment method preferences.",
    dataset: "E-commerce sales transaction database featuring order IDs, product names, category hierarchies (Electronics, Furniture, Clothing, Beauty), sales amounts, profit figures, order quantities, payment methods (Card, UPI, Cash), and transaction dates.",
    kpis: [
      { label: "Total Sales", value: "$222,100", sub: "Gross sales revenue" },
      { label: "Total Profit", value: "$29,300", sub: "$29.3k net profit" },
      { label: "Total Orders", value: "30", sub: "Completed order transactions" },
      { label: "Total Quantity Sold", value: "47 Units", sub: "Items shipped" }
    ],
    keyVisualizations: [
      "Sales by Category (Horizontal Bar Chart): Category revenue breakdown showing Electronics (~$120k - Top Category), Furniture (~$60k), Clothing (~$24k), and Beauty (~$15k).",
      "Sales Trend Over Time (Time Series Chart): Daily sales progression from Jan 3 to Mar 28, featuring a major revenue spike (~$65k) in early February.",
      "Profit by Category (Vertical Column Chart): Category net profit contributions — Electronics ($14k+), Furniture ($7.5k), Clothing ($4k), and Beauty ($3k).",
      "Orders by Payment Method (Donut Chart): Card payments (46.7%), UPI payments (43.3%), and Cash payments (10.0%).",
      "Product & Category Performance Table: Detailed product matrix displaying Product Name, Category, Sales, Quantity, Profit, and Profit Margin % (e.g. Bookcase: 27.68% margin, Headphones: 18.00% margin)."
    ],
    keyInsights: [
      "Total sales revenue reached $222,100 with a total net profit of $29,300 ($29.3k) generated across 30 orders and 47 units sold.",
      "Electronics emerged as the primary revenue and profit driver (~$120k sales, ~$14k+ profit), followed by Furniture (~$60k sales).",
      "Digital payment methods accounted for 90.0% of all customer orders (Card: 46.7%, UPI: 43.3%), while cash on delivery represented only 10.0%.",
      "Sales trend analysis revealed a massive revenue demand spike in early February (reaching a peak single-day sales volume of ~$65k)."
    ]
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
    shortDescription: "Executive sales dashboard evaluating category revenue, monthly sales seasonality, and multi-year sales and profit trends.",
    objective: "Created to evaluate overall commercial sales growth for Sample Superstore, monitor revenue across product categories (Technology, Furniture, Office Supplies), analyze monthly sales seasonality, and track multi-year sales and profit trends (2023 to 2026).",
    dataset: "Enterprise commercial sales database (Sample Superstore) containing multi-year transactions spanning 2023 through 2026, categorized by product segments, order dates, regions (Central, East, South, West), sales revenue, and net profit figures.",
    kpis: [
      { label: "Total Sales", value: "$2,326,534", sub: "Gross store revenue" },
      { label: "Total Profit", value: "$292,297", sub: "Net store profit" }
    ],
    keyVisualizations: [
      "Sales Profit by Category (Column Bar Chart): Category revenue breakdown featuring Technology ($839,893 - Top Category), Furniture ($754,748), and Office Supplies ($731,893).",
      "Sales by Month (Line Chart): Monthly revenue trend across Order Dates (Jan to Dec), highlighting major Q4 peaks in November (~$340k) and September (~$310k).",
      "Sales and Profit by Year (Scatter Circle Comparison Matrix): Annual performance matrix tracking sales volume and net profit growth across 2023, 2024, 2025, and 2026.",
      "Region Slicers Filter: Interactive regional filters covering Central, East, South, and West sales territories."
    ],
    keyInsights: [
      "Sample Superstore generated $2,326,534 in total gross sales revenue and $292,297 in net profit.",
      "Technology was the highest-performing product category generating $839,893 in sales, followed by Furniture ($754,748) and Office Supplies ($731,893).",
      "Monthly sales trends demonstrate strong Q4 seasonality, with sales volume peaking significantly in November (~$340k) and September (~$310k).",
      "Multi-year analysis (2023–2026) reflects steady annual growth in both sales volume and net profitability."
    ]
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

      const thumbSrc = item.images && item.images.length > 0 ? item.images[0].src : "images/placeholder.png";

      card.innerHTML = `
        <div class="card-image-wrapper">
          <img src="${thumbSrc}" alt="${item.title} Thumbnail Preview" class="card-image" loading="lazy">
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

  document.title = `${currentDashboard.title} — Analytics Portfolio`;

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
        <img src="${imgObj.src}" alt="${currentDashboard.title} Screenshot ${idx+1}" loading="lazy">
        ${imgObj.caption ? `<div class="screenshot-caption">${imgObj.caption}</div>` : ""}
      `;

      itemDiv.addEventListener("click", () => {
        openLightbox(imgObj.src, `${currentDashboard.title} — ${imgObj.caption || 'Screenshot ' + (idx+1)}`);
      });

      galleryContainer.appendChild(itemDiv);
    });
  }

  // Objective & Dataset
  document.getElementById("detail-objective").textContent = currentDashboard.objective;
  document.getElementById("detail-dataset").textContent = currentDashboard.dataset;

  // KPIs Block Rendering
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

  // Key Insights List
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
