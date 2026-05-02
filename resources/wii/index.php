<?php
	$sesId = NULL;
	$app = NULL;
	$displayname = NULL;
	$action = NULL;
	$spincolors = array(
        "", "outline_Black.mym", "outline_Blue.mym", "outline_Green.mym", "outline_Orange.mym", "outline_Pink.mym", "outline_Purple.mym", "outline_Red.mym", "outline_White.mym", "outline_Yellow.mym"
    );
	if(isset($_GET['action'])) {

		$action = $_GET['action'];
		$tooldir = "../tools";
		$themedir = "../mym";
		$spin_first_themes = array(
			"black_pirate.mym", "matrix.mym", "matrix_reloaded.mym", "muse.mym", "lime_wii.mym", "diablo_3.mym", "star_craft.mym", "darkwii_extendedu.mym", "darkwii_extendede.mym"
		);//"darkwii_extendedJ.mym", "darkwii_extendedK.mym");
		$themeNoext = NULL;
		$str = NULL;
		$spinmym = NULL;
		$spindisplay = NULL;
		$runfirst = false;
		$multistage_theme = null;
		$sesId = null;
		$themetocheck = null;
		
		switch($action) {
			case "prep_Dir": 
				$copytools = NULL;
				session_start();
				$sesId = session_id();
				if(!empty("working/" . $sesId)) {  // make session directory and copy needed files to it
					if(!is_dir("working/" . $sesId)) {
						mkdir("working/" . $sesId);
					}
					if(is_dir($tooldir)) {
						if ($dh = opendir($tooldir)){
							while(($file = readdir($dh)) !== false) {
								if($file == "." or $file == "..")
									continue;
								$copytools = copy($tooldir . "/" . $file, "working/" . $sesId . "/" . $file );
								usleep(1000);
							}
							closedir($dh);
						}
					}
					if(is_dir("working/" . $sesId)) {
						if($copytools)
							echo $sesId;
						else
							echo "ERROR";
					}
				}
			break;
			case "copy_mym_files": 
				if(isset($_GET['sessionId'])) $sesId = $_GET['sessionId'];
				//echo $sesId . "<br>\n";
				if(isset($_GET['mymfile'])) $theme = $_GET['mymfile'];
				$multistage_theme = checkfor2stagetheme($theme);
				if(isset($theme)) {
					$copytheme = NULL;
					$themewdir = $themedir . "/" . $theme;
					$copytheme = copy($themewdir, "working/" . $sesId . "/" . $theme);
					if($multistage_theme) {
						$theme = $themedir . "/" . $multistage_theme . "stage2.mym";
						$themenodir = $multistage_theme . "stage2.mym";
						$copytheme = copy($theme, "working/" . $sesId . "/" . $themenodir);	
					}
					if($copytheme)
						echo "OK";
					else
						echo "ERROR";
				}
				if(isset($_GET['spin'])) $spinselected = $_GET['spin'];
				if(isset($spinselected)) {
					$copyspin = NULL;

					if($spinselected == "fastspin.mym") {
						$spinmym = "../mym/spins/fastspin.mym";
					}
					else if($spinselected == "spin.mym") {
						$spinmym = "../mym/spins/spin.mym";
					}
					else if($spinselected == "nospin.mym") {
						$spinmym = "../mym/spins/nospin.mym";
					}

					$copyspin = copy($spinmym, "working/" . $sesId . "/" . $spinselected);
					if($copyspin)
						echo "OK";
					else
						echo "ERROR";
				}
				if(isset($_GET['spincolor'])) $spincolorselected = $_GET['spincolor'];
				//echo $spincolorselected . " - spin color\n";
				if($spincolorselected == "None")
					echo "OK";
				else {
				if(isset($spincolorselected)) {
					$copyspincolor = NULL;

					if($spincolorselected == "outline_Black.mym") {
						$spincolormym = "../mym/outline_colors/outline_Black.mym";
					}
					else if($spincolorselected == "outline_Blue.mym") {
						$spincolormym = "../mym/outline_colors/outline_Blue.mym";
					}
					else if($spincolorselected == "outline_Green.mym") {
						$spincolormym = "../mym/outline_colors/outline_Green.mym";
					}
					else if($spincolorselected == "outline_Orange.mym") {
						$spincolormym = "../mym/outline_colors/outline_Orange.mym";
					}
					else if($spincolorselected == "outline_Pink.mym") {
						$spincolormym = "../mym/outline_colors/outline_Pink.mym";
					}
					else if($spincolorselected == "outline_Purple.mym") {
						$spincolormym = "../mym/outline_colors/outline_Purple.mym";
					}
					else if($spincolorselected == "outline_Red.mym") {
						$spincolormym = "../mym/outline_colors/outline_Red.mym";
					}
					else if($spincolorselected == "outline_White.mym") {
						$spincolormym = "../mym/outline_colors/outline_White.mym";
					}
					else if($spincolorselected == "outline_Yellow.mym") {
						$spincolormym = "../mym/outline_colors/outline_Yellow.mym";
					}

					$copyspincolor = copy($spincolormym, "working/" . $sesId . "/" . $spincolorselected);
					if($copyspincolor)
						echo "OK";
					else
						echo "ERROR";
				}
				}
			break;
			case "download_content": 
				$seccntr = NULL;
				$optimeout = 60;
				if(isset($_GET['sessionId'])) $sesId = $_GET['sessionId'];
				//echo $sesId . "<br>\n";
				if(isset($_GET['version'])) $version = $_GET['version'];
				if(isset($_GET['mymfile'])) $theme = $_GET['mymfile'];
				if(isset($_GET['spin'])) $spinselected = $_GET['spin'];
				//if(isset($_GET['spincolor'])) $spincolorselected = $_GET['spincolor'];
				//echo $spinselected . "<br>\n";
				//echo $spincolorselected . "<br>\n";
				if(isset($version)) { # download .app file from nus servers
					getappndisplayname($version);
					$str = "working/" . $sesId . "/000000" . $GLOBALS['app'];
					$myfile = file_exists($str);
					if(!$myfile) {
						$homedir = getcwd();
						chdir("working/" . $sesId);
						$str = null;
						$str = "themething c 000000" . $GLOBALS['app'];
						//echo $str . "\n";
						execInBackground($str);
						chdir($homedir);
						$str = "working/" . $sesId . "/000000" . $GLOBALS['app'];
						$myfile = file_exists($str);
						while((!$myfile and filesize($myfile) == 0) and ($seccntr < $optimeout)) {
							$myfile = file_exists($str);
							sleep(1);
							$seccntr += 1;
						}
						if(!$myfile and ($seccntr == $optimeout)) {
							echo "Error = downloadapp";
							return;
						}
						$appfile = $GLOBALS['app'];
						$homedir = getcwd();
						chdir("working/" . $sesId);
						$str = null;
						$str = "themething s 000000" . $GLOBALS['app'] . " " . $theme . " " . $spinselected . " Theme_Manager";
						//echo $str . "\n";
						execInBackground($str);
						chdir($homedir);
						$str = "working/" . $sesId . "/000000" . $GLOBALS['app'];
						$myfile = file_exists($str);
						while((!$myfile and filesize($myfile) == 0) and ($seccntr < $optimeout)) {
							$myfile = file_exists($str);
							sleep(1);
							$seccntr += 1;
						}
						if(!$myfile and ($seccntr == $optimeout)) {
							echo "Error";
							return;
						}
						clearstatcache();
					}
					echo "Complete";
				}
			break;
			case "build_theme":  
				if(isset($_GET['mymfile'])) $theme = $_GET['mymfile'];
				//echo $theme . "<br>\n";
				if(isset($_GET['sessionId'])) $sesId = $_GET['sessionId'];
				//echo $sesId . "<br>\n";
				if(isset($_GET['spin'])) $spinselected = $_GET['spin'];
				//echo $spinselected . "<br>\n";
				if(isset($_GET['spincolor'])) $spincolorselected = $_GET['spincolor'];
				//echo $spincolorselected . " - build theme\n";
				if(isset($_GET['version'])) $version = $_GET['version'];
				//echo $version . "<br>\n";
				if(isset($_GET['selected'])) $selected = $_GET['selected'];
				//echo "selected = \n"  .  $selected;
				//return;
				if(isset($theme)) {
					$seccntr = NULL;
					$optimeout = 60;
					getappndisplayname($version);
					// spin selection	
					if($spinselected == "fastspin.mym") {
						$spinmym = "../mym/spins/fastspin.mym";
						$spindisplay = "_fastspin";
					}
					else if($spinselected == "spin.mym") {
						$spinmym = "../mym/spins/spin.mym";
						$spindisplay = "_spin";
					}
					else if($spinselected == "nospin.mym") {
						$spinmym = "../mym/spins/nospin.mym";
						$spindisplay = "_nospin";
					}
					// spin color selection
					if($spincolorselected == "outline_Black.mym") {
						$spincolormym = "../mym/outline_colors/outline_Black.mym";
						$spincolordisplay = "_outline_Black";
					}
					else if($spincolorselected == "outline_Blue.mym") {
						$spincolormym = "../mym/outline_colors/outline_Blue.mym";
						$spincolordisplay = "_outline_Blue";
					}
					else if($spincolorselected == "outline_Green.mym") {
						$spincolormym = "../mym/outline_colors/outline_Green.mym";
						$spincolordisplay = "_outline_Green";
					}
					else if($spincolorselected == "outline_Orange.mym") {
						$spincolormym = "../mym/outline_colors/outline_Orange.mym";
						$spincolordisplay = "_outline_Orange";
					}
					else if($spincolorselected == "outline_Pink.mym") {
						$spincolormym = "../mym/outline_colors/outline_Pink.mym";
						$spincolordisplay = "_outline_Pink";
					}
					else if($spincolorselected == "outline_Purple.mym") {
						$spincolormym = "../mym/outline_colors/outline_Purple.mym";
						$spincolordisplay = "_outline_Purple";
					}
					else if($spincolorselected == "outline_Red.mym") {
						$spincolormym = "../mym/outline_colors/outline_Red.mym";
						$spincolordisplay = "_outline_Red";
					}
					else if($spincolorselected == "outline_White.mym") {
						$spincolormym = "../mym/outline_colors/outline_White.mym";
						$spincolordisplay = "_outline_White";
					}
					else if($spincolorselected == "outline_Yellow.mym") {
						$spincolormym = "../mym/outline_colors/outline_Yellow.mym";
						$spincolordisplay = "_outline_Yellow";
					}

					$multistage_theme = checkfor2stagetheme($theme);
					if($multistage_theme) {
						$str = "themething b 000000" . $app . " " . $theme . " stage1.app";
						$homedir = getcwd();
						chdir("working/" . $sesId);
						execInBackground($str);
						chdir($homedir);
						$str = null;
						$str = "working/" . $sesId . "/stage1.app";
						$myfile = file_exists($str);
						while((!$myfile and filesize($myfile) == 0) and $seccntr < $optimeout) {
							$myfile = file_exists($str);
							sleep(1);
							$seccntr += 1;
						}
						if(!$myfile and $seccntr == $optimeout) {
							echo "Error = building multi section 1";
							return;
						}
						$str = null;
						if($spincolorselected != "None") $str = "themething b stage1.app " . $multistage_theme . "stage2.mym stage2.app";
						else $str = "themething b stage1.app " . $multistage_theme . "stage2.mym stage3.app";
						$homedir = getcwd();
						chdir("working/" . $sesId);
						execInBackground($str);
						chdir($homedir);
						$str = null;
						if($spincolorselected != "None") $str = "working/" . $sesId . "/stage2.app";
						else $str = "working/" . $sesId . "/stage3.app";
						$myfile = file_exists($str);
						while((!$myfile and filesize($myfile) == 0) and $seccntr < $optimeout) {
							$myfile = file_exists($str);
							sleep(1);
							$seccntr += 1;
						}
						if(!$myfile and $seccntr == $optimeout) {
							echo "Error = building multi section 2";
							return;
						}
						if($spincolorselected != "None") {
							$str = null;
							//echo "spincolorselected = " . $spincolorselected . "\n";
							$str = "themething b stage2.app " . $spincolorselected . " stage3.app";
							//echo $str . " - section 3 build str\nspincolorselected = " . $spincolorselected . "\n";
							$homedir = getcwd();
							chdir("working/" . $sesId);
							execInBackground($str);
							chdir($homedir);
							$str = null;
							$str = "working/" . $sesId . "/stage3.app";
							$myfile = file_exists($str);
							while((!$myfile and filesize($myfile) == 0) and $seccntr < $optimeout) {
								$myfile = file_exists($str);
								sleep(1);
								$seccntr += 1;
							}
							if(!$myfile and $seccntr == $optimeout) {
								echo "Error = building multi section 3";
								return;
							}
						}
						$str = null;
						if($spincolorselected != "None") $str = "themething b stage3.app " . $spinselected . " " . $multistage_theme . "_" . $displayname . $spindisplay . $spincolordisplay . ".csm";
						else $str = "themething b stage3.app " . $spinselected . " " . $multistage_theme . "_" . $displayname . $spindisplay  . ".csm";
						$homedir = getcwd();
						chdir("working/" . $sesId);
						execInBackground($str);
						chdir($homedir);
						$str = null;
						if($spincolorselected != "None") $str = "working/" . $sesId . "/" . $multistage_theme . "_" . $displayname . $spindisplay . $spincolordisplay . ".csm";
						else $str = "working/" . $sesId . "/" . $multistage_theme . "_" . $displayname . $spindisplay  . ".csm";
						$myfile = file_exists($str);
						while((!$myfile and filesize($myfile) == 0) and $seccntr < $optimeout) {
							$myfile = file_exists($str);
							sleep(1);
							$seccntr += 1;
						}
						if(!$myfile and $seccntr == $optimeout) {
							echo "Error = building multi section 4";
							return;
						}
					}
					else {
						for($i = 0; $i < count($spin_first_themes); $i++) {
							if($theme == $spin_first_themes[$i]) {
								$runfirst = true;
								break;
							}
						}
						if($runfirst) {
							if($spincolorselected != "None") $str = "themething b 000000" . $app . " " . $spinselected . " stage1.app";
							else $str = "themething b 000000" . $app . " " . $spinselected . " stage2.app";
							$homedir = getcwd();
							chdir("working/" . $sesId);
							execInBackground($str);
							chdir($homedir);
							$str = NULL;
							if($spincolorselected != "None") $str = "working/" . $sesId . "/stage1.app";
							else $str = "working/" . $sesId . "/stage2.app";
							$myfile = file_exists($str);
							while((!$myfile and filesize($myfile) == 0) and $seccntr < $optimeout) {
								$myfile = file_exists($str);
								sleep(1);
								$seccntr += 1;
							}
							if(!$myfile and $seccntr == $optimeout) {
								echo "Error = building stage 1";
								return;
							}
							if($spincolorselected != "None") {
								$str = NULL;
								$str = "themething b stage1.app " . $spincolorselected . " stage2.app";
								$homedir = getcwd();
								chdir("working/" . $sesId);
								execInBackground($str);
								chdir($homedir);
								$str = NULL;
								$str = "working/" . $sesId . "/stage2.app";
								$myfile = file_exists($str);
								while((!$myfile and filesize($myfile) == 0) and $seccntr < $optimeout) {
									$myfile = file_exists($str);
									sleep(1);
									$seccntr += 1;
								}
								if(!$myfile and $seccntr == $optimeout) {
									echo "Error = building stage 2";
									return;
								}
							}
							if(add_mym_Extension($selected))
								$themeNoext = substr($theme, 0, strlen($theme) - 5);
							else $themeNoext = substr($theme, 0, strlen($theme) - 4);
							$str = NULL;
							if($spincolorselected != "None") $str = "themething b stage2.app " . $theme . " ". $themeNoext . "_" . $displayname . $spindisplay . $spincolordisplay . ".csm";
							else $str = "themething b stage2.app " . $theme . " ". $themeNoext . "_" . $displayname . $spindisplay  . ".csm";
							$homedir = getcwd();
							chdir("working/" . $sesId);
							execInBackground($str);
							chdir($homedir);
							$str = NULL;
							if($spincolorselected != "None") $str = "working/" . $sesId . "/" . $themeNoext . "_" . $displayname . $spindisplay . $spincolordisplay . ".csm";
							else $str = "working/" . $sesId . "/" . $themeNoext . "_" . $displayname . $spindisplay  . ".csm";
							$myfile = file_exists($str);
							while((!$myfile and filesize($myfile) == 0) and $seccntr < $optimeout) {
								$myfile = file_exists($str);
								sleep(1);
								$seccntr += 1;
							}
							if(!$myfile and $seccntr == $optimeout) {
								echo "Error = building stage 3";
								return;
							}
						}
						else {
							if($spincolorselected != "None") $str = "themething b 000000" . $app . " " . $theme . " stage1.app";
							else $str = "themething b 000000" . $app . " " . $theme . " stage2.app";
							$homedir = getcwd();
							chdir("working/" . $sesId);
							execInBackground($str);
							chdir($homedir);
							
							$str = NULL;
							if($spincolorselected != "None") $str = "working/" . $sesId . "/stage1.app";
							else $str = "working/" . $sesId . "/stage2.app";
							$myfile = file_exists($str);
							while((!$myfile and filesize($myfile) == 0) and $seccntr < $optimeout) {
								$myfile = file_exists($str);
								sleep(1);
								$seccntr += 1;
							}
							if(!$myfile and $seccntr == $optimeout) {
								echo "Error = building stage 1";
								return;
							}
							if($spincolorselected != "None"){
								$str = NULL;
								$str = "themething b stage1.app " . $spincolorselected . " stage2.app";
								$homedir = getcwd();
								chdir("working/" . $sesId);
								execInBackground($str);
								chdir($homedir);
								$str = NULL;
								$str = "working/" . $sesId . "/stage2.app";
								$myfile = file_exists($str);
								while((!$myfile and filesize($myfile) == 0) and $seccntr < $optimeout) {
									$myfile = file_exists($str);
									sleep(1);
									$seccntr += 1;
								}
								if(!$myfile and $seccntr == $optimeout) {
									echo "Error = building stage 2";
									return;
								}
							}
							if(add_mym_Extension($selected))
								$themeNoext = substr($theme, 0, strlen($theme) - 5);
							else $themeNoext = substr($theme, 0, strlen($theme) - 4);
							$str = NULL;
							if($spincolorselected != "None") $str = "themething b stage2.app " . $spinselected . " ". $themeNoext . "_" . $displayname . $spindisplay . $spincolordisplay . ".csm";
							else $str = "themething b stage2.app " . $spinselected . " ". $themeNoext . "_" . $displayname . $spindisplay  . ".csm";
							$homedir = getcwd();
							chdir("working/" . $sesId);
							execInBackground($str);
							chdir($homedir);
							$str = NULL;
							if($spincolorselected != "None") $str = "working/" . $sesId . "/" . $themeNoext . "_" . $displayname . $spindisplay . $spincolordisplay . ".csm";
							else $str = "working/" . $sesId . "/" . $themeNoext . "_" . $displayname . $spindisplay  . ".csm";
							$myfile = file_exists($str);
							while((!$myfile and filesize($myfile) == 0) and $seccntr < $optimeout) {
								$myfile = file_exists($str);
								sleep(1);
								$seccntr += 1;
							}
						}
					}
					if($spincolorselected != "None") {
						if($multistage_theme) echo "http://www.wiithemer.org/resources/wii/" . "working/" . $sesId . "/" . $multistage_theme . "_" . $displayname . $spindisplay . $spincolordisplay . ".csm";
						else echo "http://www.wiithemer.org/resources/wii/" . "working/" . $sesId . "/" . $themeNoext . "_" . $displayname . $spindisplay . $spincolordisplay . ".csm";
					}
					else {
						if($multistage_theme) echo "http://www.wiithemer.org/resources/wii/" . "working/" . $sesId . "/" . $multistage_theme . "_" . $displayname . $spindisplay  . ".csm";
						else echo "http://www.wiithemer.org/resources/wii/" . "working/" . $sesId . "/" . $themeNoext . "_" . $displayname . $spindisplay  . ".csm";
					}
				}
			break;
			case "remove_session_Dir":  
				if(isset($_GET['sessionId'])) $sesId = $_GET['sessionId'];
				if (is_dir($sesId)){
					if ($dh = opendir($sesId)){
						while (($file = readdir($dh)) !== false) {
							if($file == "." or $file == "..")
								continue;
							unlink($sesId . "/" . $file);
						}
						closedir($dh);
					}
					usleep(5000);
					rmdir($sesId);
					echo "Session Dir. and files removal complete .\n";
				}
			break;
			case "updatedownloadcount": 
				if(isset($_GET['downloadcount'])) $downloadcount = $_GET['downloadcount'];
				if(isset($_GET['themetoupdate'])) $themetoupdate = $_GET['themetoupdate'];
				//echo "theme = " . $themetoupdate . "<br>downloadcount = " . $downloadcount . "<br>\n";
				//$themetoupdatenospaces = str_replace(" ", "", $themetoupdate);
				$readCount = file_get_contents("wiithememanager/" . $themetoupdate . "/downloads.txt");
				//echo $readCount . "<br>\n";
				//echo $themetoupdatenospaces . "<br>\n";
				$count = $readCount + $downloadcount;
				
				file_put_contents("wiithememanager/" . $themetoupdate . "/downloads.txt", $count, LOCK_EX);
				echo $count;
			break;
		}
	}
	function execInBackground($cmd) {
		if (substr(php_uname(), 0, 7) == "Windows"){
			pclose(popen("start ". $cmd, "r"));
		}
		return;
	}
	function getappndisplayname($version) {
		switch($version) {
			case 609: 
				$GLOBALS['app'] = "1f"; // U 4.3
				$GLOBALS['displayname'] = "v609_U";
			break;
			case 513: 
				$GLOBALS['app'] = "97"; // U 4.3
				$GLOBALS['displayname'] = "4.3U";
			break;
			case 481:
				$GLOBALS['app'] = "87";
				$GLOBALS['displayname'] = "4.2U";
			break;
			case 449:
				$GLOBALS['app'] = "7b";
				$GLOBALS['displayname'] = "4.1U";
			break;
			case 417:
				$GLOBALS['app'] = "72";
				$GLOBALS['displayname'] = "4.0U";
			break;
			case 610:
				$GLOBALS['app'] = "22";// E 4.3
				$GLOBALS['displayname'] = "v610_E";
			break;
			case 514:
				$GLOBALS['app'] = "9a";// E 4.3
				$GLOBALS['displayname'] = "4.3E";
			break;
			case 482:
				$GLOBALS['app'] = "8a";
				$GLOBALS['displayname'] = "4.2E";
			break;
			case 450:
				$GLOBALS['app'] = "7e";
				$GLOBALS['displayname'] = "4.1E";
			break;
			case 418:
				$GLOBALS['app'] = "75"; 
				$GLOBALS['displayname'] = "4.0E";
			break;
			case 608:
				$GLOBALS['app'] = "1c"; // J vwii
				$GLOBALS['displayname'] = "v608_J";
			break;
			case 512:
				$GLOBALS['app'] = "94"; // J 4.3
				$GLOBALS['displayname'] = "4.3J";
			break;
			case 480:
				$GLOBALS['app'] = "84";
				$GLOBALS['displayname'] = "4.2J";
			break;
			case 448:
				$GLOBALS['app'] = "78";
				$GLOBALS['displayname'] = "4.1J";
			break;
			case 416:
				$GLOBALS['app'] = "6f";
				$GLOBALS['displayname'] = "4.0J";
			break;
			case 518:
				$GLOBALS['app'] = "9d"; // K 4.3
				$GLOBALS['displayname'] = "4.3K";
			break;
			case 486:
				$GLOBALS['app'] = "8d";
				$GLOBALS['displayname'] = "4.2K";
			break;
			case 454:
				$GLOBALS['app'] = "81";
				$GLOBALS['displayname'] = "4.1K";
			break;
		}
		return;
	}
	function checkfor2stagetheme($input_mym) {
		$str = strstr($input_mym, "stage1", true);
		if($str) {
			return $str;
		}
		else return false;
	}
	function add_mym_Extension($theme_Selected) {
		$selected = intval($theme_Selected);
        $theme_needs_extension = array(74, 75, 76, 77, 78, 79, 80, 81, 71, 126, 314);
        $int = null;
        for($int = 0; $int < count($theme_needs_extension); $int++) {
            if($selected == $theme_needs_extension[$int])
                return true;
        }
		return false;
	}
	function increase_data_File($which_file) {
		$file_to_increase = null;
		echo $which_file . "\n";
		switch($which_file) {
			case "visitors":
				$file_to_increase = "res/visitors.txt";
				break;
			case "mymenuifymod":
				$file_to_increase = "res/mymenuifymod_downloads.txt";
				break;
			case "wiithemer":
				$file_to_increase = "res/wiithemer_downloads.txt";
				break;
			case "csminstaller":
				$file_to_increase = "res/csminstaller.txt";
				break;
			case "wii_downloads":
				$file_to_increase = "res/wii_downloads.txt";
				break;
			case "vWii_downloads":
				$file_to_increase = "res/vwii_downloads.txt";
				break;
			case "wii_U":
				$file_to_increase = "res/regions/wii_U.txt";
				break;
			case "wii_E":
				$file_to_increase = "res/regions/wii_E.txt";
				break;
			case "wii_J":
				$file_to_increase = "res/regions/wii_J.txt";
				break;
			case "wii_K":
				$file_to_increase = "res/regions/wii_K.txt";
				break;
			case "vwii_U":
				$file_to_increase = "res/regions/vwii_U.txt";
				break;
			case "vwii_E":
				$file_to_increase = "res/regions/vwii_E.txt";
				break;
			case "vwii_J":
				$file_to_increase = "res/regions/vwii_J.txt";
				break;
			case "theme_manager":
				$file_to_increase = "C://apache24/server/wiithemer/res/theme_manager_downloads.txt";
				break;
			default:
				$file_to_increase = "res/indthemecnt/" . $which_file;
				break;
		}
		$count = 1;
		if(file_exists($file_to_increase)) 
			$readCount = file_get_contents($file_to_increase);
		$count = $count + $readCount;
		file_put_contents($file_to_increase, $count, LOCK_EX);
		echo $count;
		return;
	}
	function get_data_File($which_file) {
		$file_to_get = null;
		//echo $which_file . "\n";
		switch($which_file) {
			case "visitors":
				$file_to_get = "res/visitors.txt";
				break;
			case "mymenuifymod":
				$file_to_get = "res/mymenuifymod_downloads.txt";
				break;
			case "wiithemer":
				$file_to_get = "res/wiithemer_downloads.txt";
				break;
			case "csminstaller":
				$file_to_get = "res/csminstaller.txt";
				break;
			case "wii_downloads":
				$file_to_get = "res/wii_downloads.txt";
				break;
			case "vwii_downloads":
				$file_to_get = "res/vwii_downloads.txt";
				break;
			case "wii_U":
				$file_to_get = "res/regions/wii_U.txt";
				break;
			case "wii_E":
				$file_to_get = "res/regions/wii_E.txt";
				break;
			case "wii_J":
				$file_to_get = "res/regions/wii_J.txt";
				break;
			case "wii_K":
				$file_to_get = "res/regions/wii_K.txt";
				break;
			case "vwii_U":
				$file_to_get = "res/regions/vwii_U.txt";
				break;
			case "vwii_E":
				$file_to_get = "res/regions/vwii_E.txt";
				break;
			case "vwii_J":
				$file_to_get = "res/regions/vwii_J.txt";
				break;
			case "theme_manager":
				$file_to_get = "C://apache24/server/wiithemer/res/theme_manager_downloads.txt";
				break;
			default:
				$file_to_get = "res/indthemecnt/" . $which_file;
				break;
		}
		$readCount = file_get_contents($file_to_get);
		echo $readCount;
		return;
	}
?>