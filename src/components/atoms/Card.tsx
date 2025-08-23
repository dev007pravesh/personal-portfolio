import React from 'react'
import { Box, BoxProps, useColorModeValue } from '@chakra-ui/react'

export interface CardProps extends BoxProps {
  children: React.ReactNode
  variant?: 'elevated' | 'outline' | 'filled' | 'gradient' | 'glass'
  hoverEffect?: 'lift' | 'glow' | 'scale' | 'slide'
}

const Card: React.FC<CardProps> = ({ 
  children, 
  variant = 'elevated',
  hoverEffect = 'lift',
  ...props 
}) => {
  const bg = useColorModeValue('white', 'gray.800')
  const shadowColor = useColorModeValue('rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.3)')
  const hoverShadowColor = useColorModeValue('rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.5)')
  
  const getVariantStyles = () => {
    switch (variant) {
      case 'outline':
        return {
          border: '2px solid',
          borderColor: 'brand.200',
          bg: 'transparent',
          backdropFilter: 'blur(10px)',
        }
      case 'filled':
        return {
          bg: useColorModeValue('gray.50', 'gray.700'),
          border: '1px solid',
          borderColor: useColorModeValue('gray.200', 'gray.600'),
        }
      case 'gradient':
        return {
          bgGradient: 'linear(to-br, white, gray.50)',
          border: '1px solid',
          borderColor: useColorModeValue('gray.200', 'gray.600'),
          _dark: {
            bgGradient: 'linear(to-br, gray.800, gray.700)',
          }
        }
      case 'glass':
        return {
          bg: useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(45, 55, 72, 0.8)'),
          backdropFilter: 'blur(20px)',
          border: '1px solid',
          borderColor: useColorModeValue('rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.1)'),
        }
      default:
        return {
          bg: bg,
          boxShadow: `0 4px 6px ${shadowColor}, 0 1px 3px ${shadowColor}`,
          border: '1px solid',
          borderColor: useColorModeValue('gray.100', 'gray.700'),
        }
    }
  }

  const getHoverEffect = () => {
    switch (hoverEffect) {
      case 'glow':
        return {
          _hover: {
            boxShadow: `0 0 20px ${useColorModeValue('rgba(59, 130, 246, 0.3)', 'rgba(59, 130, 246, 0.4)')}`,
            borderColor: 'brand.300',
            transform: 'translateY(-3px)',
          }
        }
      case 'scale':
        return {
          _hover: {
            transform: 'scale(1.03)',
            boxShadow: `0 10px 30px ${hoverShadowColor}`,
          }
        }
      case 'slide':
        return {
          _hover: {
            transform: 'translateY(-5px)',
            boxShadow: `0 15px 35px ${hoverShadowColor}`,
          }
        }
      default: // lift
        return {
          _hover: {
            transform: 'translateY(-5px)',
            boxShadow: `0 15px 35px ${hoverShadowColor}`,
            borderColor: useColorModeValue('gray.300', 'gray.600'),
          }
        }
    }
  }

  return (
    <Box
      borderRadius="2xl"
      p={6}
      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      position="relative"
      overflow="hidden"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        bgGradient: 'linear(to-r, brand.400, accent.400)',
        opacity: 0,
        transition: 'opacity 0.3s ease',
        zIndex: 0,
        pointerEvents: 'none',
      }}
      {...getVariantStyles()}
      {...getHoverEffect()}
      {...props}
      _hover={{
        _before: {
          opacity: 1,
        }
      }}
    >
      <Box position="relative" zIndex={1}>
        {children}
      </Box>
    </Box>
  )
}

export default Card
