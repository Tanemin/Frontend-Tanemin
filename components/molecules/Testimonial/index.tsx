import { Avatar, WrapItem } from '@chakra-ui/react';
import React from 'react';

export default function Testimonial() {
  return (
    <section className="testimoni">
      <h2 className="featured_title">Testimoni</h2>
      <p className="testimoni_text">
        Sangat membantu saya untuk melakukan hal yang bermanfaat ketika libur
        tiba, setelah berhari hari jenuh dengan pekerjaan menanam membuat saya
        terasa lebih relax
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
