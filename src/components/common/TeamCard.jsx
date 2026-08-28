import { Box, Card, CloseButton, Group, Image, Stack, Text } from '@mantine/core';
import { socialIcons } from '../../assets/icons/index.js';

const socials = [
  { key: 'facebook', label: 'Facebook' },
  { key: 'instagram', label: 'Instagram' },
  { key: 'twitter', label: 'Twitter' },
];

/**
 * A team member card for the Team carousel.
 * Figma: ~240×375, 20px radius, 231px image band, centred content with name,
 * role and three brand-green social glyphs.
 *
 * `onRemove` is supplied only in edit mode.
 */
export default function TeamCard({ name, role, photo, onRemove }) {
  return (
    <Card radius="lg" shadow="md" padding={0} pos="relative" style={{ overflow: 'hidden' }}>
      {onRemove && (
        <CloseButton
          aria-label="Remove member"
          onClick={onRemove}
          pos="absolute"
          top={8}
          right={8}
          bg="white"
          style={{ zIndex: 1 }}
        />
      )}

      <Image src={photo} alt={name} h={231} fit="cover" />

      <Stack gap={10} p={30} align="center">
        <Text fw={700} fz={16} lh="24px" c="brandNavy.6" ta="center">
          {name}
        </Text>
        <Text fw={400} fz={12} lh="16px" c="brandGray.6" ta="center">
          {role}
        </Text>
        <Group gap={20} justify="center">
          {socials.map((s) => (
            <Box key={s.key} component="a" href="#" aria-label={s.label} display="flex">
              <Image src={socialIcons[s.key]} alt="" w={24} h={24} />
            </Box>
          ))}
        </Group>
      </Stack>
    </Card>
  );
}
