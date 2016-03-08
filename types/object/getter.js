/**
 * Object.prototype.get
 * ------------------------------------------------------------------------------------------
 * Returns a property value of an object.
 * Can go as deep as properties exist on base object.
 *
 * Samples:
 *      -   {object}.get('property')
 *      -   {object}.get('innerObject.property')
 *
 * @author  Arturo Martinez 'Wolfchamane'
 * @version 1.0.00
 *
 * @params  property {String} to be retrieved
 * @returns {Object|undefined}
 */
Object.prototype.get = function(property)
{
    var value,
        ref = property;
    if (ref.lastIndexOf('.') !== -1)
    {
        property = property.split('.');
        ref = property.shift();
        ref = this[ref];
        if ('object' === typeof ref)
        {
            value = ref.get.apply(ref, [property.join('.')]);
        }
    }
    else if (!this.hasOwnProperty(property))
    {
        ref = this.__proto__;
        value = ref.get.apply(ref, [property]);
    }
    else if (this.hasOwnProperty(property))
    {
        value = this[property];
    }
    return value;
};