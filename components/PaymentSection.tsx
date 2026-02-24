"use client";

import { useState } from "react";

export default function PaymentSection() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="py-20 px-4 bg-gray-50/95">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">
            Pay to activate your plan
          </h2>
          <div className="space-y-6">
            <div className="text-center">
              <p className="text-lg text-gray-700 mb-2">
                <span className="font-semibold">Company:</span> Twin Enterprises
              </p>
              <p className="text-sm text-gray-600">
                400/2, Shaniwar Peth, Sudarshan Apt, Pune 411038
              </p>
            </div>
            <div className="text-center">
              <p className="text-xl font-semibold text-gray-900 mb-6">Scan & Pay</p>
              <div className="flex justify-center">
                {imageError ? (
                  <div className="w-64 h-64 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                    <p className="text-gray-400 text-sm">QR Code Image</p>
                  </div>
                ) : (
                  <img
                    src="/qr-code.png"
                    alt="Payment QR Code"
                    className="w-64 h-64 object-contain"
                    onError={() => setImageError(true)}
                  />
                )}
              </div>
            </div>
            <div className="text-center pt-4 border-t border-gray-200">
              <p className="text-gray-700">
                After payment, send transaction ID Or Payment receipt to:{" "}
                <a
                  href={`https://wa.me/919960549912?text=${encodeURIComponent("Hi, I have made the payment for FootfallIQ. Here are my payment details:")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    if (typeof window !== "undefined" && window.gtag) {
                      window.gtag("event", "whatsapp_click", {
                        event_category: "engagement",
                        event_label: "Payment Section WhatsApp",
                        value: 1,
                      });
                    }
                  }}
                  className="text-primary-600 hover:text-primary-700 font-semibold underline"
                >
                  WhatsApp 919960549912
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

