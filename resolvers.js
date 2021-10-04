const { artists, posts } = require('./data'); 

module.exports.resolvers = {
    Query: {
      posts: () => posts,
    },
    Post: {
        // author: (parent) => 
        artists: (post) => {
            console.log(post);
            return artists.filter(artist => post.artistIds.indexOf(artist.id) != -1);
        }
    }
};