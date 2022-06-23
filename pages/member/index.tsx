import React from 'react';
import CardCredit from '../../components/molecules/CardCredit/Card';
import SimpleSidebar from '../../components/organisms/Layout/Sidebar';

export default function Index() {
  return (
    <>
      <SimpleSidebar>
        <CardCredit />
      </SimpleSidebar>
    </>
  );
}
