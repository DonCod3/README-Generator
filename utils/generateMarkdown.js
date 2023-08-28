// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if(!data.licenseConfirm) {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if(!data.licenseConfirm) {
    return '';
  }

  return `
  ## License
  This project is licensed under the ${data.license} license.
  `
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

  ## Description
  ${data.projectDescription}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#Contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  ${renderImage(data)}
  ${renderLicenseSection(data)}

  ## Contributions
  ${data.contributions}

  ## Tests
  ${data.tests}

  ## Questions
  If there are any questions on this project, please reach out to me through my [Github profile](https://github.com/${data.github}), or email at ${data.email}.
`;
}

module.exports = generateMarkdown;
