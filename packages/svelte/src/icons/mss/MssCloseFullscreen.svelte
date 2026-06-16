<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m122-80-42-42 298-298H180v-60h300v300h-60v-198L122-80Zm358-400v-300h60v198l298-298 42 42-298 298h198v60H480Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
