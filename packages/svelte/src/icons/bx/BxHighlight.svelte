<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m20.71 5.83-3.53-3.53a11 0 0 0-1.41-0.01L7.1 10.82a1.01 1.01 0 0 0-0.270.49l-1.02 4.44L4 18h2.83l1.14-1.13 3.59-0.83c0.18-0.040.35-0.130.48-0.26l8.67-8.53a1 1 0 0 0 0.01-1.42zm-9.37 7.83-2.12-2.12 7.24-7.13 2.12 2.12-7.24 7.13zM4 20h16v2H4z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
