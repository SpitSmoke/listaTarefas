document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('taskForm').reset();
  
    const taskList = document.getElementById('taskList');
    taskList.addEventListener('click', function (event) {
      if (event.target.tagName === 'LI') {
        toggleTaskStatus(event.target);
      }
    });
  });
  
  function addTask() {
    const taskName = document.getElementById('taskName').value;
  
    if (taskName.trim() !== '') {
      const taskList = document.getElementById('taskList');
      
      const taskItem = document.createElement('li');
      taskItem.innerHTML = `
        <span>${taskName}</span>
        <button onclick="removeTask(this)">Remover</button>
      `;
      
      taskList.appendChild(taskItem);
  
      document.getElementById('taskForm').reset();
    }
  }
  
  function removeTask(button) {
    const taskItem = button.parentNode;
    const taskList = document.getElementById('taskList');
    taskList.removeChild(taskItem);
  }
  
  function toggleTaskStatus(taskItem) {
    const taskText = taskItem.querySelector('span');
    taskText.style.textDecoration = taskText.style.textDecoration === 'line-through' ? 'none' : 'line-through';
  }
  