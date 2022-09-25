import { FormGroup } from '@angular/forms';


export class RegisterFormGroup extends FormGroup {
    /**
     * Sets a form to submitted state on ngSubmit
     */
  private _isSubmitted = false;

  constructor(form: {}, validators = null, isSubmited: boolean = false) {
    super(form, validators);
    this._isSubmitted = isSubmited;
   }

  /**
   * Reset form values with provided ones   * 
   * @param value any
   * @param options object onlySelf: boolean, emitEvent: boolean
   */
   
  override reset(value?: any, options?: { onlySelf?: boolean; emitEvent?: boolean }): void {
    super.reset(value, options);
    this.isSubmitted = false;
  }

  get isSubmitted(): boolean {
    return this._isSubmitted;
  }

  set isSubmitted(value: boolean) {
   this._isSubmitted = value;
  }

}

