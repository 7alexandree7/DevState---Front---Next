## Libs

1. Lucide-react


## Tailwindcss

1. dentro de @theme {}
2. Usar `color-*`: initial;
   - Ele bloqueia qualquer tipo de cor, que não seja a que voce definiu no seu projeto
  

## Custom Font Tailwind + Nextjs

1. Dentro de layout importar as fontes do google
2. Usar elas, passando `weight, subsets, variable`
3. Passar para a classe no nosso html em formato js

```
import { Montserrat, Oxanium} from "next/font/google";

const oxanium = Oxanium({
  weight: ["500", "600", ],
  subsets: ["latin"],
  variable: "--font-oxanium",
});

const montserrat = Montserrat({
  weight: ["400","600"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

<html lang="pt-br" className={`${oxanium.variable} ${montserrat.variable}`}>

```

4. no arquivo .css dentro de @theme passar elas
```
  --font-heading: var(--font-oxanium);
  --font-sans: var(--font-montserrat);

```