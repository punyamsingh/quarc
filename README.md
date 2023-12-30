#### Still under construction, use the link to test out the features and tell me what i can improve. I still haven't implemented everything yet. and don't even get me started on the frontend (rolls eyes) ##

[quarc.vercel.app](quarc.vercel.app)

# Q.U.A.R.C.
### Quick Universal Access for Retrieving Code

![Quarc Logo](public/logo.jpeg)

Quarc is a simple and efficient pastebin-like web application built with Next.js and integrated with Supabase for data storage. It allows users to quickly store and retrieve code snippets with ease.

## Features

- **Quick Code Storage:** Save your code snippets instantly with a simple interface.
- **Customizable IDs:** Choose your own custom alphanumeric IDs for saved snippets.
- **Formatted Code:** Preserve the formatting of your code when storing and retrieving.
- **Responsive Design:** Works seamlessly on a variety of devices.

## Usage

1. Paste your code snippet in the textarea.
2. Click the "Save" button to store the snippet with a unique ID.
3. Optionally, click the "Save As" button to choose a custom ID for your snippet.


## Getting Started For Contributors

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Supabase Account](https://supabase.io/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/quarc.git
   ```

2. **Install dependencies:**

   ```bash
   cd quarc
   npm install
   ```

3. **Configure Supabase:**

   - Set up a new project on [Supabase](https://supabase.io/).
   - Copy your Supabase URL and API Key.
   - Create a `.env.local` file at the root of your project and add:

     ```env
     NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-api-key
     ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. **Open your browser and visit [http://localhost:3000](http://localhost:3000).**

## Contributing

Contributions are welcome! Please check the [contribution guidelines](CONTRIBUTING.md) before submitting a pull request.
(hehe, haven't made it yet)

<!-- ## License

This project is licensed under the [MIT License](LICENSE). -->

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Supabase](https://supabase.io/)
- [Katb.in](https://katb.in/) major inspiration

---
