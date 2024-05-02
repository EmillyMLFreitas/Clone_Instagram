import './Feed.css';

import Post from './Post/Post';

export default function Feed() {
    return (
        <div className="Feed">
            <Post
                imgUser="https://avatars.githubusercontent.com/u/48858978?v=4"
                title="emillyfreitass29"
                hour="5h"
                imgSrc="https://avatars.githubusercontent.com/u/48858978?v=4"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc." />

            <Post
                imgUser="https://avatars.githubusercontent.com/u/48858978?v=4"
                title="maria12"
                hour="10h"
                imgSrc="https://avatars.githubusercontent.com/u/48858978?v=4"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc." />

            <Post
                imgUser="https://avatars.githubusercontent.com/u/48858978?v=4"
                title="maria12"
                hour="1d"
                imgSrc="https://avatars.githubusercontent.com/u/48858978?v=4"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc." />

        </div>
    )
}