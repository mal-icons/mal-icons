import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-option",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsOption {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1 2.5a0.50.5 0 0 1 0.5-0.5h3.8a0.50.5 0 0 1 0.440.26L11 13h3.5a0.50.5 0 0 1 0 1h-3.8a0.50.5 0 0 1-0.44-0.26L5 3H1.5a0.50.5 0 0 1-0.5-0.5m10 0a0.50.5 0 0 1 0.5-0.5h3a0.50.5 0 0 1 0 1h-3a0.50.5 0 0 1-0.5-0.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsOption;
