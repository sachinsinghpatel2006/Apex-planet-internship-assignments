// Select the button using its ID
const interactiveBtn = document.getElementById('interactiveBtn');

// Add the event listener for the 'click' event
interactiveBtn.addEventListener('click', () => {
    
    // 1. Trigger the standard browser alert
    alert("🚀 JavaScript Logic Executed! \n\nThis is a standard alert box triggered by your modern button.");

    // 2. DOM Manipulation: Change the button text after the click
    // This shows that JS can change the page without reloading
    const originalText = interactiveBtn.innerText;
    
    interactiveBtn.innerText = "Success! ✅";
    interactiveBtn.style.background = "#10b981"; // Change color to green

    // Reset the button after 2 seconds
    setTimeout(() => {
        interactiveBtn.innerText = originalText;
        interactiveBtn.style.background = ""; // Revert to CSS gradient
    }, 2000);
});

console.log("Modern script loaded successfully.");