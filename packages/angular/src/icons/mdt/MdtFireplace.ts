import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-fireplace",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtFireplace {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 20h2v-2h2.23c-0.75-0.93-1.2-2.04-1.23-3-0.02-0.53-0.73-4.43 6-8 0 0-0.8 2.61 2.15 4.630.760.52 1.85 1.48 1.85 3.37 0 1.13-0.39 2.16-1.02 3H18v2h2V4H4v16z","opacity":".3"}],["path",{"d":"M12.01 12.46c-0.150.42-0.150.82-0.08 1.280.10.550.33 1.040.2 1.6-0.130.59-0.77 1.38-1.53 1.63 1.28 1.05 3.20.37 3.39-1.320.17-1.54-1.44-1.98-1.98-3.19z"}],["path",{"d":"M2 2v20h20V2H2zm10 16c-1.58 0-2.97-1.88-3-3.06 0-0.05-0.01-0.13-0.01-0.22-0.13-1.73 1-3.2 2.47-4.370.47 1.01 1.27 2.03 2.57 2.920.580.420.970.860.97 1.73 0 1.65-1.35 3-3 3zm8 2h-2v-2h-2.02A4.98 4.98 0 0 0 17 15c0-1.89-1.09-2.85-1.85-3.37C12.2 9.61 13 7 13 7c-6.73 3.57-6.02 7.47-6 8 0.030.960.49 2.07 1.23 3H6v2H4V4h16v16z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtFireplace;
