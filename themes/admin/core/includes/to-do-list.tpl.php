<?php

?>
<div id="to-do" class="">
		<h6 class="section-hdr">To-Do List</h6>

	<div id="to-do-input" class="col-xs-12">
		<p class="float">Add Task:</p>
		<input type="text" form="ToDo" class="float"/>
		<a class="add-feature floatr" href=""><span></span></a>
	</div>
	<div id="to-do-list" class="col-xs-12">
		<ul class="col-xs-12">
			<?php for ($i = 0; $i < 8; ++$i) { // FRONTEND FOR EXAMPLE LOOP -- REPLACE ?>
				<li class=""><div class="to-do-check"><input type="checkbox" form="ToDo" class=""/></div><p class="to-do-item">To Do List item</p></li>
				<?php } ?>
		</ul>
	</div>
</div>
