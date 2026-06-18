<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M248,128a56,56,0,0,1-95.6,39.6l-0.33-0.35L92.12,99.55a40,40,0,1,0,0,56.9l8.52-9.62a8,8,0,1,1,12,10.61l-8.69,9.81-0.330.35a56,56,0,1,1,0-79.2l0.330.35,59.95,67.7a40,40,0,1,0,0-56.9l-8.52,9.62a8,8,0,1,1-12-10.61l8.69-9.810.33-0.35A56,56,0,0,1,248,128Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 256 256" {nodes} {...props} />
