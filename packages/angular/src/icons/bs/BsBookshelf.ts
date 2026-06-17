import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-bookshelf",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsBookshelf {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.5 0a0.50.5 0 0 1 0.50.5V2h10V0.5a0.50.5 0 0 1 1 0v15a0.50.5 0 0 1-1 0V15H3v0.5a0.50.5 0 0 1-1 0V0.5a0.50.5 0 0 1 0.5-0.5M3 14h10v-3H3zm0-4h10V7H3zm0-4h10V3H3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsBookshelf;
