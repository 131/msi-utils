
Source
# https://installpac.wordpress.com/2008/03/31/packed-guids-darwin-descriptors-and-windows-installer-reference-counting/
Original Product Code:


{12345678-ABCD-WXYZ-1234-ABCDEFGHIJKL}

String manipulation steps:
Action                          Original GUID section              Packed GUID Section

Reverse first 8 characters     12345678                             87654321
Reverse next 4 characters      ABCD                                 DCBA
Reverse next 4 characters      WXYZ                                 ZYXW
Reverse next 2 characters      12                                   21
Reverse next 2 characters      34                                   43
Reverse next 2 characters      AB                                   BA
Reverse next 2 characters      CD                                   DC
Reverse next 2 characters      EF                                   FE
Reverse next 2 characters      GH                                   HG
Reverse next 2 characters      IJ                                   JI
Reverse next 2 characters      KL                                   LK

Recombine characters without any curly braces or hyphens to see your packed GUID:
87654321DCBAZYXW2134BADCFEHGJILK

In summary: 