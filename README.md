# 💸 DT Money - Controle Financeiro

DT Money é uma aplicação de controle financeiro desenvolvida com ReactJS. Ela permite que o usuário cadastre e acompanhe suas transações de entrada e saída, com um resumo claro do balanço financeiro. O projeto foi construído para demonstrar o uso de conceitos fundamentais e avançados do React, como estado global com Context API e estilização com Styled Components.

---

### **🎬 Demonstração**

![image](https://github.com/YanzinhoCaue/PROJETO-DTMONEY/assets/127339610/1e1bdb5c-db41-4991-91f0-51d236edf35e)

---

### **✨ Features em Destaque**

A aplicação foi estruturada com foco em boas práticas e manutenibilidade:

**⚛️ Gerenciamento de Estado com Context API**
* Para compartilhar o estado das transações entre múltiplos componentes (como o `Summary` e a `TransactionsTable`), foi utilizado a **Context API** do React.
* Um **Custom Hook (`useTransactions`)** foi criado para abstrair a lógica de acesso ao contexto, tornando o código dos componentes mais limpo, declarativo e fácil de manter.

**💅 Estilização com Styled Components**
* Toda a estilização da aplicação foi feita com **Styled Components**, permitindo a criação de componentes com estilos encapsulados, dinâmicos e reutilizáveis.
* O projeto também utiliza um sistema de variáveis para cores e tamanhos, facilitando a criação de um tema consistente.

**🧩 Arquitetura de Componentes**
* A interface é dividida em componentes pequenos e especializados (`Header`, `Summary`, `TransactionsTable`, etc.), cada um com sua própria responsabilidade, seguindo os princípios de componentização.

**🎭 API Mock com MirageJS**
* Para simular um back-end e permitir o desenvolvimento desacoplado, o projeto utiliza o **MirageJS**. Ele intercepta as chamadas da API e retorna dados fictícios, permitindo que a aplicação se comporte como se estivesse conectada a um servidor real.

**♿ Modal Acessível**
* O formulário para adicionar novas transações é apresentado em um modal acessível, construído com a biblioteca `react-modal`.

---

### **🛠️ Tecnologias Utilizadas**

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled_Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![MirageJS](https://img.shields.io/badge/Mirage_JS-3A99E9?style=for-the-badge&logo=miragejs&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

---

### **▶️ Como Executar o Projeto**

**Pré-requisitos:** Node.js e Yarn (ou NPM).

**1️⃣ Clone o repositório**
```bash
git clone [https://github.com/YanzinhoCaue/dtmoney.git](https://github.com/YanzinhoCaue/dtmoney.git)
````

**2️⃣ Navegue até o diretório do projeto**

```bash
cd dtmoney
```

**3️⃣ Instale as dependências**

```bash
yarn install
```

**4️⃣ Execute a aplicação**

```bash
yarn start
```

A aplicação será iniciada em `http://localhost:3000`. Como o projeto utiliza MirageJS, não é necessário executar um back-end separado.

-----

### **📂 Estrutura do Projeto**

A estrutura de diretórios foi organizada para separar responsabilidades e facilitar a localização dos arquivos:

```
src/
├── assets/         # Imagens e SVGs
├── components/     # Componentes React reutilizáveis
├── hooks/          # Custom Hooks (ex: useTransactions)
├── services/       # Configuração da API
├── styles/         # Estilos globais e tema
└── App.tsx         # Componente principal
```

-----

### **🗺️ Próximos Passos e Melhorias Futuras**

  * **📝 Edição e Exclusão**: Implementar funcionalidades para editar e excluir transações existentes.
  * **🔍 Filtros e Busca**: Adicionar a capacidade de filtrar ou buscar transações por descrição, categoria ou data.
  * **💾 Persistência de Dados**: Substituir o MirageJS por uma integração com uma API real ou com o `localStorage` do navegador para persistir os dados.
  * **📊 Gráficos**: Criar uma seção com gráficos para visualizar as finanças de forma mais intuitiva.

-----

### **💬 Contato**

**Yan Cauê**

**LinkedIn:** [linkedin.com/in/yancue](https://linkedin.com/in/yancaue)

**GitHub:** [github.com/YanzinhoCaue](https://github.com/YanzinhoCaue)
