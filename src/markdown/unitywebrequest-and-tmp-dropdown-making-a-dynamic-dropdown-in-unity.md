When putting together a GUI in Unity you may need a dropdown and you don't know the value of the options 
until the menu is used.  For example if the values need to come from a web request you may not want to make that request until 
the menu is clicked.  To do this we'll need to use two classes built into Unity, UnityWebRequest and JsonUtility.   UnityWebRequest 
is used to make the network request and JsonUtility is used to serialize the response into a class that exposes the values from the response.


* <a href="https://docs.unity3d.com/Manual/JSONSerialization.html">https://docs.unity3d.com/Manual/JSONSerialization.html</a>
* <a href="http://jsonviewer.stack.hu/#http://lichess.org/api/team/all">http://jsonviewer.stack.hu/#http://lichess.org/api/team/all</a>