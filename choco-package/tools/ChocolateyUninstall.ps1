$ErrorActionPreference = 'Continue'

$bits = Get-ProcessorBits
$packageName = 'chocolatey-appstore-chrome'
$extensionID = 'gkehnkphfligaeniienfamgdfocegffl'

if ($bits -eq 64)
{
  Remove-Item "HKLM:\SOFTWARE\Wow6432node\Google\Chrome\Extensions\$extensionID" -Force -ErrorAction SilentlyContinue | out-null
} else {
  Remove-Item "HKLM:\SOFTWARE\Google\Chrome\Extensions\$extensionID" -Force -ErrorAction SilentlyContinue | out-null
}