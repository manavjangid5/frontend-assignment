import { Box, Stack, Text, Title } from '@mantine/core';

export default function SectionHeader({
  eyebrow,
  divider = false,
  title,
  order = 3,
  align = 'left',
  gap = 10,
  textMaxWidth,
  textFw = 400,
  children,
}) {
  const centered = align === 'center';

  return (
    <Stack gap={gap} align={centered ? 'center' : 'flex-start'} ta={centered ? 'center' : 'left'}>
      {divider ? (
        <Box w={94} h={7} bg="brandRed.6" />
      ) : (
        eyebrow && (
          <Text component="span" fw={700} fz={14} lh="24px" c="brandGreen.6">
            {eyebrow}
          </Text>
        )
      )}

      <Title order={order} c="brandNavy.6">
        {title}
      </Title>

      {children && (
        <Text fz={14} lh="20px" fw={textFw} c="brandGray.6" maw={textMaxWidth}>
          {children}
        </Text>
      )}
    </Stack>
  );
}
