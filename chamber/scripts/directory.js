 document.addEventListener('DOMContentLoaded', function() {
            const directory = document.getElementById('directory');
            const gridViewBtn = document.getElementById('gridView');
            const listViewBtn = document.getElementById('listView');

            // Initial load of members in grid view
            fetchMembers('grid');

            // Event listeners for grid view and list view buttons
            gridViewBtn.addEventListener('click', function() {
                fetchMembers('grid');
            });

            listViewBtn.addEventListener('click', function() {
                fetchMembers('list');
            });

            function fetchMembers(view) {
                fetch('data/members.json')
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then(data => displayMembers(data, view))
                    .catch(error => console.error('Error fetching members:', error));
            }

            function displayMembers(data, view) {
                directory.innerHTML = '';
                directory.className = ''; // Reset class attribute

                if (view === 'grid') {
                    directory.classList.add('grid');
                } else {
                    directory.classList.add('list');
                }

                data.forEach(member => {
                    const memberElement = document.createElement('div');
                    memberElement.classList.add('member');

                    const memberImg = document.createElement('img');
                    memberImg.src = member.image;
                    memberImg.alt = `${member.name} logo`;

                    const memberInfo = document.createElement('div');
                    memberInfo.classList.add('member-info');

                    const memberName = document.createElement('h2');
                    memberName.textContent = member.name;

                    const memberAddress = document.createElement('p');
                    memberAddress.textContent = member.address;

                    const memberPhone = document.createElement('p');
                    memberPhone.textContent = member.phone;

                    const memberWebsite = document.createElement('a');
                    memberWebsite.href = member.website;
                    memberWebsite.textContent = 'Visit Website';
                    memberWebsite.target = '_blank';

                    const memberMembership = document.createElement('p');
                    memberMembership.textContent = `Membership: ${member.membership}`;

                    memberInfo.append(memberName, memberAddress, memberPhone, memberMembership, memberWebsite);
                    memberElement.append(memberImg, memberInfo);
                    directory.appendChild(memberElement);
                });
            }
        });
