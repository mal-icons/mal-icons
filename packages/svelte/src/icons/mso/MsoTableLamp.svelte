<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M520-120v-60h320v60H520ZM191-580h189v-200H278l-87 200Zm459 360v-420q0-21.25-14.37-35.62T600-690H440v140q0 12.75-8.62 21.38T410-520H145q-16.74 0-25.87-13.5Q110-547 117-562l106-242q8-17 22.55-26.5Q260.1-840 278-840h102q24.75 0 42.38 17.63T440-780v30h160q45.83 0 77.92 32.08Q710-685.83 710-640v420h-60ZM191-580h189-189Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
