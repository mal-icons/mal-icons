<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M280-80v-720h120v-80h160v80h120v720H280Zm170-244h60v-84h84v-60h-84v-84h-60v84h-84v60h84v84Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
