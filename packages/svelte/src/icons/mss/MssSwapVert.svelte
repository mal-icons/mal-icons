<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M322-450v-316L202-646l-42-42 193-193 193 193-42 42-122-121v317h-60ZM607-81 414-275l42-41 120 120v-316h60v317l122-121 42 42L607-81Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
