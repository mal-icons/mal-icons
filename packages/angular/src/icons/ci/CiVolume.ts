import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-volume",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiVolume {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.85,20.93a1.56,1.56,0,0,1-0.78-0.21l-4.16-2.4a3.77,3.77,0,0,0-1.88-0.5H7.21a2.63,2.63,0,0,1-2.63-2.63V8.81A2.63,2.63,0,0,1,7.21,6.18h3.82a3.75,3.75,0,0,0,1.88-0.5l4.16-2.4a1.56,1.56,0,0,1,2.35,1.35V19.37a1.57,1.57,0,0,1-1.56,1.57ZM7.21,7.18A1.63,1.63,0,0,0,5.59,8.81v6.38a1.63,1.63,0,0,0,1.63,1.63h3.82a4.76,4.76,0,0,1,2.380.64l4.16,2.4a0.540.54,0,0,0,0.56,0,0.550.55,0,0,0,0.28-0.49V4.63a0.560.56,0,0,0-0.85-0.49l-4.16,2.4a4.75,4.75,0,0,1-2.380.64Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiVolume;
