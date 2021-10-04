const { artists, posts } = require('./data'); 

module.exports.resolvers = {
    Query: {
      posts: () => posts,
    },
    Post: {
        artists: (post) => {
            // this function doesnt get called if i dont include artists in the request fields of post
            console.log(post);
            return artists.filter(artist => post.artistIds.indexOf(artist.id) != -1);
        }
    }
};