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

// White circular prev/next controls sit just outside the cards — in the page
// margin (the page's <main> clips any overhang, so no scrollbar). The 20px
// horizontal viewport padding both keeps the card drop shadow from being
// clipped and is matched by the heading's left padding so they line up.
const EDGE_PAD = 20;
const carouselStyles = {
  controls: { insetInline: -(EDGE_PAD + 16) },
  control: {
    backgroundColor: 'var(--mantine-color-white)',
    color: 'var(--mantine-color-brandGreen-6)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
    border: 'none',
    opacity: 1,
  },
  viewport: { padding: `12px ${EDGE_PAD}px 40px` },
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
    <Container size={1150} px="md" py={{ base: 56, sm: 80, md: 112 }}>
      <Stack gap={0}>
        {/* left padding matches the carousel's inner padding so the heading
            lines up with the first card */}
        <Box pl={{ base: 0, sm: EDGE_PAD }}>
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
        </Box>

        {/* Figma: 112px between the heading block and the card row. */}
        <Box mt={{ base: 48, md: 112 }}>
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
