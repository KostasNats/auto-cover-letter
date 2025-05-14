function generateLetter() {
  const name = document.getElementById("name").value;
  const position = document.getElementById("position").value;
  const company = document.getElementById("company").value;
  const background = document.getElementById("background").value;

  const letter = `
Dear Hiring Manager at ${company},

My name is ${name}, and I am currently studying ${background}. I was excited to see the opening for the ${position} role at your company.

I am passionate about technology and eager to contribute to a dynamic team like yours. I believe my background and motivation make me a strong fit for this position.

Thank you for considering my application. I would love the opportunity to discuss how I can contribute to ${company}.

Sincerely,  
${name}
  `;

  document.getElementById("output").innerText = letter;
}
