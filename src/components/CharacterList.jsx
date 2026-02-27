import {useState, useEffect} from 'react';
import CharacterCard from './CharacterCard';
import Modal from './Modal';

const CharacterList=()=>{
    const [characters, setCharacters]=useState([]);
    const [loading, setLoading]=useState(true);
    const [error, setError]=useState(null);
    const [selectedCharacter, setSelectedCharacter]=useState(null);
    const itemsPerPage=20;
    const [currentPage,setCurrentPage]=useState(1);
    const indexOfLastCharacter=currentPage * itemsPerPage;
    const indexOfFirstCharacter = indexOfLastCharacter - itemsPerPage;
    const totalPages=Math.ceil(characters.length/itemsPerPage);
    const currentCharacters=characters.slice(indexOfFirstCharacter, indexOfLastCharacter);

    useEffect(()=>{
        const fetchWizards=async()=>{
            try{
                const response=await fetch('https://hp-api.onrender.com/api/characters');
                if (!response.ok) throw new Error('The Ministry of Magic is down!');

                const data=await response.json();
                setCharacters(data);
                setLoading(false);
            }
            catch (err){
                setError(err.message);
                setLoading(false);
            }
        };
        fetchWizards();
    },[]);

if (loading) return (
    <div className="loading-container">
        <div className="magical-spiral"></div>
        <p>Casting Revelio...</p>
    </div>
);    if (error) return <div className="error">Error: {error}</div>;

    return (
        <div>
             <div className="character-grid">
                {currentCharacters.map(char=>(
                    <CharacterCard 
                    key={char.id} 
                    character={char}
                    onClick={()=>setSelectedCharacter(char)} />
                ))}
                </div>
            <div className="pagination" style={{textAlign: 'center',margin:'20px'}}>
                <button 
                onClick={()=>setCurrentPage(currentPage-1)}
                disabled={currentPage===1}>Previous</button>

                <span style={{ margin: '0 15px'}}>Page{currentPage} of {totalPages}</span>
                <button 
                onClick={()=>setCurrentPage(currentPage+1)}
                disabled={currentPage===totalPages}
                >Next</button>
            </div>
            {selectedCharacter &&(
                <Modal character={selectedCharacter} onClose={()=>setSelectedCharacter(null)}/>
            )}
        </div>
    );
};
export default CharacterList;