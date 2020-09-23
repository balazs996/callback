'use strict';

const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' },
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function removePost() {
    posts.shift();
}

function changePost() {
    console.log();
    //posts[2].title.replace('Three', 'Four');
}

function createPost(post, callback1, callback2, callback3) {
    setTimeout(() =>{
        posts.push(post);
        callback1(posts);
        callback2();
        callback3();
    }, 2000);
    
}



createPost({ title: 'Post Three', body: 'This is post three'}, changePost, removePost, getPosts,);