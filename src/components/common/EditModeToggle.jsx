import { Button } from '@mantine/core';
import { IconPencil, IconCheck } from '@tabler/icons-react';
import { useEditMode } from '../../context/ContentContext.jsx';

/**
 * Floating toggle for the demo "edit mode". While on, the Packages and Team
 * sections expose add / remove controls so their items are editable at
 * runtime. Off by default, so the page matches the Figma design as-is.
 */
export default function EditModeToggle() {
  const [editMode, toggle] = useEditMode();

  return (
    <Button
      onClick={toggle}
      size="sm"
      radius="xl"
      color={editMode ? 'brandGreen' : 'brandNavy'}
      variant={editMode ? 'filled' : 'light'}
      leftSection={editMode ? <IconCheck size={16} /> : <IconPencil size={16} />}
      pos="fixed"
      bottom={20}
      right={20}
      style={{ zIndex: 200 }}
    >
      {editMode ? 'Done' : 'Edit content'}
    </Button>
  );
}
