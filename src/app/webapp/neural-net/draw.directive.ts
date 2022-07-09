import { Directive, ElementRef, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appDraw]',
})
export class DrawDirective {

	isDragging = false;
	canvas: any;
	context: any;

	constructor(private el: ElementRef) {
		el.nativeElement.setAttribute('width', 280);
		el.nativeElement.setAttribute('height', 280);
		el.nativeElement.style.border = '3px solid blue';

		this.canvas = el.nativeElement as HTMLCanvasElement;
		this.context = this.canvas.getContext('2d');
		this.context.fillStyle = '#000000';
		this.context.fillRect(0, 0, 280, 280);
	}

	@HostListener('mousedown', ['$event']) onMouseDown(e: MouseEvent) {
		this.isDragging = true;
	}
	
	@HostListener('mousemove', ['$event']) onMouseMove(e: MouseEvent) {
			
			const rect = this.canvas.getBoundingClientRect();
			const xCanvasOffset = e.offsetX;
			const yCanvasOffset = e.offsetY;
			const xCanvas = e.x - rect.left;
			const yCanvas = e.y - rect.top;

			if (this.isDragging) {
				this.context.beginPath();
		    this.context.lineWidth = 7;
    		this.context.lineCap = 'round';
    		this.context.strokeStyle = '#FFFFFF';
				this.context.moveTo(xCanvas, yCanvas);
				this.context.lineTo(xCanvasOffset, yCanvasOffset);
				this.context.stroke();
				this.context.closePath();
			}
		}

	@HostListener('mouseup', ['$event']) onMouseUp(e: MouseEvent) {
		this.isDragging = false;
	}

	clear() {
		this.context.beginPath();
		this.context.fillStyle = '#000000';
		this.context.fillRect(0, 0, 280, 280);
		this.context.closePath();
	}

	getImageData(): ImageData {
		const tmpImage = this.context.drawImage(this.canvas, 0, 0, 28, 28);
		return this.context.getImageData(0, 0, 28, 28);
	}

}
