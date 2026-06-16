import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-grid-goldenratio",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrGridGoldenratio {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 13h-6v-2h6c0.55 0 1-0.45 1-1s-0.45-1-1-1h-6V3c0-0.55-0.45-1-1-1s-1 0.45-1 1v6h-2V3c0-0.55-0.45-1-1-1s-1 0.45-1 1v6H3c-0.55 0-1 0.45-1 1s0.45 1 1 1h6v2H3c-0.55 0-1 0.45-1 1s0.45 1 1 1h6v6c0 0.550.45 1 1 1s1-0.45 1-1v-6h2v6c0 0.550.45 1 1 1s1-0.45 1-1v-6h6c0.55 0 1-0.45 1-1s-0.45-1-1-1zm-8 0h-2v-2h2v2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrGridGoldenratio;
