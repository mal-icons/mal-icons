import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-gite",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrGite {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m21.41 9.41-2.83-2.83c-0.37-0.37-0.88-0.58-1.41-0.58H9V5c0-0.55-0.45-1-1-1s-1 0.45-1 1v1h-0.17c-0.53 0-1.040.21-1.420.59L2.59 9.41c-0.380.38-0.590.89-0.59 1.42V17c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2v-6.17c0-0.53-0.21-1.04-0.59-1.42zM14 17H4v-5h10v5zm6 0h-4v-6.17l2-2 2 2V17z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrGite;
