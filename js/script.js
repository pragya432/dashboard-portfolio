/**
 * Dev Sanskriti Vishwavidyalaya — Department of Computer Science
 * Central JavaScript File for 12 Lab Assignments, 7 Visual Dashboards, Projects, Skills, and Detail Views
 */

// ==========================================================================
// 1. DATA STORE — 12 LAB ASSIGNMENTS REGISTRY (Lab 01 to Lab 12)
// ==========================================================================
const labsData = [
  {
    id: "lab-01",
    number: "Lab 01",
    title: "Lab 01 — Paper Leak Dashboard",
    tool: "Power BI / Dashboard Analytics",
    category: "Dashboard Design",
    imagePlaceholder: "lab-01-paper-leak-dashboard-01.png",
    shortDescription: "Analyze examination paper leak data and present findings through an interactive analytical dashboard.",
    objective: "Analyze examination paper leak-related data and present the findings through an interactive dashboard.",
    overview: "An analytical dashboard examining examination paper leak data across conducting bodies, breach frequency, legal enforcement, and aspirant impact.",
    tasksCompleted: [
      "Dataset overview and relevant field organization.",
      "Data preparation and structural cleaning.",
      "Identification of breach patterns and temporal trends.",
      "Visual representation of key metrics and comparisons.",
      "Dashboard design and interpretation of findings."
    ],
    workflow: "1. Import paper leak incident database.\n2. Clean fields (conducting body, era, leak status, affected candidates).\n3. Build KPI cards for confirmed leaks and state vs central share.\n4. Construct donut charts for leak status and bar charts for conducting bodies.\n5. Assemble unified dashboard layout for security analysis.",
    placeholders: [
      { label: "Dashboard Overview", filename: "lab-01-paper-leak-dashboard-01.png" },
      { label: "Individual Charts", filename: "lab-01-paper-leak-dashboard-02.png" },
      { label: "Final Dashboard", filename: "lab-01-paper-leak-dashboard-03.png" }
    ],
    skillsDemonstrated: ["Data Analysis", "Dashboard Design", "Data Visualization", "Insight Communication"],
    deliverable: "Completed Paper Leak Analysis Dashboard."
  },
  {
    id: "lab-02",
    number: "Lab 02",
    title: "Lab 02 — Visualize Your World",
    tool: "Visual Thinking & Manual Sketching",
    category: "Visual Storytelling",
    imagePlaceholder: "lab-02-draw-your-day-01.png",
    shortDescription: "Represent daily routines, energy curves, and real-world data visualization examples across three practical activities.",
    objective: "Explore personal data visualization through daily activity timelines, energy curves, and real-world visualization analysis.",
    overview: "A 3-part exploratory lab analyzing personal daily time distribution, energy fluctuations, and real-world visualization applications.",
    isMultiActivity: true,
    activities: [
      {
        name: "Activity A: Draw Your Day",
        desc: "Represent daily activities through a visual timeline or diagram showing time distribution across daily routines to make habits easy to understand."
      },
      {
        name: "Activity B: Draw Your Energy Curve",
        desc: "Represent changes in personal energy levels throughout the day using a line graph or energy curve to identify peak productive periods."
      },
      {
        name: "Activity C: Explore Data Visualization in the Real World",
        desc: "Examine real-world data visualizations in news, business, and education, explaining visual design choices and audience communication impact."
      }
    ],
    workflow: "1. Log 24-hour activity distribution into categories.\n2. Track hourly subjective energy levels (scale 1-10).\n3. Draw activity timeline and smooth energy curve graph.\n4. Collect and analyze real-world infographic examples.",
    placeholders: [
      { label: "Activity A: Draw Your Day Timeline", filename: "lab-02-draw-your-day-01.png" },
      { label: "Activity B: Energy Curve Graph", filename: "lab-02-energy-curve-01.png" },
      { label: "Activity C: Real-World Visualization Examples", filename: "lab-02-real-world-viz-01.png" }
    ],
    skillsDemonstrated: ["Visual Thinking", "Basic Chart Interpretation", "Storytelling", "Real-World Visualization Analysis"],
    deliverable: "Visualized personal journal & real-world visualization review."
  },
  {
    id: "lab-03",
    number: "Lab 03",
    title: "Lab 03 — Types of Data Visualization: Charts, Graphs & Maps — LinkedIn Post",
    tool: "LinkedIn & Visual Documentation",
    category: "Professional Presentation",
    imagePlaceholder: "lab-03-linkedin-post-01.png",
    shortDescription: "Understand different types of data visualization (charts, graphs, maps) and communicate their appropriate use cases in a LinkedIn post.",
    objective: "Understand different types of data visualization and communicate their uses through a LinkedIn post.",
    overview: "A public-facing technical communication deliverable classifying chart types, map encodings, and visual selection rules.",
    chartCategories: [
      "Bar & Column Charts: Category comparisons and discrete groupings.",
      "Line Charts: Trends, continuous time-series, and trajectories over time.",
      "Pie & Donut Charts: Simple part-to-whole compositional proportions.",
      "Histograms: Frequency distributions and data density spreads.",
      "Scatter Plots: Relationships and correlations between numerical variables.",
      "Maps: Geographic distributions and spatial comparisons."
    ],
    workflow: "1. Research visual encoding taxonomy (bar, line, scatter, histogram, map).\n2. Classify charts by analytical objective (Comparison, Distribution, Composition, Relationship).\n3. Define accessibility guidelines (color contrast, typography scale, chart junk reduction).\n4. Draft and publish professional LinkedIn post.",
    placeholders: [
      { label: "Published LinkedIn Post", filename: "lab-03-linkedin-post-01.png" },
      { label: "Supporting Infographic Guide", filename: "lab-03-chart-types-guide-01.png" }
    ],
    skillsDemonstrated: ["Chart Selection", "Visual Communication", "Content Creation", "Professional Presentation"],
    deliverable: "LinkedIn Post discussing charts, graphs, and maps."
  },
  {
    id: "lab-04",
    number: "Lab 04",
    title: "Lab 04 — Data Visualization: Turning Data into Meaningful Stories — LinkedIn Blog",
    tool: "LinkedIn Blog & Storytelling",
    category: "Data Storytelling",
    imagePlaceholder: "lab-04-linkedin-blog-01.png",
    shortDescription: "Explore how data visualization turns raw data into meaningful insights and narrative stories through a LinkedIn blog post.",
    objective: "Explore how data visualization can turn raw data into meaningful insights and stories.",
    overview: "A technical article detailing data storytelling techniques, connecting data, visuals, and narrative context to engage target audiences.",
    tasksCompleted: [
      "Introduction to data storytelling concepts.",
      "Examining the relationship between data, visuals, and narrative.",
      "Identifying key insights from raw datasets.",
      "Selecting charts that support a central narrative message.",
      "Addressing audience context and clear communication."
    ],
    workflow: "1. Select dataset with clear narrative message.\n2. Extract top 3 analytical takeaways.\n3. Design charts highlighting key insights.\n4. Write structured LinkedIn article linking data, visuals, and business context.",
    placeholders: [
      { label: "LinkedIn Blog Article", filename: "lab-04-linkedin-blog-01.png" },
      { label: "Article Cover & Data Visuals", filename: "lab-04-blog-cover-visuals-01.png" }
    ],
    skillsDemonstrated: ["Data Storytelling", "Analytical Thinking", "Technical Writing", "Insight Communication"],
    deliverable: "Published LinkedIn Blog Article on Data Storytelling."
  },
  {
    id: "lab-05",
    number: "Lab 05",
    title: "Lab 05 — Tableau Notes",
    tool: "Tableau",
    category: "Tableau Fundamentals",
    imagePlaceholder: "lab-05-tableau-notes-01.png",
    shortDescription: "Document foundational Tableau concepts, data connections, dimensions vs. measures, worksheets, dashboards, and maps.",
    objective: "Document foundational Tableau concepts and practical learning.",
    overview: "A comprehensive reference guide and practical documentation of core Tableau Desktop functionality and workflow procedures.",
    tasksCompleted: [
      "Connecting to flat files and database sources.",
      "Understanding Dimensions vs Measures and Discrete vs Continuous fields.",
      "Building worksheets, interactive dashboards, and story points.",
      "Creating bar charts, line graphs, pie charts, and maps.",
      "Configuring filters, sorting, tooltips, marks card, and formatting."
    ],
    workflow: "1. Connect Tableau to sample dataset.\n2. Classify fields into Dimensions and Measures.\n3. Build individual worksheets with proper marks card configuration.\n4. Assemble worksheets into unified dashboard with filter actions.\n5. Document step-by-step procedures and key concepts.",
    placeholders: [
      { label: "Tableau Notes Document", filename: "lab-05-tableau-notes-01.png" },
      { label: "Tableau Interface Overview", filename: "lab-05-tableau-interface-01.png" },
      { label: "Practical Worksheet Examples", filename: "lab-05-practical-examples-01.png" }
    ],
    skillsDemonstrated: ["Tableau Fundamentals", "Data Preparation", "Chart Creation", "Technical Documentation"],
    deliverable: "Organized Tableau Notes Document for revision and reference."
  },
  {
    id: "lab-06",
    number: "Lab 06",
    title: "Lab 06 — Understanding Audience and Context",
    tool: "Design & Contextual Analytics",
    category: "Design Theory",
    imagePlaceholder: "lab-06-audience-context-01.png",
    shortDescription: "Analyze how target audience requirements, literacy levels, and viewing context influence visual design choices.",
    objective: "Understand how audience requirements and context influence data visualization decisions.",
    overview: "An exploration of audience-centric visualization design, focusing on visual clarity, context framing, and responsible data presentation.",
    tasksCompleted: [
      "Identifying target audience profiles and data literacy needs.",
      "Defining the specific analytical purpose of visualizations.",
      "Evaluating viewing context (desktop dashboard vs mobile vs presentation).",
      "Selecting appropriate chart detail and level of aggregation.",
      "Using titles, labels, legends, and annotations effectively.",
      "Avoiding misleading visual scales and chart clutter."
    ],
    workflow: "1. Define target audience personas and decision goals.\n2. Analyze viewing context constraints.\n3. Select chart types matched to audience data literacy.\n4. Apply formatting, clear titles, and annotations.",
    placeholders: [
      { label: "Audience Analysis Framework", filename: "lab-06-audience-context-01.png" },
      { label: "Context Design Examples", filename: "lab-06-context-examples-01.png" },
      { label: "Completed Deliverable", filename: "lab-06-completed-deliverable-01.png" }
    ],
    skillsDemonstrated: ["Audience Analysis", "Contextual Design", "Visual Communication", "Responsible Data Presentation"],
    deliverable: "Audience & Context Visualization Study."
  },
  {
    id: "lab-07",
    number: "Lab 07",
    title: "Lab 07 — Excel Charts & Dashboard",
    tool: "Microsoft Excel",
    category: "Spreadsheet Analytics",
    imagePlaceholder: "lab-07-excel-dashboard-01.png",
    shortDescription: "Organize transactional datasets in Microsoft Excel, build PivotTables and dynamic charts, and assemble an interactive dashboard.",
    objective: "Use Microsoft Excel to organize data, create charts, and assemble a dashboard.",
    overview: "A spreadsheet-based business intelligence project creating an executive Excel dashboard using PivotTables and slicers.",
    tasksCompleted: [
      "Importing and structuring raw Excel data tables.",
      "Cleaning missing fields and formatting data types.",
      "Creating PivotTables for summary aggregations.",
      "Constructing bar, column, and pie charts with custom labels.",
      "Arranging charts into a unified dashboard layout with timeline slicers."
    ],
    workflow: "1. Format raw data into structured Excel Table.\n2. Generate PivotTables for sales by region, category, and month.\n3. Insert PivotCharts paired with each PivotTable.\n4. Link interactive slicers across all charts.\n5. Apply clean dashboard styling and layout alignment.",
    placeholders: [
      { label: "Source Dataset Table", filename: "lab-07-excel-source-data-01.png" },
      { label: "Individual Excel Charts", filename: "lab-07-excel-charts-01.png" },
      { label: "Completed Excel Dashboard", filename: "lab-07-excel-dashboard-01.png" }
    ],
    skillsDemonstrated: ["Spreadsheet Analysis", "Chart Creation", "Data Organization", "Dashboard Design"],
    deliverable: "Interactive Excel Dashboard File."
  },
  {
    id: "lab-08",
    number: "Lab 08",
    title: "Lab 08 — Import, Clean, Transform and Visualize Web Data Using Power BI",
    tool: "Power BI Desktop / Power Query",
    category: "ETL & Power BI",
    imagePlaceholder: "lab-08-power-bi-web-data-01.png",
    shortDescription: "Connect Power BI to a web data source, clean and transform data in Power Query Editor, and create map and pie chart visuals.",
    objective: "Connect Power BI Desktop to a web data source, import relevant data, prepare it in Power Query, and create visualizations.",
    overview: "A end-to-end Power BI ETL and visualization exercise importing web data, executing transformations in Power Query, and building report pages.",
    tasksCompleted: [
      "Connecting Power BI Desktop to web data URL.",
      "Navigating and selecting target data tables.",
      "Importing data into Power Query Editor.",
      "Inspecting column data types, headers, and data quality.",
      "Applying cleaning, split, and type transformation steps.",
      "Loading prepared data model into Power BI canvas.",
      "Building geographic map visualizations and pie charts."
    ],
    workflow: "1. Launch Power BI Desktop -> Get Data -> Web.\n2. Enter Web Data URL and select HTML table in Navigator.\n3. Click Transform Data to open Power Query Editor.\n4. Promote headers, change data types, and remove null rows.\n5. Click Close & Apply.\n6. Add Map visual for geographic fields and Pie chart for category breakdown.\n7. Format report layout and titles.",
    placeholders: [
      { label: "1. Web Data Connection", filename: "lab-08-web-connection-01.png" },
      { label: "2. Table Selection & Import", filename: "lab-08-table-selection-01.png" },
      { label: "3. Power Query Editor", filename: "lab-08-power-query-editor-01.png" },
      { label: "4. Applied Transformations", filename: "lab-08-applied-steps-01.png" },
      { label: "5. Map Visualization", filename: "lab-08-map-visualization-01.png" },
      { label: "6. Pie Chart Visual", filename: "lab-08-pie-chart-01.png" },
      { label: "7. Final Power BI Report", filename: "lab-08-power-bi-web-data-01.png" }
    ],
    skillsDemonstrated: ["Web Data Import", "Data Cleaning", "Power Query Transformation", "Geographic Visualization", "Pie Charts", "Report Formatting"],
    deliverable: "Power BI Web Data Analytics Report."
  },
  {
    id: "lab-09",
    number: "Lab 09",
    title: "Lab 09 — Data Studio Report",
    tool: "Looker Studio",
    category: "Cloud BI & Reporting",
    imagePlaceholder: "lab-09-data-studio-report-01.png",
    shortDescription: "Create an interactive report in Google Data Studio (Looker Studio) using scorecards, time series graphs, and interactive filters.",
    objective: "Create a report using Google Data Studio, now known as Looker Studio, to communicate information through interactive visualizations.",
    overview: "A cloud-native data reporting project connecting Google Sheets data sources to Looker Studio to deliver dynamic stakeholder reports.",
    tasksCompleted: [
      "Connecting data source to Looker Studio.",
      "Configuring dimensions, calculated fields, and metrics.",
      "Creating scorecards, bar charts, time-series graphs, and tables.",
      "Organizing elements into a clean multi-visual report.",
      "Applying interactive date range controls and category dropdown filters."
    ],
    workflow: "1. Create blank report in Looker Studio.\n2. Add data connector (Google Sheets / CSV).\n3. Add scorecards for top KPIs.\n4. Create time-series line chart for trends.\n5. Add interactive date range picker and category controls.\n6. Publish report.",
    placeholders: [
      { label: "Data Source Configuration", filename: "lab-09-data-source-config-01.png" },
      { label: "Individual Report Charts", filename: "lab-09-individual-charts-01.png" },
      { label: "Completed Looker Studio Report", filename: "lab-09-data-studio-report-01.png" }
    ],
    skillsDemonstrated: ["Report Building", "Data Visualization", "Layout Design", "Interactive Reporting"],
    deliverable: "Interactive Looker Studio Cloud Report."
  },
  {
    id: "lab-10",
    number: "Lab 10",
    title: "Lab 10 — Tableau Dashboard",
    tool: "Tableau",
    category: "Tableau Analytics",
    imagePlaceholder: "lab-10-tableau-dashboard-01.png",
    shortDescription: "Create a Tableau dashboard combining multiple worksheets into a coherent analytical view with interactive filter actions.",
    objective: "Create a dashboard in Tableau by combining relevant visualizations into a coherent analytical view.",
    overview: "A Tableau dashboard composition lab building individual analytical worksheets and combining them into an interactive dashboard canvas.",
    tasksCompleted: [
      "Connecting dataset to Tableau Desktop.",
      "Preparing fields, custom parameters, and calculated fields.",
      "Creating individual worksheets (charts, trends, comparisons).",
      "Combining worksheets on a unified dashboard canvas.",
      "Formatting titles, legends, tooltips, and color palettes.",
      "Adding dashboard filter actions for interactive cross-highlighting."
    ],
    workflow: "1. Load dataset into Tableau Desktop.\n2. Build Worksheet 1 (Sales Bar Chart), Worksheet 2 (Monthly Line Graph), Worksheet 3 (Segment Treemap).\n3. Create new Dashboard.\n4. Drag worksheets onto dashboard grid.\n5. Add Dashboard Filter Actions.",
    placeholders: [
      { label: "Data Source Connection", filename: "lab-10-data-source-01.png" },
      { label: "Worksheet Views", filename: "lab-10-worksheets-01.png" },
      { label: "Dashboard Composition Layout", filename: "lab-10-dashboard-layout-01.png" },
      { label: "Final Tableau Dashboard", filename: "lab-10-tableau-dashboard-01.png" }
    ],
    skillsDemonstrated: ["Worksheet Creation", "Dashboard Composition", "Data Analysis", "Visual Design"],
    deliverable: "Completed Tableau Dashboard Workbook."
  },
  {
    id: "lab-11",
    number: "Lab 11",
    title: "Lab 11 — Tableau Dashboard: Sample Superstore Dataset",
    tool: "Tableau & Superstore Dataset",
    category: "Geographic & Sales Analytics",
    imagePlaceholder: "lab-11-superstore-dashboard-01.png",
    shortDescription: "Analyze the Sample Superstore dataset using Tableau maps to reveal sales, profit, geographic, and order concentration patterns.",
    objective: "Analyze the Sample Superstore dataset using Tableau and create visualizations that reveal sales, profit, geographic, and order-related patterns.",
    overview: "A geographic analytics lab utilizing Tableau and Sample Superstore dataset to construct map visualizations and comparative sales dashboards.",
    tasksCompleted: [
      "Connecting Tableau to Sample Superstore dataset.",
      "Examining dimensions, measures, and geographic roles.",
      "Creating Filled Map for Total Sales by State.",
      "Creating Bubble Map for Profit Distribution by City.",
      "Creating Heat Map for Order Concentration density.",
      "Exploring optional Flow Map for delivery routes.",
      "Assembling worksheets into a unified sales dashboard."
    ],
    workflow: "1. Load Sample Superstore.csv.\n2. Double-click State -> Change mark to Filled Map -> Color by SUM(Sales).\n3. New sheet -> Double-click City -> Change mark to Circle -> Size by SUM(Profit).\n4. New sheet -> Heat Map for order concentration.\n5. Assemble into dashboard canvas.",
    placeholders: [
      { label: "1. Sample Superstore Data Source", filename: "lab-11-superstore-datasource-01.png" },
      { label: "2. Sales by State Filled Map", filename: "lab-11-filled-map-sales-01.png" },
      { label: "3. Profit by City Bubble Map", filename: "lab-11-bubble-map-profit-01.png" },
      { label: "4. Order Concentration Heat Map", filename: "lab-11-heat-map-orders-01.png" },
      { label: "5. Delivery Routes Flow Map (Optional)", filename: "lab-11-flow-map-routes-01.png" },
      { label: "6. Final Tableau Dashboard", filename: "lab-11-superstore-dashboard-01.png" }
    ],
    skillsDemonstrated: ["Geographic Analysis", "Sales Analysis", "Map Creation", "Heat Maps", "Dashboard Composition", "Business Insight Communication"],
    deliverable: "Superstore Sales Geographic Tableau Dashboard."
  },
  {
    id: "lab-12",
    number: "Lab 12",
    title: "Lab 12 — Geospatial Visualization",
    tool: "Geospatial Analytics Tools",
    category: "Geospatial Visualization",
    imagePlaceholder: "lab-12-geospatial-visualization-01.png",
    shortDescription: "Explore how geographic data can be represented visually to reveal spatial patterns, distributions, and territorial relationships.",
    objective: "Explore how geographic data can be represented visually to reveal spatial patterns, distributions, and relationships.",
    overview: "A specialized geospatial visualization lab exploring coordinate mapping, spatial hierarchy, geographic encoding, and spatial data limitations.",
    tasksCompleted: [
      "Introduction to geospatial data concepts.",
      "Understanding location fields, coordinates, and spatial boundaries.",
      "Preparing location information for spatial mapping.",
      "Selecting appropriate map projections and map types.",
      "Plotting geographic distributions and spatial clusters.",
      "Documenting spatial limitations such as unmapped location values."
    ],
    workflow: "1. Inspect dataset location fields (latitude, longitude, zip codes).\n2. Geocode missing location data.\n3. Choose spatial map projection.\n4. Render choropleth or symbol map visual.\n5. Analyze spatial density and patterns.",
    placeholders: [
      { label: "Source Geographic Data", filename: "lab-12-source-data-01.png" },
      { label: "Map Configuration", filename: "lab-12-map-config-01.png" },
      { label: "Geospatial Visualizations", filename: "lab-12-geospatial-viz-01.png" },
      { label: "Final Geospatial Result", filename: "lab-12-geospatial-visualization-01.png" }
    ],
    skillsDemonstrated: ["Geographic Data Handling", "Spatial Analysis", "Map Selection", "Visual Interpretation"],
    deliverable: "Geospatial Visualization Study."
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

// Render Section: 12 LAB ASSIGNMENTS GRID (3 cols Desktop, 2 Tablet, 1 Mobile)
function renderLabsSection(labs) {
  const labsGrid = document.getElementById("labs-grid");
  if (!labsGrid) return;
  labsGrid.innerHTML = "";

  labs.forEach((lab) => {
    const card = document.createElement("article");
    card.className = "lab-card";
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `View Details for ${lab.number}: ${lab.title}`);

    card.innerHTML = `
      <div class="lab-image-wrapper">
        <div class="styled-screenshot-placeholder">
          <i class="fa-solid fa-image placeholder-icon"></i>
          <span class="placeholder-label">Screenshot to be added</span>
          <span class="placeholder-target-filename">${lab.imagePlaceholder}</span>
        </div>
        <span class="lab-number-badge">${lab.number}</span>
        <span class="lab-tool-badge"><i class="fa-solid fa-code"></i> ${lab.tool}</span>
      </div>
      <div class="lab-card-body">
        <span class="lab-category">${lab.category}</span>
        <h3 class="lab-card-title">${lab.title}</h3>
        <p class="lab-card-description">${lab.shortDescription}</p>
        <div class="lab-card-footer">
          <span class="btn-view-lab">View Details <i class="fa-solid fa-arrow-right"></i></span>
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

  const sideDeliverable = document.getElementById("sidebar-lab-deliverable");
  if (sideDeliverable) sideDeliverable.textContent = currentLab.deliverable || "Completed Assignment Deliverable";

  // Render Placeholder Gallery
  const placeholderContainer = document.getElementById("lab-placeholders-gallery");
  if (placeholderContainer) {
    placeholderContainer.innerHTML = "";
    if (currentLab.placeholders && currentLab.placeholders.length > 0) {
      currentLab.placeholders.forEach((ph) => {
        const phBox = document.createElement("div");
        phBox.className = "styled-screenshot-placeholder detail-ph";
        phBox.innerHTML = `
          <i class="fa-solid fa-image placeholder-icon"></i>
          <span class="placeholder-label">${ph.label} (To be added)</span>
          <span class="placeholder-target-filename">${ph.filename}</span>
        `;
        placeholderContainer.appendChild(phBox);
      });
    } else {
      placeholderContainer.innerHTML = `
        <div class="styled-screenshot-placeholder detail-ph">
          <i class="fa-solid fa-image placeholder-icon"></i>
          <span class="placeholder-label">Screenshot to be added</span>
          <span class="placeholder-target-filename">${currentLab.imagePlaceholder}</span>
        </div>
      `;
    }
  }

  // Objective & Overview
  const labObj = document.getElementById("lab-objective");
  if (labObj) labObj.textContent = currentLab.objective;

  const labOverview = document.getElementById("lab-overview");
  if (labOverview) labOverview.textContent = currentLab.overview || currentLab.shortDescription;

  // Render Multi-Activity Subsections if Lab 02
  const activitiesBlock = document.getElementById("lab-activities-extras");
  if (activitiesBlock) {
    if (currentLab.isMultiActivity && currentLab.activities) {
      activitiesBlock.style.display = "block";
      const actList = document.getElementById("lab-activities-list");
      if (actList) {
        actList.innerHTML = currentLab.activities.map(act => `
          <div class="activity-subsection-card" style="margin-bottom: 1.25rem; padding: 1.25rem; background: var(--bg-main); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
            <h4 style="font-size: 1.1rem; font-weight: 800; color: var(--primary-accent); margin-bottom: 0.5rem;"><i class="fa-solid fa-pen-ruler"></i> ${act.name}</h4>
            <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6;">${act.desc}</p>
          </div>
        `).join("");
      }
    } else {
      activitiesBlock.style.display = "none";
    }
  }

  // Render Chart Categories if Lab 03
  const cheatSheetBlock = document.getElementById("lab-cheatsheet-extras");
  if (cheatSheetBlock) {
    if (currentLab.chartCategories) {
      cheatSheetBlock.style.display = "block";
      const catsElem = document.getElementById("cheatsheet-categories");
      if (catsElem) catsElem.innerHTML = currentLab.chartCategories.map(c => `<li class="viz-item"><i class="fa-solid fa-chart-simple"></i> <span>${c}</span></li>`).join("");
    } else {
      cheatSheetBlock.style.display = "none";
    }
  }

  // Render Tasks Completed
  const tasksBlock = document.getElementById("lab-tasks-block");
  const tasksList = document.getElementById("lab-tasks-list");
  if (tasksList && tasksBlock) {
    if (currentLab.tasksCompleted && currentLab.tasksCompleted.length > 0) {
      tasksBlock.style.display = "block";
      tasksList.innerHTML = currentLab.tasksCompleted.map(t => `<li class="viz-item"><i class="fa-solid fa-check-double"></i> <span>${t}</span></li>`).join("");
    } else {
      tasksBlock.style.display = "none";
    }
  }

  // Workflow / Methodology
  const labWorkflow = document.getElementById("lab-workflow");
  if (labWorkflow) labWorkflow.textContent = currentLab.workflow || "Standard analytical workflow executed.";

  // Skills Demonstrated
  const skillsBlock = document.getElementById("lab-skills-block");
  const skillsContainer = document.getElementById("lab-skills-demonstrated");
  if (skillsContainer && skillsBlock) {
    if (currentLab.skillsDemonstrated && currentLab.skillsDemonstrated.length > 0) {
      skillsBlock.style.display = "block";
      skillsContainer.innerHTML = currentLab.skillsDemonstrated.map(s => `<span class="project-tag" style="font-size: 0.85rem; padding: 0.4rem 0.8rem;">${s}</span>`).join(" ");
    } else {
      skillsBlock.style.display = "none";
    }
  }
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
