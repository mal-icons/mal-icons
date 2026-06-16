import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-nest-wake-on-approach",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoNestWakeOnApproach {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M829.88-481Q809-481 794.5-495.58 780-510.17 780-531v-259q0-20.83 14.62-35.42Q809.24-840 830.12-840 851-840 865.5-825.42 880-810.83 880-790v259q0 20.83-14.62 35.42Q850.77-481 829.88-481ZM400-481q-63 0-106.5-43.5T250-631q0-63 43.5-106.5T400-781q63 0 106.5 43.5T550-631q0 63-43.5 106.5T400-481ZM80-160v-94q0-35 18-63.5t50-42.5q60-27 123.18-43.5Q334.37-420 400-420q66 0 128.5 17T651-360q32 14 50.5 42.5T720-254v94H80Zm60-60h520v-34q0-16.69-9-30.34Q642-298 627-306q-54-26-110.5-40t-116.29-14q-59.79 0-117 14Q226-332 172-306q-15 8-23.5 21.66Q140-270.69 140-254v34Zm260-321q38 0 64-26t26-64q0-38-26-64t-64-26q-38 0-64 26t-26 64q0 38 26 64t64 26Zm0-90Zm0 411Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoNestWakeOnApproach;
