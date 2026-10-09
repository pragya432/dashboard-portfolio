/**
 * Dev Sanskriti Vishwavidyalaya — Department of Computer Science
 * Central JavaScript File for 10 Real Lab Assignments, 7 Visual Dashboards, Projects, Skills, and Reusable Detail Pages
 */

// ==========================================================================
// 1. DATA STORE — 10 REAL LAB ASSIGNMENTS REGISTRY
// ==========================================================================
const labsData = [
  {
    id: "assignment-1",
    number: "Assignment 1",
    title: "Assignment 1: Data Visualization",
    tool: "Python / Data Visualization Software",
    category: "Data Science & Analytics",
    image: "images/lab-01-preview.png",
    shortDescription: "Learn how to represent data visually and communicate information effectively through chart selection, clear labeling, and trend identification.",
    objective: "Learn how to represent data visually and communicate information through appropriate charts.",
    content: "Explores how data visualization helps identify patterns, trends, comparisons, and relationships. Chart selection depends on data type and the specific questions answered. Information is presented using clear labels, titles, legends, and readable formatting.",
    activity: "Analyzing benchmark datasets to explore patterns, trends, and variable correlations. Selecting appropriate chart types and formatting visual elements.",
    toolsUsed: "Python (Matplotlib & Seaborn) / Data Visualization Software",
    procedure: "1. Load raw dataset and inspect data types.\n2. Clean missing values and prepare variable categories.\n3. Construct line charts for trends, bar charts for category comparisons, and scatter plots for relationships.\n4. Apply clear labels, titles, color contrast, and legends before exporting output.",
    workPerformed: "Constructed multiple statistical plots visualizing variable correlations, distribution spreads, and multi-series line comparisons with formatted axes and legends.",
    outputPreview: "Generated statistical figures: Distribution Histogram, Correlation Heatmap, Category Comparison Bar Chart, and Time-Series Trend Line.",
    result: "Successfully demonstrated chart selection principles, visual communication, and data interpretation.",
    learningOutcome: "Understanding chart selection, visual communication, data interpretation, and the importance of clear presentation."
  },
  {
    id: "assignment-2",
    number: "Assignment 2",
    title: "Assignment 2: Submission of 9th Aug Class Activity Work",
    tool: "Node.js HTTP & Core Networking",
    category: "Web Protocols & Networking",
    image: "images/lab-02-preview.png",
    shortDescription: "Organize and present the practical work completed for the class activity conducted on 9th August covering HTTP networking protocols.",
    objective: "Organize and present the work completed for the class activity conducted on 9 August.",
    content: "Presents the class activity instructions, task performed, and purpose of the activity. Displays the actual work submitted including network routing, HTTP status codes, and JSON response formatting.",
    activity: "Implementing native Node.js HTTP server routing without external frameworks, handling request headers, status codes (200 OK, 404 Not Found), and URL query strings.",
    toolsUsed: "Node.js runtime, V8 Engine, HTTP core module, FS module, Path module",
    procedure: "1. Instantiate native HTTP server with http.createServer().\n2. Inspect req.url and req.method request properties.\n3. Read static response payload asynchronously via fs.readFile().\n4. Set HTTP response status codes and Content-Type headers.",
    workPerformed: "Developed a functional server dispatching requests to '/api/status', '/data', and default 404 handlers with non-blocking event loops.",
    outputPreview: "Server started at port 8080. GET /api/status -> 200 OK JSON payload dispatched successfully.",
    result: "Verified low-level HTTP request/response execution and asynchronous event loop handling.",
    learningOutcome: "Organizing class activity submissions, client-server request execution cycles, MIME content-type headers, and event-driven Node.js runtime mechanics."
  },
  {
    id: "assignment-3",
    number: "Assignment 3",
    title: "Assignment 3: Visualize It! — Create & Share Your Data Visualization Cheat Sheet",
    tool: "Data Visualization & Graphic Tools",
    category: "Analytics Guidelines & Design",
    image: "images/lab-03-preview.png",
    shortDescription: "Create a concise reference guide that helps learners select appropriate charts for different data visualization tasks.",
    objective: "Create a concise reference guide that helps learners select appropriate charts for different data visualization tasks.",
    content: "Explains the purpose of common chart types, when to use each chart, and the types of comparisons, distributions, trends, or relationships each chart communicates.",
    chartCategories: [
      "Bar & Column Charts: Category comparisons and discrete groupings.",
      "Line Charts: Trends, continuous time-series, and trajectories over time.",
      "Pie & Donut Charts: Simple part-to-whole compositional proportions.",
      "Histograms: Frequency distributions and data density spreads.",
      "Scatter Plots: Relationships and correlations between numerical variables.",
      "Maps: Geographic distributions and spatial comparisons."
    ],
    activity: "Curating a structured infographic cheat sheet covering comparative charts, distribution plots, compositional visuals, and relationship diagrams.",
    toolsUsed: "Data Visualization Software & Design Documentation Tools",
    procedure: "1. Research visual encoding taxonomy (bar, line, scatter, histogram, map).\n2. Classify charts by analytical objective (Comparison, Distribution, Composition, Relationship).\n3. Define accessibility guidelines (color contrast, typography scale, chart junk reduction).\n4. Format reference cheat sheet for easy reading and sharing.",
    workPerformed: "Created a visual guide outlining chart selection decision trees, color palette rules (sequential vs. diverging), and label alignment standards.",
    outputPreview: "Published 'Data Visualization Cheat Sheet' featuring quick decision matrix for choosing between bar, line, pie, histogram, and scatter charts.",
    result: "Produced a reusable reference standard adopted for departmental data analytics lab reports.",
    learningOutcome: "Chart selection, visual literacy, concise documentation, and communicating visualization principles."
  },
  {
    id: "assignment-4",
    number: "Assignment 4",
    title: "Assignment 4: From Learning to LinkedIn",
    tool: "LinkedIn & Portfolio Tools",
    category: "Career & Technical Communication",
    image: "images/lab-04-preview.png",
    shortDescription: "Present learning progress or completed computer science practical work professionally through LinkedIn and technical portfolios.",
    objective: "Present learning progress or completed work professionally through LinkedIn.",
    content: "Describes the practical subject work documented in the submission, displaying the learning output and explaining key learning points communicated to the professional developer network.",
    activity: "Summarizing technical lab achievements into structured case studies, detailing technologies used, source code repositories, and sharing updates.",
    toolsUsed: "LinkedIn Platform, Git / GitHub, Technical Writing Tools",
    procedure: "1. Summarize lab technical architecture into clear bullet points.\n2. Prepare code snippets and execution screenshots.\n3. Draft technical posts explaining problem statements, solutions, and key takeaways.\n4. Link verified GitHub source repositories for peer review.",
    workPerformed: "Published technical case studies detailing Node.js REST API design and Power BI data dashboards with live repository links.",
    outputPreview: "Published technical portfolio update with live repository links across professional developer networks.",
    result: "Successfully established a professional digital footprint bridging academic work and industry readiness.",
    learningOutcome: "Professional communication, documenting learning progress, presenting work, and building a professional portfolio."
  },
  {
    id: "assignment-5",
    number: "Assignment 5",
    title: "Assignment 5: Learning Activity",
    tool: "JavaScript ES6+ & Asynchronous Promises",
    category: "Core Computer Science Algorithms",
    image: "images/lab-05-preview.png",
    shortDescription: "Document the practical learning activity and demonstrate understanding of asynchronous programming and JavaScript control flow.",
    objective: "Document the practical learning activity and demonstrate understanding of the concepts covered.",
    content: "Displays the activity instructions, concepts/techniques practiced in asynchronous control flow, Callback to Promise conversion, Promise.all concurrency, and async/await.",
    activity: "Solving complex asynchronous programming challenges using native ES6 Promises, async/await keywords, and try/catch error boundaries.",
    toolsUsed: "JavaScript ES6+, Node.js runtime, Chrome DevTools",
    procedure: "1. Implement asynchronous operations using Promises.\n2. Benchmark serial await calls against parallel Promise.all() execution.\n3. Add global error handlers to catch unhandled promise rejections.\n4. Log microtask vs macrotask execution orders in console.",
    workPerformed: "Refactored nested callback functions into clean, readable async/await pipelines with improved parallel execution speed.",
    outputPreview: "Promise.all Execution Time: 204ms vs Serial Await Execution Time: 610ms. All tests passed.",
    result: "Achieved optimal asynchronous runtime performance and clean exception handling.",
    learningOutcome: "Applying classroom concepts, following practical instructions, interpreting results, and documenting work."
  },
  {
    id: "assignment-6",
    number: "Assignment 6",
    title: "Assignment 6: Lab Practical",
    tool: "Node.js / Express / Web Security",
    category: "Web Security & Authentication",
    image: "images/lab-06-preview.png",
    shortDescription: "Present the work completed for the assigned laboratory practical on secure user authentication and web security middleware.",
    objective: "Present the work completed for the assigned laboratory practical.",
    content: "Shows the practical title and objective, procedure and tasks performed, software tools used, screenshots of completed work, and recorded conclusions.",
    activity: "Building authentication endpoints (/api/register, /api/login) and authorization middleware protecting private API routes using salted password hashing and JWT tokens.",
    toolsUsed: "Node.js, Express.js, bcrypt cryptography, jsonwebtoken, Postman",
    procedure: "1. Hash user plaintext passwords using bcrypt with salt factor 10.\n2. Authenticate credentials and sign JWT payload with secret key.\n3. Intercept requests using Express authorization header middleware.\n4. Validate Bearer token signature before granting access.",
    workPerformed: "Constructed secure authentication flow ensuring zero plain-text password storage and verified token verification on protected routes.",
    outputPreview: "POST /api/login -> 200 OK { token: 'eyJhbGciOi...' }. GET /api/protected (with Bearer Token) -> Access Granted.",
    result: "Successfully deployed robust JWT-based stateless authorization layer for REST APIs.",
    learningOutcome: "Practical implementation, tool usage, problem-solving, reporting results, and web security principles."
  },
  {
    id: "assignment-7",
    number: "Assignment 7",
    title: "Assignment 7: Hands On Lab Practical - Excel Charts & Dashboard",
    tool: "Microsoft Excel",
    category: "Data Processing & Excel BI",
    image: "images/lab-07-preview.png",
    shortDescription: "Use Microsoft Excel to create charts and assemble a dashboard that presents data in an understandable visual format.",
    objective: "Use Microsoft Excel to create charts and assemble a dashboard that presents data in an understandable visual format.",
    content: "Works with the practical dataset, organizing fields for analysis, creating required charts, and arranging elements into an interactive dashboard using meaningful titles, labels, legends, and formatting.",
    activity: "Transforming raw transactional data into an executive summary dashboard featuring interactive slicers, PivotTables, and dynamic charts.",
    toolsUsed: "Microsoft Excel (PivotTables, Dynamic Charts, Slicers, Conditional Formatting)",
    procedure: "1. Clean and format raw dataset into structured Excel tables.\n2. Summarize metrics using multiple PivotTables (sales by region, category, month).\n3. Create dynamic bar charts, pie charts, and KPI summary blocks.\n4. Connect interactive timeline slicers for cross-filtering.",
    workPerformed: "Engineered a complete single-page interactive Excel sales dashboard with automated total calculations and regional filters.",
    outputPreview: "Interactive Excel Dashboard displaying KPI summary cards, dynamic charts, and region/quarter timeline slicers.",
    result: "Delivered a fully responsive spreadsheet analytics tool ready for business reporting.",
    learningOutcome: "Spreadsheet-based data analysis, chart creation, dashboard layout, data presentation, and interpretation of visual results."
  },
  {
    id: "assignment-8",
    number: "Assignment 8",
    title: "Assignment 8: Submit Your Data Studio Report",
    tool: "Google Data Studio / Looker Studio",
    category: "Cloud Data Visualization",
    image: "images/lab-08-preview.png",
    shortDescription: "Create and submit a report using Google Data Studio (Looker Studio) to communicate data through interactive visualizations.",
    objective: "Create and submit a report using Google Data Studio, now known as Looker Studio, to communicate data through interactive visualizations.",
    content: "Identifies the data source used, presents the report's purpose, displays scorecards, tables, filters, and charts, and explains the metrics and observations shown.",
    activity: "Connecting Google Sheets data source to Looker Studio, configuring calculated fields, scorecards, time-series charts, and shareable reports.",
    toolsUsed: "Google Data Studio / Looker Studio, Google Sheets",
    procedure: "1. Connect sales dataset hosted on Google Sheets to Looker Studio.\n2. Create calculated metrics for net revenue and profit margin %.\n3. Design scorecards, category distribution bar charts, and daily sales trend lines.\n4. Configure interactive date range pickers and category drop-down filters.",
    workPerformed: "Published an interactive Looker Studio sales report with dynamic filtering and mobile-friendly responsive layout.",
    outputPreview: "Looker Studio Report Published: Executive KPI scorecards, interactive charts, and live cloud share URL.",
    result: "Delivered accessible, cloud-native business intelligence report requiring zero software installation.",
    learningOutcome: "Report building, visual storytelling, metric presentation, dashboard organization, and communicating data-driven observations."
  },
  {
    id: "assignment-9",
    number: "Assignment 9",
    title: "Assignment 9: Lab Work: Tableau Dashboard",
    tool: "Tableau",
    category: "Enterprise Analytics & Geographic Mapping",
    image: "images/lab-09-preview.png",
    shortDescription: "Use Tableau to build geographic visualizations and dashboards using Superstore_Sales.csv supporting data exploration.",
    objective: "Use Tableau to build visualizations and dashboards that support data exploration and analysis.",
    content: "Uses Superstore_Sales.csv to perform map-based visualization tasks including Filled Maps for sales by state, Bubble Maps for profit distribution by city, Heat Maps for order concentration, and Flow Maps for delivery routes.",
    tableautasks: [
      "1. Display total sales by state using a Filled Map.",
      "2. Show profit distribution by city using a Bubble Map.",
      "3. Identify order concentration using a Heat Map.",
      "4. Trace delivery routes using a Flow Map."
    ],
    analysisQuestions: [
      "• Which states bring in the highest sales?",
      "• Which cities or locations stand out in the profit distribution?",
      "• Where is order concentration highest?",
      "• What delivery routes or geographic patterns are visible?"
    ],
    activity: "Building a multi-sheet Tableau workbook analyzing corporate sales revenue, profit ratios, and regional geographical performance using Superstore_Sales.csv.",
    toolsUsed: "Tableau Desktop / Tableau Public, Superstore_Sales.csv",
    procedure: "1. Connect Superstore_Sales.csv dataset to Tableau Desktop.\n2. Build Filled Map for State sales, Bubble Map for City profit, and Heat Map for order density.\n3. Create custom calculated fields for Profit Ratio and YoY Growth.\n4. Assemble worksheets on a unified dashboard canvas and add Filter Actions.",
    workPerformed: "Designed an interactive Tableau dashboard with map visualizations, cross-highlighting actions, tooltips, and regional filter controls.",
    outputPreview: "Tableau Dashboard published with interactive geographic maps and regional filter controls.",
    result: "Constructed an executive-ready enterprise dashboard adhering to Tableau visual analytics standards.",
    learningOutcome: "Geographic visualization, map configuration, visual encoding, dashboard creation, and interpretation of sales and order data."
  },
  {
    id: "assignment-10",
    number: "Assignment 10",
    title: "Assignment 10: Hands-On Practical",
    tool: "Express.js & MongoDB",
    category: "Full-Stack Backend Development",
    image: "images/lab-10-preview.png",
    shortDescription: "Demonstrate the practical skills developed through assigned hands-on exercises in full-stack backend RESTful microservices.",
    objective: "Demonstrate the practical skills developed through the assigned hands-on exercise.",
    content: "Presents the practical title and objective, instructions performed, tools used, submitted work outputs, results, and learning outcomes.",
    activity: "Engineering a full-stack backend application handling student data management, grade recording, Mongoose validation, and automated JSON reporting.",
    toolsUsed: "Node.js, Express.js, MongoDB, Mongoose ODM, Postman",
    procedure: "1. Define Mongoose schema with field validation rules (unique, required, min/max).\n2. Create modular API controllers for GET, POST, PUT, DELETE operations.\n3. Implement async middleware error wrapper to handle database validation failures.\n4. Test API endpoints using Postman collection.",
    workPerformed: "Successfully deployed full backend API servicing CRUD operations for 10+ student records with robust input validation.",
    outputPreview: "Full CRUD API verified: GET /api/v1/students -> 200 OK. POST /api/v1/students -> 201 Created.",
    result: "Demonstrated full operational readiness in building scalable Node.js/MongoDB web backend services.",
    learningOutcome: "Applying practical skills, working through assigned tasks, interpreting outputs, and documenting completed work."
  }
];

// ==========================================================================
// 2. DATA STORE — 7 DASHBOARD GALLERY REGISTRY
// ==========================================================================
const dashboardsData = [
  {
    id: "paper-leak",
    number: "Dashboard 1",
    title: "Dashboard 1: Paper Leak Analysis Dashboard",
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
    shortDescription: "Present information related to paper leak analysis in a visual dashboard.",
    objective: "Present information related to paper leak analysis in a visual dashboard.",
    overview: "This investigative security intelligence dashboard provides a detailed analytical audit of reported exam paper leak incidents across India. It tracks breach frequency across state and central conducting bodies, evaluates legal enforcement actions, and quantifies the impact on student candidates.",
    audience: "Educational administrators, examination boards, and security policy analysts.",
    dataset: "Incident reports database containing breach records, conducting bodies (Vyapam/MPPEB, CBSE, NTA, State Boards), era classification (NDA vs UPA), affected candidate counts, and enforcement outcomes (Arrests/FIR, Convictions).",
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
      "Action Taken Breakdown (Bar Chart): Enforcement metrics for Arrests-FIR + Paper Cancelled, Retest + Arrest, and Exam Cancelled."
    ],
    filtersSlicers: "Interactive slicers for Conducting Body, Era (NDA vs UPA), State vs Central, and Confidence Level.",
    keyInsights: [
      "State conducting bodies account for 80% (88 incidents) of total reported paper leaks, while Central conducting bodies represent 20% (22 incidents).",
      "Confirmed leak cases constitute 80.91% (89 cases) of all logged incidents, with 73.64% (81 cases) evaluated at high verification confidence.",
      "Paper leak frequency experienced a major surge between 2020 and 2022, directly impacting over 5 Million+ aspirants across competitive examinations."
    ]
  },
  {
    id: "examination-result",
    number: "Dashboard 2",
    title: "Dashboard 2: Examination & Result Dashboard",
    category: "Academic / Student Performance Analytics",
    tool: "Power BI",
    toolClass: "power-bi",
    images: [
      {
        src: "images/examination-dashboard.png",
        caption: "Examination & Result Analytics Executive Overview Canvas"
      }
    ],
    shortDescription: "Analyze examination performance and student results through a dashboard.",
    objective: "Analyze examination performance and student results through a dashboard.",
    overview: "This academic performance evaluation dashboard provides institution-level analytics for student cohort evaluation. It measures marks distribution across semesters, subject performance rankings, attendance compliance, and distinction grade ratios.",
    audience: "Academic department heads, faculty evaluation committees, and university administration.",
    dataset: "Student academic evaluation database: 14 students, 6 semesters, 266 result records, Average marks: 84.21 / 100, overall cohort attendance: 89.34%.",
    kpis: [
      { label: "Total Students", value: "14 Students", sub: "Active cohort size" },
      { label: "Semesters Tracked", value: "6 Semesters", sub: "Sem 1 to Sem 6" },
      { label: "Result Records", value: "266 Records", sub: "Total course evaluations" },
      { label: "Average Marks", value: "84.21 / 100", sub: "Overall aggregate score" },
      { label: "Pass Rate", value: "96.99%", sub: "258 pass evaluations" }
    ],
    keyVisualizations: [
      "Pass vs. Fail Distribution (Pie Chart): 258 Pass evaluations (96.99%) vs 8 Fail evaluations (3.01%).",
      "Grade Distribution (Donut Chart): 266 total grade evaluations — A Grade: 113 (42.48%), A+: 86 (32.33%), B+: 59 (22.18%).",
      "Overall Attendance Gauge Chart: Cohort attendance average of 89.34% measured against 75.00% target.",
      "Average Marks by Semester (Bar Chart): Semester score progression showing peak performance concentration in Semester 6.",
      "Subject Performance Roster Matrix: Itemized student scoreboard across Sem 1 to Sem 6 with cumulative total marks."
    ],
    filtersSlicers: "Slicers for Semester (Sem 1 to Sem 6), Department, Course Subject, and Pass/Fail Status.",
    keyInsights: [
      "The student cohort achieved a 96.99% overall pass rate (258 pass evaluations vs. 8 fail evaluations) with a high average score of 84.21 / 100.",
      "Top distinction grades (A and A+) accounted for 74.81% of all course evaluations (A Grade: 42.48%, A+ Grade: 32.33%).",
      "Average cohort attendance stood at 89.34%, comfortably exceeding the institutional 75.00% attendance benchmark target."
    ]
  },
  {
    id: "sales-by-category",
    number: "Dashboard 3",
    title: "Dashboard 3: Sales by Category Dashboard",
    category: "Sales Analytics",
    tool: "Google Data Studio / Looker Studio",
    toolClass: "looker-studio",
    images: [
      {
        src: "images/sales-by-category-dashboard.png",
        caption: "Sales by Category Looker Studio Analytics View"
      }
    ],
    shortDescription: "Present sales performance by product or sales category.",
    objective: "Present sales performance by product or sales category.",
    overview: "This interactive cloud analytics dashboard monitors category-level sales revenue, profit margin contributions, order volumes, and customer payment method breakdowns across e-commerce channels.",
    audience: "Category sales managers, e-commerce operations leads, and retail analysts.",
    dataset: "E-commerce sales transaction database featuring order IDs, product names, category hierarchies (Electronics, Furniture, Clothing, Beauty), sales amounts, profit figures, order quantities, payment methods (Card, UPI, Cash), and transaction dates.",
    kpis: [
      { label: "Total Sales", value: "$222,100", sub: "Gross sales revenue" },
      { label: "Total Profit", value: "$29,300", sub: "Net category profit" },
      { label: "Total Orders", value: "30 Orders", sub: "Completed transactions" },
      { label: "Quantity Sold", value: "47 Units", sub: "Shipped items" }
    ],
    keyVisualizations: [
      "Sales by Category (Horizontal Bar Chart): Category revenue breakdown showing Electronics (~$120k - Top Category), Furniture (~$60k), Clothing (~$24k), and Beauty (~$15k).",
      "Sales Trend Over Time (Time Series Chart): Daily sales progression from Jan 3 to Mar 28 featuring revenue spikes.",
      "Profit by Category (Vertical Column Chart): Category net profit contributions — Electronics ($14k+), Furniture ($7.5k), Clothing ($4k), and Beauty ($3k).",
      "Orders by Payment Method (Donut Chart): Card payments (46.7%), UPI payments (43.3%), and Cash payments (10.0%)."
    ],
    filtersSlicers: "Interactive Date Range Picker (Jan 3 - Mar 28), Category Dropdown Filter, and Payment Method Filter.",
    keyInsights: [
      "Total sales revenue reached $222,100 with a total net profit of $29,300 generated across 30 orders and 47 units sold.",
      "Electronics emerged as the primary revenue and profit driver (~$120k sales, ~$14k+ profit), followed by Furniture (~$60k sales).",
      "Digital payment methods accounted for 90.0% of all customer orders (Card: 46.7%, UPI: 43.3%), while cash represented only 10.0%."
    ]
  },
  {
    id: "sales-performance",
    number: "Dashboard 4",
    title: "Dashboard 4: Sales Performance Dashboard",
    category: "Sales / Business Analytics",
    tool: "Tableau",
    toolClass: "tableau",
    images: [
      {
        src: "images/sales-performance-dashboard.png",
        caption: "Tableau Executive Sales Performance Overview"
      }
    ],
    shortDescription: "Present sales performance using interactive visualizations.",
    objective: "Present sales performance using interactive visualizations.",
    overview: "This enterprise Tableau executive dashboard delivers commercial revenue analysis for Sample Superstore. It analyzes product segment performance, seasonal sales cycles, and multi-year profit growth across sales territories.",
    audience: "VP of Sales, Regional Directors, and Commercial Strategy Teams.",
    dataset: "Enterprise commercial sales database (Sample Superstore) containing multi-year transactions spanning 2023 through 2026, categorized by product segments, order dates, regions (Central, East, South, West), sales revenue, and net profit figures.",
    kpis: [
      { label: "Total Sales", value: "$2,326,534", sub: "Gross store revenue" },
      { label: "Total Profit", value: "$292,297", sub: "Net store profit" }
    ],
    keyVisualizations: [
      "Sales Profit by Category (Column Bar Chart): Category revenue breakdown featuring Technology ($839,893 - Top Category), Furniture ($754,748), and Office Supplies ($731,893).",
      "Sales by Month (Line Chart): Monthly revenue trend across Order Dates (Jan to Dec), highlighting Q4 peaks in November (~$340k) and September (~$310k).",
      "Sales and Profit by Year (Scatter Matrix): Annual performance matrix tracking sales volume and net profit growth across 2023, 2024, 2025, and 2026."
    ],
    filtersSlicers: "Region Slicers (Central, East, South, West), Year Filters (2023-2026), and Category Selection.",
    keyInsights: [
      "Sample Superstore generated $2,326,534 in total gross sales revenue and $292,297 in net profit.",
      "Technology was the highest-performing product category generating $839,893 in sales, followed by Furniture ($754,748) and Office Supplies ($731,893).",
      "Monthly sales trends demonstrate strong Q4 seasonality, with sales volume peaking significantly in November (~$340k) and September (~$310k)."
    ]
  },
  {
    id: "regional-management",
    number: "Dashboard 5",
    title: "Dashboard 5: Regional Management Dashboard",
    category: "Management / Regional Analytics",
    tool: "Tableau",
    toolClass: "tableau",
    images: [
      {
        src: "images/regional-management-dashboard.png",
        caption: "Regional Management Dashboard Tableau Analytics View"
      }
    ],
    shortDescription: "Provide a regional management view to help compare regional sales, profit, trends, ranking, and category performance.",
    objective: "Help regional management compare regional sales, profit, trends, ranking, and category performance.",
    overview: "This regional management dashboard built in Tableau provides interactive visual analytics to compare regional sales revenue, net profit margins, performance trends, territory rankings, and product category breakdowns.",
    audience: "Regional Managers, Operations Leads, and Territory Directors.",
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
    filtersSlicers: "Regional Territory Filters, Category Selectors, and Date Range Controls.",
    keyInsights: [
      "Enables regional leadership to instantly identify top-performing regions and category growth opportunities.",
      "Provides clear comparative visibility into regional profit margins, territory rankings, and multi-year sales trends."
    ]
  },
  {
    id: "sales-management",
    number: "Dashboard 6",
    title: "Dashboard 6: Sales Management Dashboard",
    category: "Management / Sales Analytics",
    tool: "Tableau",
    toolClass: "tableau",
    images: [
      {
        src: "images/sales-management-dashboard.png",
        caption: "Sales Management Dashboard Tableau Performance Overview"
      }
    ],
    shortDescription: "Present sales-related information relevant to sales management to monitor sales performance, categories, segments, trends, and top products.",
    objective: "Help sales management monitor sales performance, categories, segments, trends, and top products.",
    overview: "This sales management dashboard built in Tableau gives commercial sales leaders complete visibility into overall sales performance, category revenue shares, customer market segments, multi-year trends, and top product items.",
    audience: "Sales Managers, Account Executives, and Commercial Strategy Leads.",
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
    filtersSlicers: "Market Segment Filters, Category Slicers, and Product Line Selectors.",
    keyInsights: [
      "Streamlines sales pipeline monitoring by highlighting top-grossing product lines and high-value customer segments.",
      "Identifies seasonal demand peaks and provides actionable data to optimize sales team resource allocation."
    ]
  },
  {
    id: "finance-management",
    number: "Dashboard 7",
    title: "Dashboard 7: Finance Management Dashboard",
    category: "Management / Financial Analytics",
    tool: "Tableau",
    toolClass: "tableau",
    images: [
      {
        src: "images/finance-management-dashboard.png",
        caption: "Finance Management Dashboard Tableau Capital & Financial Overview"
      }
    ],
    shortDescription: "Present financial information relevant to finance management to analyze sales, profitability, discounts, and relationships between financial measures.",
    objective: "Help finance management analyze sales, profitability, discounts, and relationships between financial measures.",
    overview: "This finance management dashboard built in Tableau empowers financial executives to analyze sales volumes, net profitability, discount rates, and complex relationships between financial metrics.",
    audience: "CFOs, Financial Controllers, Budget Analysts, and Corporate Planners.",
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
    filtersSlicers: "Discount Range Sliders, Financial Year Filters, and Measure Selectors.",
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
      { name: "Power BI (DAX, Data Modeling)", level: "Supported" },
      { name: "Tableau Desktop & Public", level: "Supported" },
      { name: "Google Data Studio / Looker Studio", level: "Supported" },
      { name: "Microsoft Excel (Charts, PivotTables)", level: "Supported" }
    ]
  },
  {
    category: "Web & Backend Engineering",
    icon: "fa-code",
    skills: [
      { name: "Node.js & Asynchronous Control Flow", level: "Supported" },
      { name: "Express.js REST Framework", level: "Supported" },
      { name: "JavaScript ES6+ / HTML5 / CSS3", level: "Supported" },
      { name: "Web Protocols & HTTP APIs", level: "Supported" }
    ]
  },
  {
    category: "Database & Cloud Systems",
    icon: "fa-database",
    skills: [
      { name: "MongoDB & Mongoose ODM", level: "Supported" },
      { name: "SQL & Relational Schemas", level: "Supported" },
      { name: "NoSQL Document Modeling", level: "Supported" },
      { name: "Git & Version Control", level: "Supported" }
    ]
  },
  {
    category: "Security & Methods",
    icon: "fa-shield-halved",
    skills: [
      { name: "JWT Bearer Token Auth", level: "Supported" },
      { name: "bcrypt Password Cryptography", level: "Supported" },
      { name: "Data Viz Best Practices", level: "Supported" },
      { name: "Technical Documentation", level: "Supported" }
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

// Render Section: 10 REAL ASSIGNMENTS GRID (3 cols Desktop, 2 Tablet, 1 Mobile)
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
        <img src="${thumbSrc}" alt="${dash.title} Screenshot Preview" class="dash-thumb-img" loading="lazy">
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

  document.title = `${currentLab.title} — Computer Science Labs | DSVV`;

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
    labImg.alt = `${currentLab.title} Output Preview`;
  }

  const labImgCaption = document.getElementById("lab-img-caption");
  if (labImgCaption) labImgCaption.textContent = `${currentLab.number} — ${currentLab.title} Screenshot Preview`;

  const viewport = document.getElementById("lab-screenshot-viewport");
  if (viewport) {
    viewport.addEventListener("click", () => {
      openLightbox(currentLab.image, `${currentLab.title}`);
    });
  }

  // Objective & Work Details
  const labObj = document.getElementById("lab-objective");
  if (labObj) labObj.textContent = currentLab.objective;

  const labContent = document.getElementById("lab-content");
  if (labContent) labContent.textContent = currentLab.content || currentLab.shortDescription;

  // Render Tableau Tasks & Analysis Questions if Assignment 9
  const tableauBlock = document.getElementById("lab-tableau-extras");
  if (tableauBlock) {
    if (currentLab.id === "assignment-9") {
      tableauBlock.style.display = "block";
      const tasksElem = document.getElementById("tableau-tasks");
      const questionsElem = document.getElementById("tableau-questions");
      if (tasksElem) tasksElem.innerHTML = currentLab.tableautasks.map(t => `<li class="viz-item"><i class="fa-solid fa-map-location-dot"></i> <span>${t}</span></li>`).join("");
      if (questionsElem) questionsElem.innerHTML = currentLab.analysisQuestions.map(q => `<div class="insight-card" style="margin-bottom:0.5rem;"><i class="fa-solid fa-circle-question insight-icon"></i><div class="insight-text">${q}</div></div>`).join("");
    } else {
      tableauBlock.style.display = "none";
    }
  }

  // Render Chart Categories if Assignment 3
  const cheatSheetBlock = document.getElementById("lab-cheatsheet-extras");
  if (cheatSheetBlock) {
    if (currentLab.id === "assignment-3") {
      cheatSheetBlock.style.display = "block";
      const catsElem = document.getElementById("cheatsheet-categories");
      if (catsElem) catsElem.innerHTML = currentLab.chartCategories.map(c => `<li class="viz-item"><i class="fa-solid fa-chart-simple"></i> <span>${c}</span></li>`).join("");
    } else {
      cheatSheetBlock.style.display = "none";
    }
  }

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

  document.title = `${currentDashboard.title} — Analytics Portfolio | DSVV`;

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

  // Overview, Objective & Audience
  const overviewElem = document.getElementById("detail-overview");
  if (overviewElem) overviewElem.textContent = currentDashboard.overview || currentDashboard.shortDescription;

  const objElem = document.getElementById("detail-objective");
  if (objElem) objElem.textContent = currentDashboard.objective;

  const audElem = document.getElementById("detail-audience");
  if (audElem) audElem.textContent = currentDashboard.audience || "Management and Business Stakeholders";

  const datasetElem = document.getElementById("detail-dataset");
  if (datasetElem) datasetElem.textContent = currentDashboard.dataset;

  const filtersElem = document.getElementById("detail-filters");
  if (filtersElem) filtersElem.textContent = currentDashboard.filtersSlicers || "Interactive filters and slice controls available on canvas.";

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
