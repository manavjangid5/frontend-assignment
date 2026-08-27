import {
  Container,
  SimpleGrid,
  Stack,
  Text,
  Anchor,
  Group,
  Divider,
  ActionIcon,
} from '@mantine/core';
import {
  IconPhone,
  IconMapPin,
  IconMail,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
} from '@tabler/icons-react';
import { footerColumns, contactInfo } from '../../data/footerLinks.js';

export default function Footer() {
  return (
    <Container size="xl" py="xl">
      <SimpleGrid cols={{ base: 1, xs: 2, sm: 3, md: 5 }} spacing="xl">
        {footerColumns.map((col) => (
          <Stack gap="xs" key={col.id}>
            <Text fw={600} c="brandNavy.6" size="sm">
              {col.heading}
            </Text>
            {col.links.map((link, i) => (
              <Anchor key={`${col.id}-${i}`} c="brandGray.6" size="sm" underline="never" href="#">
                {link}
              </Anchor>
            ))}
          </Stack>
        ))}

        <Stack gap="xs">
          <Text fw={600} c="brandNavy.6" size="sm">
            Get In Touch
          </Text>
          <Group gap={6} wrap="nowrap" align="flex-start">
            <IconPhone size={16} color="var(--mantine-color-brandGreen-6)" />
            <Text size="sm" c="brandGray.6">
              {contactInfo.phone}
            </Text>
          </Group>
          <Group gap={6} wrap="nowrap" align="flex-start">
            <IconMapPin size={16} color="var(--mantine-color-brandGreen-6)" />
            <Text size="sm" c="brandGray.6">
              {contactInfo.address}
            </Text>
          </Group>
          <Group gap={6} wrap="nowrap" align="flex-start">
            <IconMail size={16} color="var(--mantine-color-brandGreen-6)" />
            <Text size="sm" c="brandGray.6">
              {contactInfo.email}
            </Text>
          </Group>
        </Stack>
      </SimpleGrid>

      <Divider my="xl" />

      <Group justify="space-between">
        <Text size="xs" c="brandGray.6">
          Made With Love By Figmaland All Right Reserved
        </Text>
        <Group gap="sm">
          <ActionIcon variant="subtle" color="brandGreen" component="a" href="#">
            <IconBrandFacebook size={18} />
          </ActionIcon>
          <ActionIcon variant="subtle" color="brandGreen" component="a" href="#">
            <IconBrandInstagram size={18} />
          </ActionIcon>
          <ActionIcon variant="subtle" color="brandGreen" component="a" href="#">
            <IconBrandTwitter size={18} />
          </ActionIcon>
        </Group>
      </Group>
    </Container>
  );
}
