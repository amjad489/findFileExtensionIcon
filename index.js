module.exports = function(filename) {
    let fileExt = filename.split('.').pop();
    if ((/(txt|out|log)$/i).test(fileExt)){
        return "<i class=\"far fa-file-alt\"></i>";
    }
    else if ((/(gz|zip|bz2|7z|tar|nar|jar|war|ear)$/i).test(fileExt)){
        return "<i class=\"fas fa-file-archive\"></i>";
    }
    else if ((/(json|xml|py|pyc|javac|java|pl|asp|js|html|yml|yaml)$/i).test(fileExt)){
        return "<i class=\"far fa-file-code\"></i>";
    }
    else if ((/(pdf)$/i).test(fileExt)){
        return "<i class=\"far fa-file-pdf\"></i>";
    }
    else if ((/(xls|xlsx)$/i).test(fileExt)){
        return "<i class=\"fas fa-file-excel\"></i>";
    }
    else if ((/(doc|docx)$/i).test(fileExt)){
        return "<i class=\"far fa-file-word\"></i>";
    }
    else if ((/(ppt|pptx)$/i).test(fileExt)){
        return "<i class=\"far fa-file-powerpoint\"></i>";
    }
    else if ((/(gif|jpg|jpeg|tiff|png)$/i).test(fileExt)){
        return "<i class=\"far fa-file-image\"></i>";
    }
    else if ((/(avi|wmv|flv|mpg|mp4|divx)$/i).test(fileExt)){
        return "<i class=\"far fa-file-video\"></i>";
    }
    else if ((/(wav|mp3)$/i).test(fileExt)){
        return "<i class=\"far fa-file-audio\"></i>";
    }
    else {
        return "<i class=\"fas fa-file\"></i>";
    }
};