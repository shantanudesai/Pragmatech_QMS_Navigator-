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
    }
    // Note: Additional phases would continue here following the same pattern
    // For brevity, showing first 2 phases as example. The complete implementation
    // would include all 9 phases with their enhanced howTo guidance.
  ]
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ISO9001_PROJECT_DATA;
}
