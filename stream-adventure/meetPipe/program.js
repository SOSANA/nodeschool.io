/*
 * Stream API
 * 
 * Read up on Class:Stream.Readable and the Stream API at the following: 
 * https://nodejs.org/api/stream.html#stream_class_stream_readable 
 * 
 * The Readable stream interface is the abstraction for a source of data that you are reading 
 * from. In other words, data comes out of a Readable stream. 
 * 
 * A Readable stream will not start emitting data until you indicate that you are ready to receive it.
 * 
 * Readable streams have two "modes": a flowing mode and a paused mode. When in flowing mode, data is 
 * read from the underlying system and provided to your program as fast as possible. In paused mode, 
 * you must explicitly call stream.read() to get chunks of data out. Streams start out in paused mode.
 * 
 * Note: If no data event handlers are attached, and there are no pipe() destinations, and the stream 
 * is switched into flowing mode, then data will be lost.
 * You can switch to flowing mode by doing any of the following:
 *      Adding a 'data' event handler to listen for data.
 *      Calling the resume() method to explicitly open the flow.
 *      Calling the pipe() method to send the data to a Writable.
 * 
 * You can switch back to paused mode by doing either of the following:
 *      If there are no pipe destinations, by calling the pause() method.
 *      If there are pipe destinations, by removing any 'data' event handlers, and removing all pipe 
 *      destinations by calling the unpipe() method.
 * 
 * Note that, for backwards compatibility reasons, removing 'data' event handlers will not automatically 
 * pause the stream. Also, if there are piped destinations, then calling pause() will not guarantee that 
 * the stream will remain paused once those destinations drain and ask for more data.
 * 
 * Examples of readable streams include:
 *      http responses, on the client
 *      http requests, on the server
 *      fs read streams
 *      zlib streams
 *      crypto streams
 *      tcp sockets
 *      child process stdout and stderr
 *      process.stdin
 * 
*/

var fs = require('fs');

var file = process.argv[2];
fs.createReadStream(file).pipe(process.stdout);

