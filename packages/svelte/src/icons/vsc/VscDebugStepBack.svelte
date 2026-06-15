<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8 11C6.9 11 6 11.9 6 13C6 14.1 6.9 15 8 15C9.1 15 10 14.1 10 13C10 11.9 9.1 11 8 11ZM13.94 7.14C13.52 4.21 10.97 2 8 2C6.24 2 4.62 2.76 3.5 4.03V2.75C3.5 2.34 3.16 2 2.75 2C2.34 2 2 2.34 2 2.75V6.25C2 6.66 2.34 7 2.75 7H6.25C6.66 7 7 6.66 7 6.25C7 5.84 6.66 5.5 6.25 5.5H4.26C5.08 4.26 6.47 3.5 8 3.5C10.23 3.5 12.14 5.16 12.45 7.36C12.51 7.73 12.83 8 13.2 8C13.23 8 13.27 8 13.3 7.99C13.71 7.93 14 7.55 13.94 7.14L13.94 7.14Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
