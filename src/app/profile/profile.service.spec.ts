import { TestBed, inject } from '@angular/core/testing';
import { Http,HttpModule, XHRBackend, ResponseOptions, Response } from '@angular/http';
import { ProfileService } from './profile.service';
import { MockBackend, MockConnection } from '@angular/http/testing';
describe(
  'ProfileService', () => {
    beforeEach(
      () => {
        TestBed.configureTestingModule(
          {
            providers: [
              ProfileService,
              {
                provide: XHRBackend,
                useClass: MockBackend
              }
            ],
            imports: [HttpModule]
          }
        );
      }
    );

    it(
      'getUsers() should return users', inject(
        [XHRBackend, ProfileService],
        (mockBackend: MockBackend, service: ProfileService) => {
          let mockResponseData = [
            {
              firsName: 'Игорь',
              surname: 'Nepipenko',
              photo: '',
              country: 'ua'
            }
          ]

          mockBackend.connections.subscribe(
            (connection: MockConnection) => {
              let responseOpt = new ResponseOptions({ body: JSON.stringify(mockResponseData) })
              setTimeout(() => connection.mockRespond(new Response(responseOpt)), 1000)
            }
          )
          service.getUsers().subscribe(users =>{
            expect(users[0].firstName).toBe('Игорь')
            expect(users[0].surname).toBe('Nepipenko')
          })
        }
      )
    );
  }
);
