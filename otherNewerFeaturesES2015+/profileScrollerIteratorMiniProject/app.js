const data = [
  {
    name: 'Moneer',
    age: 31,
    gender: 'male',
    lookingfor: 'Meagan',
    location: 'Los Angeles',
    image: 'https://randomuser.me/api/portraits/men/86.jpg',
  },
  {
    name: 'Meagan',
    age: 27,
    gender: 'female',
    lookingfor: 'Moneer',
    location: 'Los Angeles',
    image: 'https://randomuser.me/api/portraits/women/91.jpg',
  },
  {
    name: 'Raja',
    age: 4,
    gender: 'male',
    lookingfor: 'Meagan',
    location: 'Los Angeles',
    image: 'https://randomuser.me/api/portraits/men/18.jpg',
  },
];

const profiles = profilerIterator(data);

// CALL FIRST PROFILE
nextProfile();

// NEXT EVENT
document.getElementById('next').addEventListener('click', nextProfile);

// NEXT PROFILE DISPLAY
function nextProfile() {
  const currentProfile = profiles.next().value;


  if(currentProfile !== undefined) {
  document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
      <li class="list-group-item">Name: ${currentProfile.name}</li>
      <li class="list-group-item">Age: ${currentProfile.age}</li>
      <li class="list-group-item">Gender: ${currentProfile.gender}</li>
      <li class="list-group-item">Looking For: ${currentProfile.lookingfor}</li>
      <li class="list-group-item">location: ${currentProfile.location}</li>
    </ul>
  `;
  
  document.getElementById('imageDisplay').innerHTML = `
    <img src="${currentProfile.image}">
  `;
  } else {
    // NO MORE PROFILES TO LOAD - RELOAD BROWSER
    window.location.reload();
  }
}

// PROFILE ITERATOR
function profilerIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length ? 
      { value: profiles[nextIndex++], done: false } :
      { done:true }
    }
  };
}