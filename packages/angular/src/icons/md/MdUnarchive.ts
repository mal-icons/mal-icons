import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-unarchive",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdUnarchive {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m20.54 5.23-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-0.47 0-0.880.21-1.160.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2V6.5c0-0.48-0.17-0.93-0.46-1.27zM6.24 5h11.52l0.83 1H5.42l0.82-1zM5 19V8h14v11H5zm3-5h2.55v3h2.9v-3H16l-4-4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdUnarchive;
