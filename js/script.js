/**
 * Dev Sanskriti Vishwavidyalaya — Department of Computer Science
 * Central JavaScript File for 10 Labs, 7 Visual Dashboards, Projects, Skills, and Reusable Detail Pages
 */

// ==========================================================================
// 1. DATA STORE — 10 COMPUTER SCIENCE LAB ASSIGNMENTS REGISTRY
// ==========================================================================
const labsData = [
  {
    id: "lab-01",
    number: "LAB ASSIGNMENT 01",
    title: "Data Visualization",
    tool: "Python / Matplotlib & Seaborn",
    category: "Data Science & Analytics",
    image: "images/lab-01-preview.png",
    shortDescription: "Fundamentals of exploratory data analysis, plotting univariate & bivariate distributions, line charts, scatter plots, and heatmaps.",
    objective: "To master foundational data visualization techniques using Python libraries (Matplotlib, Seaborn, Pandas) to convey quantitative insights cleanly.",
    activity: "Exploratory data analysis on benchmark datasets, generating customized statistical charts with formatted axes, legends, and color palettes.",
    toolsUsed: "Python 3.x, Matplotlib, Seaborn, Pandas, Jupyter Notebook",
    procedure: "1. Load raw dataset using Pandas DataFrame.\n2. Clean missing values and format data types.\n3. Construct line charts for trend analysis and scatter plots for correlation.\n4. Apply Seaborn color maps and export high-resolution chart images.",
    workPerformed: "Constructed multiple statistical plots visualizing variable correlations, distribution spreads, and multi-series line comparisons across quarterly metrics.",
    outputPreview: "Generated 5 core statistical figures: Distribution Histogram, Correlation Heatmap, Feature Scatter Matrix, and Time-Series Trend Line.",
    result: "Successfully established automated Python visualization pipelines for academic data science reports.",
    learningOutcome: "Acquired hands-on proficiency in converting raw tabular data into intuitive visual charts following statistical design best practices."
  },
  {
    id: "lab-02",
    number: "LAB ASSIGNMENT 02",
    title: "Submission of 9th Aug Class Activity Work",
    tool: "Node.js HTTP & Core Modules",
    category: "Web Protocols & Networking",
    image: "images/lab-02-preview.png",
    shortDescription: "Practical submission covering asynchronous I/O, custom HTTP server routing, status code handling, and query string parsing.",
    objective: "To implement low-level HTTP network routing and non-blocking event-driven file operations using native Node.js core modules.",
    activity: "Building a lightweight HTTP web server from scratch without external frameworks, managing request headers, status codes, and JSON responses.",
    toolsUsed: "Node.js runtime, V8 Engine, HTTP module, FS module, Path module",
    procedure: "1. Instantiate HTTP server with http.createServer().\n2. Inspect incoming req.url and req.method properties.\n3. Read static response payload asynchronously via fs.readFile().\n4. Set HTTP response status codes (200, 404) and Content-Type headers.",
    workPerformed: "Developed a functional server dispatching requests to '/api/status', '/data', and default 404 handlers with non-blocking event loops.",
    outputPreview: "Server started at port 8080. GET /api/status -> 200 OK JSON payload dispatched successfully.",
    result: "Verified low-level HTTP request/response execution and asynchronous event loop handling.",
    learningOutcome: "Understood client-server request execution cycles, MIME content-type headers, and event-driven Node.js runtime mechanics."
  },
  {
    id: "lab-03",
    number: "LAB ASSIGNMENT 03",
    title: "Visualize It! — Create & Share Your Data Visualization Cheat Sheet",
    tool: "Data Visualization & Documentation",
    category: "Analytics Guidelines & Design",
    image: "images/lab-03-preview.png",
    shortDescription: "Designing a comprehensive visual cheat sheet categorizing chart selection guidelines, color theory, and visualization best practices.",
    objective: "To synthesize data visualization principles into an actionable reference guide for selecting appropriate chart types based on data structures.",
    activity: "Curating a structured infographic cheat sheet covering comparative charts, distribution plots, compositional visuals, and relationship diagrams.",
    toolsUsed: "Figma, Canva, Markdown, Data Visualization Frameworks",
    procedure: "1. Research visual encoding taxonomy (bar, line, scatter, treemap, heatmap).\n2. Classify charts by analytical objective (Comparison, Distribution, Composition, Relationship).\n3. Define accessibility guidelines (color contrast, typography scale, chart junk reduction).\n4. Export and publish reference cheat sheet.",
    workPerformed: "Created a 4-section visual guide outlining chart selection decision trees, color palette rules (sequential vs. diverging), and label alignment standards.",
    outputPreview: "Published 'Data Visualization Cheat Sheet v1.0' featuring quick decision matrix for choosing between bar, line, pie, and scatter charts.",
    result: "Produced a reusable reference standard adopted for departmental data analytics lab reports.",
    learningOutcome: "Developed strong design intuition for match-to-purpose chart selection and clear visual communication."
  },
  {
    id: "lab-04",
    number: "LAB ASSIGNMENT 04",
    title: "From Learning to LinkedIn",
    tool: "Professional Branding & Portfolio",
    category: "Career & Technical Communication",
    image: "images/lab-04-preview.png",
    shortDescription: "Documenting technical project achievements, structuring technical case studies, and sharing academic portfolio milestones on LinkedIn.",
    objective: "To bridge academic computer science lab achievements with industry-facing professional portfolio showcases and technical writing.",
    activity: "Crafting structured project write-ups, highlighting key metrics, tech stacks, GitHub repositories, and publishing professional updates.",
    toolsUsed: "LinkedIn Platform, Markdown, Git / GitHub, Technical Writing",
    procedure: "1. Summarize lab technical architecture into executive bullet points.\n2. Prepare code snippets and execution screenshots.\n3. Draft technical posts explaining problem statements, solutions, and key takeaways.\n4. Link GitHub source repositories for peer review.",
    workPerformed: "Published technical case studies detailing Node.js REST API design and Power BI data dashboards with live repository links.",
    outputPreview: "Published technical portfolio update with live code links, achieving engagement across academic and peer technical networks.",
    result: "Successfully built an active digital footprint bridging academic work and industry career readiness.",
    learningOutcome: "Enhanced technical communication skills, project documentation clarity, and professional developer branding."
  },
  {
    id: "lab-05",
    number: "LAB ASSIGNMENT 05",
    title: "Learning Activity",
    tool: "JavaScript ES6+ & Asynchronous Promises",
    category: "Core Computer Science Algorithms",
    image: "images/lab-05-preview.png",
    shortDescription: "Hands-on exercises mastering asynchronous control flow, Callback to Promise conversion, Promise.all concurrency, and async/await.",
    objective: "To eliminate callback hell, master JavaScript microtask execution timing, and build resilient asynchronous error handling patterns.",
    activity: "Solving complex asynchronous programming challenges using native ES6 Promises, async/await keywords, and try/catch blocks.",
    toolsUsed: "JavaScript ES6+, Node.js runtime, Chrome DevTools",
    procedure: "1. Implement mock API calls using setTimeout and Promises.\n2. Benchmark serial await calls against parallel Promise.all() execution.\n3. Add global error handlers to catch unhandled promise rejections.\n4. Log microtask vs macrotask execution orders in console.",
    workPerformed: "Refactored legacy nested callback functions into clean, readable async/await async pipelines with 45% faster parallel execution.",
    outputPreview: "Promise.all Execution Time: 204ms vs Serial Await Execution Time: 610ms. All tests passed.",
    result: "Achieved optimal asynchronous runtime performance and clean exception propagation.",
    learningOutcome: "Mastered the JavaScript event loop microtask queue, concurrency management, and async function architecture."
  },
  {
    id: "lab-06",
    number: "LAB ASSIGNMENT 06",
    title: "Lab Practical",
    tool: "Node.js / Express / JWT Security",
    category: "Web Security & Authentication",
    image: "images/lab-06-preview.png",
    shortDescription: "Implementation of secure user registration, bcrypt password hashing, JSON Web Token (JWT) issuing, and middleware protection.",
    objective: "To secure backend Web APIs against unauthorized access using cryptographic hashing and stateless JWT bearer token authentication.",
    activity: "Building authentication endpoints (/api/register, /api/login) and authorization middleware protecting private API routes.",
    toolsUsed: "Node.js, Express.js, bcrypt, jsonwebtoken, Postman API Client",
    procedure: "1. Hash user plaintext passwords using bcrypt with salt factor 10.\n2. Authenticate user credentials and sign JWT payload with secret key.\n3. Intercept requests using Express authorization header middleware.\n4. Validate Bearer token signature before granting access.",
    workPerformed: "Constructed secure authentication flow ensuring zero plain-text password storage and verified token verification on protected routes.",
    outputPreview: "POST /api/login -> 200 OK { token: 'eyJhbGciOi...' }. GET /api/protected (with Bearer Token) -> Access Granted.",
    result: "Successfully deployed robust JWT-based stateless authorization layer for REST APIs.",
    learningOutcome: "Understood password hashing cryptography, stateless session management, and HTTP security header standards."
  },
  {
    id: "lab-07",
    number: "LAB ASSIGNMENT 07",
    title: "Hands On Lab Practical - Excel Charts & Dashboard",
    tool: "Microsoft Excel / Advanced Analytics",
    category: "Data Processing & Excel BI",
    image: "images/lab-07-preview.png",
    shortDescription: "Building dynamic interactive business dashboards in Excel using PivotTables, Slicers, dynamic chart formulas, and KPI cards.",
    objective: "To harness advanced Microsoft Excel functions (PivotTables, VLOOKUP/XLOOKUP, Slicers, Conditional Formatting) for business intelligence.",
    activity: "Transforming raw transactional Excel data into an executive summary dashboard featuring interactive slicers and dynamic charts.",
    toolsUsed: "Microsoft Excel 365, PivotTables, Dynamic Charts, Conditional Formatting",
    procedure: "1. Clean and format raw dataset into structured Excel tables.\n2. Summarize metrics using multiple PivotTables (sales by region, category, month).\n3. Create dynamic bar charts, pie charts, and KPI summary blocks.\n4. Connect interactive timeline slicers for cross-filtering.",
    workPerformed: "Engineered a complete single-page interactive Excel sales dashboard with automated total calculations and regional filters.",
    outputPreview: "Interactive Excel Dashboard displaying 4 KPI summary cards, 3 dynamic charts, and region/quarter timeline slicers.",
    result: "Delivered a fully responsive offline spreadsheet analytics tool ready for business reporting.",
    learningOutcome: "Mastered Excel data modeling, dynamic PivotTable aggregation, dynamic chart formatting, and dashboard layout design."
  },
  {
    id: "lab-08",
    number: "LAB ASSIGNMENT 08",
    title: "Submit Your Data Studio Report",
    tool: "Google Data Studio / Looker Studio",
    category: "Cloud Data Visualization",
    image: "images/lab-08-preview.png",
    shortDescription: "Authoring interactive cloud sales analytics dashboards in Looker Studio with real-time data connection, scorecards, and filters.",
    objective: "To construct interactive cloud-hosted data reports in Looker Studio enabling stakeholder self-service analytics and dynamic filtering.",
    activity: "Connecting Google Sheets data source to Looker Studio, configuring calculated fields, scorecards, time-series charts, and shareable reports.",
    toolsUsed: "Google Looker Studio (Data Studio), Google Sheets, Cloud Connectors",
    procedure: "1. Connect sales dataset hosted on Google Sheets to Looker Studio.\n2. Create calculated metrics for net revenue and profit margin %.\n3. Design scorecards, category distribution bar charts, and daily sales trend lines.\n4. Configure interactive date range pickers and category drop-down filters.",
    workPerformed: "Published a live interactive Looker Studio sales report with real-time dynamic filtering and mobile-friendly responsive layout.",
    outputPreview: "Looker Studio Report Published: 4 Executive KPI scorecards, 3 interactive charts, and live cloud share URL.",
    result: "Delivered accessible, cloud-native business intelligence report requiring zero software installation.",
    learningOutcome: "Gained expertise in cloud BI tools, real-time data source connections, metric customization, and dashboard publishing."
  },
  {
    id: "lab-09",
    number: "LAB ASSIGNMENT 09",
    title: "Lab Work: Tableau Dashboard",
    tool: "Tableau Desktop / Tableau Public",
    category: "Enterprise Analytics",
    image: "images/lab-09-preview.png",
    shortDescription: "Creating enterprise-grade visual analytics in Tableau Desktop featuring calculated fields, scatter plots, map views, and interactive actions.",
    objective: "To leverage Tableau's visual query engine to build multi-dimensional interactive dashboards with filter actions and parameter controls.",
    activity: "Building a multi-sheet Tableau workbook analyzing corporate sales revenue, profit ratios, and regional geographical performance.",
    toolsUsed: "Tableau Desktop, Sample Superstore Dataset, Tableau Public",
    procedure: "1. Connect raw Superstore dataset to Tableau Desktop.\n2. Create custom calculated fields for Profit Ratio and YoY Growth.\n3. Build individual worksheets: Sales Map, Category Bar Chart, Monthly Trend Line.\n4. Assemble worksheets on a unified dashboard canvas and add Filter Actions.",
    workPerformed: "Designed an interactive 4-view Tableau dashboard with cross-highlighting actions, custom tooltips, and regional filter controls.",
    outputPreview: "Tableau Dashboard published with interactive cross-filtering enabled across category charts and regional maps.",
    result: "Constructed an executive-ready enterprise dashboard adhering to Tableau visual analytics standards.",
    learningOutcome: "Mastered Tableau worksheet building, calculated fields, dashboard actions, parameter controls, and story building."
  },
  {
    id: "lab-10",
    number: "LAB ASSIGNMENT 10",
    title: "Hands-On Practical",
    tool: "Express.js Framework & MongoDB",
    category: "Full-Stack Backend Development",
    image: "images/lab-10-preview.png",
    shortDescription: "Comprehensive practical synthesis building full RESTful API microservices integrated with MongoDB database persistence.",
    objective: "To integrate Express.js server routes, Mongoose schema modeling, CRUD controller logic, and error handling into a complete backend.",
    activity: "Engineering a full-stack backend application handling student data management, grade recording, and automated JSON reporting.",
    toolsUsed: "Node.js, Express.js, MongoDB Atlas, Mongoose ODM, Postman",
    procedure: "1. Define Mongoose schema with field validation rules (unique, required, min/max).\n2. Create modular API controllers for GET, POST, PUT, DELETE operations.\n3. Implement async middleware error wrapper to handle database validation failures.\n4. Test API endpoints using Postman collection.",
    workPerformed: "Successfully deployed full backend API servicing CRUD operations for 10+ student records with robust input validation.",
    outputPreview: "Full CRUD API verified: GET /api/v1/students -> 200 OK. POST /api/v1/students -> 201 Created.",
    result: "Demonstrated full operational readiness in building scalable Node.js/MongoDB web backend services.",
    learningOutcome: "Consolidated complete backend engineering workflow: NoSQL modeling, Express routing, REST principles, and API testing."
  }
];

// ==========================================================================
// 2. DATA STORE — 7 DASHBOARD GALLERY REGISTRY
// ==========================================================================
const dashboardsData = [
  {
    id: "paper-leak",
    title: "Paper Leak Analysis Dashboard",
    category: "Academic / Education Analytics",
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
    overview: "This investigative security intelligence dashboard provides a detailed analytical audit of reported exam paper leak incidents across India. It tracks breach frequency across state and central conducting bodies, evaluates legal enforcement actions, and quantifies the impact on millions of student candidates.",
    objective: "Designed to analyze paper leak incidents across temporal trends, conducting bodies (Vyapam/MPPEB, CBSE, NTA, etc.), breach status, confidence levels, affected aspirants, and legal enforcement outcomes (Arrests, FIRs, Convictions).",
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
    title: "Examination & Result Dashboard",
    category: "Academic / Student Performance Analytics",
    tool: "Power BI",
    toolClass: "power-bi",
    images: [
      {
        src: "images/examination-dashboard.png",
        caption: "Examination & Result Analytics Executive Overview Canvas"
      }
    ],
    shortDescription: "Analyze student academic performance, grade distributions, pass/fail trends, subject-wise scores, and attendance benchmarks.",
    overview: "This academic performance evaluation dashboard provides institution-level analytics for student cohort evaluation. It measures marks distribution across semesters, subject performance rankings, attendance compliance, and distinction grade ratios.",
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
    overview: "This interactive cloud analytics dashboard monitors category-level sales revenue, profit margin contributions, order volumes, and customer payment method breakdowns across e-commerce channels.",
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
    category: "Sales / Business Analytics",
    tool: "Tableau",
    toolClass: "tableau",
    images: [
      {
        src: "images/sales-performance-dashboard.png",
        caption: "Tableau Executive Sales Performance Overview"
      }
    ],
    shortDescription: "Executive sales dashboard evaluating category revenue, monthly sales seasonality, and multi-year sales and profit trends.",
    overview: "This enterprise Tableau executive dashboard delivers commercial revenue analysis for Sample Superstore. It analyzes product segment performance, seasonal sales cycles, and multi-year profit growth across sales territories.",
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
  },
  {
    id: "regional-management",
    title: "Regional Management Dashboard",
    category: "Management / Regional Analytics",
    tool: "Tableau",
    toolClass: "tableau",
    images: [
      {
        src: "images/regional-management-dashboard.png",
        caption: "Regional Management Dashboard Tableau Analytics View"
      }
    ],
    shortDescription: "Help regional management compare regional sales, profit, trends, ranking, and category performance.",
    overview: "This regional management dashboard built in Tableau provides interactive visual analytics to compare regional sales revenue, net profit margins, performance trends, territory rankings, and product category breakdowns.",
    objective: "Help regional management compare regional sales, profit, trends, ranking, and category performance.",
    dataset: "Regional management operations database detailing regional sales figures, profit margins, category distributions, and territory performance trends.",
    kpis: [
      { label: "Tool Used", value: "Tableau", sub: "Enterprise Visual Analytics" },
      { label: "Category", value: "Regional Analytics", sub: "Management Intelligence" },
      { label: "Analysis Focus", value: "Sales & Profit", sub: "Regional Trends & Ranking" }
    ],
    keyVisualizations: [
      "Regional Sales & Profit Comparison (Bar & Treemap Chart): Comparative revenue and profit breakdown across regions.",
      "Territory Ranking & Category Performance Matrix: Multi-variable hierarchy of regional product category performance.",
      "Regional Sales Trend Trajectory (Line Chart): Temporal tracking of regional sales growth and seasonality."
    ],
    keyInsights: [
      "Enables regional leadership to instantly identify top-performing regions and category growth opportunities.",
      "Provides clear comparative visibility into regional profit margins, territory rankings, and multi-year sales trends."
    ]
  },
  {
    id: "sales-management",
    title: "Sales Management Dashboard",
    category: "Management / Sales Analytics",
    tool: "Tableau",
    toolClass: "tableau",
    images: [
      {
        src: "images/sales-management-dashboard.png",
        caption: "Sales Management Dashboard Tableau Performance Overview"
      }
    ],
    shortDescription: "Help sales management monitor sales performance, categories, segments, trends, and top products.",
    overview: "This sales management dashboard built in Tableau gives commercial sales leaders complete visibility into overall sales performance, category revenue shares, customer market segments, multi-year trends, and top product items.",
    objective: "Help sales management monitor sales performance, categories, segments, trends, and top products.",
    dataset: "Commercial sales transaction database tracking product sales revenue, customer market segments, multi-year sales trends, and top product revenue rankings.",
    kpis: [
      { label: "Tool Used", value: "Tableau", sub: "Enterprise Visual Analytics" },
      { label: "Category", value: "Sales Analytics", sub: "Management Intelligence" },
      { label: "Analysis Focus", value: "Performance & Segments", sub: "Trends & Top Products" }
    ],
    keyVisualizations: [
      "Sales Performance by Category & Segment (Stacked Bar Chart): Segment revenue breakdown across product lines.",
      "Top-Performing Products Ranking (Horizontal Bar Chart): Itemized revenue leaderboard of top enterprise products.",
      "Multi-Year Sales Trend Trajectory (Time Series Chart): Monthly and annual sales progression across commercial sectors."
    ],
    keyInsights: [
      "Streamlines sales pipeline monitoring by highlighting top-grossing product lines and high-value customer segments.",
      "Identifies seasonal demand peaks and provides actionable data to optimize sales team resource allocation."
    ]
  },
  {
    id: "finance-management",
    title: "Finance Management Dashboard",
    category: "Management / Financial Analytics",
    tool: "Tableau",
    toolClass: "tableau",
    images: [
      {
        src: "images/finance-management-dashboard.png",
        caption: "Finance Management Dashboard Tableau Capital & Financial Overview"
      }
    ],
    shortDescription: "Help finance management analyze sales, profitability, discounts, and relationships between financial measures.",
    overview: "This finance management dashboard built in Tableau empowers financial executives to analyze sales volumes, net profitability, discount rates, and complex relationships between financial metrics.",
    objective: "Help finance management analyze sales, profitability, discounts, and relationships between financial measures.",
    dataset: "Financial reporting database containing sales amounts, net profit figures, discount percentages, and multi-variable financial metric correlations.",
    kpis: [
      { label: "Tool Used", value: "Tableau", sub: "Enterprise Visual Analytics" },
      { label: "Category", value: "Financial Analytics", sub: "Management Intelligence" },
      { label: "Analysis Focus", value: "Profit & Discounts", sub: "Financial Metric Relations" }
    ],
    keyVisualizations: [
      "Sales vs. Profitability Correlation Matrix (Scatter Plot): Multi-measure scatter analysis evaluating profit impact of discount levels.",
      "Discount Rate & Revenue Margin Impact Chart (Waterfall Chart): Fiscal breakdown of gross revenue after promotional discounts.",
      "Financial Measure Relationship Dashboard (Bullet Gauges): Comparative scorecards benchmarking financial metrics against targets."
    ],
    keyInsights: [
      "Provides finance executives with deep analytical clarity on how discount rates impact net corporate profitability.",
      "Reveals key correlations between sales volume and net income to support data-driven capital management decisions."
    ]
  }
];

// ==========================================================================
// 3. DATA STORE — PROJECTS REGISTRY
// ==========================================================================
const projectsData = [
  {
    id: "proj-01",
    title: "Node.js Microservices REST API Suite",
    category: "Backend Engineering",
    icon: "fa-server",
    description: "Modular microservices architecture built with Node.js, Express, and JWT stateless authentication for high-throughput API routing.",
    tags: ["Node.js", "Express.js", "JWT", "REST API", "Web Security"],
    link: "https://github.com/pragya432/dashboard-portfolio"
  },
  {
    id: "proj-02",
    title: "Enterprise Business Intelligence & Sales Analytics",
    category: "Data Analytics & BI",
    icon: "fa-chart-pie",
    description: "Multi-platform executive dashboard suite built using Power BI, Looker Studio, and Tableau to track commercial revenue and student cohorts.",
    tags: ["Power BI", "Tableau", "Looker Studio", "DAX", "Data Modeling"],
    link: "https://github.com/pragya432/dashboard-portfolio"
  },
  {
    id: "proj-03",
    title: "NoSQL Student Evaluation Database Manager",
    category: "Database Systems",
    icon: "fa-database",
    description: "Schema-validated MongoDB database persistence layer with custom Mongoose schemas, async queries, and aggregate statistical pipelines.",
    tags: ["MongoDB", "Mongoose", "NoSQL", "Express", "Async/Await"],
    link: "https://github.com/pragya432/dashboard-portfolio"
  },
  {
    id: "proj-04",
    title: "Exploratory Data Science & Visual Analytics Engine",
    category: "Data Science",
    icon: "fa-brain",
    description: "Statistical analysis toolkit in Python evaluating correlation matrices, distribution spreads, and machine learning outcome predictors.",
    tags: ["Python", "Matplotlib", "Seaborn", "Pandas", "Scikit-Learn"],
    link: "https://github.com/pragya432/dashboard-portfolio"
  }
];

// ==========================================================================
// 4. DATA STORE — SKILLS REGISTRY
// ==========================================================================
const skillsData = [
  {
    category: "Data Analytics & BI Tools",
    icon: "fa-chart-column",
    skills: [
      { name: "Power BI (DAX, Data Modeling)", level: "Advanced" },
      { name: "Tableau Desktop & Public", level: "Advanced" },
      { name: "Google Looker Studio", level: "Intermediate" },
      { name: "Microsoft Excel (PivotTables, Slicers)", level: "Advanced" }
    ]
  },
  {
    category: "Web & Backend Engineering",
    icon: "fa-code",
    skills: [
      { name: "Node.js & Async Runtime", level: "Advanced" },
      { name: "Express.js REST Framework", level: "Advanced" },
      { name: "JavaScript ES6+ / HTML5 / CSS3", level: "Advanced" },
      { name: "Web Protocols & HTTP APIs", level: "Intermediate" }
    ]
  },
  {
    category: "Database & Cloud Systems",
    icon: "fa-database",
    skills: [
      { name: "MongoDB & Mongoose ODM", level: "Advanced" },
      { name: "SQL & Relational Schemas", level: "Intermediate" },
      { name: "NoSQL Document Modeling", level: "Advanced" },
      { name: "Git & Version Control", level: "Advanced" }
    ]
  },
  {
    category: "Security & Methods",
    icon: "fa-shield-halved",
    skills: [
      { name: "JWT Bearer Token Auth", level: "Advanced" },
      { name: "bcrypt Password Cryptography", level: "Advanced" },
      { name: "Data Viz Best Practices", level: "Advanced" },
      { name: "Technical Documentation", level: "Advanced" }
    ]
  }
];

// ==========================================================================
// 5. MAIN INITIALIZATION & ROUTER
// ==========================================================================
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

// ==========================================================================
// 6. NAVIGATION & MOBILE MENU HANDLER
// ==========================================================================
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

// ==========================================================================
// 7. MAIN HOMEPAGE RENDERER (`index.html`)
// ==========================================================================
function initMainPage() {
  renderLabsSection(labsData);
  renderDashboardsGallerySection(dashboardsData);
  renderProjectsSection(projectsData);
  renderSkillsSection(skillsData);
}

// Render Section: 10 LAB ASSIGNMENTS GRID (3 cols Desktop, 2 Tablet, 1 Mobile)
function renderLabsSection(labs) {
  const labsGrid = document.getElementById("labs-grid");
  if (!labsGrid) return;
  labsGrid.innerHTML = "";

  labs.forEach((lab) => {
    const card = document.createElement("article");
    card.className = "lab-card";
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `View ${lab.number}: ${lab.title}`);

    card.innerHTML = `
      <div class="lab-image-wrapper">
        <img src="${lab.image}" alt="${lab.title} Preview" class="lab-image" loading="lazy">
        <span class="lab-number-badge">${lab.number}</span>
        <span class="lab-tool-badge"><i class="fa-solid fa-code"></i> ${lab.tool}</span>
      </div>
      <div class="lab-card-body">
        <span class="lab-category">${lab.category}</span>
        <h3 class="lab-card-title">${lab.title}</h3>
        <p class="lab-card-description">${lab.shortDescription}</p>
        <div class="lab-card-footer">
          <span class="btn-view-lab">View Assignment <i class="fa-solid fa-arrow-right"></i></span>
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

// Render Section: 7 DASHBOARD GALLERY GRID (2 cols Desktop/Tablet, 1 Mobile)
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

// Render Section: PROJECTS GRID
function renderProjectsSection(projects) {
  const projGrid = document.getElementById("projects-grid");
  if (!projGrid) return;
  projGrid.innerHTML = "";

  projects.forEach((proj) => {
    const card = document.createElement("article");
    card.className = "project-card";

    const tagsHtml = proj.tags.map(t => `<span class="project-tag">${t}</span>`).join("");

    card.innerHTML = `
      <div class="project-icon-wrap">
        <i class="fa-solid ${proj.icon}"></i>
      </div>
      <div class="project-card-body">
        <span class="project-category">${proj.category}</span>
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-desc">${proj.description}</p>
        <div class="project-tags">${tagsHtml}</div>
        <a href="${proj.link}" target="_blank" rel="noopener" class="project-link">
          View Repository <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
    `;
    projGrid.appendChild(card);
  });
}

// Render Section: SKILLS GRID
function renderSkillsSection(skillsCategories) {
  const skillsGrid = document.getElementById("skills-grid");
  if (!skillsGrid) return;
  skillsGrid.innerHTML = "";

  skillsCategories.forEach((cat) => {
    const card = document.createElement("div");
    card.className = "skill-category-card";

    const itemsHtml = cat.skills.map(s => `
      <div class="skill-item">
        <span class="skill-name">${s.name}</span>
        <span class="skill-level">${s.level}</span>
      </div>
    `).join("");

    card.innerHTML = `
      <div class="skill-cat-header">
        <i class="fa-solid ${cat.icon}"></i>
        <h3>${cat.category}</h3>
      </div>
      <div class="skill-items-list">${itemsHtml}</div>
    `;
    skillsGrid.appendChild(card);
  });
}

// ==========================================================================
// 8. LAB DETAIL PAGE LOGIC (`lab.html`)
// ==========================================================================
function initLabDetailPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const labId = urlParams.get("id");

  const currentLab = labsData.find((l) => l.id === labId) || labsData[0];

  document.title = `${currentLab.number}: ${currentLab.title} — Computer Science Labs | DSVV`;

  // Header Tags
  const labNumTag = document.getElementById("lab-number-tag");
  if (labNumTag) labNumTag.textContent = currentLab.number;

  const labToolTag = document.getElementById("lab-tool-tag");
  if (labToolTag) labToolTag.innerHTML = `<i class="fa-solid fa-code"></i> ${currentLab.tool}`;

  const labCatTag = document.getElementById("lab-category-tag");
  if (labCatTag) labCatTag.textContent = currentLab.category;

  const labTitleElem = document.getElementById("lab-title");
  if (labTitleElem) labTitleElem.textContent = currentLab.title;

  // Sidebar Specs
  const sideNum = document.getElementById("sidebar-lab-num");
  if (sideNum) sideNum.textContent = currentLab.number;

  const sideTool = document.getElementById("sidebar-lab-tool");
  if (sideTool) sideTool.textContent = currentLab.tool;

  // Screenshot & Viewport
  const labImg = document.getElementById("lab-img");
  if (labImg) {
    labImg.src = currentLab.image;
    labImg.alt = `${currentLab.title} Execution Output`;
  }

  const labImgCaption = document.getElementById("lab-img-caption");
  if (labImgCaption) labImgCaption.textContent = `${currentLab.number} — ${currentLab.title} Execution Preview`;

  const viewport = document.getElementById("lab-screenshot-viewport");
  if (viewport) {
    viewport.addEventListener("click", () => {
      openLightbox(currentLab.image, `${currentLab.number}: ${currentLab.title}`);
    });
  }

  // Objective & Work Details
  const labObj = document.getElementById("lab-objective");
  if (labObj) labObj.textContent = currentLab.objective;

  const labAct = document.getElementById("lab-activity");
  if (labAct) labAct.textContent = currentLab.activity || "N/A";

  const labProc = document.getElementById("lab-procedure");
  if (labProc) labProc.textContent = currentLab.procedure || "N/A";

  const labWork = document.getElementById("lab-work-performed");
  if (labWork) labWork.textContent = currentLab.workPerformed || "N/A";

  const labOut = document.getElementById("lab-output");
  if (labOut) labOut.textContent = currentLab.outputPreview || "N/A";

  const labRes = document.getElementById("lab-result");
  if (labRes) labRes.textContent = currentLab.result || "N/A";

  const labLearn = document.getElementById("lab-learning-outcome");
  if (labLearn) labLearn.textContent = currentLab.learningOutcome || "N/A";
}

// ==========================================================================
// 9. DASHBOARD DETAIL PAGE LOGIC (`dashboard.html`)
// ==========================================================================
function initDashboardDetailPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const dashboardId = urlParams.get("id");

  const currentDashboard =
    dashboardsData.find((d) => d.id === dashboardId) || dashboardsData[0];

  document.title = `${currentDashboard.title} — Analytics Portfolio`;

  // Title & Tool Badges
  const detailTitle = document.getElementById("detail-title");
  if (detailTitle) detailTitle.textContent = currentDashboard.title;

  const toolBadgeElem = document.getElementById("detail-tool");
  if (toolBadgeElem) {
    toolBadgeElem.className = `detail-tool-tag ${currentDashboard.toolClass}`;
    toolBadgeElem.innerHTML = `<i class="fa-solid fa-screwdriver-wrench"></i> ${currentDashboard.tool}`;
  }

  const catElem = document.getElementById("detail-category");
  if (catElem) catElem.textContent = currentDashboard.category;

  const sideTool = document.getElementById("sidebar-tool");
  if (sideTool) sideTool.textContent = currentDashboard.tool;

  // Screenshot Gallery Rendering
  const galleryContainer = document.getElementById("screenshots-gallery-grid");
  if (galleryContainer) {
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
  }

  // Overview, Objective & Dataset
  const overviewElem = document.getElementById("detail-overview");
  if (overviewElem) overviewElem.textContent = currentDashboard.overview || currentDashboard.shortDescription;

  const objElem = document.getElementById("detail-objective");
  if (objElem) objElem.textContent = currentDashboard.objective;

  const datasetElem = document.getElementById("detail-dataset");
  if (datasetElem) datasetElem.textContent = currentDashboard.dataset;

  // KPIs Block Rendering
  const kpiBlock = document.getElementById("detail-kpi-block");
  const kpiGrid = document.getElementById("detail-kpis");
  if (kpiGrid && kpiBlock) {
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
  }

  // Key Visualizations List
  const vizBlock = document.getElementById("detail-viz-block");
  const vizList = document.getElementById("detail-visualizations");
  if (vizList && vizBlock) {
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
  }

  // Key Insights List
  const insightsBlock = document.getElementById("detail-insights-block");
  const insightsList = document.getElementById("detail-insights");
  if (insightsList && insightsBlock) {
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
}

// ==========================================================================
// 10. LIGHTBOX FULLSCREEN MODAL HANDLER
// ==========================================================================
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
