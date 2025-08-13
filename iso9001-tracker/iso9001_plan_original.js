// ISO 9001 Project Plan Data Structure
// Extracted from the comprehensive project plan document

const ISO9001_PROJECT_DATA = {
  title: "ISO 9001 Implementation Project Plan - Zero to 9001",
  description: "A comprehensive project plan for implementing an ISO 9001 compliant quality management system",
  totalDurationWeeks: 26, // Base timeline for typical implementation
  phases: [
    {
      id: "phase1",
      title: "Project Initiation and Planning",
      duration: 3, // weeks
      description: "Establish project foundation and gather initial requirements",
      sections: [
        {
          id: "section1_1",
          title: "Project Setup",
          objective: "Establish project foundation and gather initial requirements",
          activities: [
            { id: "activity1_1_1", text: "Assess current organizational readiness", completed: false },
            { id: "activity1_1_2", text: "Determine internal vs. external resource requirements", completed: false },
            { id: "activity1_1_3", text: "Establish project budget and timeline", completed: false },
            { id: "activity1_1_4", text: "Define project scope and boundaries", completed: false }
          ]
        },
        {
          id: "section1_2",
          title: "Resource Planning",
          objective: "Plan internal and external resources",
          activities: [
            { id: "activity1_2_1", text: "Identify internal team members for documentation development", completed: false },
            { id: "activity1_2_2", text: "Allocate time for internal audits and system review meetings", completed: false },
            { id: "activity1_2_3", text: "Plan for staff training and awareness programs", completed: false },
            { id: "activity1_2_4", text: "Select qualified ISO 9001 consultant/mentor (if required)", completed: false },
            { id: "activity1_2_5", text: "Negotiate hourly rate or single project fee", completed: false },
            { id: "activity1_2_6", text: "Ensure consultant provides warranty for certification audit issues", completed: false }
          ]
        },
        {
          id: "section1_3",
          title: "Cost Planning",
          objective: "Establish comprehensive project budget",
          activities: [
            { id: "activity1_3_1", text: "Budget external consultant fees (if applicable)", completed: false },
            { id: "activity1_3_2", text: "Calculate internal resource costs", completed: false },
            { id: "activity1_3_3", text: "Plan certification body audit fees ($5,000+ for first year)", completed: false },
            { id: "activity1_3_4", text: "Budget ongoing system maintenance costs", completed: false },
            { id: "activity1_3_5", text: "Plan training and awareness costs", completed: false }
          ]
        }
      ]
    },
    {
      id: "phase2",
      title: "Foundation Setup",
      duration: 3, // weeks
      description: "Establish leadership commitment and organizational framework",
      sections: [
        {
          id: "section2_1",
          title: "Leadership and Commitment",
          objective: "Establish top management involvement and accountability",
          activities: [
            { id: "activity2_1_1", text: "Define top management roles and responsibilities in QMS", completed: false },
            { id: "activity2_1_2", text: "Establish leadership commitment to quality management", completed: false },
            { id: "activity2_1_3", text: "Integrate quality management into overall business strategies", completed: false },
            { id: "activity2_1_4", text: "Set up framework for management reviews", completed: false }
          ]
        },
        {
          id: "section2_2",
          title: "Certification Body Selection",
          objective: "Choose appropriate certification body",
          activities: [
            { id: "activity2_2_1", text: "Research and compare multiple certification bodies", completed: false },
            { id: "activity2_2_2", text: "Verify auditor experience in your industry", completed: false },
            { id: "activity2_2_3", text: "Compare pricing and service offerings", completed: false },
            { id: "activity2_2_4", text: "Book certification body early in the process", completed: false },
            { id: "activity2_2_5", text: "Maintain regular communication about system development progress", completed: false }
          ]
        },
        {
          id: "section2_3",
          title: "Organizational Structure",
          objective: "Define organizational framework for QMS",
          activities: [
            { id: "activity2_3_1", text: "Draft comprehensive organization chart", completed: false },
            { id: "activity2_3_2", text: "Specify full names and correct job titles", completed: false },
            { id: "activity2_3_3", text: "Locate and review existing job/position descriptions", completed: false },
            { id: "activity2_3_4", text: "Establish clear roles and responsibilities", completed: false },
            { id: "activity2_3_5", text: "Define reporting structures", completed: false }
          ]
        }
      ]
    },
    {
      id: "phase3",
      title: "Process Analysis and Documentation",
      duration: 4, // weeks
      description: "Create visual description of business activities and establish document control",
      sections: [
        {
          id: "section3_1",
          title: "Process Mapping",
          objective: "Create visual description of business activities",
          activities: [
            { id: "activity3_1_1", text: "Identify key business processes and their interactions", completed: false },
            { id: "activity3_1_2", text: "Document resource management processes (people and infrastructure)", completed: false },
            { id: "activity3_1_3", text: "Map product/service realization processes", completed: false },
            { id: "activity3_1_4", text: "Define management activities (planning, system review, document control)", completed: false },
            { id: "activity3_1_5", text: "Establish measurement, analysis, and improvement processes", completed: false }
          ]
        },
        {
          id: "section3_2",
          title: "Document Identification and Control",
          objective: "Establish document control framework",
          activities: [
            { id: "activity3_2_1", text: "Identify existing key documents affecting quality", completed: false },
            { id: "activity3_2_2", text: "Categorize external documents (standards, customer-supplied)", completed: false },
            { id: "activity3_2_3", text: "Categorize forms and templates", completed: false },
            { id: "activity3_2_4", text: "Categorize work instructions and procedures", completed: false },
            { id: "activity3_2_5", text: "Assign document controllers for each document", completed: false },
            { id: "activity3_2_6", text: "Identify location of master documents", completed: false },
            { id: "activity3_2_7", text: "Review and establish version control procedures", completed: false }
          ]
        }
      ]
    },
    {
      id: "phase4",
      title: "System Development",
      duration: 6, // weeks
      description: "Create comprehensive QMS documentation and implement processes",
      sections: [
        {
          id: "section4_1",
          title: "Documentation Development",
          objective: "Create comprehensive QMS documentation",
          activities: [
            { id: "activity4_1_1", text: "Develop quality manual (if required)", completed: false },
            { id: "activity4_1_2", text: "Create process procedures", completed: false },
            { id: "activity4_1_3", text: "Establish work instructions", completed: false },
            { id: "activity4_1_4", text: "Design forms and templates", completed: false },
            { id: "activity4_1_5", text: "Implement document control system", completed: false },
            { id: "activity4_1_6", text: "Establish record keeping procedures", completed: false }
          ]
        },
        {
          id: "section4_2",
          title: "Process Implementation",
          objective: "Implement documented processes",
          activities: [
            { id: "activity4_2_1", text: "Deploy new processes across organization", completed: false },
            { id: "activity4_2_2", text: "Conduct process training", completed: false },
            { id: "activity4_2_3", text: "Begin generating system records", completed: false },
            { id: "activity4_2_4", text: "Monitor process effectiveness", completed: false },
            { id: "activity4_2_5", text: "Address initial implementation issues", completed: false }
          ]
        }
      ]
    },
    {
      id: "phase5",
      title: "Training and Awareness",
      duration: 2, // weeks
      description: "Develop organizational awareness and ensure effective system utilization",
      sections: [
        {
          id: "section5_1",
          title: "Staff Training",
          objective: "Develop organizational awareness of QMS requirements",
          activities: [
            { id: "activity5_1_1", text: "Conduct QMS awareness training", completed: false },
            { id: "activity5_1_2", text: "Provide process-specific training", completed: false },
            { id: "activity5_1_3", text: "Train internal auditors", completed: false },
            { id: "activity5_1_4", text: "Establish competency requirements", completed: false },
            { id: "activity5_1_5", text: "Document training records", completed: false }
          ]
        },
        {
          id: "section5_2",
          title: "System Familiarization",
          objective: "Ensure effective system utilization",
          activities: [
            { id: "activity5_2_1", text: "Allow time for staff to become familiar with new processes", completed: false },
            { id: "activity5_2_2", text: "Provide ongoing support and clarification", completed: false },
            { id: "activity5_2_3", text: "Address user questions and concerns", completed: false },
            { id: "activity5_2_4", text: "Refine processes based on user feedback", completed: false }
          ]
        }
      ]
    },
    {
      id: "phase6",
      title: "Internal Audit and Management Review",
      duration: 3, // weeks
      description: "Verify system effectiveness and evaluate performance",
      sections: [
        {
          id: "section6_1",
          title: "Internal Audit Program",
          objective: "Verify system effectiveness and compliance",
          activities: [
            { id: "activity6_1_1", text: "Establish internal audit schedule", completed: false },
            { id: "activity6_1_2", text: "Conduct comprehensive internal audits", completed: false },
            { id: "activity6_1_3", text: "Document audit findings", completed: false },
            { id: "activity6_1_4", text: "Implement corrective actions", completed: false },
            { id: "activity6_1_5", text: "Verify corrective action effectiveness", completed: false }
          ]
        },
        {
          id: "section6_2",
          title: "Management Review",
          objective: "Evaluate system performance and improvement opportunities",
          activities: [
            { id: "activity6_2_1", text: "Conduct management review meetings", completed: false },
            { id: "activity6_2_2", text: "Review system performance data", completed: false },
            { id: "activity6_2_3", text: "Assess customer feedback", completed: false },
            { id: "activity6_2_4", text: "Evaluate audit results", completed: false },
            { id: "activity6_2_5", text: "Identify improvement opportunities", completed: false },
            { id: "activity6_2_6", text: "Make resource allocation decisions", completed: false }
          ]
        }
      ]
    },
    {
      id: "phase7",
      title: "Pre-Certification Activities",
      duration: 2, // weeks
      description: "Ensure system readiness for certification audit",
      sections: [
        {
          id: "section7_1",
          title: "System Validation",
          objective: "Ensure system readiness for certification audit",
          activities: [
            { id: "activity7_1_1", text: "Conduct final internal audit (2-3 months before external audit)", completed: false },
            { id: "activity7_1_2", text: "Resolve all internal audit findings", completed: false },
            { id: "activity7_1_3", text: "Verify adequate system records exist", completed: false },
            { id: "activity7_1_4", text: "Confirm all processes are functioning effectively", completed: false },
            { id: "activity7_1_5", text: "Complete final management review", completed: false }
          ]
        },
        {
          id: "section7_2",
          title: "Certification Preparation",
          objective: "Prepare for external certification audit",
          activities: [
            { id: "activity7_2_1", text: "Coordinate with certification body", completed: false },
            { id: "activity7_2_2", text: "Prepare documentation for auditor review", completed: false },
            { id: "activity7_2_3", text: "Schedule audit dates", completed: false },
            { id: "activity7_2_4", text: "Identify audit participants", completed: false },
            { id: "activity7_2_5", text: "Prepare facilities for audit", completed: false }
          ]
        }
      ]
    },
    {
      id: "phase8",
      title: "Certification Audit",
      duration: 2, // weeks
      description: "Complete the formal certification process",
      sections: [
        {
          id: "section8_1",
          title: "Stage 1 Audit (Documentation Audit)",
          objective: "Verify documentation adequacy",
          activities: [
            { id: "activity8_1_1", text: "Present QMS documentation to auditor", completed: false },
            { id: "activity8_1_2", text: "Address any documentation gaps", completed: false },
            { id: "activity8_1_3", text: "Resolve Stage 1 findings", completed: false },
            { id: "activity8_1_4", text: "Confirm readiness for Stage 2 audit", completed: false }
          ]
        },
        {
          id: "section8_2",
          title: "Stage 2 Audit (Certification Audit)",
          objective: "Demonstrate system effectiveness",
          activities: [
            { id: "activity8_2_1", text: "Participate in on-site audit", completed: false },
            { id: "activity8_2_2", text: "Provide evidence of system implementation", completed: false },
            { id: "activity8_2_3", text: "Address auditor questions and observations", completed: false },
            { id: "activity8_2_4", text: "Resolve any non-conformances", completed: false },
            { id: "activity8_2_5", text: "Receive certification decision", completed: false }
          ]
        }
      ]
    },
    {
      id: "phase9",
      title: "Post-Certification Maintenance",
      duration: 0, // ongoing
      description: "Maintain certification status and prepare for re-certification",
      sections: [
        {
          id: "section9_1",
          title: "Ongoing Compliance",
          objective: "Maintain certification status",
          activities: [
            { id: "activity9_1_1", text: "Conduct regular internal audits", completed: false },
            { id: "activity9_1_2", text: "Maintain management review schedule", completed: false },
            { id: "activity9_1_3", text: "Prepare for surveillance audits (every 6-12 months)", completed: false },
            { id: "activity9_1_4", text: "Implement continuous improvement initiatives", completed: false },
            { id: "activity9_1_5", text: "Maintain system records", completed: false }
          ]
        },
        {
          id: "section9_2",
          title: "Re-certification Planning",
          objective: "Prepare for 3-year re-certification cycle",
          activities: [
            { id: "activity9_2_1", text: "Plan for major re-certification audit (after 3 years)", completed: false },
            { id: "activity9_2_2", text: "Review and update system documentation", completed: false },
            { id: "activity9_2_3", text: "Assess system effectiveness", completed: false },
            { id: "activity9_2_4", text: "Prepare for renewed certification fees", completed: false }
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