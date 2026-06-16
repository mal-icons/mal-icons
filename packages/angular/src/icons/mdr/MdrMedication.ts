import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-medication",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrMedication {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 3H7c-0.55 0-1 0.45-1 1s0.45 1 1 1h10c0.55 0 1-0.45 1-1s-0.45-1-1-1zm0 3H7c-1.1 0-2 0.9-2 2v11c0 1.10.9 2 2 2h10c1.1 0 2-0.9 2-2V8c0-1.1-0.9-2-2-2zm-2.5 9h-1v1c0 0.83-0.67 1.5-1.5 1.5s-1.5-0.67-1.5-1.5v-1h-1c-0.83 0-1.5-0.67-1.5-1.5S8.67 12 9.5 12h1v-1c0-0.830.67-1.5 1.5-1.5s1.50.67 1.5 1.5v1h1c0.83 0 1.50.67 1.5 1.5s-0.67 1.5-1.5 1.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrMedication;
