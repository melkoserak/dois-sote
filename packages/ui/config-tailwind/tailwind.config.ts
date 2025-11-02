import type { Config } from "tailwindcss";

// Este é o seu arquivo original, sem alterações
const config: Config = {
    darkMode: ["class"],
    content: [
      // O 'content' será definido nos projetos (apps) que usarem este config
    ],
    theme: {
      extend: {
        colors: {
          border: "var(--border)",
          input: "var(--input)",
          ring: "var(--ring)",
          // ... (todas as suas cores)
        },
      },
    },
    plugins: [require("tailwindcss-animate")],
};

export default config;