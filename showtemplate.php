
<?
	// Test out any module or template on their own 
	///showtemplate.php?template=header.php&iswrap=
	include("sitevars.php");
	$template = $_GET['template'];
	$iswrap = $_GET['iswrap'];
?>

<?php include($theme_dir."/templates/head.php"); ?>
<?php include($theme_dir."/templates/headclose.php"); ?>
	<? if ($iswrap==="true") {echo '<main id="content-main" class="clearfix"><div class="wrap clearfix">';}; ?>			
		<? if ($template) {include($theme_dir."/templates/".$template);}; ?>
	<? if ($iswrap==="true") {echo '</div></main>';}; ?>
<?php include($theme_dir."/templates/footerclose.php"); ?>
