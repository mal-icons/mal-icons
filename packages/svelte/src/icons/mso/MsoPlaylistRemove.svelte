<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m571-80-43-43 114-113-114-113 43-43 113 114 113-114 43 43-114 113 114 113-43 43-113-114L571-80ZM120-330v-60h300v60H120Zm0-165v-60h470v60H120Zm0-165v-60h470v60H120Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
