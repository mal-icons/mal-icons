import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-personal-injury",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtPersonalInjury {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 4c1.1 0 2 0.9 2 2s-0.9 2-2 2-2-0.9-2-2 0.9-2 2-2zm-1.06 16H9.75c-0.41 0-0.75-0.34-0.75-0.75s0.34-0.750.75-0.75h1.89l-0.7 1.5zM18 20h-4.85l2.94-6.27c0.540.2 1.010.41 1.40.610.310.160.510.50.510.88V20zm-8.25 2C8.23 22 7 20.77 7 19.25s1.23-2.75 2.75-2.75h2.83l1.55-3.3c-0.66-0.13-1.37-0.2-2.13-0.2-2.37 0-4.290.73-5.48 1.34-0.320.16-0.520.5-0.520.88V22h3.75z","opacity":".3"}],["path",{"d":"M12 10c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 0.9 2 2s-0.9 2-2 2-2-0.9-2-2 0.9-2 2-2zm6.39 8.56C16.71 11.7 14.53 11 12 11s-4.710.7-6.39 1.56A2.97 2.97 0 0 0 4 15.22V22h2v-6.78c0-0.380.2-0.720.52-0.88C7.71 13.73 9.63 13 12 13c0.76 0 1.470.07 2.130.2l-1.55 3.3H9.75C8.23 16.5 7 17.73 7 19.25S8.23 22 9.75 22H18c1.1 0 2-0.9 2-2v-4.78c0-1.12-0.61-2.15-1.61-2.66zM10.94 20H9.75c-0.41 0-0.75-0.34-0.75-0.75s0.34-0.750.75-0.75h1.89l-0.7 1.5zM18 20h-4.85l2.94-6.27c0.540.2 1.010.41 1.40.610.310.160.510.50.510.88V20z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtPersonalInjury;
