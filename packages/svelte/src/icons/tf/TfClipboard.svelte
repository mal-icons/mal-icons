<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 2v15h-15v-15h2.24v1h-1.24v13h13v-13h-1.28v-1h2.28zM13 5h-9v-4h3.09c0.21-0.58 0.76-1 1.42-1s1.21 0.42 1.42 1h3.09v4zM12 2h-3v-0.5c0-0.28-0.22-0.5-0.5-0.5s-0.5 0.22-0.5 0.5v0.5h-3v2h7v-2z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 17 17" {nodes} {...props} />
