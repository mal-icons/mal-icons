import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-man-2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrMan2 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 7h-4c-1.1 0-2 0.9-2 2v5c0 0.550.45 1 1 1h1.5v5.5c0 0.830.67 1.5 1.5 1.5s1.5-0.67 1.5-1.5V15H15c0.55 0 1-0.45 1-1V9c0-1.1-0.9-2-2-2z"}],["circle",{"cx":"12","cy":"4","r":"2"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrMan2;
