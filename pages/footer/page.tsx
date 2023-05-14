import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
	return (
		
			<div className="bg-black h-1/2 w-full flex max-[560px]:flex-col max-[560px]:items-center	 justify-between md:flex-row  items-start p-2 bottom-0">
				<div>
					<p className="text-[1.5vw] pt-2">@Copyright 2023 by Ali Asif</p>
				</div>
				<div className="p-2 ">
					<ul>
						<div className="flex gap-6 pb-2 pt-2">
							<a href=""><FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" /></a>
							<a href="https://www.facebook.com/ali.flash.98?mibextid=ZbWKwL"><FaFacebook className="text-2xl cursor-pointer hover:text-blue-600" /></a>
							<a href="https://www.linkedin.com/in/ali-asif-9622b518a"><FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" /></a>
							<a href="https://github.com/ali-asif?tab=repositories"><FaGithub className="text-2xl cursor-pointer hover:text-red-600" /></a>
						</div>
					</ul>
				</div>
            </div>
           )
      }