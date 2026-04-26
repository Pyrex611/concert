import React, { useState } from 'react';
import { MapPin, ShoppingCart, Minus, Plus, Menu } from 'lucide-react';

export default function ConcertPlatform() {
  // Fan Cards Data
  const fanCards =[
    {
      id: 'fan_basic',
      name: 'Basic Fan Card',
      desc: 'Entry Tier',
      features:[
        'Digital fan membership card',
        'Personalized welcome message',
        'Access to private fan updates/news',
        'Early access to content drops',
        'Monthly shoutout opportunity'
      ],
      price: 500,
      themeBorder: 'border-[#E5C158]',
      themeBg: 'bg-[#E5C158]',
    },
    {
      id: 'fan_silver',
      name: 'Silver Fan Card',
      desc: 'Upgraded Access',
      features:[
        'Everything in Basic',
        'Priority reply to messages',
        'Exclusive behind-the-scenes content',
        'Monthly Q&A session access',
        'Discount on merchandise'
      ],
      price: 1000,
      themeBorder: 'border-[#C0C0C0]', // Silver
      themeBg: 'bg-[#C0C0C0]',
    },
    {
      id: 'fan_gold',
      name: 'Gold Fan Card',
      desc: 'Premium Experience',
      features:[
        'Everything in Silver',
        'Personalized video message (monthly or quarterly)',
        'Private group chat access',
        'Birthday shoutout',
        'Early access to meet & greet tickets'
      ],
      price: 1500,
      themeBorder: 'border-[#FFD700]', // Gold
      themeBg: 'bg-[#FFD700]',
    },
    {
      id: 'fan_plat',
      name: 'Platinum / VIP Fan Card',
      desc: 'The Ultimate Fan',
      features:[
        'Everything in Gold',
        '1-on-1 video call (scheduled)',
        'Free merch package (limited items)',
        'Direct DM access (limited slots)',
        'Name listed on website as top supporter'
      ],
      price: 2000,
      themeBorder: 'border-[#E5E4E2]', // Platinum
      themeBg: 'bg-[#E5E4E2]',
    }
  ];

  // NEW: Meet & Greet Data
  const meetAndGreets =[
    {
      id: 'mg_virtual',
      name: 'Virtual Meet & Greet',
      desc: 'Connect from anywhere',
      features:[
        '5–15 minute private video call',
        'Screenshot/photo moment',
        'Short conversation + fan appreciation'
      ],
      price: 5000,
      themeBorder: 'border-[#E5C158]', // Default Theme
      themeBg: 'bg-[#E5C158]',
    },
    {
      id: 'mg_standard',
      name: 'Standard Physical Meet & Greet',
      desc: 'In-person connection',
      features:[
        'In-person meet',
        'Photo + autograph',
        'Short interaction'
      ],
      price: 10000,
      themeBorder: 'border-[#E5C158]',
      themeBg: 'bg-[#E5C158]',
    },
    {
      id: 'mg_vip',
      name: 'VIP Meet & Greet',
      desc: 'Extended time & perks',
      features:[
        'Extended time (15–30 mins)',
        'Gift package',
        'Professional photos',
        'Priority access (skip line)'
      ],
      price: 15000,
      themeBorder: 'border-[#E5C158]',
      themeBg: 'bg-[#E5C158]',
    },
    {
      id: 'mg_ultimate',
      name: 'Ultimate Experience',
      desc: 'A day to remember',
      features:[
        'Hangout session (event/day experience)',
        'Dinner or exclusive event access',
        'Behind-the-scenes access',
        'Signed exclusive item'
      ],
      price: 20000,
      themeBorder: 'border-[#E5C158]',
      themeBg: 'bg-[#E5C158]',
    }
  ];

  // Combine arrays for calculation purposes
  const allPackages = [...fanCards, ...meetAndGreets];

  // Default to 1 quantity for high-ticket items
  const[selectedPackage, setSelectedPackage] = useState('fan_gold');
  const [quantity, setQuantity] = useState(1);

  // Calculations
  const currentPackage = allPackages.find(p => p.id === selectedPackage);
  const subtotal = currentPackage.price * quantity;
  const serviceFeePerTicket = 30; 
  const totalServiceFee = serviceFeePerTicket * quantity;
  const total = subtotal + totalServiceFee;

  const handleQuantityChange = (delta) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1 && newQuantity <= 8) {
      setQuantity(newQuantity);
    }
  };

  // Checkout Handler (WhatsApp)
  const handleCheckout = () => {
		const email = "redlightmanagementteam011@gmail.com";
		// Format the number to have commas for readability (e.g. $5,000.00)
		const formattedTotal = total.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
		
		const subject = "Concert Ticket Order";
		const body = `Order from the Concert Ticket Platform\nPackage Type: ${currentPackage.name}\nQuantity: ${quantity}\nTotal Price: $${formattedTotal}`;
		
		const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
		
		window.open(mailtoUrl, '_blank');
	};

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#E5C158] selection:text-black pb-20">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-zinc-900 px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-black tracking-[0.3em]">DUCKCLUB</div>
        <button className="text-white hover:text-[#E5C158] transition-colors">
          <Menu size={28} />
        </button>
      </nav>

      {/* Hero Stats */}
      <div className="grid grid-cols-3 border-b border-zinc-900 py-8 px-6 text-center max-w-3xl mx-auto">
        <div>
          <div className="text-4xl md:text-5xl font-bold">30+</div>
          <div className="text-zinc-500 text-xs tracking-widest mt-2 font-semibold">CITIES</div>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-bold">1M+</div>
          <div className="text-zinc-500 text-xs tracking-widest mt-2 font-semibold">FANS</div>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-bold">100+</div>
          <div className="text-zinc-500 text-xs tracking-widest mt-2 font-semibold">SHOWS</div>
        </div>
      </div>

      {/* Main Container - Expanded max width to fit 2 columns perfectly */}
      <main className="max-w-6xl mx-auto px-6">
        {/* 2-Column Package Selection Section */}
        <section className="py-24 border-t border-zinc-900">
          <div className="text-center mb-20">
            <h3 className="text-zinc-500 tracking-[0.3em] text-sm font-semibold uppercase mb-4">Secure Your Experience</h3>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight">Select Your Package</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Column 1: Fan Cards */}
            <div>
              <h3 className="text-3xl font-black tracking-tight mb-8 text-center lg:text-left">Fan Memberships</h3>
              <div className="flex flex-col gap-6">
                {fanCards.map((pkg) => {
                  const isSelected = selectedPackage === pkg.id;
                  return (
                    <div 
                      key={pkg.id}
                      onClick={() => setSelectedPackage(pkg.id)}
                      className={`relative p-8 rounded-2xl cursor-pointer transition-all duration-300 border-2 ${
                        isSelected ? `${pkg.themeBorder} bg-zinc-900/40` : 'border-zinc-800 bg-transparent hover:border-zinc-600'
                      }`}
                    >
                      <div className="flex items-start gap-5">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mt-1 flex-shrink-0 transition-colors ${
                          isSelected ? pkg.themeBorder : 'border-zinc-600'
                        }`}>
                          {isSelected && <div className={`w-3 h-3 ${pkg.themeBg} rounded-full`} />}
                        </div>

                        <div className="w-full">
                          <h3 className="text-2xl font-bold">{pkg.name}</h3>
                          <p className="text-zinc-400 text-sm mt-2">{pkg.desc}</p>
                          
                          <ul className="mt-6 space-y-3">
                            {pkg.features.map((feature, idx) => (
                              <li key={idx} className="text-sm text-zinc-300 flex items-center gap-3">
                                <div className={`w-1.5 h-1.5 ${pkg.themeBg} rounded-full flex-shrink-0`} />
                                {feature}
                              </li>
                            ))}
                          </ul>

                          <div className="mt-8 flex flex-col items-start gap-1">
                            <span className="text-4xl font-bold text-white">${pkg.price.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Column 2: Meet & Greets */}
            <div>
              <h3 className="text-3xl font-black tracking-tight mb-8 text-center lg:text-left mt-16 lg:mt-0">Meet & Greet</h3>
              <div className="flex flex-col gap-6">
                {meetAndGreets.map((pkg) => {
                  const isSelected = selectedPackage === pkg.id;
                  return (
                    <div 
                      key={pkg.id}
                      onClick={() => setSelectedPackage(pkg.id)}
                      className={`relative p-8 rounded-2xl cursor-pointer transition-all duration-300 border-2 ${
                        isSelected ? `${pkg.themeBorder} bg-zinc-900/40` : 'border-zinc-800 bg-transparent hover:border-zinc-600'
                      }`}
                    >
                      <div className="flex items-start gap-5">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mt-1 flex-shrink-0 transition-colors ${
                          isSelected ? pkg.themeBorder : 'border-zinc-600'
                        }`}>
                          {isSelected && <div className={`w-3 h-3 ${pkg.themeBg} rounded-full`} />}
                        </div>

                        <div className="w-full">
                          <h3 className="text-2xl font-bold">{pkg.name}</h3>
                          <p className="text-zinc-400 text-sm mt-2">{pkg.desc}</p>
                          
                          <ul className="mt-6 space-y-3">
                            {pkg.features.map((feature, idx) => (
                              <li key={idx} className="text-sm text-zinc-300 flex items-center gap-3">
                                <div className={`w-1.5 h-1.5 ${pkg.themeBg} rounded-full flex-shrink-0`} />
                                {feature}
                              </li>
                            ))}
                          </ul>

                          <div className="mt-8 flex flex-col items-start gap-1">
                            <span className="text-4xl font-bold text-white">${pkg.price.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </section>

        {/* Order Summary Section - Constrained to max-w-3xl */}
        <div className="max-w-3xl mx-auto">
          <section className="py-12 px-8 bg-[#0a0a0a] rounded-2xl border border-zinc-900 mb-24">
            <h3 className="text-2xl font-bold mb-8">Order Summary</h3>
            
            <div className="flex justify-between items-center py-4 border-b border-zinc-900">
              <span className="text-zinc-400">Package Type</span>
              <span className="font-semibold text-right max-w-[60%]">{currentPackage.name}</span>
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
                <span>${subtotal.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Service Fees</span>
                <span>${totalServiceFee.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
              </div>
              <div className="flex justify-between items-end pt-4">
                <span className="text-xl font-bold">Total</span>
                <span className="text-3xl font-black">${total.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
              </div>
            </div>

            <button 
              onClick={handleCheckout}
              className="w-full mt-10 bg-white text-black font-black tracking-[0.1em] py-4 rounded-sm flex justify-center items-center gap-3 hover:bg-zinc-200 transition-colors"
            >
              <ShoppingCart size={20} />
              CHECKOUT
            </button>
            
            <p className="text-center text-zinc-600 text-xs mt-4">Secure checkout powered by Stripe</p>
          </section>

          {/* Newsletter Section */}
          <section className="py-24 border-t border-zinc-900 text-center">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Never Miss an Update</h2>
            <p className="text-zinc-400 max-w-md mx-auto mb-10">
              Subscribe to get exclusive presale access and VIP updates delivered to your inbox.
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
        </div>
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