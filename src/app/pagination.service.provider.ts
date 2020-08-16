import { PaginationService } from './pagination.service';
import { AngularFirestore } from '@angular/fire/firestore';

interface CatList {
    name: string;
    picUrl: string;
}
const PaginationServiceFactory = (afs: AngularFirestore) => {
    return new PaginationService<Array<CatList>>(afs);
};
export let CatListServiceProvider =
{
    provide: PaginationService,
    useFactory: PaginationServiceFactory,
    deps: [AngularFirestore]
};
