import { Anchor, Box, Container, Group, Image, Stack, Text, Grid } from '@mantine/core';
import { IconPhone, IconMapPin, IconSend } from '@tabler/icons-react';
import { footerColumns, contactInfo } from '../../data/footerLinks.js';
import { socialIcons } from '../../assets/icons/index.js';

const contactRows = [
  { icon: IconPhone, text: contactInfo.phone },
  { icon: IconMapPin, text: contactInfo.address },
  { icon: IconSend, text: contactInfo.email },
];

const socials = ['facebook', 'instagram', 'twitter'];

function SocialRow() {
  return (
    <Group gap={20}>
      {socials.map((key) => (
        <Box key={key} component="a" href="#" aria-label={key} display="flex">
          <Image src={socialIcons[key]} alt="" w={24} h={24} />
        </Box>
      ))}
    </Group>
  );
}

export default function Footer() {
  return (
    <Box component="footer">
      <Box bg="white">
        <Container size={1150} px="md" py={50}>
          <Grid gutter={30}>
            {footerColumns.map((col) => (
              <Grid.Col key={col.id} span={{ base: 6, sm: 4, md: 2 }}>
                <Stack gap={20}>
                  <Text fw={700} fz={16} lh="24px" c="brandNavy.6">
                    {col.heading}
                  </Text>
                  <Stack gap={10}>
                    {col.links.map((link, i) => (
                      <Anchor
                        key={`${col.id}-${i}`}
                        href="#"
                        underline="never"
                        fw={700}
                        fz={14}
                        lh="24px"
                        c="brandGray.6"
                      >
                        {link}
                      </Anchor>
                    ))}
                  </Stack>
                </Stack>
              </Grid.Col>
            ))}

            <Grid.Col span={{ base: 12, sm: 8, md: 4 }}>
              <Stack gap={20}>
                <Text fw={700} fz={16} lh="24px" c="brandNavy.6">
                  Get In Touch
                </Text>
                <Stack gap={10}>
                  {contactRows.map(({ icon: Icon, text }) => (
                    <Group key={text} gap={10} wrap="nowrap" align="flex-start">
                      <Icon size={24} color="var(--mantine-color-brandGreen-6)" style={{ flexShrink: 0 }} />
                      <Text fw={700} fz={14} lh="24px" c="brandGray.6">
                        {text}
                      </Text>
                    </Group>
                  ))}
                </Stack>
              </Stack>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      <Box bg="#FAFAFA">
        <Container size={1150} px="md" py={25}>
          <Group justify="space-between" gap="md">
            <Text fw={700} fz={14} lh="24px" c="brandGray.6">
              Made With Love By Figmaland All Right Reserved
            </Text>
            <SocialRow />
          </Group>
        </Container>
      </Box>
    </Box>
  );
}
