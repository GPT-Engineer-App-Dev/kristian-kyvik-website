import { Box, VStack, HStack, Heading, Text, Image, Flex, Spacer, IconButton, useColorMode, Link } from "@chakra-ui/react";
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const colorScheme = colorMode === "dark" ? "gray" : "facebook";

  return (
    <Box>
      <VStack spacing={8} align="stretch" px={[4, 8, 16, 32]} py={[8, 16]}>
        {/* Header */}
        <MotionBox initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Flex align="center">
            <Image borderRadius="full" boxSize={["80px", "100px", "120px"]} src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9mJTIwYSUyMHNtaWxpbmclMjBtYW58ZW58MHx8fHwxNzEzNTQ4MzEwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile" mr={4} />
            <Heading as="h1" size={["xl", "2xl"]}>
              Kristian Kyvik
            </Heading>
            <Spacer />
            <IconButton icon={colorMode === "dark" ? <FaSun /> : <FaMoon />} onClick={toggleColorMode} variant="ghost" />
          </Flex>
        </MotionBox>

        {/* About */}
        <MotionBox initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <VStack align="start" spacing={4}>
            <Heading as="h2" size="xl">
              About Me
            </Heading>
            <Text>I am a passionate software developer with experience in building web applications using modern technologies. I enjoy solving complex problems and constantly learning new skills to improve my craft.</Text>
          </VStack>
        </MotionBox>

        {/* Skills */}
        <MotionBox initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
          <VStack align="start" spacing={4}>
            <Heading as="h2" size="xl">
              Skills
            </Heading>
            <HStack spacing={4} wrap="wrap">
              <Tag>JavaScript</Tag>
              <Tag>React</Tag>
              <Tag>Node.js</Tag>
              <Tag>HTML</Tag>
              <Tag>CSS</Tag>
            </HStack>
          </VStack>
        </MotionBox>

        {/* Projects */}
        <MotionBox initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
          <VStack align="start" spacing={4}>
            <Heading as="h2" size="xl">
              Projects
            </Heading>
            <VStack align="start">
              <ProjectCard title="Project 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." tags={["React", "Node.js"]} colorScheme={colorScheme} />
              <ProjectCard title="Project 2" description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." tags={["JavaScript", "HTML", "CSS"]} colorScheme={colorScheme} />
            </VStack>
          </VStack>
        </MotionBox>

        {/* Contact */}
        <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }}>
          <VStack align="start" spacing={4}>
            <Heading as="h2" size="xl">
              Contact
            </Heading>
            <VStack align="start" spacing={2}>
              <Link href="mailto:kristian@kyvik.com">
                <HStack>
                  <FaEnvelope />
                  <Text>kristian@kyvik.com</Text>
                </HStack>
              </Link>
              <Link href="https://github.com/kristiankyvik" isExternal>
                <HStack>
                  <FaGithub />
                  <Text>github.com/kristiankyvik</Text>
                </HStack>
              </Link>
              <Link href="https://www.linkedin.com/in/kristiankyvik/" isExternal>
                <HStack>
                  <FaLinkedin />
                  <Text>linkedin.com/in/kristiankyvik</Text>
                </HStack>
              </Link>
            </VStack>
          </VStack>
        </MotionBox>
      </VStack>
    </Box>
  );
};

const Tag = ({ children, colorScheme }) => (
  <Box borderRadius="md" bg={`${colorScheme}.500`} color="white" px={2} py={1}>
    {children}
  </Box>
);

const ProjectCard = ({ title, description, tags, colorScheme }) => (
  <Box p={4} borderWidth={1} borderRadius="md">
    <VStack align="start" spacing={2}>
      <Heading as="h3" size="md">
        {title}
      </Heading>
      <Text>{description}</Text>
      <HStack spacing={2}>
        {tags.map((tag) => (
          <Tag key={tag} colorScheme={colorScheme}>
            {tag}
          </Tag>
        ))}
      </HStack>
    </VStack>
  </Box>
);

export default Index;
