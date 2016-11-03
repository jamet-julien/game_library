

class Vector{

  /**
   *
   */
  constructor( iX, iY) {
      this.x = iX || 0;
      this.y = iY || 0;
  }

  /**
   *
   */
  add( oVector){
      this.x += oVector.x;
      this.y += oVector.y;

      return this;
  }

  /**
   *
   */
  sub( oVector){
      this.x -= oVector.x;
      this.y -= oVector.y;

      return this;
  }

  /**
   *
   */
  getAngle( oVector){

    var hypCur       = this.mag(),
        hypVec       = oVector.mag(),
        proScallaire = ( this.x * oVector.x) + ( this.y * oVector.y),
        cos          = proScallaire / ( hypCur * hypVec),
        angle        = Math.acos(  cos),
        angleDeg     = ( angle * 180)/Math.PI;

    return angleDeg;
  }

  /**
   *
   */
  multi( iMult){
    this.x *= iMult;
    this.y *= iMult;

    return this;
  }

  /**
   *
   */
  div( iMult){
    this.x /= iMult;
    this.y /= iMult;

    return this;
  }

  /**
   *
   */
  setMag( iMag){
    return this.normalize().multi( iMag);
  }

  /**
   *
   */
  mag(){
    return Math.sqrt( ( this.x*this.x) + ( this.y*this.y));
  }

  /**
   *
   **/
  limit( iMag){
    var iMagCurrent = this.mag();

    if( iMagCurrent > iMag){
        this.setMag( iMag);
    }

    return this

  }

  /**
   *
   */
  normalize(){
      return ( this.mag() === 0 )? this : this.div( this.mag());
  }


  /**
   *
   */
  copy(){
    return new Vector( this.x, this.y);
  }


}


export default Vector;
