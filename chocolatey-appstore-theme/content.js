(function($) {

	// on page creation
	$(`
		<style>
			.package-list-view {
				display: flex;
				flex-wrap: wrap;
			}

			/*
			.package-list-view > li {
				flex: 1 1 50%;
				padding: 2em;
				display: flex;
				flex-direction: column;
				border-top: 1px solid rgba(0,0,0,.1);
			}*/

			.package-list-view > li {
				flex: 1 1 calc(33.33% - 2em);
				display: flex;
				flex-direction: column;
				border-top: none;
				/* box-shadow: 0 0 0.2em 0 rgb(255 255 255 / 10%); */
				padding: 1em;
				margin: 1em;
				box-sizing: border-box;
				/* background: rgb(255 255 255 / 3%); */
				background: rgb(100 104 147 / 7%);
				box-shadow: inset 0 0 1px 1px rgb(100 104 147 / 30%);
			}

			@media (max-width: 1200px) {
				.package-list-view > li {
					flex: 1 1 calc(50% - 2em);
				}
			}

			@media (min-width: 1700px) {
				.package-list-view > li {
					flex: 1 1 calc(25% - 2em);
				}
			}

			@media (min-width: 2000px) {
				.package-list-view > li {
					flex: 1 1 calc(20% - 2em);
				}
			}

			.package-list-view > li .package-icon {
				border: 0;
				background: none;
			}

			.package-list-view > li .package-icon img {
				object-fit: contain;
				position: absolute;
				min-width: 5em;
				min-height: 5em;
				left: -2em;
				top: -2em;
			}

			#package > .row {
				display: block;
				width: 100%;
				margin: 0;
			}

			#package > * > * {
				width: 100%;
				padding: 1em !important;
			}

			#package > * > :last-child {
				margin-top: 8em;
				border: 1px solid var(--choco-theme-border);
				background: rgb(100 104 147 / 7%);
			}

			#package > * > :last-child,
			#package > * > :last-child > .shuffle {
				display: flex !important;
				flex-wrap: wrap;
			}
			#package > * > :last-child > *:not(.shuffle),
			#package > * > :last-child > .shuffle > * {
				/*
				flex: 1 1 calc(33% - 4em);
				margin: 2em;
				border: 0;
				*/

				flex: 1 0 calc(25% - 0em);
				/* margin: 2em; */
				border: 0;
				scale: .8;
			}

			#package > * > :last-child > * hr,
			#package > * > :last-child > *:empty
			{
				display: none !important;
			}

			#package li .align-items-sm-center {
				flex-direction: row-reverse;
			}

			#package li .align-items-sm-center > :last-child {
				width: 100%;
			}

			#package li .align-items-sm-center > :first-child {
				align-self: flex-start;
			}
			
			.package-list-view > li:nth-child(even) {
				border-left: 1px solid rgba(0,0,0,.1);
			}

			.package-list-view > li > div > .media .text-dark {
				color: #202f3c!important;
				font-size: 1.4em;
				font-weight: 100!important;
			}

			.package-list-view > li > div > .media .badge-outline-primary {
				background: none;
				border: 0;
				padding-left: 1.5rem;
			}

			.package-list-view > li > div > .media + .package-list-align {
				margin-top: 1em !important;
				margin-bottom: 1em !important;
			}

			.package-list-view > li > hr {
				display: none;
			}

			.package-list-view > li > .package-list-align {
				flex: 1 1 100%;
			}

			.package-list-view > li > .package-list-align > :nth-child(1) {
				display: flex;
				flex-direction: column;
				justify-content: flex-end;

				transition: all 300ms;
				opacity: .2;
			    overflow: hidden;
			}
			.package-list-view > li > .package-list-align > :nth-child(1):hover {
				opacity: 1;
			}

			.package-list-view > li > .package-list-align > :nth-child(2) {
				display: flex;
				align-items: flex-end;
				justify-content: flex-end;
				width: 100%;
			}

			/* .hide-details */
				.package-list-view > li > .package-list-align > :nth-child(1) > * {
					display: none;
				}
			
			[data-bs-target="#package-preferences"] {
				display: none !important;
			}
			
		</style>
	`).prependTo('head');

	// on dom ready
	$(function () {
		if (!localStorage.choco_store_theme_no_info) {
			$(`
				<div id="callout-install-help" class="callout callout-warning py-2" style="margin-bottom: 3em; box-shadow: 0 0 1em 0 var(--bs-warning);">
					<div class="d-md-flex justify-content-md-between align-items-md-center">
						<div class="callout-header d-flex align-items-center"><span class="flex-shrink-0 text-bg-warning h-30-px w-30-px d-flex align-items-center justify-content-center rounded me-3"><span class="fa-solid fa-circle-info"></span></span><p class="lead"><strong>Chocolatey-AppStore Chrome extension</strong></p></div>

						<div class="mt-2 mt-md-0">
							<a style="font-weight: normal; cursor: pointer; font-size: small;" onclick="localStorage.choco_store_theme_no_info = 'hide'; document.querySelector('#callout-install-help').remove();" role="button" title="Remove installation help">
								<i class="fa-solid fa-xmark"></i> &nbsp;
							</a>
							<a class="btn btn-sm btn-secondary btn-collapse btn-show-hide d-hash-none" data-bs-toggle="collapse" href="#package-install-help" role="button" aria-expanded="true" aria-controls="package-warning" title="Installation help">Hide Notification</a>
						</div>
					</div>
					<div class="mt-2 collapse show" id="package-install-help" style="">
						<p>To be able to use the install buttons, you need the following chocolatey packages installed:</p>
						<ol>
							<li>
								<div style="display: flex; justify-content: space-between;">

									<a href="/packages/choco-protocol-support">(unofficial) choco:// Protocol support</a>

									<div class="input-group" style="width: auto; display: inline-flex;">
										<span class="input-group-text text-bg-theme-elevation-1 pe-0">&gt;</span>
										<input type="text" class="form-control text-bg-theme-elevation-1 user-select-all border-start-0 ps-1" aria-label="Install (unofficial) choco:// Protocol support command" value="choco install choco-protocol-support" readonly="">
										<button data-clipboard-text="choco install choco-protocol-support" class="btn btn-primary btn-copy tt tt-top rounded-end" type="button" data-bs-toggle="button" data-tooltip-text="Copy" data-tooltip-text-active="Copied!"><i class="fa-solid fa-clipboard" aria-hidden="true"></i></button>
										<!-- fn does not trigger
										<button class="btn btn-success btn-builder ms-2 rounded-start" aria-label="Add to Builder" value="choco-protocol-support" title="(unofficial) choco:// Protocol support" version="0.0.1.1" image="/content/packageimages/choco-protocol-support.0.0.1.1.png">
											<span class="fa-solid fa-circle-plus"></span>
										</button>
										-->
									</div>

								</div>
							</li>
							<li style="margin-top: .5em;">
								<div style="display: flex; justify-content: space-between;">
									<a href="/packages/chocolatey-preinstaller-checks.extension">Chocolatey Preinstaller Checks Extension</a>
									<div style="display: flex;">
										<a class="btn btn-primary" style="border-bottom-right-radius: 0; border-top-right-radius: 0;" href="choco://chocolatey-preinstaller-checks.extension">install</a>

										<button 
										style="border-bottom-left-radius: 0; border-top-left-radius: 0; z-index: 2;"
										data-clipboard-text="choco install chocolatey-preinstaller-checks.extension"
										class="btn btn-primary btn-copy tt tt-top rounded-end" type="button" data-bs-toggle="button" 
										data-tooltip-text="Copy"
										data-tooltip-text-active="Copied!"><i class="fa-solid fa-clipboard" aria-hidden="true"></i></button>
									</div>
								</div>
							</li>
						</ol>
					</div>
				</div>
			`).insertBefore('#package div:has(> nav) > :first-child');
		}

		if (!localStorage.choco_store_theme_no_packagewarning) {
			$(`
				<a style="font-weight: normal; cursor: pointer; font-size: small;" onclick="localStorage.choco_store_theme_no_packagewarning = 'hide'; document.querySelector('#callout-package-warning').remove();" role="button" title="Remove">
					<i class="fa-solid fa-xmark"></i> &nbsp;
				</a>
			`).insertBefore('#callout-package-warning [href="#package-warning"]');
		}
		else {
			$('#callout-package-warning').remove();
		}


		$('.input-group:has(input[value*="choco install"])').each((i, e) => {
			
			let valO = $('input[value*="choco install"]', e).val();
			let val = valO.replace('choco install', '').trim().split(' ').shift();

			if (val == 'choco-protocol-support') return; // do not fix the installer for his tool.

			$('[data-clipboard-target]', e).attr('data-clipboard-text', valO).attr('data-clipboard-target', '');

			$(e).css('justify-content', 'flex-end');
			$('.input-group-text, input[value*="choco install"]', e).remove();
			$(e).prepend('<a class="btn btn-primary" style="border-bottom-right-radius: 0; border-top-right-radius: 0;" href="choco://' + val + '" title="choco://' + val + '" >install</a>');
		});
	});

})(jQuery);
jQuery.noConflict();
