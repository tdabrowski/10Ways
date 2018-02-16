import React from 'react';

class Section extends React.Component {
    render(){
        return (
            <section className="secondSection">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h3>
                                LEARN ABOUT<br/>
                                OUR FANTASTIC <br/>
                                HISTORY
                            </h3>
                        </div>
                        <div className="col-lg-6">
                            <p className="topPar">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In finibus vel augue quis fringilla. Etiam in porttitor mauris. Fusce odio arcu, bibendum posuere ante sed, laoreet condimentum diam. In nec eros id sapien iaculis dignissim.
                            </p>
                            <p className="bottomPar">
                                Donec condimentum, velit ac placerat porttitor, arcu libero sodales risus, sit amet elementum erat dolor nec turpis. Pellentesque tincidunt ante a nisi sollicitudin lobortis. Quisque accumsan imperdiet rhoncus. Integer et venenatis tellus.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export {Section};
