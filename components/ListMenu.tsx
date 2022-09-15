import NextLink from "next/link";

import {
  Box,
  List,
  ListItem,
  ListIcon,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";

const ListMenu = ({ menus, top }) => {
  return (
    <Box sx={top}>
      <List spacing={2}>
        {menus.map((menu) => (
          <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
            <LinkBox>
              <NextLink href={menu.route} passHref>
                <LinkOverlay>
                  <ListIcon as={menu.icon} color="white" marginRight="20px" />
                  {menu.name}
                </LinkOverlay>
              </NextLink>
            </LinkBox>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ListMenu;
