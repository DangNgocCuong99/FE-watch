import { useEffect, useState } from "react";
import "./index.css";

const Cart = () => {

    const [data, setData] = useState<Record<string,number>[]>([])

    useEffect(()=>{
        setData([{a:1},{a:2}]);
    },[])

  const handleMapCart = () => {
    // lay du lieu tu store
    const result = data.map((i)=>{
        console.log(i);
        return(
            <div className="ajaxcart__row">
          <div className="ajaxcart__product cart_product" data-line="1">
            <a
              href="/tissot-tradition-t063-617-36-037-00-nam-quartz-pin-mat-so-42-mm-chronograph-kinh-sapphire"
              className="ajaxcart__product-image cart_image"
              title="TISSOT TRADITION T063.617.36.037.00 – NAM – QUARTZ (PIN) – MẶT SỐ 42 MM, CHRONOGRAPH, KÍNH SAPPHIRE"
            >
              <img
                width="80"
                height="80"
                src="https://bizweb.dktcdn.net/thumb/compact/100/487/743/products/t063-617-36-037-00-699x699.png"
                alt="TISSOT TRADITION T063.617.36.037.00 – NAM – QUARTZ (PIN) – MẶT SỐ 42 MM, CHRONOGRAPH, KÍNH SAPPHIRE"
              />
            </a>
            <div className="grid__item cart_info">
              <div className="ajaxcart__product-name-wrapper cart_name">
                <a
                  href="/tissot-tradition-t063-617-36-037-00-nam-quartz-pin-mat-so-42-mm-chronograph-kinh-sapphire"
                  className="ajaxcart__product-name h4"
                  title="TISSOT TRADITION T063.617.36.037.00 – NAM – QUARTZ (PIN) – MẶT SỐ 42 MM, CHRONOGRAPH, KÍNH SAPPHIRE"
                >
                  TISSOT TRADITION T063.617.36.037.00 – NAM – QUARTZ (PIN) – MẶT
                  SỐ 42 MM, CHRONOGRAPH, KÍNH SAPPHIRE
                </a>
                <a
                  className="cart__btn-remove remove-item-cart ajaxifyCart--remove"
                  href="javascript:;"
                  data-line="1"
                >
                  Xóa
                </a>
              </div>
              <div className="grid">
                <div className="grid__item one-half cart_select cart_item_name">
                  <label className="cart_quantity">Số lượng</label>
                  <div className="ajaxcart__qty input-group-btn">
                    <button
                      type="button"
                      className="ajaxcart__qty-adjust ajaxcart__qty--minus items-count"
                      data-id=""
                      data-qty="0"
                      data-line="1"
                      aria-label="-"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      name="updates[]"
                      className="ajaxcart__qty-num number-sidebar"
                      maxLength={3}
                      value="1"
                      min="0"
                      data-id=""
                      data-line="1"
                      aria-label="quantity"
                      pattern="[0-9]*"
                    />
                    <button
                      type="button"
                      className="ajaxcart__qty-adjust ajaxcart__qty--plus items-count"
                      data-id=""
                      data-line="1"
                      data-qty="2"
                      aria-label="+"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="grid__item one-half text-right cart_prices">
                  <span className="cart-price">14.700.000₫</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
    })
    return result
  };

  return (
    <>
      <li className="header-cart block-cart">
        <a href="/cart" className="icon" title="Giỏ hàng">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 40 40"
          >
            <defs></defs>
            <g id="ic-cart">
              <path
                id="shopping-bag"
                className="cls-1"
                d="M35.91,36.17,33.24,10.75a1,1,0,0,0-1-.94h-5V8.67a6.47,6.47,0,1,0-12.93,0V9.81h-5a1.05,1.05,0,0,0-1,.94L5.52,36.17a1,1,0,0,0,.93,1.15H34.87a1,1,0,0,0,1.05-1A.41.41,0,0,0,35.91,36.17ZM16.35,8.67a4.38,4.38,0,1,1,8.75,0V9.81H16.35ZM7.73,35.24l2.45-23.33h4.07v2.3a1,1,0,0,0,1,1.09,1,1,0,0,0,1.09-1V11.91H25.1v2.3a1,1,0,0,0,1,1.09,1,1,0,0,0,1.09-1V11.91h4.07l2.45,23.33Z"
              ></path>
            </g>
          </svg>
          <span className="count count_item_pr">1</span>
        </a>
        <div className="top-cart-content">
          <div className="CartHeaderContainer">
            <form
              action="/cart"
              method="post"
              noValidate={undefined}
              className="cart ajaxcart cartheader"
            >
              <div className="ajaxcart__inner ajaxcart__inner--has-fixed-footer cart_body items">
                {handleMapCart()}
              </div>

              <div className="ajaxcart__footer ajaxcart__footer--fixed cart-footer">
                <div className="ajaxcart__subtotal">
                  <div className="cart__subtotal">
                    <div className="cart__col-6">Tổng tiền:</div>
                    <div className="text-right cart__totle">
                      <span className="total-price">14.700.000₫</span>
                    </div>
                  </div>
                </div>
                <div className="cart__btn-proceed-checkout-dt">
                  <button
                    onClick={() => {}}
                    type="button"
                    className="button btn btn-default cart__btn-proceed-checkout"
                    id="btn-proceed-checkout"
                    title="Thanh toán"
                  >
                    Thanh toán
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </li>
    </>
  );
};

export default Cart;
