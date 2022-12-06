const users = [
    {
        id: "0",
        name: "Gabriel de Godoy Braz",
        age: 10,
        posts: [{
            id: "0",
            text: "Este é um post!",
            user: {
                id: "0",
                name: "Gabriel de Godoy Braz",
                age: 10,
            },
            reactions: [{
                id: '0',
                type: 'like',
                user: {
                    id: "0",
                    name: "Gabriel de Godoy Braz",
                    age: 10,
                },
            }],
            comments: [{
                id: '0',
                text: 'que post legal!',
                post: {
                    id: "0",
                    text: "Este é um post!",
                    reactions: {
                        id: '0',
                        type: 'like',
                        user: {
                            id: "0",
                            name: "Gabriel de Godoy Braz",
                            age: 10,
                        },
                    },
                }
            }],
            reactions: [{
                id: '0',
                type: 'like',
                post: {
                    id: "0",
                    text: "Este é um post!",
                }
            }]
        }]
    }
]

const comments = [
    {
        id: '0',
        text: 'que post legal!',
        post: {
            id: "0",
            text: "Este é um post!",
            reactions: {
                id: '0',
                type: 'like',
                user: {
                    id: "0",
                    name: "Gabriel de Godoy Braz",
                    age: 10,
                },
            },
        },
        user: {
            id: "0",
            name: "Gabriel de Godoy Braz",
            age: 10,
        }
    }
]

const posts = [
    {
        id: "0",
        text: "Este é um post!",
        user: {
            id: "0",
            name: "Gabriel de Godoy Braz",
            age: 10,
        },
        reactions: [{
            id: '0',
            type: 'like',
            user: {
                id: "0",
                name: "Gabriel de Godoy Braz",
                age: 10,
            },
        }],
        comments: [{
            id: '0',
            text: 'que post legal!',
            post: {
                id: "0",
                text: "Este é um post!",
                reactions: {
                    id: '0',
                    type: 'like',
                    user: {
                        id: "0",
                        name: "Gabriel de Godoy Braz",
                        age: 10,
                    },
                },
            }
        }],
        reactions: [{
            id: '0',
            type: 'like',
            post: {
                id: "0",
                text: "Este é um post!",
            }
        }]
    }
]

const reactions = [
    {
        id: '0',
        type: 'like',
        post: {
            id: "0",
            text: "Este é um post!",
        },
        user: {
            id: "0",
            name: "Gabriel de Godoy Braz",
            age: 10,
        }
    }
]

export const resolvers = { 
    Query: {
        listUsers()  {
            return users;
        },
        listPosts()  {
            return posts;
        },
        listComments()  {
            return comments;
        },
        reactionPercentual()  {
            var lenght = reactions.length
            var like = reactions.filter(reaction => reaction.type === "like").length / lenght * 100
            var dislike = reactions.filter(reaction => reaction.type === "dislike").length / lenght * 100
            return {
                reactions: reactions,
                likes: `${like}%`,
                dislikes: `${dislike}%`
            }
        },
    }
}