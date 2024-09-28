import { Card, CardContent } from "@/components/ui/card";

interface TeamMember {
  name: string;
  position: string;
  role: string;
}

export default function TeamSection() {
  const teamMembers: TeamMember[] = [
    {
      name: "Prof. Dr. Shabnam Bashir",
      position: "Professor of Pathology",
      role: "Faculty Supervisor",
    },
    {
      name: "Dr. Tooba Fateen",
      position: "Associate Professor of Pathology",
      role: "Faculty Supervisor",
    },
    {
      name: "Armaghan Zulfiqar",
      position: "MS5",
      role: "Program Manager",
    },
    {
      name: "Roha Saeed",
      position: "MS5",
      role: "Program Manager",
    },
    {
      name: "Ahrar Naeem",
      position: "MS5",
      role: "Program Manager",
    },
    {
      name: "Eesha Tahir",
      position: "MS5",
      role: "Program Manager",
    },
    {
      name: "Abdul Wahab Mirza",
      position: "MS2",
      role: "Project Supervisor",
    },
    {
      name: "Ali Azlan",
      position: "MS2",
      role: "Technical Lead",
    },
  ];

  return (
    <>
      <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {teamMembers.map((member, index) => (
          <Card
            key={index}
            className="shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold text-primary">
                {member.name}
              </h3>
              <p className="text-sm text-muted-foreground">{member.position}</p>

              <p className="text-sm text-muted-foreground mt-2">
                {member.role}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
