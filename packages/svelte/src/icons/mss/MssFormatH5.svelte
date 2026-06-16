<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M120-280v-400h60v170h180v-170h60v400h-60v-170H180v170h-60Zm420 0v-60h240v-110H540v-230h300v60H600v110h180q24.75 0 42.38 17.63T840-450v110q0 24.75-17.62 42.38T780-280H540Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
