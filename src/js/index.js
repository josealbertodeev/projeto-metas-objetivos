// Carrega as metas salvas do localStorage ao iniciar
let goals = JSON.parse(localStorage.getItem('goals')) || [];

// Função para salvar as metas no localStorage
function saveGoals() {
    localStorage.setItem('goals', JSON.stringify(goals));
}

function createGoal() {
    const title = document.getElementById('goalTitle').value.trim();
    const date = document.getElementById('goalDate').value;
    const imageFile = document.getElementById('goalImage').files[0];

    if (!title) {
        alert('Por favor, preencha o título da meta!');
        return;
    }

    if (!date) {
        alert('Por favor, selecione a data de conclusão!');
        return;
    }

    const goal = {
        id: Date.now(),
        title: title,
        date: date,
        completed: false,
        tasks: [],
        image: null
    };

    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            goal.image = e.target.result;
            goals.push(goal);
            saveGoals(); // Salva no localStorage
            renderGoals();
            resetForm();
        };
        reader.readAsDataURL(imageFile);
    } else {
        goals.push(goal);
        saveGoals(); // Salva no localStorage
        renderGoals();
        resetForm();
    }
}

function previewImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.getElementById('imagePreview');
            preview.src = e.target.result;
            preview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
}

function resetForm() {
    document.getElementById('goalForm').reset();
    document.getElementById('imagePreview').style.display = 'none';
}

function renderGoals() {
    const grid = document.getElementById('goalsGrid');
    const emptyState = document.getElementById('emptyState');
    
    if (goals.length === 0) {
        emptyState.style.display = 'block';
        grid.innerHTML = '';
        return;
    }

    emptyState.style.display = 'none';
    grid.innerHTML = '';

    goals.forEach(goal => {
        const card = document.createElement('div');
        card.className = 'goal-card';
        
        const completedTasks = goal.tasks.filter(t => t.completed).length;
        const totalTasks = goal.tasks.length;
        const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

        const daysLeft = Math.ceil((new Date(goal.date) - new Date()) / (1000 * 60 * 60 * 24));
        
        card.innerHTML = `
            ${goal.image ? `<img src="${goal.image}" class="goal-image">` : ''}
            <div class="goal-title">${goal.title}</div>
            <div class="goal-date">
                <i class="fas fa-calendar-check"></i>
                ${new Date(goal.date).toLocaleDateString('pt-BR')}
                ${daysLeft > 0 ? `(${daysLeft} dias restantes)` : daysLeft === 0 ? '(Hoje!)' : '(Prazo expirado)'}
            </div>
            
            <div class="progress-container">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${progress}%"></div>
                </div>
                <div class="progress-text">${Math.round(progress)}% completo</div>
            </div>

            <div class="tasks-section">
                <h4><i class="fas fa-tasks"></i> Tarefas</h4>
                <div class="task-input-container">
                    <input type="text" class="task-input" placeholder="Adicionar tarefa..." id="taskInput-${goal.id}">
                    <button class="add-task-btn" onclick="addTask(${goal.id})">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
                <ul class="task-list" id="taskList-${goal.id}">
                    ${goal.tasks.map((task, index) => `
                        <li class="task-item">
                            <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTask(${goal.id}, ${index})">
                            <span class="task-text ${task.completed ? 'completed' : ''}">${task.text}</span>
                            <button class="delete-task-btn" onclick="deleteTask(${goal.id}, ${index})">
                                <i class="fas fa-trash"></i>
                            </button>
                        </li>
                    `).join('')}
                </ul>
            </div>

            <div class="goal-actions">
                <button class="complete-btn" onclick="completeGoal(${goal.id})">
                    <i class="fas fa-check-circle"></i> Concluir
                </button>
                <button class="delete-btn" onclick="deleteGoal(${goal.id})">
                    <i class="fas fa-trash-alt"></i> Excluir
                </button>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

function addTask(goalId) {
    const input = document.getElementById(`taskInput-${goalId}`);
    const taskText = input.value.trim();
    
    if (taskText) {
        const goal = goals.find(g => g.id === goalId);
        goal.tasks.push({ text: taskText, completed: false });
        saveGoals(); // Salva no localStorage
        renderGoals();
    }
}

function toggleTask(goalId, taskIndex) {
    const goal = goals.find(g => g.id === goalId);
    goal.tasks[taskIndex].completed = !goal.tasks[taskIndex].completed;
    saveGoals(); // Salva no localStorage
    renderGoals();
}

function deleteTask(goalId, taskIndex) {
    const goal = goals.find(g => g.id === goalId);
    goal.tasks.splice(taskIndex, 1);
    saveGoals(); // Salva no localStorage
    renderGoals();
}

function completeGoal(goalId) {
    showCelebration();
    createConfetti();
    
    setTimeout(() => {
        deleteGoal(goalId);
    }, 3000);
}

function deleteGoal(goalId) {
    goals = goals.filter(g => g.id !== goalId);
    saveGoals(); // Salva no localStorage
    renderGoals();
}

function showCelebration() {
    const celebration = document.getElementById('celebration');
    celebration.style.display = 'block';
    
    setTimeout(() => {
        celebration.style.display = 'none';
    }, 3000);
}

function createConfetti() {
    const colors = ['#a78bfa', '#ec4899', '#10b981', '#f59e0b', '#ef4444', '#3b82f6'];
    
    for (let i = 0; i < 80; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            confetti.style.width = (Math.random() * 10 + 5) + 'px';
            confetti.style.height = confetti.style.width;
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 3000);
        }, i * 20);
    }
}

// Renderiza as metas salvas ao carregar a página
renderGoals();