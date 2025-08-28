/**
 * ISO 9001/IATF 16949 Document Checklist Data and Management
 * Comprehensive list of documents required for ISO 9001:2015 and IATF 16949:2016 Implementation
 * Based on combined reference PDF and industry best practices
 */

const DOCUMENT_CHECKLIST_DATA = {
    title: "ISO 9001:2015 and IATF 16949:2016 Document Checklist",
    description: "Comprehensive list of documents required or recommended for implementation",
    totalDocuments: 36,
    categories: [
        {
            id: "context-leadership",
            title: "Context and Leadership (Clauses 4-5)",
            description: "Foundational documents for scope and commitment",
            order: 1,
            documents: [
                {
                    id: "doc_scope",
                    title: "Scope of the QMS",
                    tag: "Mandatory",
                    clauses: "ISO 4.3; IATF 4.3.1",
                    description: "Defines QMS boundaries, products/services (e.g., wiring harness design/manufacturing at Shendra MIDC), exclusions (justified, e.g., no design if customer-provided), and includes supporting functions/remote sites.",
                    bestWayToCreate: "Workshop with leadership to review context (internal/external issues); draft in Word as 1-2 pages with justifications; integrate CSR matrix for customer requirements; review annually.",
                    completed: false
                },
                {
                    id: "doc_context_analysis",
                    title: "Context Analysis Document (Internal/External Issues)",
                    tag: "Not Mandatory",
                    clauses: "ISO 4.1; evidence needed for monitoring",
                    description: "Lists internal (e.g., culture, performance) and external issues (e.g., PESTEL factors like regulatory changes in automotive safety) affecting QMS, with monitoring plan.",
                    bestWayToCreate: "SWOT/PESTEL analysis session; use Excel matrix; link to risks; update during management reviews.",
                    completed: false
                },
                {
                    id: "doc_interested_parties",
                    title: "Interested Parties Analysis",
                    tag: "Not Mandatory",
                    clauses: "ISO 4.2; IATF implies via CSRs",
                    description: "Identifies stakeholders (e.g., OEMs like TVS, suppliers, regulators) and their needs/expectations (e.g., zero defects, RoHS compliance); includes fulfillment plans.",
                    bestWayToCreate: "Brainstorm with cross-functional team; Excel table; review periodically for changes (e.g., new CSRs).",
                    completed: false
                },
                {
                    id: "doc_quality_policy",
                    title: "Quality Policy",
                    tag: "Mandatory",
                    clauses: "ISO 5.2; IATF 5.2.1",
                    description: "Top management's commitment to quality, customer focus, compliance, and improvement; aligned with strategic direction (e.g., your \"Supplier of Choice\" vision).",
                    bestWayToCreate: "Leadership drafting session; 1-page document signed by Director; communicate via intranet/training; review for suitability.",
                    completed: false
                },
                {
                    id: "doc_raci_matrix",
                    title: "Organizational Roles, Responsibilities, and Authorities Matrix (RACI)",
                    tag: "Mandatory",
                    clauses: "ISO 5.3; IATF 5.3.1/5.3.2",
                    description: "RACI chart assigning roles (e.g., process owners for conformity, corrective actions); includes authority to stop production for quality issues.",
                    bestWayToCreate: "Excel matrix from org chart; workshop with department heads; include IATF specifics like product safety roles; update with changes.",
                    completed: false
                },
                {
                    id: "doc_corporate_responsibility",
                    title: "Corporate Responsibility Policies",
                    tag: "Mandatory",
                    clauses: "IATF 5.1.1.1",
                    description: "Includes anti-bribery policy, employee code of conduct, and ethics escalation (\"whistle-blowing\") policy.",
                    bestWayToCreate: "HR/leadership collaboration; separate 1-page policies or combined handbook; train employees; align with automotive ethics standards.",
                    completed: false
                }
            ]
        },
        {
            id: "planning",
            title: "Planning (Clause 6)",
            description: "Risk and objective-related documents",
            order: 2,
            documents: [
                {
                    id: "doc_risk_register",
                    title: "Risk and Opportunity Register (including FMEA)",
                    tag: "Mandatory",
                    clauses: "ISO 6.1; IATF 6.1.2.1/6.1.2.3",
                    description: "Identifies risks/opportunities from context analysis; includes actions, FMEA for processes, preventive actions, and contingency plans (e.g., for supply disruptions).",
                    bestWayToCreate: "Risk workshop using FMEA templates (AIAG format); Excel register with priorities; link to objectives; review annually or after changes.",
                    completed: false
                },
                {
                    id: "doc_quality_objectives",
                    title: "Quality Objectives and Action Plans",
                    tag: "Mandatory",
                    clauses: "ISO 6.2; IATF 6.2.2.1",
                    description: "SMART objectives at functions/levels (e.g., <1 PPM defects); plans with resources, responsibilities, timelines; tied to customer requirements.",
                    bestWayToCreate: "Leadership meeting; Excel dashboard with KPIs; cascade from policy; monitor quarterly.",
                    completed: false
                },
                {
                    id: "doc_change_management",
                    title: "Change Management Procedure",
                    tag: "Mandatory",
                    clauses: "ISO 6.3; IATF implies in 8.5.6",
                    description: "Process for planning QMS changes, assessing impacts (e.g., on product safety).",
                    bestWayToCreate: "Word procedure with flowchart; include risk assessment; train change approvers.",
                    completed: false
                }
            ]
        },
        {
            id: "support",
            title: "Support (Clause 7)",
            description: "Resources, competence, and awareness documents",
            order: 3,
            documents: [
                {
                    id: "doc_quality_manual",
                    title: "Quality Manual",
                    tag: "Mandatory",
                    clauses: "IATF 7.5.1.1",
                    description: "Overview of QMS, scope, processes/interactions, exclusions, CSR matrix.",
                    bestWayToCreate: "Compile from earlier docs; Word with process maps; series of documents if preferred; get leadership approval.",
                    completed: false
                },
                {
                    id: "doc_competency_matrix",
                    title: "Competency Matrix and Training Plan",
                    tag: "Mandatory",
                    clauses: "ISO 7.2; IATF 7.2.1/7.2.2",
                    description: "Defines competencies (e.g., for auditors, on-the-job training); training calendar including customer requirements.",
                    bestWayToCreate: "HR gap analysis; Excel matrix; annual plan with evaluations.",
                    completed: false
                },
                {
                    id: "doc_training_records",
                    title: "Awareness and Training Records",
                    tag: "Mandatory",
                    clauses: "ISO 7.3; IATF 7.3.1",
                    description: "Evidence of employee awareness (e.g., policy, nonconformity impacts); training records.",
                    bestWayToCreate: "Training sessions; retain attendance/quizzes in HR files.",
                    completed: false
                },
                {
                    id: "doc_infrastructure_plan",
                    title: "Infrastructure and Environment Maintenance Plan",
                    tag: "Mandatory",
                    clauses: "ISO 7.1.3/7.1.4; IATF 7.1.3.1/7.1.4.1",
                    description: "Plans for plant/equipment (e.g., TPM), work environment (e.g., cleanliness).",
                    bestWayToCreate: "Multidisciplinary team; Excel schedules with metrics (OEE); link to risks.",
                    completed: false
                },
                {
                    id: "doc_msa_records",
                    title: "Measurement System Analysis (MSA) Records",
                    tag: "Mandatory",
                    clauses: "IATF 7.1.5.1.1",
                    description: "Studies (e.g., GR&R) for monitoring equipment; calibration records.",
                    bestWayToCreate: "Use AIAG MSA manual; document studies; retain with lab scope.",
                    completed: false
                },
                {
                    id: "doc_laboratory_scope",
                    title: "Laboratory Scope (Internal/External)",
                    tag: "Mandatory",
                    clauses: "IATF 7.1.5.3.1/7.1.5.3.2",
                    description: "Defines lab capabilities, procedures, competencies.",
                    bestWayToCreate: "Lab team draft; include accreditation evidence; review annually.",
                    completed: false
                },
                {
                    id: "doc_knowledge_management",
                    title: "Organizational Knowledge Management Process",
                    tag: "Not Mandatory",
                    clauses: "ISO 7.1.6",
                    description: "Process to capture/maintain knowledge (e.g., lessons learned).",
                    bestWayToCreate: "Procedure in Word; knowledge database; nice for CI.",
                    completed: false
                },
                {
                    id: "doc_communication",
                    title: "Communication Procedure",
                    tag: "Not Mandatory",
                    clauses: "ISO 7.4",
                    description: "Internal/external communication plan.",
                    bestWayToCreate: "Matrix in Excel; include escalation.",
                    completed: false
                },
                {
                    id: "doc_document_control",
                    title: "Document Control Procedure",
                    tag: "Mandatory",
                    clauses: "ISO 7.5; IATF 7.5.3.2.1",
                    description: "For creating, approving, updating documents; record retention policy.",
                    bestWayToCreate: "Word procedure; use software for versioning; include engineering specs review.",
                    completed: false
                }
            ]
        },
        {
            id: "operation",
            title: "Operation (Clause 8)",
            description: "Core process and control documents",
            order: 4,
            documents: [
                {
                    id: "doc_csr_matrix",
                    title: "Customer-Specific Requirements (CSR) Matrix",
                    tag: "Mandatory",
                    clauses: "IATF 4.3.2/8.2.2.1",
                    description: "Evaluates and integrates CSRs (e.g., TVS standards) into QMS.",
                    bestWayToCreate: "Excel matrix mapping CSRs to processes; review with contracts.",
                    completed: false
                },
                {
                    id: "doc_operational_planning",
                    title: "Operational Planning Procedure (including APQP)",
                    tag: "Mandatory",
                    clauses: "ISO 8.1; IATF 8.1.1",
                    description: "Plans for product realization (e.g., feasibility, acceptance criteria).",
                    bestWayToCreate: "Use AIAG APQP template; multidisciplinary team.",
                    completed: false
                },
                {
                    id: "doc_product_safety",
                    title: "Product Safety Management Process",
                    tag: "Mandatory",
                    clauses: "IATF 4.4.1.2",
                    description: "For safety-related products (e.g., harnesses); includes escalation, training.",
                    bestWayToCreate: "Procedure with FMEA; integrate with design.",
                    completed: false
                },
                {
                    id: "doc_design_development",
                    title: "Design and Development Process (including DFMEA)",
                    tag: "Mandatory",
                    clauses: "ISO 8.3; IATF 8.3.1.1/8.3.3.1",
                    description: "Documented process with inputs/outputs, reviews, FMEA.",
                    bestWayToCreate: "AIAG FMEA handbook; software like APQP tools.",
                    completed: false
                },
                {
                    id: "doc_supplier_management",
                    title: "Supplier Selection and Monitoring Procedure",
                    tag: "Mandatory",
                    clauses: "ISO 8.4; IATF 8.4.1.2/8.4.2.4",
                    description: "Criteria for selection, development, audits; performance monitoring.",
                    bestWayToCreate: "Risk-based matrix; second-party audit checklists.",
                    completed: false
                },
                {
                    id: "doc_control_plan",
                    title: "Control Plan",
                    tag: "Mandatory",
                    clauses: "IATF 8.5.1.1/Annex A",
                    description: "For prototype/pre-launch/production; includes controls, reaction plans.",
                    bestWayToCreate: "AIAG template; link to FMEA/process flow; family plans for similar harnesses.",
                    completed: false
                },
                {
                    id: "doc_work_instructions",
                    title: "Work Instructions/Standardized Work",
                    tag: "Mandatory",
                    clauses: "IATF 8.5.1.2",
                    description: "Operator instructions, visual standards for processes (e.g., crimping).",
                    bestWayToCreate: "Photos/diagrams; post at workstations; multilingual.",
                    completed: false
                },
                {
                    id: "doc_traceability",
                    title: "Identification and Traceability Procedure",
                    tag: "Mandatory",
                    clauses: "ISO 8.5.2; IATF 8.5.2.1",
                    description: "For lot traceability, suspect product control.",
                    bestWayToCreate: "Procedure with risk analysis; barcode system.",
                    completed: false
                },
                {
                    id: "doc_preservation",
                    title: "Preservation Procedure",
                    tag: "Mandatory",
                    clauses: "ISO 8.5.4; IATF 8.5.4.1",
                    description: "Handling, storage, FIFO for materials.",
                    bestWayToCreate: "Include contamination controls; inventory software.",
                    completed: false
                },
                {
                    id: "doc_change_control",
                    title: "Change Control Procedure",
                    tag: "Mandatory",
                    clauses: "ISO 8.5.6; IATF 8.5.6.1",
                    description: "For product/process changes; includes validation, customer approval.",
                    bestWayToCreate: "Flowchart with risk assessment; temporary alternate controls list.",
                    completed: false
                },
                {
                    id: "doc_product_release",
                    title: "Release of Products Procedure",
                    tag: "Mandatory",
                    clauses: "ISO 8.6; IATF 8.6.1",
                    description: "Verification per control plan; layout inspections.",
                    bestWayToCreate: "Checklist; retain release records.",
                    completed: false
                },
                {
                    id: "doc_nonconforming_product",
                    title: "Nonconforming Product Procedure",
                    tag: "Mandatory",
                    clauses: "ISO 8.7; IATF 8.7.1.1-8.7.1.7",
                    description: "Control, concessions, rework/repair processes.",
                    bestWayToCreate: "Procedure with disposition options; customer notification.",
                    completed: false
                }
            ]
        },
        {
            id: "performance-evaluation",
            title: "Performance Evaluation (Clause 9)",
            description: "Monitoring and audit documents",
            order: 5,
            documents: [
                {
                    id: "doc_monitoring_measurement",
                    title: "Monitoring and Measurement Procedure (including MSA)",
                    tag: "Mandatory",
                    clauses: "ISO 9.1; IATF 9.1.1.1",
                    description: "Process studies, KPIs (e.g., PPM); statistical tools.",
                    bestWayToCreate: "Define in control plan; use SPC software.",
                    completed: false
                },
                {
                    id: "doc_customer_satisfaction",
                    title: "Customer Satisfaction Procedure",
                    tag: "Mandatory",
                    clauses: "ISO 9.1.2; IATF 9.1.2.1",
                    description: "Monitors complaints, scorecards, warranty.",
                    bestWayToCreate: "Dashboard; include field failure analysis.",
                    completed: false
                },
                {
                    id: "doc_internal_audit",
                    title: "Internal Audit Procedure and Programme",
                    tag: "Mandatory",
                    clauses: "ISO 9.2; IATF 9.2.2.1-9.2.2.4",
                    description: "Annual plan for system/process/product audits; auditor competencies.",
                    bestWayToCreate: "3-year calendar; checklists per AIAG CQI.",
                    completed: false
                },
                {
                    id: "doc_management_review",
                    title: "Management Review Procedure",
                    tag: "Mandatory",
                    clauses: "ISO 9.3; IATF 9.3.1.1/9.3.2.1",
                    description: "Inputs/outputs; at least annual, with action plans.",
                    bestWayToCreate: "Agenda template; include COPQ, feasibility.",
                    completed: false
                }
            ]
        },
        {
            id: "improvement",
            title: "Improvement (Clause 10)",
            description: "Corrective action and CI documents",
            order: 6,
            documents: [
                {
                    id: "doc_corrective_action",
                    title: "Nonconformity and Corrective Action Procedure",
                    tag: "Mandatory",
                    clauses: "ISO 10.2; IATF 10.2.3",
                    description: "Problem-solving process (e.g., 8D); root cause, verification.",
                    bestWayToCreate: "AIAG CQI-20 template; include error-proofing.",
                    completed: false
                },
                {
                    id: "doc_continual_improvement",
                    title: "Continual Improvement Procedure",
                    tag: "Mandatory",
                    clauses: "ISO 10.3; IATF 10.3.1",
                    description: "Methodology for CI (e.g., Kaizen); action plans for variation reduction.",
                    bestWayToCreate: "Process with metrics; link to FMEA updates.",
                    completed: false
                }
            ]
        }
    ]
};

/**
 * Document Checklist Manager Class
 * Handles all document checklist functionality including progress tracking, filtering, and display
 */
class DocumentChecklistManager {
    constructor() {
        this.documents = new Map(); // Map of document ID to completion status
        this.filteredDocuments = [];
        this.searchTerm = '';
        this.currentFilter = 'all';
        
        this.initializeDocuments();
    }

    /**
     * Initialize documents map from data
     */
    initializeDocuments() {
        DOCUMENT_CHECKLIST_DATA.categories.forEach(category => {
            category.documents.forEach(document => {
                this.documents.set(document.id, false);
            });
        });
    }

    /**
     * Get total document count
     */
    getTotalDocuments() {
        return this.documents.size;
    }

    /**
     * Get completed document count
     */
    getCompletedDocuments() {
        return Array.from(this.documents.values()).filter(Boolean).length;
    }

    /**
     * Get progress percentage
     */
    getProgressPercentage() {
        const total = this.getTotalDocuments();
        return total > 0 ? Math.round((this.getCompletedDocuments() / total) * 100) : 0;
    }

    /**
     * Toggle document completion status
     */
    toggleDocument(documentId) {
        const currentStatus = this.documents.get(documentId);
        this.documents.set(documentId, !currentStatus);
        return !currentStatus;
    }

    /**
     * Get document completion status
     */
    isDocumentCompleted(documentId) {
        return this.documents.get(documentId) || false;
    }

    /**
     * Filter documents based on criteria
     */
    filterDocuments(filter, searchTerm = '') {
        this.currentFilter = filter;
        this.searchTerm = searchTerm.toLowerCase();
        
        this.filteredDocuments = [];
        
        DOCUMENT_CHECKLIST_DATA.categories.forEach(category => {
            const filteredCategoryDocuments = category.documents.filter(doc => {
                // Apply search filter
                if (this.searchTerm && !doc.title.toLowerCase().includes(this.searchTerm) && 
                    !doc.description.toLowerCase().includes(this.searchTerm)) {
                    return false;
                }
                
                // Apply type filter
                switch (filter) {
                    case 'mandatory':
                        return doc.tag === 'Mandatory';
                    case 'not-mandatory':
                        return doc.tag === 'Not Mandatory';
                    case 'nice-to-have':
                        return doc.tag === 'Nice to Have';
                    case 'completed':
                        return this.isDocumentCompleted(doc.id);
                    case 'pending':
                        return !this.isDocumentCompleted(doc.id);
                    default:
                        return true;
                }
            });
            
            if (filteredCategoryDocuments.length > 0) {
                this.filteredDocuments.push({
                    ...category,
                    documents: filteredCategoryDocuments
                });
            }
        });
        
        return this.filteredDocuments;
    }

    /**
     * Get export data for documents
     */
    getExportData() {
        return {
            documents: Object.fromEntries(this.documents),
            metadata: {
                totalDocuments: this.getTotalDocuments(),
                completedDocuments: this.getCompletedDocuments(),
                progressPercentage: this.getProgressPercentage()
            }
        };
    }

    /**
     * Import document data
     */
    importData(data) {
        if (data.documents) {
            Object.entries(data.documents).forEach(([docId, completed]) => {
                if (this.documents.has(docId)) {
                    this.documents.set(docId, completed);
                }
            });
        }
    }

    /**
     * Reset all documents to incomplete
     */
    resetDocuments() {
        this.documents.forEach((_, docId) => {
            this.documents.set(docId, false);
        });
    }
}
