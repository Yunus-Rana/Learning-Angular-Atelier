import { HttpClient } from '@angular/common/http';
import { Component, inject, signal, WritableSignal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-get-apiex',
  styleUrl: './get-apiex.css',
  templateUrl: './get-apiex.html',
})
export class GetAPIex {
  userList:WritableSignal<any[]> = signal([])
  userPhotos:WritableSignal<any[]> = signal([])
  products:WritableSignal<any[]> = signal([])
  usersLoading = signal(true)
  photosLoading = signal(false)
  productsLoading = signal(false)
  usersError = signal('')
  photosError = signal('')
  productsError = signal('')

  ngOnInit(){
    this.getAllUsers()
  }

  http = inject(HttpClient)


  getAllUsers(){
    this.usersLoading.set(true)
    this.usersError.set('')
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe({
      next:(res:any)=>{
        this.userList.set(res)
        this.usersLoading.set(false)
      },

      error:(err:any)=>{
        console.error("Error", err)
        this.usersError.set('Could not load users. Please try again later.')
        this.usersLoading.set(false)
      }
    })
  }

  getPhotos(){
    this.photosLoading.set(true)
    this.photosError.set('')
    this.http.get("https://jsonplaceholder.typicode.com/photos").subscribe({
      next:(res:any)=>{
        this.userPhotos.set(res)
        this.photosLoading.set(false)
      },

      error:(err:any)=>{
        console.error("Error", err)
        this.photosError.set('Could not load photos. Please try again later.')
        this.photosLoading.set(false)
      }
    })
  }
  
  getAllProducts(){
    this.productsLoading.set(true)
    this.productsError.set('')
    this.http.get("https://api.freeprojectapi.com/api/MiniProject/Ecommerce/GetAllProducts").subscribe({
      next:(res:any)=>{
        if (Array.isArray(res?.data)) {
          this.products.set(res.data)
        } else {
          this.productsError.set('The product service returned data in an unexpected format.')
        }
        this.productsLoading.set(false)
      },
      error:(err:any)=>{
        console.error('Error', err)
        this.productsError.set('Could not load products. Please try again later.')
        this.productsLoading.set(false)
      }
    })
  }
}
