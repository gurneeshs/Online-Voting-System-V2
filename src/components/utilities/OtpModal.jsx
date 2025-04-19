// components/OtpModal.jsx
import React, { useEffect, useState } from 'react';

const OtpModal = ({
  onClose,
  onVerify,
  generatedOtp,
  timeout = 120, // countdown seconds
}) => {
  const [otpInput, setOtpInput] = useState('');
  const [timer, setTimer] = useState(timeout);
  const [canResend, setCanResend] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(t => t - 1), 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const handleVerify = () => {
    setLoading(true);
    if (parseInt(otpInput, 10) === generatedOtp) {
      onVerify(true);
      setLoading(false);
    } else {
      onVerify(false);
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white rounded-2xl p-6 shadow-xl w-[90%] max-w-md animate-fade-in">
        <h2 className="text-xl font-semibold mb-4 text-center">Verify OTP</h2>
        <input
          type="text"
          value={otpInput}
          onChange={(e) => setOtpInput(e.target.value)}
          placeholder="Enter 6-digit OTP"
          className="border p-2 rounded-md w-full mb-4"
        />
        <div className="text-sm text-gray-500 mb-4 text-center">
          {canResend ? (
            <button
              className="text-blue-600 font-medium"
              onClick={() => {
                setTimer(timeout);
                setCanResend(false);
              }}
            >
              Resend OTP
            </button>
          ) : (
            <>OTP expires in {timer}s</>
          )}
        </div>
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleVerify}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            disabled={loading}
          >
          {loading ? 'Verifying...':'Verify'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtpModal;
