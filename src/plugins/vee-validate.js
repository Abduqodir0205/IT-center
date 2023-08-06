import { defineRule } from 'vee-validate'
import { required, max, min, url } from '@vee-validate/rules'


defineRule('required', required)
defineRule('min', min)
defineRule('max', max)
defineRule('url', url)