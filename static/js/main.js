document.getElementById('helloBtn').addEventListener('click', async function() {
    try {
        const response = await fetch('/api/hello?name=Student');
        const data = await response.json();
        alert(data.message);
    } catch (error) {
        console.error('Error:', error);
    }
});

document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    try {
        const response = await fetch('/api/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                message: message
            })
        });

        const data = await response.json();
        const responseDiv = document.getElementById('response');

        if (data.status === 'success') {
            responseDiv.textContent = 'Message sent successfully!';
            responseDiv.className = 'success';
            document.getElementById('contactForm').reset();
        } else {
            responseDiv.textContent = 'Error sending message';
            responseDiv.className = 'error';
        }
    } catch (error) {
        console.error('Error:', error);
        const responseDiv = document.getElementById('response');
        responseDiv.textContent = 'Network error occurred';
        responseDiv.className = 'error';
    }
});
