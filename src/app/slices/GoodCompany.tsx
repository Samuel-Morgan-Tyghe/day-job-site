"use-client";
import {
  Flex,
  Image,
  Text,
  Box,
  Center,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";

export const GoodCompany = () => {
  const src = useBreakpointValue(
    {
      base: "/assets/images/logos-mobile.png",
      tablet: "/assets/images/logos.png",
      desktop: "/assets/images/logos.png",
    },
    { ssr: true }
  );
  return (
    <Flex
      bg="black"
      color="white"
      alignItems="center"
      justifyContent="center"
      minH="100vh"
      position={"relative"}
      h={{ base: "100%", tablet: "744px", laptop: "1024px" }}
      direction={{ base: "column", tablet: "row" }}
    >
      <Center
        h={{ tablet: "100%" }}
        sx={{
          img: {
            w: "auto",
            h: "auto",
            // h: "fit-content",
            maxH: { base: "428px", tablet: "553px", laptop: "834px" },
            maxW: "678px",
            // transform: "rotate(5.78deg)",
            pt: "18px",
          },
        }}
        position={{ base: "relative", tablet: "absolute" }}
        left={{ tablet: "-94px" }}
        top={0}
      >
        <Image
          alt=""
          width={678}
          height={834}
          src="/assets/images/Group 54.png"
        />
      </Center>
      <Flex
        direction={{ base: "column", tablet: "row" }}
        mt={{ base: "auto", tablet: "auto" }}
        ml={{ tablet: "15vw" }}
        mr={{ tablet: "10vw" }}
        zIndex={1}
        px="24px"
        gap="24px"
        pb="64px"
        alignItems={{ base: "center", tablet: "flex-start" }}
        textAlign={{ base: "center", tablet: "left" }}
      >
        <Flex
          direction="column"
          mt="auto"
          gap={"24px"}
          bg="black"
          rounded={"8px"}
          px="4px"
        >
          <Text variant={"h1"} as="h1">
            You're in good company
          </Text>
          <Text variant="body" fontWeight="bold">
            Over the years, Jo has worked with brands you’ve heard of (and some
            you haven’t) across all industries and sectors.
          </Text>
          <Text variant="body" opacity={0.8}>
            From fitness influencers to FTSE 500 companies Jo brings a
            personality punched approach to all projects.
          </Text>
        </Flex>
        <Box
          sx={{
            img: {
              w: "auto",
              h: "fit-content",
              // minW: "395px",
            },
          }}
        >
          <Image
            alt=""
            width={395}
            height={416}
            src={"/assets/images/logos.png"}
          />
        </Box>
      </Flex>
    </Flex>
  );
};
