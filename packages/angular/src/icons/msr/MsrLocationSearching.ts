import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-location-searching",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrLocationSearching {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M479.83-42Q467-42 458.5-50.62T450-72v-45q-137-14-228-105T117-450H72q-12.75 0-21.37-8.68Q42-467.35 42-480.17 42-493 50.63-501.5T72-510h45q14-137 105-228t228-105v-45q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T510-888v45q137 14 228 105t105 228h45q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T888-450h-45q-14 137-105 228T510-117v45q0 12.75-8.68 21.38Q492.65-42 479.83-42ZM480-176q125 0 214.5-89.5T784-480q0-125-89.5-214.5T480-784q-125 0-214.5 89.5T176-480q0 125 89.5 214.5T480-176Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrLocationSearching;
