import { Component, ElementRef, Inject, OnInit, Output, ViewChild } from '@angular/core';
import {DestinoViaje} from '../models/destino-viaje.model'
import { EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup, ValidatorFn} from '@angular/forms';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Observable, from, fromEvent, of, timer } from 'rxjs';
import { map,filter, debounceTime, distinctUntilChanged, switchMap, takeUntil, skip, mergeMap, tap } from 'rxjs/operators';
import { AjaxResponse, ajax } from 'rxjs/ajax';
import { text } from 'stream/consumers';
import { DOCUMENT } from '@angular/common';

//import { datos1 } from '../../assets/datos.json';

//let inputTxt = document.getElementById("text-input");
//let textChange$ = fromEvent(inputTxt, "keyup");



@Component({
  selector: 'app-form-destino-viaje',
  templateUrl: './form-destino-viaje.component.html',
  styleUrl: './form-destino-viaje.component.css',
  standalone: true,
  imports: [ ReactiveFormsModule, FormsModule , CommonModule
    //,BrowserModule
  ]
  
})
export class FormDestinoViajeComponent {
  showSearches: boolean = false;
  isSearching:boolean = false;
  searchedCars: any = [];
  matches;
  
  
  @Inject(DOCUMENT) private document: Document;
  @ViewChild("nombre", { static: true }) inputTxt: ElementRef;

  nameSubscription: any;

  ngAfterViewInit() {
    
  }

  ngOnInit() {

    
    /*et elemNombre = <HTMLInputElement>document.getElementById('nombre'); 
    fromEvent(elemNombre, 'input')
    .pipe(
      map((e: KeyboardEvent) => (e.target as HTMLInputElement).value),
      filter(text => text.length > 2 ),
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(() => ("/assets/datos.json"))
    ).subscribe(ajaxResponse => {
      this.searchResults = ajaxResponse.response;
    });*/  
    
    fromEvent(this.inputTxt.nativeElement, "keyup")
      .pipe(
        debounceTime(500),
        map((i: any) => {
          return i;
        })
      )
      .subscribe(i => {
        this.searchedCars=i.target.value;
        console.log(this.searchedCars);

        this.matches = this.searchResults.filter(s => s.includes(this.searchedCars));
        console.log(this.matches);


      });
    timer(500)
      .pipe(
        switchMap(data => {
          return of(data);
        })
      )
      .subscribe(data => {  
        console.log("perras");
      }
      
    );
    //console.log(this.searchedCars);

  }
  @Output() onItemAdded: EventEmitter<DestinoViaje>; onItemRemoved: EventEmitter<DestinoViaje>;
  fg: FormGroup;
  minLongitud= 3 ;
  searchResults: string[];

  listToShowInAutoComplete$: Observable<string>;
  serachTerm$: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(fb: FormBuilder){
    this.searchResults=["barcelona","madrid","barranquilla"];
    this.onItemAdded = new EventEmitter();
    this.fg=fb.group({
       nombre: ['',Validators.compose([
        Validators.required,
        this.nombreValidatorParametrizable(this.minLongitud)
       ])],
       url: ['']
    }
    );
    this.fg.valueChanges.subscribe((form: any) =>[
      console.log('cambio el formulario:  ', form)
    ] )
    //this.buttonClick();

  }

  guardar(nombre: string, url:string): boolean{
    let d = new DestinoViaje(nombre, url);
     this.onItemAdded.emit(d);
     return false;
  }
  remover(nombre: string, url:string): boolean{
    
    let d = new DestinoViaje(nombre, url);
     this.onItemRemoved.emit(d);
     return false;
  }

  nombreValidator(control: FormControl): {[s: string]: boolean}{
    let l = control.value.toString().trim().length;
    if (l > 0 && l < 5){
      return { invalidNombre: true}  
    }
    return null;

  }

  nombreValidatorParametrizable(minLong: number): ValidatorFn{
    return( control: FormControl): {[s: string]: boolean} | null => {
      let l = control.value.toString().trim().length;
      if (l > 0 && l < minLong){
        return { minLongNombre: true};
      }
      return null;
    }
  }

  IdTypeahead(term: string) {
    this.serachTerm$.next(term);
  }
  /*destinySearch() {
    
    // Adding keyup Event Listerner on input field
    const search$ = fromEvent(this.name.nativeElement.innerHTML, 'keyup').pipe(
      map((event: any) => event.target.value),
      debounceTime(500),  
      distinctUntilChanged(),
      tap(()=> this.isSearching = true),
      switchMap((term) => term ? this.getSearchResults(term) : of<any>(this.searchResults)),
      tap(() => {
        this.isSearching = false,
        this.showSearches = true;
      }));

      search$.subscribe(data => {
        this.isSearching = false
        this.searchedCars = data;
      })
  }*/
 
  getSearchResults(name): Observable<any> {
    //Here we perrform the simple call to filter function. You can also call to API here for the desired result.
    
     return of(this.filterDes(name)) //used `of` to convert array to Observable
     //return this.http.post("url", data, {headers})  //to get the result from API use this line
   }
 
   filterDes(name) {
     return this.searchResults.filter((val) => val.toLowerCase().includes(name.toLowerCase()) == true )
   }

   

}
