
# chocolatey-appstore theme as chrome extension

![screenshot](https://user-images.githubusercontent.com/1894723/70542634-5c2a1800-1b69-11ea-81bd-b13c1bc756c2.png)

  Changes all package install textboxes to installation buttons on chocolatey.org/packages and utilizes bcurran3's protocol handler.

  Just search for your package as usual, but no need to copy the command line - just press install right next to it.

  You can install multiple packages at the same time, the preinstaller checks extension packages runs them one after another.

## Motivation 

  I created this extension, because there was no protocoll support
  on the chocolatey homepage - and chocolatey-gui fustratingly slow.

  While at it, I changed the style of the app listing to suit my
  taste.

## Installation
Starting from the browser:

1. install the extension from [Chrome web store in your Browser](https://chrome.google.com/webstore/detail/chocolatey-appstore/gkehnkphfligaeniienfamgdfocegffl)
2. install chocolatey from [chocolatey.org](https://chocolatey.org/install)
3. open the [packages page](https://chocolatey.org/packages) - there is an info box at the top, explaining the rest.

## Manual installation of the chrome extension
1. download the crx from the releases tab and drag it into your browser, and accept the installation

or 

1. download the content from the subfolder `chocolatey-appstore-theme` and extract to your documents folder.
2. open `chrome://extensions` -> toggle `developer mode: on`
3. click  `load unpacked extension ...` to load it from the folder saved to in step 1

## Dependencies
1. [Chocolatey](https://chocolatey.org/install)
2. [(unofficial) choco:// Protocol support](https://chocolatey.org/packages/choco-protocol-support)
3. [Chocolatey Preinstaller Checks Extension](https://chocolatey.org/packages/chocolatey-preinstaller-checks.extension)


# License

  MIT


# Changelog

## v1.0.0 (10 Dez 2019)
- Inital