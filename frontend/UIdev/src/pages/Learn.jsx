import React from 'react';
import Hero from '../components/Learn/Hero';
import RelatedTopicsSection from '../components/Learn/RelatedTopicSection'; 
import TopicsSection from '../components/Learn/TopicsSection';

function Learn() {
  return (
    <div className="min-h-screen bg-white">

      <Hero />

 
      <TopicsSection/>

  
      <RelatedTopicsSection />

      
    </div>
  );
}

export default Learn;

// src/components/ArticleList.js
// import React, { useEffect, useState } from 'react';

// function Learn() {
// const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchArticles = async () => {
//       try {
//         const response = await fetch('http://127.0.0.1:8000/api/articles/');
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         setArticles(data);
//         setLoading(false);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//       }
//     };

//     fetchArticles();
//   }, []);

//   if (loading) {
//     return <div>Loading articles...</div>;
//   }

//   if (error) {
//     return <div>Error loading articles: {error.message}</div>;
//   }

//   return (
//     <div>
//       <h2>Article List</h2>
//       <ul>
//         {articles.map((article) => (
//           <li key={article.id}>
//             <h3>{article.title}</h3>
//             <p>{article.content}</p>
//             <small>Created at: {new Date(article.created_at).toLocaleString()}</small>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Learn;

