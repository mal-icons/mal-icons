<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M0-160v-60h111l-30-30v-590h798v590l-30 30h111v60H0Zm480-22q14.45 0 24.23-9.77Q514-201.55 514-216q0-14.45-9.77-24.22Q494.45-250 480-250q-14.45 0-24.22 9.78Q446-230.45 446-216q0 14.45 9.78 24.23Q465.55-182 480-182Zm-339-98h678v-500H141v500Zm0 0v-500 500Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
