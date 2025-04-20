export function convertToObject(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
  
    if (obj instanceof Date) {
      return obj.toISOString();
    }
  
    if (obj instanceof Buffer) {
      return obj.toString('base64');
    }
  
    if (Array.isArray(obj)) {
      return obj.map(item => convertToObject(item)); // Recursively handle arrays
    }
  
    if (typeof obj.toObject === 'function') {
      obj = obj.toObject();
    }
  
    const newObj = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        if (obj[key]?._id) {
          newObj[key] = obj[key]._id.toString();
        } else if (obj[key]?.toJSON && obj[key]?.toString) {
          newObj[key] = obj[key].toString();
        } else {
          newObj[key] = convertToObject(obj[key]); // Recursive call for nested objects
        }
      }
    }
    return newObj;
  }