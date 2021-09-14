The DGT Electronic Chess Board is capable of recording any games played on it into internal memory.  Each piece emits a 
faint RFID signal and the board contains a mesh sensor that detects the presence of any pieces placed on top of it.  The piece needs to be directly 
on top of a square for the move to register.  In rare cases the board can register ghost pieces and from radio interference.  The data on the board can be read 
by a chess program like Fritz or can be simply written to disk for archiving or future analysis.  DGT releases a few programs along with the board
 that are supposed to make connecting the board to your computer easy.  RabbitQueen is helpful for dumping the board memory (readonly) and configuring 
internal parameters.  RabbitConnect and RabbitPlugin allow you to connect the board to chess programs like Fritz.  

Of the programs DGT provides, LiveChess is the most interesting.  It is used capture the live games played by multiple DGT boards 
and can write them to disk or stream them on the LiveChess cloud.  The file written to disk will update as the games progresses.  It
can be read by online chess services like Lichess or by anyone who wants to parse this data.  I imagine there are folks out there who 
read the pgn as is and can reconstruct the game in their head like Beth Harmon in The Queen's Gambit.

Thanks to the number of chess libraries on Github it is easy to parse a pgn file.  Python-chess seems like the most feature rich open source project. It 
has a ton of contributors and integrates with Polyglot, Syzeyg, and Stockfish easily.  It also has methods for traversing variations of the Pgn as a tree 
which would be useful for game analysis. If you prefer javascript, chess.js a great choice too.  It has everything needed to do fun things with Pgn files 
and that's what we'll use in the code below.