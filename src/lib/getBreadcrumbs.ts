type Breadcrumb = {
  title: string
  href?: string
}

export const getBreadcrumbs = (path: string): Breadcrumb[] => {
  const crumbs: Breadcrumb[] = [] 
  path.split('/').forEach(node => {
    switch(node) {
      case 'blog': crumbs.push({ title: 'Blog', href: '/blog' })
    }
  });


  return crumbs
}