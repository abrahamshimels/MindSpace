import React from "react";
import ForumCard from "./ForumCard";

const ForumGrid = () => {
  // Sample forum data
  const forumData = [
    {
      id: 1,
      title: "Discussion about stress....",
      description:
        "Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry",
    },
    {
      id: 2,
      title: "Discussion about stress....",
      description:
        "Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry",
    },
    {
      id: 3,
      title: "Discussion about stress....",
      description:
        "Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry",
    },
    {
      id: 4,
      title: "Discussion about stress....",
      description:
        "Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry",
    },
    {
      id: 5,
      title: "Discussion about stress....",
      description:
        "Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry",
    },
    {
      id: 6,
      title: "Discussion about stress....",
      description:
        "Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry",
    },
  ];

  return (
    <section className="bg-azure-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Community Forum</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {forumData.map((forum) => (
            <ForumCard key={forum.id} title={forum.title} description={forum.description} />
          ))}
        </div>

        <div className="flex justify-center">
          <button className="bg-black text-white cursor-pointer text-xl font-semibold py-3 px-10 rounded-full hover:bg-gray-800 transition-colors duration-300">
            See More Forum
          </button>
        </div>
      </div>
    </section>
  );
};

export default ForumGrid;
