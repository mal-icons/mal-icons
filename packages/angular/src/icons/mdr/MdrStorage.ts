import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-storage",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrStorage {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 20h16c1.1 0 2-0.9 2-2s-0.9-2-2-2H4c-1.1 0-2 0.9-2 2s0.9 2 2 2zm0-3h2v2H4v-2zM2 6c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2s-0.9-2-2-2H4c-1.1 0-2 0.9-2 2zm4 1H4V5h2v2zm-2 7h16c1.1 0 2-0.9 2-2s-0.9-2-2-2H4c-1.1 0-2 0.9-2 2s0.9 2 2 2zm0-3h2v2H4v-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrStorage;
