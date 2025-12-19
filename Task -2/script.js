
        document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. TODO LIST FUNCTIONALITY (DOM Manipulation)
    // ==========================================
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    function addTask() {
        const text = taskInput.value.trim();
        
        if (text === "") {
            alert("Please enter a task!");
            return;
        }

        // Create LI Element
        const li = document.createElement('li');
        li.className = 'task-item';

        // Create Content Span
        const span = document.createElement('span');
        span.textContent = text;
        span.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        // Create Delete Button
        const delBtn = document.createElement('button');
        delBtn.innerHTML = '<i class="fas fa-trash"></i>'; // FontAwesome Icon
        delBtn.className = 'delete-btn';
        delBtn.addEventListener('click', () => {
            li.style.opacity = '0';
            setTimeout(() => li.remove(), 300);
        });

        // Append elements
        li.appendChild(span);
        li.appendChild(delBtn);
        taskList.appendChild(li);

        // Clear input
        taskInput.value = '';
    }

    // Event Listeners for Task List
    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if(e.key === 'Enter') addTask();
    });


    // ==========================================
    // 2. FORM VALIDATION LOGIC
    // ==========================================
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const msgInput = document.getElementById('message');
    const successMsg = document.getElementById('successMessage');

    // Helper: Check Email Regex
    function isEmailValid(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Helper: Set Error State
    function setError(input, isError) {
        const formControl = input.parentElement;
        if(isError) {
            formControl.classList.add('error');
        } else {
            formControl.classList.remove('error');
        }
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        // Validate Name
        if(nameInput.value.trim() === '') {
            setError(nameInput, true);
            isValid = false;
        } else {
            setError(nameInput, false);
        }

        // Validate Email
        if(!isEmailValid(emailInput.value.trim())) {
            setError(emailInput, true);
            isValid = false;
        } else {
            setError(emailInput, false);
        }

        // Validate Message
        if(msgInput.value.trim().length < 10) {
            setError(msgInput, true);
            isValid = false;
        } else {
            setError(msgInput, false);
        }

        // Success Action
        if(isValid) {
            successMsg.style.display = 'block';
            // Optional: Send data to server here
            
            // Reset form after 3 seconds
            setTimeout(() => {
                form.reset();
                successMsg.style.display = 'none';
                // Remove any lingering success outlines if you added them
            }, 3000);
        }
    });

});