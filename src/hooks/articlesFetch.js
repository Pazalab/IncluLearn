import { useState, useEffect } from "react";

export const useArticlesFetch = () => {
      const [ posts, setPosts ] = useState(null);

      useEffect(() => {
              fetch("https://inclulearn.com/articles/wp-json/wp/v2/posts?_embed")
              .then(res => res.json())
              .then(data => {
                     const sanitized = data.sort((a,b) => new Date(b.date) - new Date(a.date));
                     setPosts(sanitized)
              }).catch(error => console.error(`Error fetching posts: ${error}`))
      }, [])

      return { posts }
}