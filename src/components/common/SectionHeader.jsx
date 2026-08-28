import { Box, Stack, Text, Title } from '@mantine/core';

/**
 * The "eyebrow + heading + paragraph" cluster that opens the Packages, Team
 * and Newsletter sections. Left- or centre-aligned.
 *
 * Props:
 *  - eyebrow    small green label above the title (omit when `divider` is set)
 *  - divider    render the 94×7 red accent bar instead of an eyebrow (Packages)
 *  - title      heading text
 *  - order      heading level: 2 (40/50) or 3 (24/32). Default 3.
 *  - align      'left' | 'center'. Default 'left'.
 *  - textMaxWidth  max width of the paragraph
 *  - children   paragraph copy
 */
export default function SectionHeader({
  eyebrow,
  divider = false,
  title,
  order = 3,
  align = 'left',
  textMaxWidth,
  children,
}) {
  const centered = align === 'center';

  return (
    <Stack gap={10} align={centered ? 'center' : 'flex-start'} ta={centered ? 'center' : 'left'}>
      {divider ? (
        <Box w={94} h={7} bg="brandRed.6" mb={2} />
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
        <Text fz={14} lh="20px" c="brandGray.6" maw={textMaxWidth}>
          {children}
        </Text>
      )}
    </Stack>
  );
}
