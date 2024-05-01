document.getElementById('smsForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const phoneNumber = document.getElementById('phoneNumber').value;
    
    fetch(`send_sms.php?phoneNumber=${phoneNumber}`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('response').textContent = data;
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
