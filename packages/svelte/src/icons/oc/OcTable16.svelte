<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M0 1.75C0 0.780.78 0 1.75 0h12.5C15.22 0 16 0.78 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25ZM6.5 6.5v8h7.75a0.250.25 0 0 0 0.25-0.25V6.5Zm8-1.5V1.75a0.250.25 0 0 0-0.25-0.25H6.5V5Zm-13 1.5v7.75c0 0.140.110.250.250.25H5v-8ZM5 5V1.5H1.75a0.250.25 0 0 0-0.250.25V5Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
