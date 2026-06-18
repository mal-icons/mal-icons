<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3.66 16.66v-6.64C9.2 10.02 13.69 5.53 13.69 0h6.65c0 9.2-7.47 16.66-16.68 16.66ZM3.66 24v-6.67h16.69V24H3.66"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
