import React, { FC } from "react";
import "./cast.scss";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import Img from "../../components/lazyLoadImage/Img";
import avatar from "../../constants/avatar.png"
interface CastProps {
    data: {
        id: string;
        profile_path: string;
        name: string;
        character: string;
    }[];
}
const Cast: FC<CastProps> = ({ data }) => {
    //console.log(data?.[0].profile_path,"Cast Images")
    return (
        <div className="castSection">
            <ContentWrapper>
                <div className="sectionHeading">Top Cast</div>
                <div className="listItems">
                    {data?.map((item) => {
                        let imgurl = avatar
                        return (
                            <div key={item.id} className="listItem">
                                <div className="profileImg">
                                    <Img src={imgurl} />
                                </div>
                                <div className="name">{item.name}</div>
                                <div className="character">{item.character}</div>
                            </div>
                        )
                    })}
                </div>
                
            </ContentWrapper>
        </div>
    );
};
export default Cast;