import { Box, Button, Container, Grid, Group, Image, Stack, Text, Title } from '@mantine/core';
import heroIllustration from '../../assets/hero.png';

export default function Hero() {
  return (
    <Box bg="brandPink.0">
      <Container size={1320} px="md" py={{ base: 40, md: 40 }}>
        <Grid gutter={30} align="center">
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Stack gap={30} maw={573}>
              <Text component="span" fw={700} fz={16} lh="24px" c="brandGreen.6">
                Welcome
              </Text>

              <Title order={1} c="brandNavy.6" fz={{ base: 40, sm: 48, md: 58 }} lh={1.38}>
                Best Learning Opportunities
              </Title>

              <Text component="p" fw={400} fz={20} lh="30px" c="brandGray.6" maw={340}>
                Our goal is to make online education work for everyone
              </Text>

              <Group gap={10}>
                <Button
                  color="brandGreen"
                  styles={{ root: { height: 52, paddingInline: 40 } }}
                >
                  Join Us
                </Button>
                <Button
                  variant="outline"
                  color="brandGreen"
                  styles={{ root: { height: 52, paddingInline: 40 } }}
                >
                  Learn More
                </Button>
              </Group>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 7 }}>
            <Image
              src={heroIllustration}
              alt="Student holding folders"
              fit="contain"
              ml="auto"
              maw={{ base: 420, sm: 560, md: 704 }}
            />
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
