import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-grid-view",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrGridView {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 11h4c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2H5c-1.1 0-2 0.9-2 2v4c0 1.10.9 2 2 2zm0 10h4c1.1 0 2-0.9 2-2v-4c0-1.1-0.9-2-2-2H5c-1.1 0-2 0.9-2 2v4c0 1.10.9 2 2 2zm8-16v4c0 1.10.9 2 2 2h4c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2h-4c-1.1 0-2 0.9-2 2zm2 16h4c1.1 0 2-0.9 2-2v-4c0-1.1-0.9-2-2-2h-4c-1.1 0-2 0.9-2 2v4c0 1.10.9 2 2 2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrGridView;
