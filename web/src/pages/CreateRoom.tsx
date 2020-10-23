import React, { useState } from 'react';
import Dropzone from '../components/Dropzone';
import MainContainer from '../components/MainContainer';
import MainHeader from '../components/MainHeader';
import { RoomTitle, CreateRoomWrapper, RoomInfoWrapper, RoomDescription } from '../styles/pages/create_room';


const CreateRoom: React.FC = () => {

    const [selectedFile, setSelectedFile] = useState<File>();

    return (
        <>
            <MainHeader />
            <MainContainer>
                <CreateRoomWrapper>
                    <Dropzone onFileUploaded={setSelectedFile} />
                    <RoomInfoWrapper>
                        <RoomTitle placeholder="Título da sala" maxLength={50} />
                        <RoomDescription maxLength={300} placeholder="Descrição da sala que irá criar" >
                        </RoomDescription>
                        <button type="submit">
                            Criar sala
                        </button>
                    </RoomInfoWrapper>
                </CreateRoomWrapper>
            </MainContainer>
        </>
    );

};

export default CreateRoom;