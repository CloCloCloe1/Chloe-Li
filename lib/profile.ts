export type Locale = "en" | "zh";

type PortfolioContent = {
  nav: Record<"home" | "about" | "experience" | "projects" | "resume" | "contact", string>;
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
  resume: {
    eyebrow: string;
    title: string;
    educationTitle: string;
    education: string[];
    skillsTitle: string;
    skills: string[];
    languagesTitle: string;
    languages: string;
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
  phone: "+1 437 661 2745",
  email: "liminxuan118@gmail.com",
  location: "Toronto, ON",
  linkedin: "#",
  resumeUrl: "/chloe-li-resume.docx"
};

export const content = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      resume: "Resume",
      contact: "Contact"
    },
    hero: {
      eyebrow: "Business Analyst / Product Analyst",
      title: "Data clarity for better products, systems, and decisions.",
      summary:
        "I turn complex datasets and business workflows into clear insights, reliable reporting, and practical product and systems improvements.",
      primaryCta: "View Experience",
      secondaryCta: "Download Resume"
    },
    metrics: [
      { value: "40%", label: "manual effort reduced" },
      { value: "50+", label: "datasets analyzed" },
      { value: "95%", label: "defect resolution rate" }
    ],
    about: {
      eyebrow: "About",
      title: "Analytical, structured, and product-minded.",
      body:
        "I am a data-focused analyst with experience across financial systems, mobile app data validation, workflow automation, and business reporting. My work combines SQL, Python, dashboarding, and stakeholder collaboration to improve data quality, operational visibility, and delivery outcomes.",
      focus: [
        "Business and product analysis",
        "Data validation and reconciliation",
        "Workflow automation and process improvement",
        "Dashboarding, reporting, and stakeholder communication"
      ]
    },
    experience: {
      eyebrow: "Experience",
      title: "Experience across financial systems, product data, and operations.",
      items: [
        {
          company: "Investment Management Corporation of Ontario (IMCO)",
          location: "Toronto, ON",
          title: "Business Systems Analyst Intern",
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
          title: "Business Systems Analyst Intern",
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
          title: "International Business Analyst Intern",
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
          title: "Data Workflow Automation",
          tag: "ETL / Power Automate",
          description:
            "Automated recurring data preparation and validation steps to reduce manual work and improve reporting consistency."
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
    resume: {
      eyebrow: "Resume",
      title: "A concise profile for analyst and product-focused roles.",
      educationTitle: "Education",
      education: [
        "Master of Management Sciences, University of Waterloo, GPA 4.0, UW Grad Scholarship",
        "Bachelor of Computing (Honors), Queen's University, Major in Computing Arts, Minor in Economics"
      ],
      skillsTitle: "Skills",
      skills: [
        "SQL",
        "Python",
        "Excel",
        "Tableau",
        "Power BI",
        "Power Automate",
        "Dynamics 365",
        "JIRA",
        "Confluence",
        "Visio",
        "Data pipelines",
        "Financial reporting",
        "Process improvement",
        "Product data validation"
      ],
      languagesTitle: "Languages",
      languages: "Mandarin native, English professional proficiency"
    },
    contact: {
      eyebrow: "Contact",
      title: "Open to Business Analyst and Product Analyst opportunities.",
      body:
        "I am interested in roles where data, product thinking, and business systems come together to improve user and operational outcomes.",
      emailCta: "Email Chloe"
    }
  },
  zh: {
    nav: {
      home: "首页",
      about: "关于",
      experience: "经历",
      projects: "项目",
      resume: "简历",
      contact: "联系"
    },
    hero: {
      eyebrow: "商业分析 / 产品分析",
      title: "用清晰的数据，支持更好的产品、系统与业务决策。",
      summary:
        "我擅长把复杂数据和业务流程转化为可执行的洞察、稳定的报表，以及面向产品和系统改进的解决方案。",
      primaryCta: "查看经历",
      secondaryCta: "下载简历"
    },
    metrics: [
      { value: "40%", label: "减少手工处理工作" },
      { value: "50+", label: "分析数据集" },
      { value: "95%", label: "缺陷解决率" }
    ],
    about: {
      eyebrow: "关于我",
      title: "结构化、数据导向，并具备产品思维。",
      body:
        "我是一名数据导向的分析师，拥有金融系统、移动应用数据验证、流程自动化和业务报表相关经验。我的工作结合 SQL、Python、可视化工具和跨团队沟通，帮助提升数据质量、业务可见性和交付效率。",
      focus: [
        "商业分析与产品分析",
        "数据验证、清洗与对账",
        "流程自动化与流程优化",
        "仪表盘、报表与利益相关方沟通"
      ]
    },
    experience: {
      eyebrow: "经历",
      title: "覆盖金融系统、产品数据与运营流程的分析经验。",
      items: [
        {
          company: "Investment Management Corporation of Ontario (IMCO)",
          location: "Toronto, ON",
          title: "Business Systems Analyst Intern",
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
          title: "Business Systems Analyst Intern",
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
          title: "International Business Analyst Intern",
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
          title: "数据流程自动化",
          tag: "ETL / Power Automate",
          description:
            "自动化重复性数据准备与验证步骤，减少手工处理并提升报表一致性。"
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
    resume: {
      eyebrow: "简历",
      title: "面向分析与产品相关岗位的简洁职业概览。",
      educationTitle: "教育背景",
      education: [
        "University of Waterloo，管理科学硕士，GPA 4.0，UW Grad Scholarship",
        "Queen's University，计算机荣誉学士，Computing Arts 主修，Economics 辅修"
      ],
      skillsTitle: "技能",
      skills: [
        "SQL",
        "Python",
        "Excel",
        "Tableau",
        "Power BI",
        "Power Automate",
        "Dynamics 365",
        "JIRA",
        "Confluence",
        "Visio",
        "数据管道",
        "金融报表",
        "流程优化",
        "产品数据验证"
      ],
      languagesTitle: "语言",
      languages: "普通话母语，英语职业工作水平"
    },
    contact: {
      eyebrow: "联系",
      title: "正在寻找 Business Analyst 和 Product Analyst 相关机会。",
      body:
        "我关注数据、产品思维和业务系统交汇的岗位，希望通过分析和流程优化提升用户体验与运营结果。",
      emailCta: "发送邮件"
    }
  }
} satisfies Record<Locale, PortfolioContent>;
