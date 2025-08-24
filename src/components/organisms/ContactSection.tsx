import React, { useState } from 'react'
import {
  Box,
  Container,
  VStack,
  HStack,
  SimpleGrid,
  useColorModeValue,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Icon,
  useToast,
} from '@chakra-ui/react'
import emailjs from '@emailjs/browser'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { portfolioData } from '../../models/portfolioData'
import Heading from '../atoms/Heading'
import CustomText from '../atoms/Text'
import CustomButton from '../atoms/Button'
import Card from '../atoms/Card'

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const bg = useColorModeValue('white', 'gray.900')
  const toast = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Use environment variables for EmailJS keys
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Debug: log env values (remove in production)
    console.log('SERVICE_ID:', SERVICE_ID, 'TEMPLATE_ID:', TEMPLATE_ID, 'PUBLIC_KEY:', PUBLIC_KEY);

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setIsSubmitting(false);
      toast({
        title: "Configuration Error",
        description: "EmailJS environment variables are missing. Please check your .env file and restart the server.",
        status: "error",
        duration: 7000,
        isClosable: true,
      });
      return;
    }

    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      PUBLIC_KEY
    )
      .then(() => {
        setIsSubmitting(false)
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon!",
          status: "success",
          duration: 5000,
          isClosable: true,
        })
        setFormData({ name: '', email: '', subject: '', message: '' })
      })
      .catch((error) => {
        setIsSubmitting(false)
        console.error('EmailJS error:', error);
        toast({
          title: "Error",
          description: "There was a problem sending your message. Please try again later.",
          status: "error",
          duration: 5000,
          isClosable: true,
        })
      })
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: portfolioData.contact.email,
      href: `mailto:${portfolioData.contact.email}`,
      color: 'brand.500'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: portfolioData.contact.phone,
      href: `tel:${portfolioData.contact.phone}`,
      color: 'green.500'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: portfolioData.contact.location,
      href: '#',
      color: 'orange.500'
    }
  ]

  const socialLinks = [
    {
      icon: FaGithub,
      label: 'GitHub',
      href: portfolioData.contact.github,
      color: 'gray.600'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      href: portfolioData.contact.linkedin,
      color: 'blue.600'
    },
    {
      icon: FaTwitter,
      label: 'Twitter',
      href: portfolioData.contact.twitter,
      color: 'blue.400'
    }
  ]

  return (
    <Box id="contact" bg={bg} py={20}>
      <Container maxW="full" px={{ base: 4, md: 8, lg: 12 }}>
        <VStack spacing={16}>
          {/* Section Header */}
          <VStack spacing={6} textAlign="center" maxW="3xl">
            <Heading as="h2" size="2xl">
              Get In Touch
            </Heading>
            <CustomText variant="lead" fontSize="xl" color={useColorModeValue('gray.400', 'gray.300')}>
              I'm always open to discussing new opportunities, interesting mobile app projects,
              or just having a chat about React Native development and mobile technology.
            </CustomText>
          </VStack>

          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} w="full">
            {/* Contact Form */}
            <VStack spacing={6} align="stretch">
              <Heading as="h3" size="lg" color="brand.500">
                Send a Message
              </Heading>
              
              <Card variant="elevated" hoverEffect="glow">
                <form onSubmit={handleSubmit}>
                  <VStack spacing={6}>
                    <FormControl isRequired>
                      <FormLabel fontWeight="semibold" color={useColorModeValue('gray.700', 'gray.200')}>Name</FormLabel>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        size="lg"
                        borderRadius="xl"
                        border="2px solid"
                        borderColor={useColorModeValue('gray.200', 'gray.600')}
                        _focus={{
                          borderColor: 'brand.400',
                          boxShadow: '0 0 0 1px var(--chakra-colors-brand-400)',
                        }}
                        _hover={{
                          borderColor: 'brand.300',
                        }}
                        transition="all 0.2s ease"
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel fontWeight="semibold" color={useColorModeValue('gray.700', 'gray.200')}>Email</FormLabel>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        size="lg"
                        borderRadius="xl"
                        border="2px solid"
                        borderColor={useColorModeValue('gray.200', 'gray.600')}
                        _focus={{
                          borderColor: 'brand.400',
                          boxShadow: '0 0 0 1px var(--chakra-colors-brand-400)',
                        }}
                        _hover={{
                          borderColor: 'brand.300',
                        }}
                        transition="all 0.2s ease"
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel fontWeight="semibold" color={useColorModeValue('gray.700', 'gray.200')}>Subject</FormLabel>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        size="lg"
                        borderRadius="xl"
                        border="2px solid"
                        borderColor={useColorModeValue('gray.200', 'gray.600')}
                        _focus={{
                          borderColor: 'brand.400',
                          boxShadow: '0 0 0 1px var(--chakra-colors-brand-400)',
                        }}
                        _hover={{
                          borderColor: 'brand.300',
                        }}
                        transition="all 0.2s ease"
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel fontWeight="semibold" color={useColorModeValue('gray.700', 'gray.200')}>Message</FormLabel>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me more about your project or inquiry..."
                        size="lg"
                        borderRadius="xl"
                        border="2px solid"
                        borderColor={useColorModeValue('gray.200', 'gray.600')}
                        rows={6}
                        resize="vertical"
                        _focus={{
                          borderColor: 'brand.400',
                          boxShadow: '0 0 0 1px var(--chakra-colors-brand-400)',
                        }}
                        _hover={{
                          borderColor: 'brand.300',
                        }}
                        transition="all 0.2s ease"
                      />
                    </FormControl>

                    <CustomButton
                      type="submit"
                      isLoading={isSubmitting}
                      loadingText="Sending..."
                      size="lg"
                      w="full"
                      bgGradient="linear(to-r, brand.500, brand.600)"
                      color="white"
                      borderRadius="xl"
                      py={6}
                      fontSize="lg"
                      fontWeight="bold"
                      _hover={{
                        bgGradient: "linear(to-r, brand.600, brand.700)",
                        transform: "translateY(-2px)",
                        boxShadow: "xl",
                      }}
                      _active={{
                        transform: "translateY(0)",
                      }}
                    >
                      Send Message
                    </CustomButton>
                  </VStack>
                </form>
              </Card>
            </VStack>

            {/* Contact Information */}
            <VStack spacing={8} align="stretch">
              <Heading as="h3" size="lg" color="accent.500">
                Contact Information
              </Heading>

              <VStack spacing={6} align="stretch">
                {contactInfo.map((info) => (
                  info.value && (
                    <Card 
                      key={info.label} 
                      variant="elevated" 
                      hoverEffect="slide"
                      position="relative"
                      overflow="hidden"
                      _before={{
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '4px',
                        height: '100%',
                        bg: info.color,
                        borderRadius: '2px',
                      }}
                    >
                      <HStack spacing={4}>
                        <Box
                          p={3}
                          borderRadius="xl"
                          bg={useColorModeValue('gray.100', 'gray.700')}
                          color={info.color}
                          transition="all 0.3s ease"
                          _hover={{
                            transform: 'scale(1.1) rotate(5deg)',
                            bg: useColorModeValue('gray.200', 'gray.600'),
                          }}
                        >
                          <Icon as={info.icon} boxSize={5} />
                        </Box>
                        <VStack align="flex-start" spacing={1}>
                          <CustomText 
                            variant="caption" 
                            fontWeight="bold" 
                            color={useColorModeValue('gray.500', 'gray.400')} 
                            textTransform="uppercase" 
                            letterSpacing="wider"
                          >
                            {info.label}
                          </CustomText>
                          <CustomText
                            as="a"
                            href={info.href}
                            color="brand.500"
                            fontWeight="semibold"
                            fontSize="md"
                            _hover={{ 
                              textDecoration: 'underline',
                              color: 'brand.600',
                            }}
                            transition="color 0.2s ease"
                          >
                            {info.value}
                          </CustomText>
                        </VStack>
                      </HStack>
                    </Card>
                  )
                ))}
              </VStack>

              {/* Social Links */}
              <VStack spacing={4} align="stretch">
                <CustomText variant="caption" fontWeight="bold" color={useColorModeValue('gray.500', 'gray.400')} textTransform="uppercase" letterSpacing="wider">
                  Follow me on social media
                </CustomText>
                
                <HStack spacing={4}>
                  {socialLinks.map((social) => (
                    social.href && (
                      <CustomButton
                        key={social.label}
                        as="a"
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outline"
                        size="lg"
                        color={social.color}
                        borderColor={social.color}
                        borderRadius="xl"
                        px={6}
                        py={4}
                        _hover={{
                          bg: social.color,
                          color: 'white',
                          transform: 'translateY(-3px)',
                          boxShadow: 'lg',
                        }}
                        transition="all 0.3s ease"
                      >
                        <Icon as={social.icon} boxSize={5} />
                      </CustomButton>
                    )
                  ))}
                </HStack>
              </VStack>

              {/* Additional Info */}
              <Card variant="elevated" hoverEffect="glow" w="full" maxW="4xl">
                <VStack spacing={6} textAlign="center">
                  <Heading as="h4" size="lg" color="brand.500">
                    Let's Work Together
                  </Heading>
                  <CustomText color={useColorModeValue('gray.600', 'gray.300')} lineHeight="1.6">
                    Whether you have a project in mind, want to discuss opportunities,
                    or just want to say hello, I'd love to hear from you!
                  </CustomText>
                </VStack>
              </Card>
            </VStack>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}

export default ContactSection
