<script lang="ts">
    export let unit: string;
    export let dimension: string;

    export let id: string;
</script>

<div class="flex gap-[0.8rem] flex-col">
    <label for={id}>{dimension}</label>
    <div class="relative text-h-md">
        <input class="py-[2rem] pl-[2rem] pr-[8rem] hover:border-blue transition-all duration-200 appearance-none text-gunmetal w-full outline-none rounded-[12px] border border-borders"
               id={id}
               min="0"
               placeholder="0"
               step="0.1"
               type="number"/>
        <span class="absolute top-1/2 -translate-y-1/2 right-[2.4rem] font-semibold text-blue tracking-[-1.2px] text-h-md">{unit}</span>
    </div>
</div>



