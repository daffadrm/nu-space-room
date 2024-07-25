import React, { useState, useEffect, useRef } from 'react';
import Swal from 'sweetalert2';
// import bwipjs from 'bwip-js';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import mqtt from 'mqtt';
import moment from 'moment-timezone';
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Avatar,
	Tooltip,
	List,
	ListItem,
	ListItemSuffix,
	IconButton,
	Button,
} from '@material-tailwind/react';

import {
	useGetConfigRoomQuery,
	useGetListByDateQuery,
} from 'src/services/contactApi';

const Room = () => {
	const data = {
		data_list: [
			{
				from_utc: '2024-07-24 10:53:04',
				to_utc: '2024-07-24 11:00:00',
				status: 'Available',
			},
			{
				from_utc: '2024-07-24 11:00:00',
				to_utc: '2024-07-24 11:30:00',
				status: 'Available',
			},
			{
				from_utc: '2024-07-24 11:30:00',
				to_utc: '2024-07-24 12:00:00',
				status: 'Available',
			},
			{
				from_utc: '2024-07-24 12:00:00',
				to_utc: '2024-07-24 12:30:00',
				status: 'Available',
			},
			{
				from_utc: '2024-07-24 12:30:00',
				to_utc: '2024-07-24 13:00:00',
				status: 'Available',
			},
			{
				from_utc: '2024-07-24 13:00:00',
				to_utc: '2024-07-24 13:30:00',
				status: 'Available',
			},
			{
				from_utc: '2024-07-24 13:30:00',
				to_utc: '2024-07-24 14:00:00',
				status: 'Available',
			},
			{
				from_utc: '2024-07-24 14:00:00',
				to_utc: '2024-07-24 14:30:00',
				status: 'Available',
			},
			{
				from_utc: '2024-07-24 14:30:00',
				to_utc: '2024-07-24 15:00:00',
				status: 'Available',
			},
			{
				from_utc: '2024-07-24 15:00:00',
				to_utc: '2024-07-24 15:30:00',
				status: 'Available',
			},
			{
				from_utc: '2024-07-24 15:30:00',
				to_utc: '2024-07-24 16:00:00',
				status: 'Available',
			},
			{
				from_utc: '2024-07-24 16:00:00',
				to_utc: '2024-07-24 16:30:00',
				status: 'Available',
			},
			{
				from_utc: '2024-07-24 16:30:00',
				to_utc: '2024-07-24 17:00:00',
				status: 'Available',
			},
			{
				from_utc: '2024-07-24 17:00:00',
				to_utc: '2024-07-24 17:30:00',
				status: 'Available',
			},
			{
				from_utc: '2024-07-24 17:30:00',
				to_utc: '2024-07-24 18:00:00',
				status: 'Available',
			},
			{
				from_utc: '2024-07-24 18:00:00',
				to_utc: '2024-07-24 18:30:00',
				status: 'Available',
			},
			{
				from_utc: '2024-07-24 18:30:00',
				to_utc: '2024-07-24 19:00:00',
				status: 'Available',
			},
			{
				from_utc: '2024-07-24 19:00:00',
				to_utc: '2024-07-24 19:30:00',
				status: 'Available',
			},
			{
				from_utc: '2024-07-24 19:30:00',
				to_utc: '2024-07-24 20:00:00',
				status: 'Available',
			},
			{
				from_utc: '2024-07-24 20:00:00',
				to_utc: '2024-07-24 20:30:00',
				status: 'Available',
			},
			{
				from_utc: '2024-07-24 20:30:00',
				to_utc: '2024-07-24 21:00:00',
				status: 'Available',
			},
			{
				from_utc: '2024-07-24 21:00:00',
				to_utc: '2024-07-24 21:30:00',
				status: 'Available',
			},
			{
				from_utc: '2024-07-24 21:30:00',
				to_utc: '2024-07-24 22:00:00',
				status: 'Available',
			},
			{
				from_utc: '2024-07-24 22:00:00',
				to_utc: '2024-07-24 22:30:00',
				status: 'Available',
			},
			{
				from_utc: '2024-07-24 22:30:00',
				to_utc: '2024-07-24 23:00:00',
				status: 'Available',
			},
			{
				from_utc: '2024-07-24 23:00:00',
				to_utc: '2024-07-24 23:30:00',
				status: 'Available',
			},
			{
				from_utc: '2024-07-24 23:30:00',
				to_utc: '2024-07-25 00:00:00',
				status: 'Available',
			},
			{
				from_utc: '2024-07-25 00:00:00',
				to_utc: '2024-07-25 00:30:00',
				status: 'Available',
			},
			{
				from_utc: '2024-07-25 00:30:00',
				to_utc: '2024-07-25 01:00:00',
				status: 'Available',
			},
			{
				from_utc: '2024-07-25 01:00:00',
				to_utc: '2024-07-25 01:30:00',
				status: 'Available',
			},
			{
				from_utc: '2024-07-25 01:30:00',
				to_utc: '2024-07-25 02:00:00',
				status: 'Available',
			},
			{
				from_utc: '2024-07-25 02:00:00',
				to_utc: '2024-07-25 02:30:00',
				status: 'Available',
			},
			{
				from_utc: '2024-07-25 02:30:00',
				to_utc: '2024-07-25 03:00:00',
				status: 'Available',
			},
			{
				from_utc: '2024-07-25 03:00:00',
				to_utc: '2024-07-25 03:30:00',
				status: 'Available',
			},
			{
				from_utc: '2024-07-25 03:30:00',
				to_utc: '2024-07-25 04:00:00',
				status: 'Available',
			},
			{
				from_utc: '2024-07-25 04:00:00',
				to_utc: '2024-07-25 04:30:00',
				status: 'Available',
			},
			{
				from_utc: '2024-07-25 04:30:00',
				to_utc: '2024-07-25 05:00:00',
				status: 'Available',
			},
			{
				from_utc: '2024-07-25 05:00:00',
				to_utc: '2024-07-25 05:30:00',
				status: 'Available',
			},
			{
				from_utc: '2024-07-25 05:30:00',
				to_utc: '2024-07-25 06:00:00',
				status: 'Available',
			},
			{
				from_utc: '2024-07-25 06:00:00',
				to_utc: '2024-07-25 06:30:00',
				status: 'Available',
			},
			{
				from_utc: '2024-07-25 06:30:00',
				to_utc: '2024-07-25 07:00:00',
				status: 'Available',
			},
			{
				from_utc: '2024-07-25 07:00:00',
				to_utc: '2024-07-25 07:30:00',
				status: 'Available',
			},
			{
				from_utc: '2024-07-25 07:30:00',
				to_utc: '2024-07-25 08:00:00',
				status: 'Available',
			},
			{
				from_utc: '2024-07-25 08:00:00',
				to_utc: '2024-07-25 08:30:00',
				status: 'Available',
			},
			{
				from_utc: '2024-07-25 08:30:00',
				to_utc: '2024-07-25 09:00:00',
				status: 'Available',
			},
			{
				from_utc: '2024-07-25 09:00:00',
				to_utc: '2024-07-25 09:30:00',
				status: 'Available',
			},
			{
				from_utc: '2024-07-25 09:30:00',
				to_utc: '2024-07-25 10:00:00',
				status: 'Available',
			},
			{
				from_utc: '2024-07-25 10:00:00',
				to_utc: '2024-07-25 10:30:00',
				status: 'Available',
			},
			{
				from_utc: '2024-07-25 10:30:00',
				to_utc: '2024-07-25 10:53:04',
				status: 'Available',
			},
		],
		status: 'Available',
	};
	const [dateTime, setDateTime] = useState('');
	const canvasRef = useRef(null);
	// const mqtt = require('mqtt');
	const [isConnected, setIsConnected] = useState(false);
	const [messages, setMessages] = useState([]);
	const clientRef = useRef(null);
	const [dataRoom, setDataRoom] = useState([]);
	const [temperature, setTemperature] = useState(0);
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [selectedDateList, setSelectedDateList] = useState('');

	const {
		data: todos,
		isLoading,
		isFetching,
		refetch,
		error: configError,
	} = useGetConfigRoomQuery();
	const {
		data: dataListByDate,
		error: listByDateErorr,
		isLoading: isLoadingListByDate,
	} = useGetListByDateQuery(selectedDateList, {
		skip: !selectedDateList,
	});

	const handleMqtt = () => {
		const options = {
			keepalive: 30,
			clientId: 'webclient_' + Math.random().toString(16).substr(2, 8),
			username: 'webclient',
			password: 'Cdc123!@#',
			protocolId: 'MQTT',
			protocolVersion: 4,
			clean: true,
			reconnectPeriod: 1000,
			connectTimeout: 30 * 1000,
			rejectUnauthorized: false,
		};

		// Connect to the broker
		const brokerUrl = 'ws://localhost:9001'; // Adjust if needed for ws or wss
		console.log('Connecting to broker');
		clientRef.current = mqtt.connect(brokerUrl, options);

		// Set up event handlers
		clientRef.current.on('connect', () => {
			console.log('Connected');
			setIsConnected(true);
			clientRef.current.subscribe(
				`cudo/nu_space/data/${dataRoom?.room_id}`,
				(err) => {
					if (err) {
						console.error('Subscription error:', err);
					}
				}
			);
		});

		clientRef.current.on('error', (err) => {
			console.error('Connection error: ', err);
			setIsConnected(false);
		});

		clientRef.current.on('reconnect', () => {
			console.log('Reconnecting...');
		});

		clientRef.current.on('message', (topic, message) => {
			console.log('Received message:', topic, message.toString());

			try {
				const parsedMessage = JSON.parse(message.toString());
				// setMessages((prevMessages) => [
				// 	...prevMessages,
				// 	{ topic, message: parsedMessage },
				// ]);
				setMessages({ topic, ...parsedMessage });
			} catch (error) {
				console.error('Failed to parse message:', error);
			}
		});
	};

	const handleDateChange = (date) => {
		setSelectedDate(getFormattedDate(date));
		setSelectedDateList(getFormattedDate(date));
	};
	const getFormattedDate = (date) => {
		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, '0');
		const day = String(date.getDate()).padStart(2, '0');
		return `${year}-${month}-${day}`;
	};

	const timezone = 'Asia/Jakarta';

	useEffect(() => {
		setDataRoom(todos);
	}, [todos]);

	useEffect(() => {
		// if (dataListByDate) return;
		setMessages(dataListByDate);
	}, [selectedDateList, dataListByDate]);

	useEffect(() => {
		const timezone = 'Asia/Jakarta';

		// Mengatur waktu dan format sesuai dengan zona waktu
		const updateDateTime = () => {
			const formattedTime = moment().tz(timezone).format('HH:mm');
			setDateTime(formattedTime);
		};

		updateDateTime(); // Memanggil updateDateTime saat komponen di-mount
		const interval = setInterval(updateDateTime, 1000);

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		if (configError) {
			Swal.fire({
				icon: 'error',
				title: 'Config Error',
				text: 'Failed to load configuration!',
				footer: `Error: ${configError.message}`,
			});
		}
	}, [configError]);

	useEffect(() => {
		if (listByDateErorr) {
			Swal.fire({
				icon: 'error',
				title: 'Date List Error',
				text: 'Failed to load data list by date!',
				footer: `Error: ${listByDateErorr.message}`,
			});
		}
	}, [listByDateErorr]);

	// useEffect(() => {
	// 	if (canvasRef.current) {
	// 		try {
	// 			// The return value is the canvas element
	// 			bwipjs.toCanvas(canvasRef.current, {
	// 				bcid: 'qrcode', // Barcode type
	// 				text: '33333', // Text to encode
	// 				scale: 3, // 3x scaling factor
	// 				height: 10, // Bar height, in millimeters
	// 				includetext: true, // Show human-readable text
	// 				textxalign: 'center', // Always good to set this
	// 			});
	// 		} catch (e) {
	// 			// Handle the error here
	// 			console.error('Error generating barcode:', e);
	// 		}
	// 	}
	// }, []); // Depend on canvasRef.current

	useEffect(() => {
		// Clean up on unmount
		return () => {
			console.log('Cleaning up');
			if (clientRef.current) {
				clientRef.current.end();
			}
		};
	}, []);

	useEffect(() => {
		if (dataRoom && dataRoom?.length > 0) return;
		handleMqtt();
	}, [dataRoom, messages]);

	useEffect(() => {
		// Fungsi untuk menghasilkan suhu acak antara 23 dan 25 dengan desimal
		const generateRandomTemperature = () => {
			return (Math.random() * (25 - 23) + 23).toFixed(2);
		};

		// Set interval untuk memperbarui suhu setiap detik
		const interval = setInterval(() => {
			setTemperature(generateRandomTemperature());
		}, 60000);

		setTemperature(generateRandomTemperature());

		// Bersihkan interval saat komponen di-unmount
		return () => clearInterval(interval);
	}, []);

	if (!dateTime) {
		return null; // Or you can return a loading spinner
	}

	return (
		<div className="">
			<div className="bg-blue-500 py-7 flex items-center justify-between px-4 lg:px-8">
				<div className="flex flex-col items-center">
					<div className=" text-white p-1 ">
						<Typography className="text-white text-left text-xl">
							Temperature
						</Typography>
						<Typography className="text-left text-4xl">
							{temperature}°C
						</Typography>
					</div>
				</div>
				<div className="flex flex-col items-center w-full">
					<Typography
						variant="h2"
						color="white"
						className="!text-2xl lg:!text-4xl text-center"
					>
						{todos?.room_name ?? '-'}
					</Typography>
				</div>
				<Typography className="bg-white text-blue-500 py-2 px-4 rounded-lg shadow-md text-2xl w-auto whitespace-nowrap">
					{messages?.status || '-'}
				</Typography>
			</div>
			<div className="px-10 py-8 grid grid-cols-1 lg:grid-cols-12 gap-4 lg">
				<div className="col-span-8 pr-20">
					<Card className="w-full h-full overflow-hidden">
						<CardHeader
							floated={false}
							shadow={false}
							color="blue"
							className="m-0 rounded-t-xl rounded-b-none flex justify-between items-center p-1"
						>
							<div className="datepicker-container p-3">
								<DatePicker
									selected={selectedDate}
									onChange={handleDateChange}
									minDate={new Date()}
									dateFormat="d MMMM, yyyy"
									popperClassName="datepicker-popper"
									className="z-10 text-white text-2xl bg-transparent font-sans border-none outline-none"
								/>
							</div>
							<Typography
								variant="lead"
								color="white"
								className="font-normal p-3 text-2xl"
							>
								{dateTime}
							</Typography>
						</CardHeader>

						<CardBody className="bg-gray-100 rounded-b-xl">
							<Typography
								className="text-xl"
								variant="lead"
								style={{ color: '#14A58B' }}
							>
								Room Available
							</Typography>

							<div className="overflow-auto h-[55vh]">
								<List>
									{/* {data.data_list?.map((item, index) => ( */}
									{messages?.data_list?.map((item, index) => (
										<ListItem
											ripple={false}
											className="py-1 pr-1 pl-4"
											disabled={item?.status === 'Booked'}
											key={index}
										>
											<div>
												<Typography
													variant="h3"
													style={{
														color:
															item?.status === 'Available'
																? '#14A58B'
																: '#B7B7B7',
													}}
												>
													{moment
														.utc(item?.from_utc)
														.tz(timezone)
														.format('HH:mm')}{' '}
													-{' '}
													{moment
														.utc(item?.to_utc)
														.tz(timezone)
														.format('HH:mm')}
												</Typography>
												{/* <Typography
												variant="small"
												color="gray"
												className="font-normal"
											>
												({item.desc})
											</Typography> */}
											</div>
											<ListItemSuffix>
												<Button
													variant="filled"
													disabled={item?.status === 'Booked'}
													className="w-full min-w-[150px] cursor-default"
													style={{
														background:
															item?.status === 'Available'
																? '#14A58B'
																: 'black',
													}}
												>
													{item?.status === 'Available'
														? 'Available'
														: 'Booked'}
												</Button>
											</ListItemSuffix>
										</ListItem>
									))}
								</List>
							</div>
						</CardBody>
					</Card>
				</div>
				<div className="flex flex-col items-center col-span-4 gap-20">
					{/* <canvas
						ref={canvasRef}
						className="w-[300px] h-[300px] bg-white rounded-lg shadow-lg p-6 mt-10"
					></canvas> */}
					<img
						src={`${process.env.NEXT_PUBLIC_BASE_PATH}/barcode.jpeg`}
						className="w-[300px] h-[300px] bg-white rounded-lg shadow-lg mt-10"
					/>
					<p className="text-lg font-semibold text-white border-2 border-white px-4 py-2 rounded-md">
						Scan for Booking
					</p>
					<p className="absolute right-0 bottom-0">
						<img
							src={`${process.env.NEXT_PUBLIC_BASE_PATH}/Product-of-Pelindo.png`}
						/>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Room;
