Do you like chess?  I'm not any good at it, but I do enjoy watching a good chess game.
Nowadays, it's easy to find good chess online.  Big tournaments are streamed and include ESPN level
commentary.  Over the summer I faithfully tracked the games of the [Grand Chess Tour](https://grandchesstour.org/)
and was not disappointed.  Watching all of this good chess got me thinking about the data behind chess and
how technology has made chess more accessible, especially for beginners like myself.

Electronic chess boards stores the moves of a game into their internal memory.  The particular board I was able to get
my hands on, the DGT Electronic Chess Board, can write these moves to file on disk in about 3 seconds after the move occurs.
Each piece emits a faint RFID signal and the board contains a mesh sensor that detects the presence of any pieces
placed on top of it.  The piece needs to be directly on top of a square for the move to register. The details how 
the board stores the moves and reconstructs the game before writing it to file are complicated, but from what I can 
tell as long as valid moves are played it works reliably.

DGT has released a few programs along with the board that include drivers, debugging software and software to manage the output of
one or more boards.  [RabbitQueen](https://digitalgametechnology.com/faq/software-downloads/rabbitqueen-software) is 
helpful for dumping the board memory (readonly) and configuring internal parameters.  [RabbitPlugin](https://digitalgametechnology.com/faq/software-downloads/rabbitplugin-software)
and RabbitConnect are the drivers for the board tell the OS how to handle the input from the board.

Of the programs DGT provides, [LiveChess](http://www.livechesscloud.com/software/) is the most interesting.  It is
used capture the live games played by multiple DGT boards and can write them to disk or stream them on the LiveChess
cloud.  The file written to disk will update as the games progresses.  This output can be read by online chess services like
Lichess or by anyone who wants to parse this data.  I imagine there are folks out there who read the pgn as is and
can reconstruct the game in their head like Beth Harmon in The Queen's Gambit.

Pgn from  [Adolf Anderssen vs Lionel Kieseritzky "The Immortal Game"](https://www.chessgames.com/perl/chessgame?gid=1018910)

    [Event "Casual game"]
    [Site "London ENG"]
    [Date "1851.06.21"]
    [EventDate "?"]
    [Round "?"]
    [Result "1-0"]
    [White "Adolf Anderssen"]
    [Black "Lionel Adalbert Bagration Felix Kieseritzky"]
    [ECO "C33"]
    [WhiteElo "?"]
    [BlackElo "?"]
    [PlyCount "45"]
    
    1.e4 e5 2.f4 exf4 3.Bc4 Qh4+ 4.Kf1 b5 5.Bxb5 Nf6 6.Nf3 Qh6
    7.d3 Nh5 8.Nh4 Qg5 9.Nf5 c6 10.g4 Nf6 11.Rg1 cxb5 12.h4 Qg6
    13.h5 Qg5 14.Qf3 Ng8 15.Bxf4 Qf6 16.Nc3 Bc5 17.Nd5 Qxb2 18.Bd6
    Bxg1 {It is from this move that Black's defeat stems. Wilhelm
    Steinitz suggested in 1879 that a better move would be
    18... Qxa1+; likely moves to follow are 19. Ke2 Qb2 20. Kd2
    Bxg1.} 19. e5 Qxa1+ 20. Ke2 Na6 21.Nxg7+ Kd8 22.Qf6+ Nxf6
    23.Be7# 1-0


Thanks to the number of chess libraries on Github it is easy to parse a pgn file.  Python-chess seems like the most feature rich open source project. It 
has a ton of contributors and integrates with Polyglot, Syzeyg, and Stockfish easily.  It also has methods for traversing variations of the Pgn as a tree 
which would be useful for game analysis. If you prefer javascript, chess.js a great choice too.  It has everything needed to do fun things with Pgn files 
and that's what we'll use in the code below.