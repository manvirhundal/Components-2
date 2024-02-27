export default function NavBar ({user}) {
  return (
    <>
      <a href="#home">Home </a>
      <a href="#home">Laptops </a>
      <a href="#contact">Contact </a>
      <a href="#about">About </a>
      {user ? (<span>Welcome {user.firstName}</span>) : (<span>Login</span>)}
      {user && user.ItemsInCart > 0 && (<span>{user.ItemsInCart} in your cart</span>)}
    </>
  );
} 
