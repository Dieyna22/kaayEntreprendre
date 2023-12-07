import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil-entrepreneur',
  templateUrl: './accueil-entrepreneur.component.html',
  styleUrls: ['./accueil-entrepreneur.component.css']
})
export class AccueilEntrepreneurComponent implements OnInit{
  // declaration des variables de recuperation des valeurs saisies
  titre:string='';
  image:string='';
  description:string='';

  selectedImage!: File;

  ngOnInit(){
  }
  ajoutProjet(){
    console.log(this.titre)
    console.log(this.image)
    console.log(this.description)
    this.onUpload();
  }
  onFileSelected(event:any) {
    this.selectedImage = event.target.files[0];
  }

  onUpload() {
    if (this.selectedImage) {
     console.log(this.image)
    }
  }
  uploadFile(event: Event) {
      const element = event.currentTarget as HTMLInputElement;
      let fileList: FileList | null = element.files;
      if (fileList) {
        const selectedFile = fileList[0];
        if (selectedFile) {
          if (selectedFile.type.match('image.*')) {
              this.image = URL.createObjectURL(selectedFile);
          } 
        }
      }
    }
  
}
