import { Avatar, WrapItem } from '@chakra-ui/react';
import React from 'react';

export default function Testimonial() {
  return (
    <section className="testimoni">
      <h2 className="featured_title">Testimoni</h2>
      <p className="testimoni_text">
        Awalnya saya malu dengan mertua karena tidak bisa memasak, kini mereka
        lebih suka makan malam di rumah demi menyantap masakan yang saya buat
        sendiri
      </p>
      <div className="testimoni_detail">
        <WrapItem>
          <Avatar
            size={'xl'}
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
          />
        </WrapItem>
      </div>
    </section>
  );
}
