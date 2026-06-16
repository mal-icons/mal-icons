import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-exit-to-app",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrExitToApp {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.79 16.29c0.390.39 1.020.39 1.41 0l3.59-3.59a11 0 0 0 0-1.41L12.2 7.7a11 0 1 0-1.41 1.41L12.67 11H4c-0.55 0-1 0.45-1 1s0.45 1 1 1h8.67l-1.88 1.88c-0.390.39-0.38 1.03 0 1.41zM19 3H5a2 2 0 0 0-2 2v3c0 0.550.45 1 1 1s1-0.45 1-1V6c0-0.550.45-1 1-1h12c0.55 0 1 0.45 1 1v12c0 0.55-0.45 1-1 1H6c-0.55 0-1-0.45-1-1v-2c0-0.55-0.45-1-1-1s-1 0.45-1 1v3c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrExitToApp;
