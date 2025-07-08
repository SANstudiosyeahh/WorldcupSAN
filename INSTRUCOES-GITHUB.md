# 🚀 INSTRUÇÕES PARA PUBLICAR NO GITHUB

## 📋 PASSO A PASSO COMPLETO:

### 1️⃣ **Criar repositório no GitHub:**
1. Vá em [github.com](https://github.com)
2. Faça login na sua conta
3. Clique no **"+"** → **"New repository"**
4. Nome: `simulador-futebol-mundial`
5. Marque **"Public"**
6. Clique **"Create repository"**

### 2️⃣ **Fazer upload dos arquivos:**

**MÉTODO FÁCIL (Arrastar e soltar):**
1. No seu repositório recém-criado
2. Clique em **"uploading an existing file"**
3. Arraste TODOS os arquivos desta pasta
4. Escreva: "Primeira versão do simulador"
5. Clique **"Commit changes"**

**MÉTODO AVANÇADO (Git):**
```bash
git clone https://github.com/SEU-USUARIO/simulador-futebol-mundial.git
cd simulador-futebol-mundial
# Copie todos os arquivos para esta pasta
git add .
git commit -m "Primeira versão do simulador"
git push origin main
```

### 3️⃣ **Criar primeira Release:**
1. No seu repositório, clique em **"Releases"** (lado direito)
2. Clique **"Create a new release"**
3. Tag: `v1.0.0`
4. Title: `Simulador de Futebol Mundial v1.0.0`
5. Descrição:
```
🎉 Primeira versão do Simulador de Futebol Mundial!

✨ Funcionalidades:
- Confrontos rápidos entre seleções
- Torneio eliminatório completo
- Relatórios gerados por IA
- 8 seleções mundiais disponíveis

📥 Downloads:
- Windows: Baixe o arquivo .exe
- macOS: Baixe o arquivo .dmg  
- Linux: Baixe o arquivo .AppImage
```
6. Clique **"Publish release"**

### 4️⃣ **Configurar build automático:**
O arquivo `.github/workflows/build.yml` já está incluído!
Quando você fizer uma tag (v1.0.0), o GitHub automaticamente:
- ✅ Compila para Windows, macOS e Linux
- ✅ Cria os executáveis
- ✅ Publica na seção Releases

### 5️⃣ **Como as pessoas vão baixar:**
1. Vão no seu repositório
2. Clicam em **"Releases"**
3. Baixam o arquivo do sistema deles:
   - `Simulador-de-Futebol-Mundial-Setup-1.0.0.exe` (Windows)
   - `Simulador-de-Futebol-Mundial-1.0.0.dmg` (macOS)
   - `Simulador-de-Futebol-Mundial-1.0.0.AppImage` (Linux)

## 🎯 **IMPORTANTE:**
- Substitua `SEU-USUARIO` pelo seu nome de usuário do GitHub
- O build automático só funciona depois que você subir os arquivos
- A primeira release você pode fazer manualmente

## 🆘 **Se tiver dúvidas:**
1. Me mande print da tela onde você está
2. Te ajudo com o próximo passo
3. Posso explicar qualquer parte novamente