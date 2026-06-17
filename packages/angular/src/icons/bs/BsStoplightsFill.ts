import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-stoplights-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsStoplightsFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M6 0a2 2 0 0 0-2 2H2c0.170.50.8 1.6 2 2v2H2c0.170.50.8 1.6 2 2v2H2c0.170.50.8 1.6 2 2v1a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-1c1.2-0.4 1.83-1.5 2-2h-2V8c1.2-0.4 1.83-1.5 2-2h-2V4c1.2-0.4 1.83-1.5 2-2h-2a2 2 0 0 0-2-2zm3.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M8 13a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsStoplightsFill;
