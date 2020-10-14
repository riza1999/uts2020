import { Injectable } from '@angular/core';
import { Cpu } from './Model/Cpu.model';
import { Gpu } from './Model/Gpu.model';
import { Item } from './Model/Item.model';
import { Motherboard } from './Model/Motherboard.model';
import { Ram } from './Model/Ram.model';

@Injectable({
  providedIn: 'root'
})
export class ElectoService {
    private ctrStock = 0;
    private ctr = 9;
    private allItem: Item[] = [];
    private ram: Ram[] = [
        {
            id: 1,
            name: 'Trident Z 4GB',
            brand: 'G-Skill',
            photoURL: 'https://ecs7.tokopedia.net/img/cache/700/attachment/2019/3/19/155297857433364/155297857433364_5a0d03d4-0dc3-45f0-8531-a717422ce69f.png',
            price: 1000,
            stock: 10,
            speed: 2666,
            size: 'Long Dimm',
            type: 'RAM'
        },
        {
            id: 2,
            name: 'Value series 4GB',
            brand: 'KLEVV',
            photoURL: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2018/7/19/13757756/13757756_f56f6e28-01ed-49fe-874a-db7de652e6eb_700_394.jpg',
            price: 100,
            stock: 10,
            speed: 2666,
            size: 'Long Dimm',
            type: 'RAM'
        }
    ]
    private gpu: Gpu[] = [
        {
            id: 3,
            name: 'RTX 3080',
            brand: 'Asus',
            photoURL: 'https://www.asus.com/media/global/products/0tsjxhfskwlqwzsg/P_setting_fff_1_90_end_600.png',
            price: 1000,
            stock: 10,
            type: 'GPU'
        },
        {
            id: 4,
            name: 'RX 5500 XT',
            brand: 'Galax',
            photoURL: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//104/MTA-5369945/galax_galax_geforce_gtx_1650_4gb_ddr5_-1-click_oc-_-_dual_fan_-_garansi_2_th_full02_pn54l3a3.jpg',
            price: 100,
            stock: 10,
            type: 'GPU'
        }
    ]
    private cpu: Cpu[] = [
    {
        id: 5,
        name: 'I9 9900K',
        brand: 'Intel',
        photoURL: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//90/MTA-3412872/intel_intel-core-i9-9900k-desktop-processor-_full02.jpg',
        price: 1100,
        stock: 0,
        type: 'CPU',
        baseclock: 3.8,
        boostclock: 4.2,
        core: 8,
        thread: 24
    },
    {
        id: 6,
        name: 'Ryzen 5 3600x',
        brand: 'AMD',
        photoURL: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/7/12/9126088/9126088_acfb8bf5-e049-44b7-b904-5eaa6f90c66d_700_700',
        price: 350,
        stock: 2,
        type: 'CPU',
        baseclock: 3.6,
        boostclock: 4.0,
        core: 8,
        thread: 16
      }
    ]
    private motherboard: Motherboard[] = [
        {
            id: 7,
            name: 'B550-M Mortar',
            brand: 'MSI',
            photoURL: 'https://images.anandtech.com/doci/15850/MSI%20MAG%20B550%20Mortar%20Wifi%20Motherboard.jpg',
            price: 200,
            stock: 3,
            type: 'Motherboard',
            chipset: 'b550',
            forProc: 'AMD'
        },
        {
            id: 8,
            name: 'Z310',
            brand: 'ASUS',
            photoURL: 'https://c1.neweggimages.com/ProductImageCompressAll1280/13-119-038-V01.jpg',
            price: 200,
            stock: 3,
            type: 'Motherboard',
            chipset: 'Z310',
            forProc: 'Intel'
          }
        ]
    constructor() { }

    getAllItem(){
        this.allItem.length = 0;
        this.ram.forEach(element => {
            this.allItem.push(element as Item);
        });
        this.gpu.forEach(element => {
            this.allItem.push(element as Item);
        });
        this.cpu.forEach(element => {
            this.allItem.push(element as Item);
        });
        this.motherboard.forEach(element => {
            this.allItem.push(element as Item);
        });
        return [...this.allItem];
    }

    getItem(itemId: number){
        return {...this.allItem.find(item => {
            return item.id === itemId;
        })};
    }

    deleteItem(itemId: number){
        this.allItem = this.allItem.filter(item => {
            return item.id !== itemId;
        })
    }

    // editItem(contactId: string,contactName: string, contactPhoto: string, contactEmail: string[], contactPhone: string[]){
    //     this.allItem.find(contact => {
    //       if(contact.id === contactId){
    //         contact.nama = contactName;
    //         contact.telepon = contactPhone;
    //         contact.email = contactEmail;
    //         contact.foto = contactPhoto;
    //       }
    //     })
    //     console.log(this.allItem);
    //   }
    
    addGPU(GPUName: string, GPUPhoto: string, GPUModel: string, GPUPrice: number, GPUStock: number){
        const newData: Gpu = {
            id: this.ctr,
            name: GPUModel,
            brand: GPUName,
            photoURL: GPUPhoto,
            price: GPUPrice,
            stock:GPUStock,
            type: "GPU"
        }

        this.ctr++;
        this.gpu.push(newData);
    }
    addCPU(CPUName: string, CPUPhoto: string, CPUModel: string, CPUPrice: number, CPUStock: number, CPUBaseclock: number, CPUBoostclock: number, CPUCore: number, CPUThread:number){
        const newData: Cpu = {
            id: this.ctr,
            name: CPUModel,
            brand: CPUName,
            photoURL: CPUPhoto,
            price: CPUPrice,
            stock:CPUStock,
            type: "CPU",
            baseclock: CPUBaseclock,
            boostclock: CPUBoostclock,
            core: CPUCore,
            thread: CPUThread
        }

        this.ctr++;
        this.cpu.push(newData)
    }
    addRAM(RAMName: string, RAMPhoto: string, RAMModel: string, RAMPrice: number, RAMStock: number, RAMSpeed: number, RAMSize: string){
        const newData: Ram = {
            id: this.ctr,
            name: RAMModel,
            brand: RAMName,
            photoURL: RAMPhoto,
            price: RAMPrice,
            stock:RAMStock,
            type: "RAM",
            speed: RAMSpeed,
            size: RAMSize
        }

        this.ctr++;
        this.ram.push(newData);
    }
    addMotherboard(MBName: string, MBPhoto: string, MBModel: string, MBPrice: number, MBStock: number, MBChipset: string, MBForProc: string){
        const newData: Motherboard = {
            id: this.ctr,
            name: MBModel,
            brand: MBName,
            photoURL: MBPhoto,
            price: MBPrice,
            stock: MBStock,
            type: "Motherboard",
            forProc: MBForProc,
            chipset: MBChipset
        }

        this.ctr++;
        this.motherboard.push(newData);
    }

}
