<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M1.75 0h12.5C15.22 0 16 0.78 16 1.75v12.5c0 0.46-0.180.91-0.51 1.24A1.75 1.75 0 0 1 14.25 16H1.75c-0.46 0-0.91-0.18-1.24-0.51A1.75 1.75 0 0 1 0 14.25V1.75C0 0.780.78 0 1.75 0ZM1.5 1.75v12.5c0 0.140.110.250.250.25H7.5v-13H1.75a0.250.25 0 0 0-0.250.25ZM9 14.5h5.25a0.250.25 0 0 0 0.25-0.25V1.75a0.250.25 0 0 0-0.25-0.25H9Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
