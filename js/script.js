/**
 * Dev Sanskriti Vishwavidyalaya — Department of Computer Science
 * Central JavaScript File for Labs, Visual Dashboards, and Reusable Detail Pages
 */

// --------------------------------------------------------------------------
// 1. Data Store - Section 1: Computer Science Practical Labs Registry
// --------------------------------------------------------------------------
const labsData = [
  {
    id: "lab-01",
    number: "Lab 01",
    title: "Introduction to Node.js & Event Loop",
    tool: "Node.js / V8 Engine",
    category: "Server-Side Scripting",
    image: "images/lab-01-preview.png",
    shortDescription: "Exploring non-blocking I/O runtime, V8 JavaScript engine execution, module exports, and built-in Node core modules.",
    objective: "To understand the asynchronous event-driven architecture of Node.js, environment configuration, and execution of basic file system operations.",
    concepts: [
      "V8 Engine & Single-Threaded Event Loop",
      "CommonJS Module System (require & module.exports)",
      "File System (fs) Module & Path Operations",
      "Process Arguments & Environment Variables"
    ],
    explanation: "This lab introduces the fundamental mechanics of Node.js. Students write scripts utilizing the built-in fs (File System) module to read, write, append, and manipulate local text files asynchronously. The execution model demonstrates how Node delegates heavy I/O operations to libuv worker threads without blocking the main event loop.",
    codeSnippet: `const fs = require('fs');
const path = require('path');

// Read input file asynchronously
const filePath = path.join(__dirname, 'sample.txt');
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) throw err;
  console.log('File Content Loaded Successfully:');
  console.log(data);
});`,
    outputPreview: "File Content Loaded Successfully:\n[Data Science & CS Lab Log Entry #01 - Execution Complete]",
    result: "Successfully built and verified asynchronous file I/O operations using Node.js core APIs."
  },
  {
    id: "lab-02",
    number: "Lab 02",
    title: "HTTP Server & Custom Routing",
    tool: "Node.js HTTP Module",
    category: "Web Protocols",
    image: "images/lab-02-preview.png",
    shortDescription: "Building a lightweight, native HTTP server from scratch using Node's core 'http' module with URL query parsing and response headers.",
    objective: "To master low-level HTTP web protocol mechanics, status code handling (200 OK, 404 Not Found), content-type header settings, and manual URL route dispatching.",
    concepts: [
      "HTTP Request & Response Streams",
      "Content-Type Headers (JSON, HTML, Plaintext)",
      "URL Parameter & Query String Parsing",
      "Status Code Management & Error Handling"
    ],
    explanation: "In this lab, a standalone web server is instantiated using http.createServer(). The server inspects req.url and req.method to route client HTTP requests to appropriate endpoint handlers. JSON payloads and custom headers are sent back using res.writeHead() and res.end().",
    codeSnippet: `const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/api/status' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'Online', dept: 'Computer Science DSVV' }));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Route Not Found');
  }
});

server.listen(8080, () => console.log('HTTP Server listening on port 8080'));`,
    outputPreview: "HTTP Server listening on port 8080\nGET /api/status -> 200 OK (application/json)",
    result: "Successfully created native HTTP server handling REST routing and status headers without external frameworks."
  },
  {
    id: "lab-03",
    number: "Lab 03",
    title: "Express.js Framework & Middleware Pipeline",
    tool: "Express.js / Node.js",
    category: "Backend Frameworks",
    image: "images/lab-03-preview.png",
    shortDescription: "Engineering scalable RESTful API endpoints with Express application routing, body-parsing middleware, and error-handling layers.",
    objective: "To construct modular web services using Express.js middleware chains, request body validation, and structured JSON response formatting.",
    concepts: [
      "Express Application Pipeline & Middleware Chain",
      "RESTful Endpoint Architecture (GET, POST, PUT, DELETE)",
      "JSON Request Body Parsing & Validation",
      "Custom Global Error Handling Middleware"
    ],
    explanation: "This lab replaces low-level HTTP boilerplate with Express.js. Students build middleware functions for logger tracking, authentication token checks, and request payload validation. Routers are split into modular files to maintain clean architectural separation.",
    codeSnippet: `const express = require('express');
const app = express();

app.use(express.json());

// Custom Logging Middleware
app.use((req, res, next) => {
  console.log(\`[\${new Date().toISOString()}] \${req.method} \${req.url}\`);
  next();
});

app.get('/api/students', (req, res) => {
  res.json([
    { id: 101, name: 'Aditya Soni', program: 'BCA / Computer Science' },
    { id: 102, name: 'Pragya Gupta', program: 'BCA / Computer Science' }
  ]);
});

app.listen(3000, () => console.log('Express App Running on Port 3000'));`,
    outputPreview: "[2026-10-07T23:45:00.000Z] GET /api/students\n200 OK - 2 Records Returned",
    result: "Constructed structured REST API backend utilizing Express middleware and JSON body parsers."
  },
  {
    id: "lab-04",
    number: "Lab 04",
    title: "Database Integration with MongoDB & Mongoose",
    tool: "MongoDB / Mongoose ODM",
    category: "Database Systems",
    image: "images/lab-04-preview.png",
    shortDescription: "Designing NoSQL database collections, schema validation rules, and CRUD persistence operations using Mongoose Object Data Modeling.",
    objective: "To connect Node/Express applications to a MongoDB database, define strict document schemas, execute CRUD operations, and manage asynchronous database queries.",
    concepts: [
      "NoSQL Document Database Concepts",
      "Mongoose Schema Definition & Data Types",
      "Async/Await CRUD Query Operations",
      "Index Creation & Data Validation Rules"
    ],
    explanation: "Students configure connection strings to MongoDB Atlas / local instances. Data models are established with field validation (required, unique, default values). Asynchronous async/await functions are used to query documents, update records, and execute aggregate pipelines.",
    codeSnippet: `const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  rollNo: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  department: { type: String, default: 'Computer Science' },
  cgpa: { type: Number, min: 0, max: 10 }
});

const Student = mongoose.model('Student', studentSchema);

async function addStudent() {
  await mongoose.connect('mongodb://127.0.0.1:27017/dsvv_cs');
  const newStudent = await Student.create({
    rollNo: 'CS-2026-01',
    name: 'Aarav Sharma',
    cgpa: 9.4
  });
  console.log('Student Record Inserted:', newStudent);
}`,
    outputPreview: "MongoDB Connected: dsvv_cs\nStudent Record Inserted: { _id: ObjectId('...'), rollNo: 'CS-2026-01', name: 'Aarav Sharma', cgpa: 9.4 }",
    result: "Successfully integrated MongoDB persistence layer with schema validation and async queries."
  },
  {
    id: "lab-05",
    number: "Lab 05",
    title: "Asynchronous Programming & Promises",
    tool: "JavaScript ES6+ / Node.js",
    category: "Core Algorithms",
    image: "images/lab-05-preview.png",
    shortDescription: "Mastering asynchronous control flow, Callback to Promise refactoring, Promise.all concurrent fetching, and async/await error handling.",
    objective: "To eliminate callback hell, understand the Microtask Queue in JS runtime, and execute parallel asynchronous operations safely.",
    concepts: [
      "Callbacks vs Promises vs Async/Await",
      "Microtask Queue & Macro Task Event Loop Timing",
      "Parallel Execution with Promise.all() & Promise.allSettled()",
      "Try/Catch Error Propagation in Async Functions"
    ],
    explanation: "This lab explores JavaScript's concurrency model. Students benchmark serial async execution versus parallel Promise.all() fetching. Exercises demonstrate proper error handling using try-catch blocks to prevent unhandled promise rejections.",
    codeSnippet: `async function fetchCourseData(courseId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (courseId) resolve({ id: courseId, title: 'Data Structures' });
      else reject(new Error('Invalid Course ID'));
    }, 500);
  });
}

async function runLab() {
  try {
    const course = await fetchCourseData('CS-301');
    console.log('Course Resolved:', course.title);
  } catch (err) {
    console.error('Execution Failed:', err.message);
  }
}
runLab();`,
    outputPreview: "Initiating Async Fetch...\nCourse Resolved: Data Structures\nExecution Time: 504ms",
    result: "Refactored legacy callback patterns to modern async/await syntax with robust error boundaries."
  },
  {
    id: "lab-06",
    number: "Lab 06",
    title: "Web Security, JWT & Authentication",
    tool: "Node.js / JWT / bcrypt",
    category: "Web Security",
    image: "images/lab-06-preview.png",
    shortDescription: "Implementing secure user authentication using bcrypt password hashing, JSON Web Token (JWT) signing, and protected API routes.",
    objective: "To protect web applications against unauthorized access by building secure authentication middleware and state-less JWT authorization.",
    concepts: [
      "Salted Password Hashing with bcrypt",
      "JSON Web Token (JWT) Structure & Secret Signing",
      "Bearer Authorization Headers & Middleware Verification",
      "Protection Against Common Web Security Vulnerabilities"
    ],
    explanation: "Students build login and registration authentication flows. User passwords are encrypted using bcrypt hashing prior to database storage. Upon authentication, a signed JWT token is issued, which clients present in HTTP Authorization headers for access to protected routes.",
    codeSnippet: `const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const JWT_SECRET = 'dsvv_cs_secure_key_2026';

// Password Hashing
async function hashPassword(plainText) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(plainText, salt);
}

// Token Verification Middleware
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}`,
    outputPreview: "Password Hashed: $2b$10$e8Z... (10 rounds salt)\nJWT Token Issued: eyJhbGciOiJIUzI1Ni... [Valid 1h]",
    result: "Successfully implemented secure user registration, salted hashing, and JWT protected API routes."
  }
];

// --------------------------------------------------------------------------
// 2. Data Store - Section 2: Dashboard Gallery Registry (4 Core Dashboards)
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
// 3. Main Initialization & Router
// --------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();

  if (document.getElementById("labs-grid") && document.getElementById("dashboards-gallery-grid")) {
    initMainPage();
  } else if (document.getElementById("lab-detail-content")) {
    initLabDetailPage();
  } else if (document.getElementById("detail-content")) {
    initDashboardDetailPage();
  }

  setupLightbox();
});

// --------------------------------------------------------------------------
// 4. Navigation & Mobile Menu Handler
// --------------------------------------------------------------------------
function setupNavigation() {
  const toggleBtn = document.querySelector(".mobile-menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active");
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
// 5. Main Homepage Logic (`index.html`) — Render Labs & Dashboard Gallery
// --------------------------------------------------------------------------
function initMainPage() {
  renderLabsSection(labsData);
  renderDashboardsGallerySection(dashboardsData);
}

// Render Section 1: LABS Cards Grid
function renderLabsSection(labs) {
  const labsGrid = document.getElementById("labs-grid");
  if (!labsGrid) return;
  labsGrid.innerHTML = "";

  labs.forEach((lab) => {
    const card = document.createElement("article");
    card.className = "lab-card";
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `View ${lab.number} ${lab.title}`);

    card.innerHTML = `
      <div class="lab-image-wrapper">
        <img src="${lab.image}" alt="${lab.title} Thumbnail" class="lab-image" loading="lazy">
        <span class="lab-number-badge">${lab.number}</span>
        <span class="lab-tool-badge"><i class="fa-solid fa-code"></i> ${lab.tool}</span>
      </div>
      <div class="lab-card-body">
        <span class="lab-category">${lab.category}</span>
        <h3 class="lab-card-title">${lab.title}</h3>
        <p class="lab-card-description">${lab.shortDescription}</p>
        <div class="lab-card-footer">
          <span class="btn-view-lab">View Lab <i class="fa-solid fa-arrow-right"></i></span>
        </div>
      </div>
    `;

    const openLab = () => {
      window.location.href = `lab.html?id=${lab.id}`;
    };

    card.addEventListener("click", openLab);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLab();
      }
    });

    labsGrid.appendChild(card);
  });
}

// Render Section 2: DASHBOARD GALLERY Grid (Visual Cards: 2 per row)
function renderDashboardsGallerySection(dashboards) {
  const dashGrid = document.getElementById("dashboards-gallery-grid");
  if (!dashGrid) return;
  dashGrid.innerHTML = "";

  dashboards.forEach((dash) => {
    const card = document.createElement("article");
    card.className = "visual-dashboard-card";
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `View Dashboard ${dash.title}`);

    const thumbSrc = dash.images && dash.images.length > 0 ? dash.images[0].src : "images/placeholder.png";

    card.innerHTML = `
      <div class="dash-thumb-container">
        <img src="${thumbSrc}" alt="${dash.title} Large Screenshot Preview" class="dash-thumb-img" loading="lazy">
        <span class="dash-tool-badge ${dash.toolClass}">
          <i class="fa-solid fa-layer-group"></i> ${dash.tool}
        </span>
      </div>
      <div class="dash-body">
        <span class="dash-category">${dash.category}</span>
        <h3 class="dash-title">${dash.title}</h3>
        <p class="dash-description">${dash.shortDescription}</p>
        <button class="btn-view-dashboard">
          <span>View Dashboard</span> <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    `;

    const openDash = () => {
      window.location.href = `dashboard.html?id=${dash.id}`;
    };

    card.addEventListener("click", openDash);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openDash();
      }
    });

    dashGrid.appendChild(card);
  });
}

// --------------------------------------------------------------------------
// 6. Reusable Lab Detail Page Logic (`lab.html`)
// --------------------------------------------------------------------------
function initLabDetailPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const labId = urlParams.get("id");

  const currentLab = labsData.find((l) => l.id === labId) || labsData[0];

  document.title = `${currentLab.number}: ${currentLab.title} — Computer Science Labs | DSVV`;

  // Header Tags
  document.getElementById("lab-number-tag").textContent = currentLab.number;
  document.getElementById("lab-tool-tag").innerHTML = `<i class="fa-solid fa-code"></i> ${currentLab.tool}`;
  document.getElementById("lab-category-tag").textContent = currentLab.category;
  document.getElementById("lab-title").textContent = currentLab.title;

  // Sidebar Specs
  document.getElementById("sidebar-lab-num").textContent = currentLab.number;
  document.getElementById("sidebar-lab-tool").textContent = currentLab.tool;

  // Screenshot & Viewport
  const labImg = document.getElementById("lab-img");
  labImg.src = currentLab.image;
  labImg.alt = `${currentLab.title} Execution Output`;
  document.getElementById("lab-img-caption").textContent = `${currentLab.number} — ${currentLab.title} Execution Preview`;

  const viewport = document.getElementById("lab-screenshot-viewport");
  if (viewport) {
    viewport.addEventListener("click", () => {
      openLightbox(currentLab.image, `${currentLab.number}: ${currentLab.title}`);
    });
  }

  // Objective & Explanation
  document.getElementById("lab-objective").textContent = currentLab.objective;
  document.getElementById("lab-explanation").textContent = currentLab.explanation;
  document.getElementById("lab-result").textContent = currentLab.result;

  // Concepts List
  const conceptsList = document.getElementById("lab-concepts");
  conceptsList.innerHTML = "";
  currentLab.concepts.forEach((concept) => {
    const li = document.createElement("li");
    li.className = "viz-item";
    li.innerHTML = `<i class="fa-solid fa-check-double"></i> <span>${concept}</span>`;
    conceptsList.appendChild(li);
  });

  // Code Snippet & Terminal Output
  document.getElementById("lab-code").textContent = currentLab.codeSnippet;
  document.getElementById("lab-output").textContent = currentLab.outputPreview;
}

// --------------------------------------------------------------------------
// 7. Reusable Dashboard Detail Page Logic (`dashboard.html`)
// --------------------------------------------------------------------------
function initDashboardDetailPage() {
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
// 8. Lightbox Fullscreen Modal Handler
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
