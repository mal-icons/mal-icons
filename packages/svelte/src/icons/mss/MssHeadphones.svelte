<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M120-120v-360q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480v360H632v-296h148v-64q0-125.36-87.32-212.68Q605.36-780 480-780t-212.68 87.32Q180-605.36 180-480v64h148v296H120Zm60-60h88v-176h-88v176Zm512 0h88v-176h-88v176Zm-512 0h88-88Zm512 0h88-88Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
