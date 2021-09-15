import { useFetchGifs } from "../../hooks/useFechGifs";
import {renderHook} from '@testing-library/react-hooks';

describe('Pruebas en hook useFetchGifs',()=>{

    test('Debe retornar el estado inicial',async()=>{

        const categoria = 'Prueba'

        const {result, waitForNextUpdate} = renderHook(()=> useFetchGifs(categoria) );
        const {data,loading}=result.current 

        await waitForNextUpdate();
        expect(data.length).toBe(0);
        expect ( loading ).toBe(true);
    });

    test('debe retornar arreglo de imagenes y el loading : false',async()=>{

        const categoria = 'Prueba'

        const {result,waitForNextUpdate} = renderHook(()=> useFetchGifs(categoria) );
        await waitForNextUpdate();
        
        const {data,loading}=result.current        

        expect(data.length).toBe(10);
        expect ( loading ).toBe(false);
    })

    

});