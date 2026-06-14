import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-fold-up-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcFoldUp24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.47 5.22a0.750.75 0 0 1 1.06 0l3.25 3.25a0.750.75 0 0 1-0.02 1.040.750.75 0 0 1-1.040.02L12 6.81 9.28 9.53a0.750.75 0 0 1-1.04-0.020.750.75 0 0 1-0.02-1.04Z"}],["path",{"d":"M12 5.5a0.750.75 0 0 1 0.750.75v8a0.750.75 0 0 1-1.5 0v-8A0.750.75 0 0 1 12 5.5ZM2.75 18a0.750.75 0 0 1 0.75-0.75h1a0.750.75 0 0 1 0 1.5h-1a0.750.75 0 0 1-0.75-0.75Zm4 0a0.750.75 0 0 1 0.75-0.75h1a0.750.75 0 0 1 0 1.5h-1a0.750.75 0 0 1-0.75-0.75Zm4 0a0.750.75 0 0 1 0.75-0.75h1a0.750.75 0 0 1 0 1.5h-1a0.750.75 0 0 1-0.75-0.75Zm4 0a0.750.75 0 0 1 0.75-0.75h1a0.750.75 0 0 1 0 1.5h-1a0.750.75 0 0 1-0.75-0.75Zm4 0a0.750.75 0 0 1 0.75-0.75h1a0.750.75 0 0 1 0 1.5h-1a0.750.75 0 0 1-0.75-0.75Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcFoldUp24;
