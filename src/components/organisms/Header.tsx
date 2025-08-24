import React from 'react'
import {
  Box,
  Flex,
  HStack,
  Text,
  Button,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Container,
  Avatar,
  Stack,
  Collapse,
  useColorMode,
} from '@chakra-ui/react'
import { useSmoothScroll } from '../../hooks/useSmoothScroll'
import { useScrollHeader } from '../../hooks/useScrollHeader'
import {
  HamburgerIcon,
  CloseIcon,
} from '@chakra-ui/icons'
import { FaSun as FaSunIcon, FaMoon as FaMoonIcon } from 'react-icons/fa'
import { portfolioData } from '../../models/portfolioData'

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const Header: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()
  const { scrollToSection } = useSmoothScroll()
  const { isVisible } = useScrollHeader()
  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('gray.600', 'white')

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      transform={isVisible ? 'translateY(0)' : 'translateY(-100%)'}
      transition="transform 0.3s ease-in-out"
      bg={bg}
      borderBottom={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.700')}
      boxShadow={isVisible ? '0 2px 10px rgba(0,0,0,0.1)' : 'none'}
    >
      <Flex
        color={color}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={'center'}
      >
        <Container maxW="full" px={{ base: 4, md: 8, lg: 12 }}>
          <Flex align={'center'} justify={'space-between'}>
            <Flex align={'center'}>
              <Avatar
                size="sm"
                src={portfolioData.personalInfo.avatar}
                name={portfolioData.personalInfo.name}
                mr={{ base: 2, md: 3 }}
              />
              <Text
                textAlign={useColorModeValue('left', 'left')}
                fontFamily={'heading'}
                color={useColorModeValue('gray.800', 'white')}
                fontWeight="bold"
                fontSize={{ base: 'sm', md: 'lg' }}
              >
                {portfolioData.personalInfo.name}
              </Text>
            </Flex>

            <HStack spacing={{ base: 4, md: 8 }} alignItems={'center'}>
              <HStack
                as={'nav'}
                spacing={{ base: 2, md: 4 }}
                display={{ base: 'none', lg: 'flex' }}
              >
                {NAV_ITEMS.map((navItem) => (
                  <Box key={navItem.label}>
                    <Box
                      as="button"
                      p={2}
                      onClick={() => scrollToSection(navItem.href.replace('#', ''))}
                      fontSize={'sm'}
                      fontWeight={500}
                      color={color}
                      bg="transparent"
                      border="none"
                      cursor="pointer"
                      _hover={{
                        textDecoration: 'none',
                        color: useColorModeValue('gray.800', 'white'),
                      }}
                    >
                      {navItem.label}
                    </Box>
                  </Box>
                ))}
              </HStack>
              
              {/* Medium screen navigation (tablets) */}
              <HStack
                as={'nav'}
                spacing={2}
                display={{ base: 'none', md: 'flex', lg: 'none' }}
              >
                {NAV_ITEMS.slice(0, 3).map((navItem) => (
                  <Box key={navItem.label}>
                    <Box
                      as="button"
                      p={1}
                      onClick={() => scrollToSection(navItem.href.replace('#', ''))}
                      fontSize={'xs'}
                      fontWeight={500}
                      color={color}
                      bg="transparent"
                      border="none"
                      cursor="pointer"
                      _hover={{
                        textDecoration: 'none',
                        color: useColorModeValue('gray.800', 'white'),
                      }}
                    >
                      {navItem.label}
                    </Box>
                  </Box>
                ))}
              </HStack>

              <IconButton
                aria-label="Toggle color mode"
                icon={colorMode === 'light' ? <FaMoonIcon /> : <FaSunIcon />}
                onClick={toggleColorMode}
                variant="ghost"
                size="sm"
              />

              <Button
                as={'a'}
                display={{ base: 'none', lg: 'inline-flex' }}
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                bg={'brand.500'}
                href={portfolioData.personalInfo.resumeUrl}
                target="_blank"
                _hover={{
                  bg: 'brand.600',
                }}
              >
                Download CV
              </Button>
            </HStack>

            <IconButton
              display={{ base: 'flex', lg: 'none' }}
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={5} h={5} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
        </Container>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Box data-mobile-menu>
          <MobileNav />
        </Box>
      </Collapse>
    </Box>
  )
}

const MobileNav = () => {
  const { scrollToSection } = useSmoothScroll()
  
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ lg: 'none' }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} scrollToSection={scrollToSection} />
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ label, href, scrollToSection }: { label: string; href: string; scrollToSection: (sectionId: string) => void }) => {
  return (
    <Stack spacing={4}>
      <Box
        py={2}
        as="button"
        onClick={() => {
          scrollToSection(href.replace('#', ''))
          // Close mobile menu after navigation
          const mobileMenu = document.querySelector('[data-mobile-menu]')
          if (mobileMenu) {
            const closeButton = mobileMenu.querySelector('[aria-label="Toggle Navigation"]') as HTMLElement
            if (closeButton) closeButton.click()
          }
        }}
        justifyContent="space-between"
        alignItems="center"
        bg="transparent"
        border="none"
        cursor="pointer"
        w="full"
        textAlign="left"
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
      </Box>
    </Stack>
  )
}

export default Header
