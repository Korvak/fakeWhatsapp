import React from "react";

function CommunityTab () {
    return (
      <div className="p-5">
        <section className="text-center">
          <img
            src="https://github.com/devXprite/infoooze/assets/80192140/0e156417-ef42-48e4-9c95-38a10e11a547"
            className="block mx-auto mt-8"
            alt=""
          />
  
          <h2 className="text-xl mt-4 font-medium">
            Stay connected with a community
          </h2>
  
          <p className="text-sm text-black/60 mt-2">
            Communities bring members together in topic-based groups, and make it
            easy to get admin announcements. Any community you're added to will
            appear here.
          </p>
  
          <a href="#" className="text-primary text-sm mt-2">
            See example communities
          </a>
  
          <div>
            <button className="font-medium bg-primary text-white px-8 py-2 mt-8 rounded-full">
              Start Your Community
            </button>
          </div>
        </section>
      </div>
    );
  };

export default CommunityTab;