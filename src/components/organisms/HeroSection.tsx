import React from 'react'
import {
  Box,
  Container,
  Text,
  Heading,
  HStack,
  VStack,
  Image,
  useColorModeValue,
  Icon,
  SimpleGrid,
} from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from 'react-icons/fa'
import { portfolioData } from '../../models/portfolioData'
import CustomButton from '../atoms/Button'
import { useSmoothScroll } from '../../hooks/useSmoothScroll'

import heroImage from '../../assets/images/hero.jpg'

const HeroSection: React.FC = () => {
  const { scrollToSection } = useSmoothScroll()
  const bgGradient = useColorModeValue(
    'linear(to-r, blue.50, purple.50)',
    'linear(to-r, gray.900, blue.900)'
  )

  const socialLinks = [
    { icon: FaGithub, href: portfolioData.contact.github, label: 'GitHub' },
    { icon: FaLinkedin, href: portfolioData.contact.linkedin, label: 'LinkedIn' },
    { icon: FaTwitter, href: portfolioData.contact.twitter, label: 'Twitter' },
  ]

  return (
    <Box
      id="home"
      bgGradient={bgGradient}
      minH="100vh"
      w="100vw"
      display="flex"
      alignItems="center"
      position="relative"
      overflow="hidden"
      pt={{ base: 20, md: 24, lg: 0 }}
    >
      {/* Background decoration */}
      <Box
        position="absolute"
        top="-50%"
        right="-10%"
        width="800px"
        height="800px"
        borderRadius="50%"
        bg="brand.100"
        opacity="0.1"
        filter="blur(100px)"
      />
      <Box
        position="absolute"
        bottom="-30%"
        left="-5%"
        width="600px"
        height="600px"
        borderRadius="50%"
        bg="accent.100"
        opacity="0.1"
        filter="blur(80px)"
      />

      <Container maxW="full" px={{ base: 4, md: 8, lg: 12 }} position="relative" zIndex={1}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="center">
          <VStack spacing={{ base: 6, md: 8 }} align="flex-start">
            <VStack spacing={{ base: 6, md: 4 }} align="flex-start">
              <Text
                color="brand.500"
                fontWeight="semibold"
                fontSize={{ base: "md", md: "lg" }}
                textTransform="uppercase"
                letterSpacing="wider"
                pt={{ base: 4, md: 0, lg: 0 }}
              >
                Welcome to my portfolio
              </Text>
              
              <Heading
                as="h1"
                size="2xl"
                lineHeight="1.2"
                bgGradient="linear(to-r, brand.500, accent.500)"
                bgClip="text"
              >
                {portfolioData.personalInfo.name}
              </Heading>
              
              <Heading
                as="h2"
                size="xl"
                color="gray.600"
                fontWeight="normal"
              >
                {portfolioData.personalInfo.title}
              </Heading>
              
              <Text
                fontSize="xl"
                color="gray.600"
                maxW="600px"
                lineHeight="1.6"
              >
                {portfolioData.personalInfo.description}
              </Text>
            </VStack>

            <HStack spacing={4}>
              <CustomButton
                size="lg"
                px={8}
                py={6}
                fontSize="lg"
                fontWeight="semibold"
                bgGradient="linear(to-r, brand.500, brand.600)"
                color="white"
                onClick={() => scrollToSection('projects')}
                _hover={{
                  bgGradient: "linear(to-r, brand.600, brand.700)",
                  transform: "translateY(-2px)",
                  boxShadow: "xl",
                }}
                _active={{
                  transform: "translateY(0)",
                }}
              >
                View My Work
              </CustomButton>
              
              <CustomButton
                variant="outline"
                size="lg"
                px={8}
                py={6}
                fontSize="lg"
                fontWeight="semibold"
                borderWidth="2px"
                onClick={() => scrollToSection('contact')}
                _hover={{
                  bg: "brand.500",
                  color: "white",
                  transform: "translateY(-2px)",
                  boxShadow: "xl",
                }}
              >
                Contact Me
              </CustomButton>
            </HStack>

            <HStack spacing={6}>
              {socialLinks.map((social) => (
                social.href && (
                  <CustomButton
                    key={social.label}
                    as="a"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="ghost"
                    size="lg"
                    color="gray.600"
                    _hover={{
                      color: "brand.500",
                      transform: "translateY(-2px)",
                    }}
                  >
                    <Icon as={social.icon} boxSize={6} />
                  </CustomButton>
                )
              ))}
            </HStack>
          </VStack>

          <Box position="relative">
            <Box
              position="relative"
              width="400px"
              height="500px"
              mx="auto"
            >
              <Image
                src={heroImage}
                alt="Hero"
                fallbackSrc="https://randomuser.me/api/portraits/lego/8.jpg"
                borderRadius="2xl"
                objectFit="cover"
                width="100%"
                height="100%"
                boxShadow="2xl"
              />
              
              {/* Floating elements */}
              <Box
                position="absolute"
                top="10%"
                right="-20px"
                bg="white"
                p={4}
                borderRadius="lg"
                boxShadow="lg"
                transform="rotate(15deg)"
              >
                <Text fontSize="sm" fontWeight="bold" color="brand.500">
                  React Native
                </Text>
              </Box>
              
              <Box
                position="absolute"
                bottom="20%"
                left="-30px"
                bg="white"
                p={4}
                borderRadius="lg"
                boxShadow="lg"
                transform="rotate(-10deg)"
              >
                <Text fontSize="sm" fontWeight="bold" color="accent.500">
                  Mobile Dev
                </Text>
              </Box>
            </Box>
          </Box>
        </SimpleGrid>
      </Container>

      {/* Scroll indicator */}
      <Box
        position="absolute"
        bottom={8}
        left="50%"
        transform="translateX(-50%)"
        animation="bounce 2s infinite"
      >
        <Icon
          as={FaArrowDown}
          boxSize={6}
          color="gray.400"
          cursor="pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        />
      </Box>
    </Box>
  )
}

export default HeroSection
