import { useEffect, useState } from 'react';
import { Box, Button, Container, Group, Text, Stack } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { IconPlus } from '@tabler/icons-react';
import TeamCard from '../common/TeamCard.jsx';
import SectionHeader from '../common/SectionHeader.jsx';
import { useCollection, useEditMode } from '../../context/ContentContext.jsx';
import member1 from '../../assets/team/member-1.jpg';

const SLIDE_GAP = 30;
const slideSize = { base: '85%', xs: '50%', sm: '33.333%', md: '25%' };

// White circular prev/next controls sit just outside the cards - in the page
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
  // True whenever the cards don't all fit and there is something to scroll to
  // (depends on the current screen width, not just the item count).
  const [overflows, setOverflows] = useState(false);

  // Re-measure when members are added / removed so the new slide is reachable.
  useEffect(() => {
    embla?.reInit();
  }, [embla, items.length]);

  useEffect(() => {
    if (!embla) return undefined;
    const update = () => {
      const viewport = embla.rootNode();
      const track = embla.containerNode();
      setOverflows(track.scrollWidth - viewport.clientWidth > 1);
    };
    update();
    embla.on('reInit', update);
    embla.on('resize', update);
    window.addEventListener('resize', update);
    return () => {
      embla.off('reInit', update);
      embla.off('resize', update);
      window.removeEventListener('resize', update);
    };
  }, [embla]);

  const [addedMsg, setAddedMsg] = useState(false);

  const handleAdd = () => {
    add({ name: 'New Member', role: 'Profession', photo: member1 });
    setAddedMsg(true);
    setTimeout(() => setAddedMsg(false), 2000);
  };

  return (
    <Container size={1150} px="md" py={{ base: 56, sm: 80, md: 112 }}>
      <Stack gap={0}>
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
        <Box mt={{ base: 48, md: 112 }}>
          <Carousel
            getEmblaApi={setEmbla}
            slideSize={slideSize}
            slideGap={SLIDE_GAP}
            align="start"
            controlSize={40}
            withControls={editMode || overflows}
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
            <Group mt="lg" gap="md" align="center">
              <Button
                variant="light"
                color="brandGreen"
                leftSection={<IconPlus size={16} />}
                onClick={handleAdd}
              >
                Add member
              </Button>
              {addedMsg && (
                <Text fz={14} fw={500} c="brandGreen.6">
                  Member added successfully!
                </Text>
              )}
            </Group>
          )}
        </Box>
      </Stack>
    </Container>
  );
}
