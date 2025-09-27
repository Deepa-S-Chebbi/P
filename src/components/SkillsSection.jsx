import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Vue.js", level: 80, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "Django", level: 90, category: "backend" },
  { name: "Hibernate", level: 85, category: "backend" },
  { name: "JDBC", level: 90, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Pycharm", level: 90, category: "tools" },
  { name: "Jypter Notebook", level: 95, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Eclipse", level: 95, category: "tools" },
  
  //Database
  { name: "SQLite", level: 90, category: "database" },
  { name: "MySQL", level: 85, category: "database" },
  { name: "SQL", level: 80, category: "database" },
  { name: "Oracle", level: 70, category: "database" },
  { name: "NoSQL", level: 60, category: "database" },

  //Programming Languages
  { name: "Python", level: 95, category: "Programming Language" },
  { name: "Java", level: 90, category: "Programming Language" },
  { name: "C", level: 85, category: "Programming Language" },
  { name: "C++", level: 80, category: "Programming Language" },

  //Data Science
  { name: "Pandas", level: 90, category: "Data Science" },
  { name: "NumPy", level: 85, category: "Data Science" },
  { name: "Matplotlib", level: 80, category: "Data Science" },
  { name: "Seaborn", level: 75, category: "Data Science" },
  { name: "Scikit-learn", level: 70, category: "Data Science" },
  { name: "Data Visualization", level: 80, category: "Data Science" },
  { name: "Big Data", level: 80, category: "Data Science" },
  { name: "Data Wrangling", level: 85, category: "Data Science" },
  { name: "Statistical Analysis", level: 80, category: "Data Science" },
  { name: "Predictive Modeling", level: 80, category: "Data Science" },
  { name: "Data Mining", level: 70, category: "Data Science" },
  { name: "SQL for Data Science", level: 85, category: "Data Science" },
  { name: "Data Cleaning", level: 90, category: "Data Science" },
  { name: "Exploratory Data Analysis (EDA)", level: 85, category: "Data Science" },
  { name: "Machine Learning Algorithms", level: 75, category: "Data Science" },
  { name: "Deep Learning", level: 75, category: "Data Science" },
  { name: "Reinforcement Learning", level: 70, category: "Data Science" },
  { name: "PowerBI", level: 85, category: "Data Science" },
  { name: "Tableau", level: 85, category: "Data Science" },

  //AI/ML
  { name: "TensorFlow", level: 75, category: "AI/ML" },
  { name: "Keras", level: 75, category: "AI/ML" },
  { name: "PyTorch", level: 75, category: "AI/ML" },
  { name: "OpenCV", level: 75, category: "AI/ML " },
  { name: "Natural Language Processing (NLP)", level: 70, category: "AI/ML" },
  { name: "Computer Vision", level: 65, category: "AI/ML" },
  { name: "AI Model Deployment", level: 90, category: "AI/ML" },
  { name: "RAG ", level: 90, category: "AI/ML" },
  { name: "Vector Database", level: 90, category: "AI/ML" },
  { name: "AI Frameworks", level: 90, category: "AI/ML" },
  { name: "AI agents", level: 85, category: "AI/ML" },
  { name: "Hugging Face", level: 90, category: "AI/ML" },
  { name: "Langchain", level: 85, category: "AI/ML" },
  { name: "Streamlit", level: 85, category: "AI/ML" },
  { name: "OpenAI", level: 80, category: "AI/ML" },
  
  //others

  { name: "PowerPoint", level: 80, category: "Other" },
  { name: "Excel", level: 85, category: "Other" },
  { name: "Word", level: 90, category: "Other" },
  { name: "Communication Skills", level: 85, category: "Other" },
  { name: "Teamwork", level: 90, category: "Other" },
  { name: "Problem-Solving", level: 85, category: "Other" },
  { name: "Time Management", level: 80, category: "Other" },
  { name: "Adaptability", level: 80, category: "Other" },
  { name: "Critical Thinking", level: 85, category: "Other" },
  { name: "Creativity", level: 80, category: "Other" },

  

];

const categories = ["all", "Programming Language", "frontend", "backend", "tools","database", "Data Science","AI/ML","Other"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
