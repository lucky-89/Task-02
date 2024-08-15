const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());

const projectData = {
  title: "Technical Project Management",
  description:
    "<p>Have you ever thought, Pareto's Law can be applied to cooking? Your thinking starts when you start thinking beyond your thinking.</p>\n<p>Let's prepare Sandwiches, we will use Pareto’s Law. That’s an 80-20 approach.<br>80% of the time in researching, and planning and 20% of the time in implementation.</p>\n<p>So for preparing sandwiches, we need vegetables, bread, cheese, butter and much more. So initially we collect all the stuff and then chop the vegetables, grate the cheese, and make a mash of potato. So this all comes in 80% and then comes 20% where we will roast the bread, spread the sauce, place the mash put some cheese, and heat it for a while and our sandwich is ready.</p>\n<p>Similarly while creating any functionality 80% of the time is spent on consequences that might appear, some parameters we have to take care of, the scope of the variable, and some dependent functions, and then 20% comes from implementation.</p>\n<p>Let's start thinking together, and search for how you can get the essence of project management.</p>",
  short_description:
    "You can learn project management by applying the simple methods of project management. How you can apply project management in each and every step of your deliverables? Let's figure it out together",
  tasks: [
    {
      task_id: 18882,
      task_title: "Explore the world of management",
      task_description:
        "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
      assets: [
        {
          asset_id: 18883,
          asset_title: "Technical Project Management",
          asset_description:
            "Story of Alignment\r\nScope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n",
          asset_content: "https://www.youtube.com/embed/TiMRwri1xJ8",
          asset_content_type: "video",
        },
        {
          asset_id: 18884,
          asset_title: "Threadbuild",
          asset_description:
            "Watch the video and thread build, and jot out key threads while watching that video.",
          asset_content_type: "threadbuilder",
        },
        {
          asset_id: 18885,
          asset_title: "Structure your pointers",
          asset_description:
            "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
          asset_content_type: "article",
        },
        {
          asset_id: 18886,
          asset_title: "4SA Method",
          asset_description: "To explore more read more",
          asset_content:
            "https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
          asset_content_type: "article",
        },
      ],
    },
  ],
  project_image:
    "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1114276/0413_What_is_a_Technical_Project_Manager_Luke_Social-21e35c2d76465934c0f844c396db762a.png",
};

app.get("/api/project", (req, res) => {
  res.json(projectData);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
