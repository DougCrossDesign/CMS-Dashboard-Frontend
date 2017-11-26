<?
	//Globals
	include("sitevars.php");

	// Page Specific Vars
	$page_meta = array(
		"title" => "pageName",
		"keywords" => "",
		"description" => ""
	);
	$body_class = array(
		"page" => "pg_home",
		"site_section" => "sct_home",
		"layout" => ""
	);
?>

<?php include($theme_incs."head.tpl.php"); ?>

<!-- Page Specific JS -->

<!-- /Page Specific JS -->
	<!-- Main -->
	<div id="cms-container" class="clearfix">
          <div id="side-menu" class="col-xs-2" style="transition: all .5s linear">
            <div class="box box-container">
              <?php include($theme_incs."menu.tpl.php"); ?>
            </div>
			<a id="menu-trigger" class="active"><span></span></a>
          </div>
          <div id="dashboard-area" class="col-xs-10" style="transition: all .5s linear">

            <div class="box box-container">
				<div class="head-bg-image">
					<div class="head-bg-layer ">
						<div id="head-reset" class="row">
		  				<div class="col-xs-12">
		  					<div class="box-first box-container">
		    						<?php include($theme_incs."head-nav.tpl.php"); ?>
		                      </div>
		                    <div class="box-first box-container">
		  					<?php include($theme_incs."head-greeting.tpl.php"); ?>
		                    </div>
		                  </div>
		  			</div>
					</div>
				</div>


		  </div>
			<div id="dash-bottom" class="col-xs-12">
				<div class="col-xs-12">
				  <div class="box-first box-container">
					<?php include($theme_incs."quicktasks.tpl.php"); ?>
				  </div>
				</div>
				<div class="row">

						<div class="col-xs-6">
							<div class="col-xs-12">
			  				<?php include($theme_incs."to-do-list.tpl.php"); ?>
			  			  </div>
						</div>

						<div class="col-xs-6">
							<div class="col-xs-12">
			  				<?php include($theme_incs."drafts.tpl.php"); ?>
			  			  </div>
						</div>

				</div>

			</div>





      </div>
    </div>

<?php include($theme_incs."footer.tpl.php"); ?>
