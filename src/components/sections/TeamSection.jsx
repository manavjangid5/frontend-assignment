import { Box, Button, Container, Stack } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { IconPlus } from '@tabler/icons-react';
import TeamCard from '../common/TeamCard.jsx';
import SectionHeader from '../common/SectionHeader.jsx';
import { useCollection, useEditMode } from '../../context/ContentContext.jsx';
import member1 from '../../assets/team/member-1.jpg';

// Figma cards row: 4 across on desktop with 30px gaps. Mantine's `slideGap`
// handles the spacing (padding + negative margin), so plain percentages sit
// flush: 4 × 25% on md, fewer + a peek on smaller screens.
const SLIDE_GAP = 30;
const slideSize = { base: '85%', xs: '50%', sm: '33.333%', md: '25%' };

export default function TeamSection() {
  const { items, add, remove } = useCollection('team');
  const [editMode] = useEditMode();

  return (
    <Container size={1050} px="md" py={{ base: 56, sm: 80, md: 112 }}>
      <Stack gap={0}>
        <SectionHeader
          eyebrow="Team"
          title="Get Quality Education"
          order={3}
          textMaxWidth={469}
          textFw={500}
        >
          Problems trying to resolve the conflict between the two major realms of
          Classical physics: Newtonian mechanics
        </SectionHeader>

        {/* Figma: 112px between the heading block and the card row. */}
        <Box mt={{ base: 48, md: 112 }}>
          <Carousel
            slideSize={slideSize}
            slideGap={SLIDE_GAP}
            align="start"
            withControls={false}
            withIndicators={false}
            // vertical breathing room so the card drop shadow isn't clipped by
            // the carousel viewport's overflow:hidden (no horizontal change)
            styles={{ viewport: { paddingTop: 6, paddingBottom: 30 } }}
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
