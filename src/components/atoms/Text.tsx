import React from 'react'
import { Text as ChakraText, TextProps as ChakraTextProps } from '@chakra-ui/react'

export interface TextProps extends ChakraTextProps {
  children: React.ReactNode
  variant?: 'body' | 'caption' | 'lead'
  href?: string
  target?: string
  rel?: string
}

const Text: React.FC<TextProps> = ({ 
  children, 
  variant = 'body',
  href,
  target,
  rel,
  ...props 
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'caption':
        return { fontSize: 'sm', color: 'gray.400' }
      case 'lead':
        return { fontSize: 'lg', color: 'gray.300', fontWeight: 'medium' }
      default:
        return { fontSize: 'md', color: 'gray.300' }
    }
  }

  if (href) {
    return (
      <ChakraText
        as="a"
        href={href}
        target={target}
        rel={rel}
        {...getVariantStyles()}
        lineHeight="relaxed"
        {...props}
      >
        {children}
      </ChakraText>
    )
  }

  return (
    <ChakraText
      {...getVariantStyles()}
      lineHeight="relaxed"
      {...props}
    >
      {children}
    </ChakraText>
  )
}

export default Text
