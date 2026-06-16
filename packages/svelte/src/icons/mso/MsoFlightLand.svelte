<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M119-120v-60h721v60H119Zm648-211L120-511v-209l38 13 32 96 219 61v-330l58 14 115 364 215 61q19 5 31 20.5t12 35.5q0 28-22.5 45t-50.5 9Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
