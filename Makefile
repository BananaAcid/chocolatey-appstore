# chrome ext is just zipped
# choco/nuget is packed - in this case `cd dir && choco pack`
#
# careful: if executed in powershell, it will still be in cmd
#
# using: https://chocolatey.org/packages/make and https://chocolatey.org/packages/choco-nuspec-checker



all:
	@if not exist release mkdir release
	@make chrome
	@make choco

chrome:
	@echo === packup as zip and filter using .gitignore
	7z.exe a -tzip "release/chocolatey-appstore-theme.zip" "chocolatey-appstore-theme" -bd  -mx9 -xr@".gitignore"


choco:
	@echo === validate the package definition
	cnc choco-package/
	@echo === pack up
	choco pack choco-package/chocolatey-appstore-chrome.nuspec
	move chocolatey-appstore-chrome.*.nupkg release/
