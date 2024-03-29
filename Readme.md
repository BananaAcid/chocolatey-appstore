
# chocolatey-appstore theme as chrome extension

![screenshot](https://user-images.githubusercontent.com/1894723/217387052-e63f1db8-e641-4fe0-80f4-4a1605629f7e.png)

  Changes all package install textboxes to installation buttons on chocolatey.org/packages and utilizes bcurran3's protocol handler.

  Just search for your package as usual, but no need to copy the command line - just press install right next to it.

  You can install multiple packages at the same time, the preinstaller checks extension packages runs them one after another.

## Motivation 

  I created this extension, because there was no protocoll support
  on the chocolatey homepage - and chocolatey-gui fustratingly slow.

  While at it, I changed the style of the app listing to suit my
  taste.

## Installation: using Chocolatey (in Powershell)
using [chocolatey](https://chocolatey.org/install) from the powershell commandline (installs everything: extension + dependencies):

```
ps> choco install chocolatey-appstore-chrome
```

## Installation: in browser / Chrome extensions
1. install the extension from [Chrome web store in your Browser](https://chrome.google.com/webstore/detail/chocolatey-appstore/gkehnkphfligaeniienfamgdfocegffl)
2. install chocolatey from [chocolatey.org](https://chocolatey.org/install)
3. open the [packages page](https://chocolatey.org/packages) - there is an info box at the top, explaining the rest.

## Installation: manual installation of the chrome extension
1. download the crx from the releases tab and drag it into your browser, and accept the installation
2. install chocolatey from [chocolatey.org](https://chocolatey.org/install)
3. open the [packages page](https://chocolatey.org/packages) - there is an info box at the top, explaining the rest.

## Installation: manual installation of the chrome extension using the source code (Developer mode)
1. download the content from the subfolder `chocolatey-appstore-theme` and extract to your documents folder.
2. open `chrome://extensions` -> toggle `developer mode: on`
3. click  `load unpacked extension ...` to load it from the folder saved to in step 1
4. install chocolatey from [chocolatey.org](https://chocolatey.org/install)
5. open the [packages page](https://chocolatey.org/packages) - there is an info box at the top, explaining the rest.


## Dependencies
1. [Chocolatey](https://chocolatey.org/install)
2. [(unofficial) choco:// Protocol support](https://chocolatey.org/packages/choco-protocol-support)
3. Chrome or Chromium browser

## Optional Dependencies
1. [Chocolatey Preinstaller Checks Extension](https://chocolatey.org/packages/chocolatey-preinstaller-checks.extension) to queue installations to avoid race-conditions while installing

## Dev Dependencies
1. make
2. 7zip
3. choco-nuspec-checker

Install them: `choco install -Y make 7zip choco-nuspec-checker`

# License

  MIT

## Inital release (v1.0.0) in 10 Dez 2019
## Updates (v.2.0.0) in 07 Feb 2023
