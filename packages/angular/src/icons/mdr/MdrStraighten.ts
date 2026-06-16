import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-straighten",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrStraighten {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 6H3c-1.1 0-2 0.9-2 2v8c0 1.10.9 2 2 2h18c1.1 0 2-0.9 2-2V8c0-1.1-0.9-2-2-2zm-1 10H4c-0.55 0-1-0.45-1-1V9c0-0.550.45-1 1-1h1v3c0 0.550.45 1 1 1s1-0.45 1-1V8h2v3c0 0.550.45 1 1 1s1-0.45 1-1V8h2v3c0 0.550.45 1 1 1s1-0.45 1-1V8h2v3c0 0.550.45 1 1 1s1-0.45 1-1V8h1c0.55 0 1 0.45 1 1v6c0 0.55-0.45 1-1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrStraighten;
