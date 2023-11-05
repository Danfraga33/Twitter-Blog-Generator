import { BsFillChatDotsFill , BsPencilSquare } from "react-icons/bs";
import { AiOutlineAreaChart } from "react-icons/ai";

import { FaRobot } from "react-icons/fa";
import React, { FC, ReactElement } from "react";
import FeatureItem from "./FeatureItem";

const Features: FC = (): ReactElement => {
  return (
    <section className="container mt-24 flex flex-col items-center py-10">
      <h2 className="text-[32px] font-bold text-center sm:text-left">
        Build your Online Presence
      </h2>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <FeatureItem
          Icon={BsFillChatDotsFill}
          title="Natural Language Generation (NLG)"
          iconBgColor="#02897A"
          description="AI-powered content generation app can create human-like text, making blog posts and tweets engaging and informative."
        />
        <FeatureItem
          Icon={AiOutlineAreaChart}
          iconBgColor="#4D8DFF"
          title="Customizable Content"
          description="Users can customize generated content to match their brand tone, style, and target audience."
        />
        <FeatureItem
          Icon={BsPencilSquare}
          iconBgColor="#740A76"
          title="Keyword Optimization"
          description="AI can ensure that content is SEO-friendly by suggesting and incorporating relevant keywords."
        />
        <FeatureItem
          Icon={FaRobot}
          iconBgColor="#F03E3D"
          title="Automated Content Generation"
          description="The app streamlines content creation, saving time and ensuring a consistent online presence."
        />
      </div>
    </section>
  );
};

export default Features;
