interface IRelatory{
    situation: string;
    answer: string;
}
interface IPlayer{
    name: string;
    gender: string;
    age: any;
    responsible: string;
}

export const emailBodyText = (relatory: IRelatory[], player: IPlayer) => {
    return (
        `<html>
            <head>
                <style>
                    body{
                        display: flex;
                    }

                    .title{
                        text-align: center;
                    }

                    b{
                        color: #8a8a8a;
                    }

                    h2, h1 {
                        color: #8689f5
                    }
                    
                </style>
            </head>

            <body>
                <h1 class="title">Relatório</h1>
                <div>
                    <h2>Dados Pessoais</h2>

                    <b>nome:</b> ${player.name} <br />
                    <b>Sexo:</b> ${player.gender} <br />
                    <b>Idade:</b> ${player.age} <br />
                    <b>Responsável:</b> ${player.responsible} <br />
                </div>
                <div>
                    <h2>Resultado</h2>
                    ${relatory.map((rel: IRelatory) => {
                        return(
                            `<b>situação:</b> ${rel.situation}<br />
                            <b>Resposta:</b> ${rel.answer}
                            <br />
                            <br />
                            `
                        );
                    }).join(' ')}
                </div>
            </body>
        </html>`
    )
}