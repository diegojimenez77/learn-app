import React from 'react';
import { DatePicker } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';

function MyDatePicker() {
	let string = 'string';
	let number = 0;
	const [dataForm, setDataForm] =
		React.useState <
		{
			dateFrom: Date | null,
			dateTo: Date | null,
			selected: string | number,
		} >
		{
			dateFrom: new Date(),
			dateTo: new Date(),
			selected: -1,
		};
	return (
		<>
			<DatePicker
				disableFuture
				label='Responsive'
				openTo='year'
				views={['year', 'month', 'day']}
				value={dataForm.dateFrom}
				onChange={(newValue) => {
					setDataForm({ ...dataForm, dateFrom: newValue });
				}}
				renderInput={(params) => <TextField {...params} />}
			/>
		</>
	);
}

export default MyDatePicker;
