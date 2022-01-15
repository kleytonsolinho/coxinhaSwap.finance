import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Dashboard from '../pages/Dashboard/Dashboard';

export default function Approutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboad" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
