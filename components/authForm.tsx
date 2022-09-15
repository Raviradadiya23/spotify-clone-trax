import { Box, Flex, Input, Button, Center } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import NextImage from "next/image";
import { auth } from "../lib/mutations";

const AuthForm: FC<{ mode: "signin" | "signup" }> = ({ mode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    await auth(mode, { email, password, userInfo });
    setIsLoading(false);
    router.push("/");
  };

  return (
    <Box height="100vh" width="100vw" bg="black" color="white">
      <Flex
        justify="center"
        align="center"
        height="100px"
        borderBottom="white 1px solid"
      >
        <NextImage src="/logo.svg" height={60} width={120} />
      </Flex>

      <Flex justify="center" align="center" height="calc(100vh - 100px)">
        <Center>
          <Box padding="50px" bg="gray.900" borderRadius="6px">
            <form onSubmit={handleSubmit}>
              {mode === "signup" && (
                <>
                  <Input
                    marginBottom="10px"
                    placeholder="First Name"
                    type="text"
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, firstName: e.target.value })
                    }
                  />
                  <Input
                    marginBottom="10px"
                    placeholder="Last Name"
                    type="text"
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, lastName: e.target.value })
                    }
                  />
                </>
              )}
              <Input
                marginBottom="10px"
                placeholder="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                marginBottom="10px"
                placeholder="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Flex justify="center" align="center">
                <Button
                  margin="auto"
                  type="submit"
                  bg="green.500"
                  isLoading={isLoading}
                  sx={{
                    "&:hover": {
                      bg: "green.300",
                    },
                  }}
                >
                  {mode}
                </Button>
              </Flex>
            </form>
          </Box>
        </Center>
      </Flex>
    </Box>
  );
};

export default AuthForm;
