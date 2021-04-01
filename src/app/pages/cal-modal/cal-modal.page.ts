import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar';

@Component({
  selector: 'app-cal-modal',
  templateUrl: './cal-modal.page.html',
  styleUrls: ['./cal-modal.page.scss'],
})
export class CalModalPage implements AfterViewInit {
  calendar = {
    mode: 'month',
    currentDate: new Date()
  };
  viewTitle: string;
  
  event = {
    title: '',
    desc: '',
    startTime: null,
    endTime: '',
    allDay: true
  };
 
  modalReady = false;
  @ViewChild(CalendarComponent) myCal: CalendarComponent;
  constructor(private modalCtrl: ModalController) { }

  ngAfterViewInit(){
    setTimeout(()=> {
      this.modalReady = true;
    },100);
  }
  
  save() {    
    this.modalCtrl.dismiss({event: this.event})
  }
 
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
 
  onTimeSelected(ev) {    
    console.log('ev: ', ev);
    this.event.startTime = new Date(ev.selectedTime);
  }
 
  close() {
    this.modalCtrl.dismiss();
  }
  

}
