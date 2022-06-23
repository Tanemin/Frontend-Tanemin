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
import React from 'react';

import SimpleSidebar from '../../components/organisms/Layout/Sidebar';

export default function Transactions() {
  return (
    <>
      <SimpleSidebar>
        <TableContainer>
          <Table size="lg" variant={'simple'}>
            <Thead>
              <Tr>
                <Th>Plant Name</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Thead>
            <Tbody borderTop={'2px solid #000'}>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </SimpleSidebar>
    </>
  );
}
