import Choisissez from '@/shared/modules/choisissez';
import ClientsReview from '@/shared/modules/clientsReview';
import Hero from '@/shared/modules/hero'
import VoriApi from '@/shared/modules/voriApi';
import React from 'react'

function page() {
  return (
    <div className=" bg-linear">
      <Hero />
      <Choisissez/>
      <VoriApi/>
      <ClientsReview/>
    </div>
  );
}

export default page
