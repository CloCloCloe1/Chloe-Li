export type Locale = "en" | "zh";

type NavKey = "home" | "about" | "experience" | "projects" | "education" | "contact";

type PortfolioContent = {
  displayName: string;
  nav: Record<NavKey, string>;
  hero: {
    eyebrow: string;
    title: string;
    summary: string;
    primaryCta: string;
    secondaryCta: string;
  };
  metrics: { value: string; label: string }[];
  about: {
    eyebrow: string;
    title: string;
    body: string;
    focus: string[];
  };
  experience: {
    eyebrow: string;
    title: string;
    items: {
      company: string;
      location: string;
      title: string;
      period: string;
      bullets: string[];
    }[];
  };
  projects: {
    eyebrow: string;
    title: string;
    items: {
      title: string;
      tag: string;
      description: string;
    }[];
  };
  education: {
    eyebrow: string;
    title: string;
    items: {
      degree: string;
      school: string;
      period: string;
      details: string[];
    }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    emailCta: string;
  };
};

export const contact = {
  name: "Chloe Li",
  chineseName: "李珉萱",
  phone: "+1 437 661 2745",
  email: "liminxuan118@gmail.com",
  location: "Toronto, ON",
  linkedin: "https://www.linkedin.com/in/chloe-li-mmsc-cs-econ/",
  resumeUrl: "/chloe-li-resume.docx"
};

export const content = {
  en: {
    displayName: "Chloe Li",
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      contact: "Contact"
    },
    hero: {
      eyebrow: "Business Analyst / Product Analyst",
      title: "Data clarity for better products, systems, and decisions.",
      summary:
        "I turn complex datasets and business workflows into clear insights, reliable reporting, AI-supported workflows, and practical product and systems improvements.",
      primaryCta: "View Experience",
      secondaryCta: "Download Resume"
    },
    metrics: [
      { value: "AI", label: "Manual workflows transformed into AI and software processes" },
      { value: "Data", label: "Finance, client, and product database analysis" },
      { value: "95%", label: "Defect resolution rate" }
    ],
    about: {
      eyebrow: "About",
      title: "Analytical, structured, and product-minded.",
      body:
        "I am a data-focused analyst with experience across financial systems, product data validation, AI workflow development, process automation, and business reporting. My work combines SQL, Python, dashboarding, workflow tools, and stakeholder collaboration to improve data quality, operational visibility, and delivery outcomes.",
      focus: [
        "Business and product analysis",
        "AI workflow and knowledge-base development",
        "Data validation and reconciliation",
        "Dashboarding, reporting, and stakeholder communication"
      ]
    },
    experience: {
      eyebrow: "Experience",
      title: "Experience across AI workflows, financial systems, product data, and operations.",
      items: [
        {
          company: "MEC-Tech",
          location: "Toronto, ON",
          title: "Algorithm Engineer",
          period: "Feb 2026 - Present",
          bullets: [
            "Optimized internal algorithm workflows to reduce manual processing and improve the accuracy and consistency of operational data outputs.",
            "Built AI knowledge-base and product-database workflows using Dify, DeepSeek, and DingTalk to support internal search, product information retrieval, and team collaboration.",
            "Designed structured data logic and validation steps to improve reliability across product, client, and business knowledge repositories.",
            "Collaborated with business and technical stakeholders to translate operational needs into scalable AI-assisted workflow solutions."
          ]
        },
        {
          company: "Investment Management Corporation of Ontario (IMCO)",
          location: "Toronto, ON",
          title: "Business Systems Analyst",
          period: "Sep 2025 - Jan 2026",
          bullets: [
            "Designed and automated data workflows and ETL processes using Excel, Power Query, and Power Automate, reducing manual processing effort by 40%.",
            "Wrote and optimized SQL queries for data extraction, validation, and reporting across operational datasets.",
            "Analyzed 50+ datasets to identify data quality issues and implemented improvements that increased workflow efficiency by 25%.",
            "Documented data flows, structures, and process logic to support scalability and audit readiness."
          ]
        },
        {
          company: "Nissan Motor Corporation",
          location: "Mississauga, ON",
          title: "Business Systems Analyst",
          period: "May 2024 - Dec 2024",
          bullets: [
            "Supported backend data validation for the MyNissan app across financial and transactional datasets.",
            "Performed data reconciliation and integrity checks across APIs and financial databases.",
            "Managed data-related defects in JIRA and contributed to a 95% resolution rate.",
            "Built Tableau dashboards and SQL-based reports to monitor account activity and performance metrics."
          ]
        },
        {
          company: "HGTECH",
          location: "Wuhan, China",
          title: "International Business Analyst",
          period: "May 2023 - Aug 2023",
          bullets: [
            "Cleaned and structured 1,000+ CRM records to improve usability and reporting accuracy.",
            "Developed web-based data interfaces with HTML and CSS for structured data presentation.",
            "Analyzed marketing and operations data, supporting a 28% increase in traffic performance.",
            "Assisted with multi-source data inputs for international operations and reporting."
          ]
        }
      ]
    },
    projects: {
      eyebrow: "Projects",
      title: "Selected work themes.",
      items: [
        {
          title: "AI Workflow and Knowledge Base",
          tag: "Dify / DeepSeek / DingTalk",
          description:
            "Built AI-assisted knowledge and product database workflows to reduce manual search, improve information retrieval, and support internal collaboration."
        },
        {
          title: "Product Data Validation",
          tag: "MyNissan App / JIRA",
          description:
            "Validated backend product data, reconciled system outputs, and tracked defects with development and QA teams."
        },
        {
          title: "Reporting and Dashboards",
          tag: "SQL / Tableau / Power BI",
          description:
            "Built dashboards and reports that made operational metrics, account activity, and performance trends easier to monitor."
        }
      ]
    },
    education: {
      eyebrow: "Education",
      title: "Academic foundation in management science, computing, and economics.",
      items: [
        {
          degree: "Master of Management Sciences",
          school: "University of Waterloo",
          period: "Sep 2023 - Jun 2025",
          details: ["GPA 4.0", "UW Grad Scholarship"]
        },
        {
          degree: "Bachelor of Computing (Honors)",
          school: "Queen's University",
          period: "Sep 2019 - Jun 2023",
          details: ["Major in Computing Arts", "Minor in Economics", "Dean's List", "Admission Scholarship"]
        }
      ]
    },
    contact: {
      eyebrow: "Contact",
      title: "Open to Business Analyst and Product Analyst opportunities.",
      body:
        "I am interested in roles where data, product thinking, AI workflows, and business systems come together to improve user and operational outcomes.",
      emailCta: "Email Chloe"
    }
  },
  zh: {
    displayName: "李珉萱",
    nav: {
      home: "首页",
      about: "关于",
      experience: "经历",
      projects: "项目",
      education: "教育",
      contact: "联系"
    },
    hero: {
      eyebrow: "商业分析 / 产品分析",
      title: "用清晰的数据，支持更好的产品、系统与业务决策。",
      summary:
        "我擅长把复杂数据和业务流程转化为可执行的洞察、稳定的报表、AI 辅助工作流，以及面向产品和系统改进的解决方案。",
      primaryCta: "查看经历",
      secondaryCta: "下载简历"
    },
    metrics: [
      { value: "AI", label: "将人工流程转化为 AI 工作流与软件化流程" },
      { value: "Data", label: "金融、客户与产品数据库分析" },
      { value: "95%", label: "缺陷解决率" }
    ],
    about: {
      eyebrow: "关于我",
      title: "结构化、数据导向，并具备产品思维。",
      body:
        "我是一名数据导向的分析师，拥有金融系统、产品数据验证、AI 工作流搭建、流程自动化和业务报表相关经验。我的工作结合 SQL、Python、可视化工具、工作流平台和跨团队沟通，帮助提升数据质量、业务可见性和交付效率。",
      focus: [
        "商业分析与产品分析",
        "AI 工作流与知识库搭建",
        "数据验证、清洗与对账",
        "仪表盘、报表与利益相关方沟通"
      ]
    },
    experience: {
      eyebrow: "经历",
      title: "覆盖 AI 工作流、金融系统、产品数据与运营流程的分析经验。",
      items: [
        {
          company: "MEC-Tech",
          location: "Toronto, ON",
          title: "算法工程师",
          period: "2026.02 - 至今",
          bullets: [
            "优化公司内部算法流程，减少人工处理环节，并提升运营数据输出的准确性与一致性。",
            "使用 Dify、DeepSeek、钉钉等工具搭建 AI 知识库与产品库工作流，支持内部搜索、产品信息检索和团队协作。",
            "设计结构化数据逻辑与验证步骤，提升产品、客户和业务知识库的数据可靠性。",
            "与业务和技术团队协作，将运营需求转化为可扩展的 AI 辅助工作流解决方案。"
          ]
        },
        {
          company: "Investment Management Corporation of Ontario (IMCO)",
          location: "Toronto, ON",
          title: "Business Systems Analyst",
          period: "2025.09 - 2026.01",
          bullets: [
            "使用 Excel、Power Query 和 Power Automate 设计并自动化数据工作流与 ETL 流程，减少 40% 手工处理工作。",
            "编写并优化 SQL 查询，用于运营数据集的数据提取、验证和报表支持。",
            "分析 50+ 个数据集，识别数据质量问题并推动改进，使工作流效率提升 25%。",
            "记录数据流、数据结构和流程逻辑，支持系统扩展和审计准备。"
          ]
        },
        {
          company: "Nissan Motor Corporation",
          location: "Mississauga, ON",
          title: "Business Systems Analyst",
          period: "2024.05 - 2024.12",
          bullets: [
            "支持 MyNissan App 后端数据验证，覆盖金融和交易类数据集。",
            "跨 API 和金融数据库进行数据对账与完整性检查。",
            "使用 JIRA 管理并跟踪数据相关缺陷，参与实现 95% 缺陷解决率。",
            "搭建 Tableau 仪表盘和 SQL 报表，用于监控账户活动和业务表现指标。"
          ]
        },
        {
          company: "HGTECH",
          location: "Wuhan, China",
          title: "International Business Analyst",
          period: "2023.05 - 2023.08",
          bullets: [
            "清洗并结构化 1,000+ 条 CRM 记录，提升数据可用性和报表准确性。",
            "使用 HTML/CSS 开发基于网页的数据展示界面，支持结构化信息呈现。",
            "分析市场和运营数据，支持流量表现提升 28%。",
            "协助整合多来源数据输入，支持国际业务运营和报表工作。"
          ]
        }
      ]
    },
    projects: {
      eyebrow: "项目",
      title: "代表性工作方向。",
      items: [
        {
          title: "AI 工作流与知识库",
          tag: "Dify / DeepSeek / 钉钉",
          description:
            "搭建 AI 辅助的知识库和产品库工作流，减少人工检索，提高信息获取效率，并支持内部协作。"
        },
        {
          title: "产品数据验证",
          tag: "MyNissan App / JIRA",
          description:
            "验证产品后端数据，进行系统输出对账，并与开发和 QA 团队协作跟踪缺陷。"
        },
        {
          title: "报表与仪表盘",
          tag: "SQL / Tableau / Power BI",
          description:
            "构建仪表盘和报表，让运营指标、账户活动和业务趋势更易监控。"
        }
      ]
    },
    education: {
      eyebrow: "教育背景",
      title: "管理科学、计算机与经济学交叉背景。",
      items: [
        {
          degree: "Master of Management Sciences",
          school: "University of Waterloo",
          period: "2023.09 - 2025.06",
          details: ["GPA 4.0", "UW Grad Scholarship"]
        },
        {
          degree: "Bachelor of Computing (Honors)",
          school: "Queen's University",
          period: "2019.09 - 2023.06",
          details: ["Computing Arts 主修", "Economics 辅修", "Dean's List", "Admission Scholarship"]
        }
      ]
    },
    contact: {
      eyebrow: "联系",
      title: "正在寻找 Business Analyst 和 Product Analyst 相关机会。",
      body:
        "我关注数据、产品思维、AI 工作流和业务系统交汇的岗位，希望通过分析和流程优化提升用户体验与运营结果。",
      emailCta: "发送邮件"
    }
  }
} satisfies Record<Locale, PortfolioContent>;
