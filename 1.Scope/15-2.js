function lookupRecord(searchStr) {
    try {
        var id = getRecord( searchStr );
    }
    catch (err) {
        var id = -1;
    }

    return id;
}