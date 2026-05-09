export type Locale = "en" | "zh";

export type SectionKey = "experience" | "projects" | "education" | "publications";

type NavKey = "home" | "about" | SectionKey | "contact";

export type PortfolioItem = {
  slug: string;
  title: string;
  subtitle: string;
  meta: string;
  description?: string;
  bullets?: string[];
  tags?: string[];
  url?: string;
  cta?: string;
};

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
  sections: Record<
    SectionKey,
    {
      eyebrow: string;
      title: string;
      lineup: string;
      items: PortfolioItem[];
    }
  >;
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
      publications: "Publications",
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
      { value: "Business", label: "Bridge between business needs and technical solutions" }
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
    sections: {
      experience: {
        eyebrow: "Experience",
        title: "Experience across AI workflows, financial systems, product data, and operations.",
        lineup: "Explore experience",
        items: [
          {
            slug: "mec-tech-algorithm-engineer",
            title: "Algorithm Engineer",
            subtitle: "MEC-Tech",
            meta: "Feb 2026 - Present · Remote",
            description:
              "AI workflow and algorithm-focused role supporting internal automation, product knowledge retrieval, and data reliability.",
            bullets: [
              "Optimized internal algorithm workflows to reduce manual processing and improve the accuracy and consistency of operational data outputs.",
              "Built AI knowledge-base and product-database workflows using Dify, DeepSeek, and DingTalk to support internal search, product information retrieval, and team collaboration.",
              "Designed structured data logic and validation steps to improve reliability across product, client, and business knowledge repositories.",
              "Collaborated with business and technical stakeholders to translate operational needs into scalable AI-assisted workflow solutions."
            ],
            tags: ["Dify", "DeepSeek", "DingTalk", "AI workflow"]
          },
          {
            slug: "imco-business-systems-analyst",
            title: "Business Systems Analyst",
            subtitle: "Investment Management Corporation of Ontario (IMCO)",
            meta: "Sep 2025 - Jan 2026 · Toronto, ON",
            description:
              "Financial systems and data workflow role focused on ETL, reporting, validation, and process documentation.",
            bullets: [
              "Designed and automated data workflows and ETL processes using Excel, Power Query, and Power Automate, reducing manual processing effort by 40%.",
              "Wrote and optimized SQL queries for data extraction, validation, and reporting across operational datasets.",
              "Analyzed 50+ datasets to identify data quality issues and implemented improvements that increased workflow efficiency by 25%.",
              "Documented data flows, structures, and process logic to support scalability and audit readiness."
            ],
            tags: ["SQL", "Power Query", "Power Automate", "ETL"]
          },
          {
            slug: "nissan-business-systems-analyst",
            title: "Business Systems Analyst",
            subtitle: "Nissan Motor Corporation",
            meta: "May 2024 - Dec 2024 · Mississauga, ON",
            description:
              "Product data validation role supporting backend reliability for MyNissan app financial and transactional datasets.",
            bullets: [
              "Supported backend data validation for the MyNissan app across financial and transactional datasets.",
              "Performed data reconciliation and integrity checks across APIs and financial databases.",
              "Managed data-related defects in JIRA and contributed to a 95% resolution rate.",
              "Built Tableau dashboards and SQL-based reports to monitor account activity and performance metrics."
            ],
            tags: ["JIRA", "Tableau", "SQL", "Data validation"]
          },
          {
            slug: "hgtech-international-business-analyst",
            title: "International Business Analyst",
            subtitle: "HGTECH",
            meta: "May 2023 - Aug 2023 · Wuhan, China",
            description:
              "International operations and CRM data role supporting structured reporting and marketing performance analysis.",
            bullets: [
              "Cleaned and structured 1,000+ CRM records to improve usability and reporting accuracy.",
              "Developed web-based data interfaces with HTML and CSS for structured data presentation.",
              "Analyzed marketing and operations data, supporting a 28% increase in traffic performance.",
              "Assisted with multi-source data inputs for international operations and reporting."
            ],
            tags: ["CRM", "HTML/CSS", "Operations", "Reporting"]
          }
        ]
      },
      projects: {
        eyebrow: "Projects",
        title: "Practical solutions across AI workflows, product data, and reporting.",
        lineup: "Explore projects",
        items: [
          {
            slug: "ai-workflow-knowledge-base",
            title: "AI Workflow and Knowledge Base",
            subtitle: "Dify / DeepSeek / DingTalk",
            meta: "AI workflow design",
            description:
              "Built AI-assisted knowledge and product database workflows to reduce manual search, improve information retrieval, and support internal collaboration.",
            bullets: [
              "Structured product and business knowledge into searchable workflow logic.",
              "Connected AI tools with team collaboration workflows for faster internal access.",
              "Reduced repeated manual search by turning operational knowledge into reusable AI-assisted processes."
            ],
            tags: ["Dify", "DeepSeek", "Knowledge base"]
          },
          {
            slug: "product-data-validation",
            title: "Product Data Validation",
            subtitle: "MyNissan App / JIRA",
            meta: "Product analytics",
            description:
              "Validated backend product data, reconciled system outputs, and tracked defects with development and QA teams.",
            bullets: [
              "Checked financial and transactional datasets across systems.",
              "Tracked defects in JIRA with developers and QA teams.",
              "Supported reliable product outputs through structured validation and reconciliation."
            ],
            tags: ["Product data", "JIRA", "QA"]
          },
          {
            slug: "reporting-dashboards",
            title: "Reporting and Dashboards",
            subtitle: "SQL / Tableau / Power BI",
            meta: "Business reporting",
            description:
              "Built dashboards and reports that made operational metrics, account activity, and performance trends easier to monitor.",
            bullets: [
              "Used SQL-based reporting to monitor business and account activity.",
              "Built visual summaries for operational review and stakeholder communication.",
              "Improved recurring reporting visibility through clear KPI structures."
            ],
            tags: ["SQL", "Tableau", "Power BI"]
          }
        ]
      },
      education: {
        eyebrow: "Education",
        title: "Academic foundation in management science, computing, and economics.",
        lineup: "Explore education",
        items: [
          {
            slug: "waterloo-management-sciences",
            title: "Master of Management Sciences",
            subtitle: "University of Waterloo",
            meta: "Sep 2023 - Jun 2025",
            description:
              "Graduate study focused on management science, analytical methods, and technology-enabled decision making.",
            bullets: ["GPA 4.0", "UW Grad Scholarship"],
            tags: ["Management Sciences", "Analytics", "Decision making"]
          },
          {
            slug: "queens-computing",
            title: "Bachelor of Computing (Honors)",
            subtitle: "Queen's University",
            meta: "Sep 2019 - Jun 2023",
            description:
              "Undergraduate foundation combining computing, creative technology, and economics.",
            bullets: ["Major in Computing Arts", "Minor in Economics", "Dean's List", "Admission Scholarship"],
            tags: ["Computing", "Economics", "Computing Arts"]
          }
        ]
      },
      publications: {
        eyebrow: "Publications",
        title: "Research contributions in control systems and computer vision datasets.",
        lineup: "Explore publications",
        items: [
          {
            slug: "high-precision-air-temperature-control",
            title: "High-precision air temperature control considering both hardware elements and controller design",
            subtitle: "ScienceDirect",
            meta: "Jul 16, 2022",
            description:
              "A control-loop and hardware-aware approach for high-precision air temperature control, balancing disturbance rejection and noise attenuation for precision machinery environments.",
            bullets: [
              "Proposed a general cascade-loop control structure for high-precision air temperature systems.",
              "Analyzed disturbance and chamber temperature noise as key sources affecting control precision.",
              "Designed compensators through loop shaping to improve disturbance rejection while reducing noise sensitivity.",
              "Reduced chamber air temperature deviation from 15.6 mK to 10.5 mK in the verification system."
            ],
            tags: ["Control systems", "Precision temperature", "Loop shaping"],
            url: "https://www.sciencedirect.com/science/article/pii/S2214157X22005330?via%3Dihub",
            cta: "Show publication"
          },
          {
            slug: "scd-stacked-carton-dataset",
            title: "SCD: A Stacked Carton Dataset for Detection and Segmentation",
            subtitle: "MDPI",
            meta: "May 10, 2022",
            description:
              "A large-scale stacked carton dataset and benchmark suite for carton detection and instance segmentation in automatic logistics systems.",
            bullets: [
              "Presented a dataset of 16,136 images with 250,000 instance masks for carton detection and segmentation.",
              "Established benchmarks with popular object detection and instance segmentation models.",
              "Introduced OPCL and BGS modules to improve classification-localization quality and boundary learning.",
              "Demonstrated generalization improvements on SCD, MS COCO, and PASCAL VOC."
            ],
            tags: ["Object detection", "Dataset", "Instance segmentation"],
            url: "https://www.mdpi.com/1424-8220/22/10/3617",
            cta: "Show publication"
          }
        ]
      }
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
      publications: "发表",
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
      { value: "Business", label: "连接业务需求与技术解决方案" }
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
    sections: {
      experience: {
        eyebrow: "经历",
        title: "覆盖 AI 工作流、金融系统、产品数据与运营流程的分析经验。",
        lineup: "查看经历",
        items: [
          {
            slug: "mec-tech-algorithm-engineer",
            title: "算法工程师",
            subtitle: "MEC-Tech",
            meta: "2026.02 - 至今 · Remote",
            description:
              "围绕 AI 工作流、算法优化、产品知识库和数据可靠性展开的工作。",
            bullets: [
              "优化公司内部算法流程，减少人工处理环节，并提升运营数据输出的准确性与一致性。",
              "使用 Dify、DeepSeek、钉钉等工具搭建 AI 知识库与产品库工作流，支持内部搜索、产品信息检索和团队协作。",
              "设计结构化数据逻辑与验证步骤，提升产品、客户和业务知识库的数据可靠性。",
              "与业务和技术团队协作，将运营需求转化为可扩展的 AI 辅助工作流解决方案。"
            ],
            tags: ["Dify", "DeepSeek", "钉钉", "AI 工作流"]
          },
          {
            slug: "imco-business-systems-analyst",
            title: "Business Systems Analyst",
            subtitle: "Investment Management Corporation of Ontario (IMCO)",
            meta: "2025.09 - 2026.01 · Toronto, ON",
            description:
              "面向金融系统的数据流程、ETL、报表验证与流程文档工作。",
            bullets: [
              "使用 Excel、Power Query 和 Power Automate 设计并自动化数据工作流与 ETL 流程，减少 40% 手工处理工作。",
              "编写并优化 SQL 查询，用于运营数据集的数据提取、验证和报表支持。",
              "分析 50+ 个数据集，识别数据质量问题并推动改进，使工作流效率提升 25%。",
              "记录数据流、数据结构和流程逻辑，支持系统扩展和审计准备。"
            ],
            tags: ["SQL", "Power Query", "Power Automate", "ETL"]
          },
          {
            slug: "nissan-business-systems-analyst",
            title: "Business Systems Analyst",
            subtitle: "Nissan Motor Corporation",
            meta: "2024.05 - 2024.12 · Mississauga, ON",
            description:
              "支持 MyNissan App 金融和交易数据集的后端数据验证与产品数据可靠性。",
            bullets: [
              "支持 MyNissan App 后端数据验证，覆盖金融和交易类数据集。",
              "跨 API 和金融数据库进行数据对账与完整性检查。",
              "使用 JIRA 管理并跟踪数据相关缺陷，参与实现 95% 缺陷解决率。",
              "搭建 Tableau 仪表盘和 SQL 报表，用于监控账户活动和业务表现指标。"
            ],
            tags: ["JIRA", "Tableau", "SQL", "数据验证"]
          },
          {
            slug: "hgtech-international-business-analyst",
            title: "International Business Analyst",
            subtitle: "HGTECH",
            meta: "2023.05 - 2023.08 · Wuhan, China",
            description:
              "围绕国际业务、CRM 数据清洗、结构化展示和市场运营分析展开的工作。",
            bullets: [
              "清洗并结构化 1,000+ 条 CRM 记录，提升数据可用性和报表准确性。",
              "使用 HTML/CSS 开发基于网页的数据展示界面，支持结构化信息呈现。",
              "分析市场和运营数据，支持流量表现提升 28%。",
              "协助整合多来源数据输入，支持国际业务运营和报表工作。"
            ],
            tags: ["CRM", "HTML/CSS", "运营", "报表"]
          }
        ]
      },
      projects: {
        eyebrow: "项目",
        title: "围绕 AI 工作流、产品数据与报表分析的实践方案。",
        lineup: "查看项目",
        items: [
          {
            slug: "ai-workflow-knowledge-base",
            title: "AI 工作流与知识库",
            subtitle: "Dify / DeepSeek / 钉钉",
            meta: "AI 工作流设计",
            description:
              "搭建 AI 辅助的知识库和产品库工作流，减少人工检索，提高信息获取效率，并支持内部协作。",
            bullets: [
              "将产品和业务知识结构化为可检索的工作流逻辑。",
              "连接 AI 工具与团队协作流程，提高内部信息访问效率。",
              "把重复性人工检索转化为可复用的 AI 辅助流程。"
            ],
            tags: ["Dify", "DeepSeek", "知识库"]
          },
          {
            slug: "product-data-validation",
            title: "产品数据验证",
            subtitle: "MyNissan App / JIRA",
            meta: "产品分析",
            description:
              "验证产品后端数据，进行系统输出对账，并与开发和 QA 团队协作跟踪缺陷。",
            bullets: [
              "检查跨系统的金融和交易类数据集。",
              "与开发和 QA 团队通过 JIRA 跟踪数据相关缺陷。",
              "通过结构化验证和对账支持稳定可靠的产品输出。"
            ],
            tags: ["产品数据", "JIRA", "QA"]
          },
          {
            slug: "reporting-dashboards",
            title: "报表与仪表盘",
            subtitle: "SQL / Tableau / Power BI",
            meta: "业务报表",
            description:
              "构建仪表盘和报表，让运营指标、账户活动和业务趋势更易监控。",
            bullets: [
              "使用 SQL 报表监控业务和账户活动。",
              "构建用于运营复盘和利益相关方沟通的可视化总结。",
              "通过清晰的 KPI 结构提升周期性报表的可见性。"
            ],
            tags: ["SQL", "Tableau", "Power BI"]
          }
        ]
      },
      education: {
        eyebrow: "教育背景",
        title: "管理科学、计算机与经济学交叉背景。",
        lineup: "查看教育背景",
        items: [
          {
            slug: "waterloo-management-sciences",
            title: "Master of Management Sciences",
            subtitle: "University of Waterloo",
            meta: "2023.09 - 2025.06",
            description:
              "研究生阶段聚焦管理科学、分析方法和技术驱动的决策支持。",
            bullets: ["GPA 4.0", "UW Grad Scholarship"],
            tags: ["管理科学", "分析", "决策支持"]
          },
          {
            slug: "queens-computing",
            title: "Bachelor of Computing (Honors)",
            subtitle: "Queen's University",
            meta: "2019.09 - 2023.06",
            description:
              "本科背景结合计算机、创意技术和经济学。",
            bullets: ["Computing Arts 主修", "Economics 辅修", "Dean's List", "Admission Scholarship"],
            tags: ["计算机", "经济学", "Computing Arts"]
          }
        ]
      },
      publications: {
        eyebrow: "发表",
        title: "控制系统与计算机视觉数据集方向的研究成果。",
        lineup: "查看发表",
        items: [
          {
            slug: "high-precision-air-temperature-control",
            title: "High-precision air temperature control considering both hardware elements and controller design",
            subtitle: "ScienceDirect",
            meta: "2022.07.16",
            description:
              "面向精密机械环境的高精度空气温度控制研究，综合考虑硬件元件、控制器设计、扰动抑制和噪声衰减。",
            bullets: [
              "提出适用于高精度空气温度控制系统的级联控制回路结构。",
              "分析入口空气扰动和腔体非均匀温度噪声对控制精度的影响。",
              "基于 loop shaping 设计补偿器，在扰动抑制和噪声衰减之间取得平衡。",
              "实验系统中将腔体空气温度偏差从 15.6 mK 降低至 10.5 mK。"
            ],
            tags: ["控制系统", "精密温控", "Loop shaping"],
            url: "https://www.sciencedirect.com/science/article/pii/S2214157X22005330?via%3Dihub",
            cta: "查看发表"
          },
          {
            slug: "scd-stacked-carton-dataset",
            title: "SCD: A Stacked Carton Dataset for Detection and Segmentation",
            subtitle: "MDPI",
            meta: "2022.05.10",
            description:
              "面向自动物流系统的堆叠纸箱检测与实例分割数据集及基准研究。",
            bullets: [
              "构建包含 16,136 张图像和 250,000 个实例 mask 的纸箱检测与分割数据集。",
              "使用主流目标检测和实例分割模型建立基准结果。",
              "提出 OPCL 与 BGS 模块，提升分类定位质量和边界信息学习。",
              "在 SCD、MS COCO 和 PASCAL VOC 上验证方法的泛化提升。"
            ],
            tags: ["目标检测", "数据集", "实例分割"],
            url: "https://www.mdpi.com/1424-8220/22/10/3617",
            cta: "查看发表"
          }
        ]
      }
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

export function getSectionItem(section: SectionKey, slug: string, locale: Locale = "en"): PortfolioItem | undefined {
  return content[locale].sections[section].items.find((item) => item.slug === slug);
}

export function getAllDetailPaths() {
  return (["experience", "education", "publications"] as SectionKey[]).flatMap((section) =>
    content.en.sections[section].items.map((item) => ({
      section,
      slug: item.slug
    }))
  );
}
