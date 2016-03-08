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
 * @version 1.0.01
 *
 * @params  property {String} to be retrieved
 * @returns {Object|undefined}
 */
Object.prototype.get = function(property)
{
    var value,
        ref = property;
    if (ref)
    {
        if ((typeof ref === 'string') && (ref.lastIndexOf('.') !== -1))
        {
            var aux = property.split('.');
            ref = aux.shift();
            ref = this[ref];
            if ('object' === typeof ref)
            {
                value = ref.get.apply(ref, [aux.join('.')]);
            }
        }
        else if (!this.hasOwnProperty(ref))
        {
            ref = this.__proto__;
            value = ref.get.apply(ref, [property]);
        }
        else if (this.hasOwnProperty(ref))
        {
            value = this[property];
        }
    }
    return value;
};