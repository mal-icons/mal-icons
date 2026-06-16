import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-water-ec",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrWaterEc {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M450-410v147q0 11 10.5 14.5T477-254l129-193q5-8 0.7-15.5Q602.39-470 593-470h-83v-147q0-11-10.5-14.5T483-626L354-433q-5 8-0.7 15.5Q357.61-410 367-410h83Zm30 330q-127 0-223.5-88.5T160-408q0-96 73.5-208.5T457-860q4.58-4.09 10.68-6.54Q473.79-869 479.9-869q6.11 0 12.29 2.46Q498.36-864.09 503-860q150 131 223.5 243.4Q800-504.2 800-408q0 151-96.5 239.5T480-80Zm0-60q110 0 185-76t75-192q0-79-66.5-179.5T480-800Q353-688 286.5-587.5T220-408q0 116 75 192t185 76Zm0-231Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrWaterEc;
