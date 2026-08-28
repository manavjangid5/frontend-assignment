import { useEffect, useState } from 'react';
import { Box, Button, Container, Stack } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { IconPlus } from '@tabler/icons-react';
import TeamCard from '../common/TeamCard.jsx';
import SectionHeader from '../common/SectionHeader.jsx';
import { useCollection, useEditMode } from '../../context/ContentContext.jsx';
import member1 from '../../assets/team/member-1.jpg';

// Figma cards row: 4 across on desktop with 30px gaps; fewer + a peek on
// smaller screens.
const SLIDE_GAP = 30;
const slideSize = { base: '85%', xs: '50%', sm: '33.333%', md: '25%' };

// White circular prev/next controls pushed OUT beyond the slides (into the
// wrapper's side padding) so they don't sit on the photos. Viewport padding
// on every side keeps the card drop shadow from being clipped.
const carouselStyles = {
  controls: { insetInline: -42 },
  control: {
    backgroundColor: 'var(--mantine-color-white)',
    color: 'var(--mantine-color-brandGreen-6)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
    border: 'none',
    opacity: 1,
  },
  viewport: { padding: '12px 22px 40px' },
};

export default function TeamSection() {
  const { items, add, remove } = useCollection('team');
  const [editMode] = useEditMode();
  const [embla, setEmbla] = useState(null);

  // Re-measure when members are added / removed so the new slide is reachable.
  useEffect(() => {
    embla?.reInit();
  }, [embla, items.length]);

  return (
    <Container size={1150} px="md" py={{ base: 56, sm: 80, md: 112 }} style={{ overflowX: 'clip' }}>
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

        {/* Figma: 112px between the heading block and the card row.
            Side padding houses the prev/next controls. */}
        <Box mt={{ base: 48, md: 112 }} px={{ base: 0, sm: 48 }}>
          <Carousel
            getEmblaApi={setEmbla}
            slideSize={slideSize}
            slideGap={SLIDE_GAP}
            align="start"
            controlSize={40}
            withControls={editMode || items.length > 4}
            withIndicators={false}
            styles={carouselStyles}
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
              onClick={() => add({ name: 'New Member', role: 'Profession', photo: member1 })}
            >
              Add member
            </Button>
          )}
        </Box>
      </Stack>
    </Container>
  );
}
