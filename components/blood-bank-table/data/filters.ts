import BloodAPIcon from "@/components/icons/blood-a-p";
import BloodANIcon from "@/components/icons/blood-a-n";
import BloodBPIcon from "@/components/icons/blood-b-p";
import BloodBNIcon from "@/components/icons/blood-b-n";
import BloodABPIcon from "@/components/icons/blood-ab-p";
import BloodABNIcon from "@/components/icons/blood-ab-n";
import BloodOPIcon from "@/components/icons/blood-o-p";
import BloodONIcon from "@/components/icons/blood-o-n";
import {
  CheckCircledIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
} from "@radix-ui/react-icons";
import MaleIcon from "@/components/icons/male";
import FemaleIcon from "@/components/icons/female";

export const bloodGroups = [
  {
    value: "A+",
    label: "A+",
    icon: BloodAPIcon,
  },
  {
    value: "A-",
    label: "A-",
    icon: BloodANIcon,
  },
  {
    value: "B+",
    label: "B+",
    icon: BloodBPIcon,
  },
  {
    value: "B-",
    label: "B-",
    icon: BloodBNIcon,
  },
  {
    value: "AB+",
    label: "AB+",
    icon: BloodABPIcon,
  },
  {
    value: "AB-",
    label: "AB-",
    icon: BloodABNIcon,
  },
  {
    value: "O+",
    label: "O+",
    icon: BloodOPIcon,
  },
  {
    value: "O-",
    label: "O-",
    icon: BloodONIcon,
  },
];

export const batches = [
  {
    label: "2028",
    value: "2028",
  },
  {
    label: "2027",
    value: "2027",
  },
  {
    label: "2026",
    value: "2026",
  },
  {
    label: "2025",
    value: "2025",
  },
  {
    label: "2024",
    value: "2024",
  },
];

export const WillingToDonate = [
  {
    label: "Yes",
    value: "Yes",
    icon: CheckCircledIcon,
  },
  {
    label: "No",
    value: "No",
    icon: CrossCircledIcon,
  },
];

export const missingData = [
  {
    label: "Yes",
    value: "Yes",
    icon: QuestionMarkCircledIcon,
  },
  {
    label: "No",
    value: "No",
    icon: CheckCircledIcon,
  },
];

export const gender = [
  {
    label: "Male",
    value: "Male",
    icon: MaleIcon,
  },
  {
    label: "Female",
    value: "Female",
    icon: FemaleIcon,
  },
];
