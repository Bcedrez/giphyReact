import React from 'react';

import { shallow } from "enzyme"
import { AddCatergory } from "../../components/AddCategory"


describe('Pruebas en <AddCategory />',()=>{

    const setCategories = jest.fn();
    let wrapper
    
    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCatergory setCategorias={setCategories}/>);
    })

    test('Debe renderizarse correctamente',()=>{
        
        expect(wrapper).toMatchSnapshot()
    });

    test('Debe de cambiar la caja de texto',()=>{

        const input = wrapper.find('input');
        const value = 'Hola Mundo'
        input.simulate('change',{target : {value}});
    });

    test('No debe ejecutar el submit',()=>{

        wrapper.find('form').simulate('submit',{preventDefault(){}});
        
        expect(setCategories).not.toHaveBeenCalled();

    });

    test('Debe de llamar SetCategories y limpiear caja de texto',()=>{

        const input = wrapper.find('input');
        const value = 'Hola Mundo'
        input.simulate('change',{target : {value}});

        wrapper.find('form').simulate('submit',{preventDefault(){}});

        expect(setCategories).toHaveBeenCalledWith( expect.any(Function));

        expect(input.props().value).toBe('');


    });

})