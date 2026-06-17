import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-list-stars",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsListStars {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M5 11.5a0.50.5 0 0 1 0.5-0.5h9a0.50.5 0 0 1 0 1h-9a0.50.5 0 0 1-0.5-0.5m0-4a0.50.5 0 0 1 0.5-0.5h9a0.50.5 0 0 1 0 1h-9a0.50.5 0 0 1-0.5-0.5m0-4a0.50.5 0 0 1 0.5-0.5h9a0.50.5 0 0 1 0 1h-9a0.50.5 0 0 1-0.5-0.5"}],["path",{"d":"M2.24 2.19a0.270.27 0 0 1 0.52 0l0.160.53c0.040.120.140.190.260.19h0.55c0.26 0 0.370.330.160.49l-0.470.36a0.280.28 0 0 0-0.090.3l0.170.57c0.080.26-0.210.46-0.420.3l-0.42-0.32a0.270.27 0 0 0-0.33 0l-0.420.32c-0.210.16-0.5-0.04-0.42-0.3l0.17-0.57a0.280.28 0 0 0-0.09-0.3l-0.47-0.36c-0.21-0.16-0.09-0.490.16-0.49h0.55a0.270.27 0 0 0 0.26-0.19zm0 4a0.270.27 0 0 1 0.52 0l0.160.53c0.040.120.140.190.260.19h0.55c0.26 0 0.370.330.160.49l-0.470.36a0.280.28 0 0 0-0.090.3l0.170.57c0.080.26-0.210.46-0.420.3l-0.42-0.32a0.270.27 0 0 0-0.33 0l-0.420.32c-0.210.16-0.5-0.04-0.42-0.3l0.17-0.57a0.280.28 0 0 0-0.09-0.3l-0.47-0.36c-0.21-0.16-0.09-0.490.16-0.49h0.55a0.270.27 0 0 0 0.26-0.19zm0 4a0.270.27 0 0 1 0.52 0l0.160.53c0.040.120.140.190.260.19h0.55c0.26 0 0.370.330.160.49l-0.470.36a0.280.28 0 0 0-0.090.3l0.170.57c0.080.26-0.210.46-0.420.3l-0.42-0.32a0.270.27 0 0 0-0.33 0l-0.420.32c-0.210.16-0.5-0.04-0.42-0.3l0.17-0.57a0.280.28 0 0 0-0.09-0.3l-0.47-0.36c-0.21-0.16-0.09-0.490.16-0.49h0.55a0.270.27 0 0 0 0.26-0.19z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsListStars;
