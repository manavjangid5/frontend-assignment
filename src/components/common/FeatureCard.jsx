import { Box, Card, CloseButton, Image, Stack, Text } from '@mantine/core';
import { featureIcons } from '../../assets/icons/index.js';

export default function FeatureCard({ icon, title, description, onRemove }) {
  return (
    <Card
      radius={0}
      shadow="md"
      padding={0}
      w={{ base: '100%', xs: 249 }}
      mih={292}
      pos="relative"
      style={{ flexShrink: 0 }}
    >
      {onRemove && (
        <CloseButton
          aria-label="Remove card"
          onClick={onRemove}
          pos="absolute"
          top={8}
          right={8}
        />
      )}

      <Stack gap={20} p="35px 40px">
        <Box w={70} h={76} bg="brandGreen.6" style={{ borderRadius: 10 }} p="22px 19px">
          <Image src={featureIcons[icon]} alt="" w={32} h={32} />
        </Box>

        <Text fw={700} fz={16} lh="24px" c="brandNavy.6">
          {title}
        </Text>
        <Box w={50} h={2} bg="brandRed.6" />
        <Text fw={400} fz={14} lh="20px" c="brandGray.6" maw={140}>
          {description}
        </Text>
      </Stack>
    </Card>
  );
}
