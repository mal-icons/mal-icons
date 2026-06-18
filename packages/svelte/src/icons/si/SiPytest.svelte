<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2.62 0v0.89h3.84V0zm5.02 0v0.89h3.84V0zm4.96 0v0.89h3.84V0zm4.94 0v0.89h3.84V0zM2.45 1.89a0.940.94 0 0 0-0.940.94c0 0.520.420.940.940.94h19.11c0.52 0 0.94-0.420.94-0.94a0.940.94 0 0 0-0.94-0.94zm0.17 2.85V24H6.46V4.74zm5.02 0V20.54h3.84V4.74zm4.96 0V15.29h3.85V4.74zm4.94 0v6.49h3.84V4.74z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
