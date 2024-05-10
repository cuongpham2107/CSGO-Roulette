import {Ref} from "react";

export interface weaponAttributes {
    name: string,
    image: string,
}

// КЛАСС ОРУЖИЯ
export class Weapon {
    id: number
    name: string
    image: string

    constructor(id: number, attrs: weaponAttributes) {
        this.id = id;
        // атрибуты с сервера
        this.name = attrs.name;
        this.image = attrs.image;
    }

}

export interface rouletteAttributes {
    winner: weaponAttributes
    weapons: weaponAttributes[]

    rouletteContainerRef: Ref<HTMLElement>
    weaponsRef: Ref<HTMLElement>

    weaponsCount?: number
    transitionDuration?: number
    itemWidth?: number
}

// КЛАСС РУЛЕТКИ
export class Roulette {
    winner: weaponAttributes
    allWeapons: weaponAttributes[]
    rouletteWrapper: Ref<HTMLElement>
    weaponWrapper: Ref<HTMLElement>
    weapons: Weapon[]
    weaponsCount: number
    weaponPrizeId: number
    transitionDuration: number
    itemWidth: number
    constructor(attrs: rouletteAttributes) {
        // thuộc tính để tạo ra vũ khí khối
        this.winner = attrs.winner;
        this.allWeapons = attrs.weapons;
        // Sẽ có tất cả các vũ khí (giải thưởng vũ khí + hoạt động vũ khí)
        this.weapons = [];
        // Yếu tố DOM của cha mẹ cho roulette
        this.rouletteWrapper = attrs.weaponsRef;
        // Tổ chức của cha mẹ cho các yếu tố vũ khí của DOM (nó quay)
        this.weaponWrapper = attrs.weaponsRef;
        // Tổng số vũ khí
        this.weaponsCount = attrs.weaponsCount || 50;
        // Giải thưởng ID
        this.weaponPrizeId = this.randomRange(this.weaponsCount / 2, this.weaponsCount - 5)
        this.transitionDuration = attrs.transitionDuration || 10
        this.itemWidth = attrs.itemWidth || 200
    }
    private randomRange = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    private shuffle = (array: any[]) => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    set_weapons = () => {
        let weapons: Weapon[] = [] // Chúng tôi tuyên bố một loạt vũ khí
        let weapon_actors_len = this.allWeapons.length  // Số lượng vũ khí đi kèm với cơ sở dữ liệu

        const set_weapon_actors = (from_i: number, to_i: number) => {
            let j = 0
            const createdWeapons: Weapon[] = []
            for (let i = from_i; i <= to_i; i += 1) {
                // Tạo vũ khí với Index I và thuộc tính J
                createdWeapons.push(new Weapon(i, this.allWeapons[j]))
                j = (j === weapon_actors_len - 1) ? 0 : j + 1;
            }
            this.shuffle(createdWeapons)
            return createdWeapons
        };

       // Không có vũ khí với cơ sở dữ liệu - lỗi
        if (weapon_actors_len === 0) {
            throw new Error('Ошибка! Нет актёров.');
        }

        /**
         * Vũ khí điện với số lượng
         * Vũ khí trong Roulette từ 0 đến giải thưởng ID
         */
        weapons = weapons.concat(set_weapon_actors(0, this.weaponPrizeId - 1))

       // Tạo giải thưởng vũ khí
        weapons[this.weaponPrizeId] = new Weapon(this.weaponPrizeId, this.winner);

        /** Vũ khí phồng trong giải thưởng ID đến cuối*/
        weapons = weapons.concat(set_weapon_actors(this.weaponPrizeId + 1, this.weaponsCount - 1))
        this.weapons = weapons;
    };

    /**Vòng quay roulette
     -----------------------------------------------------------------------------*/
    spin = () => {
        let el_weapon_width_1_2 = Math.floor(this.itemWidth / 2)
        let el_weapon_width_1_20 = Math.floor(this.itemWidth / 20)

       // tọa độ dừng ngẫu nhiên
        const randStop = (this.weaponPrizeId - 4) * this.itemWidth +
            el_weapon_width_1_2 +
            this.randomRange(el_weapon_width_1_20, (18 * el_weapon_width_1_20))

        // Hoạt hình bây giờ thông qua 'Chuyển tiếp', và không thông qua 'hoạt hình'
        // 'Easy-ut'-Đây là một sự chậm lại mượt mà trong roulette
        // @ts-ignore
        this.weaponWrapper.current.style.transition = `left ${this.transitionDuration}s ease-out`;
        // Một chút bắt đầu được xác định
        // (vì không thể cài đặt ngay lập tức CSS
        setTimeout(() => {
            // @ts-ignore
            this.weaponWrapper!.current.style.left = `-${randStop}px`;
        }, 100);

        return this.weaponPrizeId
    }
}

