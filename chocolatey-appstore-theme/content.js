(function($) {

	// on oage ceration
	$(`
		<style>
			.package-list-view {
				display: flex;
				flex-wrap: wrap;
			}

			.package-list-view > li {
				flex: 1 1 50%;
				padding: 2em;
				display: flex;
				flex-direction: column;
				border-top: 1px solid rgba(0,0,0,.1);
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
			}
		</style>
	`).prependTo('head');

	// on dom ready
	$(function() {

		if (!localStorage.choco_store_theme_no_info) {
			$(`
				<script>
					window.choco_store_theme_no_info = function() {
						localStorage.choco_store_theme_no_info = "hide";
						$('#callout-install-help').slideUp((e) => $(e).remove());
					};
				</script>
				<div id="callout-install-help" class="callout callout-warning py-2" style="margin-bottom: 3em;">
					<div class="d-md-flex justify-content-md-between align-items-md-center">
						<h5 class="mb-0 font-weight-bold"><span class="fas fa-exclamation-triangle text-warning"></span> Chocolatey-AppStore Chrome extension</h5>
						<div class="mt-2 mt-md-0">
							<a style="font-weight: normal; cursor: pointer; font-size: small;" onclick="window.choco_store_theme_no_info()" role="button" title="Remove installation help">
								remove
							</a>
							<a class="collapse show btn btn-sm btn-secondary" data-toggle="collapse" href="#package-install-help" role="button" title="Installation help">
								Hide Notification
							</a>
						</div>
					</div>
					<div class="mt-2 collapse show" id="package-install-help" style="">
						<p>To be able to use the install buttons, you need the following chocolatey packages installed:</p>
						<ol>
							<li>
								<div style="display: flex; justify-content: space-between;">

									<a href="/packages/choco-protocol-support">(unofficial) choco:// Protocol support</a>

									<div class="input-group" style="display: inline-flex; width: auto;">
										<div class="input-group-prepend">
											<div class="input-group-text">&gt;</div>
										</div>
										<input type="text" class="form-control" value="choco install choco-protocol-support" aria-label="Install (unofficial) choco:// Protocol support command" readonly="">
										<div class="input-group-append">
											<button class="btn btn-primary tt" aria-label="Copy choco-protocol-support to Clipboard" data-toggle="tooltip" title="" data-clipboard-text="choco install choco-protocol-support" data-original-title="Copy to Clipboard">
												<i class="fas fa-clipboard" aria-hidden="true">
													<span class="sr-only">Copy choco-protocol-support to Clipboard</span>
												</i>
											</button>
										</div>
									</div>

								</div>
							</li>
							<li style="margin-top: .5em;">
								<div style="display: flex; justify-content: space-between;">
									<a href="/packages/chocolatey-preinstaller-checks.extension">Chocolatey Preinstaller Checks Extension</a>
									<div style="display: flex;">
										<a class="btn btn-primary" style="border-bottom-right-radius: 0; border-top-right-radius: 0;" href="choco://chocolatey-preinstaller-checks.extension">install</a>
										<button class="btn btn-primary tt" style="border-bottom-left-radius: 0; border-top-left-radius: 0;" aria-label="Copy chocolatey-preinstaller-checks.extension to Clipboard" data-toggle="tooltip" title="" data-clipboard-text="choco install chocolatey-preinstaller-checks.extension" data-original-title="Copy to Clipboard">
											<i class="fas fa-clipboard" aria-hidden="true">
												<span class="sr-only">Copy chocolatey-preinstaller-checks.extension to Clipboard</span>
											</i>
										</button>
									</div>
								</div>
							</li>
						</ol>
					</div>
				</div>
			`).insertBefore('#package .tab-content');
		}


		$('.input-group:has(input[value*="choco install"])').each((i, e) => {
			
			let val = $('input[value*="choco install"]', e).val().replace('choco install', '').trim().split(' ').shift();

			if (val == 'choco-protocol-support') return; // do not fix the installer for his tool.

			$(e).css('justify-content', 'flex-end');
			$('.input-group-prepend', e).remove();
			$('input[value*="choco install"]', e).remove();
			$(e).prepend('<a class="btn btn-primary" style="border-bottom-right-radius: 0; border-top-right-radius: 0;" href="choco://' + val + '" title="choco://' + val + '" >install</a>');
		});
	});

})(jQuery);
jQuery.noConflict();
