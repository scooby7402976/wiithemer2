<?php
    session_start();
    $session_id = null;
    $command = null;
    $spincolors = array("", "outline_Black.mym", "outline_Blue.mym", "outline_Green.mym", "outline_Orange.mym", "outline_Pink.mym", "outline_Purple.mym", "outline_Red.mym", "outline_White.mym", "outline_Yellow.mym");
    $spinmym_src_file = array("", "nospin.mym", "spin.mym", "fastspin.mym");
    // Use 1-based indexing for regions; index 0 is a placeholder empty array
    $download_version = [
        [], // placeholder for index 0
        [513, 481, 449, 417, 609], // U
        [514, 482, 450, 418, 610], // E
        [512, 480, 448, 416, 608], // J
        [518, 486, 454] // K
    ];
    $content_name = [
        [],
        ["","00000097", "00000087", "0000007b", "00000072", "0000001f"], // U
        ["","0000009a", "0000008a", "0000007e", "00000075", "00000022"], // E
        ["","00000094", "00000084", "00000078", "0000006f", "0000001c"], // J
        ["","0000009d", "0000008d", "00000081"] // K
    ];
    $spin_first_themes = array("black_pirate.mym", "matrix.mym", "matrix_reloaded.mym", "muse.mym", "lime_wii.mym", "diablo_3.mym", "star_craft.mym", "darkwii_extendedU.mym", "darkwii_extendedE.mym"); //"darkwii_extendedJ.mym", "darkwii_extendedK.mym");

    if(isset($_GET["command"])) {
        $command = $_GET["command"];
        $id = null;
        $theme_is_2_stage = false;
        $mym_theme = null;

        switch($command) {
            case "get_user_id":
                get_user_id();
                break;
            case "set_data":
                if(isset($_GET["data_file_path"]))
                    $data_file_path = $_GET["data_file_path"];
                set_data($data_file_path);
                break;
            case "server_setup":
                server_setup();
                break;
            case "copy_theme_files":
                if(isset($_GET["mym_theme"])) $mym_theme = $_GET["mym_theme"];
                if(isset($_GET["spinindex"])) $spin_index = intval($_GET["spinindex"]);
                if(isset($_GET["spincolor"])) $spincolor_index = intval($_GET["spincolor"]);
                if(isset($_GET["trans_channels"])) $transchannels = $_GET["trans_channels"];
               
                copy_theme_files($mym_theme, $spin_index, $spincolor_index, $transchannels);
                break;
            case "download_content":
                if(isset($_GET["mym_theme"])) $mym_theme = $_GET["mym_theme"];
                if(isset($_GET["spinindex"])) $spin_index = intval($_GET["spinindex"]);
                if(isset($_GET["version_index"])) $version_index = intval($_GET["version_index"]);
                if(isset($_GET["region_index"])) $region_index = intval($_GET["region_index"]);
                
                download_content($mym_theme, $spin_index, $version_index, $region_index);
                break;
            case "theme_builder":
                if(isset($_GET["mym_theme"])) $mym_theme = $_GET["mym_theme"];
               if(isset($_GET["spinindex"])) $spin_index = intval($_GET["spinindex"]);
                if(isset($_GET["spincolor"])) $spincolor_index = intval($_GET["spincolor"]);
                if(isset($_GET["trans_channels"])) $transchannels = $_GET["trans_channels"];
                if(isset($_GET["save_source"])) $save_source = $_GET["save_source"];
                if(isset($_GET["theme_position"])) $theme_position = intval($_GET["theme_position"]);
                if(isset($_GET["version_index"])) $version_index = intval($_GET["version_index"]);
                if(isset($_GET["region_index"])) $region_index = intval($_GET["region_index"]);

                theme_builder($mym_theme, $spin_index, $spincolor_index, $transchannels, $save_source, $theme_position, $version_index, $region_index);
                break;
            default:

                break;
        }
        return;
    }
    function set_data($data_file_path) {
        #echo "set_data-data_file_path: " . $data_file_path . "\n";
        $data_file_contents = 0;
        if(file_exists($data_file_path))
            $data_file_contents = file_get_contents($data_file_path);
        $temp_data = $data_file_contents + 1;
        file_put_contents($data_file_path, $temp_data, LOCK_EX);
        #echo "set_data-temp_data: " . $temp_data . "\n";
        echo $temp_data;
        return;
    }
    function get_user_id() {
        $session_id = session_id();
        echo $session_id;
        return;
    }
    function server_setup() {
        $source_str = null;
        $destination_str = null;
        $id = session_id();

        if(!is_dir("resources/working/" . $id))
           if(!mkdir("resources/working/" . $id)) {
                echo "Failed (make dir id) .";
                return;
           }
           if(is_dir("resources/tools")) {
                if ($dh = opendir("resources/tools")) {
					while (($file = readdir($dh)) !== false) {
						if($file == "." or $file == "..")
							continue;
						$source_str = "resources/tools/" . $file;
                        $destination_str = "resources/working/" . $id . "/" . $file;
                        if(!copy($source_str, $destination_str)) {
                             echo "Failed (tools dir copy) .";
                            return;
                        }
						usleep(1000);
					}
					closedir($dh);
				}
           }
           
           echo "Complete .\n";
        return;
    }
    function  copy_theme_files($mym_theme, $spin_index, $spincolor_index, $transchannels) {
        $id = session_id();
        $theme_src_pth = "resources/mym/" . $mym_theme;
        $theme_dst_pth = "resources/working/" . $id . "/" . $mym_theme;
        $theme_is_2_stage = is_theme_2_stage($mym_theme);
        global $spinmym_src_file;
        global $spincolors;
        # copy theme mym file(s) to working folder -----------
        if(!copy($theme_src_pth, $theme_dst_pth))
            echo "Failed . (copy theme)\n";
        if($theme_is_2_stage) {
            $theme_no_extension = name_2_stage_theme($mym_theme);
            $theme_src_pth = "resources/mym/" . $theme_no_extension . "_stage2.mym";
            $theme_dst_pth = "resources/working/" . $id . "/" . $theme_no_extension . "_stage2.mym";
            if(!copy($theme_src_pth, $theme_dst_pth))
                echo "Failed . (copy theme _stage2)\n";
        }
        # copy spin mym to working folder -----------------
        $spin_src_pth = "resources/mym/spins/" . $spinmym_src_file[$spin_index];
        $spin_dst_pth = "resources/working/" . $id . "/" . $spinmym_src_file[$spin_index];
        if(!copy($spin_src_pth, $spin_dst_pth))
            echo "Failed . (copy spin)\n";
        # copy spin color mym to working folder -----------
        $spin_color_src_pth = "resources/mym/outline_colors/" . $spincolors[$spincolor_index];
        $spin_color_dst_pth = "resources/working/" . $id . "/" . $spincolors[$spincolor_index];
        if($spincolor_index >= 1) {
            if(!copy($spin_color_src_pth, $spin_color_dst_pth))
                echo "Failed . (copy spin)\n";
        }
        # copy trans channels mym to working folder --------
        $trans_src_pth = "resources/mym/spins/trans_chans.mym";
        $trans_dst_pth = "resources/working/" . $id . "/" . "trans_chans.mym";
        if($transchannels == "true") {
            if(!copy($trans_src_pth, $trans_dst_pth))
                echo "Failed . (copy trans channels)\n";
        }
        echo "Complete .\n";
        return;
    }
    function download_content($mym_theme, $spin_index, $version_index, $region_index) {
        $id = session_id();
        global $content_name;
        $themething_cmd = "themething c " . ($content_name[$region_index][$version_index] ?? '');
        $download_file = file_exists(($content_name[$region_index][$version_index] ?? ''));
        if(!$download_file) {
            $homedir = getcwd();
			chdir("resources/working/" . $id);
            # download content file
            execInBackground($themething_cmd);
            $timed_out = wait_for_file(($content_name[$region_index][$version_index] ?? ''), 15);
            global $spinmym_src_file;
            $themething_cmd = "themething s " . ($content_name[$region_index][$version_index] ?? '') . " " . $mym_theme . " " . $spinmym_src_file[$spin_index] . " Wii_Themer";
            # sign content file
            execInBackground($themething_cmd);
            $timed_out = wait_for_file(($content_name[$region_index][$version_index] ?? ''), 15);
            chdir($homedir);
        }
        
        if($timed_out)
            echo "Failed .\ndownload timed out .\n";
        else
            echo "Complete .\n";
        return;
    }
    function  theme_builder($mym_theme, $spin_index, $spincolor_index, $transchannels, $save_source, $theme_position, $version_index, $region_index) {
       // echo "<br></br>" . $mym_theme . " <<< mym_theme<br></br>" . $spin_index . " <<< spin_index<br></br>" .  $spincolor_index . " <<< spincolor_index<br></br>" . $transchannels . " <<< trans_channels<br></br>" . $save_source . " <<< save_source<br></br>" .  $theme_position . " <<< theme_position<br></br>" . $version_index . " <<< version_index<br></br>" . $region_index . " <<< region_index<br></br>Complete .";
        global $theme_is_2_stage;
        $theme_is_2_stage = is_theme_2_stage($mym_theme);
        //echo $theme_is_2_stage . " <<< theme_is_2_stage .<br></br>";
        global $spin_first_themes;
        $is_spin_first = false;
        $id = session_id();

        for($i = 0; $i < 9; $i++) {
			if($mym_theme == $spin_first_themes[$i]) {
				$is_spin_first = true;
			    break;
			}
		}
        //echo $is_spin_first . " <<< is_spin_first .<br></br>";

        # stage 1 ---------------------------------------
        global $content_name;
        global $spinmym_src_file;
        $cmd_stage1 = "";
        if($theme_is_2_stage) { # combine content/theme mym files (multi_stage theme)
            $cmd_stage1 = "themething b " . ($content_name[$region_index][$version_index] ?? '') . " " . $mym_theme . " stage1.app";
        }
        if($is_spin_first) { # combine content/trans_channel|spin_option mym files
            if($transchannels == "true")
                $cmd_stage1 = "themething b " . ($content_name[$region_index][$version_index] ?? '') . "trans_chans.mym stage1.app";
            else 
                $cmd_stage1 = "themething b " . ($content_name[$region_index][$version_index] ?? '') . " " . $spinmym_src_file[$spin_index] . " stage1.app";
        }
        if(!$is_spin_first && !$theme_is_2_stage)# combine content/theme mym files
            $cmd_stage1 = "themething b " . ($content_name[$region_index][$version_index] ?? '') . " " . $mym_theme . " stage1.app";
        //echo $cmd_stage1 . " <<< cmd_stage1 .<br></br>";
        $stage1_file = file_exists("stage1.app");
        if(!$stage1_file) {
            $homedir = getcwd();
			chdir("resources/working/" . $id);
            execInBackground($cmd_stage1);
            $timed_out = wait_for_file(("stage1.app"), 15);
            chdir($homedir);
        }
        # stage 2 ------------------------------------
        if($theme_is_2_stage) {
            $theme_no_extension = name_2_stage_theme($mym_theme);
            $cmd_stage2 = "themething b stage1.app " . $theme_no_extension . "_stage2.mym stage2.app";
        }
        if($is_spin_first) {
            $cmd_stage2 = "themething b stage1.app " . $mym_theme . " stage2.app";
        }
        if(!$is_spin_first && !$theme_is_2_stage) {
            if($transchannels == "true")
                $cmd_stage2 = "themething b stage1.app " . $transchannels . " stage2.app";
            else
                $cmd_stage2 = "themething b stage1.app " . $spinmym_src_file[$spin_index] . " stage2.app";
        }
        echo $cmd_stage2 . " <<< cmd_stage1 .<br></br>";
        $stage2_file = file_exists("stage2.app");
        if(!$stage2_file) {
            $homedir = getcwd();
			chdir("resources/working/" . $id);
            execInBackground($cmd_stage2);
            $timed_out = wait_for_file(("stage2.app"), 15);
            chdir($homedir);
        }
        # stage 3 ---------------------------------------------
        
        if($timed_out)
            echo "Failed .<br></br>theme_builder stage2 .<br></br>";
        else
            echo "Complete .<br></br>";

        return;
    }
    function is_theme_2_stage($mym_file) : bool {
        $str = null;
		$str = strstr($mym_file, "_stage1", true);
		if($str) {
			return true;
		}
		else return false;
	}
    function name_2_stage_theme(string $name) : string {
        $str = null;
		$str = strstr($name, "_stage1", true);
		if($str)
            return $str;
        return "";
    }
    function execInBackground($cmd) {
		if (substr(php_uname(), 0, 7) == "Windows"){
			pclose(popen($cmd, "r"));
		}
		return;
	}
    function wait_for_file($file, $timeout) : bool {
		$seccntr = 0;
		$myfile = file_exists($file);
		while((!$myfile and filesize($myfile) == 0) and ($seccntr < $timeout)) {
			$myfile = file_exists($file);
			sleep(1);
			$seccntr += 1;
		}
        if($seccntr == $timeout)
            return true;
        else
            return false;
	}
?>