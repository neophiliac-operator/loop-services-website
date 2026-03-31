/**
 * Research-Backed Salary Data for ROI Calculator
 * Loop Services — Offshore & Onshore Workforce Solutions
 * 
 * SOURCES (2025-2026):
 * ─────────────────────
 * US Salaries:
 *   - U.S. Bureau of Labor Statistics (bls.gov) — Occupational Employment & Wage Statistics
 *   - Glassdoor US — Total Pay estimates (median)
 *   - Salary.com — Base salary ranges
 *   - ERI SalaryExpert — Employer-reported salary surveys
 *   - Robert Half 2025 Salary Guide (tech roles)
 * 
 * India Salaries:
 *   - AmbitionBox India — Employee-reported salaries (10K+ data points per role)
 *   - Glassdoor India — Base pay estimates
 *   - Naukri.com / Indeed India — Market salary data
 *   - ERI SalaryExpert India — Employer-reported surveys
 *   - TeamLease / NASSCOM reports — BPO/IT industry benchmarks
 * 
 * METHODOLOGY:
 *   - India salaries converted at ₹83 = $1 USD (2025-2026 avg rate)
 *   - US "Total Cost" = base + 30-35% employer overhead
 *     (healthcare ~$7K/yr, 401k match ~3%, FICA 7.65%, unemployment/workers comp ~3%)
 *   - India "Total Cost via Loop" = base + 50% all-in markup
 *     (Loop management fee, infrastructure, compliance, HR, payroll, quality monitoring)
 *   - All figures are MID-RANGE (not entry-level, not senior) — 3-6 years experience
 *   - Conservative estimates — actual savings may be higher
 * 
 * Last updated: March 2026
 */

const salaryData = {
  // ═══════════════════════════════════════
  // CATEGORY 1: TECHNOLOGY & DEVELOPMENT
  // ═══════════════════════════════════════
  categories: [
    {
      id: 'technology',
      name: 'Technology & Development',
      icon: '💻',
      roles: [
        {
          id: 'full_stack_developer',
          title: 'Full Stack Developer',
          description: 'End-to-end web application development, React/Node/Python, API design, database management',
          us: {
            baseSalary: 115000,   // BLS Software Devs median: $130K; Glassdoor Full Stack: $110-120K
            totalCost: 152000,    // Robert Half 2025: $105-135K midpoint
            source: 'BLS, Glassdoor, Robert Half 2025'
          },
          india: {
            baseSalary: 14500,    // AmbitionBox: ₹8-20L range; Glassdoor India: ₹10-15L mid
                                  // Naukri: ₹12L avg (3-6 yr exp); ≈ $14,500 at ₹83/$
            totalCost: 21750,
            source: 'AmbitionBox, Glassdoor India, Naukri 2025'
          }
        },
        {
          id: 'backend_developer',
          title: 'Back End Developer',
          description: 'Server-side development, APIs, microservices, database optimization, cloud infrastructure',
          us: {
            baseSalary: 110000,   // Glassdoor: $105-115K median; BLS: $109K (software devs)
            totalCost: 145000,
            source: 'BLS, Glassdoor 2025'
          },
          india: {
            baseSalary: 13200,    // AmbitionBox: ₹7-18L; Glassdoor India: ₹9-14L mid
                                  // ≈ ₹11L avg = $13,250
            totalCost: 19800,
            source: 'AmbitionBox, Glassdoor India 2025'
          }
        },
        {
          id: 'devops_engineer',
          title: 'DevOps Engineer',
          description: 'CI/CD pipelines, cloud infrastructure (AWS/Azure/GCP), containerization, monitoring, automation',
          us: {
            baseSalary: 125000,   // Glassdoor: $120-135K; BLS (sysadmin/cloud): $100-140K range
            totalCost: 165000,    // Robert Half: $120-160K for mid-level
            source: 'Glassdoor, Robert Half, BLS 2025'
          },
          india: {
            baseSalary: 15600,    // AmbitionBox: ₹8-25L range; Glassdoor India: ₹11-18L mid
                                  // Naukri: ₹13L avg (3-6 yr exp); ≈ $15,600
            totalCost: 23400,
            source: 'AmbitionBox, Glassdoor India, Naukri 2025'
          }
        },
        {
          id: 'ui_designer',
          title: 'UI/UX Designer',
          description: 'User interface design, wireframing, prototyping (Figma/Sketch), user research, design systems',
          us: {
            baseSalary: 95000,    // Glassdoor: $90-105K; BLS (web/digital designers): $85K median
            totalCost: 125000,    // Robert Half: $85-110K
            source: 'Glassdoor, BLS, Robert Half 2025'
          },
          india: {
            baseSalary: 9600,     // AmbitionBox: ₹5-15L range; Glassdoor India: ₹7-12L mid
                                  // ≈ ₹8L avg = $9,600
            totalCost: 14400,
            source: 'AmbitionBox, Glassdoor India 2025'
          }
        },
        {
          id: 'database_analyst',
          title: 'Database Analyst',
          description: 'Database administration, SQL optimization, data modeling, reporting, ETL pipelines',
          us: {
            baseSalary: 85000,    // BLS (DB admins): $101K median; Glassdoor analyst: $80-90K
            totalCost: 112000,
            source: 'BLS, Glassdoor 2025'
          },
          india: {
            baseSalary: 10800,    // AmbitionBox: ₹6-15L; Glassdoor India: ₹8-12L
                                  // ≈ ₹9L avg = $10,800
            totalCost: 16200,
            source: 'AmbitionBox, Glassdoor India 2025'
          }
        },
        {
          id: 'it_architect',
          title: 'IT / Solutions Architect',
          description: 'System architecture design, technology strategy, integration planning, enterprise solutions',
          us: {
            baseSalary: 145000,   // Glassdoor: $140-165K; BLS (computer architects): $150K+
            totalCost: 191000,    // Robert Half: $140-175K
            source: 'Glassdoor, BLS, Robert Half 2025'
          },
          india: {
            baseSalary: 24000,    // AmbitionBox: ₹15-35L; Glassdoor India: ₹18-28L
                                  // ≈ ₹20L avg = $24,000
            totalCost: 36000,
            source: 'AmbitionBox, Glassdoor India 2025'
          }
        },
      ]
    },

    // ═══════════════════════════════════════
    // CATEGORY 2: PROJECT MANAGEMENT
    // ═══════════════════════════════════════
    {
      id: 'management',
      name: 'Project Management',
      icon: '📋',
      roles: [
        {
          id: 'scrum_master',
          title: 'Scrum Master',
          description: 'Agile facilitation, sprint planning, retrospectives, team coaching, JIRA/Azure DevOps',
          us: {
            baseSalary: 105000,   // Glassdoor: $100-115K; Salary.com: $98-110K
            totalCost: 138000,    // Robert Half: $100-120K
            source: 'Glassdoor, Salary.com, Robert Half 2025'
          },
          india: {
            baseSalary: 16800,    // AmbitionBox: ₹10-25L; Glassdoor India: ₹12-20L
                                  // NASSCOM: ₹14L avg (CSM certified, 4-6 yr); ≈ $16,800
            totalCost: 25200,
            source: 'AmbitionBox, Glassdoor India, NASSCOM 2025'
          }
        },
        {
          id: 'bpo_consultant',
          title: 'BPO Consultant & Implementation',
          description: 'Process design, outsourcing strategy, SLA frameworks, transition management, quality assurance',
          us: {
            baseSalary: 95000,    // Glassdoor (BPO/ops consultants): $85-110K
            totalCost: 125000,
            source: 'Glassdoor, Indeed 2025'
          },
          india: {
            baseSalary: 14400,    // AmbitionBox: ₹8-20L; Naukri (BPO mgmt): ₹10-18L
                                  // ≈ ₹12L avg = $14,400
            totalCost: 21600,
            source: 'AmbitionBox, Naukri 2025'
          }
        }
      ]
    },

    // ═══════════════════════════════════════
    // CATEGORY 3: SUPPORT & OPERATIONS
    // ═══════════════════════════════════════
    {
      id: 'support',
      name: 'Support & Operations',
      icon: '🎧',
      roles: [
        {
          id: 'help_desk',
          title: 'Help Desk / IT Support',
          description: 'Tier 1-2 technical support, ticketing systems, troubleshooting, user onboarding',
          us: {
            baseSalary: 50000,    // BLS (computer support): $59K median; Glassdoor L1: $45-55K
            totalCost: 66000,
            source: 'BLS, Glassdoor 2025'
          },
          india: {
            baseSalary: 4800,     // AmbitionBox: ₹2.5-7L; Glassdoor India: ₹3-6L
                                  // TeamLease BPO benchmark: ₹4L avg; ≈ $4,800
            totalCost: 7200,
            source: 'AmbitionBox, Glassdoor India, TeamLease 2025'
          }
        },
        {
          id: 'chat_solutions',
          title: 'Chat Support Specialist',
          description: 'Live chat support, chatbot management, customer engagement, multi-channel messaging',
          us: {
            baseSalary: 42000,    // Glassdoor: $38-48K; Indeed: $40-45K
            totalCost: 55000,
            source: 'Glassdoor, Indeed 2025'
          },
          india: {
            baseSalary: 3600,     // AmbitionBox: ₹2-5L; Indeed India: ₹2.5-4L BPO chat
                                  // ≈ ₹3L avg = $3,600
            totalCost: 5400,
            source: 'AmbitionBox, Indeed India 2025'
          }
        }
      ]
    },

    // ═══════════════════════════════════════
    // CATEGORY 4: LOGISTICS & FREIGHT (original)
    // ═══════════════════════════════════════
    {
      id: 'logistics',
      name: 'Logistics & Freight',
      icon: '🚛',
      roles: [
        {
          id: 'dispatcher',
          title: 'Freight Dispatcher',
          description: 'Coordinate shipments, manage carrier relationships, route optimization',
          us: {
            baseSalary: 52000,    // SalaryExpert: $52,048; Glassdoor: $51,110 median
            totalCost: 68000,
            source: 'BLS, SalaryExpert, Glassdoor 2025'
          },
          india: {
            baseSalary: 5100,     // SalaryExpert India: ₹4.2L entry; Indeed: ₹2.4L/yr
                                  // Mid-range: ₹4.2L = $5,100
            totalCost: 7650,
            source: 'SalaryExpert India, Indeed India, AmbitionBox 2025-2026'
          }
        },
        {
          id: 'billing',
          title: 'Billing Specialist',
          description: 'Invoice processing, freight billing, accounts receivable, rate auditing',
          us: {
            baseSalary: 48000,
            totalCost: 63000,
            source: 'Salary.com, SalaryExpert 2025'
          },
          india: {
            baseSalary: 6100,     // Salary.com India: ₹5.86L; SalaryExpert: ₹5.08L
            totalCost: 9150,
            source: 'Salary.com India, SalaryExpert India, Glassdoor India 2025-2026'
          }
        },
        {
          id: 'customer_service',
          title: 'Customer Service Rep',
          description: 'Client communication, shipment tracking inquiries, issue resolution',
          us: {
            baseSalary: 40000,
            totalCost: 53000,
            source: 'BLS, SalaryExpert 2025'
          },
          india: {
            baseSalary: 4300,     // Salary.com India: ₹3.6L; SalaryExpert: ₹4.9L
            totalCost: 6450,
            source: 'Salary.com India, SalaryExpert India, AmbitionBox, Jooble 2025-2026'
          }
        },
        {
          id: 'data_entry',
          title: 'Data Entry Operator',
          description: 'Shipment data entry, BOL processing, documentation management',
          us: {
            baseSalary: 37000,
            totalCost: 49000,
            source: 'BLS, Salary.com 2025'
          },
          india: {
            baseSalary: 3000,
            totalCost: 4500,
            source: 'Indeed India, AmbitionBox 2025'
          }
        },
        {
          id: 'logistics_coordinator',
          title: 'Logistics Coordinator',
          description: 'Supply chain coordination, vendor management, shipment scheduling',
          us: {
            baseSalary: 47000,
            totalCost: 62000,
            source: 'BLS, Glassdoor 2025'
          },
          india: {
            baseSalary: 5500,
            totalCost: 8250,
            source: 'Glassdoor India, AmbitionBox 2025'
          }
        },
        {
          id: 'track_trace',
          title: 'Track & Trace Specialist',
          description: 'Real-time shipment monitoring, status updates, exception management',
          us: {
            baseSalary: 42000,
            totalCost: 55000,
            source: 'BLS, Indeed 2025'
          },
          india: {
            baseSalary: 4000,
            totalCost: 6000,
            source: 'AmbitionBox, Glassdoor India 2025'
          }
        }
      ]
    }
  ],

  // ═══════════════════════════════════════
  // METHODOLOGY & METADATA
  // ═══════════════════════════════════════
  meta: {
    exchangeRate: 83,
    usOverheadPercent: 32,
    loopMarkupPercent: 50,
    avgDeploymentWeeks: 3,
    dataLastUpdated: '2026-03',
    methodology: 'Mid-range salaries (3-6 yr experience). US total cost includes 30-35% employer overhead. India total cost includes Loop 50% all-in markup for management, infrastructure, and compliance.',
    sources: [
      'U.S. Bureau of Labor Statistics — Occupational Employment & Wage Statistics (bls.gov)',
      'Glassdoor US & India — Total Pay Estimates',
      'Salary.com & Salary.com India — Base Salary Data',
      'ERI SalaryExpert (US & India) — Employer Salary Surveys',
      'AmbitionBox India — Employee-Reported Salaries',
      'Naukri.com — India Job Market Data',
      'Indeed US & India — Salary Estimates',
      'Robert Half 2025 Technology Salary Guide',
      'NASSCOM — India IT/BPO Industry Reports',
      'TeamLease — India BPO Compensation Benchmarks'
    ]
  }
};

export default salaryData;
