import React, { useState } from 'react';
import { Calculator, ArrowLeft } from 'lucide-react';

function App() {
  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState('');
  const [projectSize, setProjectSize] = useState('');
  const [projectHeight, setProjectHeight] = useState('');

  const handleProjectTypeSelect = (type: string) => {
    setProjectType(type);
    setStep(2);
  };

  const handleCalculate = () => {
    setStep(3);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        {step === 1 && (
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-orange-600" />
              </div>
            </div>

            <h2 className="text-xl font-medium text-gray-900 text-center mb-8">
              What are you looking to replace?
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <button
                onClick={() => handleProjectTypeSelect('gypcrete')}
                className="p-6 border border-orange-300 rounded-lg hover:border-orange-400 transition-colors text-left"
              >
                
                <h3 className="text-lg font-medium text-gray-900 mb-2"> <p className="text-orange-600 text-xs font-medium mb-1">Wet Gypsum</p> Underlayment</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Replace OSB + MAXTERRA Underlayment
                </p>
                <p className="text-gray-600 text-xs">
                  MgO Fire- and Water-Resistant Underlayment
                </p>
              </button>

              <button
                onClick={() => handleProjectTypeSelect('subfloor')}
                className="p-6 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors text-left"
              >
                <h3 className="text-lg font-medium text-gray-900 mb-2">Entire Subfloor System</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Replace subfloor with MAXTERRA
                </p>
                <p className="text-gray-600 text-xs">
                  MgO Non-Combustible Single Layer Structural Floor Panels
                </p>
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="bg-white rounded-lg shadow-sm p-8">
            <button
              onClick={handleBack}
              className="flex items-center text-gray-600 hover:text-gray-800 mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to project type
            </button>

            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                <Calculator className="w-8 h-8 text-orange-600" />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-medium">$</span>
                </div>
              </div>
              <h2 className="text-2xl font-medium text-gray-900 mb-2">Project Details</h2>
              <p className="text-gray-600">Tell us about your project for accurate savings calculations</p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project size (sq ft)
                </label>
                <input
                  type="number"
                  value={projectSize}
                  onChange={(e) => setProjectSize(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter square footage"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project size (sq ft)
                </label>
                <input
                  type="number"
                  value={projectHeight}
                  onChange={(e) => setProjectHeight(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
                  placeholder="Enter height"
                />
              </div>

              <button
                onClick={handleCalculate}
                className="w-full bg-orange-600 text-white py-3 px-6 rounded-full hover:bg-orange-700 transition-colors font-medium"
              >
                Calculate Your Savings
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="bg-white rounded-lg shadow-sm p-8">
            <button
              onClick={handleBack}
              className="flex items-center text-gray-600 hover:text-gray-800 mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to project details
            </button>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Your Savings Calculation</h2>
              <p className="text-gray-600 mb-8">
                Based on your {projectType} project of {projectSize} sq ft
              </p>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                <div className="text-3xl font-medium text-green-600 mb-2">$2,450</div>
                <div className="text-gray-600">Estimated savings</div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-medium text-gray-900 mb-1">Time Saved</div>
                  <div className="text-gray-600">3-5 days</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-medium text-gray-900 mb-1">Labor Cost Reduction</div>
                  <div className="text-gray-600">40-60%</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;