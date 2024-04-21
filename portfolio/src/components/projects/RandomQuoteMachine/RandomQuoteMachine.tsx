import React, { useState } from "react";
import { Link } from "react-router-dom";
import './RandomQuoteMachine.css';

// constants - data
let quotes = [
  {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel egestas magna. Suspendisse in leo eget ipsum semper tempus id eget ante. Sed sagittis dignissim purus, id semper odio malesuada in. Sed consectetur urna lectus. Mauris sit amet diam quis magna volutpat aliquam. ',
    author: 'author1'
  },
  {
    content: 'Maecenas cursus dictum arcu vitae tincidunt. Proin sapien elit, aliquam ut urna ut, posuere rutrum sapien. Nulla facilisi. Nulla rhoncus nibh id tincidunt imperdiet. Vivamus vitae justo nec turpis dapibus scelerisque eu sed lorem. Donec pulvinar quis justo quis blandit. Phasellus a tempus leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer vitae elementum urna, id condimentum turpis.',
    author: 'author2'
  },
  {
    content: 'Mauris in laoreet massa, in aliquam est. Quisque iaculis vehicula commodo. Cras lobortis vulputate enim at dignissim. Etiam eleifend gravida tellus non vestibulum. In placerat rhoncus lacinia. Ut posuere, lectus eu ornare lacinia, massa odio porttitor felis, aliquet interdum orci felis sit amet dui. Etiam interdum ipsum eget nibh ultrices, et auctor nisl facilisis. Quisque at enim eros.',
    author: 'author3'
  },
  {
    content: 'Sed in finibus lacus. Sed non dui scelerisque est laoreet pharetra quis quis orci. In sodales, augue tempor porta gravida, neque odio tincidunt ipsum, pharetra fermentum nisi justo nec justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec eros augue. Aliquam dapibus luctus augue, ac euismod lectus mattis at. Integer venenatis est consequat tortor vehicula pretium. Nunc lectus quam, congue vel vulputate nec, sodales a justo. Phasellus a urna tincidunt, eleifend ipsum a, ullamcorper orci.',
    author: 'author4'
  },
  {
    content: 'Ut eget consequat magna. Ut efficitur euismod velit quis malesuada. Vivamus sit amet augue id diam condimentum laoreet. Pellentesque at blandit risus. Donec eget nibh elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique elit faucibus, finibus sapien eu, vestibulum mauris. ',
    author: 'author5'
  },
  {
    content: 'In venenatis commodo elit sed suscipit. Mauris consequat efficitur elit non varius. Sed quis ante lobortis, pretium mauris vel, mollis massa. Integer id elit aliquet, blandit lacus eu, dignissim magna. Proin viverra, odio quis semper mollis, elit nulla mollis diam, ut dignissim diam massa non lectus. Morbi augue metus, luctus eu sem vitae, feugiat ornare dolor. ',
    author: 'author6'
  },
  {
    content: 'Aliquam a vulputate odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla odio tortor, pulvinar quis orci non, commodo maximus orci. Cras ut cursus velit, eget suscipit ligula. In hac habitasse platea dictumst. In ac lorem ante. Aliquam eget nisi mauris.',
    author: 'author7'
  }
];

const Quote: React.FC<any> = props => {
  let figure = 'd-flex flex-column text-center';
  let blockquote = 'blockquote height-fit-content';
  let figcaption = `blockquote-footer text-end `;
  let p = `height-fit-content `;
  
  return (
    <figure className={figure}>
      <blockquote className={blockquote}>
        <p id='text' className={p + props.color}>{props.quote.content}</p>
      </blockquote>
      <figcaption id='author' className={figcaption + props.color}>
        {props.quote.author}
      </figcaption>
    </figure>
  )
};

const SocialMedia: React.FC<any> = props => {
  let twitter = `fa-brands fa-twitter `;
  let tumblr = `fa-brands fa-tumblr `;
  
  return (
    <div>
      <a href="twitter.com/intent/tweet"><i className={twitter + props.color}></i></a>
      <a href=""><i className={tumblr + props.color}></i></a>
    </div>
  )
};

const MyApp: React.FC = props => {
  let [quoteIdx, setQuoteIdx] = useState(0);
  let [colorIdx, setColorIdx] = useState(1);
  
  const handleClick = () => {
    setQuoteIdx((prev) => (prev + 1) % quotes.length);
    setColorIdx((prev) => (prev + 1) % quotes.length + 1);
  }
  
  return (
    <div className={`background container-fluid flex background-color${colorIdx}`}>
      <div id='quote-box'>
        <Quote quote={quotes[quoteIdx]} color={`text-color${colorIdx}`} />

        <div className='row'>
          <div className='col'>
            <SocialMedia color={`text-color${colorIdx}`} />
          </div>

          <div className='col'>
            <button id='new-quote' className={`background-color${colorIdx}`} onClick={handleClick}>New Quote</button>
          </div>
        </div>
      </div>
    </div>
  )
};


const RandomQuoteMachine: React.FC<any> = props => {
  return (
    <div>
      <Link to='/'>Back</Link>
      <MyApp />
    </div>
  );
}

export default RandomQuoteMachine;