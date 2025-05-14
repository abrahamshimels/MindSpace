// import React from 'react';
// // import Hero from '../components/Learn/Hero';
// // import RelatedTopicsSection from '../components/Learn/RelatedTopicSection'; 
// // import TopicsSection from '../components/Learn/TopicsSection';

// function Learn() {
//   return (
//     <div className="min-h-screen bg-white">

//       {/* <Hero />

 
//       <TopicsSection/>

  
//       <RelatedTopicsSection /> */}

      
//     </div>
//   );
// }

// export default Learn;

// src/components/ArticleList.js
import React, { useEffect, useState } from 'react';

function Learn() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/api/articles/')
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching articles:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading articles...</p>;
  console.log(articles)

  return (
    <div>
      <h2>Articles</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.id || article.pk || article.uuid}>
            {article.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Learn;

