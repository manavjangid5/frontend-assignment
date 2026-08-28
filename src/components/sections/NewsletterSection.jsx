import { useState } from 'react';
import { Box, Button, Container, Group, Stack, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import SectionHeader from '../common/SectionHeader.jsx';

export default function NewsletterSection() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm({
    initialValues: { email: '' },
    validate: {
      // Figma annotation: validate before submit, show the message below the field.
      email: (value) => {
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Enter a valid email address';
        return null;
      },
    },
  });

  const handleSubmit = () => {
    // No backend in scope — confirm locally once validation passes.
    setSubmitted(true);
    form.reset();
  };

  return (
    <Box bg="brandPink.0">
      <Container size={1050} px="md" py={{ base: 64, sm: 110, md: 160 }}>
        <Stack gap={0} align="center">
          <SectionHeader
            eyebrow="Newsletter"
            title="Watch our Courses"
            order={3}
            align="center"
            textMaxWidth={469}
            textFw={500}
          >
            Problems trying to resolve the conflict between the two major realms of
            Classical physics: Newtonian mechanics
          </SectionHeader>

          {/* Figma: 80px between the heading block and the subscribe field. */}
          <Box w="100%" maw={688} mt={{ base: 48, md: 80 }}>
            <form onSubmit={form.onSubmit(handleSubmit)} noValidate>
              <Group gap={0} align="flex-start" wrap="nowrap">
                <TextInput
                  aria-label="Your Email"
                  placeholder="Your Email"
                  size="md"
                  style={{ flex: 1 }}
                  styles={{
                    input: {
                      height: 58,
                      fontSize: 14,
                      backgroundColor: '#F9F9F9',
                      borderColor: '#E6E6E6',
                      '--input-placeholder-color': '#737373',
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                    },
                  }}
                  {...form.getInputProps('email')}
                />
                <Button
                  type="submit"
                  color="brandGreen"
                  styles={{
                    root: {
                      height: 58,
                      paddingInline: 30,
                      borderTopLeftRadius: 0,
                      borderBottomLeftRadius: 0,
                    },
                  }}
                >
                  Subscribe
                </Button>
              </Group>
            </form>

            {submitted && (
              <Text mt="sm" fz={14} c="brandGreen.7" ta="center">
                Thanks for subscribing!
              </Text>
            )}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
