import { useState } from 'react';
import {
  Anchor,
  Box,
  Burger,
  Button,
  Container,
  Drawer,
  Group,
  Stack,
  Text,
} from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import { navLinks } from '../../data/footerLinks.js';

function NavItems() {
  return navLinks.map((link) => (
    <Anchor key={link} href="#" underline="never" fw={700} fz={14} lh="24px" c="brandGray.6">
      {link}
    </Anchor>
  ));
}

export default function Navbar() {
  const [opened, setOpened] = useState(false);

  return (
    <Box bg="brandPink.0" component="header">
      <Container size={1050} px="md" h={91}>
        <Group h="100%" align="flex-start" wrap="nowrap" justify="space-between">
          <Group gap={120} wrap="nowrap" mt={16}>
            <Text
              component="a"
              href="#"
              fw={700}
              fz={24}
              lh="32px"
              c="brandNavy.6"
              style={{ textDecoration: 'none' }}
            >
              Brandname
            </Text>
            <Group gap={21} wrap="nowrap" visibleFrom="md">
              <NavItems />
            </Group>
          </Group>
          <Group gap={40} wrap="nowrap" align="center" visibleFrom="md" mt={3}>
            <Anchor href="#" underline="never" fw={700} fz={14} c="brandGreen.6">
              Login
            </Anchor>
            <Button
              color="brandGreen"
              rightSection={<IconArrowRight size={16} />}
              styles={{ root: { height: 52, paddingInline: 25 } }}
            >
              Join Us
            </Button>
          </Group>

          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            hiddenFrom="md"
            mt={16}
            aria-label="Toggle navigation"
          />
        </Group>
      </Container>

      <Drawer opened={opened} onClose={() => setOpened(false)} hiddenFrom="md" padding="lg" size="xs" title="Menu">
        <Stack gap="lg">
          <NavItems />
          <Anchor href="#" underline="never" fw={700} fz={14} c="brandGreen.6">
            Login
          </Anchor>
          <Button color="brandGreen" fullWidth rightSection={<IconArrowRight size={16} />}>
            Join Us
          </Button>
        </Stack>
      </Drawer>
    </Box>
  );
}
