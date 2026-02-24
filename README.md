## Libs

1. Lucide-react
2. tailwind-merge
3. react-hook-form
4. @hookform/resolvers
5. zod
6. orval


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

## new skills

1. `interface IconButtonProps extends ComponentProps<"button"> {}`
    - extends ComponentProps<"tag"> herda todas as props nativas de um elemento HTML no React, permitindo que seu componente aceite esses atributos automaticamente com tipagem.

2. 🧩 Compound Components + Polimorfismo com ComponentProps
    - Este componente segue o padrão de Compound Components, onde o input é dividido em partes (Root, Icon, Field) para maior reutilização e flexibilidade.
    Utiliza ComponentProps do React para herdar automaticamente as propriedades nativas dos elementos HTML, mantendo tipagem forte com TypeScript.
    Também aplica estilização dinâmica com data-*, group e pseudo-classes avançadas do Tailwind, permitindo controlar estados como foco, erro e preenchimento sem lógica extra em JavaScript.

```

import { ComponentProps } from "react";

interface InputRootProps extends ComponentProps<"div"> {
    error?: boolean
}

export function InputRoot({ error = false, ...props }: InputRootProps) {
    return (
        <div
            data-error={error}
            className="group bg-gray-600 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2 focus-within:border-gray-100 data-[error=true]:border-danger"
            {...props}
        />
    )
}



interface InputIcon extends ComponentProps<"span"> { }

export function InputIcon({ ...props }: InputIcon) {
    return (
        <span
            className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger"
            {...props}
        />
    )
}



interface InputFieldProps extends ComponentProps<"input"> { }

export function InputField({ ...props }: InputFieldProps) {
    return (
        <input
            className="flex-1 outline-none placeholder-gray-400"
            {...props}
        />
    )
}

```

3 - Lib tailwind-merge `(função twMerge)`
  - serve para resolver conflitos de classes do Tailwind automaticamente.
  - ✅ O que o twMerge faz
     - Analisa as classes do Tailwind
     - Detecta conflitos (ex: bg-*, px-*, text-*, etc.)
     - Mantém somente a última classe válida daquele grupo
     - 🧠 Quando usar?
         - Está criando componentes reutilizáveis
         - Usa className como prop
         - Combina classes dinâmicas
         - Trabalha com clsx ou classnames
   - `twMerge` Evita conflito de classes Tailwind e mantém só a última válida, deixando seus componentes mais previsíveis e limpos.
