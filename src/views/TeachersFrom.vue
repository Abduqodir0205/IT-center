<template>
    <div class="science">
        <div class="stories"></div>
        <div class="middle">
            <div class="left">
                <h1>Yangi hodim</h1>
            </div>
            <div class="right">
                <button>Saqlash</button>
            </div>
        </div>
        <div class="employee">
            <form action="">
                <div class="left">
                    <div class="left__content">
                        <div class="left-content__flex">
                            <div class="employee__a employee__global">
                                <label for="">Ism
                                    <strictly />
                                </label>
                                <input type="text">
                            </div>
                            <div class="employee__b employee__global">
                                <label for="">Familyasi
                                    <strictly />
                                </label>
                                <input type="text">
                            </div>
                            <div class="employee__c employee__global">
                                <label for="">Otasining ismi
                                    <strictly />
                                </label>
                                <input type="text">
                            </div>
                            <div class="employee__v employee__global">
                                <label for="">Tug'ilgan sanasi</label>
                                <input type="date">
                            </div>
                            <div class="employee__e employee__global">
                                <label for="">Pasport seriyasi
                                    <strictly />
                                </label>
                                <input type="text">
                            </div>
                            <div class="employee__r employee__global">
                                <label for="">Yashash manzili</label>
                                <input type="text">
                            </div>
                        </div>
                        <div class="child2">
                            <div class="employee__w employee__global">
                                <label for="">Ma'lumoti</label>
                                <select>
                                    <option value="oliy">Oliy</option>
                                    <option value="orta">O'rta maxsus</option>
                                    <option value="orta">Ma'lumoti mavjud emas</option>
                                </select>
                            </div>
                            <div class="employee__q employee__global">
                                <label for="">Telefefon raqam(Asosiy)
                                    <strictly />
                                </label>
                                <input type="number" placeholder="+998">
                            </div>
                            <div class="employee__f employee__global">
                                <label for="">Telefon raqam(Qo'shimcha)</label>
                                <input type="number" placeholder="+998">
                            </div>
                            <div class="employee__g employee__global">
                                <label for="">Telegram(Username)</label>
                                <input type="text">
                            </div>
                            <div class="employee__h employee__global">
                                <label for="">Instagram(Username)</label>
                                <input type="text">
                            </div>
                            <div class="employee__j employee__global">
                                <label for="">Lavozimi
                                    <strictly />
                                </label>
                                <select>
                                    <option value="menedjer">Menedjer</option>
                                    <option value="o'qituvchi">O'qituvchi</option>
                                    <option value="yordamchi">Yordamchi o'qituvchi</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="employee__m employee__global">
                        <label for="">Qiziqishlar</label>
                        <div>
                            <Multiselect v-model="value" mode="tags" :close-on-select="false" :searchable="true"
                                :create-option="false" :options="[
                                    { value: 'batman', label: 'Batman' },
                                    { value: 'robin', label: 'Robin' },
                                    { value: 'joker', label: 'Joker' },
                                ]" />
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="employee__d">
                        <div class="img">
                            <h3>Hodim rasmi</h3>
                            <div class="employee-d__img" v-if="selectedImageEl?.url">
                                <img class="employee__img" :src="selectedImageEl.url" alt="Salom" />
                            </div>
                        </div>
                        <input type="file" name="file" id="file" class="inputfile" :multiple="false" @change="changeFile" />
                        <label for="file">Rasm tanlash</label>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

import strictly from '../components/strictly.vue';
import Multiselect from '@vueform/multiselect'

export default {
    components: {
        Multiselect,
        strictly
    },
    data() {
        return {
            value: null,
            options: [
                'Batman',
                'Robin',
                'Joker',
            ],
            selectedImageEl: {},
            changeFileEl: false,
        }
    },
    methods: {
        changeFile(e) {
            // console.log(this.file);

            const files = e.target.files
            if (files.length === 0) return
            this.selectedImageEl = { name: files[0].name, url: URL.createObjectURL(files[0]) }
            this.file = e.target.files[0]
        },
    }
}
</script>

<style src="@vueform/multiselect/themes/default.css"></style>