<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8c-1.18 0-2.34-0.26-3.43-0.78-0.27-0.13-0.56-0.19-0.86-0.19-0.19 0-0.380.03-0.560.08l-3.20.940.94-3.2c0.14-0.470.1-0.98-0.11-1.42A7.93 7.93 0 0 1 4 12c0-4.41 3.59-8 8-8m0-2C6.48 2 2 6.48 2 12c0 1.540.36 2.980.97 4.29L1 23l6.71-1.97c1.310.61 2.750.97 4.290.97 5.52 0 10-4.48 10-10S17.52 2 12 2z"}],["path",{"fill-rule":"evenodd","d":"M13 8h-2v3H8v2h3v3h2v-3h3v-2h-3z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
