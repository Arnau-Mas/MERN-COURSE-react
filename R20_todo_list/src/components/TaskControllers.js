export default class TaskControllers {
    static getTasks(){
        const json = localStorage.getItem('tasks');
        if (!json) return [];
        return JSON.parse(json)
    }

    static deleteTask(id){
        const tasks = TaskControllers.getTasks();
        const newTasks = tasks.filter(task => task.id!=id );
        TaskControllers.saveAll(newTasks);
        return newTasks;
      }
    
    static addTask(task){
        const tasks = TaskControllers.getTasks();
        tasks.push(task);
        this.saveAll(tasks);
    }
    
    static saveAll = (data) => {
        const json = JSON.stringify(data);
        localStorage.setItem('tasks', json);
    }
}