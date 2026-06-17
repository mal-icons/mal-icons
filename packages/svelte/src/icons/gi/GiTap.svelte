<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M240 18c-4 0-8 4-16 12v32h-48.53C160 46 160 46 144 62c-16 16-16 16 0 32s16 16 30.77 0H224v32h32V94h48.7c15.8 16 15.8 16 31.8 0s16-16 0-32S320.51 46 304 62h-48V30c-8-8-12-12-16-12zM32 96v256h32V96zm64 48l-16-16v192l16-16zm144-2c-32 0-48.35 0-49.23 32H112v96h64.63C192 286 208 302 240 302s48-16 64-32c64 0 64 0 64 32v32h96v-64c0-64-32-96-96-96h-80c0.35-32-16-32-48-32zm112 208v16h128v-16zm64 32s-38.82 51.66-32 82c4.22 18.76 12.77 30 32 30s27.78-11.24 32-30c6.82-30.34-32-82-32-82z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
