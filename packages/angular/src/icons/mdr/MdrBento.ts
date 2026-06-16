import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-bento",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrBento {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16 11V5h4c1.1 0 2 0.9 2 2v4h-6zm4 8c1.1 0 2-0.9 2-2v-4h-6v6h4zM14 5v14H4c-1.1 0-2-0.9-2-2V7c0-1.10.9-2 2-2h10zm-4.5 7c0-0.83-0.67-1.5-1.5-1.5s-1.50.67-1.5 1.50.67 1.5 1.5 1.5 1.5-0.67 1.5-1.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrBento;
