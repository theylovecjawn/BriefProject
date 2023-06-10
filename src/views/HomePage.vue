<script setup>
import { ref } from "vue"

let userInput = ref('')
let valueOfThing = ref()

async function asyncFunc() {
    const result = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + userInput.value);
    console.log(result);
    let jsonValue = await result.json();
    valueOfThing.value = jsonValue
}





</script>

<template>
    <h1 style="font-size:60px;">Words 4 IDIOT$</h1>
    <v-card theme="dark" class="pa-8 d-flex justify-center flex-wrap">
        <v-responsive max-width="550">
        <v-img class="mx-auto mt-12 mb-16" max-height="140" max-width="240"></v-img>

            <v-text-field append-inner-icon="mdi-microphone" auto-select-first class="flex-full-width" density="comfortable"
                placeholder="Search Brief for Your Question" prepend-inner-icon="mdi-magnify" rounded v-model="userInput"
                theme="light" variant="solo" @keydown.enter="asyncFunc"></v-text-field>
                <h1>Definition: </h1>
                <ol v-for="value in valueOfThing?.[0]?.meanings?.[0]?.definitions">
                  <br>
                    <li><h2>{{ value.definition}}</h2></li>
                
                </ol>
                
 
            <v-container class="text-center">
                <v-row justify="center" dense>
                    <v-col v-for="(shortcut, i) in shortcuts" :keys="i" cols="auto">
                        <v-card :href="shortcut.href" class="pa-4" flat rel="noopener noreferer" target="_blank"
                            width="112">
                            <v-avatar color="white" variant="tonal" class="mb-2">
                                <v-img cover src="https://lh3.google.com/mail-doc-preview/1v9PJE9MlyYcguxUyhk-TVkRINBQnwte1=w3024-h1668?authuser=0"></v-img>
                            </v-avatar>

                            <div class="text-caption text-truncate" v-text="shortcut.title"></div>
                        </v-card>
                    </v-col>

                    <v-col cols="auto">
                        <v-dialog v-model="dialog" max-width="500">
                            <template v-slot:activator="{ props }">
                                <v-card flat width="112" v-bind="props" class="pa-4">

                                  
                                    
                                </v-card>
                            </template>

                            <v-card title="Add shortcut" rounded="lg">
                                <template v-slot:text>
                                    <v-label class="text-caption">Name</v-label>

                                    <v-text-field density="compact" variant="solo-filled" flat></v-text-field>

                                    <v-label class="text-caption">URL</v-label>

                                    <v-text-field density="compact" variant="solo-filled" flat></v-text-field>
                                </template>

                                <div class="py-4 px-5 text-end">
                                    <v-btn border class="text-none me-2" color="blue" text="Cancel" variant="text"
                                        @click="dialog = false"></v-btn>

                                    <v-btn class="text-none" color="blue" text="Done" variant="flat"
                                        @click="dialog = false"></v-btn>
                                </div>
                            </v-card>
                        </v-dialog>
                    </v-col>
                </v-row>
            </v-container>
        </v-responsive>
    </v-card>
</template>
<style>
h2{
    background-color: aliceblue;
    color: black;
    border-radius: 2px;
}
</style>