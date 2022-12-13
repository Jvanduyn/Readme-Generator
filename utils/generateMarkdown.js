// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
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


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return "This project is licensed under ${data.license} ${renderLicenseLink(data.license)}."
  }
  else if (license === "APACHE") {
    return "This project is licensed under ${data.license} ${renderLicenseLink(data.license)}."
  }
  else if (license === "GNU GPL") {
    return "This project is licensed under ${data.license} ${renderLicenseLink(data.license)}."
  }
  else if (license === "BSD") {
    return "This project is licensed under ${data.license} ${renderLicenseLink(data.license)}."
  }
  else {
    return ""
  }
}

//function for read me file template
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Contact](#Contact)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## License

  ${renderLicenseSection(data.license)}${renderLicenseLink(data.license)}
  
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