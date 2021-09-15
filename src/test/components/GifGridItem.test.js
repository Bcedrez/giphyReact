import React from 'react';
import { shallow } from 'enzyme';




import GifGridItem from '../../components/GifGridItem'

describe('Prueba sobre <GifGridItem />',()=>{

    const titulo = 'Un Titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow( <GifGridItem url={url} titulo={titulo} /> );

    test('Se debe renderizar correctamente',()=>{       
        
        expect(wrapper).toMatchSnapshot();        

    });

    test('Debe tener un parrafo con el titulo',()=>{
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(titulo);
    });

    test('Debe de tener imagen src = url y alt = tiulo',()=>{
        const imagen = wrapper.find('img');
        const {src,alt} = imagen.props();

        expect(src).toBe(url);
        expect(alt).toBe(titulo);
    });

    test('div debe tener animacion animate__zoomIn',()=>{
        const div = wrapper.find('div');        
        const {className} = div.props();        
        expect(className.includes('animate__zoomIn')).toBe(true);
    })

})

