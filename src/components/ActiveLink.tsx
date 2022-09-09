import Link from 'next/link';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';

interface ActiveLink {
    href: any;
    exact: boolean;
    children: ReactNode;
    className: string;
};

const ActiveLink: React.FC<ActiveLink> = ({ href, exact=false, children, ...props }) => {
    const { pathname } = useRouter();
    const isActive = exact ? pathname === href : pathname.startsWith(href);

    if (isActive) {
        props.className += ' active';
    }

    return (
        <Link href={href}>
            <a {...props}>
                {children}
            </a>
        </Link>
    );
}

export default ActiveLink;