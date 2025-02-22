import {
  Flex,
  Box,
  Text,
  Stack,
  Center,
  IconButton,
  HStack,
  Link,
  Circle,
  VStack,
  Heading,
  Input,
} from "@chakra-ui/react";
import {
  Brain,
  Crown,
  LayoutDashboard,
  PanelRight,
  Send,
  SquarePen,
  Upload,
} from "lucide-react";
import { Tooltip } from "./ui/tooltip";
import { Avatar } from "./ui/avatar";
import { InputGroup } from "./ui/input-group";
import {
  FileUploadRoot,
  FileUploadList,
  FileUploadTrigger,
} from "./ui/file-upload";
import { useState } from "react";

const Dashboard = () => {
  const [visiblePanel, setVisiblePanel] = useState(true);
  return (
    <Flex minH="100dvh">
      <Box
        bg="bg.muted"
        w={visiblePanel ? "250px" : "0"}
        overflow="hidden"
        transition="width 0.3s"
      >
        <Stack h="full" px="3" py="2">
          <Flex justifyContent="space-between">
            <Tooltip
              content="Close panel"
              positioning={{ placement: "right" }}
              showArrow
            >
              <IconButton
                variant="ghost"
                onClick={() => setVisiblePanel(!visiblePanel)}
              >
                <PanelRight fontSize="2xl" />
              </IconButton>
            </Tooltip>

            <Tooltip
              content="New Chat"
              positioning={{ placement: "bottom" }}
              showArrow
            >
              <IconButton variant="ghost">
                <SquarePen fontSize="2xl" />
              </IconButton>
            </Tooltip>
          </Flex>
          <Stack gap="0" p="2" flex="1">
            <HStack
              _hover={{ textDecor: "none", layerStyle: "fill.muted" }}
              px="1"
              h="10"
              w="100%"
              borderRadius="lg"
            >
              <Link variant="plain" _hover={{ textDecor: "none" }}>
                <Circle size={8} bg="bg.muted" borderWidth={2}>
                  <Brain fontSize="md" />
                </Circle>
                <Text>AI Model</Text>
              </Link>
            </HStack>
            <HStack
              _hover={{ textDecor: "none", layerStyle: "fill.muted" }}
              px="1"
              h="10"
              w="100%"
              borderRadius="lg"
            >
              <Link variant="plain" _hover={{ textDecor: "none" }}>
                <Circle size={8} bg="bg.muted" borderWidth={2}>
                  <Brain fontSize="md" />
                </Circle>
                <Text>Explore Models</Text>
              </Link>
            </HStack>
          </Stack>
          <Link
            href="#"
            variant="plain"
            _hover={{
              textDecor: "none",
              layerStyle: "fill.muted",
              h: "10",
              w: "100%",
              borderRadius: "lg",
            }}
            p="2"
          >
            <Circle size={8} bg="bg.muted" borderWidth={2}>
              <Crown fontSize="lg" />
            </Circle>
            <Stack gap="0" fontWeight="bold">
              <Text fontSize="sm">Upgrade Plan</Text>
              <Text fontSize="xs" color="fg.subtle">
                More Access to best Model
              </Text>
            </Stack>
          </Link>
        </Stack>
      </Box>

      <Box flex="1">
        <Stack h="full">
          <Flex justifyContent="space-between" align="center" p="2">
            {!visiblePanel && (
              <Flex align="center">
                <Tooltip
                  content="Close panel"
                  positioning={{ placement: "right" }}
                  showArrow
                >
                  <IconButton
                    variant="ghost"
                    onClick={() => setVisiblePanel(!visiblePanel)}
                  >
                    <PanelRight fontSize="2xl" />
                  </IconButton>
                </Tooltip>

                <Tooltip
                  content="New Chat"
                  positioning={{ placement: "bottom" }}
                  showArrow
                >
                  <IconButton variant="ghost">
                    <SquarePen fontSize="2xl" />
                  </IconButton>
                </Tooltip>
                <Text ml="3">NextSchool</Text>
              </Flex>
            )}
            {visiblePanel && <Text ml="3">NextSchool</Text>}
            <Avatar name="Yves" variant="solid" colorPalette="green" mr="3" />
          </Flex>
          <Center flex="1">
            <VStack>
              <Heading size="3xl">What can I help you with?</Heading>
              <Center>
                <InputGroup
                  minW="768px"
                  startElement={
                    <FileUploadRoot>
                      <FileUploadTrigger asChild>
                        <Upload />
                      </FileUploadTrigger>
                      <FileUploadList />
                    </FileUploadRoot>
                  }
                  endElement={
                    <IconButton colorPalette="green" mr="-2" size="sm">
                      <Send />
                    </IconButton>
                  }
                >
                  <Input
                    ps="3em"
                    pe="3.6em"
                    placeholder="Message NextSchool"
                    variant="subtle"
                  />
                </InputGroup>
              </Center>
            </VStack>
          </Center>
          <Box pb="2">
            <Center fontSize="xs" color="fg.muted">
              &copy; copyright 2021 NextSchool. Alright reserved.
            </Center>
          </Box>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Dashboard;
