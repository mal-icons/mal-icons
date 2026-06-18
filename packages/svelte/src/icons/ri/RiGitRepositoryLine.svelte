<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13 21V23.5L10 21.5L7 23.5V21H6.5C4.57 21 3 19.43 3 17.5V5C3 3.34 4.34 2 6 2H20C20.55 2 21 2.45 21 3V20C21 20.55 20.55 21 20 21H13ZM13 19H19V16H6.5C5.67 16 5 16.67 5 17.5C5 18.33 5.67 19 6.5 19H7V17H13V19ZM19 14V4H6V14.04C6.16 14.01 6.33 14 6.5 14H19ZM7 5H9V7H7V5ZM7 8H9V10H7V8ZM7 11H9V13H7V11Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
