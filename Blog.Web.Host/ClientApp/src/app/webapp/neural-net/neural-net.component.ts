import { Component, OnInit, ViewChild } from '@angular/core';
import { DrawDirective } from './draw.directive';

import * as tf from '@tensorflow/tfjs';
// import '@tensorflow/tfjs-backend-wasm'; // Links to a precompiled wasm file

import { mapping } from './mapping';

@Component({
  selector: 'app-neural-net',
  templateUrl: './neural-net.component.html',
  styleUrls: ['./neural-net.component.css'],
})
export class NeuralNetComponent implements OnInit {

	@ViewChild(DrawDirective, {static: false}) canvas;
	prediction = null;
	model: any;

  constructor() {
	}

  ngOnInit() {
	  this.canvas = document.getElementById('canvas') as HTMLCanvasElement;

		// tf.setBackend('wasm').then(() => main());
	  tf.loadLayersModel('../../../assets/model.json').then(model => {
		  this.model = model as any;
		  console.log('Model loaded');
		 }
	  );

  }

  predict() {
		const canvasImg = this.canvas.getImageData();
		const pred = tf.tidy(() => {
			
			let tmpImage = tf.browser.fromPixels(canvasImg);
			tmpImage = tmpImage.mean(2);
			tmpImage = tmpImage.reshape([1, 28, 28]);
			// tmpImage = tf.cast(tmpImage, 'float32')
			// tmpImage = tmpImage.div(255);
			console.log(tmpImage.data())
			const output = this.model.predict(tmpImage) as any;
			const predictions = Array.from(output.dataSync());
			console.log(predictions);
			this.prediction = String.fromCharCode(mapping[predictions.indexOf(Math.max.apply(Math, predictions))]);

		})
  }

  clear() {
		this.prediction = null;
	}
}
