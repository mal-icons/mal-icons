import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-authentik",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiAuthentik {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.96 9.01h-0.84V7.49h-1.23v3.66H5.72c0.340.520.540.980.54 1.15 0 0.46-1.44 3.06-3.2 3.06C0.8 15.43-0.74 12.80.37 10.86a3.06 3.06 0 0 1 2.69-1.61c1.04 0 1.970.92 2.56 1.76V6.58a3.77 3.77 0 0 1 3.77-3.77h10.84C22.31 2.81 24 4.5 24 6.58v10.85a3.77 3.77 0 0 1-3.77 3.77h-1.6V17.5h-7.64v3.69h-1.6a3.77 3.77 0 0 1-3.77-3.77v-3.41h12.11v-6.52h-1.59v0.89h-0.84v-0.89H13.96v1.52Zm-9.96 1.85c-0.66-0.7-1.58-0.54-2.21 0-2.1 2.05 1.34 5.55 3.3 1.45a5.4 5.4 0 0 0-1.09-1.45Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiAuthentik;
