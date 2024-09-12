import { auth } from "@/auth";
import { BloodBankTable } from "@/components/blood-bank-table/blood-bank-table";
import { columns } from "@/components/blood-bank-table/columns";
import { BloodBank } from "@/components/blood-bank-table/data/schema";
import { redirect } from "next/navigation";
import { JWT } from "google-auth-library";
import { env } from "@/env.mjs";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { db, users } from "@/schema";
import { eq } from "drizzle-orm";
import { buttonVariants } from "@/components/ui/button";
import { LockClosedIcon } from "@radix-ui/react-icons";

export default async function Page() {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  const role = await db
    .select({ role: users.role })
    .from(users)
    .where(eq(users.email, session.user?.email ?? ""));
  if (role[0].role !== "ADMIN") {
    return <NotAuthorized />;
  }

  return (
    <div className="py-10 container-x">
      <Suspense fallback={<TableSkeleton />}>
        <Table />
      </Suspense>
    </div>
  );
}

async function Table() {
  const data = await getBloodBankData();
  return <BloodBankTable data={data} columns={columns} />;
}

const getBloodBankData = async (): Promise<BloodBank[]> => {
  const SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"];

  const jwt = new JWT({
    email: env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: env.GOOGLE_PRIVATE_KEY,
    scopes: SCOPES,
  });
  const doc = new GoogleSpreadsheet(env.GOOGLE_SPREADSHEET_ID, jwt);
  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];
  const rows = await sheet.getRows();

  const bloodBankData: BloodBank[] = rows.map((row) => ({
    Name: row.get("Name") || "",
    "Father Name": row.get("Father Name") || "",
    "Roll No": row.get("Roll No") || "",
    Gender: row.get("Gender") || "",
    "Blood Group": row.get("Blood Group") || "",
    Batch: row.get("Batch") || "",
    "Willing To Donate": row.get("Willing To Donate") || "No",
    "Contact No": row.get("Contact No") || "",
    "Last Donation Date": "",
  }));

  return bloodBankData;
};

function TableSkeleton() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-2 gap-y-3 lg:flex-row-reverse">
        <Skeleton className="h-8 w-[200px]" />
        <div className="flex flex-1 items-center gap-2 flex-wrap">
          <Skeleton className="h-8 w-[250px]" />
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-8 w-[120px]" />
          ))}
        </div>
      </div>
      <div className="rounded-md border">
        <div className="h-[400px] bg-muted/20" />
      </div>
      <div className="flex items-center justify-between">
        <Skeleton className="h-8 w-[200px]" />
        <Skeleton className="h-8 w-[200px]" />
      </div>
    </div>
  );
}

function NotAuthorized() {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] text-center container-x  max-w-md mt-10 ">
      <LockClosedIcon className="h-16 w-16 text-primary mb-4" />

      <h2 className="text-2xl font-bold mb-2">Not Authorized</h2>
      <p className=" text-muted-foreground mb-8">
        This database is only available to the authorized members of the
        program.
      </p>
      <a href="/" className={buttonVariants()}>
        Go to Home
      </a>
    </div>
  );
}
