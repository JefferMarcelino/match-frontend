interface BlogCardProps {
    title: String
    publishedDate: String
    coverPhoto: String
}

export const BlogCard = ({ title, publishedDate, coverPhoto }:BlogCardProps) => {
    return (
        <div>
            <p>{ coverPhoto }</p>
            <h2>{ title }</h2>
            <span>{ publishedDate }</span>
        </div>
    )
}