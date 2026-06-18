import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-tildapublishing",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiTildapublishing {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm0 0.78C18.190.78 23.23 5.81 23.23 12c0 6.19-5.03 11.23-11.22 11.23C5.81 23.230.78 18.190.78 12 0.78 5.81 5.810.78 12 0.78zM8.9 6.58c-1.36 0-2.52 1.16-2.52 3.29l1.350.19c0.19-1.350.58-1.93 1.35-1.930.78 0 1.170.19 2.520.97 1.350.78 1.740.97 3.10.97s2.71-0.97 2.52-3.29H15.87c0 1.16-0.38 1.75-1.16 1.75-0.78 0-1.17-0.19-2.71-0.97s-1.74-0.97-3.1-0.97zm2.13 3.48v8.9h1.55v-8.32l-1.55-0.58z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiTildapublishing;
