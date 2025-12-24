 export interface Project {
  slug: string
  title: string
  description: string
  problem: string
  solution: string
  category: string
  tags: string[]
  links?: {
    demo?: string
    github?: string
  }
  results?: string[]
}

export const projectsData: Project[] = [
  {
    slug: "powerbi-sales-dashboard",
    title: "Power BI Sales Dashboard",
    description: "Interactive sales analytics dashboard with real-time data visualization and KPI tracking",
    problem:
      "iQuanta Edu Services needed a centralized way to track sales performance, student enrollment trends, and revenue metrics across multiple courses and regions. Manual reporting was time-consuming and lacked real-time insights.",
    solution:
      "Developed a comprehensive Power BI dashboard with interactive filters, drill-down capabilities, and automated data refresh. Integrated multiple data sources including SQL databases and Excel files to provide a unified view of business metrics.",
    category: "Data Analytics",
    tags: ["Power BI", "DAX", "SQL", "Data Visualization"],
    links: {
      demo: "https://example.com",
    },
    results: [
      "Reduced reporting time by 60% through automated data pipelines and real-time updates",
      "Implemented complex DAX measures for advanced calculations and time intelligence",
      "Created intuitive visualizations that helped stakeholders make data-driven decisions faster",
      "Enabled drill-through functionality for detailed analysis at multiple levels",
    ],
  },
  {
    slug: "student-performance-analyzer",
    title: "Student Performance Analyzer",
    description: "Python-based analytics tool for tracking and predicting student performance metrics",
    problem:
      "Educators needed a way to identify at-risk students early and provide targeted interventions. Existing systems couldn't predict outcomes or provide actionable insights from historical performance data.",
    solution:
      "Built a comprehensive Python application using Pandas for data processing, Scikit-learn for predictive modeling, and Matplotlib for visualization. The tool analyzes patterns across 5000+ students to identify risk factors and recommend interventions.",
    category: "Data Analytics",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
    links: {
      github: "https://github.com",
    },
    results: [
      "Achieved 85% accuracy in predicting students at risk of underperforming",
      "Processed and cleaned data from multiple sources, handling missing values and outliers effectively",
      "Created automated weekly reports with visualizations for educators",
      "Identified key performance indicators that correlated with student success",
    ],
  },
  {
    slug: "modern-task-manager",
    title: "Modern Task Manager",
    description: "Beautiful, responsive task management app built with React and TypeScript",
    problem:
      "Users needed a task management solution that was both powerful and enjoyable to use. Existing tools were either too complex or lacked the features needed for effective project management.",
    solution:
      "Created a feature-rich task management application with drag-and-drop functionality, real-time updates, and a modern glassmorphism design. Used React hooks for state management, TypeScript for type safety, and Framer Motion for smooth animations.",
    category: "Frontend Development",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    links: {
      demo: "https://example.com",
      github: "https://github.com",
    },
    results: [
      "Achieved 95+ Lighthouse performance score through code splitting and lazy loading",
      "Built a reusable component library with full TypeScript support",
      "Implemented local storage with data persistence and sync capabilities",
      "Created smooth, engaging animations that enhance user experience without impacting performance",
    ],
  },
  {
    slug: "data-visualization-library",
    title: "Data Visualization Library",
    description: "Custom React component library for creating interactive charts and graphs",
    problem:
      "Development teams needed a flexible, performant chart library that could handle large datasets while providing extensive customization options. Existing solutions were either too rigid or had performance issues.",
    solution:
      "Developed a comprehensive React component library combining D3.js for data processing with React for rendering. Created 15+ chart types with responsive designs, virtualization for large datasets, and extensive documentation using Storybook.",
    category: "Frontend Development",
    tags: ["React", "D3.js", "TypeScript", "Storybook"],
    links: {
      github: "https://github.com",
    },
    results: [
      "Created highly customizable components supporting 50+ configuration options",
      "Implemented virtualization to handle datasets with 100,000+ data points smoothly",
      "Built comprehensive Storybook documentation with interactive examples",
      "Achieved tree-shaking support to minimize bundle size for consumers",
    ],
  },
  {
    slug: "ecommerce-analytics-platform",
    title: "E-commerce Analytics Platform",
    description: "Full-stack analytics platform for tracking e-commerce metrics and customer behavior",
    problem:
      "E-commerce businesses needed real-time insights into customer behavior, revenue trends, and product performance. Existing analytics tools didn't provide the customization or integration capabilities required.",
    solution:
      "Built a complete analytics platform with Next.js for the frontend, PostgreSQL for data storage, and custom algorithms for customer segmentation. Implemented real-time tracking using WebSockets and created RESTful APIs for third-party integrations.",
    category: "Full Stack",
    tags: ["Next.js", "PostgreSQL", "Prisma", "Chart.js", "TypeScript"],
    links: {
      demo: "https://example.com",
    },
    results: [
      "Processed millions of events per day with optimized database queries and indexing",
      "Implemented real-time dashboards updating within 100ms of user actions",
      "Created machine learning models for customer segmentation with 80% accuracy",
      "Built scalable API infrastructure handling 10,000+ requests per minute",
    ],
  },
  {
    slug: "educational-insights-dashboard",
    title: "Educational Insights Dashboard",
    description: "Interactive dashboard for visualizing educational data and learning outcomes",
    problem:
      "Educational institutions needed to track student progress across multiple courses and identify areas for curriculum improvement. Data was siloed in different systems, making comprehensive analysis difficult.",
    solution:
      "Designed an integrated dashboard pulling data from multiple sources through automated ETL pipelines. Used Power BI for visualization with role-based access control for data security. Created drill-down capabilities for detailed analysis at various levels.",
    category: "Data Analytics",
    tags: ["Power BI", "Python", "SQL Server", "Excel"],
    links: {
      demo: "https://example.com",
    },
    results: [
      "Consolidated data from 10,000+ students across 50+ courses into a single platform",
      "Reduced manual analysis time by 50% through automated reporting",
      "Implemented predictive analytics to identify struggling students early",
      "Created intuitive visualizations that enabled data-driven curriculum decisions",
    ],
  },
]
