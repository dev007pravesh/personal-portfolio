import React from 'react'
import {
  Box,
  Container,
  VStack,
  HStack,
  SimpleGrid,
  useColorModeValue,
  Badge,
  Icon,
  Divider,
} from '@chakra-ui/react'
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaTrophy } from 'react-icons/fa'
import { portfolioData } from '../../models/portfolioData'
import Heading from '../atoms/Heading'
import CustomText from '../atoms/Text'
import Card from '../atoms/Card'

const ExperienceSection: React.FC = () => {
  const bg = useColorModeValue('gray.50', 'gray.800')

  return (
    <Box id="experience" bg={bg} py={20}>
      <Container maxW="full" px={{ base: 4, md: 8, lg: 12 }}>
        <VStack spacing={16}>
          {/* Section Header */}
          <VStack spacing={6} textAlign="center" maxW="3xl">
            <Heading as="h2" size="2xl">
              Experience & Education
            </Heading>
            <CustomText variant="lead" fontSize="xl" color={useColorModeValue('gray.400', 'gray.300')}>
              My professional journey and academic background that have shaped my career
              in mobile application development.
            </CustomText>
          </VStack>

          {/* Work Experience */}
          <VStack spacing={12} w="full">
            <VStack spacing={8} w="full">
              <HStack spacing={4} color="brand.500">
                <Icon as={FaBriefcase} boxSize={8} />
                <Heading as="h3" size="xl">
                  Work Experience
                </Heading>
              </HStack>

              <VStack spacing={8} w="full">
                {portfolioData.experience.map((exp) => (
                  <Card 
                    key={exp.id} 
                    variant="elevated" 
                    hoverEffect="glow"
                    w="full"
                    position="relative"
                    overflow="hidden"
                    _before={{
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '4px',
                      height: '100%',
                      bgGradient: 'linear(to-b, brand.400, accent.400)',
                      borderRadius: '2px',
                    }}
                  >
                    <VStack spacing={5} align="stretch">
                      <HStack justify="space-between" align="flex-start">
                        <VStack align="flex-start" spacing={3}>
                          <Heading 
                            as="h4" 
                            size="md" 
                            color={useColorModeValue('brand.500', 'brand.400')}
                          >
                            {exp.position}
                          </Heading>
                          <HStack spacing={4} color={useColorModeValue('gray.700', 'gray.300')}>
                            <HStack spacing={2}>
                              <Icon as={FaBriefcase} boxSize={4} />
                              <CustomText variant="caption" fontWeight="semibold">{exp.company}</CustomText>
                            </HStack>
                            <HStack spacing={2}>
                              <Icon as={FaCalendarAlt} boxSize={4} />
                              <CustomText variant="caption" fontWeight="semibold">{exp.duration}</CustomText>
                            </HStack>
                          </HStack>
                        </VStack>
                      </HStack>

                      <CustomText 
                        fontSize="md" 
                        color={useColorModeValue('gray.700', 'gray.200')} 
                        lineHeight="1.6"
                      >
                        {exp.description}
                      </CustomText>

                      <Box>
                        <HStack spacing={2} flexWrap="wrap">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              colorScheme="brand"
                              variant="subtle"
                              borderRadius="full"
                              px={3}
                              py={2}
                              fontSize="sm"
                              fontWeight="medium"
                              bg={useColorModeValue('brand.50', 'brand.900')}
                              color={useColorModeValue('brand.700', 'brand.100')}
                              border="1px solid"
                              borderColor={useColorModeValue('brand.200', 'brand.700')}
                            >
                              {tech}
                            </Badge>
                          ))}
                        </HStack>
                      </Box>

                      <VStack align="flex-start" spacing={3}>
                        <HStack spacing={2} color="brand.500">
                          <Icon as={FaTrophy} boxSize={4} />
                          <CustomText variant="caption" fontWeight="bold" color="brand.500">
                            Key Achievements:
                          </CustomText>
                        </HStack>
                        <VStack align="flex-start" spacing={2}>
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <HStack key={achievementIndex} spacing={3}>
                              <Box
                                w={2}
                                h={2}
                                borderRadius="full"
                                bg="brand.400"
                                boxShadow="0 0 8px rgba(59, 130, 246, 0.4)"
                              />
                              <CustomText 
                                variant="caption" 
                                fontSize="sm" 
                                color={useColorModeValue('gray.700', 'gray.300')}
                              >
                                {achievement}
                              </CustomText>
                            </HStack>
                          ))}
                        </VStack>
                      </VStack>
                    </VStack>
                  </Card>
                ))}
              </VStack>
            </VStack>

            <Divider borderColor={useColorModeValue('gray.300', 'gray.600')} />

            {/* Education */}
            <VStack spacing={8} w="full">
              <HStack spacing={4} color="accent.500">
                <Icon as={FaGraduationCap} boxSize={8} />
                <Heading as="h3" size="xl">
                  Education
                </Heading>
              </HStack>

              <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} w="full">
                {portfolioData.education.map((edu) => (
                  <Card 
                    key={edu.id} 
                    variant="elevated" 
                    hoverEffect="slide"
                    position="relative"
                    overflow="hidden"
                    _before={{
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '3px',
                      bgGradient: 'linear(to-r, accent.400, purple.400)',
                    }}
                  >
                    <VStack spacing={4} align="stretch">
                      <VStack align="flex-start" spacing={3}>
                        <Heading 
                          as="h4" 
                          size="md" 
                          color={useColorModeValue('accent.500', 'accent.400')}
                        >
                          {edu.degree}
                        </Heading>
                        <CustomText 
                          variant="lead" 
                          fontWeight="bold" 
                          color={useColorModeValue('gray.700', 'gray.200')}
                        >
                          {edu.field}
                        </CustomText>
                        <CustomText 
                          variant="body" 
                          color={useColorModeValue('gray.700', 'gray.300')} 
                          fontWeight="medium"
                        >
                          {edu.institution}
                        </CustomText>
                      </VStack>

                      <HStack spacing={4} color={useColorModeValue('gray.700', 'gray.300')}>
                        <HStack spacing={2}>
                          <Icon as={FaCalendarAlt} boxSize={4} />
                          <CustomText variant="caption" fontWeight="semibold">{edu.duration}</CustomText>
                        </HStack>
                      </HStack>

                        <CustomText 
                          variant="body" 
                          color={useColorModeValue('gray.700', 'gray.400')} 
                          lineHeight="1.6"
                      >
                        {edu.description}
                      </CustomText>
                    </VStack>
                  </Card>
                ))}
              </SimpleGrid>
            </VStack>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}

export default ExperienceSection
