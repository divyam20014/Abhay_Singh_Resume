import type { WorkExperience, EducationInfo, Skill, Certification } from './types';

export const PERSONAL_INFO = {
  name: "Abhay Manish Singh",
  title: "Senior Software Tester",
  email: "abhaysingh20014@gmail.com",
  phone: "7276600429",
  linkedin: "https://www.linkedin.com/in/abhaymsingh/",
  summary: "Experienced Software Tester with over 4 years of expertise, pursuing a Senior Software Tester position. Proficient in manual testing methodologies and concepts, with a strong focus on ensuring software quality. Skilled in creating detailed test cases, executing test scenarios, tracking defects, and collaborating with teams to resolve issues efficiently. Adept at identifying and mitigating risks, ensuring seamless software functionality, and enhancing the overall testing process for optimal outcomes. Eager to contribute to improving software reliability and delivering exceptional user experiences."
};

export const EXPERIENCES: WorkExperience[] = [
  {
    role: "Quality Analyst",
    company: "Quantique Metadata Private Ltd.",
    period: "April 2025 - Present",
    responsibilities: [
      "Leading and mentoring a team of software testers, fostering a culture of quality and continuous improvement.",
      "Developed and maintained comprehensive test strategies, plans, and reports for complex projects.",
      "Actively engaged in hands-on testing, including test case design, execution, and defect management.",
      "Achieved a 15% reduction in production defects by implementing a more rigorous pre-release testing checklist.",
      "Drove the adoption of Agile/Scrum methodologies within the testing team."
    ]
  },
  {
    role: "Executive Quality Analyst",
    company: "CREDILITY (i-XL Technologies Pvt Ltd)",
    period: "Nov 2023 - March 2025",
    responsibilities: [
      "Proficient in utilizing Katalon Studio for test automation, designing robust test scripts.",
      "Skilled in API testing, adept at verifying the functionality, performance, and security of APIs using tools such as Postman.",
      "Successfully collaborated with cross-functional teams to plan, execute, and deliver high-quality software releases.",
      "Demonstrated ability to identify, prioritize, and mitigate software defects."
    ]
  },
  {
    role: "Software Tester",
    company: "DATAMATICS GLOBAL SERVICE LTD",
    period: "July 2021 - August 2023",
    responsibilities: [
      "Developed and executed comprehensive test plans and test cases for web and mobile applications.",
      "Collaborated with cross-functional teams to address and resolve software defects.",
      "Worked closely with clients to understand their testing requirements and provided timely and accurate test reports.",
      "Executed test cases using positive and negative data in the quality center test lab."
    ]
  },
   {
    role: "Quality Assurance Engineer",
    company: "ARP TECHNOLOGIES",
    period: "Sept 2020 - April 2021",
    responsibilities: [
      "Involved daily interaction with the business analyst, developers and project manager.",
      "Performed UI testing and front end testing.",
      "Communicate with clients to understand and document their requirements.",
      "Prepare and present reports and metrics to senior management."
    ]
  }
];

export const EDUCATION: EducationInfo[] = [
  {
    degree: "Master Of Computer Application (M.C.A)",
    institution: "UNIVERSITY OF MUMBAI",
    period: "July 2017 - November 2020"
  },
  {
    degree: "Bachelor Of Computer Science",
    institution: "SAVITRIBAI PHULE PUNE UNIVERSITY",
    period: "July 2014 - May 2017"
  },
  {
    degree: "H.S.C",
    institution: "NATIONAL INSTITUTE OF OPEN SCHOOLING (N.I.O.S)",
    period: "July 2013 - November 2014"
  },
  {
    degree: "S.S.C",
    institution: "Maharashtra State Board Of Secondary and Higher Secondary Education",
    period: "May 2012"
  }
];

export const SKILLS: Skill[] = [
    { name: "Java", category: "Programming" },
    { name: "Python", category: "Programming" },
    { name: "SQL", category: "Database" },
    { name: "MySQL", category: "Database" },
    { name: "PL/SQL", category: "Database" },
    { name: "Katalon Studio", category: "Testing Tools" },
    { name: "Postman", category: "Testing Tools" },
    { name: "Jmeter", category: "Testing Tools" },
    { name: "Blazemeter", category: "Testing Tools" },
    { name: "Azure", category: "Testing Tools" },
    { name: "Jira", category: "Testing Tools" },
    { name: "Goodday", category: "Testing Tools" },
    { name: "Zoho", category: "Testing Tools" },
    { name: "Burp-suite", category: "Testing Tools" },
    { name: "Windows", category: "Operating Systems" },
    { name: "Linux", category: "Operating Systems" },
    { name: "MS Excel - VLookup", category: "Other Technical" },
    { name: "Pandas", category: "Other Technical" },
    { name: "Numpy", category: "Other Technical" },
    { name: "Tableau", category: "Other Technical" },
    { name: "Power BI", category: "Other Technical" }
];

export const CERTIFICATIONS: Certification[] = [
    { name: "Foundation Level Certification in Software Testing: ISTQB", issuer: "International Software Testing Qualifications Board", date: "ITB-CTFL-0090681" },
    { name: "Agile Virtual Experience Program", issuer: "J.P Morgan", date: "June 2023" },
    { name: "Agile Methodology Virtual Experience Program", issuer: "Cognizant", date: "June 2023" },
    { name: "Software Tester", issuer: "LinkedIn Learning", date: "N/A" },
    { name: "Test Automation Engineer", issuer: "LinkedIn Learning", date: "N/A" },
    { name: "Python Development Bootcamp", issuer: "Udemy", date: "N/A" },
];

export const RESUME_TEXT = `
Abhay Manish Singh
================================
7276600429 | abhaysingh20014@gmail.com | ${PERSONAL_INFO.linkedin}

SUMMARY
--------------------------------
Experienced Software Tester with over 4 years of expertise, pursuing a Senior Software Tester position. Proficient in manual testing methodologies and concepts, with a strong focus on ensuring software quality. Skilled in creating detailed test cases, executing test scenarios, tracking defects, and collaborating with teams to resolve issues efficiently. Adept at identifying and mitigating risks, ensuring seamless software functionality, and enhancing the overall testing process for optimal outcomes. Eager to contribute to improving software reliability and delivering exceptional user experiences.

- Experienced in Fin-tech Quality Assurance and functional testing of financial applications, with an additional year specializing in Insurance Domain (General and Motor Insurance).
- Adept at manual testing across the software development lifecycle, including designing, executing, and debugging test cases to ensure accurate results.
- Well-versed in functional, non-functional, and regression testing, with strong expertise in creating comprehensive test documentation (scenarios, plans, data, cases, and defect reports).

WORK EXPERIENCE
--------------------------------
Quality Analyst | Quantique Metadata Private Ltd.
(April 2025 - Present)
- Leading and mentoring a team of software testers, fostering a culture of quality and continuous improvement.
- Developed and maintained comprehensive test strategies, plans, and reports for complex projects, aligning with business objectives and technical requirements.
- Actively engaged in hands-on testing, including test case design, execution, and defect management, to maintain product integrity.
- Achieved a 15% reduction in production defects by implementing a more rigorous pre-release testing checklist and defect triage process.
- Drove the adoption of Agile/Scrum methodologies within the testing team, enhancing cross-functional collaboration.

Executive Quality Analyst | CREDILITY (i-XL Technologies Pvt Ltd)
(Nov 2023 - March 2025)
- Proficient in utilizing Katalon Studio for test automation, designing robust test scripts, and executing automated tests to ensure the quality and reliability of software applications.
- Skilled in API testing, adept at verifying the functionality, performance, and security of APIs using tools such as Postman.
- Successfully collaborated with cross-functional teams to plan, execute, and deliver high-quality software releases within tight deadlines.
- Demonstrated ability to identify, prioritize, and mitigate software defects, contributing to the overall improvement of product quality and customer satisfaction.

Software Tester | DATAMATICS GLOBAL SERVICE LTD
(July 2021 - August 2023)
- Developed and executed comprehensive test plans and test cases for web and mobile applications, ensuring high-quality software delivery.
- Collaborated with cross-functional teams, including developers, business analysts, and project managers, to address and resolve software defects.
- Worked closely with clients to understand their testing requirements and provided timely and accurate test reports.
- Executed test cases using positive and negative data in the quality center test lab and reported results and defects using the qc defects tool.

Quality Assurance Engineer | ARP TECHNOLOGIES
(Sept 2020 - April 2021)
- Involved daily interaction with the business analyst, developers and project manager.
- Performed UI testing and front end testing.
- Communicate with clients to understand and document their requirements.
- Prepare and present reports and metrics to senior management.

EDUCATION
--------------------------------
- Master Of Computer Application (M.C.A) | UNIVERSITY OF MUMBAI (July 2017 - November 2020)
- Bachelor Of Computer Science | SAVITRIBAI PHULE PUNE UNIVERSITY (July 2014 - May 2017)
- H.S.C | NATIONAL INSTITUTE OF OPEN SCHOOLING (N.I.O.S) (July 2013 - November 2014)
- S.S.C | Maharashtra State Board Of Secondary and Higher Secondary Education (May 2012)

SKILLS
--------------------------------
- Programming Language: Java, Python
- Database: SQL, MySQL, PL/SQL
- Testing Tools: Katalon studio, POSTMAN, Jmeter, Blazemeter, Azure, Jira, Goodday, Zoho, Burp-suite.
- Operating Systems: Windows, Linux.
- Other Technical skill-set: MS excel - VLookup, Pandas, Numpy, Data Visualization(Tableau & Power BI).

CERTIFICATIONS
--------------------------------
- Foundation Level Certification in Software Testing: ISTQB - International Software Testing Qualifications Board (ITB-CTFL-0090681)
- Agile Virtual Experience Program: J.P Morgan (June- 2023)
- Agile Methodology Virtual Experience Program: Cognizant (June 2023)
- Software Tester: LinkedIn Learning
- Test Automation Engineer: LinkedIn Learning
- Python Development Bootcamp: Udemy
`;