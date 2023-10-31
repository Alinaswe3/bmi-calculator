<script lang="ts">
    export let iconUrl: string;
</script>

<div class="flex flex-col gap-[4.6rem] tablet:gap-[4rem] tablet:flex-row">
    <figure class="w-[6.4rem] h-[6.4rem] rounded-[50%] overflow-hidden">
        <img alt="Feature icon" class="w-full h-full" src={iconUrl}/>
    </figure>
    <div class="flex flex-col gap-[2.4rem]">
        <h3 class="heading text-h-md tracking-[-1.2px]">
            <slot name="header">No header was provided</slot>
        </h3>
        <p class="text-b-md text-dark-electric-blue leading-body">
            <slot name="body">No content was provided</slot>
        </p>
    </div>
</div>