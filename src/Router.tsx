import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'
import { Confirmed } from './pages/Confirmed'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />}/>
        <Route path='/checagem' element={<Checkout />}/>
        <Route path='/checagem/pedido-confirmado' element={<Confirmed />}/>
      </Route>
    </Routes>
  )
}
