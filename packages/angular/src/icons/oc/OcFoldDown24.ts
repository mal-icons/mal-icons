import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-fold-down-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcFoldDown24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 19a0.750.75 0 0 1-0.53-0.22l-3.25-3.25a0.750.75 0 0 1 0.33-1.270.750.75 0 0 1 0.730.22L12 17.19l2.72-2.72a0.750.75 0 0 1 1.270.330.750.75 0 0 1-0.210.73l-3.25 3.25A0.750.75 0 0 1 12 19Z"}],["path",{"d":"M12 18a0.750.75 0 0 1-0.75-0.75v-7.5a0.750.75 0 0 1 1.5 0v7.5A0.750.75 0 0 1 12 18ZM2.75 6a0.750.75 0 0 1 0.75-0.75h1a0.750.75 0 0 1 0 1.5h-1A0.750.75 0 0 1 2.75 6Zm4 0a0.750.75 0 0 1 0.75-0.75h1a0.750.75 0 0 1 0 1.5h-1A0.750.75 0 0 1 6.75 6Zm4 0a0.750.75 0 0 1 0.75-0.75h1a0.750.75 0 0 1 0 1.5h-1a0.750.75 0 0 1-0.75-0.75Zm4 0a0.750.75 0 0 1 0.75-0.75h1a0.750.75 0 0 1 0 1.5h-1a0.750.75 0 0 1-0.75-0.75Zm4 0a0.750.75 0 0 1 0.75-0.75h1a0.750.75 0 0 1 0 1.5h-1a0.750.75 0 0 1-0.75-0.75Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcFoldDown24;
