/*
This file is part of WebNES.

WebNES is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

WebNES is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with WebNES.  If not, see <http://www.gnu.org/licenses/>.
*/

this.Nes = this.Nes || {};

"use strict";


var mapper0 = function() {
};

mapper0.prototype = Object.create( Nes.basemapper.prototype );

mapper0.prototype.reset = function() {

	if ( this.get32kPrgBankCount() >= 1 )
	{
		this.switch32kPrgBank( 0 );
	}
	else if ( this.get16kPrgBankCount() == 1 )
	{
		this.switch16kPrgBank( 0, true );
		this.switch16kPrgBank( 0, false );
	}

	if ( this.get1kChrBankCount() === 0 )
	{
		this.useVRAM();
	}
	else
	{
		this.switch8kChrBank( 0 );
	}

	this.mainboard.ppu.changeMirroringMethod( this.mirroringMethod );
};

Nes.mappers[0] = mapper0;

