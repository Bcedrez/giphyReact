import React from 'react';
import GifExpertApp from '../GifExpertApp';
const { shallow } = require("enzyme");

describe('Pruebas a componente <GifExpertApp />',()=>{


    test('Renderizado correcto',()=>{

        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de mostrar lista de categorias',()=>{

        const categories = ['Prueba','test'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })

})


