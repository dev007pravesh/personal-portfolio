import React from 'react'
import {
  Box,
  Container,
  VStack,
  SimpleGrid,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react'
import { FaUser, FaCode, FaMobile, FaRocket } from 'react-icons/fa'
import { portfolioData } from '../../models/portfolioData'
import Heading from '../atoms/Heading'
import CustomText from '../atoms/Text'
import Card from '../atoms/Card'

const AboutSection: React.FC = () => {
  const bg = useColorModeValue('white', 'gray.900')

  const aboutFeatures = [
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code that follows best practices.',
      color: 'brand.500'
    },
    {
      icon: FaMobile,
      title: 'Mobile First',
      description: 'Specialized in React Native development with focus on cross-platform mobile applications.',
      color: 'accent.500'
    },
    {
      icon: FaRocket,
      title: 'Performance',
      description: 'Optimizing apps for speed, efficiency, and smooth user experience across all devices.',
      color: 'green.500'
    },
    {
      icon: FaUser,
      title: 'User Centered',
      description: 'Designing intuitive interfaces that prioritize user experience and accessibility.',
      color: 'purple.500'
    }
  ]

  return (
    <Box id="about" bg={bg} py={20}>
      <Container maxW="full" px={{ base: 4, md: 8, lg: 12 }}>
        <VStack spacing={16}>
          {/* Section Header */}
          <VStack spacing={6} textAlign="center" maxW="3xl">
            <Heading as="h2" size="2xl">
              About Me
            </Heading>
            <CustomText variant="lead" fontSize="xl" color={useColorModeValue('gray.400', 'gray.300')}>
              {portfolioData.personalInfo.about}
            </CustomText>
          </VStack>

          {/* About Features */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} w="full">
            {aboutFeatures.map((feature, index) => (
              <Card 
                key={index} 
                variant="elevated" 
                hoverEffect="glow"
                textAlign="center"
                position="relative"
                overflow="hidden"
                _before={{
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '3px',
                  bg: feature.color,
                }}
              >
                <VStack spacing={4}>
                  <Box
                    p={4}
                    borderRadius="xl"
                    bg={useColorModeValue('gray.100', 'gray.700')}
                    color={feature.color}
                    transition="all 0.3s ease"
                    _hover={{
                      transform: 'scale(1.1) rotate(5deg)',
                      bg: useColorModeValue('gray.200', 'gray.600'),
                    }}
                  >
                    <Icon as={feature.icon} boxSize={8} />
                  </Box>
                  
                  <Heading 
                    as="h3" 
                    size="md" 
                    color={useColorModeValue(feature.color, `${feature.color.split('.')[0]}.400` as any)}
                  >
                    {feature.title}
                  </Heading>
                  
                    <CustomText 
                      variant="body" 
                      color={useColorModeValue('gray.700', 'gray.400')} 
                      lineHeight="1.6"
                  >
                    {feature.description}
                  </CustomText>
                </VStack>
              </Card>
            ))}
          </SimpleGrid>

          {/* Additional Info */}
          <Card variant="elevated" hoverEffect="glow" w="full" maxW="4xl">
            <VStack spacing={6} textAlign="center">
              <Heading as="h3" size="lg" color="brand.500">
                My Approach to Development
              </Heading>
              <CustomText variant="body" fontSize="lg" color={useColorModeValue('gray.700', 'gray.400')} lineHeight="1.6">
                I believe in creating mobile applications that not only meet functional requirements 
                but also provide exceptional user experiences. My development process focuses on 
                clean architecture, performance optimization, and continuous learning to stay 
                updated with the latest mobile development trends and technologies.
              </CustomText>
            </VStack>
          </Card>
        </VStack>
      </Container>
    </Box>
  )
}

export default AboutSection
