import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-tonality",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdTonality {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-0.49-7-3.85-7-7.93s3.05-7.44 7-7.93v15.86zm2-15.86c1.030.13 2 0.45 2.870.93H13v-0.93zM13 7h5.24c0.250.310.480.650.68 1H13V7zm0 3h6.74c0.080.330.150.660.19 1H13v-1zm0 9.93V19h2.87c-0.870.48-1.840.8-2.870.93zM18.24 17H13v-1h5.92c-0.20.35-0.430.69-0.68 1zm1.5-3H13v-1h6.93c-0.040.34-0.110.67-0.19 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdTonality;
