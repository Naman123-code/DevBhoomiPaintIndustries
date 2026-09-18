"use client";

import { useState } from "react";
import { Calculator, AlertCircle } from "lucide-react";

interface CoverageCalculatorProps {
  productCategory: "putty" | "cement" | "adhesive" | "grout";
  productName: string;
}

export default function CoverageCalculator({ productCategory, productName }: CoverageCalculatorProps) {
  const [area, setArea] = useState<number | "">("");

  // Coverage rates (sq ft per kg) - Approximations
  const coverageRates = {
    putty: 15, // ~15 sq.ft per kg for 2 coats
    cement: 10, // ~10 sq.ft per kg for 2 coats
    adhesive: 4, // ~4 sq.ft per kg for standard thickness
    grout: 30, // ~30 sq.ft per kg
  };

  const coveragePerKg = coverageRates[productCategory] || 10;
  
  const calculateRequirements = () => {
    if (!area || isNaN(Number(area)) || Number(area) <= 0) return null;
    
    const requiredKg = Math.ceil(Number(area) / coveragePerKg);
    
    // Suggest packaging (Assuming 20kg bags are standard, fallback to 40kg)
    const bagSize = productCategory === "putty" ? 40 : 20;
    const bags = Math.ceil(requiredKg / bagSize);

    return {
      kg: requiredKg,
      bags: bags,
      bagSize: bagSize
    };
  };

  const result = calculateRequirements();

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="bg-db-charcoal p-6 text-white flex items-center gap-4">
        <div className="p-3 bg-db-gold/20 text-db-gold rounded-full">
          <Calculator size={28} />
        </div>
        <div>
          <h3 className="text-2xl font-bold">Coverage Calculator</h3>
          <p className="text-gray-300 text-sm">Estimate how much {productName} you need</p>
        </div>
      </div>

      <div className="p-8">
        <div className="mb-8">
          <label htmlFor="area" className="block text-sm font-bold text-db-charcoal mb-2">
            Total Application Area (in Square Feet)
          </label>
          <div className="flex gap-4">
            <input
              type="number"
              id="area"
              value={area}
              onChange={(e) => setArea(e.target.value ? Number(e.target.value) : "")}
              placeholder="e.g. 1000"
              className="flex-grow bg-db-snow border border-gray-200 rounded-md px-4 py-3 text-db-charcoal focus:outline-none focus:ring-2 focus:ring-db-gold focus:border-transparent transition-shadow"
            />
          </div>
          <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
            <AlertCircle size={14} /> Assuming standard application thickness and ideal surface conditions.
          </p>
        </div>

        {result && (
          <div className="bg-db-snow rounded-xl p-6 border border-db-gold/30">
            <h4 className="text-lg font-bold text-db-charcoal mb-4 border-b border-gray-200 pb-2">Estimated Requirement</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                <p className="text-gray-500 text-sm mb-1">Total Quantity</p>
                <p className="text-3xl font-bold text-db-charcoal">{result.kg} <span className="text-base text-gray-500">KG</span></p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                <p className="text-gray-500 text-sm mb-1">Recommended Bags</p>
                <p className="text-3xl font-bold text-db-charcoal">{result.bags} <span className="text-base text-gray-500 line-clamp-1 truncate">x {result.bagSize}KG</span></p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
