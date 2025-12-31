// app/components/ApplicationForm.tsx
"use client";

import { useState, useRef, FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Upload,
  FileText,
  User,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Briefcase,
  Send,
  CheckCircle,
  MessageCircle,
} from "lucide-react";

interface ApplicationFormProps {
  selectedJob: string;
}

export default function ApplicationForm({ selectedJob }: ApplicationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);
  const resumeInputRef = useRef<HTMLInputElement>(null);
  const passportInputRef = useRef<HTMLInputElement>(null);

  // Your WhatsApp number (RIYA's number)
  const whatsappNumber = "+919633150030"; // Replace with actual number

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    experience: "",
    position: selectedJob || "construction",
    nationality: "",
    passportNumber: "",
    expectedSalary: "",
    message: "",
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [passportFile, setPassportFile] = useState<File | null>(null);
  const [workVideo, setWorkVideo] = useState<File | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "resume" | "passport" | "video"
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (max 25MB for WhatsApp)
      if (file.size > 25 * 1024 * 1024) {
        alert("File size too large. Maximum size is 25MB for WhatsApp.");
        return;
      }

      // Check file types
      if (type === "resume" || type === "passport") {
        const allowedTypes = [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          "image/jpeg",
          "image/png",
          "image/jpg",
        ];
        if (!allowedTypes.includes(file.type)) {
          alert("Please upload PDF, DOC, DOCX, JPG, or PNG files only.");
          return;
        }
      }

      if (type === "video") {
        const allowedTypes = [
          "video/mp4",
          "video/avi",
          "video/mov",
          "video/quicktime",
        ];
        if (!allowedTypes.includes(file.type)) {
          alert("Please upload MP4, AVI, or MOV video files only.");
          return;
        }
      }

      if (type === "resume") setResumeFile(file);
      if (type === "passport") setPassportFile(file);
      if (type === "video") setWorkVideo(file);
    }
  };

  const createWhatsAppMessage = () => {
    // Create a formatted WhatsApp message
    const message = `
📋 *NEW JOB APPLICATION - DIONZ SKILLTECH AGENCY*

👤 *Applicant Information:*
• *Name:* ${formData.name}
• *Phone:* ${formData.phone}
• *Email:* ${formData.email}
• *Age:* ${formData.age} years
• *Nationality:* ${formData.nationality}

💼 *Professional Details:*
• *Position Applied:* ${formData.position}
• *Experience:* ${formData.experience} years
• *Passport No:* ${formData.passportNumber}
• *Expected Salary:* ${formData.expectedSalary}

📝 *Documents Uploaded:*
• Resume/CV: ${resumeFile ? "✅ Yes" : "❌ No"}
• Passport Copy: ${passportFile ? "✅ Yes" : "❌ No"}
• Work Video: ${workVideo ? "✅ Yes" : "❌ No"}

💬 *Additional Message:*
${formData.message || "No additional message"}

📅 *Application Date:* ${new Date().toLocaleString()}
🌐 *Source:* DIONZ Website Application Form

Please check applicant's details and contact them for further process.
    `.trim();

    return encodeURIComponent(message);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate required files
      if (!resumeFile) {
        alert("Please upload your Resume/CV");
        setIsSubmitting(false);
        return;
      }

      if (!passportFile) {
        alert("Please upload your Passport Copy");
        setIsSubmitting(false);
        return;
      }

      // Create WhatsApp message
      const whatsappMessage = createWhatsAppMessage();

      // Open WhatsApp with the message
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

      // Show instructions
      alert(`
🎯 Application Ready to Send!
      
1️⃣ WhatsApp will open with your application details
2️⃣ Click SEND to submit to DIONZ Recruitment Team
3️⃣ After sending message, come back to upload files
      
📞 Contact for help: +91 96331 50030
      `);

      // Open WhatsApp in new tab
      window.open(whatsappUrl, "_blank");

      // After 2 seconds, prepare for file upload
      setTimeout(() => {
        // Open file upload instructions
        const uploadInstructions = `
📎 *FILE UPLOAD INSTRUCTIONS*
        
Please send these files to the same WhatsApp number:
        
1. *Resume/CV:* ${resumeFile?.name}
2. *Passport Copy:* ${passportFile?.name}
${workVideo ? `3. *Work Video:* ${workVideo?.name}` : ""}
        
📤 *How to send files:*
• Go back to WhatsApp
• Click the attachment icon (📎)
• Select "Document"
• Choose the file
• Send to DIONZ Recruitment
        `.trim();

        alert(uploadInstructions);

        // Mark as submitted
        setIsSubmitted(true);
        resetForm();
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        "There was an error. Please try again or contact us directly at +91 96331 50030"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      age: "",
      experience: "",
      position: selectedJob || "construction",
      nationality: "",
      passportNumber: "",
      expectedSalary: "",
      message: "",
    });
    setResumeFile(null);
    setPassportFile(null);
    setWorkVideo(null);

    if (resumeInputRef.current) resumeInputRef.current.value = "";
    if (passportInputRef.current) passportInputRef.current.value = "";

    // Reset form after 10 seconds
    setTimeout(() => setIsSubmitted(false), 10000);
  };

  const jobOptions = [
    {
      value: "construction",
      label: "Construction Worker (Carpenter/Plaster/Iron Bender)",
    },
    { value: "butchers", label: "Butcher & Butcher Helper" },
    { value: "electrician", label: "Electrician" },
    { value: "plumber", label: "Plumber" },
    { value: "welder", label: "Welder" },
    { value: "painter", label: "Painter" },
    { value: "other", label: "Other Skilled Worker" },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Apply via <span className="text-green-600">WhatsApp</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Submit your application directly to our WhatsApp. All data will be
            sent instantly to our recruitment team.
          </p>
        </motion.div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-12 text-center text-white">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-12 h-12" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Application Ready! 📱</h3>
              <p className="text-xl mb-6">
                WhatsApp opened with your application details
              </p>

              <div className="bg-white/10 rounded-xl p-6 mb-6">
                <p className="font-semibold mb-4">Next Steps:</p>
                <ol className="text-left space-y-3">
                  <li className="flex items-center">
                    <div className="w-8 h-8 bg-white text-green-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      1
                    </div>
                    <span>Check the opened WhatsApp window</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-8 h-8 bg-white text-green-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      2
                    </div>
                    <span>
                      Click <strong>SEND</strong> to submit application
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-8 h-8 bg-white text-green-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      3
                    </div>
                    <span>Send your documents as files in WhatsApp</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-8 h-8 bg-white text-green-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      4
                    </div>
                    <span>Wait for confirmation call within 24 hours</span>
                  </li>
                </ol>
              </div>

              <div className="space-y-4">
                <p className="font-semibold">📎 Files to send in WhatsApp:</p>
                <div className="flex flex-col items-center space-y-2">
                  {resumeFile && (
                    <div className="flex items-center bg-white/10 px-4 py-2 rounded-lg">
                      <FileText className="w-5 h-5 mr-2" />
                      <span>{resumeFile.name}</span>
                    </div>
                  )}
                  {passportFile && (
                    <div className="flex items-center bg-white/10 px-4 py-2 rounded-lg">
                      <FileText className="w-5 h-5 mr-2" />
                      <span>{passportFile.name}</span>
                    </div>
                  )}
                  {workVideo && (
                    <div className="flex items-center bg-white/10 px-4 py-2 rounded-lg">
                      <FileText className="w-5 h-5 mr-2" />
                      <span>{workVideo.name}</span>
                    </div>
                  )}
                </div>
              </div>

              <p className="mt-8 text-green-100">
                For help:{" "}
                <strong className="text-white">RIYA +91 96331 50030</strong>
              </p>

              <button
                onClick={() =>
                  window.open(`https://wa.me/${whatsappNumber}`, "_blank")
                }
                className="mt-6 inline-flex items-center px-8 py-3 bg-white text-green-600 font-bold rounded-xl hover:bg-green-50 transition-all"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Open WhatsApp Again
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-green-600 to-green-700 p-8 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 flex items-center">
                      <MessageCircle className="w-8 h-8 mr-3" />
                      WhatsApp Application
                    </h3>
                    <p className="text-green-100">
                      Direct submission to DIONZ Recruitment Team
                    </p>
                  </div>
                  <MessageCircle className="w-10 h-10 text-green-200" />
                </div>
                <div className="mt-4 bg-white/10 rounded-lg p-4">
                  <p className="text-sm">
                    📱 All data will be sent to:{" "}
                    <strong>RIYA +91 96331 50030</strong>
                  </p>
                </div>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Personal Information */}
                  <div className="space-y-6">
                    <h4 className="text-lg font-bold text-gray-800 flex items-center">
                      <User className="w-5 h-5 mr-2 text-green-600" />
                      Personal Information
                    </h4>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full text-black px-4 py-3 border border-gray-300 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full text-black px-4 py-3 border border-gray-300 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                        placeholder="+91 12345 67890"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        This will be used to contact you
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full text-black px-4 py-3 border border-gray-300 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Age *
                      </label>
                      <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        required
                        min="18"
                        max="60"
                        className="w-full text-black px-4 py-3 border border-gray-300 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                        placeholder="Enter your age"
                      />
                    </div>
                  </div>

                  {/* Professional Information */}
                  <div className="space-y-6">
                    <h4 className="text-lg font-bold text-gray-800 flex items-center">
                      <Briefcase className="w-5 h-5 mr-2 text-green-600" />
                      Professional Details
                    </h4>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Desired Position *
                      </label>
                      <select
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        required
                        className="w-full text-black   px-4 py-3 border border-gray-300 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                      >
                        {jobOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Years of Experience *
                      </label>
                      <input
                        type="text"
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        required
                        className="w-full text-black px-4 py-3 border border-gray-300 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                        placeholder="e.g., 5 years"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nationality *
                      </label>
                      <input
                        type="text"
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleInputChange}
                        required
                        className="w-full text-black px-4 py-3 border border-gray-300 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                        placeholder="e.g., Indian"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Passport Number *
                      </label>
                      <input
                        type="text"
                        name="passportNumber"
                        value={formData.passportNumber}
                        onChange={handleInputChange}
                        required
                        className="w-full text-black px-4 py-3 border border-gray-300 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                        placeholder="Enter passport number"
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-gray-800 mb-4">
                    Additional Information
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expected Salary (INR) *
                      </label>
                      <input
                        type="text"
                        name="expectedSalary"
                        value={formData.expectedSalary}
                        onChange={handleInputChange}
                        required
                        className="w-full text-black px-4 py-3 border border-gray-300 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                        placeholder="e.g., 1.5L + Overtime"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full text-black px-4 py-3 border border-gray-300 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                        placeholder="Any additional information or questions..."
                      />
                    </div>
                  </div>
                </div>

                {/* File Uploads */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-gray-800 mb-6 flex items-center">
                    <Upload className="w-5 h-5 mr-2 text-green-600" />
                    Upload Documents (Will be sent via WhatsApp)
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Resume Upload */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Resume/CV * (PDF, DOC, JPG, PNG - Max 25MB)
                      </label>
                      <div className="relative">
                        <input
                          ref={resumeInputRef}
                          type="file"
                          onChange={(e) => handleFileChange(e, "resume")}
                          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                          required
                          className="hidden"
                          id="resume-upload"
                        />
                        <label
                          htmlFor="resume-upload"
                          className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-green-500 hover:bg-green-50 transition-all"
                        >
                          <FileText className="w-10 h-10 text-gray-400 mb-3" />
                          <span className="text-sm text-gray-600 text-center px-2">
                            {resumeFile ? resumeFile.name : "Upload Resume/CV"}
                          </span>
                          <span className="text-xs text-gray-500 mt-2">
                            Click to browse
                          </span>
                        </label>
                      </div>
                    </div>

                    {/* Passport Upload */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Passport Copy * (PDF, JPG, PNG - Max 25MB)
                      </label>
                      <div className="relative">
                        <input
                          ref={passportInputRef}
                          type="file"
                          onChange={(e) => handleFileChange(e, "passport")}
                          accept=".pdf,.jpg,.jpeg,.png"
                          required
                          className="hidden"
                          id="passport-upload"
                        />
                        <label
                          htmlFor="passport-upload"
                          className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-green-500 hover:bg-green-50 transition-all"
                        >
                          <FileText className="w-10 h-10 text-gray-400 mb-3" />
                          <span className="text-sm text-gray-600 text-center px-2">
                            {passportFile
                              ? passportFile.name
                              : "Upload Passport"}
                          </span>
                          <span className="text-xs text-gray-500 mt-2">
                            Click to browse
                          </span>
                        </label>
                      </div>
                    </div>

                    {/* Work Video Upload */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Work Experience Video (MP4, AVI, MOV - Max 25MB)
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          onChange={(e) => handleFileChange(e, "video")}
                          accept=".mp4,.avi,.mov"
                          className="hidden"
                          id="video-upload"
                        />
                        <label
                          htmlFor="video-upload"
                          className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-green-500 hover:bg-green-50 transition-all"
                        >
                          <FileText className="w-10 h-10 text-gray-400 mb-3" />
                          <span className="text-sm text-gray-600 text-center px-2">
                            {workVideo ? workVideo.name : "Upload Work Video"}
                          </span>
                          <span className="text-xs text-gray-500 mt-2">
                            Click to browse
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-green-50 rounded-xl border border-green-200">
                    <p className="text-sm text-gray-700">
                      💡 <strong>How it works:</strong> After submitting,
                      WhatsApp will open with your application details. You need
                      to manually send the uploaded files as documents in
                      WhatsApp.
                    </p>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center px-12 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-green-500/30 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3" />
                        Preparing WhatsApp Message...
                      </>
                    ) : (
                      <>
                        <MessageCircle className="w-6 h-6 mr-3" />
                        Send via WhatsApp
                      </>
                    )}
                  </button>
                  <p className="text-gray-500 text-sm mt-4">
                    By submitting, you agree to our terms and consent to contact
                    via provided WhatsApp number
                  </p>
                  <p className="text-gray-400 text-xs mt-2">
                    📱 Application will be sent to: RIYA +91 96331 50030
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
