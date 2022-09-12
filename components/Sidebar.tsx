import NextImage from "next/image";
import NextLink from "next/link";

import {
  Box,
  Divider,
  List,
  ListItem,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";
import ListMenu from "./ListMenu";
import { usePlaylist } from "../lib/hooks";

const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "Your Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
];

const musicMenu = [
  {
    name: "Create Playlist",
    icon: MdPlaylistAdd,
    route: "/",
  },
  {
    name: "Favorites",
    icon: MdFavorite,
    route: "/favorites",
  },
];
const SideBar = () => {
  // const playlists = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`);
  const { playlists } = usePlaylist();
  return (
    <Box
      bg="black"
      width="100%"
      height="calc(100vh - 100px)"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY="20px">
        <Box width="120px" marginBottom="20px" paddingX="20px">
          <NextImage src="/logo.svg" height={60} width={120} />
        </Box>
      </Box>

      <ListMenu menus={navMenu} top={{ marginBottom: "20px" }} />

      <ListMenu menus={musicMenu} top={{ marginTop: "20px" }} />
      <Divider color="gray.800" marginTop="20px" />
      <Box
        height="66%"
        overflowY="auto"
        paddingY="20px"
        css={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <List spacing={2}>
          {playlists.map((playlist) => (
            <ListItem paddingX="20px" key={playlist?.id}>
              <LinkBox>
                <NextLink href="/" passHref>
                  <LinkOverlay>{playlist?.name}</LinkOverlay>
                </NextLink>
              </LinkBox>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default SideBar;
