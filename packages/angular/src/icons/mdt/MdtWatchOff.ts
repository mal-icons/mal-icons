import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-watch-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtWatchOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.89 5.27 13.51 4h-3.02l-0.38 1.27c1.82-0.51 3.23-0.16 3.78 0zm-3.78 13.460.38 1.27h3.02l0.38-1.27c-1.820.51-3.230.16-3.78 0z","opacity":".3"}],["path",{"d":"M12 7c2.76 0 5 2.24 5 5 0 0.64-0.13 1.25-0.35 1.82l1.5 1.5a6.96 6.96 0 0 0-1.79-8.79L15 2H9l-0.96 3.21 2.14 2.14C10.75 7.13 11.36 7 12 7zm-1.51-3h3.02l0.38 1.27c-0.55-0.16-1.97-0.51-3.78 0L10.49 4zM2.81 2.81 1.39 4.22l4.46 4.46a6.96 6.96 0 0 0 1.79 8.79L9 22h6l0.96-3.21 3.82 3.82 1.41-1.41L2.81 2.81zM13.51 20h-3.02l-0.38-1.27c0.550.15 1.970.51 3.78 0L13.51 20zM12 17c-2.76 0-5-2.24-5-5 0-0.640.13-1.250.35-1.82l6.47 6.47c-0.570.22-1.180.35-1.820.35z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtWatchOff;
