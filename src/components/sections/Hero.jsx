import { Box, Button, Flex, Group, Image, Stack, Text, Title } from '@mantine/core';
import heroIllustration from '../../assets/hero.png';

export default function Hero() {
  return (
    <Box bg="brandPink.0" style={{ overflowX: 'clip' }}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align={{ base: 'stretch', md: 'center' }}
        gap={{ base: 32, md: 24 }}
        pl={{ base: 'md', md: 204 }}
        pr={{ base: 'md', md: 0 }}
        py={{ base: 40, md: 40 }}
      >
        <Box maw={{ md: 500 }} style={{ flexShrink: 0 }}>
          <Stack gap={30}>
            <Text component="span" fw={700} fz={16} lh="24px" c="brandGreen.6">
              Welcome
            </Text>

            <Title order={1} c="brandNavy.6" fz={{ base: 40, sm: 48, md: 58 }} lh={1.38}>
              Best Learning Opportunities
            </Title>

            <Text component="p" fw={500} fz={20} lh="30px" c="brandGray.6" maw={340}>
              Our goal is to make online education work for everyone
            </Text>

            <Group gap={10}>
              <Button color="brandGreen" styles={{ root: { height: 52, paddingInline: 40 } }}>
                Join Us
              </Button>
              <Button variant="outline" color="brandGreen" styles={{ root: { height: 52, paddingInline: 40 } }}>
                Learn More
              </Button>
            </Group>
          </Stack>
        </Box>
        <Flex
          justify={{ base: 'center', md: 'flex-end' }}
          style={{ flex: 1, minWidth: 0 }}
        >
          <Image
            src={heroIllustration}
            alt="Student holding folders"
            fit="contain"
            w="100%"
            maw={{ base: 420, sm: 560, md: 704 }}
          />
        </Flex>
      </Flex>
    </Box>
  );
}
