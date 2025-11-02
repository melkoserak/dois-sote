import type { Config } from "tailwindcss";
import sharedConfig from "@goldenbear/tailwind-config/tailwind.config.ts"; // Importa

const config: Config = {
  ...sharedConfig, // Herda toda a configuração compartilhada (cores, fontes, etc.)
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // Aponta para o pacote de UI para que o Tailwind veja as classes lá
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
};

export default config;