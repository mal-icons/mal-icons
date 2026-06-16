<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M452-120v-606l-90 90-42-42 162-162 162 162-42 42-90-90v146q0 51 14.5 92.5t44.5 79q30 37.5 75.5 73T754-263l-42 42q-64-34-115.5-77.5T512-387v267h-60Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
