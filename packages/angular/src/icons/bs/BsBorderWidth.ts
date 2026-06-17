import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-border-width",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsBorderWidth {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 3.5A0.50.5 0 0 1 0.5 3h15a0.50.5 0 0 1 0.50.5v2a0.50.5 0 0 1-0.50.5H0.5a0.50.5 0 0 1-0.5-0.5zm0 5A0.50.5 0 0 1 0.5 8h15a0.50.5 0 0 1 0.50.5v1a0.50.5 0 0 1-0.50.5H0.5a0.50.5 0 0 1-0.5-0.5zm0 4a0.50.5 0 0 1 0.5-0.5h15a0.50.5 0 0 1 0 1H0.5a0.50.5 0 0 1-0.5-0.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsBorderWidth;
