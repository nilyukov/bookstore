export default class BookstoreService {
    getBooks() {
        return [
            {
                id: 1,
                title: 'Production-Ready Microservices',
                author: 'Susan J. Fowler',
                price: 30,
                coverImage: 'https://images-na.ssl-images-amazon.com/images/I/61MKoIjoo5L._SX258_BO1,204,203,200_.jpg'
            },
            {
                id: 2,
                title: 'Release It!',
                author: 'Michael T. Nygard',
                price: 30,
                coverImage: 'https://ih0.redbubble.net/image.233478453.8841/flat,550x550,075,f.u3.jpg'
            },
            {
                id: 3,
                title: 'Gravity fallse It!',
                author: 'Michael T. Nygard',
                price: 30,
                coverImage: 'https://http2.mlstatic.com/gravity-falls-diario-2-en-espanol-digital-para-imprimir-D_NQ_NP_750695-MLV27222452999_042018-F.jpg'
            }
        ];
    }

}