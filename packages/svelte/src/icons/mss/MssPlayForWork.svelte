<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M480-160q-98 0-169-65.5T240-388h60q0 72 53.5 120T480-220q73 0 126.5-48T660-388h60q0 97-71 162.5T480-160Zm-3-199L316-520l42-43 89 89v-284h60v283l88-88 43 43-161 161Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
