# 📊 Project Dashboard - Claude Code

Dashboard web para tracking de projetos e status de trabalho no Claude Code.

## 📁 Estrutura

```
dashboard/
├── index.html      # Página principal
├── style.css       # Estilos e design
├── app.js          # Lógica JavaScript
├── data.json       # Dados dos projetos
└── README.md       # Este arquivo
```

## 🚀 Como Hospedar na Hostgator

### Opção 1: Via cPanel (Recomendado)

1. **Acesse o cPanel da Hostgator**
   - Login em: https://seudominio.com/cpanel

2. **Abra o Gerenciador de Arquivos (File Manager)**
   - Navegue até `public_html/`

3. **Crie uma pasta (opcional)**
   - Se quiser em subpasta: `public_html/dashboard/`
   - Se quiser na raiz: use `public_html/` direto

4. **Faça upload dos arquivos**
   - Clique em "Upload"
   - Selecione todos os 4 arquivos:
     - `index.html`
     - `style.css`
     - `app.js`
     - `data.json`

5. **Acesse no navegador**
   - Se na raiz: `https://seudominio.com/`
   - Se em subpasta: `https://seudominio.com/dashboard/`

### Opção 2: Via FTP

1. **Use um cliente FTP** (FileZilla, Cyberduck, etc.)
   - Host: `ftp.seudominio.com`
   - Usuário: seu username da Hostgator
   - Senha: sua senha da Hostgator
   - Porta: 21

2. **Conecte e navegue até `public_html/`**

3. **Faça upload dos 4 arquivos**

4. **Acesse no navegador**

## 🔄 Como Atualizar os Dados

### Método 1: Via Claude Code (Recomendado)

Quando quiser atualizar a dashboard:

1. Me peça: "Atualiza a dashboard com o status atual dos projetos"
2. Eu atualizo o arquivo `data.json` localmente
3. Você faz upload do novo `data.json` para a Hostgator

### Método 2: Edição Manual

1. Baixe o arquivo `data.json` da Hostgator
2. Edite usando um editor de texto
3. Suba novamente para a Hostgator

### Estrutura do data.json

```json
{
  "lastUpdate": "2026-02-09",
  "statistics": {
    "expansionPacksInstalled": 8,
    "skillsAvailable": 90,
    "activeProjects": 2,
    "completedProjects": 8,
    "backlog": 0
  },
  "activeProjects": [...],
  "completedProjects": [...],
  "learnings": [...]
}
```

## ✨ Features

- ✅ Design moderno e responsivo
- ✅ Cards coloridos por status do projeto
- ✅ Progress bars visuais
- ✅ Estatísticas em tempo real
- ✅ Seção de aprendizados recentes
- ✅ Mobile-friendly
- ✅ Sem dependências externas
- ✅ Carrega rápido

## 🎨 Status dos Projetos

- 🔵 **Planejado** - Badge azul
- 🟡 **Em Andamento** - Badge amarelo
- 🟢 **Concluído** - Badge verde

## 🔧 Personalização

### Cores
Edite as variáveis CSS em `style.css`:
```css
:root {
    --primary: #6366f1;
    --success: #10b981;
    --warning: #f59e0b;
    --info: #3b82f6;
}
```

### Conteúdo
Edite o arquivo `data.json` para adicionar/remover projetos.

## 📱 Compatibilidade

- ✅ Chrome/Edge (últimas versões)
- ✅ Firefox (últimas versões)
- ✅ Safari (últimas versões)
- ✅ Mobile browsers
- ✅ Tablets

## 🆘 Troubleshooting

### Dashboard não carrega
- Verifique se todos os 4 arquivos foram uploaded
- Verifique se estão na mesma pasta
- Verifique se `data.json` é um JSON válido

### Erro de CORS
- Certifique-se de acessar via HTTP/HTTPS, não via file://
- Use a URL da Hostgator

### Dados não aparecem
- Verifique o console do browser (F12)
- Verifique se `data.json` está acessível
- Teste a URL: `https://seudominio.com/data.json`

## 📞 Suporte

Para atualizar a dashboard, me peça ajuda no Claude Code! 🚀
