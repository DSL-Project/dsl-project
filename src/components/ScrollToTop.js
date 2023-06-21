import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		document.documentElement.scrollTo({
			top: 0,
			left: 0,
			behavior: "instant",
		});
	}, [pathname]);

	return null;
}

export default ScrollToTop