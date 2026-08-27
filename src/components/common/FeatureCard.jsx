import { Card, ThemeIcon, Text, Divider, Stack } from '@mantine/core';

export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <Card padding="lg" radius="md" withBorder={false} shadow="xs" w={{ base: '100%', xs: 170 }}>
      <Stack gap="sm">
        <ThemeIcon size={48} radius="md" color="brandGreen">
          <Icon size={26} stroke={1.75} />
        </ThemeIcon>

        <div>
          <Text fw={600} c="brandNavy.6" size="sm" mb={4}>
            {title}
          </Text>
          <Divider w={24} size="sm" color="brandRed.6" mb={8} />
          <Text size="xs" c="brandGray.6">
            {description}
          </Text>
        </div>
      </Stack>
    </Card>
  );
}
