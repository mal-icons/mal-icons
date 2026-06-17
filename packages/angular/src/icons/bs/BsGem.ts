import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-gem",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsGem {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.10.7a0.50.5 0 0 1 0.4-0.2h9a0.50.5 0 0 1 0.40.2l2.98 3.97c0.150.190.160.450.010.64L8.4 15.3a0.50.5 0 0 1-0.8 0L0.1 5.3a0.50.5 0 0 1 0-0.6zm11.39 3.79-1.81-2.41-0.78 2.41zm-3.6300.96-2.99H4.19l0.96 3zM5.47 5.5 8 13.37l2.53-7.88zm-1.37-1-0.78-2.42-1.82 2.42zM1.5 5.5l5.11 6.82-2.19-6.82zm7.89 6.82 5.12-6.83-2.930z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsGem;
