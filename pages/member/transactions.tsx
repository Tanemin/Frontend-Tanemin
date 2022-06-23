import {
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

import SimpleSidebar from '../../components/organisms/Layout/Sidebar';
import { getUserData } from '../../services/auth';

export default function Transactions() {
  const [transactions, setTransactions] = useState([
    {
      id: '',
      plant: {
        plantName: '',
        price: 0,
      },
      ammount: 0,
      CreatedAt: Date.now(),
    },
  ]);
  console.log(transactions);
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
              </Tr>
            </Thead>
            <Tbody borderTop={'2px solid #000'}>
              {transactions.map((item) => {
                const date = item.CreatedAt;
                const total = item.plant.price * item.ammount;
                return (
                  <>
                    <Tr key={item.id}>
                      <Td>{item.plant.plantName}</Td>
                      <Td>{item.plant.price}</Td>
                      <Td>{item.ammount}</Td>
                      <Td>{date}</Td>
                      <Td>{total}</Td>
                    </Tr>
                  </>
                );
              })}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>Total</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </SimpleSidebar>
    </>
  );
}
