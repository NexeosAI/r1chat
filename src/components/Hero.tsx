import React from 'react';
import { MessageSquare, Zap, Shield, Users } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Experience the Future of AI Chat
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Connect, create, and collaborate with R1 Chat's advanced AI technology.
            Discover a new way to interact with artificial intelligence.
          </p>
          <a
            href="https://chat.deepseek.com/"
            className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-200"
          >
            Start Free Chat with R1
            <Zap className="ml-2 w-5 h-5" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {[
            {
              icon: <Shield className="w-8 h-8 text-blue-600" />,
              title: "Secure & Private",
              description: "End-to-end encryption keeps your conversations safe and private."
            },
            {
              icon: <MessageSquare className="w-8 h-8 text-blue-600" />,
              title: "Smart Responses",
              description: "Advanced AI understanding for more natural conversations."
            },
            {
              icon: <Users className="w-8 h-8 text-blue-600" />,
              title: "Team Collaboration",
              description: "Share and collaborate with team members seamlessly."
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};