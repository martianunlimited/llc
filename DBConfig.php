<?php
	class DBConfig{
		
		private $hostname;
		private $username;
		private $password;
		private $database;
		
		function __construct(){
			//$this->loadLocalConfig();
			$this->loadRemoteConfig();
		}
		
		function loadLocalConfig(){
		  $this->hostname = "127.0.0.1";
		  $this->username = "root";
		  $this->password = "";
		  $this->database = "lcfhorgn_db";
		}
		
		function loadRemoteConfig(){
		  $this->hostname = "127.0.0.1";
		  $this->username = "lcfhorgn_root";
		  $this->password = "ZCBT2[MrGPx^";
		  $this->database = "lcfhorgn_db";
		}
		
		function getHostname(){
			return $this->hostname;
		}
		
		function getUsername(){
			return $this->username;
		}
		
		function getPassword(){
			return $this->password;
		}
		
		function getDatabase(){
			return $this->database;
		}
	}
?>