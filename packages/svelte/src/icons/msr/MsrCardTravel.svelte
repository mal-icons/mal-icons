<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M140-277v97h680v-97H140Zm153-443v-100q0-24 18-42t42-18h253q24 0 42 18t18 42v100h154q24 0 42 18t18 42v480q0 24-18 42t-42 18H140q-24 0-42-18t-18-42v-480q0-24 18-42t42-18h153ZM140-385h680v-275H666v45q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63-12.82 0-21.32-8.62T606-615v-45H353v45q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63-12.82 0-21.32-8.62T293-615v-45H140v275Zm213-335h253v-100H353v100ZM140-180v-480 75-75 75-75 480Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
