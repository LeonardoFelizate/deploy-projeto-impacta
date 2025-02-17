import React from 'react'

const explicacoes = () => {
  return <div>explicacoes</div>
}

export default explicacoes

// rafce 

// Arrow function
// const explicacoes = () => <h1>Olá, mundo!</h1>

// Nomeação de componentes
// PascalCase

// Nomeação de variável, função..
// camelCase

// export default, posso importar com qualquer nome e sem chaves
// export sem default, só posso importar entre chaves e com o nome exportado

// Self closing tag
// <Header></Header>
//<Header />

// Nomeação de classes em CSS
// Metodologia BEM
// Blocks
// Elements
// Modifiers
// bloco__elemento--modificador
// header
// header__link
// header__link--small
// item-list__header
// Nomes compostos são separados por hífen

// Tag vazia em react se chama fragment

// {items === 5 ? (
//     <>
//        <SingleItem /> 
//        <SingleItem />
//        <SingleItem />
//        <SingleItem />
//        <SingleItem />
//    </>
//    ) : (
//    <>
//        <SingleItem /> 
//        <SingleItem />
//        <SingleItem />
//        <SingleItem />
//        <SingleItem />
//        <SingleItem /> 
//        <SingleItem />
//        <SingleItem />
//        <SingleItem />
//        <SingleItem />
//    </>
//    )}

// Array(items)
// .fill()
// .map((currentValue, index) => (
//  <SingleItem key={`${title}-${index}`} />
// ))

// Spread Operator
//  ...