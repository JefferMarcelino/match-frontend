import Head from "next/head";

export interface MetaData {
    title: string;
    description: string;
    author: string;
    keywords: string[];
}

interface MetaDataProps {
    metaData: MetaData;
}

const MetaData: React.FC<MetaDataProps> = ({ metaData }) => {
    return (
        <Head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="description" content={ metaData.description } />
            <meta name="author" content={ metaData.author } />
            <meta name="keywords" content={String(metaData.keywords)}/>
            <title>{ metaData.title }</title>
        </Head>
    )
}

export default MetaData;