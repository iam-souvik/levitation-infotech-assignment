import React, { useState } from 'react';

interface AvatarProps {
    imageUrl: string | File;
}

const Avatar: React.FC<AvatarProps> = ({ imageUrl }) => {
    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <div className="relative">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-500 overflow-hidden">
                {imageError ? (
                    <span className="text-white text-xl font-semibold">
                        S
                    </span>
                ) : (
                    <img
                        src={typeof imageUrl === 'string' ? imageUrl : ""}
                        alt={"s"}
                        className="w-full h-full object-cover"
                        onError={handleImageError}
                    />
                )}
            </div>
        </div>
    );
};

export default Avatar;
