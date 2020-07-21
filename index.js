const fruits = [
    {id: 1, title: 'Яблоки', price: 20},
    {id: 1, title: 'Апельсины', price: 30},
    {id: 1, title: 'Манго', price: 40}
]


const modal = $.modal({
    title: 'Modal Window',
    closable: true,
    content:  `
    <h4>Modal is working</h4>
    <p>Lorem ipsum dolor sit</p>
    `,
    width: '400px',
    footerButtons: [
        {text: 'Ok', type: 'primary', handler(){
            modal.close()
        }},
        {text: 'Cancel', type: 'danger', handler(){
            modal.close()
        }}
    ]
});
