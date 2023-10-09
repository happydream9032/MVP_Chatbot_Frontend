"use client"

import { useEffect } from 'react';
import dynamic from 'next/dynamic';

const SigninComponent = dynamic(() => import('@/components/Auth/SigninComponent'), { ssr: false });
const SigninPage = ({ providers }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Place your code that accesses `window.closed` property here
    }
  }, []);
  return (
    <>
      <SigninComponent />
    </>
  );
};
// export async function getServerSideProps(context) {
//   const providers = await getProviders();
//   return {
//     props: { providers },
//   };
// }
export default SigninPage;
