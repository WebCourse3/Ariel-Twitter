const users = [
    {
        id: 1,
        username: 'Ariel',
        avatar: 'images/avatar.png'
    },
    {
        id: 2,
        username: 'Jarin',
        avatar: 'images/avatar.png'
    },
    {
        id: 3,
        username: 'Benjamin',
        avatar: 'images/avatar.png'
    },
    {
        id: 4,
        username: 'Hole',
        avatar: 'images/avatar.png'
    },

];

const followingIds = [
    1
];

let filteredUsersGlobal = users;

loadUsers = (userToRender) => {
    const userElement = document.getElementById('users');
    userElement.innerHTML = '';
    for (const user of userToRender) {
        const element = createUserElement(user);
        userElement.appendChild(element);
    }
}

createUserElement = (user) => {
    const userElement = document.createElement('div');   
    userElement.setAttribute('class', 'user');
    userElement.setAttribute('class', 'col-xs-6');
    userElement.setAttribute('class', 'col-md-4');
    const avatarElement = document.createElement('img');
    avatarElement.setAttribute('src', user.avatar);
    avatarElement.setAttribute('alt', 'avatar');
    avatarElement.setAttribute('class', 'avatar');
    const labelElement = document.createElement('label');
    labelElement.innerText = user.username;
    const followElement = document.createElement('input');
    followElement.setAttribute('type', 'button');

    if (followingIds.includes(user.id)) {
        followElement.setAttribute('value', 'unfollow');
    } else {
        followElement.setAttribute('value', 'follow');
    }

    followElement.onclick = () => {
        if (followElement.value === 'follow') {
            followElement.value = 'unfollow'
            followingIds.push(user.id);
            refreshPage();
        } else {
            followElement.value = 'follow'
            followingIds.splice(followingIds.indexOf(user.id), 1);
            refreshPage();
        }
    }

    userElement.appendChild(avatarElement);
    userElement.appendChild(labelElement);
    userElement.appendChild(followElement);

    return userElement;
}

filter = text => {
    const filteredUsers = [];
    
    for (const user of users) {
        if (user.username.toLowerCase().includes(text.toLowerCase())) {
            filteredUsers.push(user);
        }
    }

    filteredUsersGlobal = filteredUsers;
    loadUsers(filteredUsers);
}

loadFollowingUsers = (followingToRender) => {
    const userFollowingElement = document.getElementById('following');
    userFollowingElement.innerHTML = '';

    for (const id of followingToRender) {
        for (const user of users) {
            if (user.id === id) {
                const element = createUserElement(user);
                userFollowingElement.appendChild(element);
            }
        }
    }
}

refreshPage = () => {
    loadUsers(filteredUsersGlobal);
    loadFollowingUsers(followingIds);
}

window.onload = function() {
    refreshPage();
};
