<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16.22 9.25L17.63 7.84L13.39 3.59L9.15 7.84L10.56 9.25L13.39 6.42L16.22 9.25Z","fill":"currentColor"}],["path",{"d":"M10.56 13.49L9.15 12.08L13.39 7.84L17.63 12.08L16.22 13.49L14.37 11.65V16.41C14.37 18.62 12.58 20.41 10.37 20.41H6.37V18.41H10.37C11.47 18.41 12.37 17.51 12.37 16.41V11.68L10.56 13.49Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
