import { Box, Container, Grid, Stack, Text, Title, Button, Image } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';

export default function Hero() {
  return (
    <Box bg="brandPink.0">
      <Container size="xl" py={{ base: 40, sm: 60, md: 80 }}>
        <Grid align="center" gutter={{ base: 40, md: 60 }}>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="md" maw={480}>
              <Text c="brandGreen.6" fw={600} size="sm">
                Welcome
              </Text>
              <Title order={1} c="brandNavy.6" fz={{ base: 32, sm: 40, md: 48 }} lh={1.15}>
                Best Learning Opportunities
              </Title>
              <Text c="brandGray.6" size="md">
                Our goal is to make online education work for everyone
              </Text>
              <Box mt="sm">
                <Button
                  color="brandGreen"
                  radius="sm"
                  mr="sm"
                  rightSection={<IconArrowRight size={16} />}
                >
                  Join Us
                </Button>
                <Button variant="outline" color="brandGreen" radius="sm">
                  Learn More
                </Button>
              </Box>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80"
              alt="Student holding books"
              radius="md"
              fit="cover"
              h={{ base: 300, sm: 400, md: 460 }}
            />
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
