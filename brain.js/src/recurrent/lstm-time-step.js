import Matrix from './matrix';
import LSTM from './lstm';
import RnnTimeStep from './rnn-time-step';

export default class LSTMTimeStep extends RnnTimeStep {
  getModel(hiddenSize, prevSize) {
    return LSTM.prototype.getModel.call(this, hiddenSize, prevSize);
  }

  /**
   *
   * @param {Equation} equation
   * @param {Matrix} inputMatrix
   * @param {Matrix} previousResult
   * @param {Object} hiddenLayer
   * @returns {Matrix}
   */
  getEquation(equation, inputMatrix, previousResult, hiddenLayer) {
    return LSTM.prototype.getEquation.call(this, equation, inputMatrix, previousResult, hiddenLayer);
  }
}
