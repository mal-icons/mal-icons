import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-filen",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiFilen {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0C5.39 0 0 5.39 0 12s5.39 12 12 12 12-5.39 12-12S18.61 0 12 0zm0 1.53a10.47 10.47 0 0 1 6.38 2.2v3.92H8.05a0.750.75 0 0 0-0.750.75v2.37c-0.420.26-0.690.72-0.7 1.22A1.46 1.46 0 1 0 8.83 10.74V9.17h10.33a0.750.75 0 0 0 0.75-0.75V5.19A10.47 10.47 0 0 1 22.47 12l-0.010.15h-3.32a0.750.75 0 0 0-0.750.75v7.37a10.47 10.47 0 0 1-1.96 1.19V14.12c0.43-0.260.69-0.720.7-1.22a1.46 1.46 0 0 0-2.93 0c0.010.50.280.960.7 1.22v7.92a10.47 10.47 0 0 1-2.890.43 10.46 10.46 0 0 1-3.19-0.5v-6.02h1.83c0.260.430.720.69 1.220.7a1.46 1.46 0 0 0 0-2.93 1.46 1.46 0 0 0-1.220.7H8.03a0.750.75 0 0 0-0.750.75v6.18A10.47 10.47 0 0 1 4.8 19.58V5.25h8.31c0.260.430.720.69 1.220.7a1.46 1.46 0 0 0 0-2.93 1.46 1.46 0 0 0-1.220.7H5.62A10.47 10.47 0 0 1 12 1.53zM3.27 6.27v11.47A10.47 10.47 0 0 1 1.53 12c0.01-2.040.62-4.03 1.74-5.73zm16.64 7.41h2.42a10.47 10.47 0 0 1-2.42 5.13z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiFilen;
