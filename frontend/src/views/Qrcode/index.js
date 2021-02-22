import React, {useState, useEffect} from 'react'
import * as S from  './styles'



// Importando components

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Qr from 'qrcode.react';


function QrCode() {

    return (
        <S.Container>
            <Header />
                <S.Content>
                    <h1>CAPTURE O QRCODE PELO APP</h1>
                    <p>Suas atividades serão sincronizadas com o seu Celular</p>
                    <S.QrCodeArea> 
                        <Qr value ="Evaldo Tchola" size={250}/>          
                    </S.QrCodeArea>
                    <S.ValidationCode>
                        <span>Digite a numeração que apareceu no celular</span>
                        <input type={'text'}/>
                        <button type={'button'}>SINCRONIZAR</button>
                    </S.ValidationCode>
                </S.Content>
            <Footer/>
        </S.Container>
    )

}


export default QrCode;