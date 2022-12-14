//function for the badges for the read me file
function renderLicenseBadge(license) {
  if (license == "MIT") {
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
  }
  else if (license == "APACHE") {
    return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)"
  }
  else if (license == "GNU GPL") {
    return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)"
  }
  else if (license == "BSD") {
    return "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)"
  }
  else {
    return ""
  }
}


//function creating a link for the license section
function renderLicenseLink(license) {
  if (license == "MIT") {
    return "https://opensource.org/licenses/MIT"
  }
  else if (license == "APACHE") {
    return "https://opensource.org/licenses/Apache-2.0"
  }
  else if (license == "GNU GPL") {
    return "https://www.gnu.org/licenses/gpl-3.0"
  }
  else if (license == "BSD") {
    return "https://opensource.org/licenses/BSD-3-Clause"
  }
  else {
    return ""
  }
}

//function for the string for the readme section
function renderLicenseSection(license) {
  if (license === "MIT") {
    return "This project is licensed under"
  }
  else if (license === "APACHE") {
    return "This project is licensed under"
  }
  else if (license === "GNU GPL") {
    return "This project is licensed under"
  }
  else if (license === "BSD") {
    return "This project is licensed under"
  }
  else {
    return ""
  }
}

//function for template literal for the readme file
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Contact](#contact)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## License

  ${renderLicenseSection(data.license)}:${renderLicenseLink(data.license)}
  
  ## Badges
  ${renderLicenseBadge(data.license)}
    
  ## Contributing
  
  ${data.contributing}

  ## Tests
  
  ${data.tests}

  ## Contact

  You can view my github at https://www.github.com/${data.github}.
  You can email me at ${data.email}.
`;
}

module.exports = generateMarkdown;