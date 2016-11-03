function radToDeg( iAngle){
  return ( iAngle * 180)/Math.PI;
}



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
  multi( iMult){
    this.x *= iMult;
    this.y *= iMult;

    return this;
  }

  /**
   *
   */
  heading(){
    var iAngleR = Math.atan2( this.y, this.x);
    return radToDeg( iAngleR);
  }


  /**
   *
   */
  rotate( iAngle) {

    var iHeading = this.heading() + iAngle,
        iMag     = this.mag();

    this.x = Math.cos( iHeading) * iMag;
    this.y = Math.sin( iHeading) * iMag;

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
