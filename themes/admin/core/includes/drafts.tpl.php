<?php

?>
<div id="drafts" class="">
		<h6 class="section-hdr">Drafts</h6>

	<div id="drafts-head" class="col-xs-12 row">
		<p class="col-xs-6 upper">Draft</p>
		<p class="col-xs-6 center upper">Actions</p>
	</div>
	<div id="drafts-list" class="col-xs-12">
		<ul class="col-xs-12">
			<?php for ($i = 0; $i < 5; ++$i) { // FRONTEND FOR EXAMPLE LOOP -- REPLACE ?>
				<li class="">
					<p class="drafts-item">Draft Item</p>
					<a href="#" id="edit"><div><p>Edit</p></div></a>
					<a href="#" id="preview"><div><p>Preview</p></div></a>
					<a href="#" id="publish"><div><p>Publish</p></div></a>
				</li>
				<?php } ?>
		</ul>
	</div>
</div>
