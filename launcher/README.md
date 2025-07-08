# 🚀 WorldCup SAN Launcher

Este é um launcher estilo Hydra para o Simulador de Futebol Mundial.

## 📋 Como usar:

### Opção 1: Launcher Web
1. Abra o arquivo `index.html` no navegador
2. Clique em "Baixar e Jogar"
3. O download começará automaticamente

### Opção 2: Executável (Requer compilação)
1. Execute `WorldcupSAN.exe`
2. O launcher abrirá
3. Clique para baixar o jogo

## 🛠️ Para criar o executável real:

### Usando Electron:
```bash
npm install -g electron
npm install -g electron-builder

# Criar package.json para o launcher
npm init -y
npm install electron --save-dev

# Compilar
electron-builder
```

### Usando Python + PyInstaller:
```python
# launcher.py
import webbrowser
import os

# Abrir o launcher HTML
webbrowser.open('file://' + os.path.realpath('index.html'))
```

```bash
pip install pyinstaller
pyinstaller --onefile --windowed launcher.py
```

## 🔧 Configuração:

1. **Atualize as URLs** no arquivo `index.html`:
   - Substitua `seu-usuario` pelo seu usuário do GitHub
   - Substitua `simulador-futebol-mundial` pelo nome do seu repositório

2. **Teste o launcher**:
   - Abra `index.html` no navegador
   - Verifique se os downloads funcionam

3. **Distribua**:
   - Coloque o `WorldcupSAN.exe` (quando compilado) no GitHub
   - As pessoas baixam só esse arquivo pequeno
   - Quando executam, ele baixa o jogo completo