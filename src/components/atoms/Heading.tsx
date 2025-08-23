import React from 'react'
import { Heading as ChakraHeading, HeadingProps as ChakraHeadingProps } from '@chakra-ui/react'

export interface HeadingProps extends ChakraHeadingProps {
  children: React.ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const Heading: React.FC<HeadingProps> = ({ 
  children, 
  as = 'h2',
  ...props 
}) => {
  return (
    <ChakraHeading
      as={as}
      fontWeight="bold"
      lineHeight="tight"
      letterSpacing="tight"
      {...props}
    >
      {children}
    </ChakraHeading>
  )
}

export default Heading
