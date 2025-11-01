<?php
    $session_id = null;
    $command = null;

    if(isset($_GET["command"])) {
        $command = $_GET["command"];
        switch($command) {
            case "get_user_id":
                get_user_id();
                break;
            case "set_data":
                if(isset($_GET["data_file_path"]))
                    $data_file_path = $_GET["data_file_path"];
                set_data($data_file_path);
                break;
            default:

                break;
        }
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
        session_start();
        $session_id = session_id();
        echo $session_id;
        return;
    }
?>