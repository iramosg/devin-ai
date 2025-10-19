# Etran Money Transfer

Site institucional da empresa Etran Money Transfer, desenvolvido com Next.js 15, React, TypeScript e Tailwind CSS.

## 📋 Sobre o Projeto

O Etran Money Transfer é uma página institucional moderna e responsiva que apresenta os serviços de transferência de dinheiro da empresa Etran. O site foi desenvolvido seguindo as melhores práticas de desenvolvimento web, com foco em acessibilidade, performance e experiência do usuário.

## 🚀 Tecnologias Utilizadas

- **Next.js 15** - Framework React para produção
- **React 19** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **Tailwind CSS 4** - Framework CSS utilitário
- **Storybook 9** - Ferramenta para desenvolvimento e documentação de componentes
- **Vitest** - Framework de testes unitários
- **Cypress** - Framework de testes E2E
- **Testing Library** - Utilitários para testes de componentes React

## 📱 Responsividade

O site é totalmente responsivo e otimizado para três breakpoints principais:

- **Mobile**: 360px - 799px
- **Tablet**: 800px - 1279px
- **Desktop**: 1280px em diante

## ♿ Acessibilidade

O projeto segue as diretrizes de acessibilidade da W3C (WCAG), incluindo:

- Uso adequado de tags semânticas HTML5
- ARIA labels em todos os elementos interativos
- Navegação por teclado funcional
- Hierarquia de cabeçalhos apropriada
- Contraste de cores adequado
- Textos alternativos para imagens e ícones

## 🧩 Componentes

O projeto é organizado em componentes reutilizáveis:

- **Button** - Botões com variantes (primary, secondary, outline) e tamanhos
- **Card** - Cards com variantes (default, feature, stat)
- **Header** - Cabeçalho com navegação e menu mobile
- **Hero** - Seção principal com destaque
- **Partners** - Seção de parceiros e integrações
- **Statistics** - Seção de estatísticas e métricas
- **Reliability** - Seção de confiabilidade
- **SoftwareFeatures** - Seção de recursos do software
- **CTA** - Call-to-action
- **Footer** - Rodapé com links e informações

## 📦 Instalação

```bash
# Clone o repositório
git clone <repository-url>

# Entre no diretório do projeto
cd etran-money-transfer

# Instale as dependências
npm install
```

## 🛠️ Scripts Disponíveis

### Desenvolvimento

```bash
# Inicia o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) para visualizar o site.

### Build

```bash
# Cria a build de produção
npm run build

# Inicia o servidor de produção
npm start
```

### Testes

```bash
# Executa os testes unitários
npm run test

# Executa os testes com cobertura
npm run test:coverage

# Executa os testes em modo UI
npm run test:ui

# Abre o Cypress para testes E2E
npm run cypress

# Executa os testes E2E em modo headless
npm run cypress:headless
```

### Storybook

```bash
# Inicia o Storybook
npm run storybook

# Cria a build do Storybook
npm run build-storybook
```

Acesse [http://localhost:6006](http://localhost:6006) para visualizar o Storybook.

### Lint

```bash
# Executa o linter
npm run lint
```

## 🧪 Testes

### Cobertura de Testes

O projeto possui uma cobertura de testes superior a 90%:

- **Testes Unitários**: 100% de cobertura nos componentes
- **Testes E2E**: Cobertura completa dos fluxos principais
- **Testes de Acessibilidade**: Validação automática via Storybook

### Executando os Testes

#### Testes Unitários

Os testes unitários são executados com Vitest e Testing Library:

```bash
npm run test:coverage
```

#### Testes E2E

Os testes E2E são executados com Cypress. Primeiro, inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Em outro terminal, execute:

```bash
npm run cypress:headless
```

## 📚 Documentação dos Componentes

Todos os componentes estão documentados no Storybook. Para visualizar a documentação:

```bash
npm run storybook
```

Cada componente possui:
- Documentação de props
- Exemplos de uso
- Variantes disponíveis
- Testes de acessibilidade integrados

## 🎨 Paleta de Cores

O projeto utiliza uma paleta de cores personalizada:

- **Olive Dark**: `#4a5a2a` - Cor principal escura
- **Olive Medium**: `#5d6f3a` - Cor principal média
- **Olive Light**: `#6d7f4a` - Cor principal clara
- **Green Light**: `#c8e6a0` - Verde claro para destaques
- **Green Lighter**: `#e0f5c8` - Verde mais claro para backgrounds

## 📁 Estrutura do Projeto

```
etran-money-transfer/
├── app/                    # Páginas Next.js
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   ├── page.test.tsx      # Testes da página inicial
│   └── globals.css        # Estilos globais
├── components/            # Componentes reutilizáveis
│   ├── Button.tsx
│   ├── Button.test.tsx
│   ├── Button.stories.tsx
│   ├── Card.tsx
│   ├── Card.test.tsx
│   ├── Card.stories.tsx
│   └── ...
├── cypress/               # Testes E2E
│   ├── e2e/
│   ├── fixtures/
│   └── support/
├── .storybook/           # Configuração do Storybook
├── public/               # Arquivos estáticos
├── cypress.config.ts     # Configuração do Cypress
├── vitest.config.ts      # Configuração do Vitest
├── package.json          # Dependências e scripts
└── README.md            # Este arquivo
```

## 🔄 Fluxo de Desenvolvimento

1. **Desenvolvimento de Componentes**: Crie componentes na pasta `components/`
2. **Documentação**: Crie stories no Storybook para cada componente
3. **Testes Unitários**: Escreva testes para cada componente
4. **Testes E2E**: Adicione testes E2E para fluxos críticos
5. **Verificação**: Execute os testes e o linter antes de commitar
6. **Pull Request**: Crie um PR com os testes passando

## 📝 Convenções de Código

- Use TypeScript para todos os arquivos
- Siga as convenções do ESLint configurado
- Componentes devem ter props tipadas com interfaces
- Todos os componentes devem ter testes unitários
- Use Tailwind CSS para estilização (sem CSS customizado)
- Siga as diretrizes de acessibilidade da W3C

## 🚀 Deploy

O projeto está pronto para deploy em plataformas como:

- Vercel (recomendado para Next.js)
- Netlify
- AWS Amplify
- Outras plataformas que suportam Next.js

### Deploy na Vercel

```bash
# Instale a CLI da Vercel
npm i -g vercel

# Execute o deploy
vercel
```

## 🤝 Contribuindo

1. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
2. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
3. Push para a branch (`git push origin feature/AmazingFeature`)
4. Abra um Pull Request

## 📄 Licença

Este projeto é propriedade da Etran Money Transfer.

## 👥 Autores

- Desenvolvido por Igor Ramos Gonçalves (@iramosg)

## 📞 Contato

Para mais informações sobre o projeto, entre em contato através do GitHub.

---

**Nota**: Este projeto foi desenvolvido seguindo as especificações fornecidas, com foco em qualidade, acessibilidade e manutenibilidade do código.
