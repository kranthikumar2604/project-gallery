const tasks = [
    { title: "Task 1-hover", url: "./projects/task 1/task1.html" },
    { title: "Task 2-sum", url: "./projects/task 7/task9.html" },
    { title: "Task 3-student info", url: "./projects/task 8/task10.html" },
    { title: "Task 4-random value", url: "./projects/task 9/task12.html" },
    { title: "Task 5-creative sites", url: "./projects/task 10/task13.html" },
    { title: "task 6-javascript", url: "./projects/task 2/task2.html" },
    { title: "task 7-alert", url: "./projects/task 3/task4.html" },
    { title: "task 8-calculator", url: "./projects/task 4/task5.html" },
    { title: "task 9-string operations", url: "./projects/task 5/task6.html" },
    { title: "task 10-grading calculator", url: "./projects/task 6/task8.html" },
    { title: "task 11-age calculator", url: "./projects/task 11/task14.html" },
    { title: "task 12-stack", url: "./projects/task 12/task15.html" },
    { title: "task 13-dashboard", url: "./projects/task 13/task16.html"}
    
   
];
//kranthi
const navDiv = document.getElementById("nav_div");
const contentFrame = document.getElementById("content_frame");
const defaultText = document.getElementById("default_text");

// Clear the navigation before adding new tasks
navDiv.innerHTML = "";

// Dynamically create navigation links for each task
tasks.forEach(task => {
    let navItem = document.createElement("div");
    navItem.classList.add("nav_item");
    navItem.innerText = task.title;

    // When clicked, display the task in the iframe
    navItem.onclick = function () {
        contentFrame.src = task.url;
        contentFrame.style.display = "block"; // Show iframe
        defaultText.style.display = "none"; // Hide default text
    };

    navDiv.appendChild(navItem); // Add task to navigation
});





