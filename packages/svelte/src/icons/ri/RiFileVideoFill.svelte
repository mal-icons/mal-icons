<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 2L21 7V21.01C21 21.56 20.56 22 20.01 22H3.99C3.44 22 3 21.54 3 21.01V2.99C3 2.44 3.44 2 3.99 2H16ZM15 11.67L10.12 8.41C10.06 8.37 9.98 8.35 9.9 8.35C9.68 8.35 9.5 8.53 9.5 8.75V15.25C9.5 15.33 9.52 15.41 9.57 15.47C9.69 15.66 9.94 15.71 10.12 15.59L15 12.33C15.04 12.3 15.08 12.27 15.11 12.22C15.23 12.04 15.18 11.79 15 11.67Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
