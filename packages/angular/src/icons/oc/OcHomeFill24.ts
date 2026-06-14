import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-home-fill-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcHomeFill24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.97 2.59a1.5 1.5 0 0 0-1.94 0l-7.5 6.36A1.5 1.5 0 0 0 3 10.1V19.5A1.5 1.5 0 0 0 4.5 21h4.75a0.750.75 0 0 0 0.75-0.75V14h4v6.25c0 0.410.340.750.750.75h4.75a1.5 1.5 0 0 0 1.5-1.5v-9.4a1.5 1.5 0 0 0-0.53-1.14l-7.5-6.36Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcHomeFill24;
