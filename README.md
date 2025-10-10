# 🏆 Metas & Objetivos

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)


**Transforme seus sonhos em realidade 🚀**

Uma aplicação moderna e intuitiva para **criar, visualizar e acompanhar metas pessoais ou profissionais** com sistema completo de gerenciamento de tarefas.

[🌐 Acesse o Site aqui](https://projeto-metas-objetivos.vercel.app)

</div>

---

## 📸 Demonstração

### Tela Principal
<img width="773" height="583" alt="Tela principal mostrando grid de metas" src="https://github.com/user-attachments/assets/973287a8-d296-4f6a-8e45-1df8735ee491" />

### Adicionando Nova Meta
<img width="682" height="481" alt="Formulário de criação de meta" src="https://github.com/user-attachments/assets/64c5c30f-5a73-4d10-890c-2a79737d0a13" />

---

## ✨ Funcionalidades

- ✅ **Criar metas personalizadas** com título e data de conclusão
- 🖼️ **Upload de imagens** para cada meta (opcional)
- 📋 **Sistema completo de tarefas** para organizar suas metas
- 📊 **Barra de progresso visual** baseada nas tarefas concluídas
- ⏰ **Contador de dias restantes** até a data limite
- ✏️ **Edição de tarefas** com checkbox interativo
- 🗑️ **Exclusão individual** de tarefas e metas
- 💾 **Persistência de dados** usando localStorage
- 🎉 **Animação de celebração** ao concluir metas
- 🎨 **Efeito de confete** animado na conclusão
- 🌙 **Interface moderna** com tema escuro elegante
- 📱 **Design totalmente responsivo** para mobile, tablet e desktop
- 🎯 **Estado vazio customizado** para primeira experiência do usuário

---

## 🧠 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização avançada com Grid, Flexbox e Animações
- **JavaScript (Vanilla)** - Lógica e interatividade
- **LocalStorage API** - Persistência de dados no navegador
- **FileReader API** - Upload e preview de imagens
- **Font Awesome 6.4.0** - Ícones modernos

---

## 📁 Estrutura do Projeto

```
projeto-metas-objetivos/
│
├── 📄 index.html                 # Página principal
├── 📄 README.md                  # Documentação
│
└── 📁 src/
    ├── 📁 css/
    │   ├── style.css            # Estilos principais
    │   └── responsivo.css       # Media queries para responsividade
    │
    ├── 📁 js/
    │   └── index.js             # Lógica da aplicação
    │
    └── 📁 img/
        └── trofeu-32x32.png     # Favicon
```

---

## ⚙️ Como Executar o Projeto

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Nenhuma instalação adicional necessária!

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/josealbertodeev/projeto-metas-objetivos.git
   ```

2. **Navegue até a pasta do projeto**
   ```bash
   cd projeto-metas-objetivos
   ```

3. **Abra o arquivo `index.html` no navegador**
   - Duplo clique no arquivo, ou
   - Clique com botão direito → Abrir com → Navegador de sua preferência
   - Ou use uma extensão como Live Server no VS Code

4. **Pronto!** A aplicação está rodando localmente 🎉

---

## 🎯 Como Usar

1. **Criar uma Meta**
   - Preencha o título da sua meta
   - Selecione a data de conclusão desejada
   - (Opcional) Adicione uma imagem inspiradora
   - Clique em "Criar Meta"

2. **Adicionar Tarefas**
   - No card da meta, digite uma tarefa no campo de input
   - Clique no botão "+" para adicionar
   - Repita para adicionar mais tarefas

3. **Gerenciar Tarefas**
   - ✅ Marque o checkbox para concluir uma tarefa
   - 🗑️ Use o botão vermelho para excluir tarefas específicas
   - 📊 Acompanhe o progresso pela barra visual

4. **Concluir Meta**
   - Quando terminar todas as tarefas, clique em "Concluir"
   - Aproveite a animação de celebração! 🎉
   - A meta será automaticamente removida após 3 segundos

5. **Excluir Meta**
   - Clique no botão "Excluir" para remover uma meta
   - Todas as tarefas associadas serão excluídas também

---

## 🎓 Conceitos e Técnicas Aplicadas

### JavaScript
- Manipulação avançada do DOM
- Event Listeners e Handlers
- LocalStorage para persistência de dados
- FileReader API para upload de imagens
- Array methods (map, filter, find, forEach)
- Template literals para HTML dinâmico
- Funções de callback e setTimeout

### CSS
- CSS Grid para layouts responsivos
- Flexbox para alinhamento de elementos
- Animações e transições suaves (@keyframes)
- Gradientes lineares para efeitos visuais
- Custom scrollbar styling
- Media queries para responsividade
- Pseudo-elementos (::before)
- Transform e box-shadow para profundidade

### Boas Práticas
- Código organizado e comentado
- Separação de responsabilidades (HTML/CSS/JS)
- Mobile-first approach
- Nomenclatura semântica de classes
- Validação de formulários
- Feedback visual para o usuário

---

## 📱 Responsividade

O projeto foi desenvolvido com **mobile-first** e é totalmente responsivo:

- 📱 **Mobile** (< 480px): Layout em coluna única, otimizado para touch
- 📱 **Tablet** (480px - 768px): Ajustes de espaçamento e tipografia
- 💻 **Desktop** (> 768px): Layout em grid com sidebar fixa

---

## 🚀 Melhorias Futuras

- [ ] 🔔 Sistema de notificações para prazos próximos
- [ ] 📊 Dashboard com estatísticas e gráficos de metas
- [ ] 🏷️ Sistema de categorias/tags para organizar metas
- [ ] 🔄 Edição de metas já criadas
- [ ] 📤 Exportar metas para JSON/CSV
- [ ] 📥 Importar metas de arquivos
- [ ] 🌐 Integração com backend para sincronização
- [ ] 👥 Sistema de login e perfis de usuário
- [ ] 🎨 Temas customizáveis (claro/escuro/personalizado)
- [ ] 🔍 Sistema de busca e filtros
- [ ] 📅 Integração com calendário
- [ ] 🏅 Sistema de conquistas e gamificação

---

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Se você tem alguma sugestão para melhorar este projeto:

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a Branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

---


## 👨‍💻 Autor

**José Alberto**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/josealbertodeev)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/joséalberto)
<!-- [![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=todoist&logoColor=white)](https://seu-portfolio.com) -->

---

## 🌟 Mostre seu Apoio

Se este projeto te ajudou de alguma forma, considere dar uma ⭐️!

---

<div align="center">

Feito ☕ por [José Alberto](https://github.com/josealbertodeev)

🌐 **[Acesse o Projeto Online](https://projeto-metas-objetivos.vercel.app)**

</div>
