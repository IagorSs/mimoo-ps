export default interface HttpResponse {
  statusCode: number
  body?: string
  headers?: Record<string, string>
};
