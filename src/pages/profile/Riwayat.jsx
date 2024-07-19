import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from '../../assets/img/riwayat/empty.json';

function Riwayat() {
  const container = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true, 
      autoplay: true,
      animationData: animationData,
    });

    return () => {
      anim.destroy();
    };
  }, []);

  return (
    <div className="w-full min-h-screen md:px-20 py-24 flex flex-col items-center justify-center">
      <div className="size-72" ref={container} style={{ overflow: 'hidden' }}></div>
      <p className="text-center mt-4 text-lg font-medium text-secondary-abu">Belum ada transaksi</p>
    </div>
  );
}

export default Riwayat;
