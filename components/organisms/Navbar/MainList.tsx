import { Avatar, Center, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';

export default function MainList() {
  return (
    <>
      {' '}
      {/* <div className="nav-menu">
        <div className="nav-list" id="navList">
          <a href="" className="nav-item active">
            Home
          </a>
          <a href="" className="nav-item">
            Productivity
          </a>
          <div className="nav-item">
            <button id="btnShop">
              <i
                className="bi bi-chevron-compact-down"
                style={{ color: '#8B8BA5' }}
              ></i>{' '}
              Shop
            </button>
            <div id="dropdownShop" className="dropdown-shop">
              <a href="" className="shop-item">
                <p>
                  <i className="bi bi-cart-plus"></i>
                </p>
                <p>Shop Now</p>
                <p>
                  <i className="bi bi-chevron-compact-right"></i>
                </p>
              </a>
              <a href="" className="shop-item">
                <p>
                  <i className="bi bi-stars"></i>
                </p>
                <p>Best Plant</p>
                <p>
                  <i className="bi bi-chevron-compact-right"></i>
                </p>
              </a>
              <a href="" className="shop-item">
                <p>
                  <i className="bi bi-people"></i>
                </p>
                <p>Recomendations For You</p>
                <p>
                  <i className="bi bi-chevron-compact-right"></i>
                </p>
              </a>
              <button className="shop-item" id="btnShop">
                <p>
                  <i className="bi bi-filter"></i>
                </p>
                <p>Shop Filter</p>
                <p>
                  <i className="bi bi-chevron-compact-right"></i>
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className="nav-search">
          <i
            className="bi bi-search"
            style={{ fontSize: 24, color: '#8B8BA5' }}
          ></i>
          <input type="text" placeholder="Search for anything" />
        </div>
        <div className="nav-list-button">
          <div className="btn-border">
            <button>
              <i
                className="bi bi-cart-fill"
                style={{ fontSize: 20, color: 'black' }}
              ></i>
            </button>
            <div className="btn-notification">
              <button id="btnNotification">
                <i
                  className="bi bi-bell-fill"
                  style={{ fontSize: 20, color: 'black' }}
                ></i>
              </button>
              <div id="dropdownNotification" className="dropdown-notification">
                <div className="nav-notification-header">
                  <h2>Notifications</h2>
                  <button>Settings</button>
                </div>
                <hr />
                <div className="nav-notification-content">
                  <p>No Notifications</p>
                </div>
              </div>
            </div>
            <div className="btn-profile">
              <button id="btnProfile">
                <img src="/assets/mainPoster.png" alt="" />
              </button>
              <div id="dropdownProfile" className="dropdown-profile">
                <div className="profile-card">
                  <img src="/assets/mainPoster.png" alt="" />
                  <div id="dropdownProfile" className="profile-account">
                    <p className="profile-name">Irwan Gumilar</p>
                    <p>irwan@tanemin.co.id</p>
                  </div>
                </div>
                <hr />
                <a href="">My Profile</a>
                <a href="">Cart</a>
                <a href="">Notifications</a>
                <hr />
                <a href="">Setting</a>
                <a href="">About</a>
                <hr />
                <a href="">Logout</a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <Center>
        <Wrap>
          <WrapItem>
            <Avatar
              name="Dan Abrahmov"
              size={'xl'}
              src="https://bit.ly/dan-abramov"
            />
          </WrapItem>
        </Wrap>
      </Center>
    </>
  );
}
