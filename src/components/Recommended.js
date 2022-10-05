import React, {Component} from "react";

export default class Recommended extends Component {
    render() {
        return (
            <section>
                <h2 className="font-light text-xl text-white pl-4 my-[1.3125rem]">Recommended for you</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 1440:grid-cols-4 gap-3.5 px-4">
                    <div className="h-[29.334vw] max-h-[8.75rem] md:h-[18.23vw] md:max-h-[10.875rem] rounded-lg bg-center bg-cover bg-no-repeat" style={{backgroundImage: "url('https://i0.wp.com/alexonthemap.com/wp-content/uploads/2019/02/woman-looking-at-hot-air-balloons-3278215.jpg?fit=1280%2C853&ssl=1')"}}>

                    </div>
                    <div className="h-[29.334vw] max-h-[8.75rem] md:h-[18.23vw] md:max-h-[10.875rem] rounded-lg bg-center bg-cover bg-no-repeat" style={{backgroundImage: "url('https://media.cntraveler.com/photos/59cd14cb9465da68882fb4f4/master/pass/Debate_GettyImages-585587819.jpg')"}}>

                    </div>
                    <div className="h-[29.334vw] max-h-[8.75rem] md:h-[18.23vw] md:max-h-[10.875rem] rounded-lg bg-center bg-cover bg-no-repeat" style={{backgroundImage: "url('https://media.tegna-media.com/assets/WPMT/images/b5277526-8fb4-4f17-a939-43b793a8a4db/b5277526-8fb4-4f17-a939-43b793a8a4db_1920x1080.jpg')"}}>

                    </div>
                    <div className="h-[29.334vw] max-h-[8.75rem] md:h-[18.23vw] md:max-h-[10.875rem] rounded-lg bg-center bg-cover bg-no-repeat" style={{backgroundImage: "url('https://viatravelers.com/wp-content/uploads/2020/07/travel.jpg')"}}>

                    </div>
                </div>
            </section>
        );
    }
}