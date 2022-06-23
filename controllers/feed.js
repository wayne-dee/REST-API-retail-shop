exports.getPosts = (req, res, next) => {
    res.status(200).json({
        "title": "Smokies", "content": "Here is the message"
    })
}

// feed/post
exports.createPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    // store db

    res.status(201).json({
        message: "Post created successfully",
        post: {id: new Date().toISOString(), title2: title, content2: content}
    })
}

