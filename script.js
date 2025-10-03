// ===== Legacy functions =====
function legacyAlert() {
  alert("This is an inline onclick event (bad practice).");

  // document.write (deprecated)
  document.write("<p style='color:red'>document.write was used — deprecated</p>");

  // Synchronous XHR (bad)
  try {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", false); // false = sync
    xhr.send(null);
    console.log("Synchronous XHR result:", xhr.responseText);
  } catch (e) {
    console.error("Sync XHR blocked:", e);
  }
}

// ===== Modern functions =====
document.addEventListener("DOMContentLoaded", () => {
  const modernBtn = document.getElementById("modern-btn");
  if (modernBtn) {
    modernBtn.addEventListener("click", async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await res.json();
        document.getElementById("modern-output").textContent =
          "Fetched with fetch(): " + JSON.stringify(data);
      } catch (err) {
        console.error("Fetch failed:", err);
      }
    });
  }
});
