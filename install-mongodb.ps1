# MongoDB Installation Script for Windows

Write-Host "================================" -ForegroundColor Cyan
Write-Host "MongoDB Installation Helper" -ForegroundColor Cyan
Write-Host "================================`n" -ForegroundColor Cyan

Write-Host "Choose installation method:" -ForegroundColor Yellow
Write-Host "1. Download installer from MongoDB website (Recommended)"
Write-Host "2. Install using Chocolatey (if installed)"
Write-Host "3. Skip installation (already installed)`n"

$choice = Read-Host "Enter your choice (1, 2, or 3)"

switch ($choice) {
    "1" {
        Write-Host "`nOpening MongoDB download page..." -ForegroundColor Green
        Start-Process "https://www.mongodb.com/try/download/community"
        Write-Host "`nPlease:"
        Write-Host "1. Download the MSI installer"
        Write-Host "2. Run the installer"
        Write-Host "3. Choose 'Complete' installation"
        Write-Host "4. Install as a Windows Service"
        Write-Host "5. Come back and run this script again with option 3`n"
    }
    "2" {
        Write-Host "`nChecking for Chocolatey..." -ForegroundColor Yellow
        if (Get-Command choco -ErrorAction SilentlyContinue) {
            Write-Host "Installing MongoDB via Chocolatey..." -ForegroundColor Green
            choco install mongodb -y
            Write-Host "`nMongoDB installed successfully!" -ForegroundColor Green
        } else {
            Write-Host "Chocolatey is not installed!" -ForegroundColor Red
            Write-Host "Please choose option 1 or install Chocolatey first."
        }
    }
    "3" {
        Write-Host "`nVerifying MongoDB installation..." -ForegroundColor Yellow
        try {
            $mongoVersion = mongod --version 2>&1
            if ($LASTEXITCODE -eq 0) {
                Write-Host "✅ MongoDB is installed!" -ForegroundColor Green
                Write-Host "$mongoVersion`n"
                
                Write-Host "Starting MongoDB service..." -ForegroundColor Yellow
                net start MongoDB
                
                Write-Host "`n✅ MongoDB is running!" -ForegroundColor Green
                Write-Host "`nYou can now start your application:" -ForegroundColor Cyan
                Write-Host "1. Open a terminal and run: cd backend && npm run dev"
                Write-Host "2. Open another terminal and run: cd frontend && npm start`n"
            }
        } catch {
            Write-Host "❌ MongoDB is not installed or not in PATH" -ForegroundColor Red
            Write-Host "Please choose option 1 or 2 to install MongoDB.`n"
        }
    }
    default {
        Write-Host "`nInvalid choice. Please run the script again.`n" -ForegroundColor Red
    }
}

Write-Host "`nPress any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
