<?php

$cacheLocation = getenv('cache_location') !== false ? getenv('cache_location') : __DIR__.'/cache';
$daemonAddress = getenv('daemon_address') !== false ? getenv('daemon_address') : '127.0.0.1';
$rpcPort = getenv('daemon_rpc_port') !== false ? (int)getenv('daemon_rpc_port') : 11181;
$coinSymbol = 'aeon';