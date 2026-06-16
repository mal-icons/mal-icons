<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M780-200v-174q0-54-38-92t-92-38H234l154 154-42 42-226-226 226-226 42 42-154 154h416q78 0 134 55.5T840-374v174h-60Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
