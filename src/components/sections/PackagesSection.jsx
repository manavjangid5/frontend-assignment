import { Container, Grid, Stack, Text, Title, Divider, Group } from '@mantine/core';
import FeatureCard from '../common/FeatureCard.jsx';
import HoverArrowLink from '../common/HoverArrowLink.jsx';
import { packages } from '../../data/packages.js';

export default function PackagesSection() {
  return (
    <Container size="xl" py={{ base: 40, sm: 60, md: 80 }}>
      <Grid align="center" gutter={{ base: 30, md: 50 }}>
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Stack gap="sm" maw={420}>
            <Divider w={40} size="md" color="brandRed.6" />
            <Title order={2} c="brandNavy.6" fz={{ base: 26, sm: 30 }}>
              Affordable Packages
            </Title>
            <Text c="brandGray.6" size="sm">
              Problems trying to resolve the conflict between the two major realms of
              Classical physics: Newtonian mechanics
            </Text>
            <HoverArrowLink>Learn More</HoverArrowLink>
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 7 }}>
          <Group gap="md" wrap="wrap">
            {packages.map((pkg) => (
              <FeatureCard
                key={pkg.id}
                icon={pkg.icon}
                title={pkg.title}
                description={pkg.description}
              />
            ))}
          </Group>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
