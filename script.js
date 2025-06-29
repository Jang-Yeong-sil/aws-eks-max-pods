// AWS EC2 instance networking information
const instanceData = {
    // General Purpose - M5 series
    'm5.large': { eni: 3, ipPerEni: 10 },
    'm5.xlarge': { eni: 4, ipPerEni: 15 },
    'm5.2xlarge': { eni: 4, ipPerEni: 15 },
    'm5.4xlarge': { eni: 8, ipPerEni: 30 },
    'm5.8xlarge': { eni: 8, ipPerEni: 30 },
    'm5.12xlarge': { eni: 8, ipPerEni: 30 },
    'm5.16xlarge': { eni: 15, ipPerEni: 50 },
    'm5.24xlarge': { eni: 15, ipPerEni: 50 },
    'm5.metal': { eni: 15, ipPerEni: 50 },
    
    // M5a series
    'm5a.large': { eni: 3, ipPerEni: 10 },
    'm5a.xlarge': { eni: 4, ipPerEni: 15 },
    'm5a.2xlarge': { eni: 4, ipPerEni: 15 },
    'm5a.4xlarge': { eni: 8, ipPerEni: 30 },
    'm5a.8xlarge': { eni: 8, ipPerEni: 30 },
    'm5a.12xlarge': { eni: 8, ipPerEni: 30 },
    'm5a.16xlarge': { eni: 15, ipPerEni: 50 },
    'm5a.24xlarge': { eni: 15, ipPerEni: 50 },
    
    // M5ad series
    'm5ad.large': { eni: 3, ipPerEni: 10 },
    'm5ad.xlarge': { eni: 4, ipPerEni: 15 },
    'm5ad.2xlarge': { eni: 4, ipPerEni: 15 },
    'm5ad.4xlarge': { eni: 8, ipPerEni: 30 },
    'm5ad.8xlarge': { eni: 8, ipPerEni: 30 },
    'm5ad.12xlarge': { eni: 8, ipPerEni: 30 },
    'm5ad.16xlarge': { eni: 15, ipPerEni: 50 },
    'm5ad.24xlarge': { eni: 15, ipPerEni: 50 },
    
    // M5d series
    'm5d.large': { eni: 3, ipPerEni: 10 },
    'm5d.xlarge': { eni: 4, ipPerEni: 15 },
    'm5d.2xlarge': { eni: 4, ipPerEni: 15 },
    'm5d.4xlarge': { eni: 8, ipPerEni: 30 },
    'm5d.8xlarge': { eni: 8, ipPerEni: 30 },
    'm5d.12xlarge': { eni: 8, ipPerEni: 30 },
    'm5d.16xlarge': { eni: 15, ipPerEni: 50 },
    'm5d.24xlarge': { eni: 15, ipPerEni: 50 },
    'm5d.metal': { eni: 15, ipPerEni: 50 },
    
    // M5dn series
    'm5dn.large': { eni: 3, ipPerEni: 10 },
    'm5dn.xlarge': { eni: 4, ipPerEni: 15 },
    'm5dn.2xlarge': { eni: 4, ipPerEni: 15 },
    'm5dn.4xlarge': { eni: 8, ipPerEni: 30 },
    'm5dn.8xlarge': { eni: 8, ipPerEni: 30 },
    'm5dn.12xlarge': { eni: 8, ipPerEni: 30 },
    'm5dn.16xlarge': { eni: 15, ipPerEni: 50 },
    'm5dn.24xlarge': { eni: 15, ipPerEni: 50 },
    'm5dn.metal': { eni: 15, ipPerEni: 50 },
    
    // M5n series
    'm5n.large': { eni: 3, ipPerEni: 10 },
    'm5n.xlarge': { eni: 4, ipPerEni: 15 },
    'm5n.2xlarge': { eni: 4, ipPerEni: 15 },
    'm5n.4xlarge': { eni: 8, ipPerEni: 30 },
    'm5n.8xlarge': { eni: 8, ipPerEni: 30 },
    'm5n.12xlarge': { eni: 8, ipPerEni: 30 },
    'm5n.16xlarge': { eni: 15, ipPerEni: 50 },
    'm5n.24xlarge': { eni: 15, ipPerEni: 50 },
    'm5n.metal': { eni: 15, ipPerEni: 50 },
    
    // M5zn series
    'm5zn.large': { eni: 3, ipPerEni: 10 },
    'm5zn.xlarge': { eni: 4, ipPerEni: 15 },
    'm5zn.2xlarge': { eni: 4, ipPerEni: 15 },
    'm5zn.3xlarge': { eni: 8, ipPerEni: 30 },
    'm5zn.6xlarge': { eni: 8, ipPerEni: 30 },
    'm5zn.12xlarge': { eni: 15, ipPerEni: 50 },
    'm5zn.metal': { eni: 15, ipPerEni: 50 },
    
    // M6a series
    'm6a.large': { eni: 3, ipPerEni: 10 },
    'm6a.xlarge': { eni: 4, ipPerEni: 15 },
    'm6a.2xlarge': { eni: 4, ipPerEni: 15 },
    'm6a.4xlarge': { eni: 8, ipPerEni: 30 },
    'm6a.8xlarge': { eni: 8, ipPerEni: 30 },
    'm6a.12xlarge': { eni: 8, ipPerEni: 30 },
    'm6a.16xlarge': { eni: 15, ipPerEni: 50 },
    'm6a.24xlarge': { eni: 15, ipPerEni: 50 },
    'm6a.32xlarge': { eni: 15, ipPerEni: 50 },
    'm6a.48xlarge': { eni: 15, ipPerEni: 50 },
    'm6a.metal': { eni: 15, ipPerEni: 50 },
    
    // M6g series
    'm6g.medium': { eni: 2, ipPerEni: 4 },
    'm6g.large': { eni: 3, ipPerEni: 10 },
    'm6g.xlarge': { eni: 4, ipPerEni: 15 },
    'm6g.2xlarge': { eni: 4, ipPerEni: 15 },
    'm6g.4xlarge': { eni: 8, ipPerEni: 30 },
    'm6g.8xlarge': { eni: 8, ipPerEni: 30 },
    'm6g.12xlarge': { eni: 8, ipPerEni: 30 },
    'm6g.16xlarge': { eni: 15, ipPerEni: 50 },
    'm6g.metal': { eni: 15, ipPerEni: 50 },
    
    // M6gd series
    'm6gd.medium': { eni: 2, ipPerEni: 4 },
    'm6gd.large': { eni: 3, ipPerEni: 10 },
    'm6gd.xlarge': { eni: 4, ipPerEni: 15 },
    'm6gd.2xlarge': { eni: 4, ipPerEni: 15 },
    'm6gd.4xlarge': { eni: 8, ipPerEni: 30 },
    'm6gd.8xlarge': { eni: 8, ipPerEni: 30 },
    'm6gd.12xlarge': { eni: 8, ipPerEni: 30 },
    'm6gd.16xlarge': { eni: 15, ipPerEni: 50 },
    'm6gd.metal': { eni: 15, ipPerEni: 50 },
    
    // M6i series
    'm6i.large': { eni: 3, ipPerEni: 10 },
    'm6i.xlarge': { eni: 4, ipPerEni: 15 },
    'm6i.2xlarge': { eni: 4, ipPerEni: 15 },
    'm6i.4xlarge': { eni: 8, ipPerEni: 30 },
    'm6i.8xlarge': { eni: 8, ipPerEni: 30 },
    'm6i.12xlarge': { eni: 8, ipPerEni: 30 },
    'm6i.16xlarge': { eni: 15, ipPerEni: 50 },
    'm6i.24xlarge': { eni: 15, ipPerEni: 50 },
    'm6i.32xlarge': { eni: 15, ipPerEni: 50 },
    'm6i.metal': { eni: 15, ipPerEni: 50 },
    
    // M6id series
    'm6id.large': { eni: 3, ipPerEni: 10 },
    'm6id.xlarge': { eni: 4, ipPerEni: 15 },
    'm6id.2xlarge': { eni: 4, ipPerEni: 15 },
    'm6id.4xlarge': { eni: 8, ipPerEni: 30 },
    'm6id.8xlarge': { eni: 8, ipPerEni: 30 },
    'm6id.12xlarge': { eni: 8, ipPerEni: 30 },
    'm6id.16xlarge': { eni: 15, ipPerEni: 50 },
    'm6id.24xlarge': { eni: 15, ipPerEni: 50 },
    'm6id.32xlarge': { eni: 15, ipPerEni: 50 },
    'm6id.metal': { eni: 15, ipPerEni: 50 },
    
    // M6idn series
    'm6idn.large': { eni: 3, ipPerEni: 10 },
    'm6idn.xlarge': { eni: 4, ipPerEni: 15 },
    'm6idn.2xlarge': { eni: 4, ipPerEni: 15 },
    'm6idn.4xlarge': { eni: 8, ipPerEni: 30 },
    'm6idn.8xlarge': { eni: 8, ipPerEni: 30 },
    'm6idn.12xlarge': { eni: 8, ipPerEni: 30 },
    'm6idn.16xlarge': { eni: 15, ipPerEni: 50 },
    'm6idn.24xlarge': { eni: 15, ipPerEni: 50 },
    'm6idn.32xlarge': { eni: 16, ipPerEni: 50 },
    'm6idn.metal': { eni: 16, ipPerEni: 50 },
    
    // M6in series
    'm6in.large': { eni: 3, ipPerEni: 10 },
    'm6in.xlarge': { eni: 4, ipPerEni: 15 },
    'm6in.2xlarge': { eni: 4, ipPerEni: 15 },
    'm6in.4xlarge': { eni: 8, ipPerEni: 30 },
    'm6in.8xlarge': { eni: 8, ipPerEni: 30 },
    'm6in.12xlarge': { eni: 8, ipPerEni: 30 },
    'm6in.16xlarge': { eni: 15, ipPerEni: 50 },
    'm6in.24xlarge': { eni: 15, ipPerEni: 50 },
    'm6in.32xlarge': { eni: 16, ipPerEni: 50 },
    'm6in.metal': { eni: 16, ipPerEni: 50 },
    
    // M7a series
    'm7a.medium': { eni: 2, ipPerEni: 4 },
    'm7a.large': { eni: 3, ipPerEni: 10 },
    'm7a.xlarge': { eni: 4, ipPerEni: 15 },
    'm7a.2xlarge': { eni: 4, ipPerEni: 15 },
    'm7a.4xlarge': { eni: 8, ipPerEni: 30 },
    'm7a.8xlarge': { eni: 8, ipPerEni: 30 },
    'm7a.12xlarge': { eni: 8, ipPerEni: 30 },
    'm7a.16xlarge': { eni: 15, ipPerEni: 50 },
    'm7a.24xlarge': { eni: 15, ipPerEni: 50 },
    'm7a.32xlarge': { eni: 15, ipPerEni: 50 },
    'm7a.48xlarge': { eni: 15, ipPerEni: 50 },
    'm7a.metal-48xl': { eni: 15, ipPerEni: 50 },
    
    // M7g series
    'm7g.medium': { eni: 2, ipPerEni: 4 },
    'm7g.large': { eni: 3, ipPerEni: 10 },
    'm7g.xlarge': { eni: 4, ipPerEni: 15 },
    'm7g.2xlarge': { eni: 4, ipPerEni: 15 },
    'm7g.4xlarge': { eni: 8, ipPerEni: 30 },
    'm7g.8xlarge': { eni: 8, ipPerEni: 30 },
    'm7g.12xlarge': { eni: 8, ipPerEni: 30 },
    'm7g.16xlarge': { eni: 15, ipPerEni: 50 },
    'm7g.metal': { eni: 15, ipPerEni: 50 },
    
    // M7gd series
    'm7gd.medium': { eni: 2, ipPerEni: 4 },
    'm7gd.large': { eni: 3, ipPerEni: 10 },
    'm7gd.xlarge': { eni: 4, ipPerEni: 15 },
    'm7gd.2xlarge': { eni: 4, ipPerEni: 15 },
    'm7gd.4xlarge': { eni: 8, ipPerEni: 30 },
    'm7gd.8xlarge': { eni: 8, ipPerEni: 30 },
    'm7gd.12xlarge': { eni: 8, ipPerEni: 30 },
    'm7gd.16xlarge': { eni: 15, ipPerEni: 50 },
    'm7gd.metal': { eni: 15, ipPerEni: 50 },
    
    // M7i series
    'm7i.large': { eni: 3, ipPerEni: 10 },
    'm7i.xlarge': { eni: 4, ipPerEni: 15 },
    'm7i.2xlarge': { eni: 4, ipPerEni: 15 },
    'm7i.4xlarge': { eni: 8, ipPerEni: 30 },
    'm7i.8xlarge': { eni: 8, ipPerEni: 30 },
    'm7i.12xlarge': { eni: 8, ipPerEni: 30 },
    'm7i.16xlarge': { eni: 15, ipPerEni: 50 },
    'm7i.24xlarge': { eni: 15, ipPerEni: 50 },
    'm7i.48xlarge': { eni: 15, ipPerEni: 50 },
    'm7i.metal-24xl': { eni: 15, ipPerEni: 50 },
    'm7i.metal-48xl': { eni: 15, ipPerEni: 50 },
    
    // M7i-flex series
    'm7i-flex.large': { eni: 3, ipPerEni: 10 },
    'm7i-flex.xlarge': { eni: 4, ipPerEni: 15 },
    'm7i-flex.2xlarge': { eni: 4, ipPerEni: 15 },
    'm7i-flex.4xlarge': { eni: 8, ipPerEni: 30 },
    'm7i-flex.8xlarge': { eni: 8, ipPerEni: 30 },
    'm7i-flex.12xlarge': { eni: 8, ipPerEni: 30 },
    'm7i-flex.16xlarge': { eni: 15, ipPerEni: 50 },
    
    // M8g series
    'm8g.medium': { eni: 2, ipPerEni: 4 },
    'm8g.large': { eni: 3, ipPerEni: 10 },
    'm8g.xlarge': { eni: 4, ipPerEni: 15 },
    'm8g.2xlarge': { eni: 4, ipPerEni: 15 },
    'm8g.4xlarge': { eni: 8, ipPerEni: 30 },
    'm8g.8xlarge': { eni: 8, ipPerEni: 30 },
    'm8g.12xlarge': { eni: 8, ipPerEni: 30 },
    'm8g.16xlarge': { eni: 15, ipPerEni: 50 },
    'm8g.24xlarge': { eni: 15, ipPerEni: 50 },
    'm8g.48xlarge': { eni: 15, ipPerEni: 50 },
    'm8g.metal-24xl': { eni: 15, ipPerEni: 50 },
    'm8g.metal-48xl': { eni: 15, ipPerEni: 50 },
    
    // M8gd series
    'm8gd.medium': { eni: 2, ipPerEni: 4 },
    'm8gd.large': { eni: 3, ipPerEni: 10 },
    'm8gd.xlarge': { eni: 4, ipPerEni: 15 },
    'm8gd.2xlarge': { eni: 4, ipPerEni: 15 },
    'm8gd.4xlarge': { eni: 8, ipPerEni: 30 },
    'm8gd.8xlarge': { eni: 8, ipPerEni: 30 },
    'm8gd.12xlarge': { eni: 8, ipPerEni: 30 },
    'm8gd.16xlarge': { eni: 15, ipPerEni: 50 },
    'm8gd.24xlarge': { eni: 15, ipPerEni: 50 },
    'm8gd.48xlarge': { eni: 15, ipPerEni: 50 },
    'm8gd.metal-24xl': { eni: 15, ipPerEni: 50 },
    'm8gd.metal-48xl': { eni: 15, ipPerEni: 50 },
    
    // Mac series
    'mac1.metal': { eni: 8, ipPerEni: 30 },
    'mac2.metal': { eni: 8, ipPerEni: 30 },
    'mac2-m1ultra.metal': { eni: 8, ipPerEni: 30 },
    'mac2-m2.metal': { eni: 8, ipPerEni: 30 },
    'mac2-m2pro.metal': { eni: 8, ipPerEni: 30 },
    
    // T series
    't2.nano': { eni: 2, ipPerEni: 2 },
    't2.micro': { eni: 2, ipPerEni: 2 },
    't2.small': { eni: 3, ipPerEni: 4 },
    't2.medium': { eni: 3, ipPerEni: 6 },
    't2.large': { eni: 3, ipPerEni: 12 },
    't2.xlarge': { eni: 3, ipPerEni: 15 },
    't2.2xlarge': { eni: 3, ipPerEni: 15 },
    
    't3.nano': { eni: 2, ipPerEni: 2 },
    't3.micro': { eni: 2, ipPerEni: 2 },
    't3.small': { eni: 3, ipPerEni: 4 },
    't3.medium': { eni: 3, ipPerEni: 6 },
    't3.large': { eni: 3, ipPerEni: 12 },
    't3.xlarge': { eni: 4, ipPerEni: 15 },
    't3.2xlarge': { eni: 4, ipPerEni: 15 },
    
    't3a.nano': { eni: 2, ipPerEni: 2 },
    't3a.micro': { eni: 2, ipPerEni: 2 },
    't3a.small': { eni: 2, ipPerEni: 4 },
    't3a.medium': { eni: 3, ipPerEni: 6 },
    't3a.large': { eni: 3, ipPerEni: 12 },
    't3a.xlarge': { eni: 4, ipPerEni: 15 },
    't3a.2xlarge': { eni: 4, ipPerEni: 15 },
    
    't4g.nano': { eni: 2, ipPerEni: 2 },
    't4g.micro': { eni: 2, ipPerEni: 2 },
    't4g.small': { eni: 3, ipPerEni: 4 },
    't4g.medium': { eni: 3, ipPerEni: 6 },
    't4g.large': { eni: 3, ipPerEni: 12 },
    't4g.xlarge': { eni: 4, ipPerEni: 15 },
    't4g.2xlarge': { eni: 4, ipPerEni: 15 },
    
    // Compute Optimized - C5 series
    'c5.large': { eni: 3, ipPerEni: 10 },
    'c5.xlarge': { eni: 4, ipPerEni: 15 },
    'c5.2xlarge': { eni: 4, ipPerEni: 15 },
    'c5.4xlarge': { eni: 8, ipPerEni: 30 },
    'c5.9xlarge': { eni: 8, ipPerEni: 30 },
    'c5.12xlarge': { eni: 8, ipPerEni: 30 },
    'c5.18xlarge': { eni: 15, ipPerEni: 50 },
    'c5.24xlarge': { eni: 15, ipPerEni: 50 },
    'c5.metal': { eni: 15, ipPerEni: 50 },
    
    // C5a series
    'c5a.large': { eni: 3, ipPerEni: 10 },
    'c5a.xlarge': { eni: 4, ipPerEni: 15 },
    'c5a.2xlarge': { eni: 4, ipPerEni: 15 },
    'c5a.4xlarge': { eni: 8, ipPerEni: 30 },
    'c5a.8xlarge': { eni: 8, ipPerEni: 30 },
    'c5a.12xlarge': { eni: 8, ipPerEni: 30 },
    'c5a.16xlarge': { eni: 15, ipPerEni: 50 },
    'c5a.24xlarge': { eni: 15, ipPerEni: 50 },
    
    // C5ad series
    'c5ad.large': { eni: 3, ipPerEni: 10 },
    'c5ad.xlarge': { eni: 4, ipPerEni: 15 },
    'c5ad.2xlarge': { eni: 4, ipPerEni: 15 },
    'c5ad.4xlarge': { eni: 8, ipPerEni: 30 },
    'c5ad.8xlarge': { eni: 8, ipPerEni: 30 },
    'c5ad.12xlarge': { eni: 8, ipPerEni: 30 },
    'c5ad.16xlarge': { eni: 15, ipPerEni: 50 },
    'c5ad.24xlarge': { eni: 15, ipPerEni: 50 },
    
    // C5d series
    'c5d.large': { eni: 3, ipPerEni: 10 },
    'c5d.xlarge': { eni: 4, ipPerEni: 15 },
    'c5d.2xlarge': { eni: 4, ipPerEni: 15 },
    'c5d.4xlarge': { eni: 8, ipPerEni: 30 },
    'c5d.9xlarge': { eni: 8, ipPerEni: 30 },
    'c5d.12xlarge': { eni: 8, ipPerEni: 30 },
    'c5d.18xlarge': { eni: 15, ipPerEni: 50 },
    'c5d.24xlarge': { eni: 15, ipPerEni: 50 },
    'c5d.metal': { eni: 15, ipPerEni: 50 },
    
    // C5n series
    'c5n.large': { eni: 3, ipPerEni: 10 },
    'c5n.xlarge': { eni: 4, ipPerEni: 15 },
    'c5n.2xlarge': { eni: 4, ipPerEni: 15 },
    'c5n.4xlarge': { eni: 8, ipPerEni: 30 },
    'c5n.9xlarge': { eni: 8, ipPerEni: 30 },
    'c5n.18xlarge': { eni: 15, ipPerEni: 50 },
    'c5n.metal': { eni: 15, ipPerEni: 50 },
    
    // C6a series
    'c6a.large': { eni: 3, ipPerEni: 10 },
    'c6a.xlarge': { eni: 4, ipPerEni: 15 },
    'c6a.2xlarge': { eni: 4, ipPerEni: 15 },
    'c6a.4xlarge': { eni: 8, ipPerEni: 30 },
    'c6a.8xlarge': { eni: 8, ipPerEni: 30 },
    'c6a.12xlarge': { eni: 8, ipPerEni: 30 },
    'c6a.16xlarge': { eni: 15, ipPerEni: 50 },
    'c6a.24xlarge': { eni: 15, ipPerEni: 50 },
    'c6a.32xlarge': { eni: 15, ipPerEni: 50 },
    'c6a.48xlarge': { eni: 15, ipPerEni: 50 },
    'c6a.metal': { eni: 15, ipPerEni: 50 },
    
    // C6g series
    'c6g.medium': { eni: 2, ipPerEni: 4 },
    'c6g.large': { eni: 3, ipPerEni: 10 },
    'c6g.xlarge': { eni: 4, ipPerEni: 15 },
    'c6g.2xlarge': { eni: 4, ipPerEni: 15 },
    'c6g.4xlarge': { eni: 8, ipPerEni: 30 },
    'c6g.8xlarge': { eni: 8, ipPerEni: 30 },
    'c6g.12xlarge': { eni: 8, ipPerEni: 30 },
    'c6g.16xlarge': { eni: 15, ipPerEni: 50 },
    'c6g.metal': { eni: 15, ipPerEni: 50 },
    
    // C6gd series
    'c6gd.medium': { eni: 2, ipPerEni: 4 },
    'c6gd.large': { eni: 3, ipPerEni: 10 },
    'c6gd.xlarge': { eni: 4, ipPerEni: 15 },
    'c6gd.2xlarge': { eni: 4, ipPerEni: 15 },
    'c6gd.4xlarge': { eni: 8, ipPerEni: 30 },
    'c6gd.8xlarge': { eni: 8, ipPerEni: 30 },
    'c6gd.12xlarge': { eni: 8, ipPerEni: 30 },
    'c6gd.16xlarge': { eni: 15, ipPerEni: 50 },
    'c6gd.metal': { eni: 15, ipPerEni: 50 },
    
    // C6gn series
    'c6gn.medium': { eni: 2, ipPerEni: 4 },
    'c6gn.large': { eni: 3, ipPerEni: 10 },
    'c6gn.xlarge': { eni: 4, ipPerEni: 15 },
    'c6gn.2xlarge': { eni: 4, ipPerEni: 15 },
    'c6gn.4xlarge': { eni: 8, ipPerEni: 30 },
    'c6gn.8xlarge': { eni: 8, ipPerEni: 30 },
    'c6gn.12xlarge': { eni: 8, ipPerEni: 30 },
    'c6gn.16xlarge': { eni: 15, ipPerEni: 50 },
    
    // C6i series
    'c6i.large': { eni: 3, ipPerEni: 10 },
    'c6i.xlarge': { eni: 4, ipPerEni: 15 },
    'c6i.2xlarge': { eni: 4, ipPerEni: 15 },
    'c6i.4xlarge': { eni: 8, ipPerEni: 30 },
    'c6i.8xlarge': { eni: 8, ipPerEni: 30 },
    'c6i.12xlarge': { eni: 8, ipPerEni: 30 },
    'c6i.16xlarge': { eni: 15, ipPerEni: 50 },
    'c6i.24xlarge': { eni: 15, ipPerEni: 50 },
    'c6i.32xlarge': { eni: 15, ipPerEni: 50 },
    'c6i.metal': { eni: 15, ipPerEni: 50 },
    
    // C6id series
    'c6id.large': { eni: 3, ipPerEni: 10 },
    'c6id.xlarge': { eni: 4, ipPerEni: 15 },
    'c6id.2xlarge': { eni: 4, ipPerEni: 15 },
    'c6id.4xlarge': { eni: 8, ipPerEni: 30 },
    'c6id.8xlarge': { eni: 8, ipPerEni: 30 },
    'c6id.12xlarge': { eni: 8, ipPerEni: 30 },
    'c6id.16xlarge': { eni: 15, ipPerEni: 50 },
    'c6id.24xlarge': { eni: 15, ipPerEni: 50 },
    'c6id.32xlarge': { eni: 15, ipPerEni: 50 },
    'c6id.metal': { eni: 15, ipPerEni: 50 },
    
    // C6in series
    'c6in.large': { eni: 3, ipPerEni: 10 },
    'c6in.xlarge': { eni: 4, ipPerEni: 15 },
    'c6in.2xlarge': { eni: 4, ipPerEni: 15 },
    'c6in.4xlarge': { eni: 8, ipPerEni: 30 },
    'c6in.8xlarge': { eni: 8, ipPerEni: 30 },
    'c6in.12xlarge': { eni: 8, ipPerEni: 30 },
    'c6in.16xlarge': { eni: 15, ipPerEni: 50 },
    'c6in.24xlarge': { eni: 15, ipPerEni: 50 },
    'c6in.32xlarge': { eni: 16, ipPerEni: 50 },
    'c6in.metal': { eni: 16, ipPerEni: 50 },
    
    // C7a series
    'c7a.medium': { eni: 2, ipPerEni: 4 },
    'c7a.large': { eni: 3, ipPerEni: 10 },
    'c7a.xlarge': { eni: 4, ipPerEni: 15 },
    'c7a.2xlarge': { eni: 4, ipPerEni: 15 },
    'c7a.4xlarge': { eni: 8, ipPerEni: 30 },
    'c7a.8xlarge': { eni: 8, ipPerEni: 30 },
    'c7a.12xlarge': { eni: 8, ipPerEni: 30 },
    'c7a.16xlarge': { eni: 15, ipPerEni: 50 },
    'c7a.24xlarge': { eni: 15, ipPerEni: 50 },
    'c7a.32xlarge': { eni: 15, ipPerEni: 50 },
    'c7a.48xlarge': { eni: 15, ipPerEni: 50 },
    'c7a.metal-48xl': { eni: 15, ipPerEni: 50 },
    
    // C7g series
    'c7g.medium': { eni: 2, ipPerEni: 4 },
    'c7g.large': { eni: 3, ipPerEni: 10 },
    'c7g.xlarge': { eni: 4, ipPerEni: 15 },
    'c7g.2xlarge': { eni: 4, ipPerEni: 15 },
    'c7g.4xlarge': { eni: 8, ipPerEni: 30 },
    'c7g.8xlarge': { eni: 8, ipPerEni: 30 },
    'c7g.12xlarge': { eni: 8, ipPerEni: 30 },
    'c7g.16xlarge': { eni: 15, ipPerEni: 50 },
    'c7g.metal': { eni: 15, ipPerEni: 50 },
    
    // C7gd series
    'c7gd.medium': { eni: 2, ipPerEni: 4 },
    'c7gd.large': { eni: 3, ipPerEni: 10 },
    'c7gd.xlarge': { eni: 4, ipPerEni: 15 },
    'c7gd.2xlarge': { eni: 4, ipPerEni: 15 },
    'c7gd.4xlarge': { eni: 8, ipPerEni: 30 },
    'c7gd.8xlarge': { eni: 8, ipPerEni: 30 },
    'c7gd.12xlarge': { eni: 8, ipPerEni: 30 },
    'c7gd.16xlarge': { eni: 15, ipPerEni: 50 },
    'c7gd.metal': { eni: 15, ipPerEni: 50 },
    
    // C7gn series
    'c7gn.medium': { eni: 2, ipPerEni: 4 },
    'c7gn.large': { eni: 3, ipPerEni: 10 },
    'c7gn.xlarge': { eni: 4, ipPerEni: 15 },
    'c7gn.2xlarge': { eni: 4, ipPerEni: 15 },
    'c7gn.4xlarge': { eni: 8, ipPerEni: 30 },
    'c7gn.8xlarge': { eni: 8, ipPerEni: 30 },
    'c7gn.12xlarge': { eni: 8, ipPerEni: 30 },
    'c7gn.16xlarge': { eni: 15, ipPerEni: 50 },
    'c7gn.metal': { eni: 15, ipPerEni: 50 },
    
    // C7i series
    'c7i.large': { eni: 3, ipPerEni: 10 },
    'c7i.xlarge': { eni: 4, ipPerEni: 15 },
    'c7i.2xlarge': { eni: 4, ipPerEni: 15 },
    'c7i.4xlarge': { eni: 8, ipPerEni: 30 },
    'c7i.8xlarge': { eni: 8, ipPerEni: 30 },
    'c7i.12xlarge': { eni: 8, ipPerEni: 30 },
    'c7i.16xlarge': { eni: 15, ipPerEni: 50 },
    'c7i.24xlarge': { eni: 15, ipPerEni: 50 },
    'c7i.48xlarge': { eni: 15, ipPerEni: 50 },
    'c7i.metal-24xl': { eni: 15, ipPerEni: 50 },
    'c7i.metal-48xl': { eni: 15, ipPerEni: 50 },
    
    // C7i-flex series
    'c7i-flex.large': { eni: 3, ipPerEni: 10 },
    'c7i-flex.xlarge': { eni: 4, ipPerEni: 15 },
    'c7i-flex.2xlarge': { eni: 4, ipPerEni: 15 },
    'c7i-flex.4xlarge': { eni: 8, ipPerEni: 30 },
    'c7i-flex.8xlarge': { eni: 8, ipPerEni: 30 },
    'c7i-flex.12xlarge': { eni: 8, ipPerEni: 30 },
    'c7i-flex.16xlarge': { eni: 15, ipPerEni: 50 },
    
    // C8g series
    'c8g.medium': { eni: 2, ipPerEni: 4 },
    'c8g.large': { eni: 3, ipPerEni: 10 },
    'c8g.xlarge': { eni: 4, ipPerEni: 15 },
    'c8g.2xlarge': { eni: 4, ipPerEni: 15 },
    'c8g.4xlarge': { eni: 8, ipPerEni: 30 },
    'c8g.8xlarge': { eni: 8, ipPerEni: 30 },
    'c8g.12xlarge': { eni: 8, ipPerEni: 30 },
    'c8g.16xlarge': { eni: 15, ipPerEni: 50 },
    'c8g.24xlarge': { eni: 15, ipPerEni: 50 },
    'c8g.48xlarge': { eni: 15, ipPerEni: 50 },
    'c8g.metal-24xl': { eni: 15, ipPerEni: 50 },
    'c8g.metal-48xl': { eni: 15, ipPerEni: 50 },
    
    // C8gd series
    'c8gd.medium': { eni: 2, ipPerEni: 4 },
    'c8gd.large': { eni: 3, ipPerEni: 10 },
    'c8gd.xlarge': { eni: 4, ipPerEni: 15 },
    'c8gd.2xlarge': { eni: 4, ipPerEni: 15 },
    'c8gd.4xlarge': { eni: 8, ipPerEni: 30 },
    'c8gd.8xlarge': { eni: 8, ipPerEni: 30 },
    'c8gd.12xlarge': { eni: 8, ipPerEni: 30 },
    'c8gd.16xlarge': { eni: 15, ipPerEni: 50 },
    'c8gd.24xlarge': { eni: 15, ipPerEni: 50 },
    'c8gd.48xlarge': { eni: 15, ipPerEni: 50 },
    'c8gd.metal-24xl': { eni: 15, ipPerEni: 50 },
    'c8gd.metal-48xl': { eni: 15, ipPerEni: 50 },
    
    // Memory Optimized Instances
    // R5 series
    'r5.large': { eni: 3, ipPerEni: 10 },
    'r5.xlarge': { eni: 4, ipPerEni: 15 },
    'r5.2xlarge': { eni: 4, ipPerEni: 15 },
    'r5.4xlarge': { eni: 8, ipPerEni: 30 },
    'r5.8xlarge': { eni: 8, ipPerEni: 30 },
    'r5.12xlarge': { eni: 8, ipPerEni: 30 },
    'r5.16xlarge': { eni: 15, ipPerEni: 50 },
    'r5.24xlarge': { eni: 15, ipPerEni: 50 },
    'r5.metal': { eni: 15, ipPerEni: 50 },
    
    // R5a series
    'r5a.large': { eni: 3, ipPerEni: 10 },
    'r5a.xlarge': { eni: 4, ipPerEni: 15 },
    'r5a.2xlarge': { eni: 4, ipPerEni: 15 },
    'r5a.4xlarge': { eni: 8, ipPerEni: 30 },
    'r5a.8xlarge': { eni: 8, ipPerEni: 30 },
    'r5a.12xlarge': { eni: 8, ipPerEni: 30 },
    'r5a.16xlarge': { eni: 15, ipPerEni: 50 },
    'r5a.24xlarge': { eni: 15, ipPerEni: 50 },
    
    // R5ad series
    'r5ad.large': { eni: 3, ipPerEni: 10 },
    'r5ad.xlarge': { eni: 4, ipPerEni: 15 },
    'r5ad.2xlarge': { eni: 4, ipPerEni: 15 },
    'r5ad.4xlarge': { eni: 8, ipPerEni: 30 },
    'r5ad.8xlarge': { eni: 8, ipPerEni: 30 },
    'r5ad.12xlarge': { eni: 8, ipPerEni: 30 },
    'r5ad.16xlarge': { eni: 15, ipPerEni: 50 },
    'r5ad.24xlarge': { eni: 15, ipPerEni: 50 },
    
    // R5b series
    'r5b.large': { eni: 3, ipPerEni: 10 },
    'r5b.xlarge': { eni: 4, ipPerEni: 15 },
    'r5b.2xlarge': { eni: 4, ipPerEni: 15 },
    'r5b.4xlarge': { eni: 8, ipPerEni: 30 },
    'r5b.8xlarge': { eni: 8, ipPerEni: 30 },
    'r5b.12xlarge': { eni: 8, ipPerEni: 30 },
    'r5b.16xlarge': { eni: 15, ipPerEni: 50 },
    'r5b.24xlarge': { eni: 15, ipPerEni: 50 },
    'r5b.metal': { eni: 15, ipPerEni: 50 },
    
    // R5d series
    'r5d.large': { eni: 3, ipPerEni: 10 },
    'r5d.xlarge': { eni: 4, ipPerEni: 15 },
    'r5d.2xlarge': { eni: 4, ipPerEni: 15 },
    'r5d.4xlarge': { eni: 8, ipPerEni: 30 },
    'r5d.8xlarge': { eni: 8, ipPerEni: 30 },
    'r5d.12xlarge': { eni: 8, ipPerEni: 30 },
    'r5d.16xlarge': { eni: 15, ipPerEni: 50 },
    'r5d.24xlarge': { eni: 15, ipPerEni: 50 },
    'r5d.metal': { eni: 15, ipPerEni: 50 },
    
    // R5dn series
    'r5dn.large': { eni: 3, ipPerEni: 10 },
    'r5dn.xlarge': { eni: 4, ipPerEni: 15 },
    'r5dn.2xlarge': { eni: 4, ipPerEni: 15 },
    'r5dn.4xlarge': { eni: 8, ipPerEni: 30 },
    'r5dn.8xlarge': { eni: 8, ipPerEni: 30 },
    'r5dn.12xlarge': { eni: 8, ipPerEni: 30 },
    'r5dn.16xlarge': { eni: 15, ipPerEni: 50 },
    'r5dn.24xlarge': { eni: 15, ipPerEni: 50 },
    'r5dn.metal': { eni: 15, ipPerEni: 50 },
    
    // R5n series
    'r5n.large': { eni: 3, ipPerEni: 10 },
    'r5n.xlarge': { eni: 4, ipPerEni: 15 },
    'r5n.2xlarge': { eni: 4, ipPerEni: 15 },
    'r5n.4xlarge': { eni: 8, ipPerEni: 30 },
    'r5n.8xlarge': { eni: 8, ipPerEni: 30 },
    'r5n.12xlarge': { eni: 8, ipPerEni: 30 },
    'r5n.16xlarge': { eni: 15, ipPerEni: 50 },
    'r5n.24xlarge': { eni: 15, ipPerEni: 50 },
    'r5n.metal': { eni: 15, ipPerEni: 50 },
    
    // R6a series
    'r6a.large': { eni: 3, ipPerEni: 10 },
    'r6a.xlarge': { eni: 4, ipPerEni: 15 },
    'r6a.2xlarge': { eni: 4, ipPerEni: 15 },
    'r6a.4xlarge': { eni: 8, ipPerEni: 30 },
    'r6a.8xlarge': { eni: 8, ipPerEni: 30 },
    'r6a.12xlarge': { eni: 8, ipPerEni: 30 },
    'r6a.16xlarge': { eni: 15, ipPerEni: 50 },
    'r6a.24xlarge': { eni: 15, ipPerEni: 50 },
    'r6a.32xlarge': { eni: 15, ipPerEni: 50 },
    'r6a.48xlarge': { eni: 15, ipPerEni: 50 },
    'r6a.metal': { eni: 15, ipPerEni: 50 },
    
    // R6g series
    'r6g.medium': { eni: 2, ipPerEni: 4 },
    'r6g.large': { eni: 3, ipPerEni: 10 },
    'r6g.xlarge': { eni: 4, ipPerEni: 15 },
    'r6g.2xlarge': { eni: 4, ipPerEni: 15 },
    'r6g.4xlarge': { eni: 8, ipPerEni: 30 },
    'r6g.8xlarge': { eni: 8, ipPerEni: 30 },
    'r6g.12xlarge': { eni: 8, ipPerEni: 30 },
    'r6g.16xlarge': { eni: 15, ipPerEni: 50 },
    'r6g.metal': { eni: 15, ipPerEni: 50 },
    
    // R6gd series
    'r6gd.medium': { eni: 2, ipPerEni: 4 },
    'r6gd.large': { eni: 3, ipPerEni: 10 },
    'r6gd.xlarge': { eni: 4, ipPerEni: 15 },
    'r6gd.2xlarge': { eni: 4, ipPerEni: 15 },
    'r6gd.4xlarge': { eni: 8, ipPerEni: 30 },
    'r6gd.8xlarge': { eni: 8, ipPerEni: 30 },
    'r6gd.12xlarge': { eni: 8, ipPerEni: 30 },
    'r6gd.16xlarge': { eni: 15, ipPerEni: 50 },
    'r6gd.metal': { eni: 15, ipPerEni: 50 },
    
    // R6i series
    'r6i.large': { eni: 3, ipPerEni: 10 },
    'r6i.xlarge': { eni: 4, ipPerEni: 15 },
    'r6i.2xlarge': { eni: 4, ipPerEni: 15 },
    'r6i.4xlarge': { eni: 8, ipPerEni: 30 },
    'r6i.8xlarge': { eni: 8, ipPerEni: 30 },
    'r6i.12xlarge': { eni: 8, ipPerEni: 30 },
    'r6i.16xlarge': { eni: 15, ipPerEni: 50 },
    'r6i.24xlarge': { eni: 15, ipPerEni: 50 },
    'r6i.32xlarge': { eni: 15, ipPerEni: 50 },
    'r6i.metal': { eni: 15, ipPerEni: 50 },
    
    // R6idn series (2 Network cards for 32xlarge and metal)
    'r6idn.large': { eni: 3, ipPerEni: 10 },
    'r6idn.xlarge': { eni: 4, ipPerEni: 15 },
    'r6idn.2xlarge': { eni: 4, ipPerEni: 15 },
    'r6idn.4xlarge': { eni: 8, ipPerEni: 30 },
    'r6idn.8xlarge': { eni: 8, ipPerEni: 30 },
    'r6idn.12xlarge': { eni: 8, ipPerEni: 30 },
    'r6idn.16xlarge': { eni: 15, ipPerEni: 50 },
    'r6idn.24xlarge': { eni: 15, ipPerEni: 50 },
    'r6idn.32xlarge': { eni: 16, ipPerEni: 50 },
    'r6idn.metal': { eni: 16, ipPerEni: 50 },
    
    // R6in series (2 Network cards for 32xlarge and metal)
    'r6in.large': { eni: 3, ipPerEni: 10 },
    'r6in.xlarge': { eni: 4, ipPerEni: 15 },
    'r6in.2xlarge': { eni: 4, ipPerEni: 15 },
    'r6in.4xlarge': { eni: 8, ipPerEni: 30 },
    'r6in.8xlarge': { eni: 8, ipPerEni: 30 },
    'r6in.12xlarge': { eni: 8, ipPerEni: 30 },
    'r6in.16xlarge': { eni: 15, ipPerEni: 50 },
    'r6in.24xlarge': { eni: 15, ipPerEni: 50 },
    'r6in.32xlarge': { eni: 16, ipPerEni: 50 },
    'r6in.metal': { eni: 16, ipPerEni: 50 },
    
    // R6id series
    'r6id.large': { eni: 3, ipPerEni: 10 },
    'r6id.xlarge': { eni: 4, ipPerEni: 15 },
    'r6id.2xlarge': { eni: 4, ipPerEni: 15 },
    'r6id.4xlarge': { eni: 8, ipPerEni: 30 },
    'r6id.8xlarge': { eni: 8, ipPerEni: 30 },
    'r6id.12xlarge': { eni: 8, ipPerEni: 30 },
    'r6id.16xlarge': { eni: 15, ipPerEni: 50 },
    'r6id.24xlarge': { eni: 15, ipPerEni: 50 },
    'r6id.32xlarge': { eni: 15, ipPerEni: 50 },
    'r6id.metal': { eni: 15, ipPerEni: 50 },
    
    // R7a series
    'r7a.medium': { eni: 2, ipPerEni: 4 },
    'r7a.large': { eni: 3, ipPerEni: 10 },
    'r7a.xlarge': { eni: 4, ipPerEni: 15 },
    'r7a.2xlarge': { eni: 4, ipPerEni: 15 },
    'r7a.4xlarge': { eni: 8, ipPerEni: 30 },
    'r7a.8xlarge': { eni: 8, ipPerEni: 30 },
    'r7a.12xlarge': { eni: 8, ipPerEni: 30 },
    'r7a.16xlarge': { eni: 15, ipPerEni: 50 },
    'r7a.24xlarge': { eni: 15, ipPerEni: 50 },
    'r7a.32xlarge': { eni: 15, ipPerEni: 50 },
    'r7a.48xlarge': { eni: 15, ipPerEni: 50 },
    'r7a.metal-48xl': { eni: 15, ipPerEni: 50 },
    
    // R7g series
    'r7g.medium': { eni: 2, ipPerEni: 4 },
    'r7g.large': { eni: 3, ipPerEni: 10 },
    'r7g.xlarge': { eni: 4, ipPerEni: 15 },
    'r7g.2xlarge': { eni: 4, ipPerEni: 15 },
    'r7g.4xlarge': { eni: 8, ipPerEni: 30 },
    'r7g.8xlarge': { eni: 8, ipPerEni: 30 },
    'r7g.12xlarge': { eni: 8, ipPerEni: 30 },
    'r7g.16xlarge': { eni: 15, ipPerEni: 50 },
    'r7g.metal': { eni: 15, ipPerEni: 50 },
    
    // R7gd series
    'r7gd.medium': { eni: 2, ipPerEni: 4 },
    'r7gd.large': { eni: 3, ipPerEni: 10 },
    'r7gd.xlarge': { eni: 4, ipPerEni: 15 },
    'r7gd.2xlarge': { eni: 4, ipPerEni: 15 },
    'r7gd.4xlarge': { eni: 8, ipPerEni: 30 },
    'r7gd.8xlarge': { eni: 8, ipPerEni: 30 },
    'r7gd.12xlarge': { eni: 8, ipPerEni: 30 },
    'r7gd.16xlarge': { eni: 15, ipPerEni: 50 },
    'r7gd.metal': { eni: 15, ipPerEni: 50 },
    
    // R7i series
    'r7i.large': { eni: 3, ipPerEni: 10 },
    'r7i.xlarge': { eni: 4, ipPerEni: 15 },
    'r7i.2xlarge': { eni: 4, ipPerEni: 15 },
    'r7i.4xlarge': { eni: 8, ipPerEni: 30 },
    'r7i.8xlarge': { eni: 8, ipPerEni: 30 },
    'r7i.12xlarge': { eni: 8, ipPerEni: 30 },
    'r7i.16xlarge': { eni: 15, ipPerEni: 50 },
    'r7i.24xlarge': { eni: 15, ipPerEni: 50 },
    'r7i.48xlarge': { eni: 15, ipPerEni: 50 },
    'r7i.metal-24xl': { eni: 15, ipPerEni: 50 },
    'r7i.metal-48xl': { eni: 15, ipPerEni: 50 },
    
    // R7iz series
    'r7iz.large': { eni: 3, ipPerEni: 10 },
    'r7iz.xlarge': { eni: 4, ipPerEni: 15 },
    'r7iz.2xlarge': { eni: 4, ipPerEni: 15 },
    'r7iz.4xlarge': { eni: 8, ipPerEni: 30 },
    'r7iz.8xlarge': { eni: 8, ipPerEni: 30 },
    'r7iz.12xlarge': { eni: 8, ipPerEni: 30 },
    'r7iz.16xlarge': { eni: 15, ipPerEni: 50 },
    'r7iz.32xlarge': { eni: 15, ipPerEni: 50 },
    'r7iz.metal-16xl': { eni: 15, ipPerEni: 50 },
    'r7iz.metal-32xl': { eni: 15, ipPerEni: 50 },
    
    // R8g series
    'r8g.medium': { eni: 2, ipPerEni: 4 },
    'r8g.large': { eni: 3, ipPerEni: 10 },
    'r8g.xlarge': { eni: 4, ipPerEni: 15 },
    'r8g.2xlarge': { eni: 4, ipPerEni: 15 },
    'r8g.4xlarge': { eni: 8, ipPerEni: 30 },
    'r8g.8xlarge': { eni: 8, ipPerEni: 30 },
    'r8g.12xlarge': { eni: 8, ipPerEni: 30 },
    'r8g.16xlarge': { eni: 15, ipPerEni: 50 },
    'r8g.24xlarge': { eni: 15, ipPerEni: 50 },
    'r8g.48xlarge': { eni: 15, ipPerEni: 50 },
    'r8g.metal-24xl': { eni: 15, ipPerEni: 50 },
    'r8g.metal-48xl': { eni: 15, ipPerEni: 50 },
    
    // R8gd series
    'r8gd.medium': { eni: 2, ipPerEni: 4 },
    'r8gd.large': { eni: 3, ipPerEni: 10 },
    'r8gd.xlarge': { eni: 4, ipPerEni: 15 },
    'r8gd.2xlarge': { eni: 4, ipPerEni: 15 },
    'r8gd.4xlarge': { eni: 8, ipPerEni: 30 },
    'r8gd.8xlarge': { eni: 8, ipPerEni: 30 },
    'r8gd.12xlarge': { eni: 8, ipPerEni: 30 },
    'r8gd.16xlarge': { eni: 15, ipPerEni: 50 },
    'r8gd.24xlarge': { eni: 15, ipPerEni: 50 },
    'r8gd.48xlarge': { eni: 15, ipPerEni: 50 },
    'r8gd.metal-24xl': { eni: 15, ipPerEni: 50 },
    'r8gd.metal-48xl': { eni: 15, ipPerEni: 50 },
    
    // U-3tb1 series
    'u-3tb1.56xlarge': { eni: 8, ipPerEni: 30 },
    
    // U-6tb1 series
    'u-6tb1.56xlarge': { eni: 15, ipPerEni: 50 },
    'u-6tb1.112xlarge': { eni: 15, ipPerEni: 50 },
    'u-6tb1.metal': { eni: 5, ipPerEni: 30 },
    
    // U-9tb1 series
    'u-9tb1.112xlarge': { eni: 15, ipPerEni: 50 },
    'u-9tb1.metal': { eni: 5, ipPerEni: 30 },
    
    // U-12tb1 series
    'u-12tb1.112xlarge': { eni: 15, ipPerEni: 50 },
    'u-12tb1.metal': { eni: 5, ipPerEni: 30 },
    
    // U-18tb1 series
    'u-18tb1.112xlarge': { eni: 15, ipPerEni: 50 },
    'u-18tb1.metal': { eni: 15, ipPerEni: 50 },
    
    // U-24tb1 series
    'u-24tb1.112xlarge': { eni: 15, ipPerEni: 50 },
    'u-24tb1.metal': { eni: 15, ipPerEni: 50 },
    
    // U7i series
    'u7i-6tb.112xlarge': { eni: 15, ipPerEni: 50 },
    'u7i-8tb.112xlarge': { eni: 15, ipPerEni: 50 },
    'u7i-12tb.224xlarge': { eni: 15, ipPerEni: 50 },
    
    // U7in series (2 Network cards)
    'u7in-16tb.224xlarge': { eni: 16, ipPerEni: 50 },
    'u7in-24tb.224xlarge': { eni: 16, ipPerEni: 50 },
    'u7in-32tb.224xlarge': { eni: 16, ipPerEni: 50 },
    
    // U7inh series (2 Network cards)
    'u7inh-32tb.480xlarge': { eni: 16, ipPerEni: 50 },
    
    // X1 series
    'x1.16xlarge': { eni: 8, ipPerEni: 30 },
    'x1.32xlarge': { eni: 8, ipPerEni: 30 },
    
    // X1e series
    'x1e.xlarge': { eni: 3, ipPerEni: 10 },
    'x1e.2xlarge': { eni: 4, ipPerEni: 15 },
    'x1e.4xlarge': { eni: 4, ipPerEni: 15 },
    'x1e.8xlarge': { eni: 4, ipPerEni: 15 },
    'x1e.16xlarge': { eni: 8, ipPerEni: 30 },
    'x1e.32xlarge': { eni: 8, ipPerEni: 30 },
    
    // X2gd series
    'x2gd.medium': { eni: 2, ipPerEni: 4 },
    'x2gd.large': { eni: 3, ipPerEni: 10 },
    'x2gd.xlarge': { eni: 4, ipPerEni: 15 },
    'x2gd.2xlarge': { eni: 4, ipPerEni: 15 },
    'x2gd.4xlarge': { eni: 8, ipPerEni: 30 },
    'x2gd.8xlarge': { eni: 8, ipPerEni: 30 },
    'x2gd.12xlarge': { eni: 8, ipPerEni: 30 },
    'x2gd.16xlarge': { eni: 15, ipPerEni: 50 },
    'x2gd.metal': { eni: 15, ipPerEni: 50 },
    
    // X2idn series
    'x2idn.16xlarge': { eni: 15, ipPerEni: 50 },
    'x2idn.24xlarge': { eni: 15, ipPerEni: 50 },
    'x2idn.32xlarge': { eni: 15, ipPerEni: 50 },
    'x2idn.metal': { eni: 15, ipPerEni: 50 },
    
    // X2iedn series
    'x2iedn.xlarge': { eni: 4, ipPerEni: 15 },
    'x2iedn.2xlarge': { eni: 4, ipPerEni: 15 },
    'x2iedn.4xlarge': { eni: 8, ipPerEni: 30 },
    'x2iedn.8xlarge': { eni: 8, ipPerEni: 30 },
    'x2iedn.16xlarge': { eni: 15, ipPerEni: 50 },
    'x2iedn.24xlarge': { eni: 15, ipPerEni: 50 },
    'x2iedn.32xlarge': { eni: 15, ipPerEni: 50 },
    'x2iedn.metal': { eni: 15, ipPerEni: 50 },
    
    // X2iezn series
    'x2iezn.2xlarge': { eni: 4, ipPerEni: 15 },
    'x2iezn.4xlarge': { eni: 8, ipPerEni: 30 },
    'x2iezn.6xlarge': { eni: 8, ipPerEni: 30 },
    'x2iezn.8xlarge': { eni: 8, ipPerEni: 30 },
    'x2iezn.12xlarge': { eni: 15, ipPerEni: 50 },
    'x2iezn.metal': { eni: 15, ipPerEni: 50 },
    
    // X8g series
    'x8g.medium': { eni: 2, ipPerEni: 4 },
    'x8g.large': { eni: 3, ipPerEni: 10 },
    'x8g.xlarge': { eni: 4, ipPerEni: 15 },
    'x8g.2xlarge': { eni: 4, ipPerEni: 15 },
    'x8g.4xlarge': { eni: 8, ipPerEni: 30 },
    'x8g.8xlarge': { eni: 8, ipPerEni: 30 },
    'x8g.12xlarge': { eni: 8, ipPerEni: 30 },
    'x8g.16xlarge': { eni: 15, ipPerEni: 50 },
    'x8g.24xlarge': { eni: 15, ipPerEni: 50 },
    'x8g.48xlarge': { eni: 15, ipPerEni: 50 },
    'x8g.metal-24xl': { eni: 15, ipPerEni: 50 },
    'x8g.metal-48xl': { eni: 15, ipPerEni: 50 },
    
    // z1d series
    'z1d.large': { eni: 3, ipPerEni: 10 },
    'z1d.xlarge': { eni: 4, ipPerEni: 15 },
    'z1d.2xlarge': { eni: 4, ipPerEni: 15 },
    'z1d.3xlarge': { eni: 8, ipPerEni: 30 },
    'z1d.6xlarge': { eni: 8, ipPerEni: 30 },
    'z1d.12xlarge': { eni: 15, ipPerEni: 50 },
    'z1d.metal': { eni: 15, ipPerEni: 50 },
    
    // Storage Optimized Instances
    // D2 series
    'd2.xlarge': { eni: 4, ipPerEni: 15 },
    'd2.2xlarge': { eni: 4, ipPerEni: 15 },
    'd2.4xlarge': { eni: 8, ipPerEni: 30 },
    'd2.8xlarge': { eni: 8, ipPerEni: 30 },
    
    // D3 series (special IP per ENI values)
    'd3.xlarge': { eni: 4, ipPerEni: 3 },
    'd3.2xlarge': { eni: 4, ipPerEni: 5 },
    'd3.4xlarge': { eni: 4, ipPerEni: 10 },
    'd3.8xlarge': { eni: 3, ipPerEni: 20 },
    
    // D3en series (special IP per ENI values)
    'd3en.xlarge': { eni: 4, ipPerEni: 3 },
    'd3en.2xlarge': { eni: 4, ipPerEni: 5 },
    'd3en.4xlarge': { eni: 4, ipPerEni: 10 },
    'd3en.6xlarge': { eni: 4, ipPerEni: 15 },
    'd3en.8xlarge': { eni: 4, ipPerEni: 20 },
    'd3en.12xlarge': { eni: 3, ipPerEni: 30 },
    
    // H1 series
    'h1.2xlarge': { eni: 4, ipPerEni: 15 },
    'h1.4xlarge': { eni: 8, ipPerEni: 30 },
    'h1.8xlarge': { eni: 8, ipPerEni: 30 },
    'h1.16xlarge': { eni: 8, ipPerEni: 50 },
    
    // I3 series
    'i3.large': { eni: 3, ipPerEni: 10 },
    'i3.xlarge': { eni: 4, ipPerEni: 15 },
    'i3.2xlarge': { eni: 4, ipPerEni: 15 },
    'i3.4xlarge': { eni: 8, ipPerEni: 30 },
    'i3.8xlarge': { eni: 8, ipPerEni: 30 },
    'i3.16xlarge': { eni: 15, ipPerEni: 50 },
    'i3.metal': { eni: 15, ipPerEni: 50 },
    
    // I3en series
    'i3en.large': { eni: 3, ipPerEni: 10 },
    'i3en.xlarge': { eni: 4, ipPerEni: 15 },
    'i3en.2xlarge': { eni: 4, ipPerEni: 15 },
    'i3en.3xlarge': { eni: 4, ipPerEni: 15 },
    'i3en.6xlarge': { eni: 8, ipPerEni: 30 },
    'i3en.12xlarge': { eni: 8, ipPerEni: 30 },
    'i3en.24xlarge': { eni: 15, ipPerEni: 50 },
    'i3en.metal': { eni: 15, ipPerEni: 50 },
    
    // I4g series
    'i4g.large': { eni: 3, ipPerEni: 10 },
    'i4g.xlarge': { eni: 4, ipPerEni: 15 },
    'i4g.2xlarge': { eni: 4, ipPerEni: 15 },
    'i4g.4xlarge': { eni: 8, ipPerEni: 30 },
    'i4g.8xlarge': { eni: 8, ipPerEni: 30 },
    'i4g.16xlarge': { eni: 15, ipPerEni: 50 },
    
    // I4i series
    'i4i.large': { eni: 3, ipPerEni: 10 },
    'i4i.xlarge': { eni: 4, ipPerEni: 15 },
    'i4i.2xlarge': { eni: 4, ipPerEni: 15 },
    'i4i.4xlarge': { eni: 8, ipPerEni: 30 },
    'i4i.8xlarge': { eni: 8, ipPerEni: 30 },
    'i4i.12xlarge': { eni: 8, ipPerEni: 30 },
    'i4i.16xlarge': { eni: 15, ipPerEni: 50 },
    'i4i.24xlarge': { eni: 15, ipPerEni: 30 },
    'i4i.32xlarge': { eni: 15, ipPerEni: 50 },
    'i4i.metal': { eni: 15, ipPerEni: 50 },
    
    // I7i series
    'i7i.large': { eni: 3, ipPerEni: 10 },
    'i7i.xlarge': { eni: 4, ipPerEni: 15 },
    'i7i.2xlarge': { eni: 4, ipPerEni: 15 },
    'i7i.4xlarge': { eni: 8, ipPerEni: 30 },
    'i7i.8xlarge': { eni: 8, ipPerEni: 30 },
    'i7i.12xlarge': { eni: 8, ipPerEni: 30 },
    'i7i.16xlarge': { eni: 15, ipPerEni: 50 },
    'i7i.24xlarge': { eni: 15, ipPerEni: 50 },
    'i7i.48xlarge': { eni: 15, ipPerEni: 50 },
    'i7i.metal-24xl': { eni: 15, ipPerEni: 50 },
    'i7i.metal-48xl': { eni: 15, ipPerEni: 50 },
    
    // I7ie series
    'i7ie.large': { eni: 3, ipPerEni: 10 },
    'i7ie.xlarge': { eni: 4, ipPerEni: 15 },
    'i7ie.2xlarge': { eni: 4, ipPerEni: 15 },
    'i7ie.3xlarge': { eni: 4, ipPerEni: 15 },
    'i7ie.6xlarge': { eni: 8, ipPerEni: 30 },
    'i7ie.12xlarge': { eni: 8, ipPerEni: 50 },
    'i7ie.18xlarge': { eni: 15, ipPerEni: 50 },
    'i7ie.24xlarge': { eni: 15, ipPerEni: 50 },
    'i7ie.48xlarge': { eni: 15, ipPerEni: 50 },
    'i7ie.metal-24xl': { eni: 15, ipPerEni: 50 },
    'i7ie.metal-48xl': { eni: 15, ipPerEni: 50 },
    
    // I8g series
    'i8g.large': { eni: 3, ipPerEni: 10 },
    'i8g.xlarge': { eni: 4, ipPerEni: 15 },
    'i8g.2xlarge': { eni: 4, ipPerEni: 15 },
    'i8g.4xlarge': { eni: 8, ipPerEni: 30 },
    'i8g.8xlarge': { eni: 8, ipPerEni: 30 },
    'i8g.12xlarge': { eni: 8, ipPerEni: 30 },
    'i8g.16xlarge': { eni: 15, ipPerEni: 50 },
    'i8g.24xlarge': { eni: 15, ipPerEni: 50 },
    'i8g.48xlarge': { eni: 15, ipPerEni: 50 },
    'i8g.metal-24xl': { eni: 15, ipPerEni: 50 },
    
    // Im4gn series
    'im4gn.large': { eni: 3, ipPerEni: 10 },
    'im4gn.xlarge': { eni: 4, ipPerEni: 15 },
    'im4gn.2xlarge': { eni: 4, ipPerEni: 15 },
    'im4gn.4xlarge': { eni: 8, ipPerEni: 30 },
    'im4gn.8xlarge': { eni: 8, ipPerEni: 30 },
    'im4gn.16xlarge': { eni: 15, ipPerEni: 50 },
    
    // Is4gen series
    'is4gen.medium': { eni: 2, ipPerEni: 4 },
    'is4gen.large': { eni: 3, ipPerEni: 10 },
    'is4gen.xlarge': { eni: 4, ipPerEni: 15 },
    'is4gen.2xlarge': { eni: 4, ipPerEni: 15 },
    'is4gen.4xlarge': { eni: 8, ipPerEni: 30 },
    'is4gen.8xlarge': { eni: 8, ipPerEni: 30 },
    
    // Accelerated Computing Instances
    // DL1 series (4 Network cards)
    'dl1.24xlarge': { eni: 60, ipPerEni: 50 },
    
    // DL2q series
    'dl2q.24xlarge': { eni: 15, ipPerEni: 50 },
    
    // F1 series
    'f1.2xlarge': { eni: 4, ipPerEni: 15 },
    'f1.4xlarge': { eni: 8, ipPerEni: 30 },
    'f1.16xlarge': { eni: 8, ipPerEni: 50 },
    
    // F2 series
    'f2.6xlarge': { eni: 8, ipPerEni: 30 },
    'f2.12xlarge': { eni: 8, ipPerEni: 30 },
    'f2.48xlarge': { eni: 15, ipPerEni: 50 },
    
    // G4ad series
    'g4ad.xlarge': { eni: 2, ipPerEni: 4 },
    'g4ad.2xlarge': { eni: 2, ipPerEni: 4 },
    'g4ad.4xlarge': { eni: 3, ipPerEni: 10 },
    'g4ad.8xlarge': { eni: 4, ipPerEni: 15 },
    'g4ad.16xlarge': { eni: 8, ipPerEni: 30 },
    
    // G4dn series
    'g4dn.xlarge': { eni: 3, ipPerEni: 10 },
    'g4dn.2xlarge': { eni: 3, ipPerEni: 10 },
    'g4dn.4xlarge': { eni: 3, ipPerEni: 10 },
    'g4dn.8xlarge': { eni: 4, ipPerEni: 15 },
    'g4dn.12xlarge': { eni: 8, ipPerEni: 30 },
    'g4dn.16xlarge': { eni: 4, ipPerEni: 15 },
    'g4dn.metal': { eni: 15, ipPerEni: 50 },
    
    // G5 series
    'g5.xlarge': { eni: 4, ipPerEni: 15 },
    'g5.2xlarge': { eni: 4, ipPerEni: 15 },
    'g5.4xlarge': { eni: 8, ipPerEni: 30 },
    'g5.8xlarge': { eni: 8, ipPerEni: 30 },
    'g5.12xlarge': { eni: 15, ipPerEni: 50 },
    'g5.16xlarge': { eni: 8, ipPerEni: 30 },
    'g5.24xlarge': { eni: 15, ipPerEni: 50 },
    'g5.48xlarge': { eni: 7, ipPerEni: 50 },
    
    // G5g series
    'g5g.xlarge': { eni: 4, ipPerEni: 15 },
    'g5g.2xlarge': { eni: 4, ipPerEni: 15 },
    'g5g.4xlarge': { eni: 8, ipPerEni: 30 },
    'g5g.8xlarge': { eni: 8, ipPerEni: 30 },
    'g5g.16xlarge': { eni: 15, ipPerEni: 50 },
    'g5g.metal': { eni: 15, ipPerEni: 50 },
    
    // G6 series
    'g6.xlarge': { eni: 4, ipPerEni: 15 },
    'g6.2xlarge': { eni: 4, ipPerEni: 15 },
    'g6.4xlarge': { eni: 8, ipPerEni: 30 },
    'g6.8xlarge': { eni: 8, ipPerEni: 30 },
    'g6.12xlarge': { eni: 8, ipPerEni: 30 },
    'g6.16xlarge': { eni: 15, ipPerEni: 50 },
    'g6.24xlarge': { eni: 15, ipPerEni: 50 },
    'g6.48xlarge': { eni: 15, ipPerEni: 50 },
    
    // G6e series (special networking)
    'g6e.xlarge': { eni: 4, ipPerEni: 15 },
    'g6e.2xlarge': { eni: 4, ipPerEni: 15 },
    'g6e.4xlarge': { eni: 8, ipPerEni: 30 },
    'g6e.8xlarge': { eni: 8, ipPerEni: 30 },
    'g6e.12xlarge': { eni: 10, ipPerEni: 30 },
    'g6e.16xlarge': { eni: 15, ipPerEni: 50 },
    'g6e.24xlarge': { eni: 20, ipPerEni: 50 },
    'g6e.48xlarge': { eni: 40, ipPerEni: 50 },
    
    // Gr6 series
    'gr6.4xlarge': { eni: 8, ipPerEni: 30 },
    'gr6.8xlarge': { eni: 8, ipPerEni: 30 },
    
    // Inf1 series
    'inf1.xlarge': { eni: 4, ipPerEni: 10 },
    'inf1.2xlarge': { eni: 4, ipPerEni: 10 },
    'inf1.6xlarge': { eni: 8, ipPerEni: 30 },
    'inf1.24xlarge': { eni: 11, ipPerEni: 30 },
    
    // Inf2 series
    'inf2.xlarge': { eni: 4, ipPerEni: 15 },
    'inf2.8xlarge': { eni: 8, ipPerEni: 30 },
    'inf2.24xlarge': { eni: 15, ipPerEni: 50 },
    'inf2.48xlarge': { eni: 15, ipPerEni: 50 },
    
    // P3 series
    'p3.2xlarge': { eni: 4, ipPerEni: 15 },
    'p3.8xlarge': { eni: 8, ipPerEni: 30 },
    'p3.16xlarge': { eni: 8, ipPerEni: 30 },
    
    // P3dn series
    'p3dn.24xlarge': { eni: 15, ipPerEni: 50 },
    
    // P4d series (4 Network cards)
    'p4d.24xlarge': { eni: 60, ipPerEni: 50 },
    
    // P4de series (4 Network cards)
    'p4de.24xlarge': { eni: 60, ipPerEni: 50 },
    
    // P5 series (32 Network cards)
    'p5.48xlarge': { eni: 64, ipPerEni: 50 },
    
    // P5e series (32 Network cards)
    'p5e.48xlarge': { eni: 64, ipPerEni: 50 },
    
    // P5en series (16 Network cards)
    'p5en.48xlarge': { eni: 64, ipPerEni: 50 },
    
    // P6-B200 series (8 Network cards)
    'p6-b200.48xlarge': { eni: 32, ipPerEni: 50 },
    
    // Trn1 series
    'trn1.2xlarge': { eni: 4, ipPerEni: 15 },
    'trn1.32xlarge': { eni: 40, ipPerEni: 50 },
    
    // Trn1n series (16 Network cards)
    'trn1n.32xlarge': { eni: 80, ipPerEni: 50 },
    
    // Trn2 series (16 Network cards)
    'trn2.48xlarge': { eni: 32, ipPerEni: 50 },
    
    // Trn2u series (16 Network cards)
    'trn2u.48xlarge': { eni: 32, ipPerEni: 50 },
    
    // VT1 series
    'vt1.3xlarge': { eni: 4, ipPerEni: 15 },
    'vt1.6xlarge': { eni: 8, ipPerEni: 30 },
    'vt1.24xlarge': { eni: 15, ipPerEni: 50 },
    
    // High Performance Computing Instances
    // Hpc6a series
    'hpc6a.48xlarge': { eni: 2, ipPerEni: 50 },
    
    // Hpc6id series (2 Network cards)
    'hpc6id.32xlarge': { eni: 2, ipPerEni: 50 },
    
    // Hpc7a series (2 Network cards)
    'hpc7a.12xlarge': { eni: 4, ipPerEni: 50 },
    'hpc7a.24xlarge': { eni: 4, ipPerEni: 50 },
    'hpc7a.48xlarge': { eni: 4, ipPerEni: 50 },
    'hpc7a.96xlarge': { eni: 4, ipPerEni: 50 },
    
    // Hpc7g series
    'hpc7g.4xlarge': { eni: 4, ipPerEni: 50 },
    'hpc7g.8xlarge': { eni: 4, ipPerEni: 50 },
    'hpc7g.16xlarge': { eni: 4, ipPerEni: 50 }
};

// DOM 요소들
const instanceInput = document.getElementById('instanceInput');
const searchBtn = document.getElementById('searchBtn');
const suggestionsDiv = document.getElementById('suggestions');
const resultsSection = document.getElementById('resultsSection');
const resultsTableBody = document.getElementById('resultsTableBody');
const savedList = document.getElementById('savedList');
const clearBtn = document.getElementById('clearBtn');
const copyBtn = document.getElementById('copyBtn');

// 선택된 인스턴스들을 저장할 배열
let selectedInstances = [];

// 파드 수 계산 함수
function calculateMaxPods(eni, ipPerEni) {
    return (eni * (ipPerEni - 1)) + 2;
}

// 검색 결과 표시 함수
function displayResults(instances) {
    resultsTableBody.innerHTML = '';
    
    instances.forEach(instance => {
        const row = document.createElement('tr');
        const data = instanceData[instance];
        const maxPods = calculateMaxPods(data.eni, data.ipPerEni);
        
        // 체크박스 상태 확인
        const isSelected = selectedInstances.some(selected => selected.name === instance);
        
        row.innerHTML = `
            <td><strong>${instance}</strong></td>
            <td><span style="color: #667eea; font-weight: 600;">${maxPods}</span></td>
            <td>${data.eni}</td>
            <td>${data.ipPerEni}</td>
            <td class="select-cell ${isSelected ? 'selected' : ''}" 
                data-instance='${JSON.stringify({name: instance, maxPods, eni: data.eni, ipPerEni: data.ipPerEni})}'>
                <span class="select-icon">${isSelected ? '☑' : '☐'}</span>
            </td>
        `;
        
        resultsTableBody.appendChild(row);
    });
    
    // 셀 클릭 이벤트 리스너 추가
    attachCellClickListeners();
    
    resultsSection.style.display = 'block';
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// 자동완성 기능
function showSuggestions(query) {
    if (!query) {
        suggestionsDiv.style.display = 'none';
        return;
    }
    
    const filtered = Object.keys(instanceData)
        .filter(instance => instance.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 8);
    
    if (filtered.length === 0) {
        suggestionsDiv.style.display = 'none';
        return;
    }
    
    suggestionsDiv.innerHTML = filtered
        .map(instance => `
            <div class="suggestion-item" data-instance="${instance}">
                <strong>${instance}</strong>
                                 <span style="color: #666; margin-left: 8px;">
                     (Max ${calculateMaxPods(instanceData[instance].eni, instanceData[instance].ipPerEni)} pods)
                 </span>
            </div>
        `)
        .join('');
    
    suggestionsDiv.style.display = 'block';
    
    // 자동완성 항목 클릭 이벤트
    suggestionsDiv.querySelectorAll('.suggestion-item').forEach(item => {
        item.addEventListener('click', () => {
            const instance = item.dataset.instance;
            instanceInput.value = instance;
            suggestionsDiv.style.display = 'none';
            performSearch();
        });
    });
}

// 검색 실행 함수
function performSearch() {
    const query = instanceInput.value.trim().toLowerCase();
    
         if (!query) {
         alert('Please enter an instance type.');
         return;
     }
    
    // 정확한 매치 찾기
    const exactMatch = Object.keys(instanceData).find(
        instance => instance.toLowerCase() === query
    );
    
    if (exactMatch) {
        displayResults([exactMatch]);
        return;
    }
    
    // 부분 매치 찾기
    const partialMatches = Object.keys(instanceData)
        .filter(instance => instance.toLowerCase().includes(query))
        .slice(0, 10);
    
    if (partialMatches.length > 0) {
        displayResults(partialMatches);
         } else {
         alert('Instance type not found. Try: m5.large, c5.xlarge');
     }
}

// 이벤트 리스너들
instanceInput.addEventListener('input', (e) => {
    showSuggestions(e.target.value);
});

instanceInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        suggestionsDiv.style.display = 'none';
        performSearch();
    } else if (e.key === 'Escape') {
        suggestionsDiv.style.display = 'none';
    }
});

searchBtn.addEventListener('click', () => {
    suggestionsDiv.style.display = 'none';
    performSearch();
});

// 외부 클릭 시 자동완성 숨기기
document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-section')) {
        suggestionsDiv.style.display = 'none';
    }
});

// 셀 클릭 이벤트 리스너 연결
function attachCellClickListeners() {
    const selectCells = document.querySelectorAll('.select-cell');
    selectCells.forEach(cell => {
        cell.addEventListener('click', handleCellClick);
    });
}

// 셀 클릭 이벤트 처리
function handleCellClick(event) {
    const cell = event.currentTarget;
    const instanceData = JSON.parse(cell.dataset.instance);
    const isCurrentlySelected = cell.classList.contains('selected');
    
    if (isCurrentlySelected) {
        // 선택 해제
        cell.classList.remove('selected');
        cell.querySelector('.select-icon').textContent = '☐';
        selectedInstances = selectedInstances.filter(item => item.name !== instanceData.name);
    } else {
        // 선택
        cell.classList.add('selected');
        cell.querySelector('.select-icon').textContent = '☑';
        // 중복 체크 방지
        if (!selectedInstances.some(item => item.name === instanceData.name)) {
            selectedInstances.push(instanceData);
        }
    }
    
    updateSavedList();
}

// 선택된 항목 목록 업데이트
function updateSavedList() {
    const noItemsMsg = savedList.querySelector('.no-items');
    
    if (selectedInstances.length === 0) {
        savedList.innerHTML = '<p class="no-items">No instances selected</p>';
        return;
    }
    
    if (noItemsMsg) {
        noItemsMsg.remove();
    }
    
    savedList.innerHTML = selectedInstances
        .map(instance => `
            <div class="saved-item" data-name="${instance.name}">
                <span class="item-content">${instance.name}\t${instance.maxPods}</span>
                <span class="remove-indicator">×</span>
            </div>
        `)
        .join('');
    
    // 개별 삭제 클릭 이벤트 리스너 추가
    savedList.querySelectorAll('.saved-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const instanceName = e.currentTarget.dataset.name;
            removeSelectedInstance(instanceName);
        });
    });
}

// 선택된 인스턴스 개별 삭제
function removeSelectedInstance(instanceName) {
    selectedInstances = selectedInstances.filter(item => item.name !== instanceName);
    updateSavedList();
    
    // 테이블의 셀 상태도 해제
    const cell = document.querySelector(`td[data-instance*='"name":"${instanceName}"']`);
    if (cell) {
        cell.classList.remove('selected');
        const icon = cell.querySelector('.select-icon');
        if (icon) {
            icon.textContent = '☐';
        }
    }
}

// 모든 선택 항목 삭제
function clearAllSelected() {
    selectedInstances = [];
    updateSavedList();
    
    // 모든 셀 상태 해제
    const selectCells = document.querySelectorAll('.select-cell');
    selectCells.forEach(cell => {
        cell.classList.remove('selected');
        const icon = cell.querySelector('.select-icon');
        if (icon) {
            icon.textContent = '☐';
        }
    });
}

// 클립보드로 모든 선택 항목 복사
async function copyAllSelected() {
    if (selectedInstances.length === 0) {
        alert('No instances selected to copy.');
        return;
    }
    
    const textToCopy = selectedInstances
        .map(instance => `${instance.name}\t${instance.maxPods}`)
        .join('\n');
    
    try {
        await navigator.clipboard.writeText(textToCopy);
        
        // 버튼 텍스트를 일시적으로 변경하여 피드백 제공
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        copyBtn.style.background = 'rgba(34, 197, 94, 0.4)';
        
        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.style.background = 'rgba(102, 126, 234, 0.3)';
        }, 1500);
        
    } catch (err) {
        console.error('Failed to copy to clipboard:', err);
        alert('Failed to copy to clipboard. Please try again.');
    }
}

// Clear All 버튼 이벤트 리스너
clearBtn.addEventListener('click', clearAllSelected);

// Copy All 버튼 이벤트 리스너
copyBtn.addEventListener('click', copyAllSelected);

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
    instanceInput.focus();
    
         // Initialize with test data
     console.log('AWS EKS Max Pods Calculator loaded');
     console.log('Available instance types:', Object.keys(instanceData).length);
}); 