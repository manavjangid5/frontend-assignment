import { Box, Button, Container, Flex, Stack } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import FeatureCard from '../common/FeatureCard.jsx';
import HoverArrowLink from '../common/HoverArrowLink.jsx';
import SectionHeader from '../common/SectionHeader.jsx';
import { useCollection, useEditMode } from '../../context/ContentContext.jsx';

export default function PackagesSection() {
  const { items, add, remove } = useCollection('packages');
  const [editMode] = useEditMode();

  return (
    <Container size={1050} px="md" py={{ base: 56, sm: 90, md: 140 }}>
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

        {/* Cards — wrap when the row is too narrow so there is never overflow. */}
        <Flex gap={30} wrap="wrap" justify={{ base: 'center', md: 'flex-start' }} style={{ minWidth: 0 }}>
          {items.map((pkg) => (
            <FeatureCard
              key={pkg.id}
              icon={pkg.icon}
              title={pkg.title}
              description={pkg.description}
              onRemove={editMode ? () => remove(pkg.id) : undefined}
            />
          ))}

          {editMode && (
            <Button
              variant="light"
              color="brandGreen"
              leftSection={<IconPlus size={16} />}
              h={292}
              onClick={() =>
                add({
                  icon: 'blackboards',
                  title: 'New feature',
                  description: 'The gradual accumulation of information about',
                })
              }
            >
              Add card
            </Button>
          )}
        </Flex>
      </Flex>
    </Container>
  );
}
