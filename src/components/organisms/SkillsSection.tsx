import React from 'react'
import {
  Box,
  Container,
  VStack,
  HStack,
  SimpleGrid,
  useColorModeValue,
  Badge,
} from '@chakra-ui/react'
import { portfolioData } from '../../models/portfolioData'
import Heading from '../atoms/Heading'
import CustomText from '../atoms/Text'
import SkillCard from '../molecules/SkillCard'

const SkillsSection: React.FC = () => {
  const bg = useColorModeValue('gray.50', 'gray.800')
  
  const skillCategories = [
    { name: 'Mobile Development', category: 'mobile' as const },
    { name: 'Frontend', category: 'frontend' as const },
    { name: 'Backend', category: 'backend' as const },
    { name: 'DevOps', category: 'devops' as const },
    { name: 'Other', category: 'other' as const },
  ]

  const getSkillsByCategory = (category: string) => {
    return portfolioData.skills.filter(skill => skill.category === category)
  }

  return (
    <Box id="skills" bg={bg} py={20}>
      <Container maxW="full" px={{ base: 4, md: 8, lg: 12 }}>
        <VStack spacing={16}>
          {/* Section Header */}
          <VStack spacing={6} textAlign="center" maxW="3xl">
            <Heading as="h2" size="2xl">
              Skills & Expertise
            </Heading>
            <CustomText variant="lead" fontSize="xl" color={useColorModeValue('gray.400', 'gray.300')}>
              I've worked with a variety of mobile development technologies and frameworks to create amazing cross-platform applications.
              Here's what I bring to the table:
            </CustomText>
          </VStack>

          {/* Skills Grid by Category */}
          <VStack spacing={12} w="full">
            {skillCategories.map(({ name, category }) => {
              const skills = getSkillsByCategory(category)
              if (skills.length === 0) return null

              return (
                <Box key={category} w="full">
                  <VStack spacing={6} align="stretch">
                    <HStack justify="space-between" align="center">
                      <Heading as="h3" size="lg" color="brand.500">
                        {name}
                      </Heading>
                      <Badge
                        colorScheme="brand"
                        variant="subtle"
                        px={3}
                        py={1}
                        borderRadius="full"
                        fontSize="sm"
                      >
                        {skills.length} skills
                      </Badge>
                    </HStack>
                    
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                      {skills.map((skill) => (
                        <SkillCard key={skill.id} skill={skill} />
                      ))}
                    </SimpleGrid>
                  </VStack>
                </Box>
              )
            })}
          </VStack>

          {/* Additional Info */}
          <Box
            bg={useColorModeValue('white', 'gray.700')}
            p={8}
            borderRadius="xl"
            boxShadow="lg"
            textAlign="center"
            maxW="2xl"
          >
            <VStack spacing={4}>
              <Heading as="h3" size="md" color="brand.500">
                Always Learning
              </Heading>
              <CustomText color={useColorModeValue('gray.400', 'gray.300')}>
                Technology evolves rapidly, and I'm committed to staying current with the latest trends,
                tools, and best practices in software development.
              </CustomText>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default SkillsSection
