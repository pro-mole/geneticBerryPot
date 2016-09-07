//Genetics module

//Genome specification(gene labels and descriptors)
var Genome = {
    //Fruit Genes
    ReXC: 'Red/Cyan Pigmentation',
    GXMa: 'Green/Magenta Pigmentation',
    BlXY: 'Blue/Yellow Pigmentation',
    Opig: 'Overpigmentation',
    
    FlAc: 'Acid Flavor',
    FlBt: 'Bitter Flavor',
    FlSw: 'Sweet Flavor',
    FlSl: 'Salty Flavor',
    
    BSz0: 'Fruit Size',
    BSg1: 'Segmentation I',
    BSg2: 'Segmentation II',
    BSg3: 'Segmentation III',
    
    //Trunk Genes
    //Leaf Genes
    
    //Development Genes
    GwSp: 'Growth Speed',
    MtEp: 'Maturity Epoch',
    MxLf: 'Maximum Lifetime',
    
    //Adaptability Genes
    GSt1: 'Genetic Stability I',
    GSt2: 'Genetic Stability II',
    GSt3: 'Genetic Stability III',
    GSt4: 'Genetic Stability IV',
};

//Create random genome, just to start working here
function genome_random()
{
    var G = {};
    for (var gene in Genome) G[gene] = unrandom();
    
    return G;
}

//Generate random genome based on parent genome G, with random mutations
// Mutation parameters: P = statistic percentage of genes mutated; V = variance of mutations
function genome_reproduce(G, mut_p=0.5, mut_v=0.5)
{
    
}

//Decodify genotype G into phenotype
// It's a one-way operation(phenotype cannot be codified back)
function genome_phenotype(G)
{
    
}

//Visualize Genome in graphical form
function genome_visualize(G)
{
    var div = document.createElement("div");
    
    for (var gene in G)
    {
        var item = document.createElement("div");
        item.style.display = "block";
        
        var title = genome_title.cloneNode(true);
        title.innerHTML = gene + ":";
        
        var geneChart = document.createElement("div");
        geneChart.style.display = "inline-block";
        geneChart.style.position = "relative";
        geneChart.style.background = "#c0c0c0";
        geneChart.style.width = "50px";
        geneChart.innerHTML = "&nbsp";
        
        var geneMarker = document.createElement("div");
        geneMarker.style.display = "block";
        geneMarker.style.background = "#101010";
        geneMarker.style.position = "absolute";
        geneMarker.style.right = (100 - (50 + G[gene]*50) - 5)+"%";
        geneMarker.style.left = (50 + G[gene]*50 - 5)+"%";
        geneMarker.style.top = "20%";
        geneMarker.style.bottom = "20%";
        geneMarker.innerHTML = "&nbsp";
        
        geneChart.appendChild(geneMarker);
        item.appendChild(title);
        item.appendChild(geneChart);
        div.appendChild(item);
    }
    
    div.style.display = "inline-block";
    div.style.padding = "2px";
    div.style.border = "thin solid #b0b0b0";
    
    return div;
}