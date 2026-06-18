<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11 2.6V13.97H3.9C3.23 13.97 2.83 13.18 3.26 12.63L11 2.6ZM13 8.03V2.33C13 0.52 10.7 -0.29 9.58 1.16L1.67 11.41C0.25 13.26 1.55 15.97 3.9 15.97H11V21.67C11 23.48 13.3 24.29 14.42 22.84L22.33 12.59C23.75 10.74 22.45 8.03 20.1 8.03H13ZM13 10.03H20.1C20.77 10.03 21.17 10.82 20.74 11.37L13 21.4V10.03Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
