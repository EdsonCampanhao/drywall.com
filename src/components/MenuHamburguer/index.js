import styles from "./MenuHamburguer.module.css";
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
                <MenuButton>
                <IoMenu size={32}></IoMenu>
                </MenuButton>
                <MenuList padding='6px' borderRadius='15px' bgColor='rgba(149, 148, 148, 1)'>
                    <MenuItem bgColor='transparent' border='none' display='flex' justifyContent='center'><a className={styles.item}>calculadora de materiais</a></MenuItem>
                    <MenuItem bgColor='transparent' border='none' display='flex' justifyContent='center'><a className={styles.item}>produtos</a></MenuItem>
                    <MenuItem bgColor='transparent' border='none' display='flex' justifyContent='center'><a className={styles.item}>institucional</a></MenuItem>
                </MenuList>
            </Menu>
        </div>
        
    );
}
