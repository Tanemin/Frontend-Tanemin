import React from 'react';
import { Image, Heading } from '@chakra-ui/react';

export default function Bill() {
  return (
    <div>
       <Heading as='h2' size='sm'>
          Shoping Bill 
        </Heading>
    <table>
      <tbody>
      <Image 
        src="/assets/content-img.jpg"
        className="imagecard"
        alt=""
        />
        <tr>
          <td>Shipping fee</td>
          <td align="right">$5.43</td>
        </tr>
        <tr>
          <td>Discount 10%</td>
          <td align="right">-$1.89</td>
        </tr>
        <tr>
          <td>Price Total</td>
          <td align="right">$84.82</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td align="right">$88.36</td>
        </tr>
      </tfoot>
    </table>
  </div>
  )
}
