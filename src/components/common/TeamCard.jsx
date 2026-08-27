import { Card, Image, Text, Group, ActionIcon, Stack } from '@mantine/core';
import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter } from '@tabler/icons-react';

export default function TeamCard({ name, role, photo, socials }) {
  return (
    <Card padding={0} radius="md" shadow="sm" withBorder={false}>
      <Image src={photo} alt={name} h={220} fit="cover" />
      <Stack gap={4} p="md" align="center">
        <Text fw={600} c="brandNavy.6" size="sm">
          {name}
        </Text>
        <Text size="xs" c="brandGray.6" mb={6}>
          {role}
        </Text>
        <Group gap="xs">
          <ActionIcon component="a" href={socials.facebook} variant="subtle" color="brandGreen" size="sm">
            <IconBrandFacebook size={16} />
          </ActionIcon>
          <ActionIcon component="a" href={socials.instagram} variant="subtle" color="brandGreen" size="sm">
            <IconBrandInstagram size={16} />
          </ActionIcon>
          <ActionIcon component="a" href={socials.twitter} variant="subtle" color="brandGreen" size="sm">
            <IconBrandTwitter size={16} />
          </ActionIcon>
        </Group>
      </Stack>
    </Card>
  );
}
