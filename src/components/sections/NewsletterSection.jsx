import { useState } from 'react';
import { Box, Button, Container, Group, Stack, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { zodResolver } from 'mantine-form-zod-resolver';
import { newsletterSchema } from '../../schemas/newsletterSchema.js';
import SectionHeader from '../common/SectionHeader.jsx';

export default function NewsletterSection() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm({
    initialValues: { email: '' },
    // Validation rules come from the Zod schema; the resolver adapts them to
    // Mantine's form API.
    validate: zodResolver(newsletterSchema),
    // Hide the success message again as soon as the field is edited.
    onValuesChange: () => setSubmitted(false),
  });

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <Box bg="brandPink.0">
      <Container size={1150} px="md" py={{ base: 64, sm: 110, md: 160 }}>
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
