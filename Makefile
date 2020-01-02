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

test-choco:
	cinst myApp -source .\choco-package

test-chrome:
	-taskkill /IM chrome.exe /F 2>NUL
	@cmd /C "start /B make _test-chrome-async"

_test-chrome-async:
	cmd /C "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --load-extension=%cd%\chocolatey-appstore-theme https://chocolatey.org/packages


choco-publish:
	@echo === publish package
	@cmd /C "dir release\*.nupkg /B"
	@echo do it manually with the correct version:
	@echo   choco push ./release/chocolatey-appstore-chrome.1.0.0.nupkg