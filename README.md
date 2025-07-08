# ⚽ Simulador de Futebol Mundial

Uma aplicação desktop completa para simular jogos de futebol entre seleções mundiais, com relatórios gerados por IA e sistema de torneios.

## 🚀 Funcionalidades

- **Confrontos Rápidos**: Selecione duas seleções e simule partidas
- **Torneios**: Copa do Mundo eliminatória com 8 seleções
- **Relatórios por IA**: Cada jogo gera um relatório único e diferente
- **8 Seleções Mundiais**: Brasil, Argentina, França, Espanha, Alemanha, Inglaterra, Portugal e Holanda
- **Jogadores Fictícios**: Nomes e estatísticas realistas mas fictícias
- **Interface Moderna**: Design responsivo e elegante

## 📥 Download

### Releases Disponíveis

- **Windows**: `Simulador-de-Futebol-Mundial-Setup-1.0.0.exe`
- **macOS**: `Simulador-de-Futebol-Mundial-1.0.0.dmg`
- **Linux**: `Simulador-de-Futebol-Mundial-1.0.0.AppImage`

### Como Instalar

1. Vá para a seção [Releases](../../releases)
2. Baixe o arquivo correspondente ao seu sistema operacional
3. Execute o instalador ou arquivo executável
4. Pronto! O app estará instalado no seu sistema

## 🛠️ Desenvolvimento

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/simulador-futebol-mundial.git

# Entre na pasta
cd simulador-futebol-mundial

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run electron:dev
```

### Scripts Disponíveis

```bash
# Desenvolvimento web
npm run dev

# Desenvolvimento Electron
npm run electron:dev

# Build para produção
npm run build

# Gerar executável
npm run electron:dist

# Executar Electron após build
npm run electron
```

## 🏗️ Build para Distribuição

### Windows
```bash
npm run electron:dist
```

### macOS
```bash
npm run electron:dist
```

### Linux
```bash
npm run electron:dist
```

Os arquivos serão gerados na pasta `release/`.

## 🎮 Como Usar

1. **Menu Principal**: Escolha entre confronto rápido ou torneio
2. **Seleção de Times**: Clique nos times para selecioná-los
3. **Simulação**: Clique em "Simular Partida" para ver o resultado
4. **Relatórios**: Cada jogo gera um relatório único com narração
5. **Torneios**: Sistema eliminatório completo com chaveamento

## 🔧 Tecnologias

- **Frontend**: React + TypeScript + Tailwind CSS
- **Desktop**: Electron
- **Build**: Vite
- **Icons**: Lucide React

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

---

Desenvolvido com ❤️ para os amantes do futebol