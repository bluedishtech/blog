import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "BlueDISH Tech",
	subtitle: "Blog",
	lang: "en", // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th'
	themeColor: {
		hue: 220, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: false, // Hide the theme color picker for visitors
	},
	banner: {
		enable: true,
		src: "assets/images/banner.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, // Display the credit text of the banner image
			text: "Image by 5s9 Horizons", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		 {
		   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
		//   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
		//   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		 }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/bluedishtech/blog", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/blueavatar.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "BlueDISH Tech",
	bio: "Blue Digital Innovation & Scientific Horizons",
	links: [
		{
			name: "X",
			icon: "fa6-brands:square-x-twitter", // Visit https://icones.js.org/ for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://x.com/bluedishtech",
		},
		{
			name: "Whatsapp",
			icon: "fa6-brands:whatsapp",
			url: "https://wa.me/789229104",
		},
		{
			name: "Telegram",
			icon: "fa6-brands:telegram",
			url: "https://t.me/Bluedishtech",
		},
		{
			name: "Youtube",
			icon: "fa6-brands:square-youtube",
			url: "https://www.youtube.com/@bluedishtech",
		},
		{
			name: "Instagram",
			icon: "fa6-brands:square-instagram",
			url: "https://www.instagram.com/bluedishtech/",
		},
		{
			name: "Linkedin",
			icon: "fa6-brands:linkedin",
			url: "https://www.linkedin.com/in/samba-sene-7b8a58373/",
		},
		{
			name: "Pinterest",
			icon: "fa6-brands:square-pinterest",
			url: "https://www.pinterest.com/bluedishtech/",
		},
		{Telegram
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/bluedishtech/blog",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
