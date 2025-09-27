import { Notebook , GraduationCap, Pencil} from "lucide-react";

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4 relative">
      {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
             <span className="text-primary"> Education </span>
            </h2>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
  <div className="gradient-border p-6 card-hover">
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-full bg-primary/10">
        <GraduationCap className="h-6 w-6 text-primary" />
      </div>
      <div className="text-left">
        <h4 className="font-semibold text-lg"> RR Institute Of Technology, Visvesvaraya Technological University</h4>
        <p className="text-muted-foreground">
          Bachelor of Engineering (BE) in Information Science (2021 - 2025) - CGPA: 8.83
        </p>
      </div>
    </div>
  </div>
  <div className="gradient-border p-6 card-hover">
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-full bg-primary/10">
        <Notebook className="h-6 w-6 text-primary" />
      </div>
      <div className="text-left">
        <h4 className="font-semibold text-lg">Mahesh Goutham Siddaartha Pu College </h4>
        <p className="text-muted-foreground">
          11<sup>th</sup> and 12<sup>th</sup> Standard :- Science- PCMCs (2019 - 2021) - Percentage: 93%
        </p>
      </div>
    </div>
  </div>
  <div className="gradient-border p-6 card-hover">
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-full bg-primary/10">
        <Pencil className="h-6 w-6 text-primary" />
      </div>

      <div className="text-left">
        <h4 className="font-semibold text-lg">Florence High School</h4>
        <p className="text-muted-foreground">
          1<sup>st</sup> Standard - 10<sup>th</sup> Standard (2009 - 2019) - Percentage: 88.80%
        </p>
      </div>
    </div>
  </div>
  </div>
    </section>
  );
};
      
       
