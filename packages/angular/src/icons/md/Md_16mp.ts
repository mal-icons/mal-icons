import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-16mp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class Md_16mp {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-0.55-0.45-1-1-1H7c-0.55 0-1 0.45-1 1v5h1.5V14zm6 4.5H15V17h2c0.55 0 1-0.45 1-1v-2.5c0-0.55-0.45-1-1-1h-3.5v6zM15 14h1.5v1.5H15V14z"}],["path",{"d":"M19 3H5c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2zm0 16H5V5h14v14z"}],["path",{"d":"M13 11.5h2.5c0.55 0 1-0.45 1-1V9c0-0.55-0.45-1-1-1h-2V7h3V5.5H13c-0.55 0-1 0.45-1 1v4c0 0.550.45 1 1 1zm0.5-2.5H15v1.5h-1.5V9zm-5 2.5H10v-6H7V7h1.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default Md_16mp;
