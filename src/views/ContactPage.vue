<script>
 import { ref } from 'vue'
  import { useField, useForm } from 'vee-validate'

  export default {
    setup () {
      const { handleSubmit, handleReset } = useForm({
        validationSchema: {
          name (value) {
            if (value?.length >= 2) return true

            return 'Name needs to be at least 2 characters.'
          },
          phone (value) {
            if (value?.length > 9 && /[0-9-]+/.test(value)) return true

            return 'Phone number needs to be at least 9 digits.'
          },
          email (value) {
            if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(value)) return true

            return 'Must be a valid e-mail.'
          },
          select (value) {
            if (value) return true

            return 'Select an item.'
          },
          checkbox (value) {
            if (value === '1') return true

            return 'Must be checked.'
          },
        },
      })
      const name = useField('name')
      const phone = useField('phone')
      const email = useField('email')
      const message = useField('message')
      const select = useField('select')
      const checkbox = useField('checkbox')

      const items = ref([
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ])

      const submit = handleSubmit(values => {
        alert(JSON.stringify(values, null, 2))
      })

      return { name, phone, email, message, submit, handleReset }
    },
  }
</script>

<template>
  <h1>Hey Contact Us!</h1>
<form action="https://us-central1-steam-center-app-dev.cloudfunctions.net/formToEmail"
    method="post">
    <v-text-field
      v-model="name.value.value"
      :counter="10"
      :error-messages="name.errorMessage.value"
      label="Name"
    ></v-text-field>

    <v-text-field
      v-model="phone.value.value"
      :counter="7"
      :error-messages="phone.errorMessage.value"
      label="Phone Number"
    ></v-text-field>

    <v-text-field
      v-model="email.value.value"
      :error-messages="email.errorMessage.value"
      label="E-mail"
    ></v-text-field>

    <v-text-field
      v-model="message.value.value"
      label="Message"
    ></v-text-field>

    <v-btn
      class="me-4"
      type="submit"
    >
  
      submit
    </v-btn>
    <input name="send-to" value="cjohn@brooklynsteamcenter.org" hidden>

    <v-btn @click="handleReset">
      clear
    </v-btn>
  </form>
  
</template>
<style>
</style>
<codepen-resources lang="json">
    {
      "js": ["https://cdn.jsdelivr.net/npm/vee-validate@4.x/dist/vee-validate.js"],
      "imports": {
        "vee-validate": "https://cdn.jsdelivr.net/npm/vee-validate@4.8.4/dist/vee-validate.esm.js",
        "@vue/devtools-api": "https://cdn.jsdelivr.net/npm/@vue/devtools-api@6.5.0/lib/esm/index.js"
      }
    }
  </codepen-resources> 