// Define an array of team member objects
const teamMembers = [
  {
    name: 'John Doe',
    photo: 'john-doe.jpg',
    position: 'CEO',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam diam in nibh bibendum, id sollicitudin metus tempor.',
    social: {
      twitter: 'https://twitter.com',
      facebook: 'https://facebook.com',
      linkedin: 'https://linkedin.com'
    },
    contributions: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Duis et augue quis urna blandit lacinia.',
      'Proin vel augue vestibulum, euismod libero in, pharetra orci.'
    ]
  },
  {
    name: 'Jane Doe',
    photo: 'jane-doe.jpg',
    position: 'CTO',
    bio: 'Sed malesuada augue eu urna auctor, vel molestie urna gravida. Maecenas hendrerit tellus ac odio iaculis bibendum.',
    social: {
      twitter: 'https://twitter.com',
      facebook: 'https://facebook.com',
      linkedin: 'https://linkedin.com'
    },
    contributions: [
      'Maecenas consectetur mauris eu elit euismod, in pharetra nulla hendrerit.',
      'Nam sed magna nec purus sollicitudin pretium.',
      'Fusce consequat ipsum in elit aliquet, nec vestibulum purus tristique.'
    ]
  },
  {
    name: 'Bob Smith',
    photo: 'bob-smith.jpg',
    position: 'Lead Developer',
    bio: 'Praesent eu orci sit amet ex lacinia tincidunt. Sed rhoncus, urna at dictum ultricies, urna eros mollis odio, in congue neque risus vitae justo.',
    social: {
      twitter: 'https://twitter.com',
      facebook: 'https://facebook.com',
      linkedin: 'https://linkedin.com'
    },
    contributions: [
      'Nulla facilisi. Fusce pellentesque erat vel est imperdiet feugiat.',
      'Suspendisse aliquet nisi non diam pulvinar ultrices.',
      'Donec ac ante a eros sagittis faucibus eu vel eros.'
    ]
  }
];

// Select the team-members element
const teamMembersContainer = document.querySelector('.team-members');

// Loop through the teamMembers array and create the HTML for each team member
let teamHTML = '';
teamMembers.forEach((member) => {
  // Create the HTML for the member's social links
  let socialHTML = '';
  for (let [key, value] of Object.entries(member.social)) {
    socialHTML += `<li><a href="${value}" target="_blank"><i class="fab fa-${key}"></i></a></li>`;
  }
  
  // Create the HTML for the member's contributions
  let contributionsHTML = '';
  member.contributions.forEach((contribution) => {
    contributionsHTML += `<li>${contribution}</li>`;
  });
  
  // Create the HTML for the member card
  teamHTML += `
    <div class="team-member">
      <img src="images/${member.photo}" alt="${member.name}">
      <div class="member-info">
        <h3>${member.name}</h3>
        <p>${member.position}</p>
        <ul class="social-links">${socialHTML}</ul>
        <div class="contrib
