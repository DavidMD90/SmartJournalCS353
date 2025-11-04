import { SignUp } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";



export function SignUpPage() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>SmartJournal</h1>
        <p className="subtitle">Create your account</p>
        
        <SignUp 
          appearance={{
            baseTheme: dark,
            elements: {
              card: "bg-gray-800",
              headerTitle: "text-white text-2xl",
              headerSubtitle: "text-gray-400",
              formButtonPrimary: 
                "bg-blue-500 hover:bg-blue-600 text-sm normal-case",
              formFieldInput: "bg-gray-700 text-white border-gray-600",
              formFieldLabel: "text-gray-300",
              footerActionLink: "text-blue-400 hover:text-blue-300",
              dividerLine: "bg-gray-600",
              dividerText: "text-gray-400",
              identityPreviewText: "text-gray-300",
              identityPreviewEditButton: "text-blue-400 hover:text-blue-300",
            },
          }}
          routing="path"
          path="/sign-up"
          signInUrl="/sign-in"
          afterSignUpUrl="/"
        />
      </div>
    </div>
  );
}