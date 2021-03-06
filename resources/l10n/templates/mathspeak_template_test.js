// Copyright 2014 Volker Sorge
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Testcases for mathspeak speech rules.
 * @author Volker.Sorge@gmail.com (Volker Sorge)
 */

goog.provide('sre.MathspeakSpanishTest');

goog.require('sre.AbstractRuleTest');



/**
 * @constructor
 * @extends {sre.AbstractRuleTest}
 */
sre.MathspeakSpanishTest = function() {
  sre.MathspeakSpanishTest.base(this, 'constructor');

  /**
   * @override
   */
  this.information = 'Mathspeak rule tests.';

  /**
   * @override
   */
  this.domain = 'mathspeak';

  /**
   * @override
   */
  this.semantics = true;

  /**
   * @override
   */
  this.rules = ['MathspeakSpanish'];

  this.setActive('MathspeakExamples');
};
goog.inherits(sre.MathspeakSpanishTest, sre.AbstractRuleTest);


/**
 * Testing Rule 1.1, Example 1.
 */
sre.MathspeakSpanishTest.prototype.testSample_1_1_1 = function() {
  var mml = '<mrow><mi>π</mi><mo>≈</mo><mn>3.14159</mn></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 1.1, Example 2.
 */
sre.MathspeakSpanishTest.prototype.testSample_1_1_2 = function() {
  var mml = '<mrow><mn>102</mn><mo>+</mo><mn>2,214</mn><mo>+</mo><mn>15</mn>' +
      '<mo>=</mo><mn>2,331</mn></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 1.1, Example 3.
 */
sre.MathspeakSpanishTest.prototype.testSample_1_1_3 = function() {
  var mml = '<mrow><mn>59</mn><mo>×</mo><mn>0</mn><mo>=</mo><mn>0</mn></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 1.2, Example 1.
 */
sre.MathspeakSpanishTest.prototype.testSample_1_2_1 = function() {
  var mml = '<mrow><mn>3</mn><mo>-</mo><mo>-</mo><mn>2</mn></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 1.2, Example 2.
 */
sre.MathspeakSpanishTest.prototype.testSample_1_2_2 = function() {
  var mml = '<mrow><mo>-</mo><mi>y</mi></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 1.2, Example 3.
 */
sre.MathspeakSpanishTest.prototype.testSample_1_2_3 = function() {
  var mml = '<mrow><mo>-</mo><mn>32</mn></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 1.4, Example 1.
 */
sre.MathspeakSpanishTest.prototype.testSample_1_4_1 = function() {
  var mml = '<mrow><mn>t2e4</mn></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 1.4, Example 2.
 */
sre.MathspeakSpanishTest.prototype.testSample_1_4_2 = function() {
  var mml = '<mrow><mn>#FF0000</mn></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 1.4, Example 3.
 */
sre.MathspeakSpanishTest.prototype.testSample_1_4_3 = function() {
  var mml = '<mrow><mn>0x15FF</mn><mo>+</mo><mn>0x2B01</mn><mo>=</mo>' +
      '<mn>0x4100</mn></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 1.5, Example 1.
 */
sre.MathspeakSpanishTest.prototype.testSample_1_5_1 = function() {
  var mml = '<mrow><mn>I</mn><mo>,</mo><mn>II</mn><mo>,</mo><mn>III</mn>' +
      '<mo>,</mo><mn>IV</mn><mo>,</mo><mn>V</mn><mo>.</mo></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 2.1, Example 1.
 */
sre.MathspeakSpanishTest.prototype.testSample_2_1_1 = function() {
  var mml = '<mrow><mi>d</mi><mo>=</mo><msqrt><mrow><msup><mrow><mo>(</mo>' +
      '<mi>X</mi><mo>-</mo><mi>x</mi><mo>)</mo></mrow><mn>2</mn></msup>' +
      '<mo>-</mo><msup><mrow><mo>(</mo><mi>Y</mi><mo>-</mo><mi>y</mi>' +
      '<mo>)</mo></mrow><mn>2</mn></msup></mrow></msqrt></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 2.3, Example 1.
 */
sre.MathspeakSpanishTest.prototype.testSample_2_3_1 = function() {
  var mml = '<mrow><mtext>If</mtext><mspace width="4.pt"/><mi>A</mi>' +
      '<mo>→</mo><mi>B</mi><mspace width="4.pt"/><mtext>and</mtext>' +
      '<mspace width="4.pt"/><mi>B</mi><mo>→</mo><mi>C</mi>' +
      '<mspace width="4.pt"/><mtext>then</mtext><mspace width="4.pt"/>' +
      '<mi>A</mi><mo>→</mo><mi>C</mi><mo>.</mo></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 2.6, Example 1.
 */
sre.MathspeakSpanishTest.prototype.testSample_2_6_1 = function() {
  var mml = '<mrow><mo mathvariant="bold">[</mo><mi>x</mi>' +
      '<mo mathvariant="bold">]</mo></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 2.6, Example 2.
 */
sre.MathspeakSpanishTest.prototype.testSample_2_6_2 = function() {
  var mml = '<mrow><mo>∮</mo><mi>E</mi><mo>·</mo><mi>d</mi>' +
      '<mi mathvariant="bold">l</mi><mo>=</mo><mo>-</mo><mfrac><mrow>' +
      '<mi>d</mi><mi>Φ</mi><mi>B</mi></mrow><mrow><mi>d</mi><mi>t</mi>' +
      '</mrow></mfrac></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing prefix operation as negative or minus.
 */
sre.MathspeakSpanishTest.prototype.testNegativeVsMinus = function() {
  var mml = '<mrow><mo>-</mo><mfrac><mn>1</mn><mi>b</mi></mfrac></mrow>';
  this.executeRuleTest(mml, '', 'default');
  mml = '<mrow><mo>-</mo><mfrac><mi>a</mi><mi>b</mi></mfrac></mrow>';
  this.executeRuleTest(mml, 'minus StartFraction a Over b EndFraction', 'default');
  mml = '<mrow><mo>-</mo><mn>3</mn><mfrac><mi>1</mi><mi>2</mi></mfrac></mrow>';
  this.executeRuleTest(mml, 'negative 3 and one-half', 'default');
};


/**
 * Testing Rule 4.2, Example 1.
 */
sre.MathspeakSpanishTest.prototype.testSample_4_2_1 = function() {
  var mml = '<mrow><mtext>Uppercase</mtext><mo>(</mo><mo>{</mo><mi>α</mi>' +
      '<mo>,</mo><mi>β</mi><mo>,</mo><mi>γ</mi><mo>,</mo><mi>δ</mi>' +
      '<mo>,</mo><mi>ϵ</mi><mo>,</mo><mi>φ</mi><mo>}</mo><mo>)</mo>' +
      '<mo>=</mo><mo>{</mo><mi>Α</mi><mo>,</mo><mi>Β</mi><mo>,</mo>' +
      '<mi>Γ</mi><mo>,</mo><mi>Δ</mi><mo>,</mo><mi>Ε</mi><mo>,</mo>' +
      '<mi>Φ</mi><mo>}</mo></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 5.1, Example 1.
 */
sre.MathspeakSpanishTest.prototype.testSample_5_1_1 = function() {
  var mml = '<mrow><mi>y</mi><mo>-</mo><mn>1</mn></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 5.1, Example 2.
 */
sre.MathspeakSpanishTest.prototype.testSample_5_1_2 = function() {
  var mml = '<mrow><mo>(</mo><mn>1</mn><mtext>-to-</mtext>' +
      '<mn>1</mn><mo>)</mo></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 5.1, Example 3.
 */
sre.MathspeakSpanishTest.prototype.testSample_5_1_3 = function() {
  var mml = '<mrow><mo>-</mo><mn>1</mn></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 6.1, Example 1.
 */
sre.MathspeakSpanishTest.prototype.testSample_6_1_1 = function() {
  var mml = '<mtext>The Fibonacci numbers are: </mtext><mrow><mo>{</mo>' +
      '<mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo>' +
      '<mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>5</mn><mo>,</mo>' +
      '<mn>8</mn><mo>,</mo><mo>&#x2026;</mo><mo>}</mo></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 6.2, Example 1.
 */
sre.MathspeakSpanishTest.prototype.testSample_6_2_1 = function() {
  var mml = '<mrow><mo>|</mo><mn>4</mn><mo>-</mo><mn>7</mn><mo>|</mo>' +
      '<mo>=</mo><mn>3</mn></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 6.2, Example 2.
 * This equation does not make sense! We can do it purely syntactically!
 */
sre.MathspeakSpanishTest.prototype.testSample_6_2_2 = function() {
  var mml = '<mrow><mfenced separators="" open="|" close="|"><mi>a</mi>' +
      '<mo>&#xb1;</mo><mfenced separators="" open="|" close="|"><mi>b</mi>' +
      '<mo>-</mo><mi>c</mi></mfenced></mfenced><mo>&#x2260;</mo>' +
      '<mfenced open="|" close="|"><mi>a</mi></mfenced><mo>&#xb1;</mo>' +
      '<mfenced separators="" open="|" close="|"><mi>b</mi><mo>-</mo>' +
      '<mi>c</mi></mfenced></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 7.1, Example 1.
 */
sre.MathspeakSpanishTest.prototype.testSample_7_1_1 = function() {
  var mml = '<mfrac><mn>1</mn><mi>x</mi></mfrac>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 7.1, Example 2.
 */
sre.MathspeakSpanishTest.prototype.testSample_7_1_2 = function() {
  var mml = '<mrow><mi>a</mi><mo>-</mo><mfrac><mrow><mi>b</mi><mo>+</mo>' +
      '<mi>c</mi></mrow><mrow><mi>d</mi><mo>-</mo><mi>e</mi></mrow>' +
      '</mfrac><mo>×</mo><mi>f</mi></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 7.2, Example 1.
 */
sre.MathspeakSpanishTest.prototype.testSample_7_2_1 = function() {
  var mml = '<mrow><mfrac><mfrac><mi>x</mi><mi>y</mi></mfrac><mi>z</mi>' +
      '</mfrac><mo>≠</mo><mfrac><mi>x</mi><mfrac><mi>y</mi><mi>z</mi>' +
      '</mfrac></mfrac></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 7.3, Example 1.
 */
sre.MathspeakSpanishTest.prototype.testSample_7_3_1 = function() {
  var mml = '<mfrac><mfrac><mrow><mfenced separators="" open="(" close=")">' +
      '<mn>1</mn><mo>-</mo><mi>x</mi></mfenced><mfrac><mi>d</mi><mrow>' +
      '<mi>d</mi><mi>x</mi></mrow></mfrac>' +
      '<mfenced separators="" open="(" close=")"><mn>2</mn><mi>x</mi>' +
      '</mfenced><mo>-</mo><mn>2</mn><mi>x</mi><mfrac><mi>d</mi><mrow>' +
      '<mi>d</mi><mi>x</mi></mrow></mfrac>' +
      '<mfenced separators="" open="(" close=")"><mn>1</mn><mo>-</mo>' +
      '<mi>x</mi></mfenced></mrow><msup>' +
      '<mfenced separators="" open="(" close=")"><mn>1</mn><mo>-</mo>' +
      '<mi>x</mi></mfenced><mn>2</mn></msup></mfrac><mrow><mn>1</mn>' +
      '<mo>+</mo><msup><mfenced separators="" open="(" close=")"><mfrac>' +
      '<mrow><mn>2</mn><mi>x</mi></mrow><mrow><mn>1</mn><mo>-</mo>' +
      '<mi>x</mi></mrow></mfrac></mfenced><mn>2</mn></msup></mrow></mfrac>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 7.3, Example 2.
 */
sre.MathspeakSpanishTest.prototype.testSample_7_3_2 = function() {
  var mml = '<mrow><msub><mi>a</mi><mn>0</mn></msub><mo>+</mo><mfrac>' +
      '<mn>1</mn><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>+</mo><mfrac>' +
      '<mn>1</mn><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>+</mo><mfrac>' +
      '<mn>1</mn><mrow><mo>&#x2026;</mo><mo>+</mo><mfrac><mn>1</mn><msub>' +
      '<mi>a</mi><mi>n</mi></msub></mfrac></mrow></mfrac></mrow></mfrac>' +
      '</mrow></mfrac></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 7.4, Example 1.
 */
sre.MathspeakSpanishTest.prototype.testSample_7_4_1 = function() {
  var mml = '<mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>+</mo><mfrac>' +
      '<mn>2</mn><mn>2</mn></mfrac><mo>+</mo><mfrac><mn>3</mn><mn>2</mn>' +
      '</mfrac><mo>+</mo><mfrac><mn>4</mn><mn>2</mn></mfrac><mo>+</mo>' +
      '<mo>&#x2026;</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi>' +
      '<mo>=</mo><mn>1</mn></mrow>' +
      '<mo movablelimits="true" form="prefix">∞</mo></munderover><mfrac>' +
      '<mi>n</mi><mn>2</mn></mfrac></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 7.4, Example 2.
 */
sre.MathspeakSpanishTest.prototype.testSample_7_4_2 = function() {
  var mml = '<mrow><mfrac><mn>20</mn><mn>5</mn></mfrac><mo>×</mo><mfrac>' +
      '<mn>1</mn><mn>100</mn></mfrac><mo>=</mo><mfrac><mn>1</mn>' +
      '<mn>25</mn></mfrac></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 7.4, Example 3.
 */
sre.MathspeakSpanishTest.prototype.testSample_7_4_3 = function() {
  var mml = '<mrow><mfrac><mfrac><mn>3</mn><mn>5</mn></mfrac><mn>8</mn>' +
      '</mfrac><mo>=</mo><mfrac><mn>3</mn><mn>5</mn></mfrac><mo>×</mo>' +
      '<mfrac><mn>1</mn><mn>8</mn></mfrac></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 7.5, Example 1.
 */
sre.MathspeakSpanishTest.prototype.testSample_7_5_1 = function() {
  var mml = '<mrow><mn>3</mn><mfrac><mn>5</mn><mn>8</mn></mfrac><mo>=</mo>' +
      '<mfrac><mn>29</mn><mn>8</mn></mfrac></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 7.6, Example 1.
 */
sre.MathspeakSpanishTest.prototype.testSample_7_6_1 = function() {
  var mml = '<mrow><msub><mi>a</mi><mn>0</mn></msub><mo>+</mo><mfrac><msub>' +
      '<mi>b</mi><mn>1</mn></msub><mrow><msub><mi>a</mi><mn>1</mn></msub>' +
      '<mo>+</mo><mfrac><msub><mi>b</mi><mn>2</mn></msub><mrow><msub>' +
      '<mi>a</mi><mn>2</mn></msub><mo>+</mo><mfrac><msub><mi>b</mi>' +
      '<mn>3</mn></msub><mrow><msub><mi>a</mi><mn>3</mn></msub><mo>+</mo>' +
      '<mo>&#x2026;</mo></mrow></mfrac></mrow></mfrac></mrow></mfrac>' +
      '<mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mo>+</mo><mfrac><msub>' +
      '<mi>b</mi><mn>1</mn></msub><msub><mi>a</mi><mn>1</mn></msub></mfrac>' +
      '<mo>+</mo><mfrac><msub><mi>b</mi><mn>2</mn></msub><msub><mi>a</mi>' +
      '<mn>2</mn></msub></mfrac><mo>+</mo><mo>&#x2026;</mo></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 8.1, Example 1.
 */
sre.MathspeakSpanishTest.prototype.testSample_8_1_1 = function() {
  var mml = '<mrow><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mn>6</mn>' +
      '<msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mi>x</mi><mo>=</mo>' +
      '<mn>30</mn></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 8.1, Example 2.
 */
sre.MathspeakSpanishTest.prototype.testSample_8_1_2 = function() {
  var mml = '<mrow><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>y</mi>' +
      '</mrow><mrow><mi>d</mi><msup><mi>x</mi><mn>2</mn></msup></mrow>' +
      '</mfrac><mo>+</mo><mfenced separators="" open="(" close=")">' +
      '<mi>a</mi><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>b</mi>' +
      '<mi>x</mi><mo>+</mo><mi>c</mi></mfenced><mi>y</mi><mo>=</mo>' +
      '<mn>0</mn></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 8.2, Example 1.
 */
sre.MathspeakSpanishTest.prototype.testSample_8_2_1 = function() {
  var mml = '<msup><mi>x</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></msup>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 8.2, Example 2.
 */
sre.MathspeakSpanishTest.prototype.testSample_8_2_2 = function() {
  var mml = '<msub><mi>x</mi><mi>n</mi></msub>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 8.2, Example 3.
 */
sre.MathspeakSpanishTest.prototype.testSample_8_2_3 = function() {
  var mml = '<msup><mi>x</mi><mi>a</mi></msup>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 8.3, Example 1.
 */
sre.MathspeakSpanishTest.prototype.testSample_8_3_1 = function() {
  var mml = '<msup><mi>x</mi><mrow><mi>m</mi><mo>+</mo><mi>n</mi></mrow>' +
      '</msup>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 8.3, Example 2.
 */
sre.MathspeakSpanishTest.prototype.testSample_8_3_2 = function() {
  var mml = '<mrow><msub><mi>T</mi><mrow><mi>n</mi><mo>-</mo><mn>1</mn>' +
      '</mrow></msub><mo>+</mo><mn>5</mn><mo>=</mo><mn>0</mn></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 8.3, Example 3.
 */
sre.MathspeakSpanishTest.prototype.testSample_8_3_3 = function() {
  var mml = '<mrow><msup><mi>x</mi><mrow><mi>m</mi><mo>+</mo><mi>n</mi>' +
      '</mrow></msup><mo>=</mo><msup><mi>x</mi><mi>m</mi></msup><msup>' +
      '<mi>x</mi><mi>n</mi></msup></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 8.4, Example 1.
 */
sre.MathspeakSpanishTest.prototype.testSample_8_4_1 = function() {
  var mml = '<msup><mi>x</mi><mrow><msub><mi>a</mi><mi>n</mi></msub>' +
      '<mo>+</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>-</mo><mn>1</mn>' +
      '</mrow></msub></mrow></msup>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 8.4, Example 2.
 */
sre.MathspeakSpanishTest.prototype.testSample_8_4_2 = function() {
  var mml = '<msup><mi>x</mi><msub><mi>a</mi><mi>b</mi></msub></msup>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 8.4, Example 3.
 */
sre.MathspeakSpanishTest.prototype.testSample_8_4_3 = function() {
  var mml = '<msub><mi>x</mi><msup><mi>a</mi><mi>b</mi></msup></msub>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 8.4, Example 4.
 */
sre.MathspeakSpanishTest.prototype.testSample_8_4_4 = function() {
  var mml = '<mrow><msup><mi>y</mi><msup><mi>a</mi><msub><mi>b</mi>' +
      '<mi>c</mi></msub></msup></msup><mo>≠</mo><msup><mi>y</mi><mrow>' +
      '<msup><mi>a</mi><mi>b</mi></msup><mi>c</mi></mrow></msup></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 8.4, Example 5.
 */
sre.MathspeakSpanishTest.prototype.testSample_8_4_5 = function() {
  var mml = '<msup><mi>y</mi><msup><mi>a</mi><mrow><msub><mrow/><mi>c</mi>' +
      '</msub><mi>b</mi></mrow></msup></msup>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 8.4, Example 5, short.
 */
sre.MathspeakSpanishTest.prototype.testSample_8_4_5Short = function() {
  var mml = '<msup><mi>y</mi><msup><mi>a</mi><mrow><msub><mrow/><mi>c</mi>' +
      '</msub></mrow></msup></msup>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 8.4, Example 5, Sup/Sub inversed.
 */
sre.MathspeakSpanishTest.prototype.testSample_8_4_5Inv = function() {
  var mml = '<msub><mi>y</mi><msub><mi>a</mi><mrow><msup><mrow/><mi>c</mi>' +
      '</msup></mrow></msub></msub>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 8.4, Example 5, Sup/Sub inversed, short.
 */
sre.MathspeakSpanishTest.prototype.testSample_8_4_5InvShort = function() {
  var mml = '<msub><mi>y</mi><msub><mi>a</mi><mrow><msup><mrow/><mi>c</mi>' +
      '</msup><mi>b</mi></mrow></msub></msub>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 8.4, Example 6.
 */
sre.MathspeakSpanishTest.prototype.testSample_8_4_6 = function() {
  var mml = '<msup><mi>x</mi><msup><mi>a</mi><mi>b</mi></msup></msup>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 8.4, Example 7.
 */
sre.MathspeakSpanishTest.prototype.testSample_8_4_7 = function() {
  var mml = '<msub><mi>x</mi><msub><mi>a</mi><mi>b</mi></msub></msub>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 8.4, Example 8.
 */
sre.MathspeakSpanishTest.prototype.testSample_8_4_8 = function() {
  var mml = '<msup><mi>T</mi><mfenced separators="" open="(" close=")">' +
      '<msup><mi>x</mi><mi>a</mi></msup><mo>+</mo><msup><mi>y</mi>' +
      '<mi>b</mi></msup></mfenced></msup>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 8.5, Example 1.
 */
sre.MathspeakSpanishTest.prototype.testSample_8_5_1 = function() {
  var mml = '<msub><mi>x</mi><mn>1</mn></msub>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 8.5, Example 2.
 */
sre.MathspeakSpanishTest.prototype.testSample_8_5_2 = function() {
  var mml = '<msub><mi>x</mi><mrow><mo>-</mo><mn>1</mn></mrow></msub>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 8.5, Example 3.
 */
sre.MathspeakSpanishTest.prototype.testSample_8_5_3 = function() {
  var mml = '<msub><mi>x</mi><mrow><mn>10,000</mn></mrow>' +
      '</msub>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 8.5, Example 4.
 */
sre.MathspeakSpanishTest.prototype.testSample_8_5_4 = function() {
  var mml = '<msub><mi>x</mi><mrow><mn>1.3</mn></mrow>' +
      '</msub>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 8.5, Example 5.
 */
sre.MathspeakSpanishTest.prototype.testSample_8_5_5 = function() {
  var mml = '<mrow><mn>4</mn><mi>Fe</mi><mo>+</mo><mn>3</mn><msub>' +
      '<mi>O</mi><mn>2</mn></msub><mo>→</mo><mn>2</mn><msub><mi>Fe</mi>' +
      '<mn>2</mn></msub><msub><mi>O</mi><mn>3</mn></msub></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 8.5, Example 6.
 */
sre.MathspeakSpanishTest.prototype.testSample_8_5_6 = function() {
  var mml = '<msub><mi>a</mi><mrow><mn>2</mn><mo>,</mo><mn>3</mn></mrow>' +
      '</msub>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 8.5, Example 7.
 */
sre.MathspeakSpanishTest.prototype.testSample_8_5_7 = function() {
  var mml = '<msub><mi>T</mi><mrow><msub><mi>n</mi><mn>1</mn></msub>' +
      '<mo>+</mo><msub><mi>n</mi><mn>0</mn></msub></mrow></msub>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 8.5, Example 8.
 */
sre.MathspeakSpanishTest.prototype.testSample_8_5_8 = function() {
  var mml = '<mrow><msub><mo form="prefix">log</mo><mn>2</mn></msub>' +
      '<mrow><mo>(</mo><mi>x</mi><mo>)</mo></mrow><mo>=</mo><mfrac><mrow>' +
      '<msub><mo form="prefix">log</mo><mn>10</mn></msub><mrow><mo>(</mo>' +
      '<mi>x</mi><mo>)</mo></mrow></mrow><mrow><msub>' +
      '<mo form="prefix">log</mo><mn>10</mn></msub><mrow><mo>(</mo>' +
      '<mn>2</mn><mo>)</mo></mrow></mrow></mfrac></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 8.5, Example 9.
 */
sre.MathspeakSpanishTest.prototype.testSample_8_5_9 = function() {
  var mml = '<msub><mi>Φ</mi><mn>5</mn></msub>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 8.5, Example 10.
 */
sre.MathspeakSpanishTest.prototype.testSample_8_5_10 = function() {
  var mml = '<mrow><mo form="prefix">ln</mo><mi>x</mi><mo>=</mo><msubsup>' +
      '<mo>∫</mo><mn>1</mn><mi>x</mi></msubsup><mfrac><mrow><mi>d</mi>' +
      '<mi>t</mi></mrow><mi>t</mi></mfrac></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 8.6, Example 1.
 */
sre.MathspeakSpanishTest.prototype.testSample_8_6_1 = function() {
  var mml = '<mrow><mi>$</mi><mi>n</mi><mn>2</mn><mo>=</mo><mn>2</mn>' +
      '<mo>*</mo><mi>$</mi><mi>n</mi><mo>+</mo><mn>1</mn><mo>;</mo></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 8.8, Example 1.
 */
sre.MathspeakSpanishTest.prototype.testSample_8_8_1_naive = function() {
  var mml = '<mmultiscripts><mi>x</mi><mrow><mi>e</mi><mi>f</mi></mrow>' +
      '<mrow><mi>g</mi><mi>h</mi></mrow><mprescripts/><mrow><mi>c</mi>' +
      '<mi>d</mi></mrow><mrow><mi>a</mi><mi>b</mi></mrow></mmultiscripts>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 8.8, Example 1.
 */
sre.MathspeakSpanishTest.prototype.testSample_8_8_1 = function() {
  var mml = '<mmultiscripts><mi>x</mi><mi>e</mi>' +
      '<mi>g</mi><mi>f</mi><mi>h</mi><mprescripts/><mi>c</mi>' +
      '<mi>a</mi><mi>d</mi><mi>b</mi></mmultiscripts>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing tensors Multi scripts.
 */
sre.MathspeakSpanishTest.prototype.testSampleTensorMultiSimpleABC = function() {
  var mml = '<mmultiscripts><mi>x</mi><msup><mi>c</mi><mi>l</mi></msup>' +
      '<mprescripts/><mi>a</mi><mi>b</mi></mmultiscripts>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing tensors Multi scripts.
 */
sre.MathspeakSpanishTest.prototype.testSampleTensorMultiSub = function() {
  var mml = '<mmultiscripts><mi>x</mi><msub><mi>c</mi><mi>l</mi></msub>' +
      '<mi>d</mi><mprescripts/><mi>a</mi><mi>b</mi></mmultiscripts>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing tensors Multi scripts.
 */
sre.MathspeakSpanishTest.prototype.testSampleTensorMultiSubSup = function() {
  var mml = '<mmultiscripts><mi>x</mi><msub><mi>c</mi><msup><mi>l</mi>' +
      '<mi>k</mi></msup></msub><mi>d</mi><mi>e</mi><none/>' +
      '<mprescripts/><mi>a</mi><mi>b</mi></mmultiscripts>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing tensors Multi scripts.
 */
sre.MathspeakSpanishTest.prototype.testSampleTensorMultiSimple = function() {
  var mml = '<mmultiscripts><mi>x</mi><msup><mi>c</mi><mi>l</mi></msup>' +
      '<mi>d</mi><mprescripts/><mi>a</mi><mi>b</mi></mmultiscripts>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing tensors Multi scripts.
 */
sre.MathspeakSpanishTest.prototype.testSampleTensorMultiComplex = function() {
  var mml = '<mmultiscripts><mi>x</mi><mrow><mi>c</mi><msup><mi>k</mi>' +
      '<mi>l</mi></msup></mrow><mi>d</mi>' +
      '<mprescripts/><mi>a</mi><mi>b</mi></mmultiscripts>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing tensors ABCD.
 */
sre.MathspeakSpanishTest.prototype.testSampleTwoTensors = function() {
  var mml = '<mmultiscripts><mi>x</mi><mi>c</mi><mi>d</mi>' +
      '<mprescripts/><mi>a</mi><mi>b</mi></mmultiscripts>' +
      '<mmultiscripts><mi>x</mi><mi>c</mi><mi>d</mi>' +
      '<mprescripts/><mi>a</mi><mi>b</mi></mmultiscripts>';
  this.executeRuleTest(mml, '', 'default');
};


// Tensor tests are named with the convention of including the indices that are
// present:
//
//   B      D
//     Base     R
//   A      C
//  Where R is the rest.
/**
 * Testing tensors ABCD.
 */
sre.MathspeakSpanishTest.prototype.testSamplePartialTensorABCD = function() {
  var mml = '<mmultiscripts><mi>x</mi><mi>c</mi><mi>d</mi>' +
      '<mprescripts/><mi>a</mi><mi>b</mi></mmultiscripts>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing tensors ABC.
 */
sre.MathspeakSpanishTest.prototype.testSamplePartialTensorABC = function() {
  var mml = '<mmultiscripts><mi>x</mi><mi>c</mi>' +
      '<mprescripts/><mi>a</mi><mi>b</mi></mmultiscripts>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing tensors ABD.
 */
sre.MathspeakSpanishTest.prototype.testSamplePartialTensorABD = function() {
  var mml = '<mmultiscripts><mi>x</mi><none/><mi>d</mi>' +
      '<mprescripts/><mi>a</mi><mi>b</mi></mmultiscripts>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing tensors AB.
 */
sre.MathspeakSpanishTest.prototype.testSamplePartialTensorAB = function() {
  var mml = '<mmultiscripts><mi>x</mi>' +
      '<mprescripts/><mi>a</mi><mi>b</mi></mmultiscripts>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing tensors ABCR.
 */
sre.MathspeakSpanishTest.prototype.testSamplePartialTensorABCR = function() {
  var mml = '<mmultiscripts><mi>x</mi><mi>c</mi>' +
      '<mprescripts/><mi>a</mi><mi>b</mi></mmultiscripts><mi>r</mi>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing tensors ABCDR.
 */
sre.MathspeakSpanishTest.prototype.testSamplePartialTensorABCDR = function() {
  var mml = '<mmultiscripts><mi>x</mi><mi>c</mi><mi>d</mi>' +
      '<mprescripts/><mi>a</mi><mi>b</mi></mmultiscripts><mi>r</mi>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing tensors Root of ABCD.
 */
sre.MathspeakSpanishTest.prototype.testSamplePartialTensorABCDRoot = function() {
  var mml = '<msqrt><mmultiscripts><mi>x</mi><mi>c</mi><mi>d</mi>' +
      '<mprescripts/><mi>a</mi><mi>b</mi></mmultiscripts></msqrt>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing tensors Root ABCD . R.
 */
sre.MathspeakSpanishTest.prototype.testSamplePartialTensorABCDRootR = function() {
  var mml = '<msqrt><mmultiscripts><mi>x</mi><mi>c</mi><mi>d</mi>' +
      '<mprescripts/><mi>a</mi><mi>b</mi></mmultiscripts></msqrt><mi>r</mi>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing tensors Frac of ABCD.
 */
sre.MathspeakSpanishTest.prototype.testSamplePartialTensorABCDFrac = function() {
  var mml = '<mfrac><mn>1</mn><mmultiscripts><mi>x</mi><mi>c</mi><mi>d</mi>' +
      '<mprescripts/><mi>a</mi><mi>b</mi></mmultiscripts></mfrac>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing tensors Frac ABCD . R.
 */
sre.MathspeakSpanishTest.prototype.testSamplePartialTensorABCDFracR = function() {
  var mml = '<mfrac><mn>1</mn><mmultiscripts><mi>x</mi><mi>c</mi><mi>d</mi>' +
      '<mprescripts/><mi>a</mi><mi>b</mi></mmultiscripts></mfrac><mi>r</mi>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule additional examples for simple subscripts with square.
 */
sre.MathspeakSpanishTest.prototype.testSampleSimpleSquare = function() {
  var mml = '<msubsup><mi>T</mi><mn>0</mn><mn>2</mn></msubsup>';
  this.executeRuleTest(mml, '', 'default');
  mml = '<msup><msub><mi>T</mi><mn>0</mn></msub><mn>2</mn></msup>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule additional examples for simple subscripts with cube.
 */
sre.MathspeakSpanishTest.prototype.testSampleSimpleCube = function() {
  var mml = '<msubsup><mi>T</mi><mn>0</mn><mn>3</mn></msubsup>';
  this.executeRuleTest(mml, '', 'default');
  mml = '<msup><msub><mi>T</mi><mn>0</mn></msub><mn>3</mn></msup>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 8.8, Example 2.
 */
sre.MathspeakSpanishTest.prototype.testSample_8_8_2 = function() {
  var mml = '<msubsup><mi>T</mi><mrow><mi>n</mi><mo>-</mo><mn>1</mn></mrow>' +
      '<mn>2</mn></msubsup>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 8.9, Example 1.
 */
sre.MathspeakSpanishTest.prototype.testSample_8_9_1 = function() {
  var mml = '<msup><mi>x</mi><mo>\'</mo></msup>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 8.9, Example 2.
 */
sre.MathspeakSpanishTest.prototype.testSample_8_9_2 = function() {
  var mml = '<mrow><msup><mi>f</mi><mrow><mo>\'</mo><mo>\'</mo><mo>\'</mo>' +
      '</mrow></msup><mrow><mo>(</mo><mi>y</mi><mo>)</mo></mrow><mo>=</mo>' +
      '<mfrac><mrow><mi>d</mi><msup><mi>f</mi><mrow><mo>\'</mo><mo>\'</mo>' +
      '</mrow></msup><mrow><mo>(</mo><mi>y</mi><mo>)</mo></mrow></mrow>' +
      '<mrow><mi>d</mi><mi>y</mi></mrow></mfrac></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 8.10, Example 1.
 */
sre.MathspeakSpanishTest.prototype.testSample_8_10_1 = function() {
  var mml = '<mrow><msup><mi>ρ</mi><mo>\'</mo></msup><mo>=</mo><msubsup>' +
      '<mi>ρ</mi><mo>+</mo><mo>\'</mo></msubsup><mo>+</mo><msubsup>' +
      '<mi>ρ</mi><mo>-</mo><mo>\'</mo></msubsup></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 8.10, Example 2.
 */
sre.MathspeakSpanishTest.prototype.testSample_8_10_2 = function() {
  var mml = '<msubsup><mi>x</mi><mn>10</mn><mo>\'</mo></msubsup>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 8.10, Example 3.
 */
sre.MathspeakSpanishTest.prototype.testSample_8_10_3 = function() {
  var mml = '<msubsup><mi>T</mi><mi>n</mi><mo>\'</mo></msubsup>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 8.11, Example 1.
 */
sre.MathspeakSpanishTest.prototype.testSample_8_11_1 = function() {
  var mml = '<mfenced open="[" close="]"><mtable><mtr><mtd><msup><mi>x</mi>' +
      '<mi>n</mi></msup></mtd><mtd><msup><mi>y</mi><mi>n</mi></msup></mtd>' +
      '<mtd><msup><mi>z</mi><mi>n</mi></msup></mtd></mtr><mtr><mtd><msup>' +
      '<mi>x</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mtd>' +
      '<mtd><msup><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow>' +
      '</msup></mtd><mtd><msup><mi>z</mi><mrow><mi>n</mi><mo>+</mo>' +
      '<mn>1</mn></mrow></msup></mtd></mtr></mtable></mfenced>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 8.12, Example 1.
 */
sre.MathspeakSpanishTest.prototype.testSample_8_12_1 = function() {
  var mml = '<msup><mrow><msub><mi>x</mi><mi>a</mi></msub></mrow><mi>b</mi>' +
      '</msup>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 8.12, Example 2.
 */
sre.MathspeakSpanishTest.prototype.testSample_8_12_2 = function() {
  var mml = '<msub><mrow><msup><mi>x</mi><mi>b</mi></msup></mrow><mi>a</mi>' +
      '</msub>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 8.13, Example 1.
 */
sre.MathspeakSpanishTest.prototype.testSample_8_13_1 = function() {
  var mml = '<mrow><msup><mo form="prefix">log</mo><mn>4</mn></msup><msup>' +
      '<mrow/><mi>b</mi></msup><mi>x</mi></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 8.13, Example 2.
 */
sre.MathspeakSpanishTest.prototype.testSample_8_13_2 = function() {
  var mml = '<mrow><msub><mi>T</mi><mi>n</mi></msub><msub><mrow/><mi>a</mi>' +
      '</msub><mi>y</mi></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 9.1, Example 1.
 */
sre.MathspeakSpanishTest.prototype.testSample_9_1_1 = function() {
  var mml = '<msqrt><mn>2</mn></msqrt>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 9.1, Example 2.
 */
sre.MathspeakSpanishTest.prototype.testSample_9_1_2 = function() {
  var mml = '<msqrt><mrow><mi>m</mi><mo>+</mo><mi>n</mi></mrow></msqrt>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 9.2, Example 1.
 */
sre.MathspeakSpanishTest.prototype.testSample_9_2_1 = function() {
  var mml = '<mroot><mrow><mi>x</mi><mo>+</mo><mi>y</mi></mrow><mrow>' +
      '<mi>m</mi><mo>+</mo><mi>n</mi></mrow></mroot>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 9.2, Example 2.
 */
sre.MathspeakSpanishTest.prototype.testSample_9_2_2 = function() {
  var mml = '<mrow><mroot><msup><mi>x</mi><mi>m</mi></msup><mi>n</mi>' +
      '</mroot><mo>=</mo><msup><mfenced separators="" open="(" close=")">' +
      '<mroot><mi>x</mi><mi>n</mi></mroot></mfenced><mi>m</mi></msup>' +
      '<mo>=</mo><msup><mi>x</mi><mfrac><mi>m</mi><mi>n</mi></mfrac>' +
      '</msup><mo>,</mo><mi>x</mi><mo>></mo><mn>0</mn></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 9.2, Example 3.
 */
sre.MathspeakSpanishTest.prototype.testSample_9_2_3 = function() {
  var mml = '<mrow><mroot><mi>x</mi><mn>3</mn></mroot><mo>=</mo><msup>' +
      '<mi>x</mi><mfrac><mn>1</mn><mn>3</mn></mfrac></msup></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 9.3, Example 1.
 */
sre.MathspeakSpanishTest.prototype.testSample_9_3_1 = function() {
  var mml = '<msqrt><mrow><msqrt><mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow>' +
      '</msqrt><mo>+</mo><msqrt><mrow><mi>y</mi><mo>+</mo><mn>1</mn>' +
      '</mrow></msqrt></mrow></msqrt>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 9.3, Example 2.
 */
sre.MathspeakSpanishTest.prototype.testSample_9_3_2 = function() {
  var mml = '<mrow><mroot><mroot><mi>x</mi><mi>m</mi></mroot><mi>n</mi>' +
      '</mroot><mo>=</mo><mroot><mroot><mi>x</mi><mi>n</mi></mroot>' +
      '<mi>m</mi></mroot></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 9.3, Example 3.
 */
sre.MathspeakSpanishTest.prototype.testSample_9_3_3 = function() {
  var mml = '<mrow><msup><mi>x</mi><mrow><mi>e</mi><mo>-</mo><mn>2</mn>' +
      '</mrow></msup><mo>=</mo><msqrt><mrow><mi>x</mi><mroot><mrow>' +
      '<mi>x</mi><mroot><mrow><mi>x</mi><mroot><mrow><mi>x</mi>' +
      '<mo>&#x2026;</mo></mrow><mn>5</mn></mroot></mrow><mn>4</mn></mroot>' +
      '</mrow><mn>3</mn></mroot></mrow></msqrt><mo>,</mo><mi>x</mi>' +
      '<mo>∈</mo><mi>ℝ</mi></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 9.3, Example 4.
 */
sre.MathspeakSpanishTest.prototype.testSample_9_3_4 = function() {
  var mml = '<mrow><mfrac><mn>2</mn><mi>π</mi></mfrac><mo>=</mo>' +
      '<mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac>' +
      '<mfrac><msqrt><mrow><mn>2</mn><mo>+</mo><msqrt><mn>2</mn></msqrt>' +
      '</mrow></msqrt><mn>2</mn></mfrac><mfrac><msqrt><mrow><mn>2</mn>' +
      '<mo>+</mo><msqrt><mrow><mn>2</mn><mo>+</mo><msqrt><mn>2</mn>' +
      '</msqrt></mrow></msqrt></mrow></msqrt><mn>2</mn></mfrac>' +
      '<mo>&#x2026;</mo></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 10.1, Example 1.
 */
sre.MathspeakSpanishTest.prototype.testSample_10_1_1 = function() {
  var mml = '<mrow><mfrac><mrow><mn>5</mn><mi>x</mi>' +
      '<menclose notation="updiagonalstrike"><mi>y</mi></menclose></mrow>' +
      '<mrow><mn>2</mn><menclose notation="updiagonalstrike"><mi>y</mi>' +
      '</menclose></mrow></mfrac><mo>=</mo><mfrac><mn>5</mn><mn>2</mn>' +
      '</mfrac><mi>x</mi></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 10.2, Example 1.
 */
sre.MathspeakSpanishTest.prototype.testSample_10_2_1 = function() {
  var mml = '<mrow><mfrac><mn>12</mn><mn>18</mn></mfrac><mo>=</mo><mfrac>' +
      '<mover><menclose notation="updiagonalstrike"><mn>12</mn></menclose>' +
      '<mn>2</mn></mover><munder><menclose notation="updiagonalstrike">' +
      '<mn>18</mn></menclose><mn>3</mn></munder></mfrac><mo>=</mo><mfrac>' +
      '<mn>2</mn><mn>3</mn></mfrac></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Reversed version of the above example.
 * Testing Rule 10.2, Example 2.
 */
sre.MathspeakSpanishTest.prototype.testSample_10_2_2 = function() {
  var mml = '<mrow><mfrac><mn>12</mn><mn>18</mn></mfrac><mo>=</mo><mfrac>' +
      '<munder><mn>2</mn><menclose notation="updiagonalstrike"><mn>12</mn>' +
      '</menclose></munder><mover><mn>3</mn>' +
      '<menclose notation="updiagonalstrike">' +
      '<mn>18</mn></menclose></mover></mfrac><mo>=</mo><mfrac>' +
      '<mn>2</mn><mn>3</mn></mfrac></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 11.1, Example 1.
 */
sre.MathspeakSpanishTest.prototype.testSample_11_1_1 = function() {
  var mml = '<mover accent="true"><mi>x</mi><mo>¨</mo></mover>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 11.1, Example 2.
 */
sre.MathspeakSpanishTest.prototype.testSample_11_1_2 = function() {
  var mml = '<mover accent="true"><mrow><mi>x</mi><mo>+</mo><mi>y</mi>' +
      '</mrow><mo>→</mo></mover>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 11.1, Example 3.
 */
sre.MathspeakSpanishTest.prototype.testSample_11_1_3 = function() {
  var mml = '<mover accent="true"><mi>x</mi><mo>^</mo></mover>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 11.2, Example 1.
 */
sre.MathspeakSpanishTest.prototype.testSample_11_2_1 = function() {
  var mml = '<munder accent="true"><mi>x</mi><mi>˙</mi></munder>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 11.3, Example 1.
 */
sre.MathspeakSpanishTest.prototype.testSample_11_3_1 = function() {
  var mml = '<mover accent="true"><mi>x</mi><mo>˜</mo></mover>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 11.3, Example 2.
 */
sre.MathspeakSpanishTest.prototype.testSample_11_3_2 = function() {
  var mml = '<mover accent="true"><mi>x</mi><mo>¯</mo></mover>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 11.3, Example 3.
 */
sre.MathspeakSpanishTest.prototype.testSample_11_3_3 = function() {
  var mml = '<munder accentunder="true"><mi>y</mi><mo>˜</mo></munder>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 11.4, Example 1.
 */
sre.MathspeakSpanishTest.prototype.testSample_11_4_1 = function() {
  var mml = '<mover accent="true"><mover accent="true"><mi>x</mi><mo>¯</mo>' +
      '</mover><mo>¯</mo></mover>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 11.4, Example 2.
 */
sre.MathspeakSpanishTest.prototype.testSample_11_4_2 = function() {
  var mml = '<munder><munder><mover accent="true"><mover accent="true">' +
      '<mi>y</mi><mo>¯</mo></mover><mo>¯</mo></mover>' +
      '<mo>\u005F</mo></munder><mo>\u005F</mo></munder>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 11.6, Example 1.
 */
sre.MathspeakSpanishTest.prototype.testSample_11_6_1 = function() {
  var mml = '<munder accentunder="true"><munder><mrow><mi>a</mi><mo>+</mo>' +
      '<mi>b</mi></mrow><mo>\u005F</mo></munder><mo>*</mo></munder>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 11.6, Example 3.
 */
sre.MathspeakSpanishTest.prototype.testSample_11_6_3 = function() {
  var mml = '<mover><mover accent="true"><mrow><mi>x</mi><mo>+</mo>' +
      '<mi>y</mi></mrow><mo>˜</mo></mover><mo>¯</mo></mover>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 11.7, Example 1.
 */
sre.MathspeakSpanishTest.prototype.testSample_11_7_1 = function() {
  var mml = '<mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo>' +
      '<mn>1</mn></mrow><mi>∞</mi></munderover><msub><mi>a</mi><mi>n</mi>' +
      '</msub></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 11.8, Example 1.
 */
sre.MathspeakSpanishTest.prototype.testSample_11_8_1 = function() {
  var mml = '<mrow><munder><munder><munder><mrow><mi>x</mi><mo>+</mo>' +
      '<mi>y</mi></mrow> <mo>\u005F</mo></munder><mrow><mi>a</mi>' +
      '<mo>=</mo><mn>5</mn></mrow></munder><mrow><mi>b</mi><mo>=</mo>' +
      '<mn>3</mn></mrow></munder></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 11.8, Example 2.
 */
sre.MathspeakSpanishTest.prototype.testSample_11_8_2 = function() {
  var mml = '<mrow><mover><mover><mover><mrow><mi>x</mi><mo>+</mo><mi>y</mi>' +
      '</mrow><mo>¯</mo></mover><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow>' +
      '</mover><mrow><mi>m</mi><mo>=</mo><mn>2</mn></mrow></mover></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 12.1, Example 1.
 */
sre.MathspeakSpanishTest.prototype.testSample_12_1_1 = function() {
  var mml = '<mrow><msub><mo form="prefix">log</mo><mi>b</mi></msub>' +
      '<mi>x</mi></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 12.1, Example 2.
 */
sre.MathspeakSpanishTest.prototype.testSample_12_1_2 = function() {
  var mml = '<mrow><mo form="prefix">cos</mo><mi>y</mi></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 12.1, Example 3.
 */
sre.MathspeakSpanishTest.prototype.testSample_12_1_3 = function() {
  var mml = '<mrow><mo form="prefix">sin</mo><mi>x</mi></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 13.1, Example 1.
 */
sre.MathspeakSpanishTest.prototype.testSample_13_1_1 = function() {
  var mml = '<mrow><mfrac><mrow><mn>60</mn>' +
      '<menclose notation="updiagonalstrike"><mi mathvariant="normal"' +
      ' class="MathML-Unit">mi</mi></menclose>' +
      '</mrow><menclose notation="updiagonalstrike"><mi mathvariant="normal"' +
      ' class="MathML-Unit">hr</mi>' +
      '</menclose></mfrac><mo>×</mo><mfrac><mrow><mn>5,280</mn>' +
      '<mi mathvariant="normal" class="MathML-Unit">ft</mi></mrow><mrow>' +
      '<mn>1</mn><menclose notation="updiagonalstrike">' +
      '<mi mathvariant="normal" class="MathML-Unit">mi</mi></menclose>' +
      '</mrow></mfrac><mo>×</mo><mfrac><mrow><mn>1</mn>' +
      '<menclose notation="updiagonalstrike"><mi mathvariant="normal"' +
      ' class="MathML-Unit">hr</mi></menclose>' +
      '</mrow><mrow><mn>60</mn><mi mathvariant="normal"' +
      ' class="MathML-Unit">min</mi></mrow></mfrac><mo>=</mo>' +
      '<mfrac><mrow><mn>5,280</mn><mi mathvariant="normal"' +
      ' class="MathML-Unit">ft</mi>' +
      '</mrow><mi mathvariant="normal" class="MathML-Unit">min</mi>' +
      '</mfrac></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


// That should be negative 2!
/**
 * Testing Rule 13.1, Example 2.
 */
sre.MathspeakSpanishTest.prototype.testSample_13_1_2 = function() {
  var mml = '<mrow><mn>1</mn><mi mathvariant="normal"' +
      ' class="MathML-Unit">J</mi><mo>=</mo><mn>1</mn>' +
      '<mi mathvariant="normal" class="MathML-Unit">kg</mi><mo>·</mo><msup>' +
      '<mi mathvariant="normal" class="MathML-Unit">m</mi><mn>2</mn></msup>' +
      '<mo>·</mo><msup><mi mathvariant="normal" class="MathML-Unit">s</mi>' +
      '<mrow><mo>-</mo><mn>2</mn></mrow>' +
      '</msup></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 13.1, Example 3.
 */
sre.MathspeakSpanishTest.prototype.testSample_13_1_3 = function() {
  var mml = '<mrow><mi>m</mi><mi mathvariant="normal"' +
      ' class="MathML-Unit">m</mi></mrow><mo>=</mo><mn>100</mn>' +
      '<mi>m</mi><mi mathvariant="normal" class="MathML-Unit">cm</mi>' +
      '<mo>=</mo><mrow><mfrac><mi>m</mi><mn>1,000</mn></mfrac>' +
      '<mi mathvariant="normal" class="MathML-Unit">km</mi></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 13.1, Example 4.
 */
sre.MathspeakSpanishTest.prototype.testSample_13_1_4 = function() {
  var mml = '<mrow><mn>1</mn><mi mathvariant="normal"' +
      ' class="MathML-Unit">mi</mi></mrow><mo>≈</mo>' +
      '<mrow><mn>1.6</mn><mi mathvariant="normal"' +
      ' class="MathML-Unit">km</mi></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 13.1, Example 5.
 */
sre.MathspeakSpanishTest.prototype.testSample_13_1_5 = function() {
  var mml = '<mrow><mn>1</mn><mi mathvariant="normal"' +
      ' class="MathML-Unit">in</mi><mo>=</mo><mn>2.54</mn>' +
      '<mi mathvariant="normal" class="MathML-Unit">cm</mi></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 14.1, Example 1.
 */
sre.MathspeakSpanishTest.prototype.testSample_14_1_1 = function() {
  var mml = '<mtable><mtr><mtd><msub><mi>H</mi><mn>2</mn></msub></mtd><mtd>' +
      '<mo>+</mo></mtd><mtd><msub><mi>F</mi><mn>2</mn></msub></mtd><mtd>' +
      '<mo>→</mo></mtd><mtd><mrow><mn>2</mn><mi>H</mi><mi>F</mi></mrow>' +
      '</mtd></mtr><mtr><mtd><mtext>hydrogen</mtext></mtd><mtd/><mtd>' +
      '<mtext>fluorine</mtext></mtd><mtd/><mtd><mrow>' +
      '<mtext>hydrogen</mtext><mspace width="4.pt"/>' +
      '<mtext>fluoride</mtext></mrow></mtd></mtr></mtable>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 14.3, Example 1.
 */
sre.MathspeakSpanishTest.prototype.testSample_14_3_1 = function() {
  var mml = '<mrow><mi>x</mi><mo>=</mo>' +
      '<mfenced separators="" open="{" close=""><mtable><mtr><mtd><mrow>' +
      '<mi>y</mi><mo>&lt;</mo><mn>0</mn></mrow></mtd><mtd><mn>0</mn></mtd>' +
      '</mtr><mtr><mtd><mrow><mi>y</mi><mo>≥</mo><mn>0</mn></mrow></mtd>' +
      '<mtd><mrow><mn>2</mn><mi>y</mi></mrow></mtd></mtr></mtable>' +
      '</mfenced></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 15.1, Example 1.
 */
sre.MathspeakSpanishTest.prototype.testSample_15_1_1 = function() {
  var mml = '<mfenced open="[" close="]"><mtable><mtr><mtd><mrow><mi>x</mi>' +
      '<mo>+</mo><mi>a</mi></mrow></mtd><mtd><mrow><mi>x</mi><mo>+</mo>' +
      '<mi>b</mi></mrow></mtd><mtd><mrow><mi>x</mi><mo>+</mo><mi>c</mi>' +
      '</mrow></mtd></mtr><mtr><mtd><mrow><mi>y</mi><mo>+</mo><mi>a</mi>' +
      '</mrow></mtd><mtd><mrow><mi>y</mi><mo>+</mo><mi>b</mi></mrow></mtd>' +
      '<mtd><mrow><mi>y</mi><mo>+</mo><mi>c</mi></mrow></mtd></mtr><mtr>' +
      '<mtd><mrow><mi>z</mi><mo>+</mo><mi>a</mi></mrow></mtd><mtd><mrow>' +
      '<mi>z</mi><mo>+</mo><mi>b</mi></mrow></mtd><mtd><mrow><mi>z</mi>' +
      '<mo>+</mo><mi>c</mi></mrow></mtd></mtr></mtable></mfenced>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 15.2, Example 1.
 */
sre.MathspeakSpanishTest.prototype.testSample_15_2_1 = function() {
  var mml = '<mrow><mfenced open="|" close="|"><mtable><mtr><mtd><mrow>' +
      '<mi>a</mi><mo>+</mo><mn>1</mn></mrow></mtd><mtd><mi>b</mi></mtd>' +
      '</mtr><mtr><mtd><mi>c</mi></mtd><mtd><mi>d</mi></mtd></mtr>' +
      '</mtable></mfenced><mo>=</mo><mrow><mo>(</mo><mi>a</mi><mo>+</mo>' +
      '<mn>1</mn><mo>)</mo></mrow><mi>d</mi><mo>-</mo><mi>b</mi><mi>c</mi>' +
      '</mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 15.4, Example 1.
 */
sre.MathspeakSpanishTest.prototype.testSample_15_4_1 = function() {
  var mml = '<mrow><mfenced open="|" close="|"><mtable><mtr><mtd><mi>a</mi>' +
      '</mtd><mtd><mi>b</mi></mtd></mtr><mtr><mtd><mi>c</mi></mtd><mtd>' +
      '<mi>d</mi></mtd></mtr></mtable></mfenced><mo>=</mo><mi>a</mi>' +
      '<mi>d</mi><mo>-</mo><mi>b</mi><mi>c</mi></mrow>';
  this.executeRuleTest(mml, '', 'default');
};


/**
 * Testing Rule 15.6, Example 1.
 */
sre.MathspeakSpanishTest.prototype.testSample_15_6_1 = function() {
  var mml = '<mfenced open="(" close=")"><mtable><mtr><mtd><mi>x</mi></mtd>' +
      '</mtr><mtr><mtd><mi>y</mi></mtd></mtr></mtable></mfenced>';
  this.executeRuleTest(mml, '', 'default');
};
