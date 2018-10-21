//SQL Inner Join Function (see Readme.md)
export default (xs, ys, primary, foreign, sel) => {
    const ix = xs.reduce((ix, row) => // loop through m items
        ix.set(row[primary], row),    // populate index for primary table
    new Map);                         // create an index for primary table

    return ys.map(row =>              // loop through n items
        sel(ix.get(row[foreign]),     // get corresponding row from primary
        row));                        // select only the columns you need
};