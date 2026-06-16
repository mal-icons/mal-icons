import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-settings-input-svideo",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrSettingsInputSvideo {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-80q-84 0-157-31t-127-85q-54-54-85-127T80-480q0-83.73 31-156.86Q142-710 196-764t127-85q73-31 157-31 83.73 0 156.86 31Q710-818 764-764t85 127.14Q880-563.73 880-480q0 84-31 157t-85 127q-54 54-127.14 85T480-80Zm0-400Zm-189.88 27Q311-453 325.5-467.62q14.5-14.62 14.5-35.5Q340-524 325.38-538.5q-14.62-14.5-35.5-14.5Q269-553 254.5-538.38q-14.5 14.62-14.5 35.5Q240-482 254.62-467.5q14.62 14.5 35.5 14.5Zm380 0Q691-453 705.5-467.62q14.5-14.62 14.5-35.5Q720-524 705.38-538.5q-14.62-14.5-35.5-14.5Q649-553 634.5-538.38q-14.5 14.62-14.5 35.5Q620-482 634.62-467.5q14.62 14.5 35.5 14.5Zm-317 197Q374-256 388.5-270.62q14.5-14.62 14.5-35.5Q403-327 388.38-341.5q-14.62-14.5-35.5-14.5Q332-356 317.5-341.38q-14.5 14.62-14.5 35.5Q303-285 317.62-270.5q14.62 14.5 35.5 14.5Zm253 0Q627-256 641.5-270.62q14.5-14.62 14.5-35.5Q656-327 641.38-341.5q-14.62-14.5-35.5-14.5Q585-356 570.5-341.38q-14.5 14.62-14.5 35.5Q556-285 570.62-270.5q14.62 14.5 35.5 14.5ZM416-620h127q20 0 35-15t15-35q0-20-15-38t-35-18H416q-20 0-35 18t-15 38q0 20 15 35t35 15Zm64 480q140 0 240-100t100-240q0-140-100-240T480-820q-140 0-240 100T140-480q0 140 100 240t240 100Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrSettingsInputSvideo;
