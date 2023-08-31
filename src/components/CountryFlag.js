export default function CountryFlag({width, height, src}) {
    return <img style={{
            height : `${height * 10}px`,
            width : `${width * 10}px`,
            borderTopLeftRadius : '5px',
            borderTopRightRadius : '5px'
        }}
        src={src}
    />
}