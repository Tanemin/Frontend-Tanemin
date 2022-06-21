import React, { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Checkbox,
  Progress,
  Text,
} from '@chakra-ui/react';

const Schedule = () => {
  const [data, setData] = useState(DUMMY_SCHEDULE);
  const [progress, setProgress] = useState(1.5);

  const checkData = (itemID: number, scheduleID: number) => {
    const newData = [...data];
    newData[itemID].items[scheduleID].status =
      !newData[itemID].items[scheduleID].status;

    setData(newData);
  };

  const checkAllData = (itemID: number) => {
    const newData = [...data];
    newData[itemID].items.forEach((item) => (item.status = !item.status));

    setData(newData);
  };

  useEffect(() => {
    let totalSchedule = 0;
    let finishedSchedule = 0;

    data.forEach((item) => {
      item.items.forEach((item) => {
        totalSchedule++;
        if (item.status) {
          finishedSchedule++;
        }
      });
    });
    setProgress((finishedSchedule / totalSchedule) * 100);
  }, [data]);

  return (
    <>
      <Box>
        <div className="member-progress">
          <Text fontSize={'2xl'} marginTop="2">
            Progress : {progress.toFixed()}%
          </Text>
          <Progress colorScheme={'green'} height={30} value={progress} />
        </div>
      </Box>
      <Accordion allowMultiple>
        {data.map((item, itemID) => (
          <AccordionItem key={item.id}>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Checkbox
                    colorScheme={'teal'}
                    isChecked={item.items.every((item) => item.status)}
                    isDisabled={item.items.every((item) => item.status)}
                    isIndeterminate={
                      item.items.some((item) => item.status) &&
                      !item.items.every((item) => item.status)
                    }
                    onChange={() => checkAllData(itemID)}
                  >
                    <Text fontSize={'large'}>{item.title}</Text>
                  </Checkbox>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className="member-accordion-panel" pb={4}>
              {item.items.map((item, scheduleID) => (
                <Checkbox
                  isChecked={item.status}
                  onChange={() => checkData(itemID, scheduleID)}
                  key={scheduleID}
                >
                  <Text fontSize={'md'}>{item.label}</Text>
                </Checkbox>
              ))}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

const DUMMY_SCHEDULE = [
  {
    id: 1,
    title: 'Day 1',
    status: false,
    items: [
      {
        label: 'Siram tanaman',
        status: false,
      },
      {
        label: 'Beri pupuk',
        status: false,
      },
    ],
  },
  {
    id: 2,
    title: 'Day 2',
    status: false,
    items: [
      {
        label: 'Siram tanaman',
        status: false,
      },
      {
        label: 'Beri pupuk',
        status: false,
      },
    ],
  },
  {
    id: 3,
    title: 'Day 3',
    status: false,
    items: [
      {
        label: 'Siram tanaman',
        status: false,
      },
      {
        label: 'Beri pupuk',
        status: false,
      },
    ],
  },
  {
    id: 4,
    title: 'Day 4',
    status: false,
    items: [
      {
        label: 'Siram tanaman',
        status: false,
      },
      {
        label: 'Beri pupuk',
        status: false,
      },
    ],
  },
  {
    id: 5,
    title: 'Day 5',
    status: false,
    items: [
      {
        label: 'Siram tanaman',
        status: false,
      },
      {
        label: 'Beri pupuk',
        status: false,
      },
    ],
  },
  {
    id: 6,
    title: 'Day 6',
    status: false,
    items: [
      {
        label: 'Siram tanaman',
        status: false,
      },
      {
        label: 'Beri pupuk',
        status: false,
      },
    ],
  },
  {
    id: 7,
    title: 'Day 7',
    status: false,
    items: [
      {
        label: 'Siram tanaman',
        status: false,
      },
      {
        label: 'Beri pupuk',
        status: false,
      },
    ],
  },
  {
    id: 8,
    title: 'Day 8',
    status: false,
    items: [
      {
        label: 'Siram tanaman',
        status: false,
      },
      {
        label: 'Beri pupuk',
        status: false,
      },
    ],
  },
  {
    id: 9,
    title: 'Day 9',
    status: false,
    items: [
      {
        label: 'Siram tanaman',
        status: false,
      },
      {
        label: 'Beri pupuk',
        status: false,
      },
    ],
  },
  {
    id: 10,
    title: 'Day 10',
    status: false,
    items: [
      {
        label: 'Siram tanaman',
        status: false,
      },
      {
        label: 'Beri pupuk',
        status: false,
      },
    ],
  },
  {
    id: 11,
    title: 'Day 11',
    status: false,
    items: [
      {
        label: 'Siram tanaman',
        status: false,
      },
      {
        label: 'Beri pupuk',
        status: false,
      },
    ],
  },
  {
    id: 12,
    title: 'Day 12',
    status: false,
    items: [
      {
        label: 'Siram tanaman',
        status: false,
      },
      {
        label: 'Beri pupuk',
        status: false,
      },
    ],
  },
  {
    id: 13,
    title: 'Day 13',
    status: false,
    items: [
      {
        label: 'Siram tanaman',
        status: false,
      },
      {
        label: 'Beri pupuk',
        status: false,
      },
    ],
  },
  {
    id: 14,
    title: 'Day 14',
    status: false,
    items: [
      {
        label: 'Siram tanaman',
        status: false,
      },
      {
        label: 'Beri pupuk',
        status: false,
      },
    ],
  },
];

export default Schedule;
