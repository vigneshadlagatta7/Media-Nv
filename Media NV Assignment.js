// Function to get details for a specific bid
function getBidDetails(row) {
    const bidDetails = `
Bid No: ${row.cells[1].textContent} (${row.cells[2].textContent})
${row.cells[5].textContent}, ${row.cells[6].textContent}, ${row.cells[7].textContent}
Loading Point: ${row.cells[8].textContent}
${row.cells[9].textContent}
Unloading Point: ${row.cells[10].textContent}
Vehicle loading date: ${row.cells[3].textContent}
Vehicle Type: ${row.cells[7].textContent}
Material: ${row.cells[9].textContent}
Weight: ${row.cells[8].textContent}
Request Date: ${row.cells[3].textContent}
Expiry Date: ${row.cells[3].textContent}
${row.cells[7].textContent}
Assigned Staff: ${row.cells[10].textContent}
Phone number: ${row.cells[11].textContent}
Target Price: Rs 5000
Number of Bidders for this Bid: 54
Remarks: Urgent Delivery`;

    return bidDetails;
}

// Add click event listener to each "View Details" button
const buttons = document.querySelectorAll('.details-btn');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const row = button.closest('tr');
        const bidDetails = getBidDetails(row);
        alert(bidDetails);
    });
});