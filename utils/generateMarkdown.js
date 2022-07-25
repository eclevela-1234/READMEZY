// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

module.exports = (READMEdata) => {
  const { name, description, github, email, sections, sectionContent } =
    READMEdata;
  return `
# ${name}

**${description}**

## Table of Contents

${sections
  .map((section) => {
    return `
[${section}](#${section.toLowerCase().split(" ").join("-")})\n`;
  })
  .join("")}

${Object.entries(sectionContent[0]).map(([key, value]) => {
  return `
## ${key}\n
${value}`;
})}

`;
};
