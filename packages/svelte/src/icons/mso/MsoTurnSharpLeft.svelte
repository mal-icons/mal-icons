<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M650-120v-250H310q-24.75 0-42.37-17.62T250-430v-296l-90 90-42-42 162-162 162 162-42 42-90-90v296h340q24.75 0 42.38 17.63T710-370v250h-60Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
