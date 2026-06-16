import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-auto-awesome-motion",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrAutoAwesomeMotion {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 2H4c-1.1 0-2 0.9-2 2v9c0 0.550.45 1 1 1s1-0.45 1-1V4h9c0.55 0 1-0.45 1-1s-0.45-1-1-1zm4 4H8c-1.1 0-2 0.9-2 2v9c0 0.550.45 1 1 1s1-0.45 1-1V8h9c0.55 0 1-0.45 1-1s-0.45-1-1-1zm3 4h-8c-1.1 0-2 0.9-2 2v8c0 1.10.9 2 2 2h8c1.1 0 2-0.9 2-2v-8c0-1.1-0.9-2-2-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrAutoAwesomeMotion;
