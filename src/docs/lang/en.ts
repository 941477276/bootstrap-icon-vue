export default {
  version: 'Version',
  usage: 'Usage',
  nav: {
    home: 'Home',
    customized: 'Customized Icon'
  },
  home: {
    jumbotronTitle: 'Bootstrap icon vue3 component library!',
    lead: 'A free and open-source icon component library for Bootstrap icons based on {vue3}, all icons are from {twbsIcons}',
    bootstrapOfficialIcon: 'Bootstrap official icon library',
    beforeUseTip: 'To use the icon component, you need to install the {bsVueIcon2} icon component package:',
    lastestVersion: 'The latest version:',
    githubStorage: 'Github source code repository',
    usageTip: 'Every icon in {bsVueIcon} is a component, so you need to export it from the {bsVueIcon} library.',
    comment1: 'It is not recommended to import in this way, because there are thousands of icon components in the library, that is, thousands of modules, and webpack will take these during development',
    comment2: 'Thousands of modules are loaded in, which will slow down the hot update of webpack',
    iconNameIsTheComponentName: 'The icon component name is also the component file name',
    iconList: 'icon list',
    outlinedStyle: 'wireframe style',
    filledStyle: 'fill style',
    searchIconInputPlaceholder: 'Enter icon name to search',
    iconCopySuccess: 'Icon name copied to clipboard!',
    iconCopyFailed: 'Icon copy failed!',
    componentApiHeader: 'Component props',
    colParam: 'parameter',
    colExplain: 'explanation',
    colValueType: 'type',
    colDefault: 'Defaults',
    iconWidth: 'icon width',
    iconHeight: 'icon height',
    iconFillColor: 'Icon fill color',
    iconViewBoxDesc: 'The viewBox attribute of svg is read from svg by default, if it cannot be read, use "<code>0 0 1024 1024</code>"',
    iconAriaHidden: 'ariaHidden attribute value',
    iconFocusable: 'focusable attribute value'
  },
  customized: {
    customizedIconLead: '{bsIconVue} provides 2 ways to implement custom icons:',
    custmizeWay1: 'Use the {bsicon} component provided by vue3-bootstrap-icon',
    custmizeWay2: 'Use the generation tool provided by vue3-bootstrap-icon',
    usageGuide1Title: 'Use the {bsicon} component to create custom icons',
    importBsIcon: 'import BsIcon',
    importHtml2vDom: 'Import html string to virtual dom tool function',
    defineSvgContent: 'define svg content',
    svgHtml2VDom: 'Convert svg html string to virtual dom',
    iconName: 'icon name',
    isFilledIcon: 'Whether the icon is filled type',
    svgChildrenVDom: 'svg children',
    usageGuide2Title: 'Use the vue3-bootstrap-icon generation tool to generate custom icons',
    supposeProjectDirStructure: 'Suppose our project directory structure is like this:',
    createGenerateIconJsFile: 'Then we need to create a {jsFileName} in the root directory of the project (the name of the js file is random)',
    importGenerateTool: 'import generate tools',
    generateSingle: 'single generate',
    svgFilePath: 'svg file path',
    outfile: 'Icon file output path',
    outdir1: 'Icon file output directory, choose one of outdir and outfile',
    componentNamePrefix: 'component name prefix',
    isTs: 'output ts file',
    customAttr: 'Custom properties added to the icon component',
    batchGenerate: 'batch generate',
    svgDir: 'The directory where the svg is stored',
    outdir2: 'Icon file output directory',
    ignoreFunction: 'File names to exclude',
    keepDirStructure: 'Preserve the directory structure in the original svg file when outputting the icon file',
    runCommand: 'Next, you can run the command in the command line tool: {command}. After the command is executed, three component files ending with {fileExt} will be generated in the {iconsDir} directory. Each component has a default export and a named export. The name of the named export is the name of the component file:',
    useComponent: 'Then you can import the component like this:'
  }
};
