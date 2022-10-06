import { Component, OnInit } from '@angular/core';
// import { FileHandle } from './dragDrop.directive';
import {FileUploadService} from './file-upload.service'
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file:any; // Variable to store file
  FileHandle: any =[];
  files: File[] = [];
  uploadData: any;
  userName: any;
  fileLists: any;
  dtOptions: DataTables.Settings = {};

  // Inject service 
  constructor(private fileUploadService: FileUploadService) { 
  this.userName =   localStorage.getItem("userName");
  console.log("userName",this.userName)
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
    }; 
    this.fileUploadService.fileGet().subscribe(res=>{
      console.log("response of Data", res);
      this.fileLists = res;
    })
  }
  
  
  onRemove(event:any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  
  onChange(event: any ) {
    this.file = event.addedFiles;
    console.log(event)

    this.file.map((x: any) => 
   this.uploadData = x);
   var files = {
          "name":this.uploadData.name,
          "size":this.uploadData.size,
          "type":this.uploadData.type ,
           }
        this.fileUploadService.upload(files).subscribe(
            (event: any) => {
    console.log(event)
            })
}

// // OnClick of button Upload
// onUpload() {
//     this.loading = !this.loading;
//     console.log(this.file);
//     var files = {
//       "name":this.file.name,
//       "size":this.file.size,
//       "type":this.file.type ,
//        }
//     this.fileUploadService.upload(files).subscribe(
//         (event: any) => {
//             if (typeof (event) === 'object') {

//                 // Short link via api response
//                 this.shortLink = event.link;

//                 this.loading = false; // Flag variable 
//             }
//         }
//         );
//       }
//       filesDropped(files: any) {
//       var  file = this.FileHandle
//         this.files = file;
//         console.log(file)
//       }
    
//       upload(): void {
//         //get image upload file obj;
//       }

}
