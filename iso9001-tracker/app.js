/**
 * ISO 9001 Project Tracker Application
 * Main JavaScript file handling all application logic, state management, and UI interactions
 */

class ISO9001Tracker {
    constructor() {
        this.state = {
            projectStartDate: null,
            projectData: null,
            activities: new Map(), // Map of activity ID to completion status
            expandedPhases: new Set(), // Set of expanded phase IDs
            isLoading: false,
            isAuthenticated: false,
            currentView: 'project', // 'project' or 'documents'
            expandedCategories: new Set() // Set of expanded document category IDs
        };
        
        this.elements = {};
        this.datePicker = null;
        this.correctPassword = 'PragmaTech@2025#9001';
        this.documentManager = new DocumentChecklistManager();
        
        this.init();
    }

    /**
     * Initialize the application
     */
    init() {
        // Initialize security immediately
        this.initializeSecurity();
    }

    /**
     * Initialize security check
     */
    initializeSecurity() {
        try {
            this.cacheSecurityElements();
            this.bindSecurityEvents();
            this.showSecurityOverlay();
        } catch (error) {
            console.error('Failed to initialize security:', error);
            // Ensure security overlay is shown even if there's an error
            const overlay = document.getElementById('securityOverlay');
            if (overlay) {
                overlay.style.display = 'flex';
            }
            // Ensure main app is secured
            const app = document.getElementById('app');
            if (app) {
                app.classList.add('secured');
            }
        }
    }

    /**
     * Initialize the application after DOM is ready
     */
    initializeApp() {
        try {
            this.cacheElements();
            this.loadProjectData();
            this.loadStateFromStorage();
            this.initializeDatePicker();
            this.bindEvents();
            this.render();
            
            this.showToast('Application loaded successfully', 'success');
        } catch (error) {
            console.error('Failed to initialize application:', error);
            this.showToast('Failed to load application', 'error');
        }
    }

    /**
     * Cache security-related DOM elements
     */
    cacheSecurityElements() {
        this.securityElements = {
            overlay: document.getElementById('securityOverlay'),
            passwordInput: document.getElementById('loginPassword'),
            submitButton: document.getElementById('loginSubmit'),
            errorMessage: document.getElementById('loginError')
        };
    }

    /**
     * Bind security-related event listeners
     */
    bindSecurityEvents() {
        // Login button click
        this.securityElements.submitButton.addEventListener('click', () => this.handleLogin());
        
        // Enter key in password field
        this.securityElements.passwordInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                this.handleLogin();
            }
        });
        
        // Focus password input on load
        setTimeout(() => {
            this.securityElements.passwordInput.focus();
        }, 500);
    }

    /**
     * Show security overlay
     */
    showSecurityOverlay() {
        // Add secured class to blur main content
        document.getElementById('app').classList.add('secured');
        this.securityElements.overlay.style.display = 'flex';
        // Auto-focus password input after animation
        setTimeout(() => {
            this.securityElements.passwordInput.focus();
        }, 600);
    }

    /**
     * Hide security overlay
     */
    hideSecurityOverlay() {
        // Remove secured class to unblur main content
        document.getElementById('app').classList.remove('secured');
        this.securityElements.overlay.classList.add('hidden');
        setTimeout(() => {
            this.securityElements.overlay.style.display = 'none';
        }, 500);
    }

    /**
     * Handle login attempt
     */
    handleLogin() {
        const enteredPassword = this.securityElements.passwordInput.value;
        
        if (enteredPassword === this.correctPassword) {
            this.state.isAuthenticated = true;
            this.hideSecurityOverlay();
            this.hideLoginError();
            
            // Initialize the main application
            setTimeout(() => {
                this.initializeApp();
            }, 600);
        } else {
            this.showLoginError();
            this.securityElements.passwordInput.value = '';
            this.securityElements.passwordInput.focus();
        }
    }

    /**
     * Show login error message
     */
    showLoginError() {
        this.securityElements.errorMessage.style.display = 'block';
        // Auto-hide error after 3 seconds
        setTimeout(() => {
            this.hideLoginError();
        }, 3000);
    }

    /**
     * Hide login error message
     */
    hideLoginError() {
        this.securityElements.errorMessage.style.display = 'none';
    }

    /**
     * Cache frequently used DOM elements
     */
    cacheElements() {
        this.elements = {
            projectStartDate: document.getElementById('project-start-date'),
            progressText: document.getElementById('progress-text'),
            timelineText: document.getElementById('timeline-text'),
            progressFill: document.getElementById('progress-fill'),
            phaseTimeline: document.getElementById('phase-timeline'),
            phasesContainer: document.getElementById('phases-container'),
            exportBtn: document.getElementById('export-btn'),
            importBtn: document.getElementById('import-btn'),
            resetBtn: document.getElementById('reset-btn'),
            logoutBtn: document.getElementById('logout-btn'),
            importFile: document.getElementById('import-file'),
            confirmationModal: document.getElementById('confirmation-modal'),
            modalTitle: document.getElementById('modal-title'),
            modalMessage: document.getElementById('modal-message'),
            modalConfirm: document.getElementById('modal-confirm'),
            modalCancel: document.getElementById('modal-cancel'),
            modalClose: document.getElementById('modal-close'),
            loadingOverlay: document.getElementById('loading-overlay'),
            toastContainer: document.getElementById('toast-container'),
            // Document checklist elements
            viewProjectBtn: document.getElementById('view-project-btn'),
            viewDocumentsBtn: document.getElementById('view-documents-btn'),
            trackerView: document.getElementById('tracker-view'),
            documentsView: document.getElementById('documents-view'),
            documentSearch: document.getElementById('document-search'),
            documentFilter: document.getElementById('document-filter'),
            documentProgressText: document.getElementById('document-progress-text'),
            documentsContainer: document.getElementById('documents-container')
        };
    }

    /**
     * Load project data from the data file
     */
    loadProjectData() {
        if (typeof ISO9001_PROJECT_DATA !== 'undefined') {
            this.state.projectData = JSON.parse(JSON.stringify(ISO9001_PROJECT_DATA));
            this.initializeActivities();
        } else {
            throw new Error('Project data not found');
        }
    }

    /**
     * Initialize activities map from project data
     */
    initializeActivities() {
        this.state.projectData.phases.forEach(phase => {
            phase.sections.forEach(section => {
                section.activities.forEach(activity => {
                    if (!this.state.activities.has(activity.id)) {
                        this.state.activities.set(activity.id, false);
                    }
                });
            });
        });
    }

    /**
     * Load application state from localStorage
     */
    loadStateFromStorage() {
        try {
            const savedState = localStorage.getItem('iso9001-tracker-state');
            if (savedState) {
                const parsedState = JSON.parse(savedState);
                
                // Restore project start date
                if (parsedState.projectStartDate) {
                    this.state.projectStartDate = dayjs(parsedState.projectStartDate);
                }
                
                // Restore activity completion status
                if (parsedState.activities) {
                    Object.entries(parsedState.activities).forEach(([activityId, completed]) => {
                        this.state.activities.set(activityId, completed);
                    });
                }
                
                // Restore expanded phases
                if (parsedState.expandedPhases) {
                    this.state.expandedPhases = new Set(parsedState.expandedPhases);
                }
                
                // Restore current view
                if (parsedState.currentView) {
                    this.state.currentView = parsedState.currentView;
                }
                
                // Restore expanded categories
                if (parsedState.expandedCategories) {
                    this.state.expandedCategories = new Set(parsedState.expandedCategories);
                }
                
                // Restore document states
                if (parsedState.documents) {
                    this.documentManager.importData({ documents: parsedState.documents });
                }
            }
        } catch (error) {
            console.warn('Failed to load state from localStorage:', error);
        }
    }

    /**
     * Save application state to localStorage
     */
    saveStateToStorage() {
        try {
            const stateToSave = {
                projectStartDate: this.state.projectStartDate ? this.state.projectStartDate.toISOString() : null,
                activities: Object.fromEntries(this.state.activities),
                expandedPhases: Array.from(this.state.expandedPhases),
                currentView: this.state.currentView,
                expandedCategories: Array.from(this.state.expandedCategories),
                documents: Object.fromEntries(this.documentManager.documents)
            };
            
            localStorage.setItem('iso9001-tracker-state', JSON.stringify(stateToSave));
        } catch (error) {
            console.warn('Failed to save state to localStorage:', error);
        }
    }

    /**
     * Initialize the date picker
     */
    initializeDatePicker() {
        if (typeof flatpickr !== 'undefined') {
            this.datePicker = flatpickr(this.elements.projectStartDate, {
                dateFormat: 'Y-m-d',
                defaultDate: this.state.projectStartDate ? this.state.projectStartDate.toDate() : null,
                onChange: (selectedDates) => {
                    if (selectedDates.length > 0) {
                        this.state.projectStartDate = dayjs(selectedDates[0]);
                        this.saveStateToStorage();
                        this.updateTimeline();
                        this.renderPhaseTimeline();
                    }
                }
            });
        }
    }

    /**
     * Bind event listeners
     */
    bindEvents() {
        // View toggle functionality
        this.elements.viewProjectBtn.addEventListener('click', () => this.switchToView('project'));
        this.elements.viewDocumentsBtn.addEventListener('click', () => this.switchToView('documents'));
        
        // Export functionality
        this.elements.exportBtn.addEventListener('click', () => this.exportData());
        
        // Import functionality
        this.elements.importBtn.addEventListener('click', () => this.elements.importFile.click());
        this.elements.importFile.addEventListener('change', (e) => this.importData(e));
        
        // Reset functionality
        this.elements.resetBtn.addEventListener('click', () => this.showResetConfirmation());
        
        // Logout functionality
        this.elements.logoutBtn.addEventListener('click', () => this.showLogoutConfirmation());
        
        // Document search and filter
        this.elements.documentSearch.addEventListener('input', (e) => this.filterDocuments());
        this.elements.documentFilter.addEventListener('change', (e) => this.filterDocuments());
        
        // Modal events
        this.elements.modalClose.addEventListener('click', () => this.hideModal());
        this.elements.modalCancel.addEventListener('click', () => this.hideModal());
        
        // Close modal when clicking outside
        this.elements.confirmationModal.addEventListener('click', (e) => {
            if (e.target === this.elements.confirmationModal) {
                this.hideModal();
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.hideModal();
            }
        });
    }

    /**
     * Render the entire application
     */
    render() {
        this.renderProgress();
        this.renderPhaseTimeline();
        this.renderPhases();
        this.updateTimeline();
        this.updateViewToggle();
        this.renderDocuments();
        this.updateDocumentProgress();
    }

    /**
     * Render progress information
     */
    renderProgress() {
        const totalActivities = this.state.activities.size;
        const completedActivities = Array.from(this.state.activities.values()).filter(Boolean).length;
        const progressPercentage = totalActivities > 0 ? Math.round((completedActivities / totalActivities) * 100) : 0;

        this.elements.progressText.textContent = `${completedActivities} / ${totalActivities} tasks completed (${progressPercentage}%)`;
        this.elements.progressFill.style.width = `${progressPercentage}%`;
    }

    /**
     * Update timeline information
     */
    updateTimeline() {
        if (this.state.projectStartDate) {
            const endDate = this.state.projectStartDate.add(this.state.projectData.totalDurationWeeks, 'week');
            const today = dayjs();
            const daysFromStart = today.diff(this.state.projectStartDate, 'day');
            const totalDays = endDate.diff(this.state.projectStartDate, 'day');
            
            let timelineText = '';
            if (today.isBefore(this.state.projectStartDate)) {
                timelineText = `Project starts ${this.state.projectStartDate.fromNow()}`;
            } else if (today.isAfter(endDate)) {
                timelineText = `Project ended ${endDate.fromNow()}`;
            } else {
                const progressDays = Math.min(daysFromStart, totalDays);
                const timelineProgress = Math.round((progressDays / totalDays) * 100);
                timelineText = `Week ${Math.ceil(daysFromStart / 7)} of ${this.state.projectData.totalDurationWeeks} (${timelineProgress}% timeline)`;
            }
            
            this.elements.timelineText.textContent = timelineText;
        } else {
            this.elements.timelineText.textContent = 'Select project start date to see timeline';
        }
    }

    /**
     * Render phase timeline
     */
    renderPhaseTimeline() {
        const timeline = this.elements.phaseTimeline;
        timeline.innerHTML = '';

        if (!this.state.projectStartDate) {
            return;
        }

        let currentDate = dayjs(this.state.projectStartDate);
        
        this.state.projectData.phases.forEach((phase, index) => {
            const phaseElement = document.createElement('div');
            phaseElement.className = 'timeline-phase';
            
            // Calculate phase completion
            const phaseActivities = this.getPhaseActivities(phase);
            const completedCount = phaseActivities.filter(id => this.state.activities.get(id)).length;
            const isCompleted = completedCount === phaseActivities.length && phaseActivities.length > 0;
            const isInProgress = completedCount > 0 && !isCompleted;
            
            if (isCompleted) {
                phaseElement.classList.add('completed');
            } else if (isInProgress) {
                phaseElement.classList.add('in-progress');
            }

            const endDate = phase.duration > 0 ? currentDate.add(phase.duration, 'week') : currentDate;
            
            phaseElement.innerHTML = `
                <div class="timeline-phase-number">${index + 1}</div>
                <div class="timeline-phase-title">${phase.title}</div>
                <div class="timeline-phase-date">
                    ${phase.duration > 0 ? 
                        `${currentDate.format('MMM D')} - ${endDate.format('MMM D')}` : 
                        'Ongoing'
                    }
                </div>
            `;
            
            timeline.appendChild(phaseElement);
            
            if (phase.duration > 0) {
                currentDate = endDate;
            }
        });
    }

    /**
     * Get all activity IDs for a phase
     */
    getPhaseActivities(phase) {
        const activities = [];
        phase.sections.forEach(section => {
            section.activities.forEach(activity => {
                activities.push(activity.id);
            });
        });
        return activities;
    }

    /**
     * Render all phases
     */
    renderPhases() {
        const container = this.elements.phasesContainer;
        container.innerHTML = '';

        this.state.projectData.phases.forEach((phase, index) => {
            const phaseElement = this.createPhaseElement(phase, index);
            container.appendChild(phaseElement);
        });
    }

    /**
     * Create a phase element
     */
    createPhaseElement(phase, index) {
        const phaseCard = document.createElement('div');
        phaseCard.className = 'phase-card';
        phaseCard.dataset.phaseId = phase.id;

        // Calculate phase completion
        const phaseActivities = this.getPhaseActivities(phase);
        const completedCount = phaseActivities.filter(id => this.state.activities.get(id)).length;
        const totalCount = phaseActivities.length;
        const isCompleted = completedCount === totalCount && totalCount > 0;
        const isInProgress = completedCount > 0 && !isCompleted;
        
        if (isCompleted) {
            phaseCard.classList.add('completed');
        } else if (isInProgress) {
            phaseCard.classList.add('in-progress');
        }

        const isExpanded = this.state.expandedPhases.has(phase.id);

        phaseCard.innerHTML = `
            <div class="phase-header" data-phase-id="${phase.id}">
                <div class="phase-title-row">
                    <div class="phase-title">
                        <div class="phase-number ${isCompleted ? 'completed' : ''}">${index + 1}</div>
                        <div class="phase-name">${phase.title}</div>
                    </div>
                    <div class="phase-status">
                        <div class="phase-progress">
                            ${completedCount}/${totalCount} tasks
                        </div>
                        <button class="phase-toggle ${isExpanded ? 'expanded' : ''}" 
                                data-phase-id="${phase.id}" 
                                aria-label="Toggle phase details">
                            ▼
                        </button>
                    </div>
                </div>
                <div class="phase-info">
                    <div class="phase-duration">
                        ⏱️ ${phase.duration > 0 ? `${phase.duration} weeks` : 'Ongoing'}
                    </div>
                    <div class="phase-description">${phase.description}</div>
                </div>
            </div>
            <div class="phase-content ${isExpanded ? 'expanded' : ''}" data-phase-id="${phase.id}">
                <div class="sections-container">
                    ${phase.sections.map(section => this.createSectionHTML(section)).join('')}
                </div>
            </div>
        `;

        // Add event listeners
        const header = phaseCard.querySelector('.phase-header');
        const toggle = phaseCard.querySelector('.phase-toggle');
        
        const togglePhase = (e) => {
            e.stopPropagation();
            this.togglePhase(phase.id);
        };

        header.addEventListener('click', togglePhase);
        toggle.addEventListener('click', togglePhase);

        // Add activity event listeners
        const checkboxes = phaseCard.querySelectorAll('.activity-checkbox');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('click', (e) => {
                const activityId = e.target.dataset.activityId;
                this.toggleActivity(activityId);
            });
        });

        // Enhanced: Add howTo toggle event listeners
        const howToToggles = phaseCard.querySelectorAll('.howto-toggle');
        howToToggles.forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                const activityId = e.target.dataset.activityId;
                this.toggleHowTo(activityId);
            });
        });

        return phaseCard;
    }

    /**
     * Create section HTML
     */
    createSectionHTML(section) {
        return `
            <div class="section-card">
                <div class="section-header">
                    <div class="section-title">${section.title}</div>
                    <div class="section-objective">${section.objective}</div>
                </div>
                <div class="activities-list">
                    ${section.activities.map(activity => this.createActivityHTML(activity)).join('')}
                </div>
            </div>
        `;
    }

    /**
     * Create activity HTML with enhanced howTo guidance
     */
    createActivityHTML(activity) {
        const isCompleted = this.state.activities.get(activity.id);
        
        // Enhanced: Include howTo guidance if available
        const howToContent = activity.howTo ? `
            <div class="activity-howto">
                <div class="howto-header">
                    <span class="howto-toggle" data-activity-id="${activity.id}">
                        📋 Implementation Guide
                    </span>
                </div>
                <div class="howto-content" data-activity-id="${activity.id}" style="display: none;">
                    <div class="howto-section">
                        <div class="howto-label">📜 ISO/IATF Clauses:</div>
                        <div class="howto-text iso-clause">${activity.howTo.isoClause}</div>
                    </div>
                    <div class="howto-section">
                        <div class="howto-label">📝 Detailed Guide:</div>
                        <div class="howto-text detailed-guide">${activity.howTo.detailedGuide}</div>
                    </div>
                    <div class="howto-section">
                        <div class="howto-label">💡 Example:</div>
                        <div class="howto-text example">${activity.howTo.example}</div>
                    </div>
                </div>
            </div>
        ` : '';

        return `
            <div class="activity-item ${isCompleted ? 'completed' : ''}">
                <div class="activity-main">
                    <div class="activity-checkbox ${isCompleted ? 'checked' : ''}" 
                         data-activity-id="${activity.id}"
                         role="checkbox"
                         aria-checked="${isCompleted}"
                         tabindex="0">
                    </div>
                    <div class="activity-text">${activity.text}</div>
                </div>
                ${howToContent}
            </div>
        `;
    }

    /**
     * Toggle phase expansion
     */
    togglePhase(phaseId) {
        if (this.state.expandedPhases.has(phaseId)) {
            this.state.expandedPhases.delete(phaseId);
        } else {
            this.state.expandedPhases.add(phaseId);
        }

        // Update UI
        const phaseCard = document.querySelector(`[data-phase-id="${phaseId}"]`);
        const content = phaseCard.querySelector('.phase-content');
        const toggle = phaseCard.querySelector('.phase-toggle');

        if (this.state.expandedPhases.has(phaseId)) {
            content.classList.add('expanded');
            toggle.classList.add('expanded');
        } else {
            content.classList.remove('expanded');
            toggle.classList.remove('expanded');
        }

        this.saveStateToStorage();
    }

    /**
     * Toggle activity completion
     */
    toggleActivity(activityId) {
        const currentStatus = this.state.activities.get(activityId);
        this.state.activities.set(activityId, !currentStatus);

        // Update UI
        this.render();
        this.saveStateToStorage();
        
        const action = !currentStatus ? 'completed' : 'uncompleted';
        this.showToast(`Task ${action}`, 'success');
    }

    /**
     * Enhanced: Toggle howTo content visibility for activities
     */
    toggleHowTo(activityId) {
        const howToContent = document.querySelector(`.howto-content[data-activity-id="${activityId}"]`);
        const howToToggle = document.querySelector(`.howto-toggle[data-activity-id="${activityId}"]`);
        
        if (howToContent && howToToggle) {
            const isVisible = howToContent.style.display !== 'none';
            howToContent.style.display = isVisible ? 'none' : 'block';
            howToToggle.textContent = isVisible ? '📋 Implementation Guide' : '📋 Hide Guide';
            howToToggle.classList.toggle('expanded', !isVisible);
        }
    }

    /**
     * Switch between project tracker and document checklist views
     */
    switchToView(view) {
        this.state.currentView = view;
        this.updateViewToggle();
        this.saveStateToStorage();
    }

    /**
     * Update view toggle buttons and show/hide appropriate content
     */
    updateViewToggle() {
        // Update button states
        if (this.state.currentView === 'project') {
            this.elements.viewProjectBtn.classList.add('active');
            this.elements.viewProjectBtn.classList.remove('btn-secondary');
            this.elements.viewProjectBtn.classList.add('btn-primary');
            
            this.elements.viewDocumentsBtn.classList.remove('active');
            this.elements.viewDocumentsBtn.classList.remove('btn-primary');
            this.elements.viewDocumentsBtn.classList.add('btn-secondary');
            
            // Show project view, hide documents view
            this.elements.trackerView.style.display = 'block';
            this.elements.documentsView.style.display = 'none';
        } else {
            this.elements.viewDocumentsBtn.classList.add('active');
            this.elements.viewDocumentsBtn.classList.remove('btn-secondary');
            this.elements.viewDocumentsBtn.classList.add('btn-primary');
            
            this.elements.viewProjectBtn.classList.remove('active');
            this.elements.viewProjectBtn.classList.remove('btn-primary');
            this.elements.viewProjectBtn.classList.add('btn-secondary');
            
            // Show documents view, hide project view
            this.elements.trackerView.style.display = 'none';
            this.elements.documentsView.style.display = 'block';
        }
    }

    /**
     * Filter and render documents based on search and filter criteria
     */
    filterDocuments() {
        const searchTerm = this.elements.documentSearch.value;
        const filterValue = this.elements.documentFilter.value;
        
        const filteredCategories = this.documentManager.filterDocuments(filterValue, searchTerm);
        this.renderFilteredDocuments(filteredCategories);
    }

    /**
     * Render documents container
     */
    renderDocuments() {
        const filteredCategories = this.documentManager.filterDocuments('all', '');
        this.renderFilteredDocuments(filteredCategories);
    }

    /**
     * Render filtered document categories
     */
    renderFilteredDocuments(categories) {
        const container = this.elements.documentsContainer;
        container.innerHTML = '';

        categories.forEach(category => {
            const categoryElement = this.createDocumentCategoryElement(category);
            container.appendChild(categoryElement);
        });
    }

    /**
     * Create a document category element
     */
    createDocumentCategoryElement(category) {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'document-category';
        categoryCard.dataset.categoryId = category.id;

        // Calculate category completion
        const categoryDocuments = category.documents.map(doc => doc.id);
        const completedCount = categoryDocuments.filter(id => this.documentManager.isDocumentCompleted(id)).length;
        const totalCount = categoryDocuments.length;
        const isCompleted = completedCount === totalCount && totalCount > 0;
        const isInProgress = completedCount > 0 && !isCompleted;
        
        if (isCompleted) {
            categoryCard.classList.add('completed');
        } else if (isInProgress) {
            categoryCard.classList.add('in-progress');
        }

        const isExpanded = this.state.expandedCategories.has(category.id);

        categoryCard.innerHTML = `
            <div class="category-header" data-category-id="${category.id}">
                <div class="category-title-row">
                    <div class="category-title">
                        <div class="category-number">${category.order}</div>
                        <div class="category-name">${category.title}</div>
                    </div>
                    <div class="category-status">
                        <div class="category-progress">
                            ${completedCount}/${totalCount} documents
                        </div>
                        <button class="category-toggle ${isExpanded ? 'expanded' : ''}" 
                                data-category-id="${category.id}" 
                                aria-label="Toggle category details">
                            ▼
                        </button>
                    </div>
                </div>
                <div class="category-description">${category.description}</div>
            </div>
            <div class="category-content ${isExpanded ? 'expanded' : ''}" data-category-id="${category.id}">
                <div class="documents-list">
                    ${category.documents.map(document => this.createDocumentHTML(document)).join('')}
                </div>
            </div>
        `;

        // Add event listeners
        const header = categoryCard.querySelector('.category-header');
        const toggle = categoryCard.querySelector('.category-toggle');
        
        const toggleCategory = (e) => {
            e.stopPropagation();
            this.toggleDocumentCategory(category.id);
        };

        header.addEventListener('click', toggleCategory);
        toggle.addEventListener('click', toggleCategory);

        // Add document event listeners
        const checkboxes = categoryCard.querySelectorAll('.document-checkbox');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('click', (e) => {
                const documentId = e.target.dataset.documentId;
                this.toggleDocument(documentId);
            });
        });

        // Add document detail toggles
        const documentToggles = categoryCard.querySelectorAll('.document-toggle');
        documentToggles.forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                const documentId = e.target.dataset.documentId;
                this.toggleDocumentDetails(documentId);
            });
        });

        return categoryCard;
    }

    /**
     * Create document HTML
     */
    createDocumentHTML(document) {
        const isCompleted = this.documentManager.isDocumentCompleted(document.id);
        const tagClass = document.tag.toLowerCase().replace(/\s+/g, '-');
        
        return `
            <div class="document-item ${isCompleted ? 'completed' : ''}">
                <div class="document-main">
                    <div class="document-checkbox ${isCompleted ? 'checked' : ''}" 
                         data-document-id="${document.id}"
                         role="checkbox"
                         aria-checked="${isCompleted}"
                         tabindex="0">
                    </div>
                    <div class="document-content">
                        <div class="document-header">
                            <div class="document-title">${document.title}</div>
                            <div class="document-tag ${tagClass}">${document.tag}</div>
                        </div>
                        <div class="document-clauses">${document.clauses}</div>
                        <div class="document-description">${document.description}</div>
                        <div class="document-actions">
                            <span class="document-toggle" data-document-id="${document.id}">
                                💡 Implementation Guide
                            </span>
                        </div>
                    </div>
                </div>
                <div class="document-details" data-document-id="${document.id}">
                    <div class="detail-section">
                        <div class="detail-label">🛠️ Best Way to Create:</div>
                        <div class="detail-text">${document.bestWayToCreate}</div>
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Toggle document category expansion
     */
    toggleDocumentCategory(categoryId) {
        if (this.state.expandedCategories.has(categoryId)) {
            this.state.expandedCategories.delete(categoryId);
        } else {
            this.state.expandedCategories.add(categoryId);
        }

        // Update UI
        const categoryCard = document.querySelector(`[data-category-id="${categoryId}"]`);
        const content = categoryCard.querySelector('.category-content');
        const toggle = categoryCard.querySelector('.category-toggle');

        if (this.state.expandedCategories.has(categoryId)) {
            content.classList.add('expanded');
            toggle.classList.add('expanded');
        } else {
            content.classList.remove('expanded');
            toggle.classList.remove('expanded');
        }

        this.saveStateToStorage();
    }

    /**
     * Toggle document completion status
     */
    toggleDocument(documentId) {
        const wasCompleted = this.documentManager.toggleDocument(documentId);
        
        // Update UI
        this.renderDocuments();
        this.updateDocumentProgress();
        this.saveStateToStorage();
        
        const action = wasCompleted ? 'completed' : 'uncompleted';
        this.showToast(`Document ${action}`, 'success');
    }

    /**
     * Toggle document details visibility
     */
    toggleDocumentDetails(documentId) {
        const details = document.querySelector(`.document-details[data-document-id="${documentId}"]`);
        const toggle = document.querySelector(`.document-toggle[data-document-id="${documentId}"]`);
        
        if (details && toggle) {
            const isVisible = details.classList.contains('expanded');
            if (isVisible) {
                details.classList.remove('expanded');
                toggle.textContent = '💡 Implementation Guide';
                toggle.classList.remove('expanded');
            } else {
                details.classList.add('expanded');
                toggle.textContent = '💡 Hide Guide';
                toggle.classList.add('expanded');
            }
        }
    }

    /**
     * Update document progress display
     */
    updateDocumentProgress() {
        const total = this.documentManager.getTotalDocuments();
        const completed = this.documentManager.getCompletedDocuments();
        const percentage = this.documentManager.getProgressPercentage();

        this.elements.documentProgressText.textContent = `${completed} / ${total} documents completed (${percentage}%)`;
    }

    /**
     * Export project data
     */
    exportData() {
        try {
            const exportData = {
                metadata: {
                    exportDate: new Date().toISOString(),
                    version: '1.1',
                    projectTitle: this.state.projectData.title,
                    documentCount: this.documentManager.getTotalDocuments()
                },
                projectStartDate: this.state.projectStartDate ? this.state.projectStartDate.toISOString() : null,
                activities: Object.fromEntries(this.state.activities),
                expandedPhases: Array.from(this.state.expandedPhases),
                currentView: this.state.currentView,
                expandedCategories: Array.from(this.state.expandedCategories),
                documents: Object.fromEntries(this.documentManager.documents)
            };

            const dataStr = JSON.stringify(exportData, null, 2);
            const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
            
            const exportFileDefaultName = `iso9001-tracker-${dayjs().format('YYYY-MM-DD')}.json`;
            
            const linkElement = document.createElement('a');
            linkElement.setAttribute('href', dataUri);
            linkElement.setAttribute('download', exportFileDefaultName);
            linkElement.click();
            
            this.showToast('Tracker data exported successfully', 'success');
        } catch (error) {
            console.error('Export failed:', error);
            this.showToast('Failed to export tracker data', 'error');
        }
    }

    /**
     * Import project data
     */
    importData(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const importData = JSON.parse(e.target.result);
                
                // Validate import data
                if (!this.validateImportData(importData)) {
                    throw new Error('Invalid import data format');
                }

                // Show confirmation
                this.showConfirmation(
                    'Import Project Data',
                    'This will replace all current progress. Are you sure you want to continue?',
                    () => this.applyImportData(importData)
                );
                
            } catch (error) {
                console.error('Import failed:', error);
                this.showToast('Failed to import project data. Please check the file format.', 'error');
            }
        };
        
        reader.readAsText(file);
        
        // Reset file input
        event.target.value = '';
    }

    /**
     * Validate import data
     */
    validateImportData(data) {
        return data && 
               typeof data === 'object' &&
               data.hasOwnProperty('activities') &&
               typeof data.activities === 'object';
    }

    /**
     * Apply imported data
     */
    applyImportData(importData) {
        try {
            // Restore project start date
            if (importData.projectStartDate) {
                this.state.projectStartDate = dayjs(importData.projectStartDate);
                if (this.datePicker) {
                    this.datePicker.setDate(this.state.projectStartDate.toDate());
                }
            }
            
            // Restore activities
            if (importData.activities) {
                Object.entries(importData.activities).forEach(([activityId, completed]) => {
                    if (this.state.activities.has(activityId)) {
                        this.state.activities.set(activityId, completed);
                    }
                });
            }
            
            // Restore expanded phases
            if (importData.expandedPhases) {
                this.state.expandedPhases = new Set(importData.expandedPhases);
            }
            
            // Restore current view
            if (importData.currentView) {
                this.state.currentView = importData.currentView;
            }
            
            // Restore expanded categories
            if (importData.expandedCategories) {
                this.state.expandedCategories = new Set(importData.expandedCategories);
            }
            
            // Restore document states
            if (importData.documents) {
                this.documentManager.importData({ documents: importData.documents });
            }
            
            this.render();
            this.saveStateToStorage();
            this.showToast('Tracker data imported successfully', 'success');
            
        } catch (error) {
            console.error('Failed to apply import data:', error);
            this.showToast('Failed to apply imported data', 'error');
        }
    }

    /**
     * Show reset confirmation
     */
    showResetConfirmation() {
        this.showConfirmation(
            'Reset Project',
            'This will clear all progress and cannot be undone. Are you sure you want to reset the project?',
            () => this.resetProject()
        );
    }

    /**
     * Reset project data
     */
    resetProject() {
        // Reset state
        this.state.projectStartDate = null;
        this.state.activities.forEach((_, activityId) => {
            this.state.activities.set(activityId, false);
        });
        this.state.expandedPhases.clear();
        this.state.currentView = 'project';
        this.state.expandedCategories.clear();
        
        // Reset document manager
        this.documentManager.resetDocuments();

        // Reset UI
        if (this.datePicker) {
            this.datePicker.clear();
        }
        
        this.render();
        this.saveStateToStorage();
        this.showToast('Tracker reset successfully', 'success');
    }

    /**
     * Show logout confirmation
     */
    showLogoutConfirmation() {
        this.showConfirmation(
            'Logout Confirmation',
            'Your progress is automatically saved. Are you sure you want to logout and return to the login screen?',
            () => this.logout()
        );
    }

    /**
     * Logout and return to login screen
     */
    logout() {
        try {
            // Reset authentication state
            this.state.isAuthenticated = false;
            
            // Clear password input and reset security elements
            if (this.securityElements && this.securityElements.passwordInput) {
                this.securityElements.passwordInput.value = '';
            }
            
            // Ensure security overlay is properly reset and shown
            const app = document.getElementById('app');
            const overlay = document.getElementById('securityOverlay');
            
            console.log('Logout: app element found:', !!app);
            console.log('Logout: overlay element found:', !!overlay);
            
            if (app && overlay) {
                // Add secured class to blur main content
                app.classList.add('secured');
                
                // Remove any hidden class and show overlay
                overlay.classList.remove('hidden');
                overlay.style.display = 'flex';
                overlay.style.visibility = 'visible';
                overlay.style.opacity = '1';
                
                console.log('Logout: Security overlay should now be visible');
                
                // Auto-focus password input after a short delay
                setTimeout(() => {
                    if (this.securityElements && this.securityElements.passwordInput) {
                        this.securityElements.passwordInput.focus();
                        console.log('Logout: Password input focused');
                    }
                }, 200);
            } else {
                console.error('Logout: Could not find required elements', { app: !!app, overlay: !!overlay });
            }
            
            // Show success message after a brief delay to ensure overlay is shown
            setTimeout(() => {
                this.showToast('Logged out successfully. Your progress has been saved.', 'success');
            }, 300);
            
        } catch (error) {
            console.error('Error during logout:', error);
            // Fallback: reload the page to ensure clean state
            window.location.reload();
        }
    }

    /**
     * Show confirmation modal
     */
    showConfirmation(title, message, onConfirm) {
        this.elements.modalTitle.textContent = title;
        this.elements.modalMessage.textContent = message;
        this.elements.confirmationModal.style.display = 'flex';
        
        // Remove previous event listeners
        const newConfirmBtn = this.elements.modalConfirm.cloneNode(true);
        this.elements.modalConfirm.parentNode.replaceChild(newConfirmBtn, this.elements.modalConfirm);
        this.elements.modalConfirm = newConfirmBtn;
        
        // Add new event listener
        this.elements.modalConfirm.addEventListener('click', () => {
            this.hideModal();
            onConfirm();
        });
    }

    /**
     * Hide modal
     */
    hideModal() {
        this.elements.confirmationModal.style.display = 'none';
    }

    /**
     * Show toast notification
     */
    showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        
        this.elements.toastContainer.appendChild(toast);
        
        // Auto-remove after 3 seconds
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 3000);
    }

    /**
     * Show loading overlay
     */
    showLoading() {
        this.elements.loadingOverlay.style.display = 'flex';
        this.state.isLoading = true;
    }

    /**
     * Hide loading overlay
     */
    hideLoading() {
        this.elements.loadingOverlay.style.display = 'none';
        this.state.isLoading = false;
    }
}

// Initialize the application when the script loads
let tracker;

// Ensure immediate initialization regardless of document state
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        tracker = new ISO9001Tracker();
    });
} else {
    // DOM is already ready
    tracker = new ISO9001Tracker();
} 