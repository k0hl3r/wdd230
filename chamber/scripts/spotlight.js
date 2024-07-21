document.addEventListener('DOMContentLoaded', () => {
    const spotlightContainer = document.getElementById('spotlight-container');

    fetch('data/members.json') 
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(members => {
            console.log('Fetched members:', members);

            
            const filteredMembers = members.filter(member => 
                member.membership.includes('Gold') || member.membership.includes('Silver')
            );
            console.log('Filtered members:', filteredMembers); 

            
            const shuffled = filteredMembers.sort(() => 0.5 - Math.random());
            const selectedMembers = shuffled.slice(0, 3);
            console.log('Selected members:', selectedMembers); 

            
            selectedMembers.forEach(member => {
                const memberDiv = document.createElement('div');
                memberDiv.innerHTML = `
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <a href="${member.website}" target="_blank">Visit Website</a>
                    <p>...</p>
                `;
                spotlightContainer.appendChild(memberDiv);
            });
        })
        .catch(error => console.error('Error loading members data:', error));
});