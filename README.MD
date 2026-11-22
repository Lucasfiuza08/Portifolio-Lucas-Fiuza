
# Portfólio Profissional | Lucas Fiúza Almeida

Portfólio pessoal desenvolvido para o Trabalho Prático 1 da PUC Minas. O site apresenta quem eu sou, meus projetos, minhas experiências e formas de contato, com uma identidade visual inspirada em agências de espionagem: cada página é um "arquivo" com um estilo próprio.

**Site publicado:** [portifolio-lucas-fiuza.vercel.app](https://portifolio-lucas-fiuza.vercel.app/)

**Wireframe (Figma):** [https://www.figma.com/design/lrJPnMNRIhbK1FPuWPdCfE](https://www.figma.com/design/lrJPnMNRIhbK1FPuWPdCfE)

## Páginas

| Rota              | Página       | Descrição                                                                                                                                          |
| ----------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`             | Base          | Tela de seleção com as quatro seções. O título, a descrição e o brilho mudam ao passar o mouse.                                               |
| `/sobremim`     | Sobre mim     | Abertura em vídeo, dossiê com foto, bio em português e inglês e as tecnologias como "evidências" clicáveis.                                    |
| `/projetos`     | Projetos      | Três projetos (Ecos do Passado, DoAção e este portfólio), do mais antigo ao mais recente, com descrição, tecnologias, imagem e link do GitHub. |
| `/experiencias` | Experiências | Experiências como "missões", com objetivos, recompensas e filtro por status.                                                                       |
| `/contato`      | Contato       | Cartão de visita que vira, com links clicáveis, e formulário que envia e-mail pelo EmailJS.                                                       |

## Wireframe

O planejamento das telas foi feito em um wireframe de média fidelidade no Figma, com as cinco páginas do site (Home, Sobre mim, Projetos, Experiências e Contato), a posição de cada elemento e as principais interações.

## Tecnologias

- **React 19**: construção da interface em componentes
- **Vite**: ambiente de desenvolvimento e build
- **React Router**: navegação entre as páginas sem recarregar o site
- **EmailJS**: envio de e-mail pelo formulário de contato, sem back-end
- **CSS puro**: um arquivo de estilo por página
- **Google Fonts**: Bodoni Moda, Barlow, Barlow Condensed, Share Tech Mono, Special Elite e Caveat
- **Figma**: wireframe das telas
- **Vercel**: hospedagem gratuita

## Dependências

| Pacote                              | Para que serve                                        |
| ----------------------------------- | ----------------------------------------------------- |
| `react` e `react-dom`           | Biblioteca principal da interface                     |
| `react-router`                    | Rotas e links entre as páginas                       |
| `@emailjs/browser`                | Envio do formulário de contato                       |
| `vite` e `@vitejs/plugin-react` | Servidor de desenvolvimento e build (desenvolvimento) |

## Estrutura de diretórios

```
portifolio-lucas/
├── index.html              # HTML base e fontes
├── vercel.json             # Regra para as rotas funcionarem no Vercel
├── .env.example            # Modelo das chaves do EmailJS
├── package.json
├── public/
│   └── video_abertura.mp4  # Vídeo de abertura do Sobre mim
└── src/
    ├── main.jsx            # Ponto de entrada, com o BrowserRouter
    ├── App.jsx             # Definição das rotas
    ├── Header.jsx          # Menu das páginas internas
    ├── index.css           # Estilos globais
    ├── assets/             # Imagens (foto, notebook e print do jogo)
    ├── pages/
    │   ├── Layout.jsx      # Header + Outlet para as páginas com menu
    │   ├── Home.jsx
    │   ├── SobreMim.jsx
    │   ├── Projetos.jsx
    │   ├── Experiencias.jsx
    │   └── Contato.jsx
    └── styles/             # Um arquivo CSS por página
```

## Como instalar e executar

Pré-requisito: [Node.js](https://nodejs.org/) instalado.

```bash
# 1. Clonar o repositório
git clone https://github.com/Lucasfiuza08/Portifolio-Lucas-Fiuza.git

# 2. Entrar na pasta do projeto
cd Portifolio-Lucas-Fiuza/portifolio-lucas

# 3. Instalar as dependências
npm install

# 4. Rodar em modo de desenvolvimento
npm run dev
```

O site abre em `http://localhost:5173`.

Para gerar a versão de produção:

```bash
npm run build
```

## Configuração do formulário de contato (EmailJS)

1. Crie uma conta gratuita em [emailjs.com](https://www.emailjs.com/).
2. Em **Email Services**, conecte uma conta de e-mail e copie o *Service ID*.
3. Em **Email Templates**, crie um modelo usando as variáveis `{{nome}}`, `{{email}}` e `{{mensagem}}` e copie o *Template ID*.
4. Em **Account**, copie a *Public Key*.
5. Copie o arquivo `.env.example` com o nome `.env` e preencha:

```
VITE_EMAILJS_SERVICE_ID=seu_service_id
VITE_EMAILJS_TEMPLATE_ID=seu_template_id
VITE_EMAILJS_PUBLIC_KEY=sua_public_key
```

No Vercel, as mesmas três variáveis vão em *Settings → Environment Variables*.

## Deploy

O site está hospedado no **Vercel**, com *Root Directory* configurado como `portifolio-lucas`. O arquivo `vercel.json` redireciona todas as rotas para o `index.html`, para que páginas como `/projetos` funcionem ao recarregar.

## Autor

**Lucas Fiúza Almeida**
Estudante de Engenharia de Software na PUC Minas

- E-mail: lucasfiuzaalmeida@gmail.com
- LinkedIn: [linkedin.com/in/lucas-fiúza](https://www.linkedin.com/in/lucas-fi%C3%BAza-353b7b40a/)
- GitHub: [github.com/Lucasfiuza08](https://github.com/Lucasfiuza08)
