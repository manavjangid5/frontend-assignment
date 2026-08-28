import { useEffect, useState } from 'react';
import { Box, Button, Container, Flex, Stack } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { IconPlus } from '@tabler/icons-react';
import FeatureCard from '../common/FeatureCard.jsx';
import HoverArrowLink from '../common/HoverArrowLink.jsx';
import SectionHeader from '../common/SectionHeader.jsx';
import { useCollection, useEditMode } from '../../context/ContentContext.jsx';

// White circular prev/next controls pushed OUT beyond the cards, matching the
// Team carousel. All-side viewport padding keeps the card shadow un-clipped.
const carouselStyles = {
  controls: { insetInline: -36 },
  control: {
    backgroundColor: 'var(--mantine-color-white)',
    color: 'var(--mantine-color-brandGreen-6)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
    border: 'none',
    opacity: 1,
  },
  viewport: { padding: '12px 24px 40px' },
};

export default function PackagesSection() {
  const { items, add, remove } = useCollection('packages');
  const [editMode] = useEditMode();
  const [embla, setEmbla] = useState(null);

  useEffect(() => {
    embla?.reInit();
  }, [embla, items.length]);

  return (
    <Container size={1150} px="md" py={{ base: 56, sm: 90, md: 140 }} style={{ overflowX: 'clip' }}>
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

        {/* Cards — a carousel (2 up on desktop) so extra items stay in one row. */}
        <Box w={{ base: '100%', md: 580 }} style={{ minWidth: 0 }}>
          <Carousel
            getEmblaApi={setEmbla}
            slideSize={{ base: '85%', sm: '249px' }}
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
            <Button
              mt="md"
              variant="light"
              color="brandGreen"
              leftSection={<IconPlus size={16} />}
              onClick={() =>
                add({
                  icon: 'blackboards',
                  title: 'New feature',
                  description: 'The gradual accumulation of information about',
                })
              }
            >
              Add package
            </Button>
          )}
        </Box>
      </Flex>
    </Container>
  );
}
