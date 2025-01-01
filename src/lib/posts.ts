import { posts } from "@/content";
import { cache } from "react";
import { indexBy, prop, sortBy } from "remeda";

export const getPostsIndex = cache(() => indexBy(posts, prop("slug")));

export const getPublishedPosts = cache(() =>
  sortBy(
    posts.filter((post) => post.published),
    [prop("date"), "desc"],
  ),
);
