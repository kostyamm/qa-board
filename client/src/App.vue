<script setup lang="ts">
import Modal from './components/UI/Modals/Modal.vue';
import Notification from './components/UI/Notification/Notification.vue';

import Dashboard from './components/Dashboard.vue';

import { onMounted } from 'vue';
import { useModalStore } from './stores/useModalStore.ts';
import { getToken, useAuthStore } from './stores/useAuthStore.ts';

const modalStore = useModalStore()
const authStore = useAuthStore()

onMounted(() => {
    if (authStore.isAuth || !!getToken()) {
        authStore.verify()

        return
    }

    modalStore.openAuthModal()
})
</script>

<template>
    <Dashboard v-if="authStore.isAuth" />
    <Notification />
    <Modal />
</template>
