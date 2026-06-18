import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-skull",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsSkull {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 2C5.51 2 2 6.64 2 11c0 2.13 1.01 3.98 3 5.51V21h3v-3h2v3h4v-3h2v3h3v-4.49c1.99-1.53 3-3.38 3-5.51 0-4.36-3.5-9-10-9zM8 13c-1.12 0-2-1.1-2-2.5S6.88 8 8 8s2 1.1 2 2.5S9.12 13 8 13zm8 0c-1.12 0-2-1.1-2-2.5S14.88 8 16 8s2 1.1 2 2.5-0.88 2.5-2 2.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsSkull;
