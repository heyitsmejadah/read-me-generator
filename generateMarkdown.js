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
  ## Purpose: ${data.description}
  ## License: ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ## How To Use: ${data.usage}
  ## How To Install: ${data.installation}
  ## How To Report Issues ${data.reporting}
  ## How To Contribute: ${data.contributing}
  ## Contributers: ${data.contributers}
  ## Testing: ${data.tests}
  ## For any questions, check out my GitHub: 
  https://github.com/${data.github}
  Or contact me at this email: ${data.email}`
}

module.exports = generateMarkdown;