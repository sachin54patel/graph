<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Graph extends CI_Controller {

	public function index()
	{
		$this->load->view('header');
		$this->load->view('sidebar');
		$this->load->view('index');
		$this->load->view('footer');
	}

	public function graph()
	{
		$this->load->view('header');
		$this->load->view('sidebar');
		$this->load->view('graph');
		$this->load->view('footer');
	}
}
