import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
const Calendar = () => {
    const currentDate = dayjs();
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DateCalendar', 'DateCalendar']}>
          <DemoItem label="Calender">
            <DateCalendar defaultValue={currentDate} readOnly />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
    );
};

export default Calendar;