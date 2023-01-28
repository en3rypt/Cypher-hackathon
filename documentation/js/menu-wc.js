'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">cyd-hack-backened-2023 documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-25a663e32f255bc06dc1f065f8e1918530971dd25196eaebeb3c48959b378a6870ed2b0c1c82b4f8668a15da17bf8579ef5b3912d09d9ba74542e191baf7fffc"' : 'data-target="#xs-controllers-links-module-AppModule-25a663e32f255bc06dc1f065f8e1918530971dd25196eaebeb3c48959b378a6870ed2b0c1c82b4f8668a15da17bf8579ef5b3912d09d9ba74542e191baf7fffc"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-25a663e32f255bc06dc1f065f8e1918530971dd25196eaebeb3c48959b378a6870ed2b0c1c82b4f8668a15da17bf8579ef5b3912d09d9ba74542e191baf7fffc"' :
                                            'id="xs-controllers-links-module-AppModule-25a663e32f255bc06dc1f065f8e1918530971dd25196eaebeb3c48959b378a6870ed2b0c1c82b4f8668a15da17bf8579ef5b3912d09d9ba74542e191baf7fffc"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-25a663e32f255bc06dc1f065f8e1918530971dd25196eaebeb3c48959b378a6870ed2b0c1c82b4f8668a15da17bf8579ef5b3912d09d9ba74542e191baf7fffc"' : 'data-target="#xs-injectables-links-module-AppModule-25a663e32f255bc06dc1f065f8e1918530971dd25196eaebeb3c48959b378a6870ed2b0c1c82b4f8668a15da17bf8579ef5b3912d09d9ba74542e191baf7fffc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-25a663e32f255bc06dc1f065f8e1918530971dd25196eaebeb3c48959b378a6870ed2b0c1c82b4f8668a15da17bf8579ef5b3912d09d9ba74542e191baf7fffc"' :
                                        'id="xs-injectables-links-module-AppModule-25a663e32f255bc06dc1f065f8e1918530971dd25196eaebeb3c48959b378a6870ed2b0c1c82b4f8668a15da17bf8579ef5b3912d09d9ba74542e191baf7fffc"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BalancesModule.html" data-type="entity-link" >BalancesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-BalancesModule-72d86f2d15ab696c3c160c482f7aa45a75ac66b3dc22c136ca268da09d797b73aaeb5deab4b4620ba89c904844dc8f1fde94c3f8499eb433d10e950d272b9a56"' : 'data-target="#xs-controllers-links-module-BalancesModule-72d86f2d15ab696c3c160c482f7aa45a75ac66b3dc22c136ca268da09d797b73aaeb5deab4b4620ba89c904844dc8f1fde94c3f8499eb433d10e950d272b9a56"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BalancesModule-72d86f2d15ab696c3c160c482f7aa45a75ac66b3dc22c136ca268da09d797b73aaeb5deab4b4620ba89c904844dc8f1fde94c3f8499eb433d10e950d272b9a56"' :
                                            'id="xs-controllers-links-module-BalancesModule-72d86f2d15ab696c3c160c482f7aa45a75ac66b3dc22c136ca268da09d797b73aaeb5deab4b4620ba89c904844dc8f1fde94c3f8499eb433d10e950d272b9a56"' }>
                                            <li class="link">
                                                <a href="controllers/BalancesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BalancesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-BalancesModule-72d86f2d15ab696c3c160c482f7aa45a75ac66b3dc22c136ca268da09d797b73aaeb5deab4b4620ba89c904844dc8f1fde94c3f8499eb433d10e950d272b9a56"' : 'data-target="#xs-injectables-links-module-BalancesModule-72d86f2d15ab696c3c160c482f7aa45a75ac66b3dc22c136ca268da09d797b73aaeb5deab4b4620ba89c904844dc8f1fde94c3f8499eb433d10e950d272b9a56"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BalancesModule-72d86f2d15ab696c3c160c482f7aa45a75ac66b3dc22c136ca268da09d797b73aaeb5deab4b4620ba89c904844dc8f1fde94c3f8499eb433d10e950d272b9a56"' :
                                        'id="xs-injectables-links-module-BalancesModule-72d86f2d15ab696c3c160c482f7aa45a75ac66b3dc22c136ca268da09d797b73aaeb5deab4b4620ba89c904844dc8f1fde94c3f8499eb433d10e950d272b9a56"' }>
                                        <li class="link">
                                            <a href="injectables/BalancesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BalancesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SharedModule-07bcb39fdd56f82d9392ada8c59b2f51805961005bb1cf48d02480233393380c108187f6fcc3e6bbb3bd8e8962aa618280d714ee7e0656cc83cf6f76d8c48692"' : 'data-target="#xs-injectables-links-module-SharedModule-07bcb39fdd56f82d9392ada8c59b2f51805961005bb1cf48d02480233393380c108187f6fcc3e6bbb3bd8e8962aa618280d714ee7e0656cc83cf6f76d8c48692"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SharedModule-07bcb39fdd56f82d9392ada8c59b2f51805961005bb1cf48d02480233393380c108187f6fcc3e6bbb3bd8e8962aa618280d714ee7e0656cc83cf6f76d8c48692"' :
                                        'id="xs-injectables-links-module-SharedModule-07bcb39fdd56f82d9392ada8c59b2f51805961005bb1cf48d02480233393380c108187f6fcc3e6bbb3bd8e8962aa618280d714ee7e0656cc83cf6f76d8c48692"' }>
                                        <li class="link">
                                            <a href="injectables/DbService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DbService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/WatchlistModule.html" data-type="entity-link" >WatchlistModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-WatchlistModule-e8ece530637a81e948511465bcc2729431b5641657492ac335a835e130f87df7f905004907074ef154c36c39f1a0419b472f1ecdd1f00376023fbce2f1b18b84"' : 'data-target="#xs-controllers-links-module-WatchlistModule-e8ece530637a81e948511465bcc2729431b5641657492ac335a835e130f87df7f905004907074ef154c36c39f1a0419b472f1ecdd1f00376023fbce2f1b18b84"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-WatchlistModule-e8ece530637a81e948511465bcc2729431b5641657492ac335a835e130f87df7f905004907074ef154c36c39f1a0419b472f1ecdd1f00376023fbce2f1b18b84"' :
                                            'id="xs-controllers-links-module-WatchlistModule-e8ece530637a81e948511465bcc2729431b5641657492ac335a835e130f87df7f905004907074ef154c36c39f1a0419b472f1ecdd1f00376023fbce2f1b18b84"' }>
                                            <li class="link">
                                                <a href="controllers/WatchlistController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WatchlistController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-WatchlistModule-e8ece530637a81e948511465bcc2729431b5641657492ac335a835e130f87df7f905004907074ef154c36c39f1a0419b472f1ecdd1f00376023fbce2f1b18b84"' : 'data-target="#xs-injectables-links-module-WatchlistModule-e8ece530637a81e948511465bcc2729431b5641657492ac335a835e130f87df7f905004907074ef154c36c39f1a0419b472f1ecdd1f00376023fbce2f1b18b84"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-WatchlistModule-e8ece530637a81e948511465bcc2729431b5641657492ac335a835e130f87df7f905004907074ef154c36c39f1a0419b472f1ecdd1f00376023fbce2f1b18b84"' :
                                        'id="xs-injectables-links-module-WatchlistModule-e8ece530637a81e948511465bcc2729431b5641657492ac335a835e130f87df7f905004907074ef154c36c39f1a0419b472f1ecdd1f00376023fbce2f1b18b84"' }>
                                        <li class="link">
                                            <a href="injectables/WatchlistService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WatchlistService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/BalancesController.html" data-type="entity-link" >BalancesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/WatchlistController.html" data-type="entity-link" >WatchlistController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateTokenDto.html" data-type="entity-link" >CreateTokenDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/createWatchlistDto.html" data-type="entity-link" >createWatchlistDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteTokenDto.html" data-type="entity-link" >DeleteTokenDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BalancesService.html" data-type="entity-link" >BalancesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DbService.html" data-type="entity-link" >DbService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WatchlistService.html" data-type="entity-link" >WatchlistService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});