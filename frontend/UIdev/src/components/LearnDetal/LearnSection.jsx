import React, {useState, useEffect} from "react";
import Image from "../../assets/image/luiz-rogerio-nunes-gkJYH0FLtt0-unsplash.jpg"


function LearnSection({topic}) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    const apiUrl = `https://your-project-id.mockapi.io/api/forums/${topic}/posts/`;

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setPosts(data); // Store the fetched array in the 'posts' state
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [topic]); // Re-fetch data when the currentTopic prop changes

  if (loading) {
    return <p>Loading posts...</p>;
  }

  if (error) {
    return <p>Error fetching posts: {error.message}</p>;
  }

  return (
    <div>
      <div className="flex justify-center ">
        <img className="w-150 h-100 object-cover mt-18" src={Image} alt="image" />
      </div>
      {posts.map((post, index) => (
        <h1 key={index}>{post.topic}</h1> // Added a key prop (best practice)
      ))}
    

      <p className="p-7">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
        cumque, quia laudantium dolorum dicta veniam, eum deserunt reprehenderit
        modi non in architecto natus molestias quisquam aspernatur fuga.
        Dignissimos, culpa enim. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Inventore cumque, quia laudantium dolorum dicta
        veniam, eum deserunt reprehenderit modi non in architecto natus
        molestias quisquam aspernatur fuga. Dignissimos, culpa enim.
      </p>
      <p className="p-7">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
        cumque, quia laudantium dolorum dicta veniam, eum deserunt reprehenderit
        modi non in architecto natus molestias quisquam aspernatur fuga.
        Dignissimos, culpa enim. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Inventore cumque, quia laudantium dolorum dicta
        veniam, eum deserunt reprehenderit modi non in architecto natus
        molestias quisquam aspernatur fuga. Dignissimos, culpa enim.
      </p>
      <p className="p-7">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
        cumque, quia laudantium dolorum dicta veniam, eum deserunt reprehenderit
        modi non in architecto natus molestias quisquam aspernatur fuga.
        Dignissimos, culpa enim. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Inventore cumque, quia laudantium dolorum dicta
        veniam, eum deserunt reprehenderit modi non in architecto natus
        molestias quisquam aspernatur fuga. Dignissimos, culpa enim.
      </p>
    </div>
  );
}

export default LearnSection;
