<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 16V20H8V22H2V16H4ZM22 16V22H16V20H20V16H22ZM7.5 7C7.5 9.14 9 10.93 11 11.39L11 17H13L13 11.39C15 10.93 16.5 9.14 16.5 7H18.5C18.5 9.51 17.08 11.68 15 12.77L15 19H9L9 12.77C6.92 11.68 5.5 9.51 5.5 7H7.5ZM12 5C13.38 5 14.5 6.12 14.5 7.5C14.5 8.88 13.38 10 12 10C10.62 10 9.5 8.88 9.5 7.5C9.5 6.12 10.62 5 12 5ZM8 2V4L4 4V8H2V2H8ZM22 2V8H20V4H16V2H22Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
