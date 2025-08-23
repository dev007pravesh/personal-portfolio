import React from 'react'
import { Progress, VStack, HStack, Icon, Box, useColorModeValue } from '@chakra-ui/react'
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaMobile, FaDatabase, FaCode } from 'react-icons/fa'
import { SiTypescript, SiGraphql, SiJavascript, SiRedux, SiGit, SiJest, SiXcode, SiAndroidstudio } from 'react-icons/si'
import { MdDesignServices, MdApi } from 'react-icons/md'
import Card from '../atoms/Card'
import Text from '../atoms/Text'
import { Skill } from '../../types/portfolio'

interface SkillCardProps {
  skill: Skill
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const getIcon = (iconName: string) => {
    const iconMap: { [key: string]: any } = {
      react: FaReact,
      typescript: SiTypescript,
      javascript: SiJavascript,
      nodejs: FaNodeJs,
      python: FaPython,
      aws: FaAws,
      docker: FaDocker,
      mobile: FaMobile,
      graphql: SiGraphql,
      database: FaDatabase,
      redux: SiRedux,
      zustand: FaCode,
      git: SiGit,
      testing: SiJest,
      design: MdDesignServices,
      api: MdApi,
      ios: SiXcode,
      android: SiAndroidstudio,
      other: FaCode
    }
    return iconMap[iconName] || FaCode
  }

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      frontend: '#3182ce', // blue.500
      backend: '#38a169', // green.500
      mobile: '#805ad5', // purple.500
      devops: '#dd6b20', // orange.500
      other: '#718096' // gray.500
    }
    return colorMap[category] || '#718096'
  }

  const getGradientColor = (category: string) => {
    const gradientMap: { [key: string]: string } = {
      frontend: 'linear(to-r, blue.400, blue.600)',
      backend: 'linear(to-r, green.400, green.600)',
      mobile: 'linear(to-r, purple.400, purple.600)',
      devops: 'linear(to-r, orange.400, orange.600)',
      other: 'linear(to-r, gray.400, gray.600)'
    }
    return gradientMap[category] || 'linear(to-r, gray.400, gray.600)'
  }

  // Top border color for hover
  const topBorderColor = getCategoryColor(skill.category)
  const glowColor = getCategoryColor(skill.category)

  return (
    <Card 
      variant="elevated" 
      hoverEffect="lift"
      p={5}
      position="relative"
      overflow="hidden"
      className="skill-card"
      borderRadius="2xl"
      sx={{
        transition: 'all 0.3s cubic-bezier(.4,0,.2,1)',
        boxShadow: useColorModeValue('0 4px 16px 0 rgba(31,38,135,0.08)', '0 4px 16px 0 rgba(0,0,0,0.18)'),
        borderTop: '4px solid',
        borderTopColor: useColorModeValue('transparent', 'transparent'),
        borderTopLeftRadius: '1rem',
        borderTopRightRadius: '1rem',
        borderRadius: '2xl',
        '&:hover': {
          borderTopColor: topBorderColor,
          background: useColorModeValue('white', 'gray.800'),
          boxShadow: `0 8px 32px 0 rgba(31,38,135,0.10), 0 0 0 4px ${glowColor}33`, // subtle shadow + colored glow
        },
      }}
    >
      <VStack spacing={4} align="stretch">
        <HStack justify="space-between" align="center">
          <HStack spacing={3}>
            <Box
              p={2}
              borderRadius="xl"
              bg={useColorModeValue('gray.100', 'gray.700')}
              color={glowColor}
              transition="all 0.3s ease"
              _hover={{
                transform: 'scale(1.1) rotate(5deg)',
                bg: useColorModeValue('gray.200', 'gray.600'),
              }}
            >
              <Icon 
                as={getIcon(skill.icon)} 
                boxSize={5}
              />
            </Box>
            <Text 
              fontWeight="bold" 
              fontSize="lg"
              color={useColorModeValue('gray.900', 'white')}
            >
              {skill.name}
            </Text>
          </HStack>
          <Box
            px={3}
            py={1}
            borderRadius="full"
            bg={glowColor}
            color="white"
            fontSize="sm"
            fontWeight="bold"
            boxShadow="md"
          >
            {skill.proficiency}%
          </Box>
        </HStack>
        
        <Box position="relative">
          <Progress 
            value={skill.proficiency} 
            colorScheme={skill.category.split('.')[0] as any}
            borderRadius="full"
            size="lg"
            height="8px"
            bg={useColorModeValue('gray.200', 'gray.600')}
            sx={{
              '& > div': {
                backgroundImage: getGradientColor(skill.category),
                boxShadow: `0 0 8px ${glowColor}`,
              }
            }}
          />
        </Box>
        
        <Box
          px={3}
          py={2}
          borderRadius="lg"
          bg={useColorModeValue('gray.50', 'gray.700')}
          border="1px solid"
          borderColor={useColorModeValue('gray.200', 'gray.600')}
          textAlign="center"
        >
          <Text 
            variant="caption" 
            color={glowColor} 
            textTransform="capitalize"
            fontWeight="semibold"
            fontSize="xs"
          >
            {skill.category}
          </Text>
        </Box>
      </VStack>
    </Card>
  )
}

export default SkillCard
