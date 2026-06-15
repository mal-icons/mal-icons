<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6.78 6.14C7.73 4.78 9.6 4.45 10.96 5.4C12.31 6.35 12.64 8.22 11.69 9.58L5.96 17.77C5.01 19.13 3.14 19.46 1.78 18.51C0.42 17.56 0.09 15.69 1.04 14.33L6.78 6.14Z","fill":"currentColor"}],["path",{"d":"M15.27 6.23C16.22 4.87 18.09 4.54 19.45 5.49C20.8 6.44 21.13 8.31 20.18 9.67L14.45 17.86C13.5 19.22 11.63 19.55 10.27 18.6C8.91 17.65 8.58 15.78 9.53 14.42L15.27 6.23Z","fill":"currentColor"}],["path",{"d":"M20.5 18.86C22.16 18.86 23.5 17.52 23.5 15.86C23.5 14.2 22.16 12.86 20.5 12.86C18.84 12.86 17.5 14.2 17.5 15.86C17.5 17.52 18.84 18.86 20.5 18.86Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
