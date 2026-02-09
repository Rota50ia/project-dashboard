// Load and display dashboard data
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('data.json');
        const data = await response.json();

        renderDashboard(data);
    } catch (error) {
        console.error('Error loading dashboard data:', error);
        showError();
    }
});

function renderDashboard(data) {
    // Update header
    document.getElementById('lastUpdate').textContent = formatDate(data.lastUpdate);

    // Update statistics
    document.getElementById('expansionPacks').textContent = data.statistics.expansionPacksInstalled;
    document.getElementById('skillsAvailable').textContent = data.statistics.skillsAvailable + '+';
    document.getElementById('activeProjects').textContent = data.statistics.activeProjects;
    document.getElementById('completedProjects').textContent = data.statistics.completedProjects;

    // Render active projects
    renderActiveProjects(data.activeProjects);

    // Render completed projects
    renderCompletedProjects(data.completedProjects);

    // Render learnings
    renderLearnings(data.learnings);
}

function renderActiveProjects(projects) {
    const container = document.getElementById('activeProjectsContainer');
    container.innerHTML = '';

    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = `project-card ${project.status}`;

        let statusBadge = '';
        let statusText = '';

        switch(project.status) {
            case 'planned':
                statusBadge = 'planned';
                statusText = 'Planejado';
                break;
            case 'in-progress':
                statusBadge = 'in-progress';
                statusText = 'Em Andamento';
                break;
            case 'completed':
                statusBadge = 'completed';
                statusText = 'Concluído';
                break;
        }

        let priorityBadge = '';
        if (project.priority) {
            priorityBadge = `<span class="badge ${project.priority}">${project.priority === 'high' ? 'Alta' : project.priority === 'medium' ? 'Média' : 'Baixa'}</span>`;
        }

        let htmlContent = `
            <div class="project-header">
                <h3 class="project-title">${project.name}</h3>
                <div class="badges">
                    <span class="badge ${statusBadge}">${statusText}</span>
                    ${priorityBadge}
                </div>
            </div>
            <p class="project-description">${project.description}</p>
        `;

        // Progress bar
        if (project.progress !== undefined) {
            htmlContent += `
                <div class="progress-section">
                    <div class="progress-bar">
                        <div class="progress-fill ${project.status}" style="width: ${project.progress}%"></div>
                    </div>
                    <p class="progress-text">Progresso: ${project.progress}%</p>
                </div>
            `;
        }

        // Includes/What it includes
        if (project.includes && project.includes.length > 0) {
            htmlContent += `
                <div class="project-list">
                    <h4>📦 O que inclui:</h4>
                    <ul>
                        ${project.includes.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
            `;
        }

        // Completed items
        if (project.completed && project.completed.length > 0) {
            htmlContent += `
                <div class="project-list completed-items">
                    <h4>✅ Concluído:</h4>
                    <ul>
                        ${project.completed.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
            `;
        }

        // Next steps
        if (project.nextSteps && project.nextSteps.length > 0) {
            htmlContent += `
                <div class="project-list next-steps">
                    <h4>📋 Próximos Passos:</h4>
                    <ul>
                        ${project.nextSteps.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
            `;
        }

        // Notes
        if (project.notes && project.notes.length > 0) {
            htmlContent += `
                <div class="project-notes">
                    ${project.notes.map(note => `<p>💡 ${note}</p>`).join('')}
                </div>
            `;
        }

        card.innerHTML = htmlContent;
        container.appendChild(card);
    });
}

function renderCompletedProjects(projects) {
    const container = document.getElementById('completedProjectsContainer');
    container.innerHTML = '';

    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'completed-card';

        card.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            ${project.completedDate ? `<span class="completed-date">${project.completedDate}</span>` : ''}
        `;

        container.appendChild(card);
    });
}

function renderLearnings(learnings) {
    const container = document.getElementById('learningsContainer');
    container.innerHTML = '';

    learnings.forEach(learning => {
        const card = document.createElement('div');
        card.className = 'learning-card';

        card.innerHTML = `
            <h3 class="learning-title">${learning.title}</h3>
            <p class="learning-description">${learning.description}</p>
            <span class="learning-date">${formatDate(learning.date)}</span>
        `;

        container.appendChild(card);
    });
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('pt-BR', options);
}

function showError() {
    const container = document.querySelector('.container');
    container.innerHTML = `
        <div style="background: white; padding: 3rem; border-radius: 1rem; text-align: center; box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);">
            <h2 style="color: #ef4444; margin-bottom: 1rem;">⚠️ Erro ao Carregar Dashboard</h2>
            <p style="color: #6b7280;">Não foi possível carregar os dados. Verifique se o arquivo data.json está presente e válido.</p>
        </div>
    `;
}
