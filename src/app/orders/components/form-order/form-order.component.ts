import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StateOrder } from '../../enums/state-order';
import { Order } from '../../models/order';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss'],
})
export class FormOrderComponent implements OnInit {
  @Input() public init!: Order;
  @Output() public submitted: EventEmitter<Order>;
  public states: string[];
  public form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.states = Object.values(StateOrder);
    this.submitted = new EventEmitter<Order>();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      typePresta: [this.init.typePresta],
      client: [this.init.client],
      nbJours: [this.init.nbJours],
      tjmHt: [this.init.tjmHt],
      tva: [this.init.tva],
      state: [this.init.state],
      comment: [this.init.comment],
      id: [this.init.id],
    });
  }

  public onSubmit() {
    console.log(this.form.value);
    this.submitted.emit(this.form.value);
  }
}
