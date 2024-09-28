import { useState } from 'react'
import { Bell, ChevronDown, Search, Menu, BarChart2, PieChart, Activity, Settings, HelpCircle, DollarSign } from 'lucide-react'

export default function Component() {
  const [activeNav, setActiveNav] = useState('overview')

  return (
    <div className="flex h-screen bg-gray-100 text-gray-800">
      {/* Sidebar */}
      <aside className="w-20 bg-white p-4 flex flex-col items-center justify-between">
        <div className="space-y-8">
          <div className="bg-yellow-400 rounded-full p-2">
            <DollarSign className="w-6 h-6 text-white" />
          </div>
          <nav className="space-y-6">
            <button className={`p-2 rounded-lg ${activeNav === 'overview' ? 'bg-gray-200' : ''}`} onClick={() => setActiveNav('overview')}>
              <BarChart2 className="w-6 h-6" />
            </button>
            <button className={`p-2 rounded-lg ${activeNav === 'portfolio' ? 'bg-gray-200' : ''}`} onClick={() => setActiveNav('portfolio')}>
              <PieChart className="w-6 h-6" />
            </button>
            <button className={`p-2 rounded-lg ${activeNav === 'activity' ? 'bg-gray-200' : ''}`} onClick={() => setActiveNav('activity')}>
              <Activity className="w-6 h-6" />
            </button>
          </nav>
        </div>
        <div className="space-y-6">
          <button className="p-2 rounded-lg">
            <Settings className="w-6 h-6" />
          </button>
          <button className="p-2 rounded-lg">
            <HelpCircle className="w-6 h-6" />
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Overview</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Search" className="pl-10 pr-4 py-2 rounded-full bg-white" />
            </div>
            <button className="p-2 rounded-full bg-white">
              <Bell className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-2">
              <img src="/placeholder.svg?height=32&width=32" alt="User" className="w-8 h-8 rounded-full" />
              <span>Zoia M.</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl col-span-2">
            <h2 className="text-xl font-semibold mb-4">Portfolio</h2>
            <div className="flex justify-between items-end mb-4">
              <div>
                <p className="text-3xl font-bold">$ 17,643.41</p>
                <p className="text-sm text-gray-500">Portfolio balance</p>
              </div>
              <div className="text-green-500 flex items-center">
                <span className="text-lg font-semibold">+$453.00</span>
                <ChevronDown className="w-4 h-4 transform rotate-180" />
              </div>
            </div>
            <div className="h-32 bg-blue-50 rounded-lg"></div>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Your Assets</h2>
            {['BTC', 'LTC', 'ETH'].map((coin, index) => (
              <div key={coin} className={`p-4 rounded-xl ${index === 0 ? 'bg-purple-100' : index === 1 ? 'bg-green-100' : 'bg-blue-100'}`}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">{coin}</span>
                  <span className={`text-sm ${index === 0 ? 'text-purple-600' : index === 1 ? 'text-green-600' : 'text-blue-600'}`}>
                    {index === 0 ? '+1.06%' : index === 1 ? '+0.35%' : '+1.07%'}
                  </span>
                </div>
                <p className="text-lg font-bold">{index === 0 ? '1.25684' : '0.32684'} {coin}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Market is down 0.80%</h2>
              <div className="flex items-center space-x-2">
                <span>24h</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-500">
                  <th className="pb-2">Name</th>
                  <th className="pb-2">Price</th>
                  <th className="pb-2">Change</th>
                  <th className="pb-2">Market Cap</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Band Protocol', price: '$2.42', change: '+3.35%', cap: '$399.8M' },
                  { name: 'VeChain', price: '$7.48', change: '+5.05%', cap: '$462.9M' },
                  { name: 'Aave', price: '$60.84', change: '+7.97%', cap: '$1.2B' },
                  { name: 'Waves', price: '$3.68', change: '+16.40%', cap: '$399.8M' },
                ].map((coin, index) => (
                  <tr key={coin.name} className="border-t">
                    <td className="py-3 flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      <span>{coin.name}</span>
                    </td>
                    <td className="py-3">{coin.price}</td>
                    <td className="py-3 text-green-500">{coin.change}</td>
                    <td className="py-3">{coin.cap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-gray-900 text-white p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Earn <span className="text-yellow-400">free</span> crypto with Coinview Earn!</h2>
            <p className="mb-4">Learn about different cryptocurrencies and earn them for free!</p>
            <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-semibold">Earn Now</button>
          </div>
        </section>
      </main>
    </div>
  )
}
