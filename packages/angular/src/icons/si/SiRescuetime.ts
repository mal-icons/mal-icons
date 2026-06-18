import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-rescuetime",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiRescuetime {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m24 7.63v8.75c0 0.6-0.48 1.09-1.09 1.09h-5.45v5.45c0 0.6-0.48 1.09-1.09 1.09h-8.74c-0.6 0-1.09-0.49-1.09-1.09v-5.45h-5.45c-0.6 0-1.09-0.48-1.09-1.09v-8.75c0-0.60.49-1.09 1.09-1.09h5.45v-5.45c0-0.60.49-1.09 1.09-1.09h8.74c0.6 0 1.090.49 1.09 1.09v5.45h5.45c0.6 0 1.090.5 1.09 1.09zm-3.32 4.34-2.19-1.650.33 1.04-4.89-0.34c0.150.30.240.640.240.99 0 0.34-0.080.67-0.210.95l4.87-0.36-0.32 1.02zm-7.580.03-0.49-8 1.020.32-1.65-2.18-1.65 2.19 1.04-0.33-0.45 8c0 0.60.49 1.09 1.09 1.090.6 0 1.09-0.49 1.09-1.09z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiRescuetime;
