document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll(".section");

  // Navigation functionality
  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const sectionId = link.getAttribute("data-section");

      sections.forEach(sec => sec.classList.remove("active"));
      document.getElementById(sectionId).classList.add("active");
    });
  });

  // Contact form validation
  const form = document.getElementById("contactForm");
  const formMsg = document.getElementById("formMsg");

  form.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      formMsg.textContent = "⚠️ Please fill in all fields.";
      formMsg.style.color = "red";
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      formMsg.textContent = "⚠️ Please enter a valid email.";
      formMsg.style.color = "red";
      return;
    }

    formMsg.textContent = "✅ Message sent successfully!";
    formMsg.style.color = "green";
    form.reset();
  });

  // To-do list functionality
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.innerHTML = `${taskText} <button>❌</button>`;
    
    li.querySelector("button").addEventListener("click", () => {
      li.remove();
    });

    taskList.appendChild(li);
    taskInput.value = "";
  });
});
