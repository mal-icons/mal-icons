import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-man",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrMan {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M449.78-80Q437-80 428.5-88.62 420-97.25 420-110v-250h-50q-12.75 0-21.37-8.62T340-390v-223q0-24.75 17.63-42.37T400-673h160q24.75 0 42.38 17.63T620-613v223q0 12.75-8.62 21.38T590-360h-50v250q0 12.75-8.65 21.38T509.93-80h-60.15Zm30.3-654q-30.08 0-51.58-21.42-21.5-21.42-21.5-51.5 0-30.08 21.42-51.58 21.42-21.5 51.5-21.5 30.08 0 51.58 21.42 21.5 21.42 21.5 51.5 0 30.08-21.42 51.58-21.42 21.5-51.5 21.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrMan;
