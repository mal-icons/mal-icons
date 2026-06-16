<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M849.83-200Q837-200 828.5-208.67q-8.5-8.67-8.5-21.49v-181.01q0-12.82 8.68-21.32 8.68-8.5 21.5-8.5 12.83 0 21.33 8.67 8.5 8.67 8.5 21.5v181.01q0 12.82-8.68 21.32-8.68 8.5-21.5 8.5ZM850-80q-12 0-21-9t-9-21q0-12 9-21t21-9q12 0 21 9t9 21q0 12-9 21t-21 9Zm-698 0q-19.69 0-27.34-18.5Q117-117 131-131l698-698q14-14 32.5-6.34T880-808v307h-60.18Q795-501 777.5-483.33T760-440.86V-80H152Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
