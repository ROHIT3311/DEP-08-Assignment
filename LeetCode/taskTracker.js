const tasks = [
  { taskName: "Write report", completed: true, priority: 2 },
  { taskName: "Attend meeting", completed: false, priority: 3 },
  { taskName: "Fix bug", completed: false, priority: 1 },
  { taskName: "Update website", completed: true, priority: 4 },
];

const maxPriority = Math.max(...tasks.map((task) => task.priority));

const maxPriorityTask = tasks.find((task) => {
  return task.priority === maxPriority;
});

console.log(maxPriorityTask);

const firstIncompleteTask = tasks.findIndex((task) => task.completed === false);
console.log(firstIncompleteTask);

let count = 0;
const totalCompletedTask = tasks.reduce((total, task) => {
  return task.completed == true ? total + 1 : total;
}, 0);

console.log("totalCompletedTask", totalCompletedTask);

tasks.forEach((task) => console.log(task.taskName));
