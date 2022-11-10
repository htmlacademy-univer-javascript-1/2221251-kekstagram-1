import { createPostList } from "./data.js";
import {createPosts, templatePhoto} from "./thumbnail.js";


var pictures = document.querySelector('.pictures');
var posts = createPostList(25);

pictures.append(createPosts(posts, templatePhoto));
