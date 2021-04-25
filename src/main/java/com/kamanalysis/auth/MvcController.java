package com.kamanalysis.auth;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MvcController {

	@GetMapping("/hello")
	public String showHello(Model model) {
		return "hello";
	}

	@GetMapping("/login")
	public String login(Model model) {
		return "login";
	}

	@GetMapping("/home")
	public String showHome(Model model) {
		return "home";
	}

}
