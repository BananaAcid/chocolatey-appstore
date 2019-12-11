# chrome ext is just zipped
# choco/nuget is packed - in this case `cd dir && choco pack`
#
# careful: if executed in powershell, it will still be in cmd


all:
	if not exist release mkdir release
	make chrome
	make choco

chrome:
	7z.exe a -tzip "release/chocolatey-appstore-theme.zip" "chocolatey-appstore-theme" -bd  -mx9 -xr@".gitignore"


choco:
	choco pack choco-package/chocolatey-appstore-chrome.nuspec
	move chocolatey-appstore-chrome.*.nupkg release/
