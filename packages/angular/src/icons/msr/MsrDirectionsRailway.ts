import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-directions-railway",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrDirectionsRailway {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M265.05-120Q254-120 247-127t-7-18.38q0-5.17 3.5-11.9T252-168l48-32q-59 0-99.5-40.5T160-340v-380q0-83 77-121.5T480-880q172 0 246 37t74 123v380q0 59-40.5 99.5T660-200l48 32q5 4 8.5 10.21 3.5 6.21 3.5 12.41Q720-134 712.79-127q-7.21 7-17.79 7H265.05ZM220-545h520v-155H220v155Zm440 60H220h520-80ZM480.06-315Q503-315 519-331.06q16-16.06 16-39T518.94-409q-16.06-16-39-16T441-408.94q-16 16.06-16 39T441.06-331q16.06 16 39 16ZM300-255h360q34 0 57-25t23-60v-145H220v145q0 35 23 60t57 25Zm180-565q-120 0-173 15.5T231-760h501q-18-27-76.5-43.5T480-820Zm0 60h252-501 249Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrDirectionsRailway;
