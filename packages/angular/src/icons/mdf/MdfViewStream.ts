import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-view-stream",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfViewStream {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 17v-2c0-1.10.9-2 2-2h14c1.1 0 2 0.9 2 2v2c0 1.1-0.9 2-2 2H5c-1.1 0-2-0.9-2-2zM3 7v2c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2V7c0-1.1-0.9-2-2-2H5c-1.1 0-2 0.9-2 2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfViewStream;
