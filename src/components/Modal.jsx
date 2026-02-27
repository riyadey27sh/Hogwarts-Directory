const Modal=({character,onClose})=>{
    if (!character) return null;

    const getHouseColor=(house)=>{
        if (house==='Gryffindor') return '#ae0001';
        if (house === 'Slytherin') return '#1a472a';  // Green
        if (house === 'Ravenclaw') return '#222f5b';  // Blue
        if (house === 'Hufflepuff') return '#ecb939';
        return '#fbbf24'; 
    };
    const themeColor=getHouseColor(character.house);
    return(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e)=>e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>&times;</button>

                <h2 style={{borderBottom: `4px solid ${themeColor}`}}>{character.name}</h2>
                <div className="modal-body">
                    <img 
                        src={character.image || `https://picsum.photos/seed/${character.name}/300/400`} 
                        alt={character.name} 
                        style={{width:"100%",
                                height: "400px", 
                                objectFit: "cover",
                                objectPosition: "center",
                                borderRadius:"8px", 
                                marginBottom: "15px",
                                border: `3px solid ${themeColor}`}}/>
                    <p><strong>Species: </strong> {character.species}</p>
                    <p><strong>House: </strong> {character.house || "Unknown"}</p>
                    <p><strong>Actor: </strong> {character.actor}</p>
                    <p><strong>Wand: </strong> {character.wand?.wood || "Unknown"} wood, {character.wand?.core || "Unknoen"} core</p>
                    <p><strong>Birth: </strong> {character.dateOfBirth || "Unknown"}</p>
                </div>
            </div>
        </div>
    );
};

export default Modal;