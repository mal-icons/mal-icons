import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-emergency-share",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssEmergencyShare {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-80q85-80 132.5-152.2Q660-304.4 660-354q0-77.31-52-131.66Q556-540 480-540t-128 54.34Q300-431.31 300-354q0 49.6 47.5 121.8Q395-160 480-80Zm0 80Q359-103 299.5-191T240-354q0-102 69.5-174T480-600q101 0 170.5 72T720-354q0 75-59.5 163T480 0Zm0.12-310Q501-310 515.5-324.62q14.5-14.62 14.5-35.5Q530-381 515.38-395.5q-14.62-14.5-35.5-14.5Q459-410 444.5-395.38q-14.5 14.62-14.5 35.5Q430-339 444.62-324.5q14.62 14.5 35.5 14.5ZM332-669l-42-42q38-38 87.33-58.5 49.33-20.5 103.5-20.5T584.5-769.5Q634-749 672-711l-42 42q-29-29-67.76-45-38.76-16-81.24-16t-81.24 16Q361-698 332-669ZM220-782l-43-41q61-60 139.33-93.5 78.33-33.5 164.5-33.5Q567-950 646-916.5T786-823l-43 42q-53-53-120.67-81t-141.5-28Q407-890 339.5-862.5T220-782Zm260 422Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssEmergencyShare;
