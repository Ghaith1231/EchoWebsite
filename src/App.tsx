import React from "react";


import { PageShell } from "./features/home/components/PageShell";

export default function App() {
  return (
    <PageShell>
      <h1>Echo</h1>
      <p>Prototype</p>
      <button>
        Enter Zone
      </button>

      <h2>Better you is waiting</h2>
      <p>
        Echo uses state-of-the-art AI to help you become the best version of yourself.
      </p>

      <button>
        Sign Up
      </button>

      <body>
        <img src="https://via.placeholder.com/400x300" alt="Placeholder Image" />
      </body>
    </PageShell>
  );
}

