import { posts } from "@/content";
import { indexBy, prop, sortBy } from "remeda";

export function getPostsIndex() {
  return indexBy(posts, prop("slug"));
}

export function getPublishedPosts() {
  return sortBy(
    posts.filter((post) => post.published),
    [prop("date"), "desc"],
  );
}
