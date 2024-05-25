// import * as React from "react";

// import { Footer } from "../components/Footer/Footer";
// import Header from "@/components/Header/Header";
// import { Container } from "postcss";

// type PageTemplateProps = {
//   type?: "default" | "sticky-header" | "basic";
//   children: React.ReactNode;
// };

// export const PageTemplate: React.FC<PageTemplateProps> = ({
//   type = "default",
//   children,
// }) => {
//   if (type === "basic") {
//     return (
//       <>
//         <HeaderComponent logoOnly />
//         <Container>{children}</Container>
//       </>
//     );
//   }

//   if (type === "sticky-header") {
//     return (
//       <>
//         <Header sticky />
//         <Container>{children}</Container>
//         <Footer />
//       </>
//     );
//   }
//   return (
//     <>
//       <Header />
//       <Container>{children}</Container>
//       <Footer />
//     </>
//   );
// };
