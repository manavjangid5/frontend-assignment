import { Box, Button, Container, Grid, Group, Stack } from '@mantine/core';
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
      <Grid gutter={{ base: 40, md: 30 }} align="center">
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Stack gap={35} maw={507}>
            <SectionHeader divider title="Approdable Packages" order={2} textMaxWidth={351}>
              Problems trying to resolve the conflict between the two major realms of
              Classical physics: Newtonian mechanics
            </SectionHeader>
            <HoverArrowLink>Learn More</HoverArrowLink>
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 7 }}>
          <Group gap={30} align="flex-start" wrap="wrap">
            {items.map((pkg, i) => (
              <Box key={pkg.id} mt={{ md: i % 2 === 1 ? 40 : 0 }}>
                <FeatureCard
                  icon={pkg.icon}
                  title={pkg.title}
                  description={pkg.description}
                  onRemove={editMode ? () => remove(pkg.id) : undefined}
                />
              </Box>
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
          </Group>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
