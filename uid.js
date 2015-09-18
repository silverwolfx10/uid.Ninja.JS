/**
 * $uid
 *
 * Retorna um identificacao unico
 *
 * @module $uid
 * @author Cleber de Moraes Goncalves <cleber.programmer>
 * @example
 *
 *        $uid();
 *
 */
this.Ninja.module('$uid', [], function () {

  /**
   * Retorna um identificador unico
   *
   * @public
   * @method uid
   * @return {String} Identificacao unica
   * @example
   *
   *        $uid();
   *
   */
  function uid() {
    return parseInt(Date.now() * Math.random()).toString(36);
  }

  /**
   * Revelacao do modulo $uid, encapsulando a visibilidade das funcoes
   * privadas
   */
  return uid;

});
