import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Swap from '../pages/Swap/Swap';

export default function Approutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/swap" element={<Swap />} />
      </Routes>
    </BrowserRouter>
  );
}
