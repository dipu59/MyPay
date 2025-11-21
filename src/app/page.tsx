import Choisissez from '@/shared/modules/choisissez';
import Hero from '@/shared/modules/hero'
import VoriApi from '@/shared/modules/voriApi';
import React from 'react'

function page() {
  return (
    <div className=" bg-linear">
      <Hero />
      <Choisissez/>
      <VoriApi/>
    </div>
  );
}

export default page
