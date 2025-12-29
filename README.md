# Stack
- Linguagem: TypeScript.
- Framework: Next.js.
- Estilização: Tailwind CSS.

# Arquitetura de Pastas
- src/app/: Rotas do Next.js.
- src/components/: UI.
- src/features/: Coração do App
  - character-sheet/: Lógica da ficha ativa.
    - components/: (StatsBlock, SkillList, SanityGauge)
    - hooks/: (useSkillCheck, useSanity)
    - store.ts: Zustand Store da ficha atual
  - character-creator/: Wizard de criação passo-a-passo
  - inventory: Gerenciamento de itens e peso
  - dice-roller/: Lógica de rolagem simples
- src/lib/: Utilitários puros
  - coc-rules.ts: Lógica do jogo (cálculo de 1/2, 1/5, bônus de dano)
  - db.ts: Configuração do IndexedDB 
- src/types/: Tipos

# UX/UI: Mobile-first.
# State Management: Zustand.
# Persistência de Dados: Dexie.js.
# Validação de Formulários: React Hook Form + Zod.
# Infraestrutura Adicional: 
- PWA: Suporte a Offline Mode e instalação (manifest.json).
- Segurança de Dados: Funcionalidade de Import/Export (.json) e Versionamento de Banco de Dados (Dexie).
# QA: Testes unitários (Vitest) para garantir a precisão das regras do RPG (coc-rules.ts).

# Objetivo: É um webapp de ficha de personagem totalmente funcional e automatizada para o RPG chamado de cthulhu 7e. Desde a criação do personagem até o gerenciamento da ficha com gerenciamento de items, ou seja, um ficha super completa. Não haverá backend, o projeto é totalmente frontend e pensado prioritariamente para telas mobile. A estilização será com Tailwind CSS com regras customizadas.
# Escala: É uma aplicação complexa de longo prazo.

