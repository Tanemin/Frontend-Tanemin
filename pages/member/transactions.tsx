import {
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';
import ModalReview from '../../components/atoms/ModalReview';

import SimpleSidebar from '../../components/organisms/Layout/Sidebar';
import { getUserData } from '../../services/auth';

export default function Transactions() {
  const [transactions, setTransactions] = useState([
    {
      _id: Math.random(),
      plant: {
        id: '',
        plantName: 'Test',
        price: 0,
      },
      ammount: 0,
      CreatedAt: 'Date.now',
      isReview: false,
    },
  ]);
  const getTransactionsList = useCallback(async () => {
    try {
      const data = await getUserData();
      setTransactions(data.transactions);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getTransactionsList();
  }, [getTransactionsList]);
  return (
    <>
      <SimpleSidebar>
        <h2 className="featured_title">Transaksi</h2>
        <TableContainer>
          <Table size="lg" variant={'simple'}>
            <Thead>
              <Tr>
                <Th>Nama Tanaman</Th>
                <Th>Harga</Th>
                <Th>Jumlah</Th>
                <Th>Waktu</Th>
                <Th>Total</Th>
                <Th>Review</Th>
              </Tr>
            </Thead>
            <Tbody borderTop={'2px solid #000'}>
              {transactions.length === 0 ? (
                <h3>Belum ada transaksi</h3>
              ) : (
                transactions.map((item, index) => {
                  const date = item.CreatedAt;
                  const total = item.plant.price * item.ammount;

                  return (
                    <>
                      <Tr key={index}>
                        <Td>{item.plant.plantName}</Td>
                        <Td>{item.plant.price}</Td>
                        <Td>{item.ammount}</Td>
                        <Td>{date.substring(0, 10)}</Td>
                        <Td>{total}</Td>
                        <Td>
                          {!item.isReview ? (
                            <ModalReview _id={`${item.plant.id}`} />
                          ) : (
                            <Button disabled>Reviewed</Button>
                          )}
                        </Td>
                      </Tr>
                    </>
                  );
                })
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </SimpleSidebar>
    </>
  );
}
