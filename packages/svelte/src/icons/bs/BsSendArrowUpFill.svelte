<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M15.850.15a0.50.5 0 0 1 0.110.54L13.03 8.03A4.5 4.5 0 0 0 8 12.5c0 0.5 0 1.5-0.770.36l-1.59-2.5L0.64 7.18l00-0.41-0.26a0.50.5 0 0 1 0.08-0.89l0.45-0.1800L15.310.04a0.50.5 0 0 1 0.540.11M6.64 10.07l7.49-7.490.47-1.18-1.180.47L5.93 9.36l0.340.22a0.50.5 0 0 1 0.150.15z"}],["path",{"fill-rule":"evenodd","d":"M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m0.35-5.35a0.50.5 0 0 0-0.720.02l-1.15 1.25a0.50.5 0 1 0 0.740.68l0.28-0.3V14a0.50.5 0 0 0 1 0v-1.79l0.40.4a0.50.5 0 0 0 0.71-0.71z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
