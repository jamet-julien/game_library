

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
