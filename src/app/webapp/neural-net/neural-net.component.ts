import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DrawDirective } from './draw.directive';

import { tidy, browser } from '@tensorflow/tfjs';
import { loadLayersModel } from '@tensorflow/tfjs-layers';
// import '@tensorflow/tfjs-backend-wasm'; // Links to a precompiled wasm file

import { mapping } from './mapping';

@Component({
  selector: 'app-neural-net',
  templateUrl: './neural-net.component.html',
  styleUrls: ['./neural-net.component.css'],
})
export class NeuralNetComponent implements OnInit {

  @ViewChild(DrawDirective, {static: false}) canvas: any;
  prediction = '';
  model: any;

  constructor(@Inject(DOCUMENT) private _document: Document) {
    this.canvas = this._document.getElementById('canvas') as HTMLCanvasElement;
  }

  ngOnInit() {

    // tf.setBackend('wasm').then(() => main());
    loadLayersModel('../../../assets/model.json').then(model => {
      this.model = model as any;
      console.log('Model loaded');
    });

  }

  predict() {
    const canvasImg = this.canvas.getImageData();
    const pred = tidy(() => {

      let tmpImage = browser.fromPixels(canvasImg);
      tmpImage = tmpImage.mean(2);
      tmpImage = tmpImage.reshape([1, 28, 28]);
      // tmpImage = tf.cast(tmpImage, 'float32')
      // tmpImage = tmpImage.div(255);
      console.log(tmpImage.data())
      const output = this.model.predict(tmpImage) as any;
      const predictions: number[] = Array.from(output.dataSync());
      console.log(predictions);
      this.prediction = String.fromCharCode(mapping[predictions.indexOf(Math.max.apply(Math, predictions))]);

    })
  }

  clear() {
    this.prediction = '';
  }
}
