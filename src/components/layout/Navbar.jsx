import { useState } from 'react';
import {
  Group,
  Container,
  Text,
  Button,
  Burger,
  Drawer,
  Stack,
  Anchor,
} from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import { navLinks } from '../../data/footerLinks.js';

export default function Navbar() {
  const [opened, setOpened] = useState(false);

  const links = navLinks.map((link) => (
    <Anchor key={link} c="brandNavy.6" fw={500} size="sm" underline="never" href="#">
      {link}
    </Anchor>
  ));

  return (
    <Container size="xl" py="md">
      <Group justify="space-between" wrap="nowrap">
        <Text fw={700} size="lg" c="brandNavy.6">
          Brandname
        </Text>

        <Group gap="xl" visibleFrom="sm">
          {links}
        </Group>

        <Group gap="md" visibleFrom="sm" wrap="nowrap">
          <Anchor c="brandGreen.6" fw={500} size="sm" underline="never" href="#">
            Login
          </Anchor>
          <Button
            color="brandGreen"
            radius="xl"
            rightSection={<IconArrowRight size={16} />}
          >
            Join Us
          </Button>
        </Group>

        <Burger opened={opened} onClick={() => setOpened((o) => !o)} hiddenFrom="sm" />
      </Group>

      <Drawer opened={opened} onClose={() => setOpened(false)} hiddenFrom="sm" padding="md">
        <Stack gap="lg">
          {links}
          <Anchor c="brandGreen.6" fw={500} size="sm" underline="never" href="#">
            Login
          </Anchor>
          <Button color="brandGreen" radius="xl" rightSection={<IconArrowRight size={16} />} fullWidth>
            Join Us
          </Button>
        </Stack>
      </Drawer>
    </Container>
  );
}
