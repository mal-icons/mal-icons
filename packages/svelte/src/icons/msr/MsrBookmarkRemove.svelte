<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M640-695q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T640-755h180q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T820-695H640ZM480-240l-196 84q-30 13-57-4.76-27-17.75-27-50.24v-574q0-24 18-42t42-18h290v60H260v574l220-93 220 93v-334h60v334q0 32.49-27 50.24Q706-143 676-156l-196-84Zm0-545H260h290-70Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
