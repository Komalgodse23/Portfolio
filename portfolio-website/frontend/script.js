function scrollToProjects() {
  document.getElementById('projects').scrollIntoView({
    behavior: 'smooth'
  });
}

const form = document.getElementById('contactForm');
const responseMessage = document.getElementById('responseMessage');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        message
      })
    });

    const data = await response.json();

    responseMessage.innerText = data.message;

    form.reset();
  } catch (error) {
    responseMessage.innerText = 'Something went wrong';
  }
});