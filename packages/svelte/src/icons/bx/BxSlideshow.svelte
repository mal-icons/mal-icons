<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 3H4c-1.1 0-2 0.9-2 2v10c0 1.10.9 2 2 2h7v3H8v2h8v-2h-3v-3h7c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2zM4 15V5h16l0 10H4z"}],["path",{"d":"m10 13 5-3-5-3z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
