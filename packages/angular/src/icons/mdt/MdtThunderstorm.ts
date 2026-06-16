import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-thunderstorm",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtThunderstorm {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m17.73 9.01-1.53-0.14-0.25-1.52C15.63 5.44 13.94 4 12 4c-1.44 0-2.770.78-3.48 2.04l-0.490.87-0.990.13A3.51 3.51 0 0 0 4 10.5C4 12.43 5.57 14 7.5 14h10a2.5 2.5 0 0 0 2.5-2.5c0-1.28-0.99-2.37-2.27-2.49z","opacity":".3"}],["path",{"d":"M17.92 7.02C17.45 4.18 14.97 2 12 2 9.82 2 7.83 3.18 6.78 5.06 4.09 5.41 2 7.74 2 10.5 2 13.53 4.47 16 7.5 16h10c2.48 0 4.5-2.02 4.5-4.5a4.5 4.5 0 0 0-4.08-4.48zM17.5 14h-10C5.57 14 4 12.43 4 10.5a3.51 3.51 0 0 1 3.04-3.46l0.99-0.130.49-0.87A4 4 0 0 1 12 4c1.94 0 3.63 1.44 3.95 3.35l0.25 1.52 1.540.14c1.270.12 2.26 1.21 2.26 2.49a2.5 2.5 0 0 1-2.5 2.5zm-2.7 3-2.9 3.32 2 1L11.55 24h2.65l2.9-3.32-2-1L17.45 17zm-6 0-2.9 3.32 2 1L5.55 24H8.2l2.9-3.32-2-1L11.45 17z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtThunderstorm;
