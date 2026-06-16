import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-24mp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class Md_24mp {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-0.55-0.45-1-1-1H7c-0.55 0-1 0.45-1 1v5h1.5V14zm9.5-1.5h-3.5v6H15V17h2c0.55 0 1-0.45 1-1v-2.5c0-0.55-0.45-1-1-1zm-0.5 3H15V14h1.5v1.5z"}],["path",{"d":"M19 3H5c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2zm0 16H5V5h14v14z"}],["path",{"d":"M11 10H8V9h2c0.55 0 1-0.45 1-1V6.5c0-0.55-0.45-1-1-1H6.5V7h3v1h-2c-0.55 0-1 0.45-1 1v2.5H11V10zm5 1.5h1.5V10h1V8.5h-1v-3H16v3h-1.5v-3H13V10h3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default Md_24mp;
