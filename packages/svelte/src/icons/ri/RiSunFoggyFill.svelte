<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6.34 14C6.12 13.37 6 12.7 6 12C6 8.69 8.69 6 12 6C15.31 6 18 8.69 18 12C18 15.31 15.31 18 12 18V14H6.34ZM6 20H15V22H6V20ZM1 11H4V13H1V11ZM2 16H10V18H2V16ZM11 1H13V4H11V1ZM3.51 4.93L4.93 3.51L7.05 5.64L5.64 7.05L3.51 4.93ZM16.95 18.36L18.36 16.95L20.49 19.07L19.07 20.49L16.95 18.36ZM19.07 3.51L20.49 4.93L18.36 7.05L16.95 5.64L19.07 3.51ZM23 11V13H20V11H23Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
