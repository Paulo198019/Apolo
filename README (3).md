# Apolo Landing Page

## 📌 Descrição
A **Apolo Landing Page** foi criada para captar leads e promover serviços de forma simples e eficiente. O projeto utiliza **HTML, CSS e JavaScript** e está hospedado no **GitHub Pages**, garantindo acesso rápido e gratuito.

---

## 🏗 Estrutura do Projeto
```
Apolo/
├── index.html        # Página principal
├── style.css         # Estilos da landing page
├── script.js         # Funcionalidades interativas
├── assets/           # Imagens e ícones
└── README.md         # Documentação do projeto
```

---

## 🚀 Como editar e publicar no GitHub Pages
1. **Clone o repositório:**
   ```bash
   git clone https://github.com/paulo198019/Apolo.git
   ```
2. **Edite os arquivos conforme necessário:**
   - `index.html` → Conteúdo da página
   - `style.css` → Estilos visuais
   - `script.js` → Scripts e interações
3. **Commit e push para a branch principal:**
   ```bash
   git add .
   git commit -m "Atualização da landing page"
   git push origin main
   ```
4. **Acesse a URL pública:**
   ```
   https://paulo198019.github.io/Apolo/
   ```

---

## 🔄 Deploy Automático com GitHub Actions
O projeto pode usar **GitHub Actions** para automatizar o deploy:
- Cada vez que você fizer **push na branch main**, o workflow do GitHub Actions publica automaticamente no GitHub Pages.
- Exemplo de workflow (`.github/workflows/deploy.yml`):
   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches:
         - main
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
         - run: npm install
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

✅ **Dica:** Se estiver usando **Deploy from a branch**, basta aguardar 1 a 5 minutos após o push para ver as alterações publicadas.
