<?php
	$sesId = NULL;
	$app = NULL;
	$displayname = NULL;
	$action = NULL;

	if(isset($_GET['action'])) {

		$action = $_GET['action'];
		$tooldir = "../tools";
		$themedir = "../mym";
		$runfirstthemes = array("black_pirate.mym", "matrix.mym", "matrix_reloaded.mym", "muse.mym", "lime_wii.mym", "diablo_3.mym", "star_craft.mym");
		$themeNoext = NULL;
		$str = NULL;
		$spinmym = NULL;
		$spindisplay = NULL;
		$runfirst = false;
		$multistage_theme = null;

		switch($action) {
			case "prep_Dir": 
				$copytools = NULL;
				session_start();
				$sesId = session_id();
				if(!empty($sesId)) {  // make session directory and copy needed files to it
					if(!is_dir($sesId)) {
						mkdir($sesId);
					}
					if(is_dir($tooldir)) {
						if ($dh = opendir($tooldir)){
							while(($file = readdir($dh)) !== false) {
								if($file == "." or $file == "..")
									continue;
								$copytools = copy($tooldir . "/" . $file, $sesId . "/" . $file );
								usleep(1000);
							}
							closedir($dh);
						}
					}
					if(is_dir($sesId)) {
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
					$copytheme = copy($themewdir, $sesId . "/" . $theme);
					if($multistage_theme) {
						$theme = $themedir . "/" . $multistage_theme . "stage2.mym";
						$themenodir = $multistage_theme . "stage2.mym";
						$copytheme = copy($theme, $sesId . "/" . $themenodir);	
					}
					if($copytheme)
						echo "OK";
					else
						echo "ERROR - copy theme";
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

					$copyspin = copy($spinmym, $sesId . "/" . $spinselected);
					if($copyspin)
						echo "OK";
					else
						echo "ERROR - copy spin";
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
				echo $spinselected . "<br>\n";
				if(isset($version)) { # download .app file from nus servers
					getappndisplayname($version);
					$str = $sesId . "/000000" . $GLOBALS['app'];
					$myfile = file_exists($str);
					if(!$myfile) {
						$homedir = getcwd();
						chdir($sesId);
						$str = null;
						$str = "themething c 000000" . $GLOBALS['app'];
						echo $str . "\n";
						execInBackground($str);
						chdir($homedir);
						$str = $sesId . "/000000" . $GLOBALS['app'];
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
						chdir($sesId);
						$str = null;
						$str = "themething s 000000" . $GLOBALS['app'] . " " . $theme . " " . $spinselected . " Theme_Manager";
						echo $str . "\n";
						execInBackground($str);
						chdir($homedir);
						clearstatcache();
					}
					echo "Appfile download Complete .\n";
				}
			break;
			case "build_theme":  
				if(isset($_GET['mymfile'])) $theme = $_GET['mymfile'];
				//echo $theme . "<br>\n";
				if(isset($_GET['sessionId'])) $sesId = $_GET['sessionId'];
				//echo $sesId . "<br>\n";
				if(isset($_GET['spin'])) $spinselected = $_GET['spin'];
				//echo $spinselected . "<br>\n";
				if(isset($_GET['version'])) $version = $_GET['version'];
				//echo $version . "<br>\n";
				if(isset($_GET['selected'])) $selected = $_GET['selected'];
				//echo "selected = \n"  .  $selected;
				//return;
				if(isset($theme)) {
					$seccntr = NULL;
					$optimeout = 60;
					getappndisplayname($version);	
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
					$multistage_theme = checkfor2stagetheme($theme);
					if($multistage_theme) {
						$str = "themething b 000000" . $app . " " . $theme . " stage1.app";
						$homedir = getcwd();
						chdir($sesId);
						execInBackground($str);
						chdir($homedir);
						$str = null;
						$str = $sesId . "/stage1.app";
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
						$str = "themething b stage1.app " . $multistage_theme . "stage2.mym stage2.app";
						$homedir = getcwd();
						chdir($sesId);
						execInBackground($str);
						chdir($homedir);
						$str = null;
						$str = $sesId . "/stage2.app";
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
						$str = null;
						$str = "themething b stage2.app " . $spinselected . " " . $multistage_theme . "_" . $displayname . $spindisplay . ".csm";
						$homedir = getcwd();
						chdir($sesId);
						execInBackground($str);
						chdir($homedir);
						$str = null;
						$str = $sesId . "/" . $multistage_theme . "_" . $displayname . $spindisplay . ".csm";
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
					else {
						for($i = 0; $i < 7; $i++) {
							if($theme == $runfirstthemes[$i]) {
								$runfirst = true;
								break;
							}
						}
						if($runfirst) {
							$str = "themething b 000000" . $app . " " . $spinselected . " 000000" . $app . ".app";
							$homedir = getcwd();
							chdir($sesId);
							execInBackground($str);
							chdir($homedir);
							$str = NULL;
							$str = $sesId . "/000000" . $app . ".app";
							$myfile = file_exists($str);
							while(!$myfile and filesize($myfile) == 0) {
								$myfile = file_exists($str);
							}
							if(add_mym_Extension($selected))
								$themeNoext = substr($theme, 0, strlen($theme) - 5);
							else $themeNoext = substr($theme, 0, strlen($theme) - 4);
							$str = NULL;
							$str = "themething b 000000" . $app . ".app " . $theme . " ". $themeNoext . "_" . $displayname . $spindisplay . ".csm";
							$homedir = getcwd();
							chdir($sesId);
							execInBackground($str);
							chdir($homedir);
							$str = NULL;
							$str = $sesId . "/" . $themeNoext . "_" . $displayname . $spindisplay . ".csm";
							$myfile = file_exists($str);
							while(!$myfile and filesize($myfile) == 0) {
								$myfile = file_exists($str);
							}
						}
						else {
							$str = "themething b 000000" . $app . " " . $theme . " 000000" . $app . ".app";
							$homedir = getcwd();
							chdir($sesId);
							execInBackground($str);
							chdir($homedir);
							
							$str = NULL;
							$str = $sesId . "/000000" . $app . ".app";
							$myfile = file_exists($str);
							while(!$myfile and filesize($myfile) == 0) {
								$myfile = file_exists($str);
							}
							if(add_mym_Extension($selected))
								$themeNoext = substr($theme, 0, strlen($theme) - 5);
							else $themeNoext = substr($theme, 0, strlen($theme) - 4);
							$str = NULL;
							$str = "themething b 000000" . $app . ".app " . $spinselected . " ". $themeNoext . "_" . $displayname . $spindisplay . ".csm";
							$homedir = getcwd();
							chdir($sesId);
							execInBackground($str);
							chdir($homedir);
							$str = NULL;
							$str = $sesId . "/" . $themeNoext . "_" . $displayname . $spindisplay . ".csm";
							$myfile = file_exists($str);
							while(!$myfile and filesize($myfile) == 0) {
								$myfile = file_exists($str);
							}
						}
					}
					if($multistage_theme) echo "http://wiithemer.org/wii/" . $sesId . "/" . $multistage_theme . "_" . $displayname . $spindisplay . ".csm";
					else echo "http://wiithemer.org/wii/" . $sesId . "/" . $themeNoext . "_" . $displayname . $spindisplay . ".csm";
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
					usleep(1000);
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
			case "getdownloadcount":
				if(isset($_GET['themetocheck'])) $themetocheck = $_GET['themetocheck'];
				$readCount = file_get_contents("wiithememanager/" . $themetocheck . "/downloads.txt");
				echo $readCount;
			break;
			case "getthemefilesize":
				if(isset($_GET['themetocheck'])) $themetocheck = $_GET['themetocheck'];
				$readsize = file_get_contents("wiithememanager/" . $themetocheck . "/filesize.txt");
				echo $readsize;
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
				$GLOBALS['displayname'] = "vWii_U";
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
				$GLOBALS['displayname'] = "vWii_E";
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
				$GLOBALS['displayname'] = "vWii_J";
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
		if((($theme_Selected >= 51) && $theme_Selected <= 58) || ($theme_Selected == 48)  || ($theme_Selected == 92) || ($theme_Selected == 231))
			return true;
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