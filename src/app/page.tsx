import { Button } from "@/components/Button/Button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="">
      <Button>
        Enviar
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </main>
  );
}
