export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img 
              src="https://th.bing.com/th/id/R.a257c533c8d078d08953ec8fddaa7dfd?rik=kv9jlpFZ75%2bhvQ&riu=http%3a%2f%2fi.huffpost.com%2fgen%2f1138864%2fimages%2fo-COLLEGE-STUDENTS-ON-CAMPUS-facebook.jpg&ehk=qHJJiuhiMpCOg%2fOrITBKtZ1xgv025x5MKyA0pFpdfzg%3d&risl=&pid=ImgRaw&r=0" 
              alt="Students collaborating" 
              className="rounded-xl shadow-lg max-w-full h-auto" 
              width="600" 
              height="400"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              SmartFin was created with a clear purpose: to empower underserved college students with the financial tools and knowledge they need to succeed.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              We believe that financial literacy is a critical life skill that should be accessible to everyone, regardless of background or current financial status.
            </p>
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <h3 className="text-3xl font-bold text-primary mb-2">78%</h3>
                <p className="text-gray-700">of students feel unprepared to manage their finances</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary mb-2">65%</h3>
                <p className="text-gray-700">improvement in financial confidence with SmartFin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
