"use client";

import { useState } from "react";
import { Send, CheckCircle, Check } from "lucide-react";
import { products } from "@/data/products";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const toggleProduct = (productName: string) => {
    setSelectedProducts(prev => 
      prev.includes(productName) 
        ? prev.filter(p => p !== productName)
        : [...prev, productName]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      product: selectedProducts.join(", ") || "None selected",
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
        setSelectedProducts([]);
      } else {
        const errorData = await response.json();
        setStatus("error");
        setErrorMessage(errorData.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("A network error occurred. Please try again later.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center h-full flex flex-col items-center justify-center min-h-[400px]">
        <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
        <p className="text-gray-600 mb-6">Thank you for reaching out. Our team will get back to you shortly.</p>
        <button 
          onClick={() => setStatus("idle")}
          className="px-6 py-2 bg-white border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50 transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="w-full">
      <h3 className="text-2xl font-bold text-db-charcoal mb-6">Send us a Message</h3>
      
      {status === "error" && (
        <div className="bg-red-50 text-red-600 p-4 rounded-md mb-6 text-sm border border-red-200">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-db-gold focus:border-transparent transition-shadow bg-gray-50 focus:bg-white"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-db-gold focus:border-transparent transition-shadow bg-gray-50 focus:bg-white"
              placeholder="+91 98765 43210"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-db-gold focus:border-transparent transition-shadow bg-gray-50 focus:bg-white"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">Interested Products (Select multiple)</label>
          <div className="flex flex-wrap gap-2">
            {products.map(p => {
              const isSelected = selectedProducts.includes(p.name);
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => toggleProduct(p.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors flex items-center gap-2 ${
                    isSelected 
                      ? "bg-db-charcoal border-db-charcoal text-white" 
                      : "bg-gray-50 border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {isSelected && <Check size={14} />}
                  {p.name}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
          <textarea 
            id="message" 
            name="message" 
            rows={4}
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-db-gold focus:border-transparent transition-shadow bg-gray-50 focus:bg-white resize-none"
            placeholder="How can we help you?"
          ></textarea>
        </div>

        <button 
          type="submit" 
          disabled={status === "loading"}
          className="w-full bg-db-charcoal text-white font-bold py-4 px-6 rounded-md hover:bg-db-gold hover:text-db-charcoal transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
        >
          {status === "loading" ? "Sending..." : "Send Inquiry"} 
          {status !== "loading" && <Send size={18} className="group-hover:translate-x-1 transition-transform" />}
        </button>
      </form>
    </div>
  );
}
