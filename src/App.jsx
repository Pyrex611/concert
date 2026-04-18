import React, { useState } from 'react';
import { MapPin, ShoppingCart, Minus, Plus, Menu } from 'lucide-react';

export default function ConcertPlatform() {
  // Hardcoded data matching the video exactly
  const tourDates =[
    { id: 1, date: "APR 25", year: "2026", city: "Los Angeles", venue: "SoFi Stadium", status: "available" },
    { id: 2, date: "APR 30", year: "2026", city: "Mexico", venue: "Madison Square Garden", status: "soldout" },
    { id: 3, date: "MAY 06", year: "2026", city: "London", venue: "Wembley Stadium", status: "limited" },
  ];

  const ticketOptions =[
    {
      id: 'ga',
      name: 'Regular',
      desc: 'Standing room on the main floor',
      features: ['Standing room', 'Access to main floor', 'Commemorative wristband'],
      price: 750,
      originalPrice: 1000
    },
    {
      id: 'vip',
      name: 'VIP Experience',
      tag: 'MOST POPULAR',
      desc: 'Premium seating with exclusive perks',
      features:['Reserved premium seating', 'VIP entrance', 'Exclusive merch pack', 'Early venue access'],
      price: 1000,
      originalPrice: 1500
    },
    {
      id: 'plat',
      name: 'V. BEV.I.P Experience',
      desc: 'The ultimate concert experience',
      features:['Front row seating', 'Meet & greet opportunity', 'Signed merchandise', 'Backstage tour', 'Complimentary drinks'],
      price: 1600,
      originalPrice: 2000
    }
  ];

  // State for interactivity (matches video's default state)
  const[selectedTicket, setSelectedTicket] = useState('vip');
  const [quantity, setQuantity] = useState(2);

  // Calculations
  const currentTicket = ticketOptions.find(t => t.id === selectedTicket);
  const subtotal = currentTicket.price * quantity;
  const serviceFeePerTicket = 30; // Derived from the video: $60 fee for 2 tickets
  const totalServiceFee = serviceFeePerTicket * quantity;
  const total = subtotal + totalServiceFee;

  const handleQuantityChange = (delta) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1 && newQuantity <= 8) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#E5C158] selection:text-black pb-20">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-zinc-900 px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-black tracking-[0.3em]">L I V E</div>
        <button className="text-white hover:text-[#E5C158] transition-colors">
          <Menu size={28} />
        </button>
      </nav>

      {/* Hero Stats */}
      <div className="grid grid-cols-3 border-b border-zinc-900 py-8 px-6 text-center">
        <div>
          <div className="text-4xl md:text-5xl font-bold">0+</div>
          <div className="text-zinc-500 text-xs tracking-widest mt-2 font-semibold">CITIES</div>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-bold">1M+</div>
          <div className="text-zinc-500 text-xs tracking-widest mt-2 font-semibold">FANS</div>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-bold">100</div>
          <div className="text-zinc-500 text-xs tracking-widest mt-2 font-semibold">SHOWS</div>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-6">
        
        {/* Tour Dates Section */}
        <section className="py-24">
          <div className="text-center mb-16">
            <h3 className="text-zinc-500 tracking-[0.3em] text-sm font-semibold uppercase mb-4">Upcoming Shows</h3>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight">Tour Dates</h2>
          </div>

          <div className="flex flex-col">
            {tourDates.map((show) => (
              <div key={show.id} className="flex justify-between items-center py-8 border-b border-zinc-900 group">
                <div className="flex gap-6 items-start w-2/3">
                  <div className="text-center min-w-[80px]">
                    <div className="text-3xl font-bold tracking-tight">{show.date}</div>
                    <div className="text-zinc-500 text-sm font-medium mt-1">{show.year}</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 font-semibold text-xl">
                      <MapPin size={18} className="text-zinc-500" />
                      {show.city}
                    </div>
                    <div className="text-zinc-400 text-sm ml-7 mt-1">{show.venue}</div>
                  </div>
                </div>
                <div className="w-1/3 flex flex-col items-end justify-center gap-3">
                  {show.status === 'limited' && (
                    <span className="text-[#E5C158] text-[11px] font-bold tracking-[0.2em] uppercase">Limited</span>
                  )}
                  {show.status === 'soldout' ? (
                    <span className="text-zinc-600 text-sm font-bold tracking-[0.2em] mt-2">SOLD OUT</span>
                  ) : (
                    <button className="border border-zinc-700 hover:border-white text-white px-6 py-3 text-xs font-bold tracking-[0.2em] transition-all rounded-sm hover:bg-white hover:text-black">
                      GET TICKETS
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="border border-zinc-700 hover:border-white text-white px-8 py-4 text-sm font-bold tracking-[0.2em] transition-all rounded-sm w-full md:w-auto">
              VIEW ALL DATES
            </button>
          </div>
        </section>

        {/* Ticket Selection Section */}
        <section className="py-24 border-t border-zinc-900">
          <div className="text-center mb-16">
            <h3 className="text-zinc-500 tracking-[0.3em] text-sm font-semibold uppercase mb-4">Secure Your Spot</h3>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight">Select Your Tickets</h2>
          </div>

          <div className="flex flex-col gap-6">
            {ticketOptions.map((ticket) => {
              const isSelected = selectedTicket === ticket.id;
              
              return (
                <div 
                  key={ticket.id}
                  onClick={() => setSelectedTicket(ticket.id)}
                  className={`relative p-8 rounded-2xl cursor-pointer transition-all duration-300 border-2 ${
                    isSelected ? 'border-[#E5C158] bg-zinc-900/40' : 'border-zinc-800 bg-transparent hover:border-zinc-600'
                  }`}
                >
                  {/* Most Popular Tag */}
                  {ticket.tag && (
                    <div className="absolute -top-3.5 left-8 bg-[#E5C158] text-black text-[10px] font-black tracking-widest px-3 py-1.5 uppercase rounded-sm">
                      {ticket.tag}
                    </div>
                  )}

                  <div className="flex items-start gap-5">
                    {/* Custom Radio Button */}
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mt-1 flex-shrink-0 transition-colors ${
                      isSelected ? 'border-[#E5C158]' : 'border-zinc-600'
                    }`}>
                      {isSelected && <div className="w-3 h-3 bg-[#E5C158] rounded-full" />}
                    </div>

                    <div className="w-full">
                      <h3 className="text-2xl font-bold">{ticket.name}</h3>
                      <p className="text-zinc-400 text-sm mt-2">{ticket.desc}</p>
                      
                      {/* Features List */}
                      <ul className="mt-6 space-y-3">
                        {ticket.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-zinc-300 flex items-center gap-3">
                            <div className="w-1.5 h-1.5 bg-[#E5C158] rounded-full flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* Pricing block */}
                      <div className="mt-8 flex flex-col items-start gap-1">
                        <div className="flex items-end gap-3">
                          <span className="text-4xl font-bold text-white">${ticket.price}</span>
                          <span className="text-zinc-500 line-through text-xl pb-1">${ticket.originalPrice}</span>
                        </div>
                        <span className="text-zinc-500 text-xs font-semibold tracking-widest uppercase">Per Ticket</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Order Summary Section */}
        <section className="py-12 px-8 bg-[#0a0a0a] rounded-2xl border border-zinc-900 mb-24">
          <h3 className="text-2xl font-bold mb-8">Order Summary</h3>
          
          <div className="flex justify-between items-center py-4 border-b border-zinc-900">
            <span className="text-zinc-400">Ticket Type</span>
            <span className="font-semibold">{currentTicket.name}</span>
          </div>
          
          <div className="flex justify-between items-center py-6 border-b border-zinc-900">
            <span className="text-zinc-400">Quantity</span>
            <div className="flex items-center gap-4 bg-zinc-900 rounded-sm border border-zinc-800 p-1">
              <button 
                onClick={() => handleQuantityChange(-1)}
                className="w-8 h-8 flex items-center justify-center hover:bg-zinc-800 rounded transition-colors"
                disabled={quantity <= 1}
              >
                <Minus size={16} className={quantity <= 1 ? "text-zinc-600" : "text-white"} />
              </button>
              <span className="w-4 text-center font-bold">{quantity}</span>
              <button 
                onClick={() => handleQuantityChange(1)}
                className="w-8 h-8 flex items-center justify-center hover:bg-zinc-800 rounded transition-colors"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          <div className="pt-6 space-y-4">
            <div className="flex justify-between text-zinc-400">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-zinc-400">
              <span>Service Fees</span>
              <span>${totalServiceFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-end pt-4">
              <span className="text-xl font-bold">Total</span>
              <span className="text-3xl font-black">${total.toFixed(2)}</span>
            </div>
          </div>

          <button className="w-full mt-10 bg-white text-black font-black tracking-[0.1em] py-4 rounded-sm flex justify-center items-center gap-3 hover:bg-zinc-200 transition-colors">
            <ShoppingCart size={20} />
            CHECKOUT
          </button>
          
          <p className="text-center text-zinc-600 text-xs mt-4">Secure checkout powered by Stripe</p>
        </section>

        {/* Newsletter Section */}
        <section className="py-24 border-t border-zinc-900 text-center">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Never Miss a Show</h2>
          <p className="text-zinc-400 max-w-md mx-auto mb-10">
            Subscribe to get exclusive presale access and tour updates delivered to your inbox.
          </p>
          
          <form className="max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full bg-transparent border-b-2 border-white pb-3 px-2 text-white placeholder-zinc-500 focus:outline-none focus:border-[#E5C158] transition-colors"
            />
            <p className="text-zinc-600 text-[11px] mt-4">
              By subscribing, you agree to our Privacy Policy.<br/>Unsubscribe anytime.
            </p>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900 pt-16 pb-8 px-6">
        <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div>
            <h4 className="font-bold tracking-[0.2em] mb-6 text-sm">TOUR</h4>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">All Dates</a></li>
              <li><a href="#" className="hover:text-white transition-colors">VIP Packages</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Meet & Greet</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold tracking-[0.2em] mb-6 text-sm">HELP</h4>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accessibility</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold tracking-[0.2em] mb-6 text-sm">LEGAL</h4>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold tracking-[0.2em] mb-6 text-sm">FOLLOW</h4>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Spotify</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto border-t border-zinc-900 pt-8 flex justify-center">
           <div className="text-3xl font-black tracking-[0.4em] text-white">L I V E</div>
        </div>
      </footer>
    </div>
  );
}