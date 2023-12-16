const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  if (license === "MIT") {
    badge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
  } else if (license === "IBM") {
      badge = "![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)"
  } else if (license === "Apache") {
    badge = "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)"
  } else {
    badge= "";
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "IBM") {
    return "https://opensource.org/licenses/IPL-1.0";
  } else if (license === "Apache") {
    return "https://opensource.org/licenses/Apache-2.0";
  } else {
    license = "";
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let renderLicense = "";
  if (renderLicense === "None") {
    renderLicense = "";
  } else {
    renderLicense = `License: ${license}`;
  }
  return renderLicense;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Table of Contents:
  [Description](https://github.com/heyitsmejadah/read-me-generator/edit/main/README.md#description)<br>
  [License](https://github.com/heyitsmejadah/read-me-generator/edit/main/README.md#license)<br>
  [Usage Instructions](https://github.com/heyitsmejadah/read-me-generator/edit/main/README.md#how-to-use)<br>
  [Installation](https://github.com/heyitsmejadah/read-me-generator/edit/main/README.md#installation)<br>
  [Reporting](https://github.com/heyitsmejadah/read-me-generator/edit/main/README.md#reporting)<br>
  [Contributing](https://github.com/heyitsmejadah/read-me-generator/edit/main/README.md#contributing)<br>
  [Contributers](https://github.com/heyitsmejadah/read-me-generator/edit/main/README.md#contributers)<br>
  [Testing](https://github.com/heyitsmejadah/read-me-generator/edit/main/README.md#testing)<br>
  [Questions](https://github.com/heyitsmejadah/read-me-generator/edit/main/README.md#questions)<br>
  ## Description: ${data.description}
  ## License: ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ## Usage Instructions: ${data.usage}
  ## Installation: ${data.installation}
  ## Reporting: ${data.reporting}
  ## Contributing: ${data.contributing}
  ## Contributers: ${data.contributers}
  ## Testing: ${data.tests}
  ## Questions?
  https://github.com/${data.github}
  ${data.email}`
}

module.exports = generateMarkdown;