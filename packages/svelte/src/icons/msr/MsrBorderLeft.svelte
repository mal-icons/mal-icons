<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M780-615v-60h60v60h-60Zm-330 0v-60h60v60h-60Zm0 165v-60h60v60h-60Zm330 0v-60h60v60h-60ZM615-780v-60h60v60h-60Zm165 0v-60h60v60h-60Zm-330 0v-60h60v60h-60Zm-165 0v-60h60v60h-60Zm330 330v-60h60v60h-60ZM285-120v-60h60v60h-60Zm165 0v-60h60v60h-60Zm-300.17 0Q137-120 128.5-128.62T120-150v-660q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T180-810v660q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63ZM615-120v-60h60v60h-60Zm165-165v-60h60v60h-60ZM285-450v-60h60v60h-60Zm495 330v-60h60v60h-60ZM450-285v-60h60v60h-60Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
