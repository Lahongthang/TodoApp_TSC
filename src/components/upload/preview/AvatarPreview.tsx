import React from "react";
import Image from "../../Image";

type Props = {
    file: any
}

const AvatarPreview: React.FC<Props> = ({ file }) => {
    if (!file) return null

    const imgUrl = typeof file === 'string' ? file : file.preview

    return (
        <Image
            alt='avatar'
            src={imgUrl}
            sx={{
                zIndex: 8,
                overflow: 'hidden',
                borderRadius: '50%',
                position: 'absolute',
                width: `calc(100% - 16px)`,
                height: `calc(100% - 16px)`,
            }}
        />
    )
}

export default AvatarPreview;
