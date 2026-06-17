import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsAlt {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1 13.5a0.50.5 0 0 0 0.50.5h3.8a0.50.5 0 0 0 0.44-0.26L11 3h3.5a0.50.5 0 0 0 0-1h-3.8a0.50.5 0 0 0-0.440.26L5 13H1.5a0.50.5 0 0 0-0.50.5m10 0a0.50.5 0 0 0 0.50.5h3a0.50.5 0 0 0 0-1h-3a0.50.5 0 0 0-0.50.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsAlt;
