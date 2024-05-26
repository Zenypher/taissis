export default function Template({children} : {children: React.ReactNode}, props:any) {
    return (<div className="h-fill flex flex-col lg:flex-row">
        {children}
        </div>);
}