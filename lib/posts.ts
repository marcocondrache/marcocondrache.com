import { posts } from "@/content";
import { indexBy, prop } from "remeda";

export function getPostsIndex() {
  return indexBy(posts, prop("slug"));
}

export function getPublishedPosts() {
  return posts.filter((post) => post.published);
}
