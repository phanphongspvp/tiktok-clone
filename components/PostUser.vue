<template>
    <div 
        class="relative brightness-90 hover:brightness-[1.1] cursor-pointer"
        @mouseenter="$event => isHover(true)"
        @mouseleave="$event => isHover(false)"
    >
        <div
            v-if="!isLoaded"
            class="absolute flex items-center justify-center top-0 left-0 aspect-[3/4] w-full object-cover rounded-md bg-black"
        >
            <Icon class="animate-spin ml-1" name="mingcute:loading-line" size="100" color="#FFFFFF" />
        </div>

        <div>
            <video
                ref="video"
                muted
                loop
                class="aspect-[3/4] object-cover rounded-md"
                src="/warrior.mp4"
            />
        </div>

        <div class="px-1">
            <div class="text-gray-700 text-[15px] pt-1 break-words">
                This is some text
            </div>
            <div class="flex items-center -ml-1 text-gray-600 font-bold text-xs">
                <Icon name="gg:loadbar-sound" size="20" />
                3%
                <Icon class="ml-1" name="tabler:alert-circle" size="16" />
            </div>
        </div>
    </div>
</template>

<script setup>
// defileProps(["post"]);

const route = useRoute();
const router = useRouter();

const video = ref(null);
const isLoaded = ref(false);

onMounted(() => {
    if(video.value) {
        video.value.addEventListener("loadeddata", (e) => {
            if(e.target) {
                setTimeout(() => {
                    isLoaded.value = true;
                }, 200);
            }
        });
    }
})


onBeforeUnmount(() => {
    video.value.pause();
    video.value.currentTime = 0;
    video.value.src = "";
})

const isHover = (bool) => {
    if(bool) {
        video.value.play();
    } else {
        video.value.pause();
    }
}
</script>