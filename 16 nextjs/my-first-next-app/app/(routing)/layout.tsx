

export default function RoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
       <div>
        <h1>You are learning routes...</h1>
           <main>{children}</main>
        <h1>Kaise lgey routes...</h1>
       </div>

  );
}
