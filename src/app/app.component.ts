import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ClrDragEvent } from '@clr/angular';

interface File {
  name: string;
}

@Component({
  selector: 'my-app',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html'
})
export class AppComponent {
value = '';
//update(value: string) { this.value = value; }

  
 //lists=['hello','goodbye']
  
  files: File[] = [{ name: 'hello' }, { name: 'goodbye'}, { name: 'img_003.jpg' }];
/*
   addList(newList: string) {
    if (newList) {
      this.lists.push(newList);
    }
  }
  */
  name: string  
  fileChange(name:string) {
    this.name=name;
    var f = new File([""], name, {type: "text/plain"})
    this.files.push((f));
  }


droppedFiles: File[] = [];
 
delete(index: any) {
  this.files.splice(index,1);
}


  private moveItem(item: File, from: File[], to: File[]) {
    const indexInFiles = from.indexOf(item);
    if (indexInFiles > -1) {
      from.splice(indexInFiles, 1);
    }
    if (to.indexOf(item) === -1) {
      to.push(item);
    }
  }
  seconds=10;
   /*
    if seconds ==0
    onDrptoUpload
   */
  onDropToUpload(dragEvent: ClrDragEvent<File>) {
    console.log('dropped to upload');
    this.moveItem(dragEvent.dragDataTransfer, this.files, this.droppedFiles);
  }

  onDropBack(dragEvent: ClrDragEvent<File>) {
    console.log('dropped back');
    this.moveItem(dragEvent.dragDataTransfer, this.droppedFiles, this.files);
  }
}
