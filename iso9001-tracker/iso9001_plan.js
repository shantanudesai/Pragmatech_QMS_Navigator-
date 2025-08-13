// Enhanced ISO 9001/IATF 16949 Project Plan Data Structure
// Comprehensive project plan with detailed howTo guidance for automotive suppliers
// Updated with IATF 16949 requirements and practical implementation guidance

const ISO9001_PROJECT_DATA = {
  title: "ISO 9001/IATF 16949 Implementation Project Plan - Zero to 9001",
  description: "A comprehensive project plan for implementing an ISO 9001/IATF 16949 compliant quality management system",
  totalDurationWeeks: 26,
  phases: [
    {
      id: "phase1",
      title: "Project Initiation and Planning",
      duration: 3,
      description: "Establish project foundation and gather initial requirements",
      sections: [
        {
          id: "section1_1",
          title: "Project Setup",
          objective: "Establish project foundation and gather initial requirements",
          activities: [
            {
              id: "activity1_1_1",
              text: "Assess current organizational readiness",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 4.1, 4.2, 4.4, 7.1, 7.2, 7.5; IATF – 7.2.3, 7.2.4 & CSRs",
                detailedGuide: "Conduct clause-by-clause gap analysis with ISO/IATF checklists, management interviews, process mapping, shop-floor observations, document review, evidence collection, and prepare a readiness report. Include separate identification of ISO vs IATF gaps.",
                example: "Cross-functional team interviews top management, maps processes for ACC, LPC, assembly; readiness scored at 30%, triggering APQP/FMEA training."
              }
            },
            {
              id: "activity1_1_2",
              text: "Determine internal vs. external resource requirements",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 7.1.1, 7.1.2, 7.1.6; IATF – 7.1.5.1.1, 7.2.1",
                detailedGuide: "Create a resource matrix listing all QMS roles, current competence, and gaps; decide whether gaps will be closed by internal training or contracting external providers; document decisions with management approval.",
                example: "Plant identifies need for two certified IATF internal auditors and hires an external SPC/MSA trainer; outsources calibration to external ISO 17025 accredited provider."
              }
            },
            {
              id: "activity1_1_3",
              text: "Establish project budget and timeline",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 7.1.1, 6.2",
                detailedGuide: "Develop a WBS-based cost sheet for consultants, CB fees, training, materials, software. Link costs to Gantt chart milestones to ensure funding is aligned with implementation phases.",
                example: "Budget ₹6,00,000 across consultant fees, training, and document-control software; Gantt chart visible in project control room."
              }
            },
            {
              id: "activity1_1_4",
              text: "Define project scope and boundaries",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 4.3; IATF – 4.3.1",
                detailedGuide: "Draft a scope statement covering relevant products, services, and sites; justify any exclusions; publish in QMS manual.",
                example: "Scope: 'Design and manufacture of automotive wiring harnesses at Aurangabad plant, covering purchasing, production, testing, packaging, and dispatch'. No exclusions claimed."
              }
            }
          ]
        },
        {
          id: "section1_2",
          title: "Resource Planning",
          objective: "Plan internal and external resources",
          activities: [
            {
              id: "activity1_2_1",
              text: "Identify internal team members for documentation development",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 7.2, 7.3, 7.5",
                detailedGuide: "Assign each document to a process owner; train on document control procedures; set deadlines for drafts according to project plan.",
                example: "Quality Engineer assigned for 'Control of NC Product WI'; Production Supervisor for 'ACC Operation WI'."
              }
            },
            {
              id: "activity1_2_2",
              text: "Allocate time for internal audits and system review meetings",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 9.2, 9.3; IATF – 9.2.2.3",
                detailedGuide: "Create a 12-month audit calendar covering system, process, and product audits; reserve time for closing meetings; post on internal boards.",
                example: "ACC process audit planned in Week 14; product audit scheduled Week 16 for sample TVS harness."
              }
            },
            {
              id: "activity1_2_3",
              text: "Plan for staff training and awareness programs",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 7.2; IATF – 7.3.2",
                detailedGuide: "Create a training needs matrix; schedule awareness sessions per shift; keep attendance as training records.",
                example: "Week 5: IATF core tools workshop; Week 8: shift toolbox talk on Defect Tag process."
              }
            },
            {
              id: "activity1_2_4",
              text: "Select qualified ISO 9001 consultant/mentor (if required)",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 8.4.1; IATF – 7.1.1.1",
                detailedGuide: "Select consultants with automotive QMS experience; verify references; evaluate against ISO 10019 guidance.",
                example: "Shortlist of three consultants evaluated; selection made for 12-day APQP and PPAP coaching package."
              }
            },
            {
              id: "activity1_2_5",
              text: "Negotiate hourly rate or single project fee",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 8.4.3",
                detailedGuide: "Negotiate clear SoW, deliverables, milestones; compare hourly vs lump sum; sign service agreement.",
                example: "Fixed ₹4,00,000 contract signed covering gap audit, training, PPAP review, and pre-audit."
              }
            },
            {
              id: "activity1_2_6",
              text: "Ensure consultant provides warranty for certification audit issues",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 8.4.2",
                detailedGuide: "Include contract clause binding consultant to close out NCRs from certification audit without extra fee within agreed days.",
                example: "Agreement stipulates remote support for NCR closures within 5 working days."
              }
            }
          ]
        },
        {
          id: "section1_3",
          title: "Cost Planning",
          objective: "Establish comprehensive project budget",
          activities: [
            {
              id: "activity1_3_1",
              text: "Budget external consultant fees (if applicable)",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 7.1.1",
                detailedGuide: "Include consultant fee, travel, accommodation, contingency; approve budget via MR.",
                example: "Consultant cost ₹4L + ₹20k travel; coded under 'QMS-Capex'."
              }
            },
            {
              id: "activity1_3_2",
              text: "Calculate internal resource costs",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 7.1.1",
                detailedGuide: "Estimate manhours per role × loaded rate; present in management review.",
                example: "600h × ₹800/h = ₹4.8L; logged as opportunity cost."
              }
            },
            {
              id: "activity1_3_3",
              text: "Plan certification body audit fees ($5,000+ for first year)",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 7.1.1",
                detailedGuide: "Get three quotes from CBs; include Stage 1, Stage 2, and surveillance audits.",
                example: "Selected CB: ₹3L for Stage 1&2, ₹1L/year for surveillance."
              }
            },
            {
              id: "activity1_3_4",
              text: "Budget ongoing system maintenance costs",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 10.3",
                detailedGuide: "Plan for annual training, audit software, calibration; include in yearly OPEX.",
                example: "₹60k/year for SaaS + ₹1L/year calibration contract."
              }
            },
            {
              id: "activity1_3_5",
              text: "Plan training and awareness costs",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 7.2; IATF – 7.2.3",
                detailedGuide: "Budget auditor training, IATF core tools, awareness OT costs; include in HR budget.",
                example: "₹1.2L allocated for CQI-14 SPC course and awareness OT."
              }
            }
          ]
        }
      ]
    },
    {
      id: "phase2",
      title: "Foundation Setup",
      duration: 3,
      description: "Establish leadership commitment and organizational framework",
      sections: [
        {
          id: "section2_1",
          title: "Leadership and Commitment",
          objective: "Establish top management involvement and accountability",
          activities: [
            {
              id: "activity2_1_1",
              text: "Define top management roles and responsibilities in QMS",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 5.3; IATF – 5.3.1",
                detailedGuide: "Draft a responsibility and authority matrix mapping each leadership role to relevant clauses. Approve in management review, communicate across the organisation.",
                example: "Matrix shows Operations Head responsible for product conformity and KPI review; Quality Head owns customer communication and audit contact."
              }
            },
            {
              id: "activity2_1_2",
              text: "Establish leadership commitment to quality management",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 5.1.1; IATF – 5.1.1.1",
                detailedGuide: "Develop a formal QMS policy, signed by leadership. Display and communicate to all employees; include in induction.",
                example: "Policy adopted with focus on zero defects and on-time delivery."
              }
            },
            {
              id: "activity2_1_3",
              text: "Integrate quality management into overall business strategies",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 5.1.1c",
                detailedGuide: "Embed QMS KPIs into annual business objectives, track them in monthly reviews.",
                example: "Business plan includes customer PPM and OTD targets aligned to OEM CSRs."
              }
            },
            {
              id: "activity2_1_4",
              text: "Set up framework for management reviews",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 9.3; IATF – 9.3.2.1",
                detailedGuide: "Create Management Review Procedure including frequency, participants, inputs, outputs, and action follow-up.",
                example: "Quarterly MR agenda covers KPI trends, CSR compliance, audit findings."
              }
            },
            {
              id: "activity2_1_5",
              text: "Conduct Organizational Risk & Opportunity Review",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 6.1; IATF – 6.1.2.3",
                detailedGuide: "Lead a workshop to identify organisational-level risks and opportunities (supply chain, competition, economic changes). Record in a strategic risk register; feed into MR and quality objectives.",
                example: "Identified risk of ACC machine obsolescence; opportunity in EV harness diversification."
              }
            }
          ]
        },
        {
          id: "section2_2",
          title: "Certification Body Selection",
          objective: "Choose appropriate certification body",
          activities: [
            {
              id: "activity2_2_1",
              text: "Research and compare multiple certification bodies",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 8.4.1",
                detailedGuide: "Contact at least three IATF-approved CBs; compare audit days, cost, industry experience.",
                example: "CB-B chosen for automotive harness experience."
              }
            },
            {
              id: "activity2_2_2",
              text: "Verify auditor experience in your industry",
              completed: false,
              howTo: {
                isoClause: "IATF Rules 5.1",
                detailedGuide: "Request CVs, confirm recent audits in your product segment.",
                example: "Auditor has two wiring harness audits in last 3 years."
              }
            },
            {
              id: "activity2_2_3",
              text: "Compare pricing and service offerings",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 7.1.1",
                detailedGuide: "Evaluate total cost including Stage 1, 2, surveillance, travel; weigh against included services like gap audits.",
                example: "Selected CB for mid-tier price, includes pre-audit readiness review."
              }
            },
            {
              id: "activity2_2_4",
              text: "Book certification body early in the process",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 8.4.3",
                detailedGuide: "Secure Stage 1/2 dates early to avoid delays; communicate to process owners.",
                example: "Stage 1 booked for December, announced in project meeting."
              }
            },
            {
              id: "activity2_2_5",
              text: "Maintain regular communication about system development progress",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 8.4.2",
                detailedGuide: "Update CB monthly on project progress; document correspondence for audit evidence.",
                example: "CB updated mid-project with documentation status and training completion."
              }
            }
          ]
        },
        {
          id: "section2_3",
          title: "Organizational Structure",
          objective: "Define organizational framework for QMS",
          activities: [
            {
              id: "activity2_3_1",
              text: "Draft comprehensive organization chart",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 5.3",
                detailedGuide: "Visually show reporting lines and QMS authority; review annually.",
                example: "QA Head reports to MD independently of Operations."
              }
            },
            {
              id: "activity2_3_2",
              text: "Specify full names and correct job titles",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 7.1.2",
                detailedGuide: "Ensure consistency of titles across records, JDs, procedures.",
                example: "Standardised 'Senior Cable-Crimping Operator'."
              }
            },
            {
              id: "activity2_3_3",
              text: "Locate and review existing job/position descriptions",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 7.2",
                detailedGuide: "Check all JDs cover QMS responsibilities; update where lacking.",
                example: "QA inspector JD updated to include NCR reporting accountability."
              }
            },
            {
              id: "activity2_3_4",
              text: "Establish clear roles and responsibilities",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 5.3",
                detailedGuide: "Develop RACI for all key processes; post on intranet.",
                example: "Document Control RACI: Owner–QA Engineer, Approver–QA Manager."
              }
            },
            {
              id: "activity2_3_5",
              text: "Define reporting structures",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 5.3",
                detailedGuide: "Map escalation path for quality issues to ensure timely decisions.",
                example: "Operator → Line Leader → QA → Plant Head escalation posted in lines."
              }
            }
          ]
        }
      ]
    },
    {
      id: "phase3",
      title: "Process Analysis and Documentation",
      duration: 4,
      description: "Create visual description of business activities and establish document control",
      sections: [
        {
          id: "section3_1",
          title: "Process Mapping",
          objective: "Create visual description of business activities",
          activities: [
            {
              id: "activity3_1_1",
              text: "Identify key business processes and their interactions",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 4.4; IATF – 4.4.1",
                detailedGuide: "Brainstorm all processes, group into core/support/management, define inputs/outputs, map interdependencies.",
                example: "Core: ACC, LPC, Assembly, Test; Support: HR, Maintenance; Management: MR, Doc Control."
              }
            },
            {
              id: "activity3_1_2",
              text: "Document resource management processes (people and infrastructure)",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 7.1.2, 7.1.3, 7.1.4; IATF – 7.1.1.1",
                detailedGuide: "Document HR lifecycle, maintenance, calibration, facility upkeep; assign process owners.",
                example: "Calibration process documented with frequency, provider, record retention."
              }
            },
            {
              id: "activity3_1_3",
              text: "Map product/service realization processes",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 8.5; IATF – 8.5.1",
                detailedGuide: "Map from customer PO to delivery; include verification steps and acceptance criteria.",
                example: "Harness build: PO → RM Inspection → ACC → LPC → Assembly → Test → Pack."
              }
            },
            {
              id: "activity3_1_4",
              text: "Define management activities (planning, system review, document control)",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 6.2, 7.5, 9.3",
                detailedGuide: "Map MR, doc control, CAPA processes including triggers, inputs, outputs, frequency.",
                example: "MR process includes agenda template, action tracking, outputs."
              }
            },
            {
              id: "activity3_1_5",
              text: "Establish measurement, analysis, and improvement processes",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 9.1, 10.3; IATF – 9.1.2",
                detailedGuide: "Identify KPIs, data sources, analysis methods; schedule reviews; link to CI projects.",
                example: "SPC on crimp force data analysed monthly."
              }
            }
          ]
        },
        {
          id: "section3_2",
          title: "Document Identification and Control",
          objective: "Establish document control framework",
          activities: [
            {
              id: "activity3_2_1",
              text: "Identify existing key documents affecting quality",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 7.5.1",
                detailedGuide: "Inventory procedures, WIs, forms; create document register with owner and revision.",
                example: "Doc register entry QMS-PROC-01: RM Inspection Proc."
              }
            },
            {
              id: "activity3_2_2",
              text: "Categorize external documents (standards, customer-supplied)",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 7.5.3",
                detailedGuide: "List standards, CSRs; define control method for each.",
                example: "CSR file stored in controlled folder with revision control."
              }
            },
            {
              id: "activity3_2_3",
              text: "Categorize forms and templates",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 7.5.2",
                detailedGuide: "Standardise form design; assign IDs; control via document register.",
                example: "QMS-F05 Audit Checklist form."
              }
            },
            {
              id: "activity3_2_4",
              text: "Categorize work instructions and procedures",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 7.5.2",
                detailedGuide: "Separate higher-level procedures from WIs; assign review cycle.",
                example: "Proc QMS-PROC-04 'Control of NC Product', WI QMS-WI-04.1."
              }
            },
            {
              id: "activity3_2_5",
              text: "Assign document controllers for each document",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 7.5.3",
                detailedGuide: "Appoint trained doc controllers per dept, record in register.",
                example: "QA clerk controls inspection WIs."
              }
            },
            {
              id: "activity3_2_6",
              text: "Identify location of master documents",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 7.5.3.2",
                detailedGuide: "Central electronic repository, read-only for general access.",
                example: "Master docs in //QMS/Docs/Master."
              }
            },
            {
              id: "activity3_2_7",
              text: "Review and establish version control procedures",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 7.5.3.2",
                detailedGuide: "Define versioning rules, change request form, approval workflow.",
                example: "Version major.minor; stored with revision history table."
              }
            },
            {
              id: "activity3_2_8",
              text: "Compile and Systematize all Customer-Specific Requirements",
              completed: false,
              howTo: {
                isoClause: "IATF 16949 – 4.4.1.2",
                detailedGuide: "Create CSR Matrix mapping each CSR to internal QMS control (procedure, WI, process). Update with CSR changes, review in MR.",
                example: "Matrix entry: TVS CSR 'Retention force' requirement linked to Circuit Test WI."
              }
            }
          ]
        }
      ]
    },
    {
      id: "phase4",
      title: "System Development",
      duration: 6,
      description: "Create comprehensive QMS documentation and implement processes",
      sections: [
        {
          id: "section4_1",
          title: "Documentation Development",
          objective: "Create comprehensive QMS documentation",
          activities: [
            {
              id: "activity4_1_1",
              text: "Develop quality manual (if required)",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 4.4, 5.2, 7.5.1",
                detailedGuide: "Draft manual structure including scope, policy, QMS processes, interactions, and references to other documents. Review by top management and issue as controlled document.",
                example: "Quality manual includes wiring harness process flow map and links to all procedures."
              }
            },
            {
              id: "activity4_1_2",
              text: "Create process procedures",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 8.1, 8.5; IATF – 8.5.1",
                detailedGuide: "For each core process, document purpose, scope, responsibilities, inputs, outputs, criteria, and related forms. Approve before implementation.",
                example: "Procedure for ACC line details set-up, operation, inspection, and calibration requirements."
              }
            },
            {
              id: "activity4_1_3",
              text: "Establish work instructions",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 8.5.1d",
                detailedGuide: "Write step-by-step WIs for shop floor activities with diagrams, safety notes, and references to control plans. Post at point-of-use.",
                example: "LPC WI shows correct sequence for inserting seals before crimping."
              }
            },
            {
              id: "activity4_1_4",
              text: "Design forms and templates",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 7.5.2",
                detailedGuide: "Standardize layout of all forms with title, ID, revision, and approval fields. Add to controlled set.",
                example: "Calibration record form with mandatory equipment ID, calibration date, and next due date."
              }
            },
            {
              id: "activity4_1_5",
              text: "Implement document control system",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 7.5.3",
                detailedGuide: "Configure storage with folders per process, access control, versioning. Train document controllers.",
                example: "Central QMS drive allows read-only user access; past versions auto-archived."
              }
            },
            {
              id: "activity4_1_6",
              text: "Establish record keeping procedures",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 7.5.3.2",
                detailedGuide: "Define retention periods by record type. Set up archive, control disposal, train staff.",
                example: "Inspection reports retained 3 years in locked file room."
              }
            }
          ]
        },
        {
          id: "section4_2",
          title: "Process Implementation",
          objective: "Implement documented processes",
          activities: [
            {
              id: "activity4_2_1",
              text: "Deploy new processes across organization",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 8.1, 8.5.1",
                detailedGuide: "Announce go-live; train affected staff; place WIs at workstations; monitor implementation.",
                example: "ACC go-live; SOPs and WIs posted; supervisors monitor first-run compliance."
              }
            },
            {
              id: "activity4_2_2",
              text: "Conduct process training",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 7.2, 7.3",
                detailedGuide: "Use SOPs/WIs as teaching aids; run practical demo; assess competence using checklists.",
                example: "Hands-on assembly line training with skill sign-off sheet."
              }
            },
            {
              id: "activity4_2_3",
              text: "Begin generating system records",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 7.5.3.1",
                detailedGuide: "Ensure forms are filled during operations; audit daily for completeness during pilot period.",
                example: "100% of circuit test logs completed during week 1 pilot."
              }
            },
            {
              id: "activity4_2_4",
              text: "Monitor process effectiveness",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 9.1.3",
                detailedGuide: "Track KPIs; investigate dips >10% from baseline; open CAPA if target missed.",
                example: "Yield on sub-assembly dropped 8%—cause traced to worn applicator."
              }
            },
            {
              id: "activity4_2_5",
              text: "Address initial implementation issues",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 10.2",
                detailedGuide: "Log start-up issues; assign corrective actions; verify closure.",
                example: "Missing torque values in test WI corrected within 48 hrs."
              }
            },
            {
              id: "activity4_2_6",
              text: "Develop and Test Contingency Plans",
              completed: false,
              howTo: {
                isoClause: "IATF 16949 – 6.1.2.3",
                detailedGuide: "List potential disruptions (equipment breakdown, supply failure). Write contingency instructions including roles, contact lists, response criteria. Conduct simulation for at least one high-risk event; refine plans.",
                example: "Simulated power outage—switch to generator; maintain ACC production at 70% capacity."
              }
            }
          ]
        }
      ]
    },
    {
      id: "phase5",
      title: "Training and Awareness",
      duration: 2,
      description: "Develop organizational awareness and ensure effective system utilization",
      sections: [
        {
          id: "section5_1",
          title: "Staff Training",
          objective: "Develop organizational awareness of QMS requirements",
          activities: [
            {
              id: "activity5_1_1",
              text: "Conduct QMS awareness training",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 7.3",
                detailedGuide: "Create awareness plan, deliver to all shifts; include QMS basics, policy, objectives.",
                example: "Two-shift induction with quiz; avg score 85%."
              }
            },
            {
              id: "activity5_1_2",
              text: "Provide process-specific training",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 7.2",
                detailedGuide: "Train operators on specific SOPs/WIs with practical demo.",
                example: "Packing WI training on barcode label application."
              }
            },
            {
              id: "activity5_1_3",
              text: "Train internal auditors",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 9.2; IATF – 9.2.2.3",
                detailedGuide: "Train nominated staff via certified internal auditor course.",
                example: "Two staff certified in CQI-14."
              }
            },
            {
              id: "activity5_1_4",
              text: "Establish competency requirements",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 7.2",
                detailedGuide: "Create competency matrix; update annually.",
                example: "Matrix updated with soldering and crimping skill needs."
              }
            },
            {
              id: "activity5_1_5",
              text: "Document training records",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 7.5.3.2",
                detailedGuide: "Use controlled forms, store records in HR and QMS archive.",
                example: "Records stored digitally in /Training/2025."
              }
            }
          ]
        },
        {
          id: "section5_2",
          title: "System Familiarization",
          objective: "Ensure effective system utilization",
          activities: [
            {
              id: "activity5_2_1",
              text: "Allow time for staff to become familiar with new processes",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 8.1",
                detailedGuide: "Observe and coach during first week; log issues.",
                example: "Operators shadowed for first 5 days post-go-live."
              }
            },
            {
              id: "activity5_2_2",
              text: "Provide ongoing support and clarification",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 7.4",
                detailedGuide: "QMS helpdesk via email/WhatsApp; 24h response target.",
                example: "Resolved 10 queries in week two within SLA."
              }
            },
            {
              id: "activity5_2_3",
              text: "Address user questions and concerns",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 9.1.3",
                detailedGuide: "Weekly drop-in sessions; record and evaluate improvement suggestions.",
                example: "Updated crimp WI with clearer diagrams."
              }
            },
            {
              id: "activity5_2_4",
              text: "Refine processes based on user feedback",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 10.3",
                detailedGuide: "Evaluate monthly, prioritize improvements, apply via change control.",
                example: "Color-coded bin system added for cable sorting."
              }
            }
          ]
        }
      ]
    },
    {
      id: "phase6",
      title: "Internal Audit and Management Review",
      duration: 3,
      description: "Verify system effectiveness and evaluate performance",
      sections: [
        {
          id: "section6_1",
          title: "Internal Audit Program",
          objective: "Verify system effectiveness and compliance",
          activities: [
            {
              id: "activity6_1_1",
              text: "Establish internal audit schedule",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 9.2.2",
                detailedGuide: "Create annual audit plan for all processes; assign auditors and dates.",
                example: "Audits planned for ACC, LPC, and Assembly lines."
              }
            },
            {
              id: "activity6_1_2",
              text: "Conduct comprehensive internal audits",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 9.2.2",
                detailedGuide: "Audit against process SOPs/WIs, ISO clauses; log NCRs.",
                example: "NCR for missing calibration record raised."
              }
            },
            {
              id: "activity6_1_3",
              text: "Document audit findings",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 9.2.2e",
                detailedGuide: "Use audit report form to log findings, evidence, clause ref.",
                example: "Report shows 1 major NCR."
              }
            },
            {
              id: "activity6_1_4",
              text: "Implement corrective actions",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 10.2",
                detailedGuide: "Root cause, corrective action, verification; record in CAPA log.",
                example: "Calibration NCR closed with new schedule and reminders."
              }
            },
            {
              id: "activity6_1_5",
              text: "Verify corrective action effectiveness",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 10.2d",
                detailedGuide: "Follow-up check, confirm sustained compliance; close NCR.",
                example: "Follow-up audit showed records now maintained."
              }
            }
          ]
        },
        {
          id: "section6_2",
          title: "Management Review",
          objective: "Evaluate system performance and improvement opportunities",
          activities: [
            {
              id: "activity6_2_1",
              text: "Conduct management review meetings",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 9.3.1",
                detailedGuide: "Hold quarterly MR; follow standard agenda covering all inputs.",
                example: "Q2 MR included CSR changes and KPI review."
              }
            },
            {
              id: "activity6_2_2",
              text: "Review system performance data",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 9.3.2c",
                detailedGuide: "Analyze KPI trends, customer complaints, CAPA closure rate.",
                example: "PPM reduced from 150 to 80."
              }
            },
            {
              id: "activity6_2_3",
              text: "Assess customer feedback",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 9.3.2c1",
                detailedGuide: "Summarize complaint log, surveys; highlight major issues.",
                example: "Complaint on connector alignment resolved with new fixture."
              }
            },
            {
              id: "activity6_2_4",
              text: "Evaluate audit results",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 9.3.2c6",
                detailedGuide: "Review NCR counts, open vs closed, trends; reallocate resources if needed.",
                example: "Extra QA resource assigned to close audit backlog."
              }
            },
            {
              id: "activity6_2_5",
              text: "Identify improvement opportunities",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 9.3.2f; 10.3",
                detailedGuide: "Prioritize proposed improvements based on ROI and feasibility.",
                example: "Proposal to automate wire cutting approved."
              }
            },
            {
              id: "activity6_2_6",
              text: "Make resource allocation decisions",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 6.2; 7.1",
                detailedGuide: "Review budgets; approve hires, training, or capital investment.",
                example: "Approved new SPC software licence."
              }
            }
          ]
        }
      ]
    },
    {
      id: "phase7",
      title: "Pre-Certification Activities",
      duration: 2,
      description: "Ensure system readiness for certification audit",
      sections: [
        {
          id: "section7_1",
          title: "System Validation",
          objective: "Ensure system readiness for certification audit",
          activities: [
            {
              id: "activity7_1_1",
              text: "Conduct final internal audit (2-3 months before external audit)",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 9.2",
                detailedGuide: "Full QMS audit; ensure all clauses and processes audited; close NCRs.",
                example: "Two NCRs closed before CB audit."
              }
            },
            {
              id: "activity7_1_2",
              text: "Resolve all internal audit findings",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 10.2",
                detailedGuide: "Implement corrective actions; verify closure and effectiveness.",
                example: "All calibration NCRs resolved with updated schedule."
              }
            },
            {
              id: "activity7_1_3",
              text: "Verify adequate system records exist",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 7.5.3.2; 8.6",
                detailedGuide: "Check that all required records are available, legible, and properly retained.",
                example: "Training records for all operators updated and complete."
              }
            },
            {
              id: "activity7_1_4",
              text: "Confirm all processes are functioning effectively",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 9.1.3",
                detailedGuide: "Validate process KPIs meet targets; address any shortfalls.",
                example: "Circuit test yield maintained at 99% average."
              }
            },
            {
              id: "activity7_1_5",
              text: "Complete final management review",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 9.3",
                detailedGuide: "Conduct pre-audit MR covering system readiness, resource adequacy, performance review.",
                example: "MR confirms system ready for Stage 1 audit."
              }
            }
          ]
        },
        {
          id: "section7_2",
          title: "Certification Preparation",
          objective: "Prepare for external certification audit",
          activities: [
            {
              id: "activity7_2_1",
              text: "Coordinate with certification body",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 8.4.2",
                detailedGuide: "Confirm audit dates, scope, auditor assignment; submit pre-audit documentation.",
                example: "CB confirmed Stage 1 for November, Stage 2 for December."
              }
            },
            {
              id: "activity7_2_2",
              text: "Prepare documentation for auditor review",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 7.5.3",
                detailedGuide: "Organize QMS manual, procedures, records in logical order; provide electronic access.",
                example: "Documentation package sent to auditor 2 weeks before Stage 1."
              }
            },
            {
              id: "activity7_2_3",
              text: "Schedule audit dates",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 8.4.3",
                detailedGuide: "Book Stage 1 and Stage 2 dates; ensure key personnel availability.",
                example: "Both audit dates confirmed with all department heads present."
              }
            },
            {
              id: "activity7_2_4",
              text: "Identify audit participants",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 5.1.1",
                detailedGuide: "Designate management representative, process owners, and escorts for audit.",
                example: "QA Manager as MR contact; department heads as process owners."
              }
            },
            {
              id: "activity7_2_5",
              text: "Prepare facilities for audit",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 7.1.4",
                detailedGuide: "Arrange meeting rooms, equipment access, safety briefings, visitor protocols.",
                example: "Conference room booked; safety induction prepared for auditor."
              }
            }
          ]
        }
      ]
    },
    {
      id: "phase8",
      title: "Certification Audit",
      duration: 2,
      description: "Complete the formal certification process",
      sections: [
        {
          id: "section8_1",
          title: "Stage 1 Audit (Documentation Audit)",
          objective: "Verify documentation adequacy",
          activities: [
            {
              id: "activity8_1_1",
              text: "Present QMS documentation to auditor",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 7.5.1",
                detailedGuide: "Provide organized access to all QMS documents; guide auditor through system structure.",
                example: "Quality manual presented with cross-references to all procedures."
              }
            },
            {
              id: "activity8_1_2",
              text: "Address any documentation gaps",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 10.2",
                detailedGuide: "Record auditor observations; implement corrections before Stage 2.",
                example: "Missing control plan updated within 2 weeks of Stage 1."
              }
            },
            {
              id: "activity8_1_3",
              text: "Resolve Stage 1 findings",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 10.2",
                detailedGuide: "Address all Stage 1 NCRs; provide evidence of closure to CB.",
                example: "Document control procedure updated per auditor feedback."
              }
            },
            {
              id: "activity8_1_4",
              text: "Confirm readiness for Stage 2 audit",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 8.4.2",
                detailedGuide: "Get CB confirmation that Stage 1 issues are resolved; proceed to Stage 2.",
                example: "CB confirmed readiness after reviewing updated procedures."
              }
            }
          ]
        },
        {
          id: "section8_2",
          title: "Stage 2 Audit (Certification Audit)",
          objective: "Demonstrate system effectiveness",
          activities: [
            {
              id: "activity8_2_1",
              text: "Participate in on-site audit",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 9.2",
                detailedGuide: "Escort auditor through facilities; demonstrate process implementation; answer questions.",
                example: "ACC line audit showed effective implementation of control plan."
              }
            },
            {
              id: "activity8_2_2",
              text: "Provide evidence of system implementation",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 7.5.3.2",
                detailedGuide: "Show records, KPI trends, training evidence; demonstrate process effectiveness.",
                example: "SPC charts showed process under control for 3 months."
              }
            },
            {
              id: "activity8_2_3",
              text: "Address auditor questions and observations",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 7.4",
                detailedGuide: "Respond to auditor queries honestly; provide additional evidence if requested.",
                example: "Additional calibration records provided upon auditor request."
              }
            },
            {
              id: "activity8_2_4",
              text: "Resolve any non-conformances",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 10.2",
                detailedGuide: "Address NCRs immediately if possible; provide action plan for complex issues.",
                example: "Minor NCR on record keeping closed during audit week."
              }
            },
            {
              id: "activity8_2_5",
              text: "Receive certification decision",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 8.4.2",
                detailedGuide: "Attend closing meeting; receive audit report and certification recommendation.",
                example: "Certification recommended subject to minor NCR closure."
              }
            }
          ]
        }
      ]
    },
    {
      id: "phase9",
      title: "Post-Certification Maintenance",
      duration: 0,
      description: "Maintain certification status and prepare for re-certification",
      sections: [
        {
          id: "section9_1",
          title: "Ongoing Compliance",
          objective: "Maintain certification status",
          activities: [
            {
              id: "activity9_1_1",
              text: "Conduct regular internal audits",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 9.2",
                detailedGuide: "Maintain annual audit schedule; ensure all processes audited; track trends.",
                example: "Quarterly process audits with annual system audit."
              }
            },
            {
              id: "activity9_1_2",
              text: "Maintain management review schedule",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 9.3",
                detailedGuide: "Continue quarterly MRs; review KPIs, audit results, improvement opportunities.",
                example: "Q1 MR reviewed customer complaints and approved new training."
              }
            },
            {
              id: "activity9_1_3",
              text: "Prepare for surveillance audits (every 6-12 months)",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 8.4.2",
                detailedGuide: "Maintain readiness for CB surveillance; keep records current; address any system changes.",
                example: "Surveillance audit covered new product introduction process."
              }
            },
            {
              id: "activity9_1_4",
              text: "Implement continuous improvement initiatives",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 10.3",
                detailedGuide: "Identify and implement improvements; track effectiveness; share learnings.",
                example: "Implemented automated crimp force monitoring system."
              }
            },
            {
              id: "activity9_1_5",
              text: "Maintain system records",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 7.5.3.2",
                detailedGuide: "Continue record keeping per retention schedule; ensure accessibility for audits.",
                example: "Digital archive maintained with 3-year retention for quality records."
              }
            }
          ]
        },
        {
          id: "section9_2",
          title: "Re-certification Planning",
          objective: "Prepare for 3-year re-certification cycle",
          activities: [
            {
              id: "activity9_2_1",
              text: "Plan for major re-certification audit (after 3 years)",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 8.4.1",
                detailedGuide: "Schedule re-certification 6 months before certificate expires; prepare as new implementation.",
                example: "Re-certification planned for Year 3, Q4."
              }
            },
            {
              id: "activity9_2_2",
              text: "Review and update system documentation",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 7.5.3.2",
                detailedGuide: "Conduct comprehensive document review; update based on 3 years of operation.",
                example: "Procedures updated to reflect process improvements and organizational changes."
              }
            },
            {
              id: "activity9_2_3",
              text: "Assess system effectiveness",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 9.3",
                detailedGuide: "Evaluate 3-year KPI trends; assess achievement of quality objectives.",
                example: "Customer satisfaction improved from 85% to 95% over 3 years."
              }
            },
            {
              id: "activity9_2_4",
              text: "Prepare for renewed certification fees",
              completed: false,
              howTo: {
                isoClause: "ISO 9001 – 7.1.1",
                detailedGuide: "Budget for re-certification costs; compare CB options if considering change.",
                example: "Re-certification budget approved in annual business plan."
              }
            }
          ]
        }
      ]
    }
  ]
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ISO9001_PROJECT_DATA;
}