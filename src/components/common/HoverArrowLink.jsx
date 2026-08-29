import { Group, Text } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import classes from './HoverArrowLink.module.css';

// Figma instruction: "Add hover animation, arrow should move right by 5 pixels."
export default function HoverArrowLink({ children, ...props }) {
  return (
    <Group gap={10} className={classes.link} component="a" href="#" {...props}>
      <Text c="brandGreen.6" fw={700} fz={14} lh="24px">
        {children}
      </Text>
      <IconChevronRight size={16} className={classes.arrow} stroke={2.5} />
    </Group>
  );
}
