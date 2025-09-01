import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type Props = {
  title: string;
  message: string;
};

export default function ErrorPage({ title, message }: Props) {
  return (
    <Alert variant="destructive">
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{message} </AlertDescription>
    </Alert>
  );
}
