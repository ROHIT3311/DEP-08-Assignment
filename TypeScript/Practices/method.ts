function logMethod(
  target: any,
  propertyKey: string, // ✅ use lowercase 'string'
  descriptor: PropertyDescriptor
) {
  console.log("Hi from logMethod", propertyKey);
}
