import { Container, Stack, Text, Title, Divider } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import TeamCard from '../common/TeamCard.jsx';
import { team } from '../../data/team.js';

export default function TeamSection() {
  return (
    <Container size="xl" py={{ base: 40, sm: 60, md: 80 }}>
      <Stack gap="sm" maw={420} mb="xl">
        <Text c="brandGreen.6" fw={600} size="sm">
          Team
        </Text>
        <Title order={2} c="brandNavy.6" fz={{ base: 26, sm: 30 }}>
          Get Quality Education
        </Title>
        <Text c="brandGray.6" size="sm">
          Problems trying to resolve the conflict between the two major realms of
          Classical physics: Newtonian mechanics
        </Text>
      </Stack>

      <Carousel
        slideSize={{ base: '85%', xs: '45%', sm: '32%', md: '24%' }}
        slideGap="md"
        align="start"
        withControls
        withIndicators={false}
        controlsOffset="xs"
      >
        {team.map((member) => (
          <Carousel.Slide key={member.id}>
            <TeamCard
              name={member.name}
              role={member.role}
              photo={member.photo}
              socials={member.socials}
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Container>
  );
}
