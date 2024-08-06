const resumeData = {
    "name": "Tanya Joshi",
    "contact": {
        "linkedin": "https://www.linkedin.com/in/tanya-joshi17",
        "email": "joshitanya17@gmail.com",
        "github": "https://github.com/TanyaJoshi123",
        "mobile": "+91-9027904034"
    },
    "skills": {
        "languages": ["R", "Python"],
        "frameworks": ["HTML", "CSS"],
        "tools_platforms": ["MySQL", "GitHub", "PowerBI", "SAP"],
        "soft_skills": ["Problem-Solving", "Team Player", "Project Management", "Adaptability"]
    },
    "experience": [
        {
            "company": "Capgemini Mumbai",
            "position": "Senior Analyst",
            "duration": "Nov 2020 - Nov 2022",
            "about": "SAP Production Planning and Quality Management",
            "responsibilities": [
                "Performed business analysis of logistics flows",
                "Provided functional specifications for the developers and prepared test scripts",
                "Conducted training sessions for key-users",
                "Gathered customer requirements",
                "Performed testing based on the test scripts"
            ],
            "tech_stacks_used": ["SAP ABAP", "SAP PP", "SAP QM"]
        }
    ],
    "projects": [
        {
            "name": "NLP: Twitter Sentiment Analysis",
            "duration": "July 2024 - Aug 2024",
            "description": [
                "Trained a Naive Bayes classifier to predict sentiment from thousands of Twitter tweets",
                "Performed exploratory data analysis",
                "Applied Python libraries to import and visualize dataset",
                "Evaluated the performance of trained Naïve Bayes Classifier model using confusion matrices"
            ],
            "tech": ["Python", "NLP"]
        },
        {
            "name": "COVID-19 Data Analysis using Python",
            "duration": "Jan 2024 - Feb 2024",
            "description": [
                "Learned how to preprocess and merge datasets to calculate needed measures",
                "Visualized the analysis results using Seaborn"
            ],
            "tech": ["Python"]
        },
        {
            "name": "AI-powered Chest Disease Detection and Classification",
            "duration": "Nov 2023 - Dec 2023",
            "description": [
                "Built, trained, and tested ResNets in Keras and TensorFlow to detect and classify chest disease from X-Ray images",
                "Performed data visualization and assessed trained classifier model performance using various KPIs"
            ],
            "tech": ["AI", "Deep Learning", "Machine Learning"]
        }
    ],
    "certificates": [
        {
            "name": "Natural Language Processing with Classification and Vector Spaces by Coursera",
            "date": "Aug 2024"
        },
        {
            "name": "Generative AI: Prompt Engineering Basics",
            "date": "Aug 2024"
        },
        {
            "name": "Data Modelling in Power BI by Coursera",
            "date": "Jan 2024"
        },
        {
            "name": "Basic Foundation on Java Programming by Internshala",
            "date": "May 2021"
        }
    ],
    "achievements": [
        {
            "name": "Navdhara: National Level Technical Fest",
            "date": "May 2017 - Jun 2017",
            "description": "Presented the working model of 'Production of Bio-Fuel' in National level technical fest Navdhara 2k17 and awarded 'Viewer's Choice' award"
        }
    ],
    "education": [
        {
            "institution": "Lovely Professional University, Punjab, India",
            "degree": "Master of Technology – Data Science",
            "cgpa": "8.22",
            "since": "Aug 2023"
        },
        {
            "institution": "Dev Bhoomi Institute Of Technology, Dehradun, Uttarakhand",
            "degree": "Bachelor of Technology – CSE",
            "percentage": "82%",
            "duration": "Aug 2016 - May 2020"
        },
        {
            "institution": "DAV Public School, Dehradun, Uttarakhand",
            "degree": "Intermediate",
            "percentage": "81%",
            "duration": "Apr 2015 - Mar 2016"
        },
        {
            "institution": "DAV Public School, Dehradun, Uttarakhand",
            "degree": "Matriculation",
            "cgpa": "10",
            "duration": "Apr 2013 - Mar 2014"
        }
    ]
};

function displayResume(resume) {
    const resumeContainer = document.getElementById('resume');

    // Name
    const nameElement = document.createElement('h1');
    nameElement.textContent = resume.name;
    resumeContainer.appendChild(nameElement);

    // Contact
    const contactSection = document.createElement('div');
    contactSection.classList.add('section');
    contactSection.innerHTML = `
        <h2>Contact</h2>
        <div>
            <p><strong>LinkedIn:</strong> <a href="${resume.contact.linkedin}" target="_blank">${resume.contact.linkedin}</a></p>
            <p><strong>Email:</strong> <a href="mailto:${resume.contact.email}">${resume.contact.email}</a></p>
            <p><strong>GitHub:</strong> <a href="${resume.contact.github}" target="_blank">${resume.contact.github}</a></p>
            <p><strong>Mobile:</strong> ${resume.contact.mobile}</p>
        </div>
    `;
    resumeContainer.appendChild(contactSection);

    // Skills
    const skillsSection = document.createElement('div');
    skillsSection.classList.add('section');
    skillsSection.innerHTML = `
        <h2>Skills</h2>
        <div>
            <p><strong>Languages:</strong> ${resume.skills.languages.join(', ')}</p>
            <p><strong>Frameworks:</strong> ${resume.skills.frameworks.join(', ')}</p>
            <p><strong>Tools/Platforms:</strong> ${resume.skills.tools_platforms.join(', ')}</p>
            <p><strong>Soft Skills:</strong> ${resume.skills.soft_skills.join(', ')}</p>
        </div>
    `;
    resumeContainer.appendChild(skillsSection);

    // Experience
    const experienceSection = document.createElement('div');
    experienceSection.classList.add('section');
    experienceSection.innerHTML = `<h2>Experience</h2>`;
    resume.experience.forEach(exp => {
        const expDiv = document.createElement('div');
        expDiv.innerHTML = `
            <h3>${exp.company} (${exp.duration})</h3>
            <p><strong>Position:</strong> ${exp.position}</p>
            <p><strong>About:</strong> ${exp.about}</p>
            <ul>
                ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
            </ul>
            <p><strong>Tech Stacks Used:</strong> ${exp.tech_stacks_used.join(', ')}</p>
        `;
        experienceSection.appendChild(expDiv);
    });
    resumeContainer.appendChild(experienceSection);

    // Projects
    const projectsSection = document.createElement('div');
    projectsSection.classList.add('section');
    projectsSection.innerHTML = `<h2>Projects</h2>`;
    resume.projects.forEach(proj => {
        const projDiv = document.createElement('div');
        projDiv.innerHTML = `
            <h3>${proj.name} (${proj.duration})</h3>
            <ul>
                ${proj.description.map(desc => `<li>${desc}</li>`).join('')}
            </ul>
            <p><strong>Tech:</strong> ${proj.tech.join(', ')}</p>
        `;
        projectsSection.appendChild(projDiv);
    });
    resumeContainer.appendChild(projectsSection);

    // Certificates
    const certificatesSection = document.createElement('div');
    certificatesSection.classList.add('section');
    certificatesSection.innerHTML = `<h2>Certificates</h2>`;
    resume.certificates.forEach(cert => {
        const certDiv = document.createElement('div');
        certDiv.innerHTML = `<p><strong>${cert.name}</strong> - ${cert.date}</p>`;
        certificatesSection.appendChild(certDiv);
    });
    resumeContainer.appendChild(certificatesSection);

    // Achievements
    const achievementsSection = document.createElement('div');
    achievementsSection.classList.add('section');
    achievementsSection.innerHTML = `<h2>Achievements</h2>`;
    resume.achievements.forEach(ach => {
        const achDiv = document.createElement('div');
        achDiv.innerHTML = `
            <p><strong>${ach.name} (${ach.date})</strong></p>
            <p>${ach.description}</p>
        `;
        achievementsSection.appendChild(achDiv);
    });
    resumeContainer.appendChild(achievementsSection);

    // Education
    const educationSection = document.createElement('div');
    educationSection.classList.add('section');
    educationSection.innerHTML = `<h2>Education</h2>`;
    resume.education.forEach(edu => {
        const eduDiv = document.createElement('div');
        eduDiv.innerHTML = `
            <p><strong>${edu.institution}</strong></p>
            <p>${edu.degree}</p>
            <p>${edu.cgpa ? `CGPA: ${edu.cgpa}` : `Percentage: ${edu.percentage}`}</p>
            <p>${edu.since ? `Since: ${edu.since}` : `Duration: ${edu.duration}`}</p>
        `;
        educationSection.appendChild(eduDiv);
    });
    resumeContainer.appendChild(educationSection);
}

document.addEventListener('DOMContentLoaded', () => {
    displayResume(resumeData);
});
