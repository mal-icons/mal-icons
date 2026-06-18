<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M1.88 0v24H8.32a1.09 1.09 0 1.09-1.08v-4.61h1.61c7.88 0 11.1-4.44 11.1-9.64C22.12 2.26 17.25 0 12.66 0H1.88Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
