<a name="readme-top"></a>
<div align="center">
  <h3 align="center">Desafio do Pato</h3>
  <p align="center">
    Plataforma de gerenciamento de desafios
  </p>
</div>

<details>
  <summary>Sumário</summary>
  <ol>
    <li>
      <a href="#-sobre-o-projeto">Sobre o projeto</a>
      <ul>
        <li><a href="#feito-com">Feito com</a></li>
      </ul>
    </li>
    <li>
      <a href="#-como-rodar-o-projeto">Como rodar o projeto</a>
      <ul>
        <li><a href="#pré-requisitos">Pré-requisitos</a></li>
        <li><a href="#instalação">Instalação</a></li>
        <li><a href="#componentes-shadcnui">Componentes shadcn/ui</a></li>
      </ul>
      <li>
      <a href="#-guia-de-contribuição">Guia de Contribuição</a>
      <ul>
        <li><a href="#processo-de-pull-request">Processo de Pull Request</a></li>
        <li><a href="#padrões-de-código">Padrões de Código</a></li>
      </ul>
    </li>
    
  </ol>
</details>

## 💭 Sobre o projeto
Front-end da aplicação Desafio do Pato, cujo objetivo visa ampliar e simplificar o processo de nivelamento contínuo dos integrantes da Bichinhos da TI, oferecendo uma interface para criar, gerenciar e participar de desafios técnicos.

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>


### 🖥️ Feito com

* [![Next][Next.js]][Next-url]
* [![TypeScript][Typescript]][Typescript-url]
* [![Tailwind][TailwindCSS]][Tailwind-url]
* [![ReactQuery][ReactQuery]][ReactQuery-url]


<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>



<!-- GETTING STARTED -->
## 🔥 Como rodar o projeto

### Pré-requisitos

* npm
  ```sh
  npm install npm@latest -g
  ```

### Instalação

1. Clone o repositório
   ```sh
   git clone https://github.com/Super-Patos-Hackaton/frontend.git
   ```
2. Instale as dependências
   ```sh
   pnpm install
   ```
3. Inicie o ambiente de desenvolvimento
   ```sh
   npm run dev
   ```

## Como usar

### Componentes shadcn/ui

* Para adicionar um novo componente:
  ```sh
  npm run ui:add <componente>
  ```
  
### Tipografia

Para o projeto inteiro, utilizaremos a fonte Geist, desenvolvida pela Vercel. Detalhes sobre os termos de uso podem ser encontrados aqui: <a href="https://github.com/vercel/geist-font/blob/main/LICENSE.txt>Licença GEIST</a>.

As Headings H1, H2 e H3 estarão presentes no projeto. Destas, é importante ressaltar que a H1 deverá conter apenas uma instância por página.

Foram configuradas também as tags p, lead e muted para usos textuais diversos.

Para utilização dos componentes com tipografias configuradas, utilizaremos a seguinte padronização:

* Importação do componente:
```js
import { Typography } from "@/components/ui/typography"
```
* Utilização das tags dentro do tsx:
1. H1, H2, H3, p, lead e muted
```js
<Typography.H1>Título 01</Typography.H1>
<Typography.H2>Título 02</Typography.H2>
<Typography.H3>Título 03</Typography.H3>
<Typography.P>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography.P>
<Typography.Lead>Vivamus dignissim accumsan velit, vitae facilisis dui accumsan ac.</Typography.Lead>
<Typography.Muted>Cras maximus placerat velit eget posuere. Vestibulum scelerisque</Typography.Muted>
```

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

## 💡 Guia de Contribuição

Obrigado por considerar contribuir para este projeto! Siga as diretrizes abaixo para garantir um processo de contribuição suave.

### Processo de Pull Request
1. Fork o repositório.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

### Padrões de Código
- Siga as convenções de estilo de código do projeto.
- Certifique-se de que todos os testes passem antes de abrir um PR.

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[Typescript]: https://img.shields.io/badge/typescript-%23007ACC?style=for-the-badge&logo=typescript&logoColor=white
[Typescript-url]: https://www.typescriptlang.org
[TailwindCSS]: https://img.shields.io/badge/tailwindcss-%2338B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com
[ReactQuery]: https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white
[ReactQuery-url]: https://tanstack.com/query/latest
