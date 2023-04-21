import React from 'react';
import Banner from './components/banner/Banner.js';
import Rowpost from './components/rowpost/Rowpost.js';
import {action,originals,trending,comedy,horror,RomanceMovies,Documentaries} from './Urls'
function App(){
  
    return(<>
    <Banner/>
    <Rowpost title='Netflix Originals' urls={originals}/>
    <Rowpost title='Action' urls={action}isSmall/>
    <Rowpost title='Trending' urls={trending}isSmall/>
    <Rowpost title='Comedy' urls={comedy}isSmall/>
    <Rowpost title='Horror' urls={horror}isSmall/>
    <Rowpost title='Romance Movies' urls={RomanceMovies}isSmall />
    <Rowpost title='Documentaries' urls={Documentaries}isSmall/>
    </>
    )
}
export default App;