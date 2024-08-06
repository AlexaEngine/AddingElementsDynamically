document.addEventListener("DOMContentLoaded", function() {
    // Function to be called when the button is clicked
    function addParagraph() {
        // Create a new paragraph element
        const newParagraph = document.createElement("p");
        // Set the initial text content
        newParagraph.textContent =
            "This is a repeated message!";
        // Append the new paragraph to the body or any other container
        document.body.appendChild(newParagraph);
    }

    // Add event listener to the button if it exists
    const addButton = document.getElementById("addParagraphBtn");
    if (addButton) {
        addButton.addEventListener("click", addParagraph);
    }
});
