<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2 3.75C2 2.78 2.78 2 3.75 2h16.5c0.97 0 1.750.78 1.75 1.75v16.5A1.75 1.75 0 0 1 20.25 22H3.75A1.75 1.75 0 0 1 2 20.25ZM9 9v11.5h11.25a0.250.25 0 0 0 0.25-0.25V9Zm11.5-1.5V3.75a0.250.25 0 0 0-0.25-0.25H9v4ZM3.5 9v11.25c0 0.140.110.250.250.25H7.5V9Zm4-1.5v-4H3.75a0.250.25 0 0 0-0.250.25V7.5Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
