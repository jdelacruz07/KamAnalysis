package com.kamanalysis.auth;

import java.security.Principal;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

	@RequestMapping("/user")
	public Principal user(Principal user) {
		System.out.println("EL user es " + user);
		return user;
	}

//	@Bean
//	@Override
//	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//		HttpSession sesion = req.getSession(true);
//		System.out.println(sesion);
//	}

}
