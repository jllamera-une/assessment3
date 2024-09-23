import React from "react";
import PostAuthor from "../components/PostAuthor";
import Thumbnail from "../images/blog101.jpg";
import { Link } from "react-router-dom";

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <h1>This is the post title</h1>
        <div className="post-detail__header">
          <PostAuthor />
          <div className="post-detail__buttons">
            <Link to={`/posts/werwer/edit`} className="btn sm primary">
              Edit
            </Link>
            <Link to={`/posts/werwer/delete`} className="btn sm danger">
              Delete
            </Link>
          </div>
        </div>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quibusdam
          reprehenderit iusto adipisci, inventore quae excepturi natus
          perferendis numquam laboriosam ipsum rerum modi culpa doloribus? Ipsum
          recusandae illum placeat quaerat possimus, culpa assumenda sunt ea
          amet cupiditate! Maiores, repellat minus.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam natus
          ipsum assumenda odit rem eos tenetur, quos error ratione dolore fuga
          qui blanditiis ex numquam ab non magni. Ipsum eveniet, nostrum vel
          esse fugit molestiae nesciunt vitae animi eligendi voluptatum
          provident placeat odit porro ratione sunt, labore dolorum eius,
          molestias asperiores. Excepturi porro illum voluptates!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
          officiis ipsam neque. Repellendus ratione similique blanditiis
          corporis hic. Aliquam quos asperiores illo odit quas quod recusandae
          labore molestiae aspernatur optio, at animi ipsa velit voluptatibus
          repellat ab est deleniti vero excepturi, iusto iure nobis nulla! Sunt
          dolores, iste similique, recusandae ducimus ad totam soluta,
          exercitationem architecto possimus fugit commodi dicta assumenda
          nostrum pariatur culpa explicabo maiores dignissimos beatae. Mollitia
          culpa nisi libero aspernatur amet nesciunt distinctio doloremque dolor
          debitis unde, reprehenderit reiciendis, ullam omnis sed, commodi eum
          perferendis. Neque ratione laudantium sunt cum autem sed unde error
          amet eligendi excepturi, nemo deserunt voluptatibus vero, nostrum
          eveniet quas facere dicta aspernatur!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          dolore, sit aspernatur cupiditate quisquam aliquid expedita officiis
          illo ex impedit quis veniam mollitia quae distinctio ipsa eaque
          explicabo dignissimos sunt magni ab recusandae aut magnam error quia.
          Odio, autem sapiente neque earum exercitationem blanditiis, iusto unde
          optio et odit dignissimos perferendis vitae dolore delectus ipsa quo
          ut, minus quaerat! Voluptate, sint? Porro doloremque ipsam vitae quod
          nam earum deleniti dolores optio aut beatae cupiditate veniam tenetur
          consectetur voluptatem exercitationem modi, placeat itaque labore
          quasi libero? Debitis placeat obcaecati amet rem dignissimos maxime
          totam eligendi facere incidunt iusto ratione omnis aspernatur mollitia
          aliquam, quae, nostrum fugit vitae itaque. Officiis ducimus, modi
          fugiat repudiandae, corrupti repellendus non sapiente, suscipit nihil
          maxime soluta.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore animi
          labore esse expedita aliquid, ducimus in. Saepe in quae dolore ducimus
          similique hic nemo, repellat, fugit voluptatum id dolores possimus
          corrupti magni nobis delectus corporis ut molestiae dolorem autem
          commodi reiciendis reprehenderit ipsam. Eveniet eius mollitia eum
          consequatur architecto doloribus consectetur, dolor ipsam harum
          accusantium. In molestias voluptate cum autem inventore! Ab itaque
          adipisci dolore placeat saepe sed nam impedit! Mollitia amet impedit
          similique quaerat voluptas, enim dolore tempore? Dicta fugiat magni ad
          in, reiciendis voluptatum animi itaque possimus eos dolores, neque
          omnis facilis ducimus dignissimos. Iusto esse excepturi impedit
          quaerat repellat, nisi cumque tenetur quam, quidem, fugit doloribus
          ducimus architecto saepe voluptate harum sed beatae reprehenderit!
          Dignissimos, asperiores officia animi vitae nulla deleniti enim fuga
          magni! Enim, recusandae quae, amet id adipisci velit corrupti illum
          iste, tenetur dolores similique quisquam esse a consequatur quis.
          Omnis vitae consectetur, ex ad in exercitationem perferendis est
          quidem consequatur libero, porro illum repellat ratione eum nisi
          suscipit, dolorum provident doloremque ipsa fugit ut similique veniam
          eius. Maxime, ipsa accusantium! Officia laborum dolores dolorum rem,
          possimus eius animi labore itaque fugit ex corporis quis hic
          exercitationem rerum laboriosam amet, maiores aliquid in explicabo
          delectus?
        </p>
      </div>
    </section>
  );
};

export default PostDetail;
