<script lang="ts">
    export let iconUrl: string;
</script>

<div class="limit flex flex-col gap-[1.6rem] p-[3.2rem]">
    <div class="flex gap-[1.6rem] items-center">
        <figure class="w-[3.2rem] h-[3.2rem] rounded-[50%] overflow-hidden">
            <img alt="Limit icon" class="w-full h-full" src={iconUrl}/>
        </figure>
        <h3 class="heading text-h-md tracking-[-1.2px]">
            <slot name="header">No header was provided</slot>
        </h3>
    </div>
    <p class="text-b-md text-dark-electric-blue leading-body">
        <slot name="body">No content was provided</slot>
    </p>
</div>

<style>
    .limit {
        border-radius: 16px;
        background: #FFF;
        box-shadow: 16px 32px 56px 0 rgba(143, 174, 207, 0.25);
    }
</style>