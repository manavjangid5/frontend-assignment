import { Box, Button, Container, Stack } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { IconPlus } from '@tabler/icons-react';
import TeamCard from '../common/TeamCard.jsx';
import SectionHeader from '../common/SectionHeader.jsx';
import { useCollection, useEditMode } from '../../context/ContentContext.jsx';
import member1 from '../../assets/team/member-1.jpg';

export default function TeamSection() {
  const { items, add, remove } = useCollection('team');
  const [editMode] = useEditMode();

  return (
    <Container size={1050} px="md" py={{ base: 56, sm: 80, md: 112 }}>
      <Stack gap={{ base: 48, md: 112 }}>
        <SectionHeader eyebrow="Team" title="Get Quality Education" order={3} textMaxWidth={469}>
          Problems trying to resolve the conflict between the two major realms of
          Classical physics: Newtonian mechanics
        </SectionHeader>

        <Box>
          <Carousel
            slideSize={{ base: '80%', xs: '50%', sm: '33.333%', md: '25%' }}
            slideGap={30}
            align="start"
            withIndicators={false}
          >
            {items.map((member) => (
              <Carousel.Slide key={member.id}>
                <TeamCard
                  name={member.name}
                  role={member.role}
                  photo={member.photo}
                  onRemove={editMode ? () => remove(member.id) : undefined}
                />
              </Carousel.Slide>
            ))}
          </Carousel>

          {editMode && (
            <Button
              mt="lg"
              variant="light"
              color="brandGreen"
              leftSection={<IconPlus size={16} />}
              onClick={() =>
                add({ name: 'New Member', role: 'Profession', photo: member1 })
              }
            >
              Add member
            </Button>
          )}
        </Box>
      </Stack>
    </Container>
  );
}
