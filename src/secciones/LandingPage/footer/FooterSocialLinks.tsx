import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { SocialLink } from "./interfaces/socialLink";

export const socialLinks: SocialLink[] = [
  {
    name: "Instagram",
    link: "#",
    icon: "/imagenes/instagram.svg",
  },
  {
    name: "YouTube",
    link: "#",
    icon: "/imagenes/youtube.svg",
  },
  {
    name: "Twitter",
    link: "#",
    icon: "/imagenes/twitter.svg",
  },
];

interface SocialLinkItemProps {
  item: SocialLink;
}

const SocialLinkItem = ({ item }: SocialLinkItemProps) => (
  <Box
    component="li"
    sx={{
      display: "inline-block",
      color: "primary.contrastText",
      mr: 0.5,
    }}
  >
    <Link
      target="_blank"
      sx={{
        lineHeight: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 36,
        height: 36,
        borderRadius: "50%",
        color: "inherit",
        "&:hover": {
          backgroundColor: "secondary.main",
        },
        "& img": {
          fill: "currentColor",
          width: 22,
          height: "auto",
        },
      }}
      href={item.link}
    >
      {/* eslint-disable-next-line */}
      <img src={item.icon} alt={item.name + "icon"} />
    </Link>
  </Box>
);

// default
const SocialLinks = () => {
  return (
    <Box sx={{ ml: -1 }}>
      <Box
        component="ul"
        sx={{
          m: 0,
          p: 0,
          lineHeight: 0,
          borderRadius: 3,
          listStyle: "none",
        }}
      >
        {socialLinks.map((item) => {
          return <SocialLinkItem key={item.name} item={item} />;
        })}
      </Box>
    </Box>
  );
};

export default SocialLinks;
