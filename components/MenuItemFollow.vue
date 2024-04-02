<template>
    <div class="flex items-center hover:bg-gray-100 rounded-md w-full py-1.5 px-2 gap-3">
        <img 
            class="rounded-full lg:mx-0 mx-auto"
            src="https://img.freepik.com/premium-photo/beautiful-girl-avatar_984951-120.jpg"
            width="35"    
        >
        <div class="lg:ol-2.5 lg:block hidden">
            <div class="flex items-center gap-1.5">
                <div class="font-bold text-[14px]">
                    User name
                </div>
                <div class="ml-1 rounded-full bg-[#58D5EC] h-[14px] relative">
                    <Icon 
                        class="relative -top-[7px]" 
                        name="teenyicons:tick-small-solid"
                        color="#FFFFFF"
                        size="15" 
                    />
                </div>
            </div>

            <div class="font-light text-[12px] text-gray-600">
                User name
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>