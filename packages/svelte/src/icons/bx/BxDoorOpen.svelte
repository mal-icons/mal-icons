<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10.39 21.79a11 0 0 0 0.860.18l8-2A11 0 0 0 20 19V5a1 1 0 0 0-0.76-0.97l-8-2A1 1 0 0 0 10 3v1H6a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h4v1c0 0.310.140.60.390.79zM12 4.28l6 1.5v12.44l-6 1.5V4.28zM7 18V6h3v12H7z"}],["path",{"d":"M14.24 13.16c0.45-0.110.76-0.510.76-0.97v-0.38a1 1 0 1 0-2 0v0.38a1 1 0 0 0 1.240.97z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
