var PROTO_PATH = '../grpc-client/proto/covi.proto';

var parseArgs = require('minimist');
var grpc = require('@grpc/grpc-js');
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });
var covi_proto = grpc.loadPackageDefinition(packageDefinition).covi;

var argv = parseArgs(process.argv.slice(2), {
  string: 'target'
});
var target;
if (argv.target) {
  target = argv.target;
} else {
  target = 'localhost:50051';
}
var client = new covi_proto.Casos(target,grpc.credentials.createInsecure());

module.exports = client;
