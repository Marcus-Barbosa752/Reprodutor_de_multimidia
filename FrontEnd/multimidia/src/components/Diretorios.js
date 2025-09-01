function Diretorios({ Nome, QtdArquivos }) {
    return (
        <div className="DiretoriosFolder">
            <div className="FolderIco"></div>

            <div className="FolderInfo">
                <h3>{Nome}</h3>
                <span>{QtdArquivos} arquivos</span>
            </div>
        </div>
    )
}

export default Diretorios