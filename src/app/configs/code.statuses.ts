const SuccessStatuses = new Map<number, string>();
const WarningStatuses = new Map<number, string>();
const ErrorStatuses = new Map<number, string>();

SuccessStatuses
	.set(200, "OK")
	.set(201, "Created")
	.set(202, "Accepted")
	.set(203, "Non-Authoritative Information")
	.set(204, "No Content")
	.set(205, "Reset Content")
	.set(206, "Partial Content")
	.set(207, "Multi-Status")
	.set(208, "Already Reported")
	.set(226, "IM Used");

WarningStatuses
	.set(400, "Bad Request")
	.set(401, "Unauthorized")
	.set(402, "Payment Required")
	.set(403, "Forbidden")
	.set(404, "Not Found")
	.set(405, "Method Not Allowed")
	.set(406, "Not Acceptable")
	.set(407, "Proxy Authentication Required")
	.set(408, "Request Timeout")
	.set(409, "Conflict")
	.set(410, "Gone")
	.set(411, "Length Required")
	.set(412, "Precondition Failed")
	.set(403, "Non-Authoritative Information")
	.set(413, "Request Entity Too Large")
	.set(414, "Request-URI Too Long")
	.set(415, "Unsupported Media Type")
	.set(416, "Multi-Status")
	.set(417, "Already Reported")
	.set(420, "Enhance Your Calm")
	.set(422, "Unprocessable Entity")
	.set(423, "Locked")
	.set(424, "Failed Dependency")
	.set(426, "Upgrade Required")
	.set(428, "Precondition Required")
	.set(429, "Too Many Requests")
	.set(431, "Request Header Fields Too Large")
	.set(444, "No Response")
	.set(449, "Retry With")
	.set(450, "Bllocked by Windows Parental Controls")
	.set(449, "Client Closed Request")
	.set(451, "Unavailable For Legal Reasons");

ErrorStatuses
	.set(500, "Internal Server Error")
	.set(501, "Not Implemented")
	.set(502, "Bad Gateway")
	.set(503, "Service Unavailable")
	.set(504, "Gateway Timeout")
	.set(505, "HTTP Version Not Supported")
	.set(506, "Variant Also Negotiates")
	.set(507, "Insufficient Storage")
	.set(508, "Loop Detected")
	.set(510, "Not Extended")
	.set(511, "Network Authentication Required")
	.set(598, "Network Read Timeout Error")
	.set(599, "Network Connect Timeout Error");

export { SuccessStatuses, WarningStatuses, ErrorStatuses };
