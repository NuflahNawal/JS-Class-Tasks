function post() {
    console.log("post");
    var title = document.getElementById("title")
    var caption = document.getElementById("caption")
    console.log(title, caption);
    postContainer = getElementById("postContainer")
    postContainer.innerHtml = `<div class="card mt-3">
    <div class="card-header bgColor text-light">
        @blog
    </div>
    <div class="card-body">
        <figure>
            <blockquote class="blockquote">
                <p>${title}</p>
            </blockquote>
            <figcaption class="blockquote-footer">
                ${caption}
            </figcaption>
        </figure>
    </div>
    <div class="ms-auto">
        <button class="btn bgColor text-light ps-3 pe-3">Edit</button>
        <button class="btn btn-danger m-2">Delete</button>
    </div>
</div>`
}