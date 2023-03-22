import { useGlobalContext } from '../../appContext';

function Home() {
    const { response } = useGlobalContext();
    console.log('data for home page: ', response);

    return (
        <div className='home'>
            {/* This is the announcement banner:
      //TODO: 1. the link is clickable to a page called "Opportunities" which may need to be dynamically populated as hiring opportunities can change over time
      //TODO: 2. needs styling
       */}
            <div className='announcement'>
                <a href='http://trybut.fail/dsl/opportunities'>
                    The Lab is looking for a new Director of Cliff Services.
                    More →
                </a>
            </div>
            <div className='wrapper home-body'>
                <h2>Home</h2>
                <p>
                    <div
                        className='test-container'
                        style={{ 'margin-left': '30px' }}
                    >
                        <h1>testing h1</h1>
                        <h2>testing h2</h2>
                        <h3>testing h3</h3>
                        <h4 className='bold-18'>testing bold18</h4>
                        <h4 className='semi-18'>testing semi18</h4>
                        <p>-----------------------------------</p>

                        <h4 className='bold-16'>testing bold16</h4>
                        <h4 className='medium-16'>testing medium16</h4>
                        <h4 className='regular-16'>testing regular16</h4>
                        <p>-----------------------------------</p>

                        <h4 className='semi-14'>testing semi14</h4>
                        <h4 className='medium-14'>testing medium14</h4>
                        <h4 className='regular-14'>testing regular14</h4>

                        <p>-----------------------------------</p>

                        <p className='regular-caps'>testing regular-caps</p>
                        <p className='bold-caps'>testing bold-caps</p>
                    </div>

                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas justo nunc, ornare eget rutrum at, tristique ut
                        nibh. Phasellus in lobortis justo. Suspendisse ac dui
                        sit amet elit porttitor elementum. Nulla a tincidunt
                        arcu. Curabitur molestie lectus vestibulum, posuere nunc
                        eu, iaculis ligula. Aenean quis odio pellentesque,
                        faucibus massa nec, pretium dui. Curabitur id quam ut
                        nibh convallis mollis. Nunc accumsan tempor sapien ac
                        consectetur. Donec pulvinar ultricies lectus, sed
                        euismod ex consectetur et. Nullam rhoncus risus eros, a
                        dignissim risus fringilla sed. Fusce semper ac sapien a
                        pulvinar.
                    </span>
                    <span>
                        Vestibulum placerat sapien ut dolor convallis ornare.
                        Vivamus volutpat ligula non metus tempus, nec aliquam
                        arcu imperdiet. Sed vel lacus eget ipsum venenatis
                        finibus et vel lectus. Phasellus posuere hendrerit
                        rhoncus. Integer vel sapien et felis fringilla hendrerit
                        vel ac dui. Aenean eu elit et arcu sagittis pellentesque
                        et eu est. Nulla sagittis venenatis eros. Curabitur ac
                        turpis rutrum sapien iaculis eleifend a sed justo. Sed
                        iaculis facilisis mattis. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Curabitur et pulvinar
                        velit, ut tincidunt mi. In quis risus eros. Nulla vel
                        varius sapien. Quisque eu augue vitae magna hendrerit
                        commodo. In pretium dui nec elit hendrerit tincidunt.
                    </span>
                    <span className='empty-box'></span>
                </p>
                <h6>Made possible with funding from:</h6>
                {/* This is the "funded by" section
        //TODO: 1. this will likely be statically coded for now but may need to switch to clickable icons; buttons need to be replaced by anchors/Links
        //TODO: 2. style: icons will be flexed
        */}
                <div className='funding-logos'>
                    <button>🐶</button>
                    <button>😺</button>
                    <button>🦝</button>
                    <button>🐼</button>
                    <button>🐻</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
