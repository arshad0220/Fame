import React from 'react';
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';

const SearchBar = () => {
  return (
    <div className="relative mt-4 flex flex-col px-4 md:mt-6">
      <div className="block">
        <div className="relative">
          <Form className="block w-full">
            <div className="border-input-new-home relative mx-[-5px] flex items-center p-[5px] md:left-[-10px] md:mx-0 md:p-[10px]">
              <div className="flex w-full items-center justify-between rounded-full bg-white py-3 md:py-0">
                <div className="border-r border-new-tiktok-bright-gray pl-3 pr-2 md:pr-4 md:pl-8">
                  <img
                    alt=""
                    src="/images/landing/new-home/tiktok-icon.svg"
                    width="32"
                    height="32"
                    decoding="async"
                    data-nimg="1"
                    className="h-6 w-6 md:h-8 md:w-8"
                    loading="lazy"
                    style={{ color: 'transparent' }}
                  />
                </div>
                <InputGroup className="mr-3 h-8 w-full rounded-lg-10 py-3 pl-2 text-left text-sm text-blue-sapphire">
                  <FormControl
                    placeholder="Enter your TikTok username here..."
                    aria-label="cost-input"
                    value=""
                  />
                  <Button
                    variant="gradient-tiktok-new-home"
                    type="submit"
                    className="rounded-r-full text-white"
                  >
                    <div className="flex px-4 text-xl font-semibold">
                      <div className="mr-10px flex items-center">
                        <img
                          alt=""
                          src="/images/icons/notify.svg"
                          width="20"
                          height="20"
                          decoding="async"
                          data-nimg="1"
                          loading="lazy"
                          style={{ color: 'transparent' }}
                        />
                      </div>
                      <span>Grow My Tiktok</span>
                    </div>
                  </Button>
                </InputGroup>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

