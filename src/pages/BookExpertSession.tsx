import { useState } from 'react';

import {
  Container,
  Typography,
  Button,
  TextField,
  LinearProgress,
  Box,
  Stack,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { DatePicker, TimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/system';

// Type definitions
interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  notes: string;
  privacy: boolean;
}

const services = [
  'Web Design',
  'Graphic Design',
  'Social Media Strategies',
  'ICT Technical Consultancy',
  'IT Equipment Sourcing',
];

export default function BookExpertSession() {
  const theme = useTheme(); // Use the theme hook here
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [selectedTime, setSelectedTime] = useState<Dayjs | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [bookingData, setBookingData] = useState<FormData | null>(null);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      notes: '',
      privacy: false,
    },
  });

  const capitalizeName = (name: string) =>
    name
      .toLowerCase()
      .split(' ')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');

  const handleFormSubmit = async (data: FormData) => {
    setBookingData(data);
    setShowConfirmation(true);
  };

  const confirmBooking = async () => {
    setShowConfirmation(false);
    setIsSubmitting(true);

    try {
      if (bookingData) {
        // Send booking data to the backend
        const response = await fetch('http://localhost:5000/api/book-session', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...bookingData,
            date: selectedDate?.format('YYYY-MM-DD') || '',
            time: selectedTime?.format('HH:mm') || '',
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to submit booking');
        }

        reset();
        setSelectedDate(null);
        setSelectedTime(null);
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Container maxWidth="md" sx={{ py: 6 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Booking Form */}
          <Box
            component="form"
            onSubmit={handleSubmit(handleFormSubmit)}
            sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
          >
            {/* Service Selection */}
            <FormControl fullWidth error={!!errors.service}>
              <InputLabel>Consultation Service *</InputLabel>
              <Controller
                name="service"
                control={control}
                rules={{ required: 'Please select a service' }}
                render={({ field }) => (
                  <Select {...field} label="Consultation Service *">
                    {services.map((service) => (
                      <MenuItem key={service} value={service}>
                        {service}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
              <Typography variant="body2" color="error" mt={1}>
                {errors.service?.message}
              </Typography>
            </FormControl>

            {/* Date/Time Pickers */}
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
              <DatePicker
                label="Preferred Date *"
                value={selectedDate}
                onChange={setSelectedDate}
                minDate={dayjs().add(1, 'day')}
                disablePast
                slotProps={{
                  textField: {
                    fullWidth: true,
                    error: !selectedDate,
                    helperText: !selectedDate && 'Please select a date',
                  },
                }}
              />
              <TimePicker
                label="Preferred Time *"
                value={selectedTime}
                onChange={setSelectedTime}
                minutesStep={15}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    error: !selectedTime,
                    helperText: !selectedTime && 'Please select a time',
                  },
                }}
              />
            </Stack>

            {/* Personal Information */}
            <Controller
              name="name"
              control={control}
              rules={{ required: 'Full name is required' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Full Name *"
                  fullWidth
                  error={!!errors.name}
                  helperText={errors.name?.message}
                  onChange={(e) => {
                    const capitalized = capitalizeName(e.target.value);
                    field.onChange(capitalized);
                  }}
                />
              )}
            />

            <Controller
              name="email"
              control={control}
              rules={{
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email Address *"
                  fullWidth
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              )}
            />

            <Controller
              name="phone"
              control={control}
              rules={{
                required: 'Phone number is required',
                pattern: {
                  value: /^\+?[1-9]\d{1,14}$/,
                  message: 'Invalid international phone number',
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Phone Number *"
                  fullWidth
                  error={!!errors.phone}
                  helperText={errors.phone?.message}
                />
              )}
            />

            <Controller
              name="notes"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Project Details (optional)"
                  multiline
                  rows={4}
                  fullWidth
                  placeholder="Describe your project requirements, goals, and any specific needs..."
                />
              )}
            />

            {/* GDPR Compliance */}
            <Controller
              name="privacy"
              control={control}
              rules={{ required: 'You must accept the privacy policy' }}
              render={({ field }) => (
                <FormControlLabel
                  control={<Checkbox {...field} />}
                  label={
                    <Typography variant="body2">
                      I agree to the{' '}
                      <Button
                        href="/privacy-policy"
                        target="_blank"
                        rel="noopener"
                        sx={{ p: 0, verticalAlign: 'baseline' }}
                      >
                        privacy policy
                      </Button>
                    </Typography>
                  }
                />
              )}
            />
            <Typography variant="body2" color="error">
              {errors.privacy?.message}
            </Typography>

            {/* Submission Button */}
            <Box textAlign="center" mt={4}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={isSubmitting}
                sx={{
                  px: 6,
                  py: 1.5,
                  fontSize: '1.1rem',
                  borderRadius: 2,
                  minWidth: 200,
                }}
              >
                {isSubmitting ? 'Processing...' : 'Book Consultation'}
              </Button>
              {isSubmitting && <LinearProgress sx={{ mt: 2 }} />}
            </Box>
          </Box>

          {/* Confirmation Dialog */}
          <Dialog open={showConfirmation} onClose={() => setShowConfirmation(false)}>
            <DialogTitle>Confirm Booking Details</DialogTitle>
            <DialogContent>
              <DialogContentText mb={2}>
                Please review your booking information:
              </DialogContentText>
              {bookingData && (
                <Stack spacing={1}>
                  <Typography><strong>Service:</strong> {bookingData.service}</Typography>
                  <Typography><strong>Date:</strong> {selectedDate?.format('MMMM D, YYYY')}</Typography>
                  <Typography><strong>Time:</strong> {selectedTime?.format('h:mm A')}</Typography>
                  <Typography><strong>Name:</strong> {bookingData.name}</Typography>
                  <Typography><strong>Email:</strong> {bookingData.email}</Typography>
                  <Typography><strong>Phone:</strong> {bookingData.phone}</Typography>
                  {bookingData.notes && (
                    <Typography><strong>Notes:</strong> {bookingData.notes}</Typography>
                  )}
                </Stack>
              )}
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setShowConfirmation(false)}>Cancel</Button>
              <Button onClick={confirmBooking} variant="contained" disabled={isSubmitting}>
                Confirm Booking
              </Button>
            </DialogActions>
          </Dialog>
        </motion.div>
      </Container>
    </LocalizationProvider>
  );
}