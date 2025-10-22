// components/ButtonLink.tsx
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

export default function ButtonLink({ href, children, ...props }) {
  return (
    <Button 
    as={Link} 
    href={href} 
    size='lg' 
    variant="solid" 
    color="warning" 
    className='text-2xl md:text-3xl sm:text-2xl' 
    {...props}    
    >
     {children}
    </Button>
  );
}