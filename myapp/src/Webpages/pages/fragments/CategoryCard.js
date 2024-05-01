import React from "react";
import {Link} from "react-router-dom";

//Testing, will be using post.slug in actual project
let test = "5IvxgfV9IMqkCIy5o9L2"

function CategoryCard({category}) {

    function getDateTime(object){
        const totalMilliseconds = object.seconds * 1000 + Math.floor(object.nanos / 1000000);
        const date = new Date(totalMilliseconds);
        return date.toLocaleString();
    }
    //const categories = post.categoryId?.map((category, idx) => category.title); // Use optional chaining
    //<p className="mb-1"><small>./Category: {categories.join(", ")}</small></p>
    //<h6 className="card-subtitle mb-2 text-muted">by {post.user_id.username}</h6>
    ///post/${post.id}
    return (
        <div className="card shadow-lg p-3 mb-4" key={category.id}>



            <div className="card-body">
                <h5 className="card-title"><Link to={`/posts/${category.id}`}>{category.title}</Link></h5>

                <p className="card-text">{category.content}</p>




            </div>
        </div>
    );


}

export default CategoryCard;