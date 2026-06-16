import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-view-stream",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtViewStream {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 17H5v-4h14v4zM5 11V7h14v4H5z","opacity":".3"}],["path",{"d":"M3 7v10c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2V7c0-1.1-0.9-2-2-2H5c-1.1 0-2 0.9-2 2zm16 10H5v-4h14v4zM5 11V7h14v4H5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtViewStream;
