import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white p-8 mt-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div>
            <h4 className="font-bold mb-2">Company</h4>
            <ul className="text-sm space-y-1">
              <li>About Us</li>
              <li>Careers</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Services</h4>
            <ul className="text-sm space-y-1">
              <li>File ITR</li>
              <li>CA Assistance</li>
              <li>GST Services</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Support</h4>
            <ul className="text-sm space-y-1">
              <li>Contact</li>
              <li>Help Center</li>
              <li>Terms</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Follow Us</h4>
            <ul className="text-sm space-y-1">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8 text-sm">© 2025 TaxEazy. All rights reserved.</div>
      </footer>
  )
}

export default Footer