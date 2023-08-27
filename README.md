# Difference between UDP and TCP

## `TCP`(Transmission Control Protocol) and `UDP` (User Datagram Protocol) are both transport layer protocols that are used to transmit data over a network, but they operate in very different ways and serve different use cases. Here's a comparison:

# Connection:

## TCP: 
Connection-oriented, which means a connection is established between the sender and receiver before any data can be sent. 

## UDP: 

Connectionless, meaning data can be sent without establishing a connection. No handshake process is required.

# Data Integrity and Reliability:

## TCP:

Provides reliability. It ensures that all packets reach the destination in the correct order. If any packets are lost during transmission, TCP will retransmit those packets.

## UDP:

Doesn't guarantee that all packets will reach the destination or that they'll arrive in the correct order. It's up to the application using UDP to handle lost packets or ordering issues if necessary.

# Speed:

## TCP: 

Generally slower than UDP because of its error-checking and acknowledgment features, which ensure that data is received correctly and in order.

## UDP:

Faster than TCP because it lacks the error-checking and retransmission features.

# Use Cases:

## TCP: 

Used when the reliability of the data transmission is crucial, such as in web browsing, file transfers, and email.

## UDP: 

Used when speed is more crucial than reliability or when the application layer handles error-check

