import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-connected-tv",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssConnectedTv {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M200-320h70q-4-28-23-48t-47-22v70Zm122 0h48q0-71-49.72-120.5T200-490v48q51 0 86.5 35.66T322-320Zm100 0h48q0-55.69-21.09-105.05-21.09-49.36-57.8-86.06-36.7-36.7-86.06-57.8Q255.69-590 200-590v48q93 0 157.5 64.5T422-320Zm-92 200v-80H80v-640h800v640H630v80H330ZM140-260h680v-520H140v520Zm0 0v-520 520Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssConnectedTv;
