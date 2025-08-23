import React from 'react'
import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  Icon,
  useColorModeValue,
  Divider,
  SimpleGrid,
} from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa'
import { portfolioData } from '../../models/portfolioData'

const Footer: React.FC = () => {
  const bg = useColorModeValue('gray.50', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  
  const socialLinks = [
    {
      icon: FaGithub,
      href: portfolioData.contact.github,
      label: 'GitHub',
      color: 'gray.600'
    },
    {
      icon: FaLinkedin,
      href: portfolioData.contact.linkedin,
      label: 'LinkedIn',
      color: 'blue.600'
    },
    {
      icon: FaTwitter,
      href: portfolioData.contact.twitter,
      label: 'Twitter',
      color: 'blue.400'
    }
  ]

  return (
    <Box bg={bg} borderTop="1px" borderColor={borderColor}>
      <Container maxW="full" px={{ base: 4, md: 8, lg: 12 }} py={12}>
        <VStack spacing={8}>
          {/* Main Footer Content */}
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
            {/* Personal Info */}
            <VStack spacing={4} align="flex-start">
              <Text fontSize="xl" fontWeight="bold" color="brand.500">
                {portfolioData.personalInfo.name}
              </Text>
              <Text color="gray.600" maxW="300px">
                {portfolioData.personalInfo.description}
              </Text>
            </VStack>

            {/* Quick Links */}
            <VStack spacing={4} align="flex-start">
              <Text fontSize="lg" fontWeight="semibold" color="gray.700">
                Quick Links
              </Text>
              <VStack spacing={2} align="flex-start">
                <Text as="a" href="#home" color="gray.600" _hover={{ color: 'brand.500' }}>
                  Home
                </Text>
                <Text as="a" href="#about" color="gray.600" _hover={{ color: 'brand.500' }}>
                  About
                </Text>
                <Text as="a" href="#projects" color="gray.600" _hover={{ color: 'brand.500' }}>
                  Projects
                </Text>
                <Text as="a" href="#contact" color="gray.600" _hover={{ color: 'brand.500' }}>
                  Contact
                </Text>
              </VStack>
            </VStack>

            {/* Contact Info */}
            <VStack spacing={4} align="flex-start">
              <Text fontSize="lg" fontWeight="semibold" color="gray.700">
                Get In Touch
              </Text>
              <VStack spacing={2} align="flex-start">
                <Text color="gray.600">
                  {portfolioData.contact.email}
                </Text>
                {portfolioData.contact.phone && (
                  <Text color="gray.600">
                    {portfolioData.contact.phone}
                  </Text>
                )}
                <Text color="gray.600">
                  {portfolioData.contact.location}
                </Text>
              </VStack>
            </VStack>
          </SimpleGrid>

          <Divider />

          {/* Bottom Footer */}
          <HStack justify="space-between" w="full" flexWrap="wrap">
            <HStack spacing={2}>
              <Text color="gray.600">
                © {new Date().getFullYear()} {portfolioData.personalInfo.name}. All rights reserved.
              </Text>
            </HStack>

            <HStack spacing={6}>
              {socialLinks.map((social) => (
                social.href && (
                  <Icon
                    key={social.label}
                    as={social.icon}
                    boxSize={5}
                    color={social.color}
                    cursor="pointer"
                    _hover={{ transform: 'scale(1.2)' }}
                    transition="transform 0.2s"
                    onClick={() => window.open(social.href, '_blank')}
                  />
                )
              ))}
            </HStack>
          </HStack>

          {/* Made with love */}
          <HStack spacing={2} color="gray.500">
            <Text fontSize="sm">Made with</Text>
            <Icon as={FaHeart} color="red.500" boxSize={4} />
            <Text fontSize="sm">using React & Chakra UI</Text>
          </HStack>
        </VStack>
      </Container>
    </Box>
  )
}

export default Footer
