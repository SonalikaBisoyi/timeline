// scripts.js
const details = {
    "April 2018": {
        image: "images/2018.jpeg",
        text: `<h3>April 2018</h3><p>We are one of India's leading drone firms in providing end-to-end Drone Solutions</p>`
    },
    "April 2019": {
        image: "images/2019.jpg",
        text: `<h3>April 2019</h3><p>We remain a top drone provider, offering advanced and tailored aerial solutions for diverse needs.</p>`
    },
    "April 2020": {
        image: "images/2020.jpeg",
        text: `<h3>April 2020</h3><p>Our company continues to lead in drone technology, delivering innovative and customized aerial services.</p>`
    },
    "April 2021": {
        image: "images/2021.jpeg",
        text: `<h3>April 2021</h3><p>We have strengthened our position as a premier drone firm with cutting-edge technology and comprehensive solutions.</p>`
    },
    "April 2022": {
        image: "images/2022.webp",
        text: `<h3>April 2022</h3><p>We are recognized for providing superior drone services, focusing on advanced technology and end-to-end solutions.</p>`
    },
    "April 2023": {
        image: "images/2023.jpeg",
        text: `<h3>April 2023</h3><p>Our expertise in drone technology remains unmatched, offering exceptional and full-spectrum aerial solutions.</p>`
    },
    "April 2024": {
        image: "images/2024.jpg",
        text: `<h3>April 2024</h3><p>We are at the forefront of drone innovation, delivering tailored and extensive aerial solutions for every requirement.</p>`
    }
};

document.addEventListener('DOMContentLoaded', function () {
    const timelineContainer = document.querySelector('.timeline');
    const detailsContainer = document.querySelector('.details-container');
    const timelineImage = document.getElementById('timeline-image');
    const timelineText = document.getElementById('timeline-text');
    
    const startYear = 2018;
    const endYear = new Date().getFullYear();
    const months = [];

    for (let year = startYear; year <= endYear; year++) {
        months.push(`April ${year}`);
    }

    months.forEach((month, index) => {
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.style.left = `${index * (100 / (months.length - 1))}%`;
        dot.dataset.index = index;

        // Add the 'active' class to the first dot (April 2018)
        if (index === 0) {
            dot.classList.add('active');
        }

        dot.addEventListener('click', () => {
            updateDetails(month);
            document.querySelectorAll('.dot').forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
        });

        timelineContainer.appendChild(dot);

        const label = document.createElement('div');
        label.className = 'label';
        label.textContent = month;
        label.style.left = `${index * (100 / (months.length - 1))}%`;
        timelineContainer.appendChild(label);

        if (index > 0) {
            const line = document.createElement('div');
            line.className = 'line';
            line.style.left = `${(index - 1) * (100 / (months.length - 1))}%`;
            line.style.width = `${100 / (months.length - 1)}%`;
            timelineContainer.appendChild(line);
        }
    });

    function updateDetails(month) {
        if (details[month]) {
            timelineImage.src = details[month].image;
            timelineText.innerHTML = details[month].text;
            detailsContainer.classList.add('visible');
        }
    }

    // Set initial details for the first month
    updateDetails(months[0]);
});
