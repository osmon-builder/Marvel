import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-view-more',
  templateUrl: './view-more.component.html',
  styleUrls: ['./view-more.component.scss']
})
export class ViewMoreComponent  {
  
  public visible: boolean = false;
  @Input() comic = [];
  @Output() closeDialog: EventEmitter<any> = new EventEmitter<any>()

  constructor() { }

  public toggleModal() {
    this.visible = !this.visible;
  }

  public onNoClick() {
    this.visible = false;
    this.closeDialog.emit()
  }

  setComics() {
    this.visible = false;
    this.closeDialog.emit(this.comic)
  }

}
