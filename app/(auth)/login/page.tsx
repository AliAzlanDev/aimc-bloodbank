import { redirects, siteConfig } from "@/lib/constants";
import { LoginForm } from "./form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <Card className="w-full max-w-md mx-auto rounded-none sm:rounded-md">
        <Suspense fallback={<Skeleton className="w-full h-48"></Skeleton>}>
          <AuthCard />
        </Suspense>
      </Card>
    </div>
  );
}

async function AuthCard() {
  const session = await auth();
  if (session) {
    redirect(redirects.afterLogin);
  }
  return (
    <>
      <CardHeader>
        <CardTitle>Login to {siteConfig.name}</CardTitle>
        <CardDescription>
          Access the centralized blood group database
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <LoginForm />
      </CardContent>
      <CardFooter className="flex flex-col items-center space-y-2">
        <div className="flex  text-sm text-muted-foreground">
          <AlertCircle className="mr-2 h-4 w-4 mt-1" />
          This database is only available to the authorized members of the
          program.
        </div>
      </CardFooter>
    </>
  );
}
