import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-perplexity-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiPerplexityLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.17 3.26L5.5 1.74V4V7.5H4H3V8.5V16V17H4H5.5V20V22.26L7.17 20.74L11 17.26V22H13V17.26L16.83 20.74L18.5 22.26V20V17H20H21V16V8.5V7.5H20H18.5V4V1.74L16.83 3.26L13 6.74V2H11V6.74L7.17 3.26ZM16.5 7.5H15.14L16.5 6.26V7.5ZM8.86 7.5H7.5V6.26L8.86 7.5ZM9.96 9.5L5.83 13.26L5.5 13.56V14V15H5V9.5H9.96ZM14.04 9.5H19V15H18.5V14V13.56L18.17 13.26L14.04 9.5ZM7.5 14.44L11 11.26V14.56L7.5 17.74V14.44ZM13 11.26L16.5 14.44V17.74L13 14.56V11.26Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiPerplexityLine;
