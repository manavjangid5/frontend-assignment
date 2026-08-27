import { Box, Container, Stack, Text, Title, TextInput, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';

export default function NewsletterSection() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm({
    initialValues: { email: '' },
    validate: {
      email: (value) => {
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Enter a valid email address';
        return null;
      },
    },
  });

  const handleSubmit = (values) => {
    // No backend specified in the assignment — this simulates a successful
    // subscribe. Swap in a real API call here if one gets added later.
    setSubmitted(true);
    form.reset();
  };

  return (
    <Box bg="brandPink.0">
      <Container size="sm" py={{ base: 50, sm: 70 }}>
        <Stack gap="sm" align="center" ta="center" mb="xl">
          <Text c="brandGreen.6" fw={600} size="sm">
            Newsletter
          </Text>
          <Title order={2} c="brandNavy.6" fz={{ base: 26, sm: 30 }}>
            Watch our Courses
          </Title>
          <Text c="brandGray.6" size="sm" maw={420}>
            Problems trying to resolve the conflict between the two major realms of
            Classical physics: Newtonian mechanics
          </Text>
        </Stack>

        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Group gap={0} wrap="nowrap" align="flex-start">
            <TextInput
              placeholder="Your Email"
              radius={0}
              size="md"
              style={{ flex: 1 }}
              styles={{ input: { borderTopLeftRadius: 6, borderBottomLeftRadius: 6 } }}
              {...form.getInputProps('email')}
            />
            <Button
              type="submit"
              color="brandGreen"
              size="md"
              styles={{ root: { borderTopRightRadius: 6, borderBottomRightRadius: 6, borderTopLeftRadius: 0, borderBottomLeftRadius: 0 } }}
            >
              Subscribe
            </Button>
          </Group>
        </form>

        {submitted && (
          <Text c="brandGreen.7" size="sm" ta="center" mt="sm">
            Thanks for subscribing!
          </Text>
        )}
      </Container>
    </Box>
  );
}
