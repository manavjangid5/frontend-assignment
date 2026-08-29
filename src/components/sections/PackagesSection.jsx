import { useEffect, useState } from 'react';
import { Box, Button, Container, Flex, Stack, Group, Text } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { IconPlus } from '@tabler/icons-react';
import FeatureCard from '../common/FeatureCard.jsx';
import HoverArrowLink from '../common/HoverArrowLink.jsx';
import SectionHeader from '../common/SectionHeader.jsx';
import { useCollection, useEditMode } from '../../context/ContentContext.jsx';

// Prev/next controls sit in a consistent gutter just outside the cards (the
// page's <main> clips any overhang). The column width is kept tight to two
// cards so the right control never floats off in empty space.
const EDGE_PAD = 20;
const CARD_W = 249;
const carouselStyles = {
  controls: { insetInline: -(EDGE_PAD + 16) },
  control: {
    backgroundColor: 'var(--mantine-color-white)',
    color: 'var(--mantine-color-brandGreen-6)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
    border: 'none',
    opacity: 1,
  },
  viewport: { padding: `12px ${EDGE_PAD}px 36px` },
};

export default function PackagesSection() {
  const { items, add, remove } = useCollection('packages');
  const [editMode] = useEditMode();
  const [embla, setEmbla] = useState(null);

  useEffect(() => {
    embla?.reInit();
  }, [embla, items.length]);

  const [addedMsg, setAddedMsg] = useState(false);

  const handleAdd = () => {
    add({
      icon: 'blackboards',
      title: 'New feature',
      description: 'The gradual accumulation of information about',
    });
    setAddedMsg(true);
    setTimeout(() => setAddedMsg(false), 2000);
  };

  return (
    <Container size={1150} px="md" py={{ base: 56, sm: 90, md: 140 }}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        gap={{ base: 40, md: 30 }}
        align={{ base: 'stretch', md: 'center' }}
        justify={{ md: 'space-between' }}
      >
        {/* Text column — wide enough for the title to stay on one line. */}
        <Box w={{ base: '100%', md: 460 }} style={{ flexShrink: 0 }}>
          <Stack gap={35}>
            <SectionHeader divider gap={35} title="Affordable Packages" order={2} textMaxWidth={351}>
              Problems trying to resolve the conflict between the two major realms of
              Classical physics: Newtonian mechanics
            </SectionHeader>
            <HoverArrowLink>Learn More</HoverArrowLink>
          </Stack>
        </Box>

        {/* Cards — a carousel (2 up on desktop) so extra items stay in one row.
            Width = two cards + gap + the carousel's own side padding. */}
        <Box w={{ base: '100%', md: CARD_W * 2 + 30 + EDGE_PAD * 2 }} style={{ minWidth: 0 }}>
          <Carousel
            getEmblaApi={setEmbla}
            slideSize={{ base: '85%', sm: `${CARD_W}px` }}
            slideGap={30}
            align="start"
            controlSize={36}
            withControls={editMode || items.length > 2}
            withIndicators={false}
            styles={carouselStyles}
          >
            {items.map((pkg) => (
              <Carousel.Slide key={pkg.id}>
                <FeatureCard
                  icon={pkg.icon}
                  title={pkg.title}
                  description={pkg.description}
                  onRemove={editMode ? () => remove(pkg.id) : undefined}
                />
              </Carousel.Slide>
            ))}
          </Carousel>

          {editMode && (
            <Group mt="md" gap="md" align="center">
              <Button
                variant="light"
                color="brandGreen"
                leftSection={<IconPlus size={16} />}
                onClick={handleAdd}
              >
                Add package
              </Button>
              {addedMsg && (
                <Text fz={14} fw={500} c="brandGreen.6">
                  Package added successfully!
                </Text>
              )}
            </Group>
          )}
        </Box>
      </Flex>
    </Container>
  );
}
