import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-gym",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgGym {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.27 9.87L16.83 4.95L18.47 3.81L21.91 8.72L20.27 9.87Z","fill":"currentColor"}],["path",{"d":"M18.39 12.41L16.67 9.95L8.48 15.69L10.2 18.14L8.56 19.29L3.97 12.74L5.61 11.59L7.33 14.05L15.52 8.31L13.8 5.86L15.44 4.71L20.03 11.26L18.39 12.41Z","fill":"currentColor"}],["path",{"d":"M20.77 7.08L22.4 5.94L21.26 4.3L19.62 5.45L20.77 7.08Z","fill":"currentColor"}],["path",{"d":"M7.17 19.05L3.73 14.13L2.09 15.28L5.53 20.19L7.17 19.05Z","fill":"currentColor"}],["path",{"d":"M4.38 18.55L2.74 19.7L1.6 18.06L3.23 16.92L4.38 18.55Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgGym;
