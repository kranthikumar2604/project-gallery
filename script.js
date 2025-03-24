const tasks = [
    { title: "Task 1", url: "./task1.html" },
    { title: "Task 2", url: "./task9.html" },
    { title: "Task 3", url: "./task10.html" },
    { title: "Task 4", url: "./task12.html" },
    { title: "Task 5", url: "./task13.html" },
    { title: "task 6", url: "./task2.html" },
    { title: "task 7", url: "./task4.html" },
    { title: "task 8", url: "./task5.html" },
    { title: "task 9", url: "./task6.html" },
    { title: "task 10", url: "./task8.html" },
    { title: "task 11", url: "./task14.html" },
    { title: "task 12", url: "./task15.html" },
    { title: "task 13", url: "./task16.html"}
    
   
];

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





