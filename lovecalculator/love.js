
function calculateLove() {
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();
    const result = document.getElementById("result");

    // Clear previous results
    result.innerHTML = "";

    // Check for empty input
    if (name1 === "" || name2 === "") {
        alert("Please enter both names.");
        return;
    }

    // Generate a random percentage (10% to 100% to avoid 0%)
    const lovePercentage = Math.floor(Math.random() * 91) + 10;

    // Generate message based on love percentage
    let message = "";
    if (lovePercentage < 30) {
        message = "💔 Not a great match. Keep looking!";
    } else if (lovePercentage >= 30 && lovePercentage < 70) {
        message = "💑 There is potential. Give it a try!";
    } else {
        message = "💖 Great Match! Love is in the air!";
    }

    // Display result
    result.innerHTML = `<p>${name1} & ${name2}'s Love Percentage: <strong>${lovePercentage}%</strong></p>
                        <p>${message}</p>`;
}

