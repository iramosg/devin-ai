# Etran Money Transfer - Institutional Website

Site institucional da empresa Etran Money Transfer, desenvolvido com Next.js 15, React, TypeScript e Tailwind CSS.

## Sobre o Projeto

Este é um site institucional responsivo que apresenta os serviços da Etran Money Transfer, uma empresa especializada em transferências internacionais de dinheiro. O site foi desenvolvido seguindo as melhores práticas de acessibilidade (W3C), com testes unitários e E2E completos.

## Tecnologias Utilizadas

- **Next.js 15** - Framework React com App Router
- **React 19** - Biblioteca para construção de interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **Tailwind CSS v4** - Framework CSS utilitário
- **Storybook** - Documentação de componentes
- **Vitest** - Framework de testes unitários
- **Cypress** - Framework de testes E2E
- **ESLint** - Linter para qualidade de código

## Requisitos

- Node.js 18+ 
- npm ou yarn

## Instalação

Clone o repositório e instale as dependências:

```bash
npm install
```

## Scripts Disponíveis

### Desenvolvimento

```bash
npm run dev
```

Inicia o servidor de desenvolvimento em [http://localhost:3000](http://localhost:3000). A página recarrega automaticamente quando você edita os arquivos.

### Build

```bash
npm run build
```

Cria uma versão otimizada para produção.

### Iniciar Produção

```bash
npm start
```

Inicia o servidor em modo de produção (requer build prévio).

### Lint

```bash
npm run lint
```

Executa o ESLint para verificar problemas de código.

### Testes Unitários

```bash
npm run test
```

Executa os testes unitários com Vitest.

```bash
npm run test:coverage
```

Executa os testes com relatório de cobertura (meta: 90%+).

### Testes E2E

```bash
npm run test:e2e
```

Executa os testes E2E com Cypress em modo headless.

```bash
npm run test:e2e:open
```

Abre a interface do Cypress para executar testes interativamente.

### Storybook

```bash
npm run storybook
```

Inicia o Storybook em [http://localhost:6006](http://localhost:6006) para visualizar e documentar componentes.

```bash
npm run build-storybook
```

Cria uma versão estática do Storybook.

## Estrutura do Projeto

```
etran-money-example-with-figma/
├── app/                      # App Router do Next.js
│   ├── globals.css          # Estilos globais e configuração Tailwind
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página inicial
├── components/              # Componentes React
│   ├── __tests__/          # Testes unitários dos componentes
│   ├── stories/            # Stories do Storybook
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   └── Footer.tsx
├── cypress/                 # Testes E2E
│   ├── e2e/                # Specs de teste
│   ├── fixtures/           # Dados de teste
│   └── support/            # Comandos customizados
├── public/                  # Arquivos estáticos
├── .storybook/             # Configuração do Storybook
├── cypress.config.ts       # Configuração do Cypress
├── vitest.config.ts        # Configuração do Vitest
├── next.config.ts          # Configuração do Next.js
├── tsconfig.json           # Configuração do TypeScript
└── package.json            # Dependências e scripts

```

## Componentes

### Header
Cabeçalho responsivo com navegação e menu mobile.

### Hero
Seção principal com call-to-action.

### Services
Apresentação dos serviços oferecidos.

### About
Informações sobre a empresa e estatísticas.

### Footer
Rodapé com links e informações de contato.

## Responsividade

O site é totalmente responsivo com breakpoints configurados para:

- **Mobile**: 360px - 799px
- **Tablet**: 800px - 1279px
- **Desktop**: 1280px+

## Acessibilidade

O site segue as diretrizes WCAG 2.1 da W3C:

- Uso adequado de elementos semânticos HTML5
- Atributos ARIA apropriados
- Navegação por teclado
- Contraste de cores adequado
- Textos alternativos para imagens

## Testes

### Cobertura de Testes

O projeto mantém uma cobertura de testes de pelo menos 90% em:
- Linhas de código
- Funções
- Branches
- Statements

### Testes Unitários

Todos os componentes possuem testes unitários que verificam:
- Renderização correta
- Conteúdo esperado
- Atributos de acessibilidade
- Comportamento interativo

### Testes E2E

Os testes E2E cobrem:
- Navegação completa do site
- Responsividade em diferentes viewports
- Funcionalidades principais
- Acessibilidade

## Storybook

Todos os componentes estão documentados no Storybook com:
- Documentação automática
- Testes de acessibilidade integrados
- Visualização em diferentes estados

## Desenvolvimento

### Adicionando Novos Componentes

1. Crie o componente em `components/`
2. Adicione testes em `components/__tests__/`
3. Crie uma story em `components/stories/`
4. Execute os testes para garantir cobertura

### Padrões de Código

- Use TypeScript para todos os arquivos
- Siga as regras do ESLint
- Mantenha componentes pequenos e reutilizáveis
- Adicione atributos de acessibilidade apropriados
- Escreva testes para novas funcionalidades

## CI/CD

Atualmente não há esteira de CI/CD configurada. Antes de criar um Pull Request:

1. Execute `npm run lint` e corrija todos os erros
2. Execute `npm run test:coverage` e garanta 90%+ de cobertura
3. Execute `npm run test:e2e` e garanta que todos os testes passam
4. Execute `npm run build` e garanta que o build é bem-sucedido

## Contribuindo

1. Crie uma branch para sua feature
2. Desenvolva e teste suas alterações
3. Garanta que todos os testes passam
4. Crie um Pull Request com descrição detalhada
5. Aguarde revisão

## Licença

Este projeto é propriedade da Etran Money Transfer.

## Contato

Para dúvidas ou sugestões, entre em contato através de:
- Email: support@etran.com
- Telefone: 1-800-ETRAN-00
