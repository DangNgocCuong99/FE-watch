import { headerMenuItems } from "./dataConfig";
import { useState } from "react";

const SideBar = () => {
    const [, setReRender] = useState(false);
    const listItemsDetail=(children: unknown,open:boolean, sideBar: boolean) =>{
        if (Array.isArray(children)) {
          if (sideBar === false) {
            return children.map((item,key) => (
              <li className="leve12" key={key}>
                <a href={item.href} title={item.title}>
                  {item.content}
                </a>
              </li>
            ));
          } else {
            return open ? children.map((item,key) => (
                <li key={key}>
                  <a href={item.href} title={item.title} className="a3">
                    {item.content}
                  </a>
                </li>
              )) : null
          }
        }
      }
    
    
      const detailsNav = (children: unknown,open:boolean, sideBar: boolean)=> {
        if (Array.isArray(children)) {
          if (sideBar === false) {
            console.log('sss');
            
            return children.map((item,key) => (
              <li
                className="level1 parent item fix-navs"
                data-title={item.dataTitle}
                data-link={item.dataLink}
                key={key}
              >
                <a className="hmega" href={item.href} title={item.title}>
                  {item.content}
                </a>
                <ul className="level1">
                  {listItemsDetail(item.children,sideBar, sideBar)}
                </ul>
              </li>
            ));
          } else {
            return open ?
               children.map((item,key) => (
                <li className="current" key={key}>
                  <a className="caret-down" href={item.href} title={item.title}>
                    {item.content}
                  </a>
                  <i className="fa fa-caret-down current" onClick={()=>{item.isOpen = !item.isOpen ; setReRender((render)=>!render)
                  }}></i>
                  <ul>{listItemsDetail(item.children, item.isOpen,sideBar)}</ul>
                </li>
              )) :null;
            // }
          }
        }
      }
    
      const headerMenuElements = headerMenuItems.map((item) => {
        if (item.type === "item") {
          return (
            <li className="nav-item">
              <a href={item.href} className="a-img" title={item.title}>
                {item.title}
              </a>
            </li>
          );
        } else if (item.type === "items") {
          return (
            <li className="nav-item has-mega current">
              <a href={item.href} className="a-img caret-down" title={item.title}>
                {item.content}
              </a>
              <i className="fa fa-caret-down current" onClick={()=> {setReRender((reRender)=> !reRender);item.isOpen = !item.isOpen}}></i>
              <div className="mega-content d-lg-block d-none">
                <div className="row">
                  <div className="col-lg-9">
                    <ul className="leve10">{detailsNav(item.children,false, false)}</ul>
                  </div>
                  {/* Image */}
                  <div className="col-lg-3">
                    <a className=" image-effect" href="#" title={item.img?.title}>
                      <img
                        width={item.img?.width}
                        height={item.img?.height}
                        className="lazyload loaded"
                        src={item.img?.src}
                        data-src={item.img?.dataSrc}
                        alt={item.img?.alt}
                        data-was-processed={item.img?.dataWasProcessed}
                      />
                    </a>
                  </div>
                  {/* Image */}
                </div>
              </div>
              <div className="item_small d-lg-none d-blog">
                {detailsNav(item.children,item.isOpen!, true)}
              </div>
            </li>
          );
        }
      });
    
    return (
        <>        {headerMenuElements}</>
    )
}
export default SideBar