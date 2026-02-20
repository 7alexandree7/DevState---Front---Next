import { Button } from "@/components/Button/Button";
import { IconButton } from "@/components/IconButton/IconButton";
import { ArrowRight, Copy } from "lucide-react";

export default function Home() {
  return (
    <main className="">


      <Button>
        Enviar
        <ArrowRight className="" />
      </Button>


      <IconButton>
        <Copy className="" />
      </IconButton>


      
    </main>
  );
}
