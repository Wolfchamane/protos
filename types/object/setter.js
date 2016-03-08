/**
 * Object.prototype.set
 * ------------------------------------------------------------------------------------------
 * Sets a new property and its value in an object.
 *
 * Samples:
 *      -   {object}.set('property', 'value')
 *      -   {object}.set('innerObject.property', 'value')
 *
 * @author  Arturo Martinez 'Wolfchamane'
 * @version 1.0.00
 *
 * @params  property {String} To set into object.
 * @params  value    {Object} To set as property value.
 */
Object.prototype.set = function(property, value)
{
    if (property && (value !== undefined))
    {
        var ref = property;
        if (ref.lastIndexOf('.') !== -1)
        {
            property = property.split('.');
            ref = property.shift();
            ref = this[ref];
            ref.set.apply(ref, [property.join('.'), value]);
        }
        else
        {
            this[ref] = value;
        }
    }
    else
    {
        throw 'Object.set() requires {property} and {value} params';
    }
};