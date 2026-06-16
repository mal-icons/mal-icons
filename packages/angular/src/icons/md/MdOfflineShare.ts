import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-offline-share",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdOfflineShare {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 5H4v16c0 1.10.9 2 2 2h10v-2H6V5z"}],["path",{"d":"M18 1h-8c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2h8c1.1 0 2-0.9 2-2V3c0-1.1-0.9-2-2-2zm0 16h-8v-1h8v1zm0-3h-8V6h8v8zm0-10h-8V3h8v1z"}],["path",{"d":"M12.5 10.25h1.63l-0.690.69L14.5 12 17 9.5 14.5 7l-1.06 1.060.690.69H12c-0.55 0-1 0.45-1 1V12h1.5v-1.75z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdOfflineShare;
