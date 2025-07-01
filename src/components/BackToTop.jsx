import { useEffect, useState } from 'react'
import { IconButton, Box } from '@chakra-ui/react'
import { ArrowUpIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    isVisible && (
      <MotionBox
        position="fixed"
        bottom="30px"
        right="30px"
        zIndex="1000"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <IconButton
          icon={<ArrowUpIcon />}
          colorScheme="blue"
          aria-label="Back to top"
          borderRadius="full"
          size="lg"
          boxShadow="lg"
          onClick={scrollToTop}
        />
      </MotionBox>
    )
  )
}
