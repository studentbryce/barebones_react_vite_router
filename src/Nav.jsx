import {Link} from 'react-router-dom';

function Nav()
{
    return(
        <>
            <nav>
                <Link to= "/One">Component One</Link>
                <Link to= "/Two">Component Two</Link>
                <Link to= "/Three">Component Three</Link>
            </nav>
        </>
    );
}

export default Nav;