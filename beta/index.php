<?php
	session_start();
	$sesId = session_id();
	$arr_cookie_options = array (
        'path' => '/',
        'domain' => '.wiithemer.org', // leading dot for compatibility or use subdomain
        'secure' => false,     // or false
        'httponly' => true,    // or false
        'samesite' => 'Strict' // None || Lax  || Strict
    );
	setcookie("sesId", $sesId, $arr_cookie_options);
	$action = null;
	$runfirstthemes = array("black_pirate.mym", "matrix.mym", "matrix_reloaded.mym", "muse.mym", "lime_wii.mym", "diablo_3.mym", "star_craft.mym", "darkwii_extendedU.mym", "darkwii_extendedE.mym", ); //"darkwii_extendedJ.mym", "darkwii_extendedK.mym");
	if(isset($_POST["action"])) {
		$ret = null;
		$readCount = null;
		$action = $_POST["action"];
		$tooldir = "tools";
		$list = null;
		$pos = null;
		$theme = null;
		$version = null;
		$themedir = "mym/";
		$app = null;
		$str = null;
		$savestr = null;
		$themeNoext = null;
		$displayname = null;
		$spinmym = null;
		$spindisplay = null;
		$runfirst = null;
		$downloadfile = null;
		$multistage_theme = null;
		$buildcomment = null;
		$regionDLcnt = null;
		$files_not_deleted = null;
		
		switch($action) {
			case "getsessionId": {
				echo $sesId;
				#if (!is_dir($sesId)) mkdir($sesId);
			}break;
			case "get": {
				$which_file = $_POST['data_file'];
				get_data_File($which_file);
			}break;
			case "increase": {
				$which_file = $_POST['data_file'];
				increase_data_File($which_file);
			}break;
			case "removesessionfolder": {
				if(isset($_POST['selectedtheme'])) $selectedtheme = $_POST['selectedtheme'];
				if(isset($_POST["savesrc"])) {
					if($_POST['savesrc'] == "true") {
						$multistage_theme = checkfor2stagetheme($_POST['theme']);
						
						if(add_mym_Extension($selectedtheme))
						$themeNoext = substr($_POST['theme'], 0, strlen($_POST['theme']) - 5);
						else {
							if($multistage_theme)
								$themeNoext = $multistage_theme;
							else
							$themeNoext = substr($_POST['theme'], 0, strlen($_POST['theme']) - 4);
						}
						if (is_dir($sesId . "/" . $themeNoext)) {
							if ($dh = opendir($sesId . "/" . $themeNoext)){
								while (($file = readdir($dh)) !== false){
									if($file == "." or $file == "..")
										continue;
									if(file_exists($sesId . "/" . $themeNoext . "/" . $file)) {
										$x = unlink($sesId . "/" . $themeNoext . "/" . $file);
										if($x == 0) {
											$files_not_deleted += 1;
										}
										usleep(1000);
									}
								}
								closedir($dh);
							}
							usleep(1000);
							rmdir($sesId . "/" . $themeNoext);
							usleep(1000);
						}
					}
				}
				if (is_dir($sesId)) {
					if ($dh = opendir($sesId)){
						while (($file = readdir($dh)) !== false){
							if($file == "." or $file == "..")
								continue;
							$x = unlink($sesId . "/" . $file);
							if($x == 0) {
								$files_not_deleted += 1;
							}
							usleep(1000);
						}
						closedir($dh);
					}
					usleep(1000);
					rmdir($sesId);
					//echo "file removal complete";
				}
				if($files_not_deleted) {
					sleep(2);
					if (is_dir($sesId)) {
						if ($dh = opendir($sesId)){
							while (($file = readdir($dh)) !== false){
								if($file == "." or $file == "..")
									continue;
								$x = unlink($sesId . "/" . $file);
								if($x == 0) {
									$files_not_deleted += 1;
								}
								usleep(1000);
							}
							closedir($dh);
						}
						usleep(1000);
						rmdir($sesId);
						//echo "file removal complete";
					}				
				}
			}break;
			case "copythemetosessiondirectory": {
				if(isset($_POST['theme'])) {
					if(isset($_POST['selectedtheme'])) $selectedtheme = $_POST['selectedtheme'];
					$multistage_theme = checkfor2stagetheme($_POST['theme']);
					//echo $_POST['theme'] . "<br>" . $selectedtheme;
					$theme = "mym/" . $_POST['theme'];
					$themenodir = $_POST['theme'];
					$copytheme = copy($theme, $sesId . "/" . $themenodir);
					if($copytheme)
						echo "Copy Theme OK ";
					else
						echo "Copy Theme ERROR ";
					if($_POST['savesrc'] == "true") {
						if(add_mym_Extension($selectedtheme)) 
						$str2 = $sesId . "/" . substr($_POST['theme'], 0, strlen($_POST['theme']) - 5);
						else {
							if($multistage_theme)
								$str2 = $sesId . "/" . $multistage_theme;
							else $str2 = $sesId . "/" . substr($_POST['theme'], 0, strlen($_POST['theme']) - 4);
						}
						$copycomplete = copy($theme, $str2 . "/" . $themenodir);
					}
					
					if($_POST['spin'] == "fastspin") {
						$spinmym = "mym/spins/fastspin.mym";
					}
					else if($_POST['spin'] == "spin") {
						$spinmym = "mym/spins/spin.mym";
					}
					else if($_POST['spin'] == "nospin") {
						$spinmym = "mym/spins/nospin.mym";
					}
					$copyspin = copy($spinmym, $sesId . "/" . $_POST['spin'] . ".mym");
					if($copyspin)
						echo "Copy Spin OK";
					else
						echo "Copy Spin ERROR";
					if($multistage_theme) {
						$theme = "mym/" . $multistage_theme . "stage2.mym";
						$themenodir = $multistage_theme . "stage2.mym";
						$copytheme = copy($theme, $sesId . "/" . $themenodir);	
					}
					if(isset($_POST["trans_chans"])) {
						$trans_channels = $_POST["trans_chans"];
						if($trans_channels == "true") {
							$trans_copy = copy("mym/spins/trans_chans.mym", $sesId . "/trans_chans.mym");
						}
					}
					if($_POST['savesrc'] == "true") {
						$str2 = null;
						if(add_mym_Extension($selectedtheme)) {
							$str2 = $sesId . "/" . substr($_POST['theme'], 0, strlen($_POST['theme']) - 5);
						}
						else {
							if($multistage_theme)
								$str2 = $sesId . "/" . $multistage_theme;
							else
							$str2 = $sesId . "/" . substr($_POST['theme'], 0, strlen($_POST['theme']) - 4);
						}
						$trans_channels = $_POST["trans_chans"];
						if($trans_channels == "true") {
							$trans_copy = copy("mym/spins/trans_chans.mym", $str2 . "/trans_chans.mym");
						}
						$copycomplete = copy($spinmym, $str2 ."/".$_POST['spin'] . ".mym");
						
						if($multistage_theme) {
							$str2 = $sesId . "/" . $multistage_theme;
							$theme = "mym/" . $multistage_theme . "stage2.mym";
							$themenodir = $multistage_theme . "stage2.mym";
							$copycomplete = copy($theme, $str2 . "/" . $themenodir);
						}
					}

				}
			}break;
			case "makesesdir": {
				if(!empty($sesId)) {
					$multistage_theme = checkfor2stagetheme($_POST['name']);
					if(isset($_POST['selectedtheme'])) $selectedtheme = $_POST['selectedtheme'];
					if (!is_dir($sesId)) {
						mkdir($sesId);
						if($_POST['savesrc'] == "true") {
							if(add_mym_Extension($selectedtheme))
							$str = $sesId . "/" . substr($_POST['name'], 0, strlen($_POST['name']) - 5);
							else {
								if($multistage_theme) {
									$str = $sesId . "/" . $multistage_theme;
								}
								else $str = $sesId . "/" . substr($_POST['name'], 0, strlen($_POST['name']) - 4);
							}
							mkdir($str);
							//echo $str . "<br>";
						}
					}
					if (is_dir($tooldir)){
						if ($dh = opendir($tooldir)){
							while (($file = readdir($dh)) !== false){
								if($file == "." or $file == "..")
									continue;
								copy($tooldir . "/" . $file, $sesId . "/" . $file );
								usleep(1000);
							}
							closedir($dh);
						}
					}
					
					echo " Complete .<br>";
				}
			}break;
			case "get_content": {
				if(isset($_POST['version'])) {
					$seccntr = NULL;
					$themething_Output = null;
					$optimeout = 60;
					$spin = $_POST['spin'] . ".mym";
					$multistage_theme = checkfor2stagetheme($_POST['name']); 
					if(isset($_POST['selectedtheme'])) $selectedtheme = $_POST['selectedtheme'];
					$version = $_POST['version'];
					getappndisplayname($version);
					$str = $sesId . "/000000" . $GLOBALS['app'];
					$savestr = $sesId . "/000000" . $GLOBALS['app'];
					$myfile = file_exists($str);
					if(!$myfile) {
						$homedir = getcwd();
						chdir($sesId);
						$str = "themething c 000000" . $GLOBALS['app'];
						execInBackground($str);
						chdir($homedir);
						$str = null;
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
					}
					if($_POST['savesrc'] == "true") {
						if(add_mym_Extension($selectedtheme))
						$str2 = $sesId . "/" . substr($_POST['name'], 0, strlen($_POST['name']) - 5);
						else {
							if($multistage_theme)
								$str2 = $sesId . "/" . $multistage_theme;
							else
							$str2 = $sesId . "/" . substr($_POST['name'], 0, strlen($_POST['name']) - 4);
						}
						copy($savestr, $str2 . "/000000" . $GLOBALS['app'] . ".app");
					}
					$homedir = getcwd();
					chdir($sesId);
					$str = "themething s 000000" . $GLOBALS['app'] . " " . $_POST['name'] . " " . $spin . " Wii_Themer";
					execInBackground($str);
					chdir($homedir);
					clearstatcache();
					
					echo $GLOBALS['app'];
				}
			}break;
			case "buildtheme": {
				if(isset($_POST['theme'])) {
					$seccntr = NULL;
					$optimeout = 60;
					$version = $_POST['version'];
					getappndisplayname($version);
					
					if($_POST['spin'] == "fastspin") {
						$spinmym = "mym/spins/fastspin.mym";
						$spindisplay = "_fastspin";
					}
					else if($_POST['spin'] == "spin") {
						$spinmym = "mym/spins/spin.mym";
						$spindisplay = "_spin";
					}
					else if($_POST['spin'] == "nospin") {
						$spinmym = "mym/spins/nospin.mym";
						$spindisplay = "_nospin";
					}
					$theme = $_POST['theme'];
					if(isset($_POST['selectedtheme'])) $selectedtheme = $_POST['selectedtheme'];
					$multistage_theme = checkfor2stagetheme($theme);
					if($multistage_theme){
						//echo "Found multistage theme .\n";
						if($_POST['trans_chans'] == "true") {
							$homedir = getcwd();
							chdir($sesId);
							$str = null;
							$str = "themething b 000000" . $_POST['appfile'] . " trans_chans.mym 1_TC.app";
							execInBackground($str);
							chdir($homedir);
						}
						if($_POST['trans_chans'] == "true") $str = "themething b 1_TC.app " . $_POST['theme'] . " stage1_TC.app";
						else $str = "themething b 000000" . $_POST['appfile'] . " " .$_POST['theme'] . " stage1.app";
						
						//echo "str = " . $str; return;
						$homedir = getcwd();
						chdir($sesId);
						execInBackground($str);
						chdir($homedir);
						$str = null;
						if($_POST['trans_chans'] == "true") $str = $sesId . "/stage1_TC.app";
						else $str = $sesId . "/stage1.app";
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
						if($_POST['trans_chans'] == "true") $str = "themething b stage1_TC.app " . $multistage_theme . "stage2.mym stage2.app";
						else $str = "themething b stage1.app " . $multistage_theme . "stage2.mym stage2.app";
						
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
						if($_POST['trans_chans'] == "true") $str = "themething b stage2.app " . $_POST['spin'] . ".mym " . $multistage_theme . "_" . $displayname . $spindisplay . "_TC.csm";
						else $str = "themething b stage2.app " . $_POST['spin'] . ".mym " . $multistage_theme . "_" . $displayname . $spindisplay . ".csm";
						
						$homedir = getcwd();
						chdir($sesId);
						execInBackground($str);
						chdir($homedir);
						$str = null;
						//$strnodir = $multistage_theme . "_" . $displayname . $spindisplay . ".csm";
						if($_POST['trans_chans'] == "true") $str = $sesId . "/" . $multistage_theme . "_" . $displayname . $spindisplay . "_TC.csm";
						else $str = $sesId . "/" . $multistage_theme . "_" . $displayname . $spindisplay . ".csm";
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
						for($i = 0; $i < 9; $i++) {
							if($theme == $runfirstthemes[$i]) {
								$runfirst = 1;
								break;
							}
							else
							$runfirst = 0;
						}
						if($runfirst) {
							$str = "themething b 000000" . $_POST['appfile'] . " " . $_POST['spin'] . ".mym runfirst.app";
							//echo  "$runfirst/$runfirst/$str";
							//return;
							$homedir = getcwd();
							chdir($sesId);
							execInBackground($str);
							chdir($homedir);
							$str = null;
							$str = $sesId . "/runfirst.app";
							$myfile = file_exists($str);
							while((!$myfile and filesize($myfile) == 0) and $seccntr < $optimeout) {
								$myfile = file_exists($str);
								sleep(1);
								$seccntr += 1;
							}
							if(!$myfile and $seccntr == $optimeout) {
								echo "Error = building runfirst section 1";
								return;
							}
							if($_POST['trans_chans'] == "true") {
								$homedir = getcwd();
								chdir($sesId);
								$str = null;
								$str = "themething b runfirst.app trans_chans.mym runfirst_TC.app";
								execInBackground($str);
								chdir($homedir);
							}
							if(add_mym_Extension($selectedtheme))  
							$themeNoext = substr($_POST['theme'], 0, strlen($theme) - 5);
							else $themeNoext = substr($_POST['theme'], 0, strlen($_POST['theme']) - 4);
							$str = null;
							if($_POST['trans_chans'] == "true") $str = "themething b runfirst_TC.app " . $_POST['theme'] . " " . $themeNoext . "_" . $displayname . $spindisplay . "_TC.csm";
							
							else $str = "themething b runfirst.app " . $_POST['theme'] . " " . $themeNoext . "_" . $displayname . $spindisplay . ".csm";
							
							$homedir = getcwd();
							chdir($sesId);
							execInBackground($str);
							chdir($homedir);
							$str = null;
							if($_POST['trans_chans'] == "true") $str = $sesId . "/" . $themeNoext . "_" . $displayname . $spindisplay . "_TC.csm";
							else $str = $sesId . "/" . $themeNoext . "_" . $displayname . $spindisplay . ".csm";
							$myfile = file_exists($str);
							while((!$myfile and filesize($myfile) == 0) and $seccntr < $optimeout) {
								$myfile = file_exists($str);
								sleep(1);
								$seccntr += 1;
							}
							if(!$myfile and $seccntr == $optimeout) {
								echo "Error = building firstrun section";
								return;
							}
							#echo $str2; return;
						}
						else {
							$str = "themething b 000000" . $_POST['appfile'] . " " . $_POST['theme'] . " 1.app";
							//echo "str = " . $str; return;
							$homedir = getcwd();
							chdir($sesId);
							execInBackground($str);
							chdir($homedir);
							$str = null;
							$str = $sesId . "/1.app";
							$myfile = file_exists($str);
							while((!$myfile and filesize($myfile) == 0) and $seccntr < $optimeout) {
								$myfile = file_exists($str);
								sleep(1);
								$seccntr += 1;
							}
							if(!$myfile and $seccntr == $optimeout) {
								echo "Error = building section 1";
								return;
							}
							if($_POST['trans_chans'] == "true") {
								$homedir = getcwd();
								chdir($sesId);
								$str = null;
								$str = "themething b 1.app trans_chans.mym 1_TC.app";
								execInBackground($str);
								chdir($homedir);
							}
							if(add_mym_Extension($selectedtheme))
							$themeNoext = substr($_POST['theme'], 0, strlen($theme) - 5);
							else $themeNoext = substr($_POST['theme'], 0, strlen($_POST['theme']) - 4);
							$str = null;
							if($_POST['trans_chans'] == "true") $str = "themething b 1_TC.app " . $_POST['spin'] . ".mym " . $themeNoext . "_" .$displayname . $spindisplay . "_TC.csm";
							else $str = "themething b 1.app " . $_POST['spin'] . ".mym " . $themeNoext . "_" .$displayname . $spindisplay . ".csm";
							//echo "str = " . $str; return;
							$homedir = getcwd();
							chdir($sesId);
							execInBackground($str);
							chdir($homedir);
							$str = null;
							//$strnodir = $themeNoext . "_" . $displayname . $spindisplay . ".csm";
							if($_POST['trans_chans'] == "true") $str = $sesId . "/" . $themeNoext . "_" .$displayname . $spindisplay . "_TC.csm";
							else $str = $sesId . "/" . $themeNoext . "_" .$displayname . $spindisplay . ".csm";
							$myfile = file_exists($str);
							while((!$myfile and filesize($myfile) == 0) and $seccntr < $optimeout) {
								$myfile = file_exists($str);
								sleep(1);
								$seccntr += 1;
							}
							if(!$myfile and $seccntr == $optimeout) {
								echo "Error = building section 2";
								return;
							}
						}
					}
					
					if($_POST['savesrc'] == "true") {
						if($multistage_theme) {
							if($_POST['trans_chans'] == "true") {
								$str = $sesId . "/" . $multistage_theme . "_" . $displayname . $spindisplay . "_TC.csm";
								copy($str, $sesId . "/" . $multistage_theme . "/" . $multistage_theme . "_" .  $displayname . $spindisplay . "_TC.csm");
							}
							else {
								$str = $sesId . "/" . $multistage_theme . "_" . $displayname . $spindisplay . ".csm";
								copy($str, $sesId . "/" . $multistage_theme . "/" . $multistage_theme . "_" .  $displayname . $spindisplay . ".csm");
							}
							sleep(1);
							// remove beta @ update time
							$makezipstr = "7z.exe a " . $multistage_theme . ".zip -tzip c:/apache24/server/wiithemer/" . $sesId . "/" . $multistage_theme;
						}
						else {
							if($_POST['trans_chans'] == "true") {
								$str = $sesId . "/" . $themeNoext . "_" . $displayname . $spindisplay . "_TC.csm";
								copy($str, $sesId . "/" . $themeNoext . "/" . $themeNoext . "_" .  $displayname . $spindisplay . "_TC.csm");
							}
							else {
								$str = $sesId . "/" . $themeNoext . "_" . $displayname . $spindisplay . ".csm";
								copy($str, $sesId . "/" . $themeNoext . "/" . $themeNoext . "_" .  $displayname . $spindisplay . ".csm");
							}
							sleep(1);
							// remove beta @ update time
							$makezipstr = "7z.exe a " . $themeNoext . ".zip -tzip c:/apache24/server/wiithemer/" . $sesId . "/" . $themeNoext;
						}
						$homedir = getcwd();
						chdir($sesId);
						execInBackground($makezipstr);
						chdir($homedir);
						if($multistage_theme) echo $sesId . "/" . $multistage_theme . ".zip";
						else echo $sesId . "/" . $themeNoext . ".zip";
					}
					else{
						if($multistage_theme){
							if($_POST['trans_chans'] == "true") echo "$sesId/$multistage_theme/_$displayname$spindisplay" . "_TC";
							else echo "$sesId/$multistage_theme/_$displayname$spindisplay";
						}
						else {
							if($_POST['trans_chans'] == "true") echo "$sesId/$themeNoext/_$displayname$spindisplay" . "_TC";
							else echo "$sesId/$themeNoext/_$displayname$spindisplay";
						}
					} 
				}
			}break;
			case "write_Info": {
				//echo $_POST['title_str'];
				$regions = ["U", "E", "J", "K"];
				$x = 0;
				$y;
				$bool_id_title = $_POST['bool_id_title'];
				$bool_ids = $_POST['bool_ids'];
				$bool_titles = $_POST['bool_titles'];
				$bool_pngs = $_POST['bool_pngs'];
				$bool_myms = $_POST['bool_mym'];
				$bool_txts = $_POST['bool_txts'];
				$array = explode(chr(10), $_POST['title_str']);
				$array1 = explode(chr(10), $_POST['id_str']);
				$array2 = explode(chr(10), $_POST['png_str']);
				$array3 = explode(chr(10), $_POST['mym_str']);
				$array4 = explode(chr(10), $_POST['txt_str']);
				if($bool_id_title) {
					$file = fopen("theme_id_titles.txt", "a+");
					while($array[$x] != null) {
						echo $array[$x] . "\n"; 
						if($file) {
							if(add_mym_Extension($x)) {
								for($y = 0; $y < 4; $y++) {
									fwrite($file, "[" . $array1[$x] . $regions[$y] . "1] - " . $array[$x]);
									fwrite($file, "\n");
								}
							}
							else {
								fwrite($file, "[" . $array1[$x] . "] - " . $array[$x]);
								fwrite($file, "\n");
							}
						}
						$x++;
					}
					fclose($file);
				}
				if($bool_ids) {
					$file1 = fopen("theme_ids.txt", "a+");
					$x = 0;
					while($array1[$x] != null) {
						echo $array1[$x] . "\n"; 
						if($file1) {
							if(add_mym_Extension($x)) {
								for($y = 0; $y < 4; $y++) {
									fwrite($file1, '"' . $array1[$x] . $regions[$y] . '1",');
									fwrite($file1, "\n");
								}
							}
							else {
								fwrite($file1, '"' . $array1[$x] . '",');
								fwrite($file1, "\n");
							}
						}
						$x++;
					}
					fclose($file1);
				}
				if($bool_titles) {
					$file2 = fopen("theme_titles.txt", "a+");
					$x = 0;
					while($array[$x] != null) {
						echo $array[$x] . "\n"; 
						if($file2) {
							if(add_mym_Extension($x)) {
								for($y = 0; $y < 4; $y++) {
									fwrite($file2, '"' . $array[$x] . " " .$regions[$y] . '",');
									//fwrite($file2, $array[$x] . " " .$regions[$y]);
									fwrite($file2, "\n");
								}
							}
							else {
								fwrite($file2, '"' . $array[$x] . '",');
								//fwrite($file2, $array[$x]);
								fwrite($file2, "\n");
							}
						}
						$x++;
					}
					fclose($file2);
				}
				if($bool_pngs) {
					$file3 = fopen("theme_pngs.txt", "a+");
					$x = 0;
					while($array2[$x] != null) {
						echo $array2[$x] . "\n"; 
						if($file3) {
							fwrite($file3, '"' . $array2[$x] . '",');
							fwrite($file3, "\n");
						}
						$x++;
					}
					fclose($file3);
				}
				if($bool_myms) {
					$file4 = fopen("theme_myms.txt", "a+");
					$x = 0;
					while($array3[$x] != null) {
						echo $array3[$x] . "\n"; 
						if($file4) {
							fwrite($file4, '"' . $array3[$x] . '",');
							fwrite($file4, "\n");
						}
						$x++;
					}
					fclose($file4);
				}
				if($bool_txts) {
					$file5 = fopen("theme_txts.txt", "a+");
					$x = 0;
					while($array4[$x] != null) {
						echo $array4[$x] . "\n"; 
						if($file5) {
							fwrite($file5, '"' . $array4[$x] . '",');
							fwrite($file5, "\n");
						}
						$x++;
					}
					fclose($file5);
				}
			}break;
		}
		return;
	}
	function execInBackground($cmd) {
		if (substr(php_uname(), 0, 7) == "Windows"){
			pclose(popen($cmd, "r"));
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
			default:
				$file_to_get = "res/indthemecnt/" . $which_file;
				break;
		}
		$readCount = file_get_contents($file_to_get);
		echo $readCount;
		return;
	}
?>