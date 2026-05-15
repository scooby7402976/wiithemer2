<?php
    session_start();
    $session_id = "";
    $command = "";
    $spincolors = [
        "", "outline_Black.mym", "outline_Blue.mym", "outline_Green.mym", "outline_Orange.mym", "outline_Pink.mym", "outline_Purple.mym", "outline_Red.mym", "outline_White.mym", "outline_Yellow.mym"
    ];
    $shadowcolors = [
        "", "black_shadow.mym", "blue_shadow.mym", "green_shadow.mym", "orange_shadow.mym", "pink_shadow.mym", "purple_shadow.mym", "red_shadow.mym", "white_shadow.mym", "yellow_shadow.mym"
    ];
    $spinmym_src_file = [
        "", "nospin.mym", "spin.mym", "fastspin.mym"
    ];
    $download_version = [
        [null], // placeholder for index 0
        [null, 513, 481, 449, 417, 609], // U
        [null, 514, 482, 450, 418, 610], // E
        [null, 512, 480, 448, 416, 608], // J
        [null, 518, 486, 454] // K
    ];
    $display_version = [
        [null], // placeholder for index 0
        [null, "4.3_U", "4.2_U", "4.1_U", "4.0_U", "4.3_U"], // U
        [null, "4.3_E", "4.2_E", "4.1_E", "4.0_E", "4.3_E"], // E
        [null, "4.3_J", "4.2_J", "4.1_J", "4.0_J", "4.3_J"], // J
        [null, "4.3_K", "4.2_K", "4.1_K"] // K
    ];
    $content_name = [
        [null],// placeholder for index 0
        [null,"00000097", "00000087", "0000007b", "00000072", "0000001f"], // U
        [null,"0000009a", "0000008a", "0000007e", "00000075", "00000022"], // E
        [null,"00000094", "00000084", "00000078", "0000006f", "0000001c"], // J
        [null,"0000009d", "0000008d", "00000081"] // K
    ];
    $regions = [
        "", "u", "e", "j", "k"
    ];
    $spin_first_themes = [
        "black_pirate.mym", "matrix.mym", "matrix_reloaded.mym", "muse.mym", "lime_wii.mym", "diablo_3.mym", "star_craft.mym", "darkwii_extendedu.mym", "darkwii_extendede.mym"
    ];
    $spin_display = [
        "", "_nospin", "_spin", "_fastspin"
    ];
    if(isset($_GET["command"])) {
        $command = $_GET["command"];
        $id = "";
        $theme_is_2_stage = false;
        $mym_theme = "";
        $data_file_path = "";
        $spin_index = 0;
        $spincolor_index = 0;
        $region_index = 0;
        $theme_position = 0;
        $cursor_shadow_index = 0;
        $version_index = 0;

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
                if(isset($_GET["region_index"])) $region_index = intval($_GET["region_index"]);
                if(isset($_GET["theme_position"])) $theme_position = intval($_GET["theme_position"]);
                if(isset($_GET["cursorshadow"])) $cursor_shadow_index = intval($_GET["cursorshadow"]);
                copy_theme_files($mym_theme, $spin_index, $spincolor_index, $transchannels, $region_index, $theme_position, $cursor_shadow_index);
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
                if(isset($_GET["cursorshadow"])) $cursor_shadow_index = intval($_GET["cursorshadow"]);

                theme_builder($mym_theme, $spin_index, $spincolor_index, $transchannels, $save_source, $theme_position, $version_index, $region_index, $cursor_shadow_index);
                break;
            case "delete_session_folder":
                $id = session_id();
                $session_folder = "resources/working/" . $id;
                if(is_dir($session_folder)) {
                    $files = scandir($session_folder);
                    foreach($files as $file) {
                        if($file != "." && $file != "..") {
                            unlink($session_folder . "/" . $file);
                        }
                    }
                    rmdir($session_folder);
                }
                break;
            default:

                break;
        }
        return;
    }
    function set_data(string $data_file_path) {
        #echo "set_data-data_file_path: " . $data_file_path . "\n";
        $data_file_contents = 0;
        if(file_exists($data_file_path))
            $data_file_contents = intval(file_get_contents($data_file_path));
        $temp_data = $data_file_contents + 1;
        file_put_contents("tmp_file.txt", $temp_data, LOCK_EX);
        if(!rename("tmp_file.txt", $data_file_path)) {
            echo "Failed .";
            return;
        }
        #echo "set_data-temp_data: " . $temp_data . "\n";
        echo $temp_data;
        //sleep(1);
        return;
    }
    function get_user_id() {
        global $session_id;
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
    function  copy_theme_files(string $mym_theme, int $spin_index, int $spincolor_index, string $transchannels , int $region_index, int $theme_position, int $cursor_shadow_index) {
        global $spinmym_src_file;
        global $spincolors;
        global $regions;
        global $shadowcolors;

        $id = session_id();
        $multi_region_theme = theme_needs_mym_Extension($theme_position);
        //echo $multi_region_theme . " <<< multi_region_theme (copy).<br></br>";
        if($multi_region_theme) {
            $mym_theme = $mym_theme . $regions[$region_index] . ".mym";
        }
        $theme_src_pth = "resources/mym/" . $mym_theme;
        $theme_dst_pth = "resources/working/" . $id . "/" . $mym_theme;
        $theme_is_2_stage = is_theme_2_stage($mym_theme);
        
        # copy theme mym file(s) to working folder -----------
        if(!copy($theme_src_pth, $theme_dst_pth)) {
            echo "Failed .";
            return;
        }
        else
            echo "Complete .\n";
        
        if($theme_is_2_stage) {
            $theme_no_extension = name_2_stage_theme($mym_theme);
            $theme_src_pth = "resources/mym/" . $theme_no_extension . "_stage2.mym";
            $theme_dst_pth = "resources/working/" . $id . "/" . $theme_no_extension . "_stage2.mym";
            if(!copy($theme_src_pth, $theme_dst_pth))
                echo "Failed .";
        }
        # copy spin mym to working folder -----------------
        $spin_src_pth = "resources/mym/spins/" . $spinmym_src_file[$spin_index];
        $spin_dst_pth = "resources/working/" . $id . "/" . $spinmym_src_file[$spin_index];
        if(!copy($spin_src_pth, $spin_dst_pth))
            echo "Failed .";
        # copy spin color mym to working folder -----------
        $spin_color_src_pth = "resources/mym/outline_colors/" . $spincolors[$spincolor_index];
        $spin_color_dst_pth = "resources/working/" . $id . "/" . $spincolors[$spincolor_index];
        if($spincolor_index >= 1) {
            if(!copy($spin_color_src_pth, $spin_color_dst_pth))
                echo "Failed .";
        }
        # copy trans channels mym to working folder --------
        $trans_src_pth = "resources/mym/spins/trans_chans.mym";
        $trans_dst_pth = "resources/working/" . $id . "/" . "trans_chans.mym";
        if($transchannels == "true") {
            if(!copy($trans_src_pth, $trans_dst_pth))
                echo "Failed .";
        }
        $cursor_shadow_pth = "resources/mym/cursor_shadows/" . $shadowcolors[$cursor_shadow_index];
        $cursor_shadow_dst_pth = "resources/working/" . $id . "/" . $shadowcolors[$cursor_shadow_index];
        if($cursor_shadow_index)
            if(!copy($cursor_shadow_pth, $cursor_shadow_dst_pth))
                echo "Failed .";

        return;
    }
    function download_content(string $mym_theme, int $spin_index, int $version_index, int $region_index) {
        $id = session_id();
        global $content_name;
        $timed_out = false;
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
    function  theme_builder(string $mym_theme,int $spin_index, int $spincolor_index, string $transchannels, string $save_source, int $theme_position, int $version_index, int $region_index, int $cursor_shadow_index) {
        global $theme_is_2_stage;
        global $spin_first_themes;
        global $spincolors;
        global $content_name;
        global $spinmym_src_file;
        global $regions;
        global $download_version;
        global $display_version;
        global $spin_display;
        global $shadowcolors;

        $theme_is_2_stage = is_theme_2_stage($mym_theme);
        $id = session_id();
        $theme_no_extension = name_2_stage_theme($mym_theme);
        $is_spin_first = false;
        $build_cmd = "";
        $wait_file = "";
        $error_themething = false;
        $theme_finished_stage = -1;
        $multi_region_theme = theme_needs_mym_Extension($theme_position);
        $multi_region_save_dir = "";
        if($multi_region_theme) {
            $multi_region_save_dir = $mym_theme;
            $mym_theme = $mym_theme . $regions[$region_index] . ".mym";
        }
        # 2 stage themes
        $cmd_2_stage1 = "themething b " . ($content_name[$region_index][$version_index] ?? '') . " " . $mym_theme . " stage1.app";
        $cmd_2_stage2 = "themething b stage1.app " . $theme_no_extension . "_stage2.mym stage2.app";
        $cmd_2_stage3 = "themething b stage2.app " . $spinmym_src_file[$spin_index] . " stage3.app";
        $cmd_2_stage4 = "themething b stage3.app " . $shadowcolors[$cursor_shadow_index] . " stage4.app";
        # spin first themes
        $cmd_spin1 = "themething b " . ($content_name[$region_index][$version_index] ?? '') . " " . $spinmym_src_file[$spin_index] . " stage1.app";
        # regular theme themething commands
        $cmd_reg1 = "themething b " . ($content_name[$region_index][$version_index] ?? '') . " " . $mym_theme . " stage1.app";
        $cmd_reg2 = "themething b stage1.app " . $spinmym_src_file[$spin_index] . " stage2.app";

        for($i = 0; $i < 9; $i++) {
			if($mym_theme == $spin_first_themes[$i]) {
				$is_spin_first = true;
			    break;
			}
		}
        if($theme_is_2_stage) {
            $passes = 3;
            $theme_type = 2;
        } 
        else if($is_spin_first) {
            $passes = 4;
            $theme_type = 1;
        } 
        else {
            $passes = 2;
            $theme_type = 0;
        }

        for($i = 0; $i < $passes; $i++) {
           //echo $i . " <<< i<br></br>";
           $build_cmd = "";
            switch($i) {
                case 0:
                    if($theme_type == 0) # combine content/theme mym
                        $build_cmd = $cmd_reg1;
                    else if($theme_type == 1)# combine content/spin mym
                        $build_cmd = $cmd_spin1;
                    else if($theme_type == 2)# combine content/theme mym
                        $build_cmd = $cmd_2_stage1;
                    $wait_file = "stage1.app";
                    //echo " build_cmd -> " . $build_cmd . " .<br></br>";
                    break;
                case 1:
                    if($theme_type == 0) {# combine content-theme mym/spin
                        if($transchannels == "true" | $spincolor_index >= 1) {
                            $passes++;
                        }
                        else $theme_finished_stage = 2;
                        $build_cmd = $cmd_reg2;
                        $wait_file = "stage2.app";
                    }
                    else if($theme_type == 1) { # combine-spin/transchannels mym
                        if($transchannels == "true") {
                            $build_cmd = "themething b stage1.app trans_chans.mym stage2.app";
                            $passes++;
                            $wait_file = "stage2.app";
                        }
                        else {
                            $wait_file = "continue";
                        }
                    }
                    else if($theme_type == 2) { # combine content-theme mym1/theme mym2
                        $build_cmd = $cmd_2_stage2;
                        $wait_file = "stage2.app";
                    }
                   // echo " build_cmd -> " . $build_cmd . " .<br></br>";
                    break;
                case 2:
                    if($theme_type == 0) {
                        if($spincolor_index >= 1) {
                            $passes++;
                        }
                        if($transchannels == "true") {
                            $build_cmd = "themething b stage2.app trans_chans.mym stage3.app";
                            $wait_file = "stage3.app";
                            $theme_finished_stage = 3;
                        }
                        else $wait_file = "continue";
                    }
                    else if($theme_type == 1) {
                        if($spincolor_index >= 1) {
                            if($transchannels == "true")
                                $build_cmd = "themething b stage2.app " . $spincolors[$spincolor_index] . " stage3.app"; 
                            else
                                $build_cmd = "themething b stage1.app " . $spincolors[$spincolor_index] . " stage3.app"; 
                            $wait_file = "stage3.app";
                        }
                        else {
                            $wait_file = "continue";
                        }
                    }
                    else if($theme_type == 2) {
                        if($transchannels == "true" | $spincolor_index >= 1) $passes++;
                        
                        $build_cmd = $cmd_2_stage3;
                        $wait_file = "stage3.app";
                        
                        if($transchannels == "false" & $spincolor_index == 0)
                            $theme_finished_stage = 3;
                    }
                    //echo " build_cmd -> " . $build_cmd . " .<br></br>";
                    break;
                case 3:
                    if($theme_type == 0) {
                        if($transchannels == "true")
                            $build_cmd = "themething b stage3.app " . $spincolors[$spincolor_index] . " stage4.app";
                        else 
                            $build_cmd = "themething b stage2.app " . $spincolors[$spincolor_index] . " stage4.app";
                        $wait_file = "stage4.app";
                        $theme_finished_stage = 4;
                    }
                    else if($theme_type == 1) {
                        if($transchannels == "true" & $spincolor_index == 0)
                            $build_cmd = "themething b stage2.app " . $mym_theme . " stage4.app";
                        if($transchannels == "true" & $spincolor_index >= 1) {
                            $build_cmd = "themething b stage3.app " . $mym_theme . " stage4.app";
                        }
                        if($transchannels == "false" & $spincolor_index == 0) {
                            $build_cmd = "themething b stage1.app " . $mym_theme . " stage4.app";
                        }
                        if($transchannels == "false" & $spincolor_index >= 1) {
                            $build_cmd = "themething b stage3.app " . $mym_theme . " stage4.app";
                        }
                        $theme_finished_stage = 4;
                        $wait_file = "stage4.app";
                    }
                    else if($theme_type == 2) {
                        if($spincolor_index >= 1) {
                            $passes++;
                        }
                        if($transchannels == "true" & $spincolor_index >= 1) {
                            $build_cmd = "themething b stage3.app trans_chans.mym stage4.app";
                            $wait_file = "stage4.app";
                        }
                        else if($transchannels == "true" & $spincolor_index == 0) {
                            $build_cmd = "themething b stage3.app trans_chans.mym stage4.app";
                            $theme_finished_stage = 4;
                            $wait_file = "stage4.app";
                        }
                        else if($transchannels == "false" & $spincolor_index >= 1) {
                            $wait_file = "continue";
                        }
                    }
                    //echo " build_cmd -> " . $build_cmd . " .<br></br>";
                    break;
                case 4:
                    if($theme_type == 2) {
                        if($transchannels == "true")
                            $build_cmd = "themething b stage4.app " . $spincolors[$spincolor_index] . " stage5.app";
                        else
                            $build_cmd = "themething b stage3.app " . $spincolors[$spincolor_index] . " stage5.app";
                        $wait_file = "stage5.app";
                        $theme_finished_stage = 5;
                    }
                    break;
            }
            $wait_file_exists = file_exists($wait_file);
            if(!$wait_file_exists)
                if(!execute_themething_cmd($wait_file, $id, $build_cmd)) {
                    $error_themething = true;
                    break;
                }
        }
        if(!$error_themething) echo "Complete ./" . $id;
        if($save_source == "true") {
            $save_dir = "";
            $source_file = "";

            if($theme_is_2_stage)
                $save_dir = "resources/working/" . $id . "/" . substr($mym_theme, 0, strlen($mym_theme) - 11);
            else if($multi_region_theme)
                $save_dir = "resources/working/" . $id . "/" . $multi_region_save_dir;
            else
                $save_dir = "resources/working/" . $id . "/" . substr($mym_theme, 0, strlen($mym_theme) - 4);
            //echo $save_dir . " <<< save dir .<br></br>";
            if(!is_dir($save_dir))
                mkdir($save_dir);
            $source_file = ($content_name[$region_index][$version_index] ?? '');
            if(!copy("resources/working/" . $id . "/" . $source_file, $save_dir . "/" . $source_file))
                echo "Failed .(copy content)<br></br>";
            $source_file = $spinmym_src_file[$spin_index];
            if(!copy("resources/working/" . $id . "/" . $source_file, $save_dir . "/" . $source_file))
                echo "Failed .(copy spin)<br></br>";
            if($transchannels == "true") {
                $source_file = "trans_chans.mym";
                if(!copy("resources/working/" . $id . "/" . $source_file, $save_dir . "/" . $source_file))
                    echo "Failed .(copy transchannels)<br></br>";
            }
            if($spincolor_index >= 1) {
                $source_file = $spincolors[$spincolor_index];
                if(!copy("resources/working/" . $id . "/" . $source_file, $save_dir . "/" . $source_file))
                    echo "Failed .(copy spin_colr)<br></br>";
            }
            if($cursor_shadow_index >= 1) {
                $source_file = $shadowcolors[$cursor_shadow_index];
                if(!copy("resources/working/" . $id . "/" . $source_file, $save_dir . "/" . $source_file))
                    echo "Failed .(copy cursor_shadow)<br></br>";
            }
            $source_file = $mym_theme;
            if(!copy("resources/working/" . $id . "/" . $source_file, $save_dir . "/" . $source_file))
                echo "Failed .(copy theme mym)<br></br>";
            if($theme_is_2_stage) {
                $source_file = $theme_no_extension . "_stage2.mym";
                if(!copy("resources/working/" . $id . "/" . $source_file, $save_dir . "/" . $source_file))
                    echo "Failed .(copy theme mym2)<br></br>";
            }
            // --------------- remove beta @ release ----------------------------
            $csm = "";
            $source_file = "resources/working/" . $id . "/stage" . $theme_finished_stage . ".app";
            if($theme_is_2_stage) {
                $csm = $save_dir . "/" . substr($mym_theme, 0, strlen($mym_theme) - 11) . "_" . ($display_version[$region_index][$version_index] ?? '') . "_v" . ($download_version[$region_index][$version_index] ?? '') . $spin_display[$spin_index] . ".csm";
                $makezipstr = "7z.exe a " . substr($mym_theme, 0, strlen($mym_theme) - 11) . ".zip -tzip c:/apache24/server/wiithemer/beta/resources/working/" . $id . "/" . substr($mym_theme, 0, strlen($mym_theme) - 11);
                $wait_file = substr($mym_theme, 0, strlen($mym_theme) - 11) . ".zip";
            }
            else if($multi_region_theme) {
                $csm = $save_dir . "/" . $multi_region_save_dir . "_" . ($display_version[$region_index][$version_index] ?? '') . "_v" . ($download_version[$region_index][$version_index] ?? ''). $spin_display[$spin_index]  . ".csm";
                $makezipstr = "7z.exe a " . $multi_region_save_dir . ".zip -tzip c:/apache24/server/wiithemer/beta/resources/working/" . $id . "/" . $multi_region_save_dir;
                $wait_file = $multi_region_save_dir . ".zip";
            }
            else {
                $csm = $save_dir . "/" . substr($mym_theme, 0, strlen($mym_theme) - 4) . "_" . ($display_version[$region_index][$version_index] ?? '') . "_v" . ($download_version[$region_index][$version_index] ?? ''). $spin_display[$spin_index]  . ".csm";
                $makezipstr = "7z.exe a " . substr($mym_theme, 0, strlen($mym_theme) - 4) . ".zip -tzip c:/apache24/server/wiithemer/beta/resources/working/" . $id . "/" . substr($mym_theme, 0, strlen($mym_theme) - 4);
                $wait_file = substr($mym_theme, 0, strlen($mym_theme) - 4) . ".zip";
            }     
            $save_source = $csm;
            //echo $source_file . " <<< source file .<br></br>";
            //echo $save_source . " <<< save file .<br></br>";
            if(!copy($source_file, $save_source))
               echo "Failed .(copy csm)<br></br>";
            // zip file here -----------------------------
            $wait_file_exists = file_exists($wait_file);
            if(!$wait_file_exists) {
                 $homedir = getcwd();
                chdir("resources/working/" . $id);
                execInBackground($makezipstr);
                $timed_out = wait_for_file(($wait_file), 15);
                chdir($homedir);
                if($timed_out) {
                    echo "Failed .<br></br> makezipstr -> " . $makezipstr;
                }
            }
        }
        $save_dir = "resources/working/" . $id;
        $csm = "";
        $source_file = "resources/working/" . $id . "/stage" . $theme_finished_stage . ".app";
        if(!execute_themething_cmd("stage" . $theme_finished_stage . ".app", $id, "themething b stage" . $theme_finished_stage . ".app " . $shadowcolors[$cursor_shadow_index] . " stage" . $theme_finished_stage . ".app")) {
            echo "Failed .<br></br> cmd -> " . "themething b stage" . $theme_finished_stage . ".app " . $shadowcolors[$cursor_shadow_index] . " stage" . $theme_finished_stage . ".app";
            return;
        }
        if($theme_is_2_stage) $csm = $save_dir . "/" . $theme_no_extension . "_" . ($display_version[$region_index][$version_index] ?? '') . "_v" . ($download_version[$region_index][$version_index] ?? ''). $spin_display[$spin_index]  . ".csm";
        else if($multi_region_theme) $csm = $save_dir . "/" . $multi_region_save_dir . "_" . ($display_version[$region_index][$version_index] ?? '') . "_v" . ($download_version[$region_index][$version_index] ?? ''). $spin_display[$spin_index]  . ".csm";
        else $csm = $save_dir . "/" . substr($mym_theme, 0, strlen($mym_theme) - 4) . "_" . ($display_version[$region_index][$version_index] ?? '') . "_v" . ($download_version[$region_index][$version_index] ?? ''). $spin_display[$spin_index]  . ".csm";
        $save_source = $csm;
        if(!rename($source_file, $save_source))
            echo "Failed .(rename csm)<br></br>";
        return;
    }
    function  execute_themething_cmd(string $wait_file, string $working_id, string   $themething_cmd) : bool {
        if($wait_file == "continue") return true;
        $wait_file_exists = file_exists($wait_file);
        if(!$wait_file_exists) {
            $homedir = getcwd();
			chdir("resources/working/" . $working_id);
            execInBackground($themething_cmd);
            $timed_out = wait_for_file(($wait_file), 15);
            chdir($homedir);
            if($timed_out) {
                echo "Failed .<br></br> cmd -> " . $themething_cmd;
                return false;
            }
        }
        return true;
    }
    function is_theme_2_stage(string $mym_file) : bool {
        $str = null;
		$str = strstr($mym_file, "_stage1", true);
		if($str) {
			return true;
		}
		else return false;
	}
    function name_2_stage_theme(string $name) : string|bool {
        $str = null;
		$str = strstr($name, "_stage1", true);
		if($str)
            return $str;
        return false;
    }
    function execInBackground(string $cmd) {
		if (substr(php_uname(), 0, 7) == "Windows"){
			pclose(popen($cmd, "r"));
		}
		return;
	}
    function wait_for_file(string $file, int $timeout) : bool {
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
    function theme_needs_mym_Extension(int $theme_Selected) : bool {
		$selected = intval($theme_Selected);
        $theme_needs_extension = [73, 75, 76, 77, 78, 79, 80, 81, 82, 83, 128, 322];
        $int = null;
        for($int = 0; $int < count($theme_needs_extension); $int++) {
            if($selected == $theme_needs_extension[$int])
                return true;
        }
		return false;
	}
?>