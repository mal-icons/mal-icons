import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-atm",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtAtm {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.5 13.5h2V15H7v-5c0-0.55-0.45-1-1-1H3c-0.55 0-1 0.45-1 1v5h1.5v-1.5zm0-3h2V12h-2v-1.5zm13.5 0h1V14h1.5v-3.51h1V15H22v-5c0-0.55-0.45-1-1-1h-4.5c-0.55 0-1 0.45-1 1v5H17v-4.5zM10.25 15h1.5v-4.5H14V9H8v1.5h2.25z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtAtm;
