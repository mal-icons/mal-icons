import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-tubi",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiTubi {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.7 15.27v-0.75c0.40.55 1.110.92 1.930.92 1.48 0 2.28-0.96 2.28-2.86 0-1.71-0.89-2.86-2.23-2.86-0.85 0-1.550.35-1.980.91v-2.06h-2.67v6.71zm1.57-2.61c0 0.83-0.34 1.27-0.83 1.27-0.49 0-0.84-0.45-0.84-1.27s0.34-1.280.84-1.28c0.5 0 0.830.450.83 1.28zM6.94 9.99v3.6c0 1.240.75 1.84 1.96 1.840.96 0 1.63-0.4 2.03-1.06v0.91h2.6V9.99h-2.67v3.14c0 0.49-0.350.69-0.670.69-0.32 0-0.57-0.19-0.57-0.65V9.99Zm14.39 0H24v5.28h-2.67ZM6.55 11.14c0 0.78-0.63 1.42-1.42 1.42-0.78 0-1.42-0.63-1.42-1.41 0-0.780.64-1.41 1.42-1.410.78 0 1.420.63 1.42 1.42zM3.49 9.7v2.67c0.010.650.330.920.980.920.23 0 0.53-0.050.67-0.17v1.93c-0.490.24-0.870.38-1.530.38 0 0-0.07 0-0.18-0.01l00.01c-1.61 0-2.51-1.03-2.48-2.69v-0.47H0V9.99h0.92V8.56h2.57Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiTubi;
