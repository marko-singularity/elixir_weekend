import React, { useEffect } from 'react';
import Card from '../SharedComponents/MaterialUi/Card';
import SearchField from '../SharedComponents/MaterialUi/SearchField';
import FloatingButton from '../SharedComponents/MaterialUi/FloatingButton';
import '../Css/ProductsCardView.css';
import { Helmet } from 'react-helmet';
import * as applicaitonActions from '../Redux/Application/applicationActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Input from '../SharedComponents/Input/Input';
import { Grid } from '@material-ui/core';

const Products = (props) => {
  useEffect(() => {
    props.actions.onChange({ id: 'headerBackgroundColor', value: '#4891A0' });
    props.actions.onChange({ id: 'headerColor', value: '#FFFFFF' });
  }, []);
  const getProductsByName = (name) => {};
  const products = [
    {
      id: '1',
      code: 'ABC123',
      name: 'Aspirin',
      imgUrl:
        'https://www.aspirin.ba/static/media/images/products/aspirin_prod.png',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      avaliable: 'true',
      prescription_needed: 'false',
      price: 7,
      quantity: 50,
      measurment_unit: 'mg',
      pharmacy: 'Elixir',
      manufacturer: 'BAYER',
    },
    {
      id: '2',
      code: 'ABC123',
      name: 'Bedoxin',
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQemKCE_wxu0kQ4MTRZNyb9B-gybrtbfief3HzK0rtpji5Om3Q8vNMqUaz1IjCvNrFKHIA&usqp=CAU',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      avaliable: 'true',
      prescription_needed: 'true',
      price: 7.5,
      quantity: 50,
      measurment_unit: 'mg',
      pharmacy: 'Elixir',
      manufacturer: 'GALENIKA',
    },
    {
      id: '3',
      code: 'ABC123',
      name: 'Betaferon',
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqlKAiPTeipI7rLILqb4VNLRCVagUPGMYyzjQywlu3qAVwd9JOIxViEseFaR-g9kXExwc&usqp=CAU',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      avaliable: 'true',
      prescription_needed: 'false',
      price: 7.5,
      quantity: 50,
      measurment_unit: 'mg',
      pharmacy: 'Elixir',
      manufacturer: 'BAYER',
    },
    {
      id: '4',
      code: 'ABC123',
      name: 'Arixtra',
      imgUrl:
        'https://www.fatehpharma.com/wp-content/uploads/2020/06/Arixtra-Injection-2.5mg-0.5ml-10s.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      avaliable: 'true',
      prescription_needed: 'false',
      price: 8,
      quantity: 50,
      measurment_unit: 'mg',
      pharmacy: 'Elixir',
      manufacturer: 'ASPEN',
    },
    {
      id: '5',
      code: 'ABC123',
      name: 'Betametazon',
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW44qXvCAmRRjQqOZWut_I9dgjhKQnFpGlzA&usqp=CAU',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      avaliable: 'true',
      prescription_needed: 'false',
      price: 5,
      quantity: 50,
      measurment_unit: 'mg',
      pharmacy: 'Betty',
      manufacturer: 'KRKA',
    },
    {
      id: '6',
      code: 'ABC123',
      name: 'Gelusil Lac',
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7OmxMY5ySIPkf3wuZF3pv2VHcrXtn3oW77z3VdIYZ1Sh0Tda3Ctg2nw5b-hufRHpGbv0&usqp=CAU',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      avaliable: 'true',
      prescription_needed: 'false',
      price: 7.5,
      quantity: 50,
      measurment_unit: 'mg',
      pharmacy: 'Betty',
      manufacturer: 'HEMOFARM',
    },
    {
      id: '7',
      code: 'ABC123',
      name: 'Caffetin',
      imgUrl:
        'https://www.apotekanet.rs/image/cache/catalog/Proizvodi/caffetin-tablete-a12-600x439.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      avaliable: 'true',
      prescription_needed: 'false',
      price: 7.5,
      quantity: 50,
      measurment_unit: 'mg',
      pharmacy: 'Betty',
      manufacturer: 'ALKALOID',
    },
    {
      id: '8',
      code: 'ABC123',
      name: 'Andol',
      imgUrl:
        'https://www.centarzdravlja.hr/site/assets/files/23003/andol_100_mg_tablete.480x256.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      avaliable: 'true',
      prescription_needed: 'false',
      price: 7.5,
      quantity: 50,
      measurment_unit: 'mg',
      pharmacy: 'Betty',
      manufacturer: 'PLIVA',
    },
    {
      id: '9',
      code: 'ABC123',
      name: 'Kadril',
      imgUrl:
        'https://lh3.googleusercontent.com/proxy/dsSLXVzS0iAXWQWkp7fszCxHA5Jye0aX7xLuidrQf2StA12PfnMTvyTJiBEvuVZQTVftBC6OqjdpBWh_i6BxTphsEGlvGS_UFQFkDtL7f5K7H_rfs1Id5UwjtzzP',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      avaliable: 'true',
      prescription_needed: 'false',
      price: 7.5,
      quantity: 50,
      measurment_unit: 'mg',
      pharmacy: 'Betty',
      manufacturer: 'ZADA',
    },
    {
      id: '10',
      code: 'ABC123',
      name: 'Legofer',
      imgUrl:
        'https://femedic.net/wp-content/uploads/2018/10/Femedic-Packshot-04-750x1125.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      avaliable: 'true',
      prescription_needed: 'false',
      price: 7.5,
      quantity: 50,
      measurment_unit: 'mg',
      pharmacy: 'Betty',
      manufacturer: 'ALKALOID',
    },
    {
      id: '11',
      code: 'ABC123',
      name: 'Tramadol',
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW_J4QN5NzmanQFZXTYsCVwsxuWYCgdiHPelULlAfMTnpLIhVtiqiElDBMu_2hc231bDc&usqp=CAU',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      avaliable: 'true',
      prescription_needed: 'false',
      price: 7.5,
      quantity: 50,
      measurment_unit: 'mg',
      pharmacy: 'Betty',
      manufacturer: 'BAYER',
    },
    {
      id: '12',
      code: 'ABC123',
      name: 'Kofan',
      imgUrl: 'https://nap.ba/storage/old-cms/slike/kofan.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      avaliable: 'true',
      prescription_needed: 'false',
      price: 7.5,
      quantity: 50,
      measurment_unit: 'mg',
      pharmacy: 'Betty',
      manufacturer: 'BOSNALIJEK',
    },
    {
      id: '13',
      code: 'ABC123',
      name: 'Liptin',
      imgUrl:
        'https://lh3.googleusercontent.com/proxy/BbrWhwOS3l-CrwgOetnRNT5dy0qL4I6RnP7QWveooIzIDus-hflOfHRqee5Pc5k6YclXnmTi0-HpuMWjjE27G5V8153mVOwpN_mHpEO9LkUGr-sFlwEjGkA',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      avaliable: 'true',
      prescription_needed: 'false',
      price: 7.5,
      quantity: 50,
      measurment_unit: 'mg',
      pharmacy: 'Betty',
      manufacturer: 'ZADA',
    },
    {
      id: '14',
      code: 'ABC123',
      name: 'Ranisan',
      imgUrl: 'http://lekoviza.com/wp-content/uploads/2015/05/Ranisan-lek.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      avaliable: 'true',
      prescription_needed: 'false',
      price: 2,
      quantity: 50,
      measurment_unit: 'mg',
      pharmacy: 'Betty',
      manufacturer: 'PRO.MED.CS',
    },
    {
      id: '15',
      code: 'ABC123',
      name: 'Xerelto',
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEr1x4rkI83AzBlNlb3sNub2fEC5toJXIjg0GcvCVDYIbdp9an7mzltSm9Oy_T64Yb0U4&usqp=CAU',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      avaliable: 'true',
      prescription_needed: 'false',
      price: 7.5,
      quantity: 50,
      measurment_unit: 'mg',
      pharmacy: 'Betty',
      manufacturer: 'BAYER',
    },
    {
      id: '15',
      code: 'ABC123',
      name: 'Truvada',
      imgUrl:
        'https://thesocialmedwork.com/media/catalog/product/cache/e9a289cf2986fcc23b86b9fbe369b06e/t/r/truvada-emtricitabine-tenofovir-disoproxil-fumarate.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      avaliable: 'true',
      prescription_needed: 'false',
      price: 7.5,
      quantity: 50,
      measurment_unit: 'mg',
      pharmacy: 'Betty',
      manufacturer: 'GILEAD',
    },
    {
      id: '17',
      code: 'ABC123',
      name: 'Zinacef',
      imgUrl:
        'https://pharmacy-new.org/image/cache/data/mx/pharmasy/2166-large_default-600x600.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      avaliable: 'true',
      prescription_needed: 'false',
      price: 15,
      quantity: 50,
      measurment_unit: 'mg',
      pharmacy: 'Betty',
      manufacturer: 'GlacoSmithKline',
    },
    {
      id: '18',
      code: 'ABC123',
      name: 'Avadil',
      imgUrl:
        'https://lh3.googleusercontent.com/proxy/V16bNWtA3yQq8zGGLZene3we0u2Qyd_mNle-ZwxGpkWHBEkJO46XgEh7KcFCmrtDxnXCl7q5lrWMIQI_KPwNqIaQeDUgIUwmvrCEFW8jIaZSfNlDQZgFZhhgEYtozQ',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      avaliable: 'true',
      prescription_needed: 'false',
      price: 7.5,
      quantity: 50,
      measurment_unit: 'mg',
      pharmacy: 'Betty',
      manufacturer: 'ZADA',
    },
    {
      id: '18',
      code: 'ABC123',
      name: 'Belodin',
      imgUrl:
        'https://userscontent2.emaze.com/images/0b2e5c62-517e-4a6c-a90c-f5e93c93ff9b/37b3a11271aa815fb3f4c8a8ff56751a.jpeg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      avaliable: 'true',
      prescription_needed: 'false',
      price: 8,
      quantity: 50,
      measurment_unit: 'mg',
      pharmacy: 'Betty',
      manufacturer: 'BELUPO',
    },
  ];
  const renderProduct = (product, index) => {
    return (
      <Card
        key={index}
        alt="img.png"
        title={product.name}
        description={product.description}
        price={product.price + ' KM'}
        image={product.imgUrl}
        heading={product.name + '  ' + product.manufacturer}
      />
    );
  };
  return (
    <div>
      <Helmet>
        <style>{'body { background-color: white }'}</style>
      </Helmet>
      <Grid container direction="row" spacing={2}>
        <Grid item xs={9}>
          <Grid
            container
            direction="column"
            spacing={2}
            style={{ marginTop: '2vh' }}
          >
            <Grid item>
              <Input label="Pretrazi proizvode" onChange={() => {}} />
            </Grid>
            <Grid item>
              <Grid container direction="row" spacing={1}>
                {products.map(renderProduct)}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <FloatingButton
            style={{
              position: 'fixed',
              top: '0',
              width: '100%',
            }}
          ></FloatingButton>
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { ...state.applicationReducer };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      onChange: bindActionCreators(applicaitonActions.onChange, dispatch),
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);
