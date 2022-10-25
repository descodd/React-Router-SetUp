import { Routes, Route } from "react-router-dom";

// Nested Routes
import Services from "./Services";

export default function About() {
  return (
    <div>
      <h2>About</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta odio
        culpa labore, laudantium autem minus. Tempore, alias nihil voluptatum
        sapiente esse veniam. Cumque doloremque a quos laudantium ipsam itaque
        odit omnis, quas eum suscipit cum dignissimos accusantium nam?
        Consequuntur, dolores.
      </p>

      <Routes>
        <Route path="services" element={<Services />} />
      </Routes>
    </div>
  );
}
