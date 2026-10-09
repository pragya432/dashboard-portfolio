/**
 * Dev Sanskriti Vishwavidyalaya — Department of Computer Science
 * Central JavaScript File for 12 Lab Assignments, 7 Visual Dashboards, and Detail Views
 */

// ==========================================================================
// 1. DATA STORE — 12 LAB ASSIGNMENTS REGISTRY (Lab 01 to Lab 12)
// ==========================================================================
const labsData = [
  {
    id: "lab-01",
    number: "Lab 01",
    title: "Lab 01 — Paper Leak Dashboard",
    subtitle: "Paper Leak Analysis Dashboard",
    tool: "Power BI",
    category: "Security & Education Analytics",
    image: "images/lab-01-paper-leak-1.png",
    images: [
      {
        src: "images/lab-01-paper-leak-1.png",
        caption: "Paper Leak Incident Trends, Conducting Body & Status Distribution Canvas"
      },
      {
        src: "images/lab-01-paper-leak-2.png",
        caption: "Action Taken, Aspirants Affected & Legal Enforcement Metrics Overview"
      }
    ],
    shortDescription: "Analyze examination paper leak-related data using an interactive Power BI dashboard tracking breach frequency, conducting bodies, and legal enforcement actions.",
    objective: "Analyze examination paper leak-related data and present the findings through an interactive dashboard.",
    overview: "This investigative security intelligence dashboard provides a detailed analytical audit of reported exam paper leak incidents across India. It tracks breach frequency across state and central conducting bodies, evaluates legal enforcement actions, and quantifies the impact on student candidates.",
    workPerformed: "1. Imported paper leak incident dataset into Power BI Desktop.\n2. Organized data fields including conducting bodies, breach eras (NDA vs UPA), leak status, and candidate metrics.\n3. Constructed interactive visual charts: temporal line trend of leaks, donut chart of confirmed vs. alleged cases, and horizontal bar charts of conducting bodies.\n4. Formatted visual canvas with slicers for state vs. central conducting bodies.",
    results: [
      "State conducting bodies account for 80% (88 incidents) of total reported paper leaks, while Central bodies represent 20% (22 incidents).",
      "Confirmed leak cases constitute 80.91% (89 cases) of all logged incidents, with 73.64% evaluated at high verification confidence.",
      "Paper leak frequency experienced a major surge between 2020 and 2022, directly impacting over 5 Million+ aspirants across competitive examinations."
    ],
    skillsDemonstrated: ["Data Analysis", "Dashboard Design", "Power BI Analytics", "Security Insight Communication"],
    deliverable: "Completed Paper Leak Analysis Power BI Dashboard File."
  },
  {
    id: "lab-02",
    number: "Lab 02",
    title: "Lab 02 — Visualize Your World",
    subtitle: "Draw Your Day & Energy Curve Visualizations",
    tool: "Hand-drawn Visual Diagrams",
    category: "Visual Storytelling & Data Journaling",
    image: "images/lab-02-your-day-1.png",
    images: [
      {
        src: "images/lab-02-your-day-1.png",
        caption: "Activity A: Draw Your Day — Daily Time Distribution Wheel Diagram"
      },
      {
        src: "images/lab-02-your-day-2.png",
        caption: "Activity A: Daily Routine & Activity Blocks Timeline Sketch"
      },
      {
        src: "images/lab-02-your-day-3.png",
        caption: "Activity A: Categorized Time Allocation Visual Chart"
      },
      {
        src: "images/lab-02-energy-curve.png",
        caption: "Activity B: Draw Your Energy Curve — Diurnal Energy Level Line Graph"
      }
    ],
    shortDescription: "Represent daily routines, energy curves, and real-world data visualization examples across three practical activities.",
    objective: "Explore personal data visualization through daily activity timelines, energy curves, and real-world visualization analysis.",
    overview: "A 3-part exploratory lab analyzing personal daily time distribution across routines, tracking hourly subjective energy levels (scale 1-10), and evaluating real-world visual applications.",
    isMultiActivity: true,
    activities: [
      {
        name: "Activity A: Draw Your Day",
        desc: "Represent daily activities through a visual timeline or diagram showing time distribution across daily routines (study, fitness, leisure, rest) to make habits easy to understand."
      },
      {
        name: "Activity B: Draw Your Energy Curve",
        desc: "Represent changes in personal energy levels throughout the day using a line graph or energy curve to identify peak productive periods."
      },
      {
        name: "Activity C: Real-World Data Visualization",
        desc: "Examine real-world data visualizations in news, business, and education, explaining visual design choices and audience communication impact."
      }
    ],
    workPerformed: "1. Logged 24-hour daily activities and categorized time spent across study, rest, fitness, and leisure.\n2. Sketched 'Draw Your Day' visual diagrams illustrating time distribution wheel and daily routine timeline.\n3. Tracked hourly energy levels throughout the day and plotted the 'Draw Your Energy Curve' line graph.\n4. Identified peak performance windows and low-energy recovery periods.",
    results: [
      "Visualizing daily activities highlighted time allocation patterns and helped identify non-essential time sinks.",
      "The Energy Curve demonstrated peak cognitive performance during mid-morning hours (9 AM - 12 PM) followed by a secondary focus recovery around 5 PM."
    ],
    skillsDemonstrated: ["Visual Thinking", "Basic Chart Interpretation", "Personal Data Journaling", "Storytelling"],
    deliverable: "Visualized personal journal & real-world visualization review."
  },
  {
    id: "lab-03",
    number: "Lab 03",
    title: "Lab 03 — Visualize It! — Create & Share Your Data Visualization Cheat Sheet",
    subtitle: "Types of Data Visualization: Charts, Graphs & Maps — LinkedIn Post",
    tool: "Visual Cheat Sheet & LinkedIn",
    category: "Professional Publishing & Reference",
    image: "images/lab-03-cheatsheet-linkedin.png",
    images: [
      {
        src: "images/lab-03-cheatsheet-linkedin.png",
        caption: "Types of Data Visualization: Charts, Graphs & Maps — Published LinkedIn Post & Visual Cheat Sheet Guide"
      }
    ],
    shortDescription: "Create and share a comprehensive visual cheat sheet classifying chart types (Bar, Line, Pie, Scatter, Maps, Gauges) and post it on LinkedIn to guide effective chart selection.",
    objective: "Understand different types of data visualization (charts, graphs, maps) and communicate their appropriate use cases through a public LinkedIn post and visual guide.",
    overview: "A public-facing technical communication deliverable classifying chart types by analytical goal (Comparison, Distribution, Composition, Relationship, Spatial) to aid decision-making in business intelligence reporting.",
    chartCategories: [
      "Bar & Column Charts: Category comparisons and discrete groupings.",
      "Line & Area Charts: Trends, continuous time-series, and trajectories over time.",
      "Pie & Donut Charts: Simple part-to-whole compositional proportions.",
      "Scatter Plots & Bubble Charts: Relationships and correlations between numerical variables.",
      "Maps & Spatial Visuals: Geographic distributions and regional comparisons.",
      "Gauges & Scorecards: Single-value KPIs and performance targets."
    ],
    workPerformed: "1. Researched visual encoding taxonomy (bar, line, scatter, histogram, map, bullet gauge).\n2. Categorized charts by analytical objective: Comparison (Bar/Column), Trend (Line/Area), Proportion (Pie/Donut), Correlation (Scatter), and Location (Choropleth Maps).\n3. Drafted accessibility rules focusing on contrast, clean typography, and chart clutter reduction.\n4. Published a professional LinkedIn post sharing the cheat sheet guide with the tech community.",
    results: [
      "Visual cheat sheets significantly improve chart selection accuracy for complex business analytics reports.",
      "Choosing the appropriate chart type reduces cognitive load for business stakeholders and executive readers."
    ],
    skillsDemonstrated: ["Chart Selection", "Visual Communication", "Content Creation", "Professional Presentation"],
    deliverable: "Published LinkedIn Cheat Sheet Guide Post."
  },
  {
    id: "lab-04",
    number: "Lab 04",
    title: "Lab 04 — From Learning to LinkedIn",
    subtitle: "Data Visualization: Turning Data into Meaningful Stories — LinkedIn Blog",
    tool: "LinkedIn Publishing & Blog Strategy",
    category: "Data Storytelling & Content Strategy",
    image: "images/lab-04-linkedin-blog.png",
    images: [
      {
        src: "images/lab-04-linkedin-blog.png",
        caption: "Data Visualization: Turning Data into Meaningful Stories — Published LinkedIn Blog Article"
      }
    ],
    shortDescription: "Publish an in-depth article on LinkedIn detailing how data visualization converts complex raw datasets into meaningful stories and executive insights.",
    objective: "Explore how data visualization turns raw data into meaningful business insights and narrative stories through a structured LinkedIn blog post.",
    overview: "A published technical article examining the triadic relationship between Data, Visuals, and Narrative, explaining how contextual framing drives actionable business outcomes.",
    workPerformed: "1. Analyzed raw transactional datasets to extract 3 core business insights.\n2. Designed clean visualization mockups supporting the central analytical narrative.\n3. Authored a structured LinkedIn article titled 'Data Visualization: Turning Data into Meaningful Stories'.\n4. Highlighted key strategies for visual hierarchy, audience context, and actionable recommendations.",
    results: [
      "Effective data storytelling bridges the gap between raw data analysis and strategic decision-making.",
      "Combining clear visual charts with concise context narrative increases reader comprehension and engagement."
    ],
    skillsDemonstrated: ["Data Storytelling", "Analytical Thinking", "Technical Writing", "Insight Communication"],
    deliverable: "Published LinkedIn Blog Article on Data Storytelling."
  },
  {
    id: "lab-05",
    number: "Lab 05",
    title: "Lab 05 — Learning Activity: Tableau Practical Notes",
    subtitle: "Tableau Notes & Core Data Concepts",
    tool: "Tableau Desktop",
    category: "Tableau Fundamentals",
    image: "images/lab-05-tableau-notes.png",
    images: [
      {
        src: "images/lab-05-tableau-notes.png",
        caption: "Tableau Practical Notes & Data Concepts Technical Documentation"
      }
    ],
    shortDescription: "Document foundational Tableau Desktop concepts including flat file connections, dimensions vs. measures, discrete vs. continuous fields, and worksheet building.",
    objective: "Document foundational Tableau concepts, data connections, field classifications, and practical learning steps for reference.",
    overview: "A structured technical notebook documenting core Tableau functionality, workspace navigation, Marks card formatting, field aggregations, and worksheet setup.",
    workPerformed: "1. Connected Tableau Desktop to sample datasets (Excel, CSV).\n2. Categorized dataset fields into Dimensions (categorical) and Measures (numerical).\n3. Differentiated between Discrete (blue) and Continuous (green) field behaviors.\n4. Documented worksheet creation, sorting, filtering, and custom tooltip formatting.\n5. Summarized best practices for assembling worksheets into cohesive dashboards.",
    results: [
      "Understanding field roles (Dimensions vs. Measures) is essential for accurate aggregation and chart building in Tableau.",
      "Utilizing calculated fields and parameters expands Tableau's analytical flexibility."
    ],
    skillsDemonstrated: ["Tableau Fundamentals", "Data Preparation", "Chart Creation", "Technical Documentation"],
    deliverable: "Organized Tableau Notes Reference Document."
  },
  {
    id: "lab-06",
    number: "Lab 06",
    title: "Lab 06 — Lab Practical: Understanding Audience and Context",
    subtitle: "Understanding Audience and Context",
    tool: "Design Theory & Context UX",
    category: "Visual Design & Contextual Analytics",
    image: "images/lab-06-audience-context.png",
    images: [
      {
        src: "images/lab-06-audience-context.png",
        caption: "Understanding Audience and Context — Visual Design Principles Study"
      }
    ],
    shortDescription: "Analyze how target audience requirements, data literacy levels, and viewing context dictate visualization layout, chart selection, and detail levels.",
    objective: "Understand how audience requirements, viewing environment, and decision context influence data visualization choices.",
    overview: "An audience-centric design evaluation examining visual clarity, contextual framing, cognitive load management, and visual ethics in business intelligence.",
    workPerformed: "1. Developed audience persona profiles (executives, operational managers, domain analysts).\n2. Mapped visual requirements based on viewing context (mobile phone, desktop dashboard, presentation slide).\n3. Evaluated cognitive load factors, removing chart clutter and unnecessary gridlines.\n4. Designed clear titles, subtitle callouts, and explanatory annotations tailored to user literacy.",
    results: [
      "Tailoring visualization complexity to user data literacy ensures faster insight adoption.",
      "Executive dashboards require high-level KPI cards, whereas operational views require detailed data tables and granular filters."
    ],
    skillsDemonstrated: ["Audience Analysis", "Contextual Design", "Visual Communication", "Responsible Data Presentation"],
    deliverable: "Audience & Context Visualization Study Report."
  },
  {
    id: "lab-07",
    number: "Lab 07",
    title: "Lab 07 — Hands On Lab Practical - Excel Charts & Dashboard",
    subtitle: "Excel Charts & Interactive Business Dashboard",
    tool: "Microsoft Excel",
    category: "Spreadsheet Analytics & Dashboarding",
    image: "images/lab-07-excel-charts.png",
    images: [
      {
        src: "images/lab-07-excel-charts.png",
        caption: "Excel Charts & Interactive Business Dashboard Canvas"
      }
    ],
    shortDescription: "Organize raw business data in Microsoft Excel, build summary PivotTables and PivotCharts, and construct an interactive dashboard with dynamic slicers.",
    objective: "Use Microsoft Excel to clean data, build summary PivotTables, generate PivotCharts, and assemble an interactive business dashboard.",
    overview: "A practical spreadsheet analytics project converting raw sales transaction tables into an interactive Excel dashboard with linked slicers.",
    workPerformed: "1. Formatted raw transactional dataset into an official Excel Table.\n2. Built PivotTables summarizing sales by category, region, and monthly order dates.\n3. Generated corresponding PivotCharts (Bar, Line, Donut charts).\n4. Created interactive Slicers (Category, Region, Year) linked across all PivotCharts.\n5. Styled dashboard layout with aligned cards and custom color themes.",
    results: [
      "Excel PivotTables and linked slicers provide rapid, low-code interactive reporting for small-to-medium datasets.",
      "Combining PivotCharts on a single dashboard canvas streamlines multi-variable sales monitoring."
    ],
    skillsDemonstrated: ["Spreadsheet Analysis", "Chart Creation", "Data Organization", "Dashboard Design"],
    deliverable: "Interactive Excel Dashboard File."
  },
  {
    id: "lab-08",
    number: "Lab 08",
    title: "Lab 08 — Submit Your Data Studio Report: Power BI Web Data ETL",
    subtitle: "Import, Clean, Transform and Visualize Web Data using Power BI",
    tool: "Power BI & Power Query",
    category: "Web ETL & Power BI Reporting",
    image: "images/lab-08-powerbi-web-data.png",
    images: [
      {
        src: "images/lab-08-powerbi-web-data.png",
        caption: "Import, Clean, Transform and Visualize Web Data using Power BI Report Canvas"
      }
    ],
    shortDescription: "Import web data into Power BI Desktop, execute data cleaning and ETL transformations in Power Query Editor, and build geographic map and pie chart visuals.",
    objective: "Connect Power BI Desktop to a web data source, import data, clean and transform it in Power Query, and create interactive visualizations.",
    overview: "An end-to-end web ETL workflow connecting Power BI Desktop to web data URLs, cleaning nulls and headers in Power Query, and creating geographic map and category visuals.",
    workPerformed: "1. Connected Power BI Desktop to web data URL via Get Data -> Web.\n2. Selected target HTML data table in Navigator and launched Power Query Editor.\n3. Promoted headers, removed null rows, split columns, and set explicit data types.\n4. Loaded clean data model into Power BI Desktop canvas.\n5. Built a geographic Map visual for location fields and a Pie Chart for category breakdowns.",
    results: [
      "Power Query Editor simplifies web data extraction and structural cleaning without manual copy-pasting.",
      "Geographic map visuals in Power BI effectively highlight spatial distributions from transformed web data."
    ],
    skillsDemonstrated: ["Web Data Import", "Data Cleaning", "Power Query Transformation", "Geographic Visualization", "Pie Charts"],
    deliverable: "Power BI Web Data Analytics Report."
  },
  {
    id: "lab-09",
    number: "Lab 09",
    title: "Lab 09 — Lab Work: Data Studio Report",
    subtitle: "Data Studio Report & Cloud BI Analytics",
    tool: "Google Looker Studio",
    category: "Cloud BI & Reporting",
    image: "images/lab-09-data-studio-report.png",
    images: [
      {
        src: "images/lab-09-data-studio-report.png",
        caption: "Data Studio Report & Tableau Dashboard Analytics View"
      }
    ],
    shortDescription: "Build an interactive Data Studio (Looker Studio) report and Tableau dashboard featuring scorecards, category bar charts, and date range filters.",
    objective: "Create a report using Google Data Studio (Looker Studio) and Tableau to communicate information through interactive dashboard visuals.",
    overview: "A cloud business intelligence assignment connecting structured data sources to Google Looker Studio and Tableau to generate stakeholder scorecards and trend graphs.",
    workPerformed: "1. Connected Looker Studio / Tableau to Google Sheets dataset.\n2. Created KPI Scorecards for total revenue, profit margin, and order volume.\n3. Built vertical bar charts for category performance and time-series line graphs for sales trends.\n4. Added interactive Date Range pickers and Category dropdown slicers.\n5. Formatted layout canvas for clean multi-device viewing.",
    results: [
      "Cloud BI platforms like Looker Studio enable instant shareability and real-time data sync.",
      "Interactive date range pickers allow stakeholders to analyze historical trends dynamically."
    ],
    skillsDemonstrated: ["Report Building", "Data Visualization", "Layout Design", "Interactive Cloud Reporting"],
    deliverable: "Interactive Looker Studio & Tableau Dashboard."
  },
  {
    id: "lab-10",
    number: "Lab 10",
    title: "Lab 10 — Hands-On Practical: Tableau Dashboard",
    subtitle: "Tableau Worksheet & Dashboard Composition",
    tool: "Tableau Desktop",
    category: "Tableau Analytics",
    image: "images/lab-10-tableau-dashboard-1.png",
    images: [
      {
        src: "images/lab-10-tableau-dashboard-1.png",
        caption: "Tableau Dashboard Executive Overview Canvas"
      },
      {
        src: "images/lab-10-tableau-dashboard-3.png",
        caption: "Tableau Multi-Worksheet Dashboard Composition View"
      }
    ],
    shortDescription: "Create a Tableau dashboard combining multiple worksheets into a coherent analytical view with interactive filter actions.",
    objective: "Create a dashboard in Tableau by combining relevant visualizations into a coherent analytical view.",
    overview: "A Tableau dashboard composition lab building individual analytical worksheets and combining them into an interactive dashboard canvas.",
    workPerformed: "1. Connecting dataset to Tableau Desktop.\n2. Preparing fields, custom parameters, and calculated fields.\n3. Creating individual worksheets (charts, trends, comparisons).\n4. Combining worksheets on a unified dashboard canvas.\n5. Adding dashboard filter actions for interactive cross-highlighting.",
    results: [
      "Combining worksheets into a single dashboard canvas streamlines comparative visual analytics.",
      "Filter actions enable dynamic cross-highlighting across multiple chart views."
    ],
    skillsDemonstrated: ["Worksheet Creation", "Dashboard Composition", "Data Analysis", "Visual Design"],
    deliverable: "Completed Tableau Dashboard Workbook."
  },
  {
    id: "lab-11",
    number: "Lab 11",
    title: "Lab 11 — Hands-On Practical: Geographic Maps in Tableau",
    subtitle: "Tableau Dashboard: Sample Superstore Dataset",
    tool: "Tableau & Sample Superstore Dataset",
    category: "Geographic & Sales Analytics",
    image: "images/lab-10-tableau-dashboard-2.png",
    images: [
      {
        src: "images/lab-10-tableau-dashboard-2.png",
        caption: "Sample Superstore Dataset Sales & Profit Worksheets"
      },
      {
        src: "images/lab-10-tableau-dashboard-4.png",
        caption: "Sample Superstore Regional & Segment Performance Dashboard"
      }
    ],
    shortDescription: "Analyze the Sample Superstore dataset using Tableau maps to reveal sales, profit, geographic, and order concentration patterns.",
    objective: "Analyze the Sample Superstore dataset using Tableau and create visualizations that reveal sales, profit, geographic, and order-related patterns.",
    overview: "A geographic analytics lab utilizing Tableau and Sample Superstore dataset to construct Filled Maps, Scatter Plots, Segment Treemaps, and comparative sales dashboards.",
    workPerformed: "1. Loaded Sample Superstore dataset into Tableau Desktop.\n2. Built State-level Filled Map (colored by SUM(Sales)) and City Bubble Map (sized by SUM(Profit)).\n3. Created category profit bar charts and multi-year time-series trend line graphs.\n4. Assembled worksheets into a unified Tableau dashboard canvas.\n5. Configured interactive Dashboard Filter Actions for seamless cross-filtering.",
    results: [
      "Filled state maps in Tableau quickly highlight geographic high-revenue clusters and underperforming regional markets.",
      "Interactive dashboard filter actions enable deep exploratory analysis without switching worksheets."
    ],
    skillsDemonstrated: ["Geographic Analysis", "Sales Analysis", "State Filled Maps", "Tableau Dashboard Composition"],
    deliverable: "Superstore Sales Geographic Tableau Dashboard."
  },
  {
    id: "lab-12",
    number: "Lab 12",
    title: "Lab 12 — Hands-On Lab Practical: Geospatial Visualization",
    subtitle: "Geospatial & Advanced Data Visualization",
    tool: "Geospatial Analytics Tools & Tableau",
    category: "Geospatial Visualization",
    image: "images/lab-10-geospatial-viz.png",
    images: [
      {
        src: "images/lab-10-geospatial-viz.png",
        caption: "Geospatial Visualization & State Filled Map Analysis"
      }
    ],
    shortDescription: "Explore how geographic data can be represented visually to reveal spatial patterns, distributions, and territorial relationships.",
    objective: "Explore how geographic data can be represented visually to reveal spatial patterns, distributions, and relationships.",
    overview: "A specialized geospatial visualization lab exploring coordinate mapping, spatial hierarchy, geographic encoding, and spatial data limitations.",
    workPerformed: "1. Inspect dataset location fields (latitude, longitude, zip codes).\n2. Geocode missing location data.\n3. Choose spatial map projection.\n4. Render choropleth or symbol map visual.\n5. Analyze spatial density and patterns.",
    results: [
      "Geospatial visualization reveals geographical clustering and regional variances that standard tabular data conceals.",
      "Choropleth maps communicate regional metrics effectively across state boundaries."
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
    dataset: "Regional commercial sales performance database tracking territory sales, profit metrics, product category distributions, and regional performance rankings.",
    kpis: [
      { label: "Tool Used", value: "Tableau", sub: "Enterprise Visual Analytics" },
      { label: "Category", value: "Regional Analytics", sub: "Management Intelligence" },
      { label: "Analysis Focus", value: "Sales & Profit", sub: "Regional Trends & Rankings" }
    ],
    keyVisualizations: [
      "Regional Sales & Profit Comparison (Grouped Bar Chart): Comparative territory performance evaluating total revenue and net profit.",
      "Regional Performance Leaderboard (Horizontal Bar Chart): Itemized territory rankings highlighting top-performing regions.",
      "Category Sales Breakdown by Region (Stacked Column Chart): Segment revenue distribution across Central, East, South, and West regions."
    ],
    keyInsights: [
      "Provides regional leadership with clear visibility into high-performing vs underperforming sales territories.",
      "Highlights category revenue variations across regions to guide targeted sales strategy and resource allocation."
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
    shortDescription: "Help sales management monitor sales performance, categories, segments, trends, and top products.",
    objective: "Help sales management monitor sales performance, categories, segments, trends, and top products.",
    overview: "This sales management dashboard built in Tableau gives commercial sales leaders complete visibility into overall sales performance, category revenue shares, customer market segments, multi-year trends, and top product items.",
    audience: "Sales Directors, Operations Leads, and Product Managers.",
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
    shortDescription: "Help finance management analyze sales, profitability, discounts, and relationships between financial measures.",
    objective: "Help finance management analyze sales, profitability, discounts, and relationships between financial measures.",
    overview: "This finance management dashboard built in Tableau empowers financial executives to analyze sales volumes, net profitability, discount rates, and complex relationships between financial metrics.",
    audience: "CFOs, Financial Controllers, and Corporate Analysts.",
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
// 3. MAIN INITIALIZATION & ROUTER
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
// 4. NAVIGATION & MOBILE MENU HANDLER
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
// 5. MAIN HOMEPAGE RENDERER (`index.html`)
// ==========================================================================
function initMainPage() {
  renderLabsSection(labsData);
  renderDashboardsGallerySection(dashboardsData);
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
        <img src="${lab.image}" alt="${lab.title} Screenshot Preview" class="lab-image" loading="lazy">
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

// ==========================================================================
// 6. REUSABLE DETAIL PAGE HANDLER (`lab.html`)
// ==========================================================================
function initLabDetailPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const labId = urlParams.get("id") || "lab-01";

  const currentLab = labsData.find((l) => l.id === labId) || labsData[0];

  // Update Header Meta & Badges
  const numTag = document.getElementById("lab-number-tag");
  if (numTag) numTag.textContent = currentLab.number;

  const toolTag = document.getElementById("lab-tool-tag");
  if (toolTag) toolTag.innerHTML = `<i class="fa-solid fa-screwdriver-wrench"></i> ${currentLab.tool}`;

  const catTag = document.getElementById("lab-category-tag");
  if (catTag) catTag.textContent = currentLab.category;

  const titleElem = document.getElementById("lab-title");
  if (titleElem) {
    titleElem.textContent = currentLab.title;
    if (currentLab.subtitle) {
      const subSpan = document.createElement("div");
      subSpan.style.fontSize = "1.2rem";
      subSpan.style.color = "var(--text-secondary)";
      subSpan.style.marginTop = "0.35rem";
      subSpan.textContent = currentLab.subtitle;
      titleElem.appendChild(subSpan);
    }
  }

  // Update Sidebar Specs
  const sideNum = document.getElementById("sidebar-lab-num");
  if (sideNum) sideNum.textContent = currentLab.number;

  const sideTool = document.getElementById("sidebar-lab-tool");
  if (sideTool) sideTool.textContent = currentLab.tool;

  const sideDeliverable = document.getElementById("sidebar-lab-deliverable");
  if (sideDeliverable) sideDeliverable.textContent = currentLab.deliverable || "Completed Assignment Deliverable";

  // Render Real Images Gallery
  const galleryContainer = document.getElementById("lab-placeholders-gallery");
  if (galleryContainer) {
    galleryContainer.innerHTML = "";
    if (currentLab.images && currentLab.images.length > 0) {
      currentLab.images.forEach((imgObj) => {
        const item = document.createElement("div");
        item.className = "screenshot-item";
        item.title = "Click to view full screen";
        item.innerHTML = `
          <img src="${imgObj.src}" alt="${imgObj.caption || currentLab.title}" loading="lazy" />
          <div class="screenshot-caption">${imgObj.caption || currentLab.title}</div>
        `;
        item.addEventListener("click", () => {
          openLightbox(imgObj.src, imgObj.caption || currentLab.title);
        });
        galleryContainer.appendChild(item);
      });
    }
  }

  // Objective & Overview
  const labObj = document.getElementById("lab-objective");
  if (labObj) labObj.textContent = currentLab.objective;

  const labOverview = document.getElementById("lab-overview");
  if (labOverview) labOverview.textContent = currentLab.overview || currentLab.shortDescription;

  // Multi-Activity Subsections (Lab 2)
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

  // Chart Categories (Lab 3)
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

  // Work Performed / Procedure
  const labWorkflow = document.getElementById("lab-workflow");
  if (labWorkflow) labWorkflow.textContent = currentLab.workPerformed || "Standard analytical workflow executed.";

  // Results / Findings
  const tasksBlock = document.getElementById("lab-tasks-block");
  const tasksList = document.getElementById("lab-tasks-list");
  if (tasksList && tasksBlock) {
    if (currentLab.results && currentLab.results.length > 0) {
      tasksBlock.style.display = "block";
      tasksList.innerHTML = currentLab.results.map(t => `<li class="viz-item"><i class="fa-solid fa-check-double"></i> <span>${t}</span></li>`).join("");
    } else {
      tasksBlock.style.display = "none";
    }
  }

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
// 7. DASHBOARD DETAIL PAGE HANDLER (`dashboard.html`)
// ==========================================================================
function initDashboardDetailPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const dashId = urlParams.get("id") || "paper-leak";

  const currentDash = dashboardsData.find((d) => d.id === dashId) || dashboardsData[0];

  const numTag = document.getElementById("dash-number-tag");
  if (numTag) numTag.textContent = currentDash.number;

  const toolTag = document.getElementById("dash-tool-tag");
  if (toolTag) {
    toolTag.className = `detail-tool-tag ${currentDash.toolClass}`;
    toolTag.innerHTML = `<i class="fa-solid fa-layer-group"></i> ${currentDash.tool}`;
  }

  const catTag = document.getElementById("dash-category-tag");
  if (catTag) catTag.textContent = currentDash.category;

  const titleElem = document.getElementById("dash-title");
  if (titleElem) titleElem.textContent = currentDash.title;

  const sideNum = document.getElementById("sidebar-dash-num");
  if (sideNum) sideNum.textContent = currentDash.number;

  const sideTool = document.getElementById("sidebar-dash-tool");
  if (sideTool) sideTool.textContent = currentDash.tool;

  const sideCat = document.getElementById("sidebar-dash-category");
  if (sideCat) sideCat.textContent = currentDash.category;

  // Single or Multi Screenshot Image View
  const dashImg = document.getElementById("dash-img");
  if (dashImg && currentDash.images && currentDash.images.length > 0) {
    dashImg.src = currentDash.images[0].src;
    dashImg.alt = `${currentDash.title} Full View`;
  }

  const dashCaption = document.getElementById("dash-img-caption");
  if (dashCaption && currentDash.images && currentDash.images.length > 0) {
    dashCaption.textContent = currentDash.images[0].caption;
  }

  const viewport = document.getElementById("dashboard-screenshot-viewport");
  if (viewport && currentDash.images && currentDash.images.length > 0) {
    viewport.addEventListener("click", () => {
      openLightbox(currentDash.images[0].src, currentDash.images[0].caption);
    });
  }

  const dashObj = document.getElementById("dash-objective");
  if (dashObj) dashObj.textContent = currentDash.objective;

  const dashOverview = document.getElementById("dash-overview");
  if (dashOverview) dashOverview.textContent = currentDash.overview;

  const dashAudience = document.getElementById("dash-audience");
  if (dashAudience) dashAudience.textContent = currentDash.audience || "Business leadership and operational teams.";

  const dashDataset = document.getElementById("dash-dataset");
  if (dashDataset) dashDataset.textContent = currentDash.dataset || "Enterprise business transaction dataset.";

  const dashFilters = document.getElementById("dash-filters");
  if (dashFilters) dashFilters.textContent = currentDash.filtersSlicers || "Interactive slicers and date controls.";

  // Render KPI Metrics Cards
  const kpiGrid = document.getElementById("dash-kpis-grid");
  if (kpiGrid && currentDash.kpis) {
    kpiGrid.innerHTML = currentDash.kpis.map(kpi => `
      <div class="kpi-metric-card">
        <span class="kpi-metric-label">${kpi.label}</span>
        <span class="kpi-metric-value">${kpi.value}</span>
        <span class="kpi-metric-sub">${kpi.sub}</span>
      </div>
    `).join("");
  }

  // Render Visualizations List
  const vizList = document.getElementById("dash-visualizations-list");
  if (vizList && currentDash.keyVisualizations) {
    vizList.innerHTML = currentDash.keyVisualizations.map(viz => `
      <li class="viz-item">
        <i class="fa-solid fa-chart-simple"></i>
        <span>${viz}</span>
      </li>
    `).join("");
  }

  // Render Key Insights List
  const insightsList = document.getElementById("dash-insights-list");
  if (insightsList && currentDash.keyInsights) {
    insightsList.innerHTML = currentDash.keyInsights.map(insight => `
      <div class="insight-card">
        <i class="fa-solid fa-lightbulb insight-icon"></i>
        <div class="insight-text">${insight}</div>
      </div>
    `).join("");
  }
}

// ==========================================================================
// 8. LIGHTBOX MODAL HANDLER
// ==========================================================================
function setupLightbox() {
  const modal = document.getElementById("lightbox-modal");
  const closeBtn = document.getElementById("lightbox-close");

  if (!modal) return;

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("active");
    });
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      modal.classList.remove("active");
    }
  });
}

function openLightbox(src, captionText) {
  const modal = document.getElementById("lightbox-modal");
  const modalImg = document.getElementById("lightbox-img");
  const modalTitle = document.getElementById("lightbox-title");

  if (modal && modalImg) {
    modalImg.src = src;
    if (modalTitle) modalTitle.textContent = captionText || "Screenshot Preview";
    modal.classList.add("active");
  }
}
