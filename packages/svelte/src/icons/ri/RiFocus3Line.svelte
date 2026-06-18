<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13 1L13 4.06C16.62 4.51 19.49 7.38 19.94 11L23 11V13L19.94 13C19.49 16.62 16.62 19.49 13 19.94L13 23H11L11 19.94C7.38 19.49 4.51 16.62 4.06 13L1 13V11L4.06 11C4.51 7.38 7.38 4.51 11 4.06L11 1H13ZM12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6ZM12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14C10.9 14 10 13.1 10 12C10 10.9 10.9 10 12 10Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
