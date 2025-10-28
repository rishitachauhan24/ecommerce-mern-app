# Start E-Commerce MERN Application

Write-Host "================================" -ForegroundColor Cyan
Write-Host "E-Commerce MERN App Launcher" -ForegroundColor Cyan
Write-Host "================================`n" -ForegroundColor Cyan

# Check MongoDB
Write-Host "Checking MongoDB status..." -ForegroundColor Yellow
$mongoService = Get-Service -Name MongoDB -ErrorAction SilentlyContinue

if ($mongoService) {
    if ($mongoService.Status -ne 'Running') {
        Write-Host "Starting MongoDB service..." -ForegroundColor Yellow
        net start MongoDB
    } else {
        Write-Host "✅ MongoDB is already running" -ForegroundColor Green
    }
} else {
    Write-Host "⚠️  MongoDB service not found!" -ForegroundColor Red
    Write-Host "Please run: .\install-mongodb.ps1 first`n" -ForegroundColor Yellow
    exit
}

Write-Host "`n================================" -ForegroundColor Cyan
Write-Host "Starting Backend Server..." -ForegroundColor Cyan
Write-Host "================================`n" -ForegroundColor Cyan

# Start backend in a new terminal
Start-Process pwsh -ArgumentList "-NoExit", "-Command", "cd '$PSScriptRoot\backend'; npm run dev"

Write-Host "✅ Backend starting on http://localhost:5000" -ForegroundColor Green

Start-Sleep -Seconds 3

Write-Host "`n================================" -ForegroundColor Cyan
Write-Host "Starting Frontend..." -ForegroundColor Cyan
Write-Host "================================`n" -ForegroundColor Cyan

# Start frontend in a new terminal
Start-Process pwsh -ArgumentList "-NoExit", "-Command", "cd '$PSScriptRoot\frontend'; npm start"

Write-Host "✅ Frontend starting on http://localhost:3000" -ForegroundColor Green

Write-Host "`n================================" -ForegroundColor Green
Write-Host "🚀 Application Starting!" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Green

Write-Host "`nBackend:  http://localhost:5000" -ForegroundColor Cyan
Write-Host "Frontend: http://localhost:3000" -ForegroundColor Cyan
Write-Host "`nBoth servers are running in separate terminal windows.`n" -ForegroundColor Yellow

Write-Host "Press any key to exit this window (servers will keep running)..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
