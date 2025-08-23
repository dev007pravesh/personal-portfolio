import React, { useState } from 'react'
import {
  Box,
  Container,
  VStack,
  HStack,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react'
import { portfolioData } from '../../models/portfolioData'
import Heading from '../atoms/Heading'
import CustomText from '../atoms/Text'
import ProjectCard from '../molecules/ProjectCard'
import CustomButton from '../atoms/Button'

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all')
  const bg = useColorModeValue('white', 'gray.900')
  
  const filteredProjects = filter === 'featured' 
    ? portfolioData.projects.filter(project => project.featured)
    : portfolioData.projects

  return (
    <Box id="projects" bg={bg} py={20}>
      <Container maxW="full" px={{ base: 4, md: 8, lg: 12 }}>
        <VStack spacing={16}>
          {/* Section Header */}
          <VStack spacing={6} textAlign="center" maxW="3xl">
            <Heading as="h2" size="2xl">
              Mobile App Portfolio
            </Heading>
            <CustomText variant="lead" fontSize="xl" color={useColorModeValue('gray.400', 'gray.300')}>
              Here are some of the mobile applications I've developed. Each app showcases my expertise
              in React Native development and cross-platform mobile solutions.
            </CustomText>
          </VStack>

          {/* Filter Buttons */}
          <HStack spacing={4}>
            <CustomButton
              variant={filter === 'all' ? 'solid' : 'outline'}
              onClick={() => setFilter('all')}
              size="lg"
            >
              All Projects ({portfolioData.projects.length})
            </CustomButton>
            <CustomButton
              variant={filter === 'featured' ? 'solid' : 'outline'}
              onClick={() => setFilter('featured')}
              size="lg"
            >
              Featured ({portfolioData.projects.filter(p => p.featured).length})
            </CustomButton>
          </HStack>

          {/* Projects Grid */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </SimpleGrid>

          {/* Call to Action */}
          <Box
            bg={useColorModeValue('gray.50', 'gray.700')}
            p={8}
            borderRadius="xl"
            textAlign="center"
            maxW="2xl"
          >
            <VStack spacing={6}>
              <Heading as="h3" size="lg" color="brand.500">
                Have a Project in Mind?
              </Heading>
              <CustomText color={useColorModeValue('gray.400', 'gray.300')}>
                I'm always interested in new opportunities and exciting projects.
                Let's discuss how we can work together to bring your ideas to life.
              </CustomText>
              <CustomButton
                size="lg"
                px={8}
                py={6}
                bgGradient="linear(to-r, brand.500, brand.600)"
                color="white"
                _hover={{
                  bgGradient: "linear(to-r, brand.600, brand.700)",
                  transform: "translateY(-2px)",
                  boxShadow: "xl",
                }}
              >
                Let's Talk
              </CustomButton>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default ProjectsSection
