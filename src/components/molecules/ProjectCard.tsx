import React from 'react'
import { Box, VStack, HStack, Badge, IconButton, Tooltip, useColorModeValue } from '@chakra-ui/react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import Card from '../atoms/Card'
import Heading from '../atoms/Heading'
import Text from '../atoms/Text'
import { Project } from '../../types/portfolio'

interface ProjectCardProps {
  project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card 
      variant="elevated" 
      hoverEffect="scale"
      overflow="hidden"
      p={0}
      position="relative"
    >
      {/* Project Content */}
      <VStack spacing={5} align="stretch" p={6}>
        <VStack spacing={3} align="flex-start">
          <Heading 
            as="h3" 
            size="lg" 
            color={useColorModeValue('brand.600', 'brand.400')}
          >
            {project.title}
          </Heading>
          
          <Text 
            variant="body" 
            color={useColorModeValue('gray.600', 'gray.300')} 
            lineHeight="1.6"
          >
            {project.description}
          </Text>
        </VStack>
        
        {/* Technology Tags */}
        <Box>
          <HStack spacing={2} flexWrap="wrap">
            {project.technologies.map((tech, index) => (
              <Badge
                key={index}
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
                _hover={{
                  bg: useColorModeValue('brand.100', 'brand.800'),
                  transform: 'translateY(-1px)',
                }}
                transition="all 0.2s ease"
              >
                {tech}
              </Badge>
            ))}
          </HStack>
        </Box>
        
        {/* Action Buttons */}
        <HStack spacing={3} justify="flex-end">
          {project.githubUrl && (
            <Tooltip label="View on GitHub" placement="top">
              <IconButton
                as="a"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                icon={<FaGithub />}
                variant="outline"
                size="md"
                colorScheme="gray"
                borderRadius="full"
                _hover={{
                  bg: 'gray.100',
                  transform: 'scale(1.1)',
                }}
                transition="all 0.2s ease"
              />
            </Tooltip>
          )}
          
          {project.liveUrl && (
            <Tooltip label="View Live Demo" placement="top">
              <IconButton
                as="a"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live Demo"
                icon={<FaExternalLinkAlt />}
                variant="outline"
                size="md"
                colorScheme="brand"
                borderRadius="full"
                _hover={{
                  bg: 'brand.100',
                  transform: 'scale(1.1)',
                }}
                transition="all 0.2s ease"
              />
            </Tooltip>
          )}
        </HStack>
      </VStack>
    </Card>
  )
}

export default ProjectCard
