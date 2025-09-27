import { Briefcase} from "lucide-react";

export const ExperienceSection = () => {
  return (
    <section id= "experience" className="py-24 px-4 relative">
      {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
             <span className="text-primary"> Experience </span>
            </h2>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
  <div className="gradient-border p-6 card-hover">
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-full bg-primary/10">
        <Briefcase className="h-6 w-6 text-primary" />
      </div>
      <div className="text-left">
        <h4 className="font-semibold text-lg">Intern at Rooman Technologies</h4>
        <p className="text-muted-foreground">
          Worked as Cloud Application Developer Intern during September 2024 - February 2025
        </p>
      </div>
    </div>
  </div>
  
  <div className="gradient-border p-6 card-hover">
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-full bg-primary/10">
        <Briefcase className="h-6 w-6 text-primary" />
      </div>
      <div className="text-left">
        <h4 className="font-semibold text-lg">Intern at Mevi Technologies </h4>
        <p className="text-muted-foreground">
          Worked as Front end Web Developer Intern during October 26,2023 - November 26,2023
        </p>
      </div>
    </div>
  </div>
  <div className="gradient-border p-6 card-hover">
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-full bg-primary/10">
        <Briefcase className="h-6 w-6 text-primary" />
      </div>

      <div className="text-left">
        <h4 className="font-semibold text-lg">Intern at Technofly Solutions</h4>
        <p className="text-muted-foreground">
            Worked as AI/ML Intern during October 11,2022 - October 30,2022
        </p>
      </div>
    </div>
  </div>
  </div>
  </section>
  );
};
      
       
