import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from "enzyme";
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFechGifs';
jest.mock('../../hooks/useFechGifs');


describe('Pruebas en componente <GifGrid />',()=>{


   
    const categoria = 'Prueba';
    // const wrapper = shallow(<GifGrid categoria={categoria} />);

    beforeEach(()=>{
        jest.clearAllMocks();
        
    });

    test('Ver que se renderize bien',()=>{   

        useFetchGifs.mockReturnValue({
            data:[],
            loading:true
        });

        const wrapper = shallow(<GifGrid categoria={categoria} />);

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de mostrar items cuando se cargan imagenes por useFetchGihs',()=>{

        const gifs = [
            {id:'ABC',url:'https://localhost/algo.jpg',titulo:'Un titulo'},
            {id:'BCD',url:'https://localhost/algomas.jpg',titulo:'Un titulo 2'}]

        useFetchGifs.mockReturnValue({
            data:gifs,
            loading:false
        });

        const wrapper = shallow(<GifGrid categoria={categoria} />);
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

    });

});