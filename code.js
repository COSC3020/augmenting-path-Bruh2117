function augmentingPath(graph, start, end, path = []) 
{
    path.push(start);

    if (start == end) 
    {
        return path;
    }

    for (var node in graph[start]) 
    {
        if (path.includes(node) == false) 
        {
            var augPath = augmentingPath(graph, node, end, path);
        
            if (augPath.length > 0) 
            {
                return augPath; 
            }
            else 
            {
                path = []; 
                path.push(start);
            }
        }
    }

    return [];
}