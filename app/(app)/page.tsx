import { Button } from "@/components/ui/button";
import { ArrowRight, Droplet, Users, Search } from "lucide-react";
import { ProgressBarLink } from "@/components/global/progress-bar";
import { BloodBankTable } from "@/components/blood-bank-table/blood-bank-table";
import { columns } from "@/components/blood-bank-table/columns";
import { BloodBank } from "@/components/blood-bank-table/data/schema";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-white py-20 text-center container-x">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            AIMC Blood Bank
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Centralized Blood Group Data of AIMC Medical Students
          </p>
          <ProgressBarLink href="/blood-bank">
            <Button className="bg-white text-primary hover:bg-white/90">
              Find a Donor
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </ProgressBarLink>
        </section>

        {/* Description Section */}
        <section className="py-16 ">
          <div className="container-x">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our Initiative
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center">
              The AIMC Blood Bank is a student-driven initiative focused on
              addressing the challenges of blood donation for patients. We
              maintain a centralized database of blood group information for all
              AIMC medical students to ensure timely and efficient donations.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16  bg-background border-t">
          <div className="container-x">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Droplet className="mx-auto h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Centralized Data</h3>
                <p className=" text-muted-foreground">
                  Quick access to blood group information of AIMC students
                </p>
              </div>
              <div className="text-center">
                <Users className="mx-auto h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Student-Led</h3>
                <p className="text-muted-foreground">
                  Initiative by students, for the community
                </p>
              </div>
              <div className="text-center">
                <Search className="mx-auto h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Easy Search</h3>
                <p className="text-muted-foreground">
                  Efficiently find compatible blood donors
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="py-16 container-x border-t">
          <h2 className="text-3xl font-bold mb-8 text-center">
            A sample from our database
          </h2>
          <BloodBankTable data={sampleBloodBankData} columns={columns} />
        </div>
      </main>
    </div>
  );
}

const sampleBloodBankData: BloodBank[] = [
  {
    Name: "Armghan Zulfiqar",
    "Father Name": "Zulfiqar Ali",
    "Roll No": "144",
    Gender: "Male",
    "Blood Group": "B+",
    Batch: "2024",
    "Willing To Donate": "Yes",
    "Contact No": "03XX-XXXXXXX",
    "Last Donation Date": "2024-MM-DD",
  },
  {
    Name: "Abdul Wahab Mirza",
    "Father Name": "Muhammad Khalid Mirza",
    "Roll No": "39",
    Gender: "Male",
    "Blood Group": "A-",
    Batch: "2027",
    "Willing To Donate": "Yes",
    "Contact No": "03XX-XXXXXXX",
    "Last Donation Date": "2024-MM-DD",
  },
  {
    Name: "Ali Azlan",
    "Father Name": "Rafaqat Ali",
    "Roll No": "49",
    Gender: "Male",
    "Blood Group": "O-",
    Batch: "2027",
    "Willing To Donate": "Yes",
    "Contact No": "03XX-XXXXXXX",
    "Last Donation Date": "2024-MM-DD",
  },
];
