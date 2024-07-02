import styles from "./MenuHamburguer.module.css";
import Link from "next/link";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react'
import { IoMenu } from "react-icons/io5";

export default function MenuHamburguer() {
    return (
        <div className={styles.menu}>
            <Menu >
                <MenuButton bgColor='transparent' border='none'>
                <IoMenu color='white' size={32}></IoMenu>
                </MenuButton>
                <MenuList padding='6px' borderRadius='15px' bgColor='rgba(149, 148, 148, 1)'>
                    <MenuItem bgColor='transparent' border='none' display='flex' justifyContent='center'><Link href='/shopping_cart' className={styles.item}>carrinho</Link></MenuItem>
                    <MenuItem bgColor='transparent' border='none' display='flex' justifyContent='center'><Link href='/calculator' className={styles.item}>calculadora de materiais</Link></MenuItem>
                    <MenuItem bgColor='transparent' border='none' display='flex' justifyContent='center'><Link href='/products' className={styles.item}>produtos</Link></MenuItem>
                </MenuList>
            </Menu>
        </div>
        
    );
}
