import React from 'react'
import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from '@chakra-ui/react'

export interface ButtonProps extends ChakraButtonProps {
  children: React.ReactNode
  variant?: 'solid' | 'outline' | 'ghost' | 'link'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  target?: string
  rel?: string
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'solid', 
  size = 'md',
  href,
  target,
  rel,
  ...props 
}) => {
  if (href) {
    return (
      <ChakraButton
        as="a"
        href={href}
        target={target}
        rel={rel}
        variant={variant}
        size={size}
        borderRadius="lg"
        fontWeight="semibold"
        transition="all 0.2s"
        _hover={{
          transform: 'translateY(-2px)',
          boxShadow: 'lg',
        }}
        {...props}
      >
        {children}
      </ChakraButton>
    )
  }

  return (
    <ChakraButton
      variant={variant}
      size={size}
      borderRadius="lg"
      fontWeight="semibold"
      transition="all 0.2s"
      _hover={{
        transform: 'translateY(-2px)',
        boxShadow: 'lg',
      }}
      {...props}
    >
      {children}
    </ChakraButton>
  )
}

export default Button
